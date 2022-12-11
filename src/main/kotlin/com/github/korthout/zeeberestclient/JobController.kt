package com.github.korthout.zeeberestclient

import com.blueanvil.toDuration
import io.camunda.zeebe.client.api.command.ActivateJobsCommandStep1.ActivateJobsCommandStep3
import io.camunda.zeebe.client.api.response.ActivateJobsResponse
import io.camunda.zeebe.client.api.response.ActivatedJob
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

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
        send(
          client
            .newActivateJobsCommand()
            .jobType(type)
            .maxJobsToActivate(maxJobsToActivate)
            .workerName(worker)
            .timeout(timeout.toDuration())
            .fetchVariables(fetchVariables))
    }

  fun send(command: ActivateJobsCommandStep3): ResponseEntity<Response<ActivatedJobs>> =
    command
      .send()
      .thenApply { ResponseEntity.ok(Response(ActivatedJobs(it))) }
      .exceptionally { ResponseEntity.badRequest().body(Response(it.cause.toString())) }
      .toCompletableFuture()
      .join()

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
}
