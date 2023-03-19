package com.github.korthout.camundarestapi

import com.github.korthout.camundarestapi.operate.FakeOperateClient
import com.github.korthout.camundarestapi.operate.FakeOperateClientLifecycle
import com.github.korthout.camundarestapi.operate.OperateClientLifecycle
import com.github.korthout.camundarestapi.zeebe.FakeZeebeClientLifecycle
import io.camunda.operate.dto.ProcessInstance
import io.camunda.operate.dto.ProcessInstanceState
import io.camunda.operate.exception.OperateException
import io.camunda.zeebe.client.api.response.ProcessInstanceEvent
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import java.time.LocalDate
import java.time.LocalTime
import java.time.ZoneId
import java.time.ZonedDateTime
import java.util.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.TestConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest
@AutoConfigureMockMvc
class ProcessInstanceControllerTests(@Autowired val mvc: MockMvc) {

  @TestConfiguration
  internal class ControllerTestConfiguration {
    @Bean
    fun client(): ZeebeClientLifecycle {
      return FakeZeebeClientLifecycle()
    }

    @Bean
    fun operateClient(): OperateClientLifecycle {
      return FakeOperateClientLifecycle
    }
  }

  @Autowired lateinit var zeebeClient: FakeZeebeClientLifecycle

  val operateClient = FakeOperateClient

  @BeforeEach
  fun setup() {
    zeebeClient.reset()
    operateClient.reset()
    FakeOperateClientLifecycle.start()
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
  fun postShouldRejectWhenBothProcessDefinitionKeyAndBpmnProcessIdProvided() {
    zeebeClient.onCreateInstanceCommand(FakeProcessInstanceEvent)
    mvc
      .perform(
        post("/process-instances")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "bpmnProcessId": "order-process",
              "processDefinitionKey": 1
            }
            """))
      .andExpect(status().isBadRequest)
      .andExpect(content().json("{ data: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              error: "Expected body to contain either `bpmnProcessId` or `processDefinitionKey`, but found both."
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

  @Test
  fun postShouldAllowPassingAlongVariables() {
    zeebeClient.onCreateInstanceCommand(FakeProcessInstanceEvent)
    mvc
      .perform(
        post("/process-instances")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
            {
              "bpmnProcessId": "order-process",
              "variables": {
                "foo": true,
                "bar": [{
                  "baz": 1
                }]
              }
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
  fun getByKeyShouldRespondProcessInstanceDetails() {
    operateClient.onGetProcessInstance(FakeProcessInstance)
    mvc
      .perform(get("/process-instances/2").accept(MediaType.APPLICATION_JSON))
      .andExpect(status().isOk)
      .andExpect(content().json("{ error: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              data: {
                processDefinitionKey: 1,
                bpmnProcessId: "order-process",
                version: 1,
                processInstanceKey: 2,
                parentInstanceKey: -1,
                status: "completed",
                startedAt: "2023-03-15T10:03:55",
                endedAt: "2023-03-15T10:04"
              }
            }
            """))
  }

  @Test
  fun getByKeyShouldRespondNotFound() {
    operateClient.onGetProcessInstance(OperateException("Authentication error : 404"))
    mvc
      .perform(get("/process-instances/2").accept(MediaType.APPLICATION_JSON))
      .andExpect(status().isNotFound)
  }

  @Test
  fun getByKeyShouldRespondServiceUnavailable() {
    FakeOperateClientLifecycle.stop()
    mvc
      .perform(get("/process-instances/2").accept(MediaType.APPLICATION_JSON))
      .andExpect(status().isServiceUnavailable)
      .andExpect(content().json("{ data: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              error: "Unable to connect to Operate. Please try again, or check the configuration settings."
            }
            """))
  }

  @Test
  fun getByKeyShouldRespondServiceUnavailableOnError() {
    operateClient.onGetProcessInstance(OperateException("Could not connect to Operate!"))
    mvc
      .perform(get("/process-instances/2").accept(MediaType.APPLICATION_JSON))
      .andExpect(status().isServiceUnavailable)
      .andExpect(content().json("{ data: null }"))
      .andExpect(
        content()
          .json(
            "{error: " +
              "\"Unable to retrieve Process Instance '2' from Operate. " +
              "Could not connect to Operate! " +
              "Operate may lag behind the workflow engine (Zeebe). " +
              "Please try again, or check the configuration settings.\"" +
              "}"))
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

  object FakeProcessInstance : ProcessInstance() {
    override fun getKey(): Long {
      return 2L
    }

    override fun getProcessVersion(): Long {
      return 1
    }

    override fun getBpmnProcessId(): String {
      return "order-process"
    }

    override fun getParentKey(): Long {
      return -1L
    }

    override fun getStartDate(): Date {
      return Date.from(
        ZonedDateTime.of(LocalDate.of(2023, 3, 15), LocalTime.of(10, 3, 55), ZoneId.systemDefault())
          .toInstant())
    }

    override fun getEndDate(): Date {
      return Date.from(
        ZonedDateTime.of(LocalDate.of(2023, 3, 15), LocalTime.of(10, 4), ZoneId.systemDefault())
          .toInstant())
    }

    override fun getState(): ProcessInstanceState {
      return ProcessInstanceState.COMPLETED
    }

    override fun getProcessDefinitionKey(): Long {
      return 1L
    }
  }
}
