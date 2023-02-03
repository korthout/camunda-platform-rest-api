package com.github.korthout.camundarestapi

import com.fasterxml.jackson.databind.exc.MismatchedInputException
import com.fasterxml.jackson.databind.exc.ValueInstantiationException
import java.lang.Exception
import org.springframework.http.*
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
    statusCode: HttpStatusCode,
    request: WebRequest
  ): ResponseEntity<Any> {
    val message =
      when {
        ex is MissingServletRequestParameterException ->
          "Expected query parameter `${ex.parameterName}` to be provided, but it's null or undefined."
        ex is HttpMessageNotReadableException && ex.cause is ValueInstantiationException -> {
          ex.message ?: "Unexpected error occurred."
        }
        ex is HttpMessageNotReadableException && ex.cause is MismatchedInputException -> {
          val property = (ex.cause as MismatchedInputException).path[0]?.fieldName ?: "<unknown>"
          "Expected body property `${property}` to be provided, but it's null or undefined."
        }
        else -> body?.toString() ?: ex.message ?: "Unexpected error occurred."
      }
    return ResponseEntity.status(statusCode)
      .contentType(MediaType.APPLICATION_JSON)
      .body(Response<Any>(message))
  }
}
