package com.github.korthout.camundarestapi

import com.github.korthout.camundarestapi.zeebe.FakeZeebeClientLifecycle
import io.camunda.zeebe.client.api.response.PublishMessageResponse
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
class MessageControllerTests(@Autowired val mvc: MockMvc) {

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
  fun postShouldPublishMessageWithName() {
    zeebeClient.onPublishMessageCommand(FakePublishMessageRequest)
    mvc
      .perform(
        post("/messages")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
              {
                "name": "testMessageName"
              }  
              """))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error":  null}"""))
      .andExpect(content().json("""{ "key": 1 }"""))
  }

  @Test
  fun postShouldPublishMessageWithCorrelationKey() {
    zeebeClient.onPublishMessageCommand(FakePublishMessageRequest)
    mvc
      .perform(
        post("/messages")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
              {
                "name": "testMessageName",
                "correlationKey": "testCorrelationKey"
              }  
              """))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error":  null}"""))
      .andExpect(content().json("""{ "key": 1 }"""))
  }

  @Test
  fun postShouldPublishMessageWithTimeToLive() {
    zeebeClient.onPublishMessageCommand(FakePublishMessageRequest)
    mvc
      .perform(
        post("/messages")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
              {
                "name": "testMessageName",
                "correlationKey": "testCorrelationKey",
                "timeToLive": "1s"
              }  
              """))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error":  null}"""))
      .andExpect(content().json("""{ "key": 1 }"""))
  }

  @Test
  fun postShouldPublishMessageWithMessageId() {
    zeebeClient.onPublishMessageCommand(FakePublishMessageRequest)
    mvc
      .perform(
        post("/messages")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
              {
                "name": "testMessageName",
                "correlationKey": "testCorrelationKey",
                "timeToLive": "1s",
                "messageId": "testMessageId"
              }  
              """))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error":  null}"""))
      .andExpect(content().json("""{ "key": 1 }"""))
  }

  @Test
  fun postShouldPublishMessageWithVariables() {
    zeebeClient.onPublishMessageCommand(FakePublishMessageRequest)
    mvc
      .perform(
        post("/messages")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
              {
                "name": "testMessageName",
                "correlationKey": "testCorrelationKey",
                "timeToLive": "1s",
                "messageId": "testMessageId",
                "variables": {
                    "foo": "bar"
                  }
              }  
              """))
      .andExpect(status().isOk)
      .andExpect(content().json("""{ "error":  null}"""))
      .andExpect(content().json("""{ "key": 1 }"""))
  }

  @Test
  fun postShouldRejectMessageWithoutName() {
    mvc
      .perform(
        post("/messages")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
              {
                "correlationKey": "testMessageKey"
              }  
              """))
      .andExpect(status().isBadRequest)
      .andExpect(
        content()
          .json(
            """{ "error":  "Expected body property `name` to be provided, but it's null or undefined."}"""))
  }

  @Test
  fun postShouldRespondUnavailable() {
    zeebeClient.isRunning(false)
    mvc
      .perform(
        post("/messages")
          .contentType(MediaType.APPLICATION_JSON)
          .content(
            """
              {
                "name": "testMessageName"
              }  
              """))
      .andExpect(status().isServiceUnavailable)
      .andExpect(content().json("""{ "key": null }"""))
      .andExpect(
        content()
          .json(
            """
            {
              "error": "Unable to connect to Zeebe cluster. Please try again, or check the configuration settings."
            }
            """))
  }

  object FakePublishMessageRequest : PublishMessageResponse {
    override fun getMessageKey(): Long {
      return 1L
    }
  }
}
