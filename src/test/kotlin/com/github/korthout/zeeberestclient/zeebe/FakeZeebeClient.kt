package com.github.korthout.zeeberestclient.zeebe

import io.camunda.zeebe.client.ZeebeClient
import io.camunda.zeebe.client.ZeebeClientConfiguration
import io.camunda.zeebe.client.api.ZeebeFuture
import io.camunda.zeebe.client.api.command.*
import io.camunda.zeebe.client.api.response.ActivatedJob
import io.camunda.zeebe.client.api.response.Topology
import io.camunda.zeebe.client.api.worker.JobWorkerBuilderStep1
import java.time.Duration

/** Fake ZeebeClient for usage in tests. Simply set respective property and it will be returned. */
object FakeZeebeClient : ZeebeClient {

  var error: Throwable? = null
  var topology: Topology? = null

  fun onTopologyRequest(topology: Topology) {
    error = null
    this.topology = topology
  }

  fun onTopologyRequest(error: Throwable) {
    this.error = error
    topology = null
  }

  override fun close() {
    // do nothing
  }

  override fun newCompleteCommand(jobKey: Long): CompleteJobCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newCompleteCommand(job: ActivatedJob?): CompleteJobCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newFailCommand(jobKey: Long): FailJobCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newFailCommand(job: ActivatedJob?): FailJobCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newThrowErrorCommand(jobKey: Long): ThrowErrorCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newThrowErrorCommand(job: ActivatedJob?): ThrowErrorCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newTopologyRequest(): TopologyRequestStep1 {
    return object : TopologyRequestStep1 {
      override fun requestTimeout(requestTimeout: Duration?): FinalCommandStep<Topology> {
        TODO("Not yet implemented")
      }

      override fun send(): ZeebeFuture<Topology> {
        return CompletedZeebeFuture(topology, error)
      }
    }
  }

  override fun getConfiguration(): ZeebeClientConfiguration {
    TODO("Not yet implemented")
  }

  override fun newDeployCommand(): DeployProcessCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newDeployResourceCommand(): DeployResourceCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newCreateInstanceCommand(): CreateProcessInstanceCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newModifyProcessInstanceCommand(
    processInstanceKey: Long
  ): ModifyProcessInstanceCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newCancelInstanceCommand(
    processInstanceKey: Long
  ): CancelProcessInstanceCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newSetVariablesCommand(elementInstanceKey: Long): SetVariablesCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newPublishMessageCommand(): PublishMessageCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newResolveIncidentCommand(incidentKey: Long): ResolveIncidentCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newUpdateRetriesCommand(jobKey: Long): UpdateRetriesJobCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newUpdateRetriesCommand(job: ActivatedJob?): UpdateRetriesJobCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newWorker(): JobWorkerBuilderStep1 {
    TODO("Not yet implemented")
  }

  override fun newActivateJobsCommand(): ActivateJobsCommandStep1 {
    TODO("Not yet implemented")
  }
}
