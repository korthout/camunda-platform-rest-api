---
id: self-managed
sidebar_position: 2.2
title: Camunda Platform SM
description: Camunda Platform Self-Managed connection
tags:
  - guides
  - connection
---

# Connecting to your Camunda Platform Self-Managed cluster

Connecting to your own cluster can be achieved using environment variables.
In order to connect to a Camunda Platform Self-Managed cluster, you'll need to know the IP address
of the Zeebe Gateway.
Simply pass the address of the Zeebe Gateway as `ZEEBE_CLIENT_BROKER_GATEWAYADDRESS` to Docker when you start up the container.

```shell
# Example connecting to Self-Managed Zeebe Gateway at 192.168.50.118
docker run -p 8080:8080 \
  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

> **Note**
> You'll need to open port 8080, so you can reach the API from your local machine, and it can reach the cluster.

## Secure Communication using TLS

By default, the Camunda Platform REST API communicates securely with the Zeebe Gateway over TLS.
Without any configuration, the client looks in the system's certificate store for a CA certificate with which to validate the gateway's certificate chain.
If you wish to use TLS without having to install a certificate in client's system, you can specify a CA certificate using `ZEEBE_CA_CERTIFICATE_PATH`.

```shell
# Example connecting to Self-Managed Zeebe Gateway at 192.168.50.118 with a specific CA certificate
docker run -p 8080:8080 \
  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \
  -e ZEEBE_CA_CERTIFICATE_PATH=/path-to-ca-certificate \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

## Disabling TLS

If your Zeebe Gateway does not have [TLS enabled](https://docs.camunda.io/docs/self-managed/zeebe-deployment/security/secure-client-communication/#gateway),
then you can use `ZEEBE_INSECURE_CONNECTION` to disable the secure communication with the Zeebe Gateway over TLS.

```shell
# Example connecting to Self-Managed Zeebe Gateway at 192.168.50.118 without TLS
docker run -p 8080:8080 \
  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \
  -e ZEEBE_INSECURE_CONNECTION=true \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

## Next steps

- [configure the connection](/docs/guides/config)
- explore the [API docs](/docs/api)
- play around with the API in Swagger UI (running at [/swagger-ui](http://localhost:8080/swagger-ui.html/)).
