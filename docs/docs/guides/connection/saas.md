---
id: saas
sidebar_position: 2.1
title: Camunda Platform 8 SaaS
description: Connect to Camunda Platform 8 SaaS
tags:
  - guides
  - connection
---

# Connecting to your Camunda Platform SaaS cluster

Connecting to your own cluster can be achieved using environment variables.
See [configuration](../configuration.md) for an overview of all available environment variables.

In order to connect to a Camunda Platform SaaS cluster, you'll need to
[create an API Client](https://docs.camunda.io/docs/components/console/manage-clusters/manage-api-clients/)
first. Make sure to select the `Zeebe` and/or `Operate` [scopes](#about-scopes) (new users probably want to select both).
Once created, download the credentials as Spring Boot file.
These Spring Boot properties can be directly used as environment variables.
Simply pass the file to Docker when you start up the container.

```shell
docker run -p 8080:8080 \
  --env-file /path-to-credentials-spring-boot-file \
  ghcr.io/korthout/camunda-platform-rest-api:latest
```

:::note
You'll need to open port 8080, so you can reach the API from your local machine, and it can reach the cluster.
:::

If you don't connect to the Camunda Platform SaaS production environment you may also have to adjust these properties:

```shell
zeebe.client.cloud.base-url=zeebe.camunda.io
zeebe.client.cloud.port=443
zeebe.client.cloud.auth-url=https://login.cloud.camunda.io/oauth/token
```

## Checking the connection to your cluster

The Camunda Platform REST API should now be connected to your Camunda Platform SaaS cluster.
You can easily verify whether the connection is working correctly using:
- [Retrieve the Zeebe cluster status](../../api/get-status.api.mdx)

```shell
# Assuming that Camunda Platform REST API is available at localhost:8080
curl localhost:8080/status
```

## Troubleshooting the connection to your cluster

If the [check above](#checking-the-connection-to-saas) responds an error, please read the error message carefully.
In most cases, the message should guide you to resolve the problem.
If you're unable to resolve the issue with the provided error message, please open an issue on [GitHub](https://github.com/korthout/camunda-platform-rest-api/issues/new).

## About scopes

The client used to connect to your cluster requires a selection of scopes.
These scopes determine the access permissions to the components of the cluster, like Zeebe and Operate.
Camuna Platform REST API offers operations that interact with these different components.
Depending on which operations you need, you'll need to make sure the right scopes are selected for the client.
If you want all operations to be available, you need to select both the `Zeebe` and `Operate` scopes.
You may wish to limit the scopes to limit the available operations.

The operations are categorized into the following groups with scope requirements:
 - [Cluster](../../api/cluster.tag.mdx) operations require `Zeebe` scope
 - [Automation](../../api/automation.tag.mdx) operations require `Zeebe` scope
 - [Insights](../../api/insights.tag.mdx) operations require `Operate` scope

## Next steps

- [configure the connection](/docs/guides/config)
- explore the [API docs](/docs/api)
- play around with the API in Swagger UI (running at [/swagger-ui](http://localhost:8080/swagger-ui.html/)).
