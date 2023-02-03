package com.github.korthout.camundarestapi

import com.blueanvil.toDuration
import com.github.korthout.camundarestapi.apis.JobsApi
import com.github.korthout.camundarestapi.models.*
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import java.time.Duration
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
class JobController : JobsApi {

  @Autowired lateinit var client: ZeebeClientLifecycle

  override fun activateJobs(
    type: String,
    maxJobsToActivate: Int,
    worker: String,
    jobTimeout: String,
    fetchVariables: List<String>?
  ): ResponseEntity<ActivatedJobsResponse> =
    when {
      !client.isRunning ->
        ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            ActivatedJobsResponse(
              error =
                "Unable to connect to Zeebe cluster." +
                  " Please try again, or check the configuration settings."))
      else ->
        client
          .newActivateJobsCommand()
          .jobType(type)
          .maxJobsToActivate(maxJobsToActivate)
          .workerName(worker)
          .timeout(jobTimeout.toDuration())
          .fetchVariables(fetchVariables ?: emptyList())
          .send()
          .thenApply { response ->
            ResponseEntity.ok(
              ActivatedJobsResponse(
                ActivatedJobsResponseData(
                  response.jobs.map {
                    Job(
                      key = it.key,
                      status = Job.Status.activated,
                      type = it.type,
                      processInstanceKey = it.processInstanceKey,
                      bpmnProcessId = it.bpmnProcessId,
                      processDefinitionVersion = it.processDefinitionVersion,
                      processDefinitionKey = it.processDefinitionKey,
                      elementId = it.elementId,
                      elementInstanceKey = it.elementInstanceKey,
                      customHeaders = it.customHeaders,
                      worker = it.worker,
                      retries = it.retries,
                      deadline = it.deadline,
                      variables = it.variablesAsMap)
                  })))
          }
          .exceptionally {
            ResponseEntity.badRequest().body(ActivatedJobsResponse(error = it.cause.toString()))
          }
          .toCompletableFuture()
          .join()
    }

  override fun updateJob(key: Long, body: UpdateJobRequest): ResponseEntity<UpdateJobResponse> =
    when {
      !client.isRunning ->
        ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            UpdateJobResponse(
              error =
                "Unable to connect to Zeebe cluster." +
                  " Please try again, or check the configuration settings."))
      else ->
        when (body.status) {
          "completed" ->
            client
              .newCompleteCommand(key)
              .variables(body.variables ?: emptyMap())
              .send()
              .thenApply { ResponseEntity.noContent().build<UpdateJobResponse>() }
              .exceptionally {
                ResponseEntity.badRequest().body(UpdateJobResponse(error = it.cause.toString()))
              }
              .toCompletableFuture()
              .join()
          "failed" -> processFailJobRequest(key, body)
          "error_thrown" -> processThrowErrorRequest(key, body)
          else ->
            ResponseEntity.badRequest()
              .body(
                UpdateJobResponse(
                  error =
                    """Expected body property `status` to be one of
                      | `[completed,failed,error_thrown]`,
                      | but it's `${body.status}`."""
                      .trimMargin()
                      .replace(System.lineSeparator(), "")))
        }
    }

  fun processFailJobRequest(
    key: Long,
    request: UpdateJobRequest
  ): ResponseEntity<UpdateJobResponse> =
    if (request.retries != null) {
      client
        .newFailCommand(key)
        .retries(request.retries)
        .retryBackoff(request.retryBackoff?.toDuration() ?: Duration.ZERO)
        .errorMessage(request.errorMessage ?: "")
        .send()
        .thenApply { ResponseEntity.noContent().build<UpdateJobResponse>() }
        .exceptionally {
          ResponseEntity.badRequest().body(UpdateJobResponse(error = it.cause.toString()))
        }
        .toCompletableFuture()
        .join()
    } else {
      ResponseEntity.badRequest()
        .body(
          UpdateJobResponse(
            error = "Expected body property `retries` to be provided, but it's null or undefined."))
    }

  fun processThrowErrorRequest(
    key: Long,
    request: UpdateJobRequest
  ): ResponseEntity<UpdateJobResponse> =
    if (request.errorCode != null) {
      client
        .newThrowErrorCommand(key)
        .errorCode(request.errorCode)
        .errorMessage(request.errorMessage ?: "")
        .send()
        .thenApply { ResponseEntity.noContent().build<UpdateJobResponse>() }
        .exceptionally {
          ResponseEntity.badRequest().body(UpdateJobResponse(error = it.cause.toString()))
        }
        .toCompletableFuture()
        .join()
    } else {
      ResponseEntity.badRequest()
        .body(
          UpdateJobResponse(
            error =
              "Expected body property `errorCode` to be provided, but it's null or undefined."))
    }
}
