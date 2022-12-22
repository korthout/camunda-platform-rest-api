package com.github.korthout.camundarestapi.zeebe

import io.camunda.zeebe.client.ZeebeClient
import io.camunda.zeebe.client.ZeebeClientConfiguration
import io.camunda.zeebe.client.api.ZeebeFuture
import io.camunda.zeebe.client.api.command.*
import io.camunda.zeebe.client.api.command.ActivateJobsCommandStep1.ActivateJobsCommandStep2
import io.camunda.zeebe.client.api.command.ActivateJobsCommandStep1.ActivateJobsCommandStep3
import io.camunda.zeebe.client.api.command.CreateProcessInstanceCommandStep1.CreateProcessInstanceCommandStep2
import io.camunda.zeebe.client.api.command.CreateProcessInstanceCommandStep1.CreateProcessInstanceCommandStep3
import io.camunda.zeebe.client.api.command.PublishMessageCommandStep1.PublishMessageCommandStep2
import io.camunda.zeebe.client.api.command.PublishMessageCommandStep1.PublishMessageCommandStep3
import io.camunda.zeebe.client.api.response.*
import io.camunda.zeebe.client.api.worker.JobWorkerBuilderStep1
import java.io.InputStream
import java.time.Duration

/** Fake ZeebeClient for usage in tests. Simply set respective property and it will be returned. */
object FakeZeebeClient : ZeebeClient {

  var error: Throwable? = null
  var topology: Topology? = null
  var processInstance: ProcessInstanceEvent? = null
  var jobs: ActivateJobsResponse? = null
  var completedJob: CompleteJobResponse? = null
  var failedJob: FailJobResponse? = null
  var messageResponse: PublishMessageResponse? = null

  fun reset() {
    error = null
    topology = null
    processInstance = null
    jobs = null
    completedJob = null
    failedJob = null
    messageResponse = null
  }

  fun onTopologyRequest(topology: Topology) {
    error = null
    this.topology = topology
  }

  fun onTopologyRequest(error: Throwable) {
    this.error = error
    topology = null
  }

  fun onCreateInstanceCommand(processInstance: ProcessInstanceEvent) {
    error = null
    this.processInstance = processInstance
  }

  fun onCreateInstanceCommand(error: Throwable) {
    this.error = error
    processInstance = null
  }

  fun onActivateJobsCommand(jobs: List<ActivatedJob>) {
    error = null
    this.jobs = ActivateJobsResponse { jobs }
  }

  fun onActivateJobsCommand(error: Throwable) {
    this.error = error
    jobs = null
  }

  fun onCompleteJobsCommand(job: CompleteJobResponse) {
    error = null
    completedJob = job
  }

  fun onCompleteJobsCommand(error: Throwable) {
    this.error = error
    completedJob = null
  }

  fun onFailJobsCommand(job: FailJobResponse) {
    error = null
    failedJob = job
  }

  fun onFailJobsCommand(error: Throwable) {
    this.error = error
    failedJob = null
  }

  fun onThrowErrorCommand(error: Throwable) {
    this.error = error
  }

  fun onPublishMessageCommand(message: PublishMessageResponse) {
    error = null
    this.messageResponse = message
  }

  fun onPublishMessageCommand(error: Throwable) {
    this.error = error
    messageResponse = null
  }

  override fun close() {
    // do nothing
  }

  override fun newCompleteCommand(jobKey: Long): CompleteJobCommandStep1 {
    return object : CompleteJobCommandStep1 {
      override fun requestTimeout(
        requestTimeout: Duration?
      ): FinalCommandStep<CompleteJobResponse> {
        return this
      }

      override fun send(): ZeebeFuture<CompleteJobResponse> {
        return CompletedZeebeFuture(completedJob, error)
      }

      override fun variables(variables: InputStream?): CompleteJobCommandStep1 {
        return this
      }

      override fun variables(variables: String?): CompleteJobCommandStep1 {
        return this
      }

      override fun variables(variables: MutableMap<String, Any>?): CompleteJobCommandStep1 {
        return this
      }

      override fun variables(variables: Any?): CompleteJobCommandStep1 {
        return this
      }
    }
  }

  override fun newCompleteCommand(job: ActivatedJob?): CompleteJobCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newFailCommand(jobKey: Long): FailJobCommandStep1 {
    return object : FailJobCommandStep1 {
      override fun retries(remainingRetries: Int): FailJobCommandStep1.FailJobCommandStep2 {
        return object : FailJobCommandStep1.FailJobCommandStep2 {
          override fun requestTimeout(
            requestTimeout: Duration?
          ): FinalCommandStep<FailJobResponse> {
            return this
          }

          override fun send(): ZeebeFuture<FailJobResponse> {
            return CompletedZeebeFuture(failedJob, error)
          }

          override fun retryBackoff(
            backoffTimeout: Duration?
          ): FailJobCommandStep1.FailJobCommandStep2 {
            return this
          }

          override fun errorMessage(errorMsg: String?): FailJobCommandStep1.FailJobCommandStep2 {
            return this
          }
        }
      }
    }
  }

