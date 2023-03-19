---
id: config
sidebar_position: 3
tags:
  - guides
---

# Configuration

The Camunda Platform REST API connects to several components in your cluster.

## Zeebe

You can configure the Zeebe connection using the following properties:

### `ZEEBE_CLIENT_CLOUD_CLUSTER_ID` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

ID of the SaaS cluster that Zeebe is part of.

### `ZEEBE_CLIENT_CLOUD_REGION` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

Region where the SaaS cluster exists.

### `ZEEBE_CLIENT_CLOUD_CLIENT_ID` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

ID of an API Client with `Zeebe` scope.

### `ZEEBE_CLIENT_CLOUD_CLIENT_SECRET` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

Secret belonging to API Client defined by `ZEEBE_CLIENT_CLOUD_CLIENT_ID`.

### `ZEEBE_CLIENT_BROKER_GATEWAYADDRESS` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

Address of a Zeebe Gateway.

### `ZEEBE_CA_CERTIFICATE_PATH` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

Path to the CA certificate to validate the gateway's certificate chain.
The client looks in the system's certificate store instead by default.

### `ZEEBE_INSECURE_CONNECTION` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

Disables secure communication over TLS.
Secure communication over TLS is enabled by default.

### Other environment variables

You can also configure the Zeebe connection using any of the
[Zeebe Client environment variables](https://docs.camunda.io/docs/apis-clients/java-client/#bootstrapping)
and the [additional configuration options](https://github.com/camunda-community-hub/spring-zeebe#additional-configuration-options)
offered by spring-zeebe.

## Operate

You can configure the Operate connection using the following properties:

### `ZEEBE_CLIENT_CLOUD_CLUSTER_ID` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

ID of the SaaS cluster that Operate is part of.

### `ZEEBE_CLIENT_CLOUD_REGION` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

Region where the SaaS cluster exists.

### `ZEEBE_CLIENT_CLOUD_CLIENT_ID` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

ID of an API Client with `Operate` scope.

### `ZEEBE_CLIENT_CLOUD_CLIENT_SECRET` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

Secret belonging to API Client defined by `ZEEBE_CLIENT_CLOUD_CLIENT_ID`.

### `CAMUNDA_OPERATE_CLIENT_URL` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

Base URL of Operate.

### `CAMUNDA_OPERATE_CLIENT_USERNAME` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

Username for simple authentication to Operate.

### `CAMUNDA_OPERATE_CLIENT_PASSWORD` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

Password for simple authentication to Operate.

### `CAMUNDA_OPERATE_CLIENT_CLIENTID` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

ID of an API Client with `Operate` scope.

### `CAMUNDA_OPERATE_CLIENT_CLIENTID` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

ID of an Identity API.

### `CAMUNDA_OPERATE_CLIENT_CLIENTSECRET` ![SaaS](https://img.shields.io/badge/-SaaS-informational)

Secret belonging to API Client defined by `CAMUNDA_OPERATE_CLIENT_CLIENTID`.

### `CAMUNDA_OPERATE_CLIENT_CLIENTSECRET` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

Secret belonging to Identity API defined by `CAMUNDA_OPERATE_CLIENT_CLIENTID`.

### `CAMUNDA_OPERATE_CLIENT_KEYCLOAKREALM` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

Keycloak realm that Identity is connected to.

### `CAMUNDA_OPERATE_CLIENT_KEYCLOAKURL` ![Self-Managed](https://img.shields.io/badge/-Self--Managed-informational)

URL of Keycloak.

## Next steps

- explore the [API docs](/docs/api)
- play around with the API in Swagger UI (running at [/swagger-ui](http://localhost:8080/swagger-ui.html/)).
