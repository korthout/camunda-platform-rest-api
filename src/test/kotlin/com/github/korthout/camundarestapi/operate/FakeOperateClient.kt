package com.github.korthout.camundarestapi.operate

import io.camunda.operate.CamundaOperateClient
import io.camunda.operate.dto.ProcessInstance
import io.camunda.operate.exception.OperateException

/**
 * Fake CamundaOperateClient for usage in tests. Simply set respective property and it will be
 * returned.
 */
object FakeOperateClient : CamundaOperateClient() {

  var error: OperateException? = null
  var processInstance: ProcessInstance? = null

  fun reset() {
    error = null
    processInstance = null
  }

  fun onGetProcessInstance(response: ProcessInstance) {
    error = null
    processInstance = response
  }

  fun onGetProcessInstance(error: OperateException) {
    this.error = error
    processInstance = null
  }

  override fun getProcessInstance(key: Long): ProcessInstance? {
    if (error != null) {
      throw error as OperateException
    }
    return processInstance
  }
}
