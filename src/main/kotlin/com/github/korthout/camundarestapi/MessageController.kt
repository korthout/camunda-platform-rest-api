package com.github.korthout.camundarestapi

import com.blueanvil.toDuration
import com.github.korthout.camundarestapi.apis.MessagesApi
import com.github.korthout.camundarestapi.models.PublishMessageRequest
import com.github.korthout.camundarestapi.models.PublishMessageResponse
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class MessageController : MessagesApi {

  @Autowired lateinit var client: ZeebeClientLifecycle

  override fun publishMessage(
    publishMessageRequest: PublishMessageRequest
  ): ResponseEntity<PublishMessageResponse> =
    when {
      !client.isRunning ->
        ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
          .body(
            PublishMessageResponse(
              error =
                "Unable to connect to Zeebe cluster." +
                  " Please try again, or check the configuration settings."))
      publishMessageRequest.name != null ->
        client
          .newPublishMessageCommand()
          .messageName(publishMessageRequest.name)
          .correlationKey(publishMessageRequest.correlationKey)
          .messageId(publishMessageRequest.messageId)
          .timeToLive(publishMessageRequest.timeToLive?.toDuration())
          .variables(publishMessageRequest.variables)
          .send()
          .thenApply { ResponseEntity.ok(PublishMessageResponse(key = it.messageKey)) }
          .exceptionally {
            ResponseEntity.badRequest().body(PublishMessageResponse(error = it.cause.toString()))
          }
          .toCompletableFuture()
          .join()
      else ->
        ResponseEntity.badRequest()
          .body(
            PublishMessageResponse(
              error = "Expected body property `name` to be provided, but it's null or undefined."))
    }
}
