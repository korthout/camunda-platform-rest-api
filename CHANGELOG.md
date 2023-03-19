# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project will adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) starting with `v1`.

> **Warning**
> **This API is not yet stable** - We might break backward compatibility in newer releases of `v0`.

## [Unreleased]

## [0.2.0] - 2023-03-19

### Added

- New operations to:
  - Retrieve the details of a Process Instance (#93)
- New Docker compose services to easily get started:
  - Operate and Elasticsearch (#93)
- New environment variables to configure:
  - The connection to Operate (#93)
- New dependencies:
  - Camunda Operate Client 8.1.7.0 (#93)

### Changed

- Updated dependencies:
  - Spring Boot to 3.0.4 (#90)
  - OpenApi Generator Maven Plugin to 6.4.0 (#79)
  - Spring Zeebe to 8.1.17 (#78)

## [0.1.0] - 2023-02-12

### Added

- New Docker image that contains a REST API to Camunda Platform 8
- New Docker compose file `docker/docker-compose.yml` for getting started
- `openapi.yaml` that specifies the entire REST API
- New website to help users get started and find reference documentation
- New operations to:
  - Retrieve the Topology of a Zeebe cluster
  - Create a new Process Instance
  - Activate Jobs
  - Update a Job (Complete, Fail, or Throw Error)

[unreleased]: https://github.com/korthout/camunda-platform-rest-api/compare/v0.2.0...main
[0.2.0]: https://github.com/korthout/camunda-platform-rest-api/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/korthout/camunda-platform-rest-api/releases/tag/v0.1.0

