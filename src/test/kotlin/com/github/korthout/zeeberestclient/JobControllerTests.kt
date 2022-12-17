package com.github.korthout.zeeberestclient

import com.github.korthout.zeeberestclient.zeebe.FakeZeebeClientLifecycle
import io.camunda.zeebe.client.api.response.ActivatedJob
import io.camunda.zeebe.client.api.response.CompleteJobResponse
import io.camunda.zeebe.client.api.response.FailJobResponse
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.TestConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest
@AutoConfigureMockMvc
class JobControllerTests(@Autowired val mvc: MockMvc) {

  @TestConfiguration
  internal class ControllerTestConfiguration {
    @Bean
    fun client(): ZeebeClientLifecycle {
      return FakeZeebeClientLifecycle()
    }
  }

  @Autowired lateinit var zeebeClient: FakeZeebeClientLifecycle

  @BeforeEach
  fun setup() {
    zeebeClient.reset()
  }

  @Test
  fun getShouldRespondProcessInstanceMetadata() {
    zeebeClient.onActivateJobsCommand(fakeActivatedJobs)
    mvc
      .perform(get("/jobs").queryParam("type", "type"))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error": null }"""))
      .andExpect(
        content()
          .json(
            """
            {
              "data": {
                "jobs": [{
                  "key": 4,
                  "type": "type",
                  "processInstanceKey": 2,
                  "bpmnProcessId": "order-process",
                  "processDefinitionVersion": 1,
                  "processDefinitionKey": 1,
                  "elementId": "task",
                  "elementInstanceKey": 3,
                  "customHeaders": {},
                  "worker": "worker",
                  "retries": 3,
                  "deadline": -1,
                  "variables": {
                    "foo": "bar"
                  },
                  "status": "activated"
                }]
              }
            }
            """))
  }

  @Test
  fun getShouldRespondUnavailable() {
    zeebeClient.isRunning(false)
    mvc
      .perform(get("/jobs").queryParam("type", "type"))
      .andExpect(status().isServiceUnavailable)
      .andExpect(content().json("""{ "data": null }"""))
      .andExpect(
        content()
          .json(
            """
            {
              "error": "Unable to connect to Zeebe cluster. Please try again, or check the configuration settings."
            }
            """))
  }

  @Test
  fun getShouldRequireJobType() {
    zeebeClient.onActivateJobsCommand(fakeActivatedJobs)
    mvc
      .perform(get("/jobs"))
      .andExpect(status().isBadRequest)
      .andExpect(content().json("""{ "data": null }"""))
      .andExpect(
        content()
          .json(
            """
            {
              "error": "Expected query parameter `type` to be provided, but it's null or undefined."
            }
            """))
  }

  @Test
  fun getShouldRespondError() {
    zeebeClient.onActivateJobsCommand(RuntimeException("bla"))
    mvc
      .perform(get("/jobs").queryParam("type", "type"))
      .andExpect(status().is4xxClientError)
      .andExpect(content().json("""{ "data": null }"""))
      .andExpect(content().json("""{ "error": "java.lang.RuntimeException: bla" }"""))
  }

  @Test
  fun getShouldAllowSettingMaxJobsToActivate() {
    zeebeClient.onActivateJobsCommand(emptyActivatedJobs)
    mvc
      .perform(get("/jobs").queryParam("type", "type").queryParam("maxJobsToActivate", "0"))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error": null }"""))
      .andExpect(
        content()
          .json(
            """
             {
              "data": {
                "jobs": []
              }
            }
            """))
  }

  @Test
  fun getShouldAllowSettingWorker() {
    zeebeClient.onActivateJobsCommand(emptyActivatedJobs)
    mvc
      .perform(get("/jobs").queryParam("type", "type").queryParam("worker", "worker"))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error": null }"""))
      .andExpect(
        content()
          .json(
            """
             {
              "data": {
                "jobs": []
              }
            }
            """))
  }

  @Test
  fun getShouldAllowSettingJobTimeout() {
    zeebeClient.onActivateJobsCommand(emptyActivatedJobs)
    mvc
      .perform(get("/jobs").queryParam("type", "type").queryParam("jobTimeout", "1h30m"))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error": null }"""))
      .andExpect(
        content()
          .json(
            """
             {
              "data": {
                "jobs": []
              }
            }
            """))
  }

  @Test
  fun getShouldAllowSettingFetchVariables() {
    zeebeClient.onActivateJobsCommand(emptyActivatedJobs)
    mvc
      .perform(get("/jobs").queryParam("type", "type").queryParam("fetchVariables", "foo"))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error": null }"""))
      .andExpect(
        content()
          .json(
            """
             {
              "data": {
                "jobs": []
              }
            }
            """))
  }

  @Test
  fun putStatusShouldAcceptCompleted() {
    zeebeClient.onCompleteJobsCommand(fakeCompletedJob)
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "status": "completed"
            }
            """))
      .andExpect(status().isNoContent)
  }

  @Test
  fun putStatusShouldRejectCompletedWithoutStatus() {
    zeebeClient.onCompleteJobsCommand(fakeCompletedJob)
    mvc
      .perform(patch("/jobs/1").contentType(MediaType.APPLICATION_JSON).content("{}"))
      .andExpect(status().isBadRequest)
      .andExpect(content().json("""{ "data": null}"""))
      .andExpect(
        content()
          .json(
            """
            {
              "error": "Expected body property `status` to be provided, but it's null or undefined."
            }
            """))
  }

  @Test
  fun putStatusShouldRejectCompletedWithUnknownStatus() {
    zeebeClient.onCompleteJobsCommand(fakeCompletedJob)
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "status": "unknown"
            }
            """))
      .andExpect(status().isBadRequest)
      .andExpect(content().json("""{ "data": null}"""))
      .andExpect(
        content()
          .json(
            """
            {
              "error": "Expected body property `status` to be one of `[completed]`, but it's `unknown`."
            }
            """))
  }

  @Test
  fun putStatusShouldAcceptCompletedWithVariables() {
    zeebeClient.onCompleteJobsCommand(fakeCompletedJob)
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "status": "completed",
              "variables": {
                "foo": "bar"
              }
            }
            """))
      .andExpect(status().isNoContent)
  }

  @Test
  fun putStatusShouldAcceptFailed() {
    zeebeClient.onFailJobsCommand(fakeFailedJob)
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
               {
                 "status": "failed",
                 "retries": 3
               }
               """))
      .andExpect(status().isNoContent)
  }

  @Test
  fun putStatusShouldAcceptFailedWithRetryBackOff() {
    zeebeClient.onFailJobsCommand(fakeFailedJob)
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
               {
                 "status": "failed",
                 "retries": 3,
                 "retryBackOff": "10s"
               }
               """))
      .andExpect(status().isNoContent)
  }

  @Test
  fun putStatusShouldAcceptFailedWithErrorMessage() {
    zeebeClient.onFailJobsCommand(fakeFailedJob)
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
               {
                 "status": "failed",
                 "retries": 3,
                 "errorMessage": "I failed"
               }
               """))
      .andExpect(status().isNoContent)
  }

  @Test
  fun putStatusShouldRejectFailedWithoutRetries() {
    zeebeClient.onFailJobsCommand(fakeFailedJob)
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
               {
                 "status": "failed"
               }
               """))
      .andExpect(status().isBadRequest)
      .andExpect(content().json("""{ "data": null}"""))
      .andExpect(
        content()
          .json(
            """
            {
              "error": "Expected body property `retries` to be provided, but it's null or undefined."
            }
            """))
  }

  @Test
  fun putStatusShouldAcceptErrorThrown() {
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
               {
                 "status": "error_thrown",
                 "errorCode": "123"
               }
               """))
      .andExpect(status().isNoContent)
  }

  @Test
  fun putStatusShouldAcceptErrorThrownWithErrorMessage() {
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
               {
                 "status": "error_thrown",
                 "errorCode": "123",
                 "errorMessage": "I failed"
               }
               """))
      .andExpect(status().isNoContent)
  }

  @Test
  fun putStatusShouldRejectErrorThrownWithoutErrorCode() {
    mvc
      .perform(
        patch("/jobs/1")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
               {
                 "status": "error_thrown"
               }
               """))
      .andExpect(status().isBadRequest)
      .andExpect(content().json("""{ "data": null}"""))
      .andExpect(
        content()
          .json(
            """
            {
              "error": "Expected body property `errorCode` to be provided, but it's null or undefined."
            }
            """))
  }

  val fakeActivatedJobs: List<ActivatedJob> = listOf(FakeActivatedJob)
  val emptyActivatedJobs: List<ActivatedJob> = emptyList()
  val fakeCompletedJob = object : CompleteJobResponse {}
  val fakeFailedJob = object : FailJobResponse {}
  val throwError = null

  object FakeActivatedJob : ActivatedJob {
    override fun getKey(): Long {
      return 4
    }

    override fun getType(): String {
      return "type"
    }

    override fun getProcessInstanceKey(): Long {
      return 2
    }

    override fun getBpmnProcessId(): String {
      return "order-process"
    }

    override fun getProcessDefinitionVersion(): Int {
      return 1
    }

    override fun getProcessDefinitionKey(): Long {
      return 1
    }

    override fun getElementId(): String {
      return "task"
    }

    override fun getElementInstanceKey(): Long {
      return 3
    }

    override fun getCustomHeaders(): Map<String, String> {
      return emptyMap()
    }

    override fun getWorker(): String {
      return "worker"
    }

    override fun getRetries(): Int {
      return 3
    }

    override fun getDeadline(): Long {
      return -1
    }

    override fun getVariables(): String {
      return "{\"foo\":\"bar\"}"
    }

    override fun getVariablesAsMap(): Map<String, Any> {
      return mapOf("foo" to "bar")
    }

    override fun <T : Any?> getVariablesAsType(variableType: Class<T>?): T {
      TODO("Not yet implemented")
    }

    override fun toJson(): String {
      TODO("Not yet implemented")
    }
  }
}
