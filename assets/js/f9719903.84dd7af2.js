"use strict";(self.webpackChunkcamunda_platform_rest_api=self.webpackChunkcamunda_platform_rest_api||[]).push([[694],{15565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>g,frontMatter:()=>h,metadata:()=>u,toc:()=>y});var i=r(87462),s=(r(67294),r(3905)),a=r(38055),o=(r(47878),r(55878)),n=r(51663),p=(r(98045),r(91795)),l=r(18211),c=r(55985),m=r(85162);const h={id:"get-status",title:"Retrieve the Zeebe cluster status",description:"Retrieves the Topology of a Zeebe cluster from the Gateway. This provides insights into the current status of the cluster",sidebar_label:"Retrieve the Zeebe cluster status",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieves the Topology of a Zeebe cluster from the Gateway. This provides insights into the current status of the cluster",operationId:"getStatus",responses:{200:{description:"successfully retrieved",content:{"application/json":{schema:{title:"A response to GET /status",description:"A response to GET /status",type:"object",properties:{data:{title:"A topology for a Zeebe cluster",description:"A topology for a Zeebe cluster",type:"object",properties:{clusterSize:{type:"integer",format:"int32",description:"The expected number of brokers (nodes) in the cluster"},partitionsCount:{type:"integer",format:"int32",description:"The number of partitions spread across the cluster"},replicationFactor:{type:"integer",format:"int32",description:"The number of replicas that should exist of each partition."},gatewayVersion:{type:"string",description:"The version of the gateway's software"},brokers:{type:"array",items:{type:"object",properties:{address:{type:"string",description:"The address of the broker (host:port)"},host:{type:"string",description:"The hostname of the broker"},port:{type:"integer",format:"int32",description:"The port at which the broker can be contacted"},version:{type:"string",description:"The version of the broker's software"},partitions:{type:"array",items:{type:"object",properties:{partitionId:{type:"integer",format:"int32",description:"The unique (within a cluster) ID of the partition"},role:{type:"string",enum:["LEADER","FOLLOWER","INACTIVE"],description:"The RAFT role of the broker for the partition"},leader:{type:"boolean",description:"Whether the broker is leader for the partition, or not"},health:{type:"string",enum:["HEALTHY","UNHEALTHY","DEAD"],description:"The health of the partition on the broker"}},title:"TopologyPartition"},description:"The list of partitions managed or replicated on this broker"},nodeId:{type:"integer",format:"int32",description:"The unique (within the cluster) ID for the broker"}},title:"TopologyBroker"},description:"The list of brokers that are part of the cluster"}}},error:{type:"string"}}}}}},503:{description:"Unable to connect to Zeebe cluster"}},tags:["Cluster"],method:"get",path:"/status",info:{title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.\n\n:::caution\n\nThis API is not yet stable - we may break backward compatibility in newer releases of `v0`.\n\n:::",version:"0.2.0"},postman:{name:"Retrieve the Zeebe cluster status",description:{content:"Retrieves the Topology of a Zeebe cluster from the Gateway. This provides insights into the current status of the cluster",type:"text/plain"},url:{path:["status"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/camunda-platform-rest-api",custom_edit_url:null},d=void 0,u={unversionedId:"api/get-status",id:"api/get-status",title:"Retrieve the Zeebe cluster status",description:"Retrieves the Topology of a Zeebe cluster from the Gateway. This provides insights into the current status of the cluster",source:"@site/docs/api/get-status.api.mdx",sourceDirName:"api",slug:"/api/get-status",permalink:"/camunda-platform-rest-api/docs/api/get-status",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-status",title:"Retrieve the Zeebe cluster status",description:"Retrieves the Topology of a Zeebe cluster from the Gateway. This provides insights into the current status of the cluster",sidebar_label:"Retrieve the Zeebe cluster status",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieves the Topology of a Zeebe cluster from the Gateway. This provides insights into the current status of the cluster",operationId:"getStatus",responses:{200:{description:"successfully retrieved",content:{"application/json":{schema:{title:"A response to GET /status",description:"A response to GET /status",type:"object",properties:{data:{title:"A topology for a Zeebe cluster",description:"A topology for a Zeebe cluster",type:"object",properties:{clusterSize:{type:"integer",format:"int32",description:"The expected number of brokers (nodes) in the cluster"},partitionsCount:{type:"integer",format:"int32",description:"The number of partitions spread across the cluster"},replicationFactor:{type:"integer",format:"int32",description:"The number of replicas that should exist of each partition."},gatewayVersion:{type:"string",description:"The version of the gateway's software"},brokers:{type:"array",items:{type:"object",properties:{address:{type:"string",description:"The address of the broker (host:port)"},host:{type:"string",description:"The hostname of the broker"},port:{type:"integer",format:"int32",description:"The port at which the broker can be contacted"},version:{type:"string",description:"The version of the broker's software"},partitions:{type:"array",items:{type:"object",properties:{partitionId:{type:"integer",format:"int32",description:"The unique (within a cluster) ID of the partition"},role:{type:"string",enum:["LEADER","FOLLOWER","INACTIVE"],description:"The RAFT role of the broker for the partition"},leader:{type:"boolean",description:"Whether the broker is leader for the partition, or not"},health:{type:"string",enum:["HEALTHY","UNHEALTHY","DEAD"],description:"The health of the partition on the broker"}},title:"TopologyPartition"},description:"The list of partitions managed or replicated on this broker"},nodeId:{type:"integer",format:"int32",description:"The unique (within the cluster) ID for the broker"}},title:"TopologyBroker"},description:"The list of brokers that are part of the cluster"}}},error:{type:"string"}}}}}},503:{description:"Unable to connect to Zeebe cluster"}},tags:["Cluster"],method:"get",path:"/status",info:{title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.\n\n:::caution\n\nThis API is not yet stable - we may break backward compatibility in newer releases of `v0`.\n\n:::",version:"0.2.0"},postman:{name:"Retrieve the Zeebe cluster status",description:{content:"Retrieves the Topology of a Zeebe cluster from the Gateway. This provides insights into the current status of the cluster",type:"text/plain"},url:{path:["status"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/camunda-platform-rest-api",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Cluster",permalink:"/camunda-platform-rest-api/docs/api/cluster"},next:{title:"Automation",permalink:"/camunda-platform-rest-api/docs/api/automation"}},f={},y=[],b={toc:y};function g(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{className:"openapi__heading"},"Retrieve the Zeebe cluster status"),(0,s.kt)(o.Z,{method:"get",path:"/status",mdxType:"MethodEndpoint"}),(0,s.kt)("p",null,"Retrieves the Topology of a Zeebe cluster from the Gateway. This provides insights into the current status of the cluster"),(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successfully retrieved")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"A topology for a Zeebe cluster")),(0,s.kt)(l.Z,{collapsible:!1,name:"clusterSize",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"The expected number of brokers (nodes) in the cluster"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"partitionsCount",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"The number of partitions spread across the cluster"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"replicationFactor",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"The number of replicas that should exist of each partition."},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"gatewayVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The version of the gateway's software"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"brokers"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The list of brokers that are part of the cluster")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The address of the broker (host:port)"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"host",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The hostname of the broker"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"port",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"The port at which the broker can be contacted"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The version of the broker's software"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{},className:"openapi-markdown__details"},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"partitions"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The list of partitions managed or replicated on this broker")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"partitionId",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"The unique (within a cluster) ID of the partition"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"role",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`LEADER`, `FOLLOWER`, `INACTIVE`]",schema:{type:"string",enum:["LEADER","FOLLOWER","INACTIVE"],description:"The RAFT role of the broker for the partition"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"leader",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Whether the broker is leader for the partition, or not"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"health",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`HEALTHY`, `UNHEALTHY`, `DEAD`]",schema:{type:"string",enum:["HEALTHY","UNHEALTHY","DEAD"],description:"The health of the partition on the broker"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!1,name:"nodeId",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"The unique (within the cluster) ID for the broker"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "data": {\n    "clusterSize": 0,\n    "partitionsCount": 0,\n    "replicationFactor": 0,\n    "gatewayVersion": "string",\n    "brokers": [\n      {\n        "address": "string",\n        "host": "string",\n        "port": 0,\n        "version": "string",\n        "partitions": [\n          {\n            "partitionId": 0,\n            "role": "LEADER",\n            "leader": true,\n            "health": "HEALTHY"\n          }\n        ],\n        "nodeId": 0\n      }\n    ]\n  },\n  "error": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Unable to connect to Zeebe cluster")),(0,s.kt)("div",null))))))}g.isMDXComponent=!0}}]);