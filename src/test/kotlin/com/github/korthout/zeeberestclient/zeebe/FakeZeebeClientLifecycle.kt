package com.github.korthout.zeeberestclient.zeebe

import io.camunda.zeebe.client.api.response.ActivatedJob
import io.camunda.zeebe.client.api.response.CompleteJobResponse
import io.camunda.zeebe.client.api.response.FailJobResponse
import io.camunda.zeebe.client.api.response.ProcessInstanceEvent
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

  fun onCreateInstanceCommand(processInstance: ProcessInstanceEvent) {
    FakeZeebeClient.onCreateInstanceCommand(processInstance)
  }

  fun onCreateInstanceCommand(error: Throwable) {
    FakeZeebeClient.onCreateInstanceCommand(error)
  }

  fun onActivateJobsCommand(jobs: List<ActivatedJob>) {
    FakeZeebeClient.onActivateJobsCommand(jobs)
  }

  fun onActivateJobsCommand(error: Throwable) {
    FakeZeebeClient.onActivateJobsCommand(error)
  }

  fun onCompleteJobsCommand(job: CompleteJobResponse) {
    FakeZeebeClient.onCompleteJobsCommand(job)
  }

  fun onCompleteJobsCommand(error: Throwable) {
    FakeZeebeClient.onCompleteJobsCommand(error)
  }

  fun onFailJobsCommand(job: FailJobResponse) {
    FakeZeebeClient.onFailJobsCommand(job)
  }

  fun onFailJobsCommand(error: Throwable) {
    FakeZeebeClient.onFailJobsCommand(error)
  }

  fun isRunning(value: Boolean) {
    this.running = value
  }
}
