package com.github.korthout.zeeberestclient.zeebe

import io.camunda.zeebe.client.api.ZeebeFuture
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit

/**
 * This is a ZeebeFuture that immediately completes upon construction. It is useful during testing
 * of code using the ZeebeClient.
 */
class CompletedZeebeFuture<T>(private val value: T? = null, private val error: Throwable? = null) :
  ZeebeFuture<T>, CompletableFuture<T>() {

  init {
    if (value != null) {
      complete(value)
    } else {
      completeExceptionally(error)
    }
  }

  override fun complete(value: T): Boolean {
    return super.complete(value)
  }
  override fun join(timeout: Long, unit: TimeUnit?): T {
    if (value != null) {
      return value
    }
    throw error!!
  }
}
