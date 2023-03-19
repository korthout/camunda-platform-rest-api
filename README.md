<h1 align="center">
  <p align="center">Camunda Platform REST API</p>
</h1>

<p align="center">
  <a href="https://github.com/camunda-community-hub/community"><img src="https://img.shields.io/badge/Community%20Extension-An%20open%20source%20community%20maintained%20project-FF4700" alt="Community Extension" /></a>
  <br/>
  <a href="https://camunda.com/platform/"><img src="https://img.shields.io/badge/Compatible%20with-Camunda%20Platform%208-0072Ce" alt="Compatible with: Camunda Platform 8" /></a>
  <a href="https://github.com/Camunda-Community-Hub/community/blob/main/extension-lifecycle.md#incubating-"><img src="https://img.shields.io/badge/Lifecycle-Incubating-blue" alt="Lifecycle: Incubating" /></a>
  <img alt="GitHub" src="https://img.shields.io/github/license/korthout/camunda-platform-rest-api?label=License" alt="Licence: Apache-2.0">
</p>

> **Note**
> **Public Beta** - We want your feedback!
> Give it a star on GitHub if you like the project.
> Or please tell us what you'd like to see added or changed in a [GitHub Issue](https://github.com/korthout/camunda-platform-rest-api/issues).
>
> **Warning**
> **This project is incubating** - While it is ready to be used,
> it does not offer operations for all parts of Camunda Platform 8 yet.
> Have a look at [API](#api) to see what operations are already available.
> [Let us know](https://github.com/korthout/camunda-platform-rest-api/issues/10) what operations you'd like to see next.
>
> **Warning**
> **This API is not yet stable** - We might break backward compatibility in newer releases of `v0`.

## Introduction

Camunda Platform REST API is a REST API to interact with [Camunda Platform 8](https://camunda.com/platform/).

Camunda Platform 8 has multiple different APIs.
Typically, one for each component.
There are gRPC, GraphQL, and REST APIs for you to connect to and learn, which can be difficult and time consuming.
Camunda Platform REST API offers a single consistent REST API to interact with Camunda Platform 8.

- Get Started Quickly

> Camunda Platform REST API was designed to be easily installed, to get you connected to [Camunda Platform 8](https://camunda.com/platform/) quickly.

- Easy to Use

> Thanks to a consistent API design and an [OpenAPI](https://www.openapis.org/) specification, you can focus on interacting with Camunda Platform 8.

- Community Driven

> This project is community maintained. We welcome [contributions](https://github.com/korthout/camunda-platform-rest-api/blob/main/CONTRIBUTING.md) for feature requests and bug reports, as well as for docs and code changes.

### API

| Method  |          Resource          |                Description                 |
|---------|----------------------------|--------------------------------------------|
| `GET`   | `/status`                  | Retrieve the Topology of a Zeebe cluster   |
| `POST`  | `/process-instances`       | Create a new Process Instance              |
| `GET`   | `/process-instances/{key}` | Retrieve the details of a Process Instance |
| `GET`   | `/jobs`                    | Activate Jobs                              |
| `PATCH` | `/jobs/{key}`              | Update a Job                               |
| ..      | ..                         | Not yet implemented                        |

You can find the full API reference documentation in the [`openapi.yaml`](openapi.yaml) specification, and in the [Docs](https://korthout.github.io/camunda-platform-rest-api/).

## Getting Started

The easiest way to start the Camunda Platform REST API is using Docker.

```shell
docker pull ghcr.io/korthout/camunda-platform-rest-api:latest
```

Using the provided [Docker Compose file](./docker/docker-compose.yml) you can start a new local Camunda Platform 8 cluster and connect the Camunda Platform REST API to it.
This is a great way to try out the Camunda Platform REST API before connecting it to your production cluster.

```shell
docker compose -f ./docker/docker-compose.yml up -d
```

Once running, you can try it out the REST API.

```shell
curl localhost:8080/status
```

Or, explore the API in Swagger UI running at [/swagger-ui](http://localhost:8080/swagger-ui.html).

## Documentation

Read the [docs](https://korthout.github.io/camunda-platform-rest-api/) for any further information:
- [Connect to a cluster](https://korthout.github.io/camunda-platform-rest-api/docs/guides/connection)
- [Configuration](https://korthout.github.io/camunda-platform-rest-api/docs/guides/config)
- [API](https://korthout.github.io/camunda-platform-rest-api/docs/api)

## Acknowledgements

This software would not be possible without these awesome projects:

- [Spring Zeebe](https://github.com/camunda-community-hub/spring-zeebe)
  \- Easily use the Zeebe Java Client in your Spring or Spring Boot projects
- [Camunda Operate Client](https://github.com/camunda-community-hub/camunda-operate-client-java)
  \- Simplified Java client for the Operate API of Camunda Platform 8
- [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator)
  \- Generate clients, servers, and documentation from OpenAPI 2.0/3.x documents
- [Docusaurus OpenAPI Doc Generator](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs)
  \- OpenAPI plugin for generating API reference docs in Docusaurus v2.
- [kotlin-duration-string](https://github.com/blueanvil/kotlin-duration-string)
  \- A tiny Kotlin library for dealing with human-readable duration strings like `2h 45m 50s`

A full list of projects we depend on can be found in the [pom file](pom.xml).

## License

Camunda Platform REST API is Open Source software released under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0.html).
