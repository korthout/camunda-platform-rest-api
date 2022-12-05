package com.github.korthout.zeeberestclient

import com.github.korthout.zeeberestclient.zeebe.FakeZeebeClientLifecycle
import io.camunda.zeebe.client.api.response.BrokerInfo
import io.camunda.zeebe.client.api.response.Topology
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import java.lang.RuntimeException
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.context.TestConfiguration
import org.springframework.context.annotation.Bean
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@SpringBootTest
@AutoConfigureMockMvc
class StatusControllerTests(@Autowired val mvc: MockMvc) {

  @TestConfiguration
  internal class StatusControllerTestConfiguration {
    @Bean
    fun client(): ZeebeClientLifecycle {
      return FakeZeebeClientLifecycle()
    }
  }

  @Autowired lateinit var zeebeClient: FakeZeebeClientLifecycle

  @Test
  fun getShouldRespondEmptyTopology() {
    zeebeClient.onTopologyRequest(emptyTopology)
    mvc
      .perform(get("/status"))
      .andExpect(status().isOk)
      .andExpect(content().json("{ error: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              data: {
                "clusterSize": 0,
                "partitionsCount": 0,
                "replicationFactor": 0,
                "gatewayVersion": "",
                "brokers": []
              }
            }
            """))
  }

  @Test
  fun getShouldRespondUnavailable() {
    zeebeClient.isRunning(false)
    mvc
      .perform(get("/status"))
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
  fun getShouldRespondError() {
    zeebeClient.onTopologyRequest(RuntimeException("bla"))
    mvc
      .perform(get("/status"))
      .andExpect(status().is4xxClientError)
      .andExpect(content().json("{ data: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              error: "java.util.concurrent.CompletionException: java.lang.RuntimeException: bla"
            }
            """))
  }

  val emptyTopology =
    object : Topology {
      override fun getBrokers(): MutableList<BrokerInfo> {
        return ArrayList()
      }

      override fun getClusterSize(): Int {
        return 0
      }

      override fun getPartitionsCount(): Int {
        return 0
      }

      override fun getReplicationFactor(): Int {
        return 0
      }

      override fun getGatewayVersion(): String {
        return ""
      }
    }
}
