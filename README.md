# Zeebe REST Client

A REST API to interact with a [Zeebe](github.com/camunda/zeebe) cluster.

## About

Zeebe only has a gRPC API.
Users can either use one of the existing client implementations, or implement their own.
For most programming languages this is possible, but gRPC is not available to all languages.
In addition, not all common programming languages have a dedicated Zeebe client.
The Zeebe REST Client aims to provide a simple but flexible REST API, to use Zeebe from all code.

### API

| Method |  Resource   |                Description                 |
|--------|-------------|--------------------------------------------|
| `GET`  | `/status`   | Retrieves the Topology of a Zeebe cluster. |
| `POST` | `/instance` | Not yet implemented                        |
| ..     | ..          | Not yet implemented                        |

## Usage

For now, you'll need Maven to start the Zeebe REST Client.

```sh
mvn spring-boot:run
```

In the future, I'd like to expand this to Docker, so you don't need have Maven to run it.

### Configuration

> **Note**
> As an alternative you can use the [Zeebe Client environment variables](https://docs.camunda.io/docs/apis-clients/java-client/#bootstrapping) to set any of these configurations.

Connections to the Camunda SaaS can be easily configured,
create the following entries in `src/main/resources/application.yaml`. .

```yaml
zeebe:
  client:
    cloud:
      cluster-id: xxx
      client-id: xxx
      client-secret: xxx
      region: bru-2
```

You can also configure the connection to a self-managed Zeebe broker:

```yaml
zeebe:
  client:
    broker:
      gateway-address: 127.0.0.1:26500
    security:
      plaintext: true
```

If you don't connect to the Camunda SaaS production environment you may have to also adjust these properties:

```yaml
zeebe:
  client:
    cloud:
      base-url: zeebe.camunda.io
      port: 443
      auth-url: https://login.cloud.camunda.io/oauth/token
```

## Acknowledgements

This project is build using:

- [Spring Zeebe](https://github.com/camunda-community-hub/spring-zeebe)

## License

Zeebe REST Client is Open Source software released under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0.html).
