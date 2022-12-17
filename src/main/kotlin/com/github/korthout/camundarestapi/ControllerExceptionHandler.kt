package com.github.korthout.camundarestapi

import com.fasterxml.jackson.databind.exc.MismatchedInputException
import java.lang.Exception
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.web.bind.MissingServletRequestParameterException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.context.request.WebRequest
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler

@ControllerAdvice
class ControllerExceptionHandler : ResponseEntityExceptionHandler() {

  /** Transforms all Spring provided error handling into our own defined [Response]. */
  override fun handleExceptionInternal(
    ex: Exception,
    body: Any?,
    headers: HttpHeaders,
    status: HttpStatus,
    request: WebRequest
  ): ResponseEntity<Any> {
    val message =
      when {
        ex is MissingServletRequestParameterException ->
          "Expected query parameter `${ex.parameterName}` to be provided, but it's null or undefined."
        ex is HttpMessageNotReadableException && ex.cause is MismatchedInputException -> {
          val property = (ex.cause as MismatchedInputException).path[0]?.fieldName ?: "<unknown>"
          "Expected body property `${property}` to be provided, but it's null or undefined."
        }
        else -> body?.toString() ?: ex.message ?: "Unexpected error occurred."
      }
    return ResponseEntity.status(status)
      .contentType(MediaType.APPLICATION_JSON)
      .body(Response<Any>(message))
  }
}
