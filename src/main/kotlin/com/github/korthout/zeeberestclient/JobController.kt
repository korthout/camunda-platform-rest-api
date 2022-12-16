package com.github.korthout.zeeberestclient

import com.blueanvil.toDuration
import com.fasterxml.jackson.annotation.JsonCreator
import com.fasterxml.jackson.annotation.JsonProperty
import io.camunda.zeebe.client.api.response.ActivateJobsResponse
import io.camunda.zeebe.client.api.response.ActivatedJob
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.time.Duration

@RestController
@RequestMapping("/jobs")
class JobController {

  @Autowired lateinit var client: ZeebeClientLifecycle

  /** Activate Jobs of a specific type. */
  @GetMapping
  fun activateJobs(
    @RequestParam("type", required = true) type: String,
    @RequestParam("maxJobsToActivate", defaultValue = "32") maxJobsToActivate: Int,
    @RequestParam("worker", defaultValue = "default") worker: String,
    @RequestParam("jobTimeout", defaultValue = "5m") timeout: String,
    @RequestParam("fetchVariables", defaultValue = "[]") fetchVariables: List<String>
  ): ResponseEntity<Response<ActivatedJobs>> =
    when {
      !client.isRunning ->
        ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            Response(
              "Unable to connect to Zeebe cluster." +
                " Please try again, or check the configuration settings."))
      else ->
        client
          .newActivateJobsCommand()
          .jobType(type)
          .maxJobsToActivate(maxJobsToActivate)
          .workerName(worker)
          .timeout(timeout.toDuration())
          .fetchVariables(fetchVariables)
          .send()
          .thenApply { ResponseEntity.ok(Response(ActivatedJobs(it))) }
          .exceptionally { ResponseEntity.badRequest().body(Response(it.cause.toString())) }
          .toCompletableFuture()
          .join()
    }

  class ActivatedJobs(activatedJobs: ActivateJobsResponse) {
    // transform the response, so it better fits to JSON (specifically for variables/variablesMap)
    val jobs = activatedJobs.jobs.map { Job(it, "activated") }
  }

  class Job(activatedJob: ActivatedJob, val status: String) {
    val key = activatedJob.key
    val type = activatedJob.type
    val processInstanceKey = activatedJob.processInstanceKey
    val bpmnProcessId = activatedJob.bpmnProcessId
    val processDefinitionVersion = activatedJob.processDefinitionVersion
    val processDefinitionKey = activatedJob.processDefinitionKey
    val elementId = activatedJob.elementId
    val elementInstanceKey = activatedJob.elementInstanceKey
    val customHeaders = activatedJob.customHeaders
    val worker = activatedJob.worker
    val retries = activatedJob.retries
    val deadline = activatedJob.deadline
    val variables = activatedJob.variablesAsMap
  }

  /** Update a job. */
  @PatchMapping("/{key}")
  fun updateJob(
    @PathVariable("key") key: Long,
    @RequestBody body: UpdateJobRequest
  ): ResponseEntity<Response<Nothing>> =
    when {
      !client.isRunning ->
        ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            Response(
              "Unable to connect to Zeebe cluster." +
                " Please try again, or check the configuration settings."))
      else ->
        when (body.status) {
          "completed" ->
            client
              .newCompleteCommand(key)
              .variables(body.variables ?: emptyMap())
              .send()
              .thenApply { ResponseEntity.noContent().build<Response<Nothing>>() }
              .exceptionally { ResponseEntity.badRequest().body(Response(it.cause.toString())) }
              .toCompletableFuture()
              .join()
          "failed" -> processFailJobRequest(key, body)
          else ->
            ResponseEntity.badRequest()
              .body(
                Response(
                  "Expected body property `status` to be one of `[completed]`," +
                    " but it's `${body.status}`."))
        }
    }

  fun processFailJobRequest(
    key: Long,
    request: UpdateJobRequest
  ): ResponseEntity<Response<Nothing>> =
    if (request.retries != null) {
      client
        .newFailCommand(key)
        .retries(request.retries)
        .retryBackoff(request.retryBackOff?.toDuration() ?: Duration.ZERO)
        .errorMessage(request.errorMessage ?: "")
        .send()
        .thenApply { ResponseEntity.noContent().build<Response<Nothing>>() }
        .exceptionally { ResponseEntity.badRequest().body(Response(it.cause.toString())) }
        .toCompletableFuture()
        .join()
    } else {
      ResponseEntity.badRequest()
        .body(
          Response("Expected body property `retries` to be provided, but it's null or undefined."))
    }

  data class UpdateJobRequest
  @JsonCreator
  constructor(
    @JsonProperty("status", required = true) val status: String,
    @JsonProperty("retries", required = false) val retries: Int?,
    @JsonProperty("retryBackOff", required = false) val retryBackOff: String?,
    @JsonProperty("errorMessage", required = false) val errorMessage: String?,
    @JsonProperty("variables", defaultValue = "{}") val variables: Map<String, Any>?
  )
}