  override fun newFailCommand(job: ActivatedJob?): FailJobCommandStep1 {
    TODO("Not yet implemented")
  }

  override fun newThrowErrorCommand(jobKey: Long): ThrowErrorCommandStep1 {
    return object : ThrowErrorCommandStep1 {
      override fun errorCode(errorCode: String?): ThrowErrorCommandStep1.ThrowErrorCommandStep2 {
        return object : ThrowErrorCommandStep1.ThrowErrorCommandStep2 {
          override fun requestTimeout(requestTimeout: Duration?): FinalCommandStep<Void>? {
            return this
          }

          override fun send(): ZeebeFuture<Void>? {
            return CompletedZeebeFuture(null, error)
          }

          override fun errorMessage(
            errorMsg: String?
          ): ThrowErrorCommandStep1.ThrowErrorCommandStep2 {
            return this
          }
        }
      }
    }
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
    return object : CreateProcessInstanceCommandStep1 {
      override fun bpmnProcessId(bpmnProcessId: String?): CreateProcessInstanceCommandStep2 {
        return object : CreateProcessInstanceCommandStep2 {
          override fun version(version: Int): CreateProcessInstanceCommandStep3 {
            TODO("Not yet implemented")
          }

          override fun latestVersion(): CreateProcessInstanceCommandStep3 {
            return FakeCreateProcessInstanceCommandStep3()
          }
        }
      }

      override fun processDefinitionKey(
        processDefinitionKey: Long
      ): CreateProcessInstanceCommandStep3 {
        return FakeCreateProcessInstanceCommandStep3()
      }

      inner class FakeCreateProcessInstanceCommandStep3 : CreateProcessInstanceCommandStep3 {
        override fun requestTimeout(
          requestTimeout: Duration?
        ): FinalCommandStep<ProcessInstanceEvent> {
          TODO("Not yet implemented")
        }

        override fun send(): ZeebeFuture<ProcessInstanceEvent> {
          return CompletedZeebeFuture(processInstance, error)
        }

        override fun variables(variables: InputStream?): CreateProcessInstanceCommandStep3 {
          return this
        }

        override fun variables(variables: String?): CreateProcessInstanceCommandStep3 {
          return this
        }

        override fun variables(
          variables: MutableMap<String, Any>?
        ): CreateProcessInstanceCommandStep3 {
          return this
        }

        override fun variables(variables: Any?): CreateProcessInstanceCommandStep3 {
          return this
        }

        override fun startBeforeElement(elementId: String?): CreateProcessInstanceCommandStep3 {
          TODO("Not yet implemented")
        }

        override fun withResult():
          CreateProcessInstanceCommandStep1.CreateProcessInstanceWithResultCommandStep1 {
          TODO("Not yet implemented")
        }
      }
    }
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
    return object : PublishMessageCommandStep1 {
      override fun messageName(
        messageName: String?
      ): PublishMessageCommandStep1.PublishMessageCommandStep2 {
        return object : PublishMessageCommandStep2 {
          override fun correlationKey(
            correlationKey: String?
          ): PublishMessageCommandStep1.PublishMessageCommandStep3 {
            return object : PublishMessageCommandStep3 {
              override fun requestTimeout(
                requestTimeout: Duration?
              ): FinalCommandStep<PublishMessageResponse> {
                return this
              }

              override fun send(): ZeebeFuture<PublishMessageResponse> {
                return CompletedZeebeFuture(messageResponse, error)
              }

              override fun messageId(messageId: String?): PublishMessageCommandStep3 {
                return this
              }

              override fun timeToLive(timeToLive: Duration?): PublishMessageCommandStep3 {
                return this
              }

              override fun variables(variables: InputStream?): PublishMessageCommandStep3 {
                return this
              }

              override fun variables(variables: String?): PublishMessageCommandStep3 {
                return this
              }

              override fun variables(
                variables: MutableMap<String, Any>?
              ): PublishMessageCommandStep3 {
                return this
              }

              override fun variables(variables: Any?): PublishMessageCommandStep3 {
                return this
              }
            }
          }
        }
      }
    }
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
    return ActivateJobsCommandStep1 {
      ActivateJobsCommandStep2 {
        object : ActivateJobsCommandStep3 {
          override fun requestTimeout(
            requestTimeout: Duration
          ): FinalCommandStep<ActivateJobsResponse> {
            return this
          }

          override fun send(): ZeebeFuture<ActivateJobsResponse> {
            return CompletedZeebeFuture(jobs, error)
          }

          override fun timeout(timeout: Duration): ActivateJobsCommandStep3 {
            return this
          }

          override fun workerName(workerName: String): ActivateJobsCommandStep3 {
            return this
          }

          override fun fetchVariables(
            fetchVariables: MutableList<String>
          ): ActivateJobsCommandStep3 {
            return this
          }

          override fun fetchVariables(vararg fetchVariables: String): ActivateJobsCommandStep3 {
            return this
          }
        }
      }
    }
  }
}
