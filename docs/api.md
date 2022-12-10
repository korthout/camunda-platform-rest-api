# API Reference
This document tries to provide full reference documentation on the REST API. 

## Overview
| Method |       Resource       | Description                              |
|--------|----------------------|------------------------------------------|
| `GET`  | `/status`            | Retrieve the Topology of a Zeebe cluster |
| `POST` | `/process-instances` | Create a new Process Instance            |
| ..     | ..                   | Not yet implemented                      |

## `GET /status`

Retrieve the Topology of a Zeebe cluster.

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

## `POST /process-instances`

Create a new Process Instance.

**Required**
- header: `'Content-Type': APPLICATION_JSON`
- body containing:

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
