package com.github.korthout.camundarestapi

import com.github.korthout.camundarestapi.zeebe.FakeZeebeClientLifecycle
import io.camunda.zeebe.client.api.response.*
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import java.lang.RuntimeException
import org.junit.jupiter.api.BeforeEach
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
  fun getShouldRespondCompleteTopology() {
    zeebeClient.onTopologyRequest(completeTopology)
    mvc
      .perform(get("/status"))
      .andExpect(status().isOk)
      .andExpect(content().json("{ error: null }"))
      .andExpect(
        content()
          .json(
            """
            {
              "data": {
                "clusterSize": 1,
                "partitionsCount": 1,
                "replicationFactor": 1,
                "gatewayVersion": "1",
                "brokers": [{
                  "address": "localhost",
                  "host": "localhost",
                  "port": 25600,
                  "version": "1",
                  "partitions": [{
                    "partitionId": 1,
                    "role": "LEADER",
                    "leader": true,
                    "health": "HEALTHY"
                  }],
                  "nodeId": 1
                }]
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
      .andExpect(content().json("""{ error: "java.lang.RuntimeException: bla" }"""))
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

  val completeTopology =
    object : Topology {
      override fun getBrokers(): MutableList<BrokerInfo> {
        return arrayListOf(
          object : BrokerInfo {
            override fun getNodeId(): Int {
              return 1
            }

            override fun getHost(): String {
              return "localhost"
            }

            override fun getPort(): Int {
              return 25600
            }

            override fun getAddress(): String {
              return "localhost"
            }

            override fun getVersion(): String {
              return "1"
            }

            override fun getPartitions(): MutableList<PartitionInfo> {
              return arrayListOf(
                object : PartitionInfo {
                  override fun getPartitionId(): Int {
                    return 1
                  }

                  override fun getRole(): PartitionBrokerRole {
                    return PartitionBrokerRole.LEADER
                  }

                  override fun isLeader(): Boolean {
                    return true
                  }

                  override fun getHealth(): PartitionBrokerHealth {
                    return PartitionBrokerHealth.HEALTHY
                  }
                })
            }
          })
      }

      override fun getClusterSize(): Int {
        return 1
      }

      override fun getPartitionsCount(): Int {
        return 1
      }

      override fun getReplicationFactor(): Int {
        return 1
      }

      override fun getGatewayVersion(): String {
        return "1"
      }
    }
}
