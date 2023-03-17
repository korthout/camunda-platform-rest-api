---
id: self-managed
sidebar_position: 2.2
title: Camunda Platform 8 SM
description: Connect to Camunda Platform 8 Self-Managed
tags:
  - guides
  - connection
---

# Connecting to your Camunda Platform Self-Managed cluster

The operations available in the Camunda Platform REST API require a connection between the REST API and your Camunda Platform cluster.
Connections to each of the components of the cluster must be set up to access the full range of operations available in the Camunda Platform REST API.
Connecting to the components in your cluster can be achieved using environment variables.
See [configuration](../configuration.md) for an overview of all available environment variables.

We'll start this guide by [connecting to Zeebe](#connecting-to-self-managed-zeebe), so you can start [automating](../../api/automation.tag.mdx) your processes.
After that, we can expand the available operations by [connecting to Operate](#connecting-to-self-managed-operate), to gain [insights](../../api/insights.tag.mdx) into your processes.

## Connecting to Self-Managed Zeebe

With a connection to Zeebe you can [automate](../../api/automation.tag.mdx) your processes.

In order to connect to Zeebe in a Camunda Platform Self-Managed cluster, you'll need to know the IP address of the Zeebe Gateway.
Simply pass the address of the Zeebe Gateway as `ZEEBE_CLIENT_BROKER_GATEWAYADDRESS` to Docker when you start up the container.

```shell
# Example connecting to Self-Managed Zeebe Gateway at 192.168.50.118
docker run -p 8080:8080 \
  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

:::note
You'll need to open port 8080, so you can reach the API from your local machine, and it can reach the cluster.
:::

### Secure Communication using TLS

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

### Disabling TLS

If your Zeebe Gateway does not have [TLS enabled](https://docs.camunda.io/docs/self-managed/zeebe-deployment/security/secure-client-communication/#gateway),
then you can use `ZEEBE_INSECURE_CONNECTION` to disable the secure communication with the Zeebe Gateway over TLS.

```shell
# Example connecting to Self-Managed Zeebe Gateway at 192.168.50.118 without TLS
docker run -p 8080:8080 \
  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \
  -e ZEEBE_INSECURE_CONNECTION=true \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

### Checking the connection to Self-Managed Zeebe

The Camunda Platform REST API should now be connected to your Self-Managed Zeebe.
You can easily verify whether the connection is working correctly using:
- [Retrieve the Zeebe cluster status](../../api/get-status.api.mdx)

```shell
# Assuming that Camunda Platform REST API is available at localhost:8080
curl localhost:8080/status
```

### Troubleshooting the connection to Self-Managed Zeebe

If the [check above](#checking-the-connection-to-self-managed-zeebe) responds an error, please read the error message carefully.
In most cases, the message should guide you to resolve the problem.
If you're unable to resolve the issue with the provided error message, please open an issue on [GitHub](https://github.com/korthout/camunda-platform-rest-api/issues/new).

## Connecting to Self-Managed Operate

Next, we can connect to Self-Managed Operate.
With a connection to Operate you can get [insights](../../api/insights.tag.mdx) into your processes.

In order to connect to Operate, you'll need to know the base URL where Operate is available.
Simply pass the URL as `CAMUNDA_OPERATE_CLIENT_URL` to Docker when you start up the container.

You'll also need to authenticate yourself. There are two ways to authenticate to Operate:
- authenticate using a username and password
- authenticate using [Identity](https://docs.camunda.io/docs/self-managed/identity/what-is-identity/) and [Keycloak](https://www.keycloak.org/)

### Authenticate using a username and password

To authenticate using this simple authentication, all you need is a username and a password.

The username and password are configured using the `CAMUNDA_OPERATE_CLIENT_USERNAME` and `CAMUNDA_OPERATE_CLIENT_PASSWORD`  enviroment variables, respectively.
Just like before, we can pass these to Docker when you start up the container.

```shell
# Example connecting to Self-Managed Zeebe and Operate
# Both available at 192.168.50.118 through different ports
# Authenticating to Operate using the demo account's username and password
docker run -p 8080:8080 \
  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \
  -e CAMUNDA_OPERATE_CLIENT_URL=http://192.168.50.118:8080 \
  -e CAMUNDA_OPERATE_CLIENT_USERNAME=demo \
  -e CAMUNDA_OPERATE_CLIENT_PASSWORD=demo \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

### Authenticate using Identity and Keycloak

To authenticate using Identity and Keycloak, you'll need to provide a client id and secret as well the keycloak realm.

The client id and client secret are configured using the `CAMUNDA_OPERATE_CLIENT_CLIENTID` and `CAMUNDA_OPERATE_CLIENT_CLIENTSECRET` environment variables, respectively.

You may also need to adjust the Keycload realm and URL based on your installation. These can be configured using the `CAMUNDA_OPERATE_CLIENT_KEYCLOAKREALM` and ``CAMUNDA_OPERATE_CLIENT_KEYCLOAKURL`, respectively.

Just like before, we can pass these to Docker when you start up the container.

```shell
# Example connecting to Self-Managed Zeebe and Operate
# Both available at 192.168.50.118 through different ports
# Authenticating to Operate using the rest-api-client API client
# configured in Identity using the camunda-platform Keycloak realm
docker run -p 8080:8080 \
  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \
  -e CAMUNDA_OPERATE_CLIENT_URL=http://192.168.50.118:8080 \
  -e CAMUNDA_OPERATE_CLIENT_CLIENTID=rest-api-client \
  -e CAMUNDA_OPERATE_CLIENT_CLIENTSECRET=foTPogjlI0hidwbDZcYFWzmU8FOQwLx0 \
  -e CAMUNDA_OPERATE_CLIENT_KEYCLOAKREALM=camunda-platform \
  -e CAMUNDA_OPERATE_CLIENT_KEYCLOAKURL=http://localhost:18080 \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

### Checking the connection to Self-Managed Operate

The Camunda Platform REST API should now be connected to your Self-Managed Operate as well. You can easily verify whether the connection is working correctly using:
- [Retrieve the details of a process instance](../../api/get-process-instance.api.mdx)

```shell
# Assuming that Camunda Platform REST API is available at localhost:8080
curl localhost:8080/process-instances/2251799813685251 --fail
```

:::note
This requires the key of a process instance.
If you don't have a process instance key yet, you can [create a new process instance](../../api/create-process-instance.api.mdx).
Or just pass the key of a process instance that does not exist, which should respond with a `404 Not Found` error.
:::

### Troubleshooting the connection to Self-Managed Operate

If the [check above](#checking-the-connection-to-self-managed-operate) responds an error, please read the error message carefully.
In most cases, the message should guide you to resolve the problem.
If you're unable to resolve the issue with the provided error message, please open an issue on [GitHub](https://github.com/korthout/camunda-platform-rest-api/issues/new).

## Next steps

- [configure the connection](/docs/guides/config)
- explore the [API docs](/docs/api)
- play around with the API in Swagger UI (running at [/swagger-ui](http://localhost:8080/swagger-ui.html/)).
