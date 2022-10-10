package com.github.korthout.zeeberestclient

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/status")
class StatusController {

  @GetMapping fun getStatus(): String = "Not yet implemented"
}
