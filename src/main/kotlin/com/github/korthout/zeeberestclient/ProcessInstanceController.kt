package com.github.korthout.zeeberestclient

import com.fasterxml.jackson.annotation.JsonCreator
import io.camunda.zeebe.client.api.command.CreateProcessInstanceCommandStep1.CreateProcessInstanceCommandStep3
import io.camunda.zeebe.client.api.response.ProcessInstanceEvent
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/process-instances")
class ProcessInstanceController {

  @Autowired lateinit var client: ZeebeClientLifecycle

  /** Create a new Process Instance. */
  @PostMapping
  fun createProcessInstance(
    @RequestBody body: CreateProcessInstanceRequest
  ): ResponseEntity<Response<ProcessInstanceEvent>> =
    when {
      !client.isRunning ->
        ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            Response(
              "Unable to connect to Zeebe cluster." +
                " Please try again, or check the configuration settings."))
      body.bpmnProcessId != null ->
        send(
          client
            .newCreateInstanceCommand()
            .bpmnProcessId(body.bpmnProcessId)
            .latestVersion()
            .variables(body.variables))
      body.processDefinitionKey != null ->
        send(
          client
            .newCreateInstanceCommand()
            .processDefinitionKey(body.processDefinitionKey)
            .variables(body.variables))
      else ->
        ResponseEntity.badRequest()
          .body(
            Response(
              "Expected body to contain either `bpmnProcessId` or `processDefinitionKey`, but both are null."))
    }

  fun send(
    command: CreateProcessInstanceCommandStep3
  ): ResponseEntity<Response<ProcessInstanceEvent>> =
    command
      .send()
      .thenApply { ResponseEntity.ok(Response(it)) }
      .exceptionally { ResponseEntity.badRequest().body(Response(it.cause.toString())) }
      .toCompletableFuture()
      .join()

  data class CreateProcessInstanceRequest
  @JsonCreator
  constructor(
    val bpmnProcessId: String?,
    val processDefinitionKey: Long?,
    val variables: Map<String, Any>?
  )

  data class Response<T>(val data: T?, val error: String?) {
    constructor(data: T) : this(data, null)
    constructor(error: String) : this(null, error)
  }
}
