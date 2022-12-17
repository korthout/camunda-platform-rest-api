package com.github.korthout.camundarestapi

import io.camunda.zeebe.spring.client.EnableZeebeClient
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication @EnableZeebeClient class CamundaPlatformRestApiApplication

fun main(args: Array<String>) {
  runApplication<CamundaPlatformRestApiApplication>(*args)
}
