package com.github.korthout.camundarestapi

import com.github.korthout.camundarestapi.apis.StatusApi
import com.github.korthout.camundarestapi.models.StatusResponse
import com.github.korthout.camundarestapi.models.Topology
import com.github.korthout.camundarestapi.models.TopologyBroker
import com.github.korthout.camundarestapi.models.TopologyPartition
import com.github.korthout.camundarestapi.models.TopologyPartition.*
import io.camunda.zeebe.client.api.response.PartitionBrokerHealth
import io.camunda.zeebe.client.api.response.PartitionBrokerRole
import io.camunda.zeebe.spring.client.lifecycle.ZeebeClientLifecycle
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RestController

@RestController
class StatusController : StatusApi {

  @Autowired lateinit var client: ZeebeClientLifecycle

  override fun getStatus(): ResponseEntity<StatusResponse> =
    if (!client.isRunning)
      ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
        .body(
          StatusResponse(
            error =
              "Unable to connect to Zeebe cluster." +
                " Please try again, or check the configuration settings."))
    else {
      client
        .newTopologyRequest()
        .send()
        .thenApply { topology ->
          ResponseEntity.ok(
            StatusResponse(
              Topology(
                clusterSize = topology.clusterSize,
                partitionsCount = topology.partitionsCount,
                replicationFactor = topology.replicationFactor,
                gatewayVersion = topology.gatewayVersion,
                brokers =
                  topology.brokers.map { broker ->
                    TopologyBroker(
                      address = broker.address,
                      host = broker.host,
                      port = broker.port,
                      nodeId = broker.nodeId,
                      version = broker.version,
                      partitions =
                        broker.partitions.map { partition ->
                          TopologyPartition(
                            partitionId = partition.partitionId,
                            role =
                              when (partition.role) {
                                PartitionBrokerRole.LEADER -> Role.lEADER
                                PartitionBrokerRole.FOLLOWER -> Role.fOLLOWER
                                PartitionBrokerRole.INACTIVE -> Role.iNACTIVE
                                null -> null
                              },
                            leader = partition.isLeader,
                            health =
                              when (partition.health) {
                                PartitionBrokerHealth.HEALTHY -> Health.hEALTHY
                                PartitionBrokerHealth.UNHEALTHY -> Health.uNHEALTHY
                                PartitionBrokerHealth.DEAD -> Health.dEAD
                                null -> null
                              })
                        })
                  })))
        }
        .exceptionally {
          ResponseEntity.badRequest().body(StatusResponse(error = it.cause.toString()))
        }
        .toCompletableFuture()
        .join()
    }
}
