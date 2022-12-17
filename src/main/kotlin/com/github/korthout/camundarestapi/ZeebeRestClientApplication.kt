package com.github.korthout.camundarestapi

import io.camunda.zeebe.spring.client.EnableZeebeClient
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication @EnableZeebeClient class ZeebeRestClientApplication

fun main(args: Array<String>) {
  runApplication<ZeebeRestClientApplication>(*args)
}
