package com.github.korthout.zeeberestclient

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication class ZeebeRestClientApplication

fun main(args: Array<String>) {
  runApplication<ZeebeRestClientApplication>(*args)
}
