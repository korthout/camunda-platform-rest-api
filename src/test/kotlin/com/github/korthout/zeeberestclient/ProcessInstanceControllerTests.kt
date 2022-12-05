package com.github.korthout.zeeberestclient

import com.github.korthout.zeeberestclient.zeebe.FakeZeebeClientLifecycle
import io.camunda.zeebe.client.api.response.ProcessInstanceEvent
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
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest
@AutoConfigureMockMvc
class ProcessInstanceControllerTests(@Autowired val mvc: MockMvc) {

  @TestConfiguration
  internal class StatusControllerTestConfiguration {
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
  fun postShouldRespondProcessInstanceMetadata() {
    zeebeClient.onCreateInstanceCommand(FakeProcessInstanceEvent)
    mvc
      .perform(
        post("/process-instances")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "bpmnProcessId": "order-process"
            }
            """))
      .andExpect(status().isOk)
      .andExpect(content().json("{ error: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              data: {
                "processDefinitionKey": 1,
                "bpmnProcessId": "order-process",
                "version": 1,
                "processInstanceKey": 2
              }
            }
            """))
  }

  @Test
  fun postShouldRespondUnavailable() {
    zeebeClient.isRunning(false)
    mvc
      .perform(
        post("/process-instances")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "bpmnProcessId": "order-process"
            }
            """))
      .andExpect(status().isServiceUnavailable)
      .andExpect(content().json("{ data: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              error: "Unable to connect to Zeebe cluster. Please try again, or check the configuration settings."
            }
            """))
  }

  @Test
  fun postShouldRequireProcessDefinitionKeyOrBpmnProcessId() {
    zeebeClient.onCreateInstanceCommand(FakeProcessInstanceEvent)
    mvc
      .perform(post("/process-instances").contentType(MediaType.APPLICATION_JSON).content("{}"))
      .andExpect(status().isBadRequest)
      .andExpect(content().json("{ data: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              error: "Expected body to contain either `bpmnProcessId` or `processDefinitionKey`, but both are null."
            }
            """))
  }

  @Test
  fun postShouldRespondError() {
    zeebeClient.onCreateInstanceCommand(RuntimeException("bla"))
    mvc
      .perform(
        post("/process-instances")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "bpmnProcessId": "order-process"
            }
            """))
      .andExpect(status().is4xxClientError)
      .andExpect(content().json("{ data: null }"))
      .andExpect(content().json("""{ error: "java.lang.RuntimeException: bla" }"""))
  }

  @Test
  fun postShouldAllowProcessDefinitionKeyInsteadBpmnProcessId() {
    zeebeClient.onCreateInstanceCommand(FakeProcessInstanceEvent)
    mvc
      .perform(
        post("/process-instances")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "processDefinitionKey": 1
            }
            """))
      .andExpect(status().isOk)
      .andExpect(content().json("{ error: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              data: {
                "processDefinitionKey": 1,
                "bpmnProcessId": "order-process",
                "version": 1,
                "processInstanceKey": 2
              }
            }
            """))
  }

  object FakeProcessInstanceEvent : ProcessInstanceEvent {
    override fun getProcessDefinitionKey(): Long {
      return 1L
    }

    override fun getBpmnProcessId(): String {
      return "order-process"
    }

    override fun getVersion(): Int {
      return 1
    }

    override fun getProcessInstanceKey(): Long {
      return 2L
    }
  }
}
