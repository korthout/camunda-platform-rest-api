package com.github.korthout.camundarestapi

import com.github.korthout.camundarestapi.apis.ProcessInstancesApi
import com.github.korthout.camundarestapi.models.*
import com.github.korthout.camundarestapi.models.ProcessInstanceDetails.Status
import com.github.korthout.camundarestapi.operate.OperateClientLifecycle
import io.camunda.operate.dto.ProcessInstanceState
import io.camunda.operate.exception.OperateException
import io.camunda.zeebe.client.api.command.CreateProcessInstanceCommandStep1.CreateProcessInstanceCommandStep3
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import java.time.LocalDateTime
import java.time.ZoneId
import java.util.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
class ProcessInstanceController : ProcessInstancesApi {

  @Autowired lateinit var client: ZeebeClientLifecycle
  @Autowired lateinit var operateClient: OperateClientLifecycle

  override fun createProcessInstance(
    body: CreateProcessInstanceRequest
  ): ResponseEntity<ProcessInstanceResponse> =
    when {
      !client.isRunning ->
        ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            ProcessInstanceResponse(
              error =
                "Unable to connect to Zeebe cluster." +
                  " Please try again, or check the configuration settings."))
      body.bpmnProcessId != null && body.processDefinitionKey != null ->
        ResponseEntity.badRequest()
          .body(
            ProcessInstanceResponse(
              error =
                "Expected body to contain either `bpmnProcessId` or `processDefinitionKey`, but found both."))
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
            ProcessInstanceResponse(
              error =
                "Expected body to contain either `bpmnProcessId` or `processDefinitionKey`, but both are null."))
    }

  override fun getProcessInstance(key: Long): ResponseEntity<ProcessInstanceDetailsResponse> {
    if (!operateClient.isRunning) {
      return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
        .body(
          ProcessInstanceDetailsResponse(
            error =
              "Unable to connect to Operate. " +
                "Please try again, or check the configuration settings."))
    }
    val processInstance =
      try {
        operateClient.getProcessInstance(key) ?: return ResponseEntity.notFound().build()
      } catch (e: OperateException) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            ProcessInstanceDetailsResponse(
              error =
                "Unable to retrieve Process Instance '${key}' from Operate. ${e.message} " +
                  "Operate may lag behind the workflow engine (Zeebe). " +
                  "Please try again, or check the configuration settings."))
      }
    return ResponseEntity.ok(
      ProcessInstanceDetailsResponse(
        ProcessInstanceDetails(
          processDefinitionKey = processInstance.processDefinitionKey,
          bpmnProcessId = processInstance.bpmnProcessId,
          version = processInstance.processVersion?.toInt(),
          processInstanceKey = processInstance.key,
          parentInstanceKey = processInstance.parentKey,
          status =
            when (processInstance.state) {
              ProcessInstanceState.ACTIVE -> Status.activated
              ProcessInstanceState.INCIDENT -> Status.hasIncident
              ProcessInstanceState.COMPLETED -> Status.completed
              ProcessInstanceState.CANCELED -> Status.terminated
              null -> null
            },
          startedAt = toIso8601(processInstance.startDate),
          endedAt = toIso8601(processInstance.endDate))))
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

  companion object {
    private fun toIso8601(date: Date?) =
      when (date) {
        null -> null
        else -> LocalDateTime.ofInstant(date.toInstant(), ZoneId.systemDefault()).toString()
      }
  }
}
