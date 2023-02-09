---
id: getting-started
sidebar_position: 1
tags:
  - guides
---

# Getting started

The easiest way to start the Camunda Platform REST API is using Docker.

```shell
docker pull ghcr.io/korthout/camunda-platform-rest-api:latest
```

Using the provided [Docker Compose file](https://github.com/korthout/camunda-platform-rest-api/blob/main/docker/docker-compose.yml) you can start a new local Zeebe cluster and connect the Camunda Platform REST API to it.
This is a great way to try out the Camunda Platform REST API before connecting it to your production Zeebe cluster.

```shell
docker compose -f ./docker/docker-compose.yml up -d
```

Once running, you can try it out the REST API.

```shell
curl localhost:8080/status
```

Or, explore the API in Swagger UI running at [/swagger-ui](http://localhost:8080/swagger-ui.html/).
