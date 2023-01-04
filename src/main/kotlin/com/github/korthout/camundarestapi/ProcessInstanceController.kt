package com.github.korthout.camundarestapi

import com.github.korthout.camundarestapi.apis.ProcessInstancesApi
import com.github.korthout.camundarestapi.models.CreateProcessInstanceRequest
import com.github.korthout.camundarestapi.models.ProcessInstance
import com.github.korthout.camundarestapi.models.ProcessInstanceResponse
import io.camunda.zeebe.client.api.command.CreateProcessInstanceCommandStep1.CreateProcessInstanceCommandStep3
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
class ProcessInstanceController : ProcessInstancesApi {

  @Autowired lateinit var client: ZeebeClientLifecycle

  override fun createProcessInstance(
    createProcessInstanceRequest: CreateProcessInstanceRequest
  ): ResponseEntity<ProcessInstanceResponse> =
    when {
      !client.isRunning ->
        ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            ProcessInstanceResponse(
              error =
                "Unable to connect to Zeebe cluster." +
                  " Please try again, or check the configuration settings."))
      createProcessInstanceRequest.bpmnProcessId != null &&
        createProcessInstanceRequest.processDefinitionKey != null ->
        ResponseEntity.badRequest()
          .body(
            ProcessInstanceResponse(
              error =
                "Expected body to contain either `bpmnProcessId` or `processDefinitionKey`, but found both."))
      createProcessInstanceRequest.bpmnProcessId != null ->
        send(
          client
            .newCreateInstanceCommand()
            .bpmnProcessId(createProcessInstanceRequest.bpmnProcessId)
            .latestVersion()
            .variables(createProcessInstanceRequest.variables))
      createProcessInstanceRequest.processDefinitionKey != null ->
        send(
          client
            .newCreateInstanceCommand()
            .processDefinitionKey(createProcessInstanceRequest.processDefinitionKey)
            .variables(createProcessInstanceRequest.variables))
      else ->
        ResponseEntity.badRequest()
          .body(
            ProcessInstanceResponse(
              error =
                "Expected body to contain either `bpmnProcessId` or `processDefinitionKey`, but both are null."))
    }

  fun send(command: CreateProcessInstanceCommandStep3): ResponseEntity<ProcessInstanceResponse> =
    command
      .send()
      .thenApply {
        ResponseEntity.ok(
          ProcessInstanceResponse(
            ProcessInstance(
              it.processDefinitionKey, it.bpmnProcessId, it.version, it.processInstanceKey)))
      }
      .exceptionally {
        ResponseEntity.badRequest().body(ProcessInstanceResponse(error = it.cause.toString()))
      }
      .toCompletableFuture()
      .join()
}
