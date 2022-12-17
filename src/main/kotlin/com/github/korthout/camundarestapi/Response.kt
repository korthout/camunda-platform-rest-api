package com.github.korthout.camundarestapi

/** All responses have data or an error. */
data class Response<T>(val data: T?, val error: String?) {
  constructor(data: T) : this(data, null)
  constructor(error: String) : this(null, error)
}
