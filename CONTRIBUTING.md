# Contributing to Camunda Platform REST API

## Build from source

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

