package com.github.korthout.camundarestapi.operate

/**
 * Fake to replace the OperateClient with a FakeOperateClient in the autowired
 * OperateClientLifecycle.
 */
object FakeOperateClientLifecycle : OperateClientLifecycle(FakeOperateClient)
