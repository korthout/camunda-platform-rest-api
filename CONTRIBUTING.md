# Contributing to Camunda Platform REST API

This project is community maintained.
We welcome contributions for feature requests and bug reports, as well as for docs and code changes.

## Feature requests and bug reports

If you would want to see something added or changed, or encountered a bug.
Please open an [issue on GitHub](https://github.com/korthout/camunda-platform-rest-api/issues).

## Docs changes

Saw a typo or want to make other changes to the [Docs](https://korthout.github.io/camunda-platform-rest-api/)?
Please have a look at the documentation's [README](https://github.com/korthout/camunda-platform-rest-api/blob/main/docs/README.md).

If your changes affect the [API](https://korthout.github.io/camunda-platform-rest-api/docs/api) section,
then you'll need to make the changes to the `openapi.yaml` file,
and [regenerate the Docs](https://github.com/korthout/camunda-platform-rest-api/blob/main/docs/README.md#update-the-openapi-docs).
Making changes manually to the [`docs/docs/api`](https://github.com/korthout/camunda-platform-rest-api/tree/main/docs/docs/api)
is not supported, since those files are generated from the OpenAPI specification.

## Code changes

We also welcome code changes. If you're thinking of opening a large pull request,
please consider opening an issue on GitHub first to discuss it.

### Build from source

This is a maven project.
To build it from source, run the command: `mvn clean install -DskipTests` in the root folder.

> **Note**
> All Kotlin code in this repo is built and tested with JDK 17.

The resulting build artifact can be found in the folder `target`, i.e.

```
target/camunda-platform-rest-api-X-Y-Z-SNAPSHOT.jar
```

The distribution can be containerized with Docker automatically in maven by running:
`mvn jib:dockerBuild`.

