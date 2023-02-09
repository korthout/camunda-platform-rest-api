---
id: saas
sidebar_position: 2.1
title: Camunda Platform SaaS
description: Camunda Platform SaaS connection
tags:
  - guides
  - connection
---

# Connecting to your Camunda Platform SaaS cluster

Connecting to your own cluster can be achieved using environment variables.
In order to connect to a Camunda Platform SaaS cluster, you'll need to
[create an API Client](https://docs.camunda.io/docs/components/console/manage-clusters/manage-api-clients/)
first. Make sure to select the `Zeebe` scope.
Once created, download the credentials as Spring Boot file.
These Spring Boot properties can be directly used as environment variables.
Simply pass the file to Docker when you start up the container.

```shell
docker run -p 8080:8080 \
  --env-file /path-to-credentials-spring-boot-file \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

> **Note**
> You'll need to open port 8080, so you can reach the API from your local machine, and it can reach the cluster.

If you don't connect to the Camunda Platform SaaS production environment you may also have to adjust these properties:

```shell
zeebe.client.cloud.base-url=zeebe.camunda.io
zeebe.client.cloud.port=443
zeebe.client.cloud.auth-url=https://login.cloud.camunda.io/oauth/token
```