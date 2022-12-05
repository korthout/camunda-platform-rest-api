package com.github.korthout.zeeberestclient

import io.camunda.zeebe.client.api.response.Topology
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/status")
class StatusController {

  @Autowired lateinit var client: ZeebeClientLifecycle

  /** Retrieves the Topology of a Zeebe cluster. */
  @GetMapping
  fun getStatus(): ResponseEntity<Response<Topology>> =
    if (!client.isRunning)
      ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
        .body(
          Response(
            "Unable to connect to Zeebe cluster." +
              " Please try again, or check the configuration settings."))
    else {
      client
        .newTopologyRequest()
        .send()
        .thenApply { ResponseEntity.ok(Response(it)) }
        .exceptionally { ResponseEntity.badRequest().body(Response(it.toString())) }
        .toCompletableFuture()
        .join()
    }

  data class Response<T>(val data: T?, val error: String?) {
    constructor(data: T) : this(data, null)
    constructor(error: String) : this(null, error)
  }
}
