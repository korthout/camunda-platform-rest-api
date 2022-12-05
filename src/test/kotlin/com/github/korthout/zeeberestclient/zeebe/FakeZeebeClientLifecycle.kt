package com.github.korthout.zeeberestclient.zeebe

import com.github.korthout.zeeberestclient.ProcessInstanceControllerTests
import io.camunda.zeebe.client.api.response.Topology
import io.camunda.zeebe.spring.client.annotation.processor.ZeebeAnnotationProcessorRegistry
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientObjectFactory
import org.springframework.context.ApplicationEventPublisher

/** Fake to replace the ZeebeClient with a FakeZeebeClient in the autowired ZeebeClientLifecycle */
class FakeZeebeClientLifecycle :
  ZeebeClientLifecycle(
    ZeebeClientObjectFactory { FakeZeebeClient },
    ZeebeAnnotationProcessorRegistry(java.util.ArrayList()),
    ApplicationEventPublisher {}) {

  fun reset() {
    this.running = true
    FakeZeebeClient.reset()
  }

  fun onTopologyRequest(topology: Topology) {
    FakeZeebeClient.onTopologyRequest(topology)
  }

  fun onTopologyRequest(error: Throwable) {
    FakeZeebeClient.onTopologyRequest(error)
  }

  fun onCreateInstanceCommand(
    processInstance: ProcessInstanceControllerTests.FakeProcessInstanceEvent
  ) {
    FakeZeebeClient.onCreateInstanceCommand(processInstance)
  }

  fun onCreateInstanceCommand(error: Throwable) {
    FakeZeebeClient.onCreateInstanceCommand(error)
  }

  fun isRunning(value: Boolean) {
    this.running = value
  }
}
