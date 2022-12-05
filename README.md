# Zeebe REST Client

A REST API to interact with a [Zeebe](github.com/camunda/zeebe) cluster.

## About

Zeebe only has a gRPC API.
Users can either use one of the existing client implementations, or implement their own.
For most programming languages this is possible, but gRPC is not available to all languages.
In addition, not all common programming languages have a dedicated Zeebe client.
The Zeebe REST Client aims to provide a simple but flexible REST API, to use Zeebe from all code.

### API

| Method |       Resource       |                Description                 |
|--------|----------------------|--------------------------------------------|
| `GET`  | `/status`            | Retrieves the Topology of a Zeebe cluster. |
| `POST` | `/process-instances` | Creates a new Process Instance             |
| ..     | ..                   | Not yet implemented                        |

#### GET `/status`

Retrieves the Topology of a Zeebe cluster.

On HttpStatus `200`:

```json5
{
  "data": {
    "clusterSize": "number",
    "partitionsCount": "number",
    "replicationFactor": "number",
    "gatewayVersion": "string",
    "brokers": [{
      "address": "string",
      "host": "string",
      "port": "number",
      "version": "number",
      "partitions": [{
        "partitionId": "number",
        "role": "string",
        "leader": "boolean",
        "health": "string"
      }],
      "nodeId": "number"
    }]
  },
  "error": null
}
```

On HttpStatus `400`, `503`:

```json5
{
  "data": null,
  "error": "string"
}
```

#### POST `/process-instances`

Creates a new Process Instance

**Requires**
- header: `'Content-Type': APPLICATION_JSON`
- a body containing:

```json5
{
  // required if processDefinitionKey is null
  "bpmnProcessId": "string or null",

  // required if bpmnProcessId is null
  "processDefinitionKey": "string or null",

  // optional
  "variables": "object or null"
}
```

On HttpStatus `200`:

```json5
{
  "data": {
    "processDefinitionKey": "number",
    "bpmnProcessId": "string",
    "version": "number",
    "processInstanceKey": "number"
  },
  "error": null
}
```

On HttpStatus `400`, `503`:

```json5
{
  "data": null,
  "error": "string"
}
```

## Getting Started

The easiest way to start the Zeebe REST Client is using Docker.

```shell
docker pull ghcr.io/korthout/zeebe-rest-client:latest
```

Using the provided [Docker Compose file](./docker/docker-compose.yml) you can start a new local Zeebe cluster and connect the Zeebe REST Client to it.
This is a great way to try out the Zeebe REST Client before connecting it to your production Zeebe cluster.

```shell
docker compose -f ./docker/docker-compose.yml up -d
```

Once running, you can try it out the REST API.

```shell
curl localhost:8080/status
```

## Connecting to your Camunda Platform SaaS cluster

Connecting to your own cluster can be achieved using environment variables.
In order to connect to a Camunda Platform SaaS cluster, you'll need to
[create an API Client](https://docs.camunda.io/docs/components/console/manage-clusters/manage-api-clients/)
first. Make sure to select the `Zeebe` scope.
Once created, download the credentials as Spring Boot file.
These Spring Boot properties can be directly used as environment variables.
Simply pass the file to Docker when you start up the container.

```shell
docker run --env-file <path-to-credentials-spring-boot-file> -p 8080:8080 ghcr.io/korthout/zeebe-rest-client:latest
```

> **Note**
> You'll need to open port 8080, so you can reach the API from your local machine, and it can reach the cluster.

If you don't connect to the Camunda Platform SaaS production environment you may also have to adjust these properties:

```shell
zeebe.client.cloud.base-url=zeebe.camunda.io
zeebe.client.cloud.port=443
zeebe.client.cloud.auth-url=https://login.cloud.camunda.io/oauth/token
```

## Configuration

You can configure the underlying spring-zeebe client using any of the
[Zeebe Client environment variables](https://docs.camunda.io/docs/apis-clients/java-client/#bootstrapping)
and the [additional configuration options](https://github.com/camunda-community-hub/spring-zeebe#additional-configuration-options)
offered by spring-zeebe.

## Acknowledgements

This project is build using:

- [Spring Zeebe](https://github.com/camunda-community-hub/spring-zeebe)

## License

Zeebe REST Client is Open Source software released under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0.html).
