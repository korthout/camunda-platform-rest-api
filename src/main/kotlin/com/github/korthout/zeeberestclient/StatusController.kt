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
  fun getStatus(): ResponseEntity<Topology> =
    if (!client.isRunning) ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build()
    else {
      val topology = client.newTopologyRequest().send().join()
      // todo: handle exceptional cases
      ResponseEntity.ok(topology)
    }
}
