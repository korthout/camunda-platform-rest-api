"use strict";(self.webpackChunkcamunda_platform_rest_api=self.webpackChunkcamunda_platform_rest_api||[]).push([[924],{83315:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>h,metadata:()=>y,toc:()=>g});var i=s(87462),a=(s(67294),s(3905)),n=s(38055),r=(s(47878),s(55878)),o=s(51663),c=s(98045),p=s(91795),l=s(18211),d=s(55985),m=s(85162);const h={id:"get-process-instance",title:"Retrieve the details of a process instance",description:"Retrieve the details of a process instance.",sidebar_label:"Retrieve the details of a process instance",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieve the details of a process instance.\nNote that this data may lag behind the actual process instance's status, but is eventually consistent.",operationId:"getProcessInstance",parameters:[{name:"key",description:"Key (unique identifier) of the process instance",in:"path",required:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"The details of the process instance.",content:{"application/json":{schema:{title:"A response to a request to retrieve ProcessInstanceDetails",description:"A response to a request to retrieve ProcessInstanceDetails",type:"object",properties:{data:{title:"A process instance",description:"A process instance",type:"object",properties:{processDefinitionKey:{type:"integer",format:"int64",description:"Key of the process which this instance belongs to"},bpmnProcessId:{type:"string",description:"BPMN process id of the process which this instance belongs to"},version:{type:"integer",description:"Version of the process which this instance belongs to"},processInstanceKey:{type:"integer",format:"int64",description:"Unique key of the process instance on the partition"},parentInstanceKey:{type:"integer",format:"int64",description:"Unique key of the process instance which this instance is a part of (e.g. called from call activity), or null if it has no parent instance"},status:{type:"string",description:"The status of the process instance",enum:["activated","has_incident","completed","terminated"]},startedAt:{type:"string",description:"Timestamp when the process instance was started, in ISO 8601 representation"},endedAt:{type:"string",description:"Timestamp when the process instance was ended, in ISO 8601 representation, or null if it has yet ended"}}},error:{type:"string"}}}}}},404:{description:"Unable to find the process instance. Are you sure an instance with this key was created? Note that this data may lag behind due to eventual consistency. Please try this request again in a few moments."},503:{description:"Unable to connect to Operate"}},tags:["Insights"],method:"get",path:"/process-instances/{key}",info:{title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.\n\n:::caution\n\nThis API is not yet stable - we may break backward compatibility in newer releases of `v0`.\n\n:::",version:"0.2.0-SNAPSHOT",externalDocs:{description:"Find out more",url:"https://korthout.github.io/camunda-platform-rest-api/"}},postman:{name:"Retrieve the details of a process instance",description:{content:"Retrieve the details of a process instance.\nNote that this data may lag behind the actual process instance's status, but is eventually consistent.",type:"text/plain"},url:{path:["process-instances",":key"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Key (unique identifier) of the process instance",type:"text/plain"},type:"any",value:"",key:"key"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/camunda-platform-rest-api",custom_edit_url:null},u=void 0,y={unversionedId:"api/get-process-instance",id:"api/get-process-instance",title:"Retrieve the details of a process instance",description:"Retrieve the details of a process instance.",source:"@site/docs/api/get-process-instance.api.mdx",sourceDirName:"api",slug:"/api/get-process-instance",permalink:"/camunda-platform-rest-api/docs/api/get-process-instance",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-process-instance",title:"Retrieve the details of a process instance",description:"Retrieve the details of a process instance.",sidebar_label:"Retrieve the details of a process instance",hide_title:!0,hide_table_of_contents:!0,api:{description:"Retrieve the details of a process instance.\nNote that this data may lag behind the actual process instance's status, but is eventually consistent.",operationId:"getProcessInstance",parameters:[{name:"key",description:"Key (unique identifier) of the process instance",in:"path",required:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"The details of the process instance.",content:{"application/json":{schema:{title:"A response to a request to retrieve ProcessInstanceDetails",description:"A response to a request to retrieve ProcessInstanceDetails",type:"object",properties:{data:{title:"A process instance",description:"A process instance",type:"object",properties:{processDefinitionKey:{type:"integer",format:"int64",description:"Key of the process which this instance belongs to"},bpmnProcessId:{type:"string",description:"BPMN process id of the process which this instance belongs to"},version:{type:"integer",description:"Version of the process which this instance belongs to"},processInstanceKey:{type:"integer",format:"int64",description:"Unique key of the process instance on the partition"},parentInstanceKey:{type:"integer",format:"int64",description:"Unique key of the process instance which this instance is a part of (e.g. called from call activity), or null if it has no parent instance"},status:{type:"string",description:"The status of the process instance",enum:["activated","has_incident","completed","terminated"]},startedAt:{type:"string",description:"Timestamp when the process instance was started, in ISO 8601 representation"},endedAt:{type:"string",description:"Timestamp when the process instance was ended, in ISO 8601 representation, or null if it has yet ended"}}},error:{type:"string"}}}}}},404:{description:"Unable to find the process instance. Are you sure an instance with this key was created? Note that this data may lag behind due to eventual consistency. Please try this request again in a few moments."},503:{description:"Unable to connect to Operate"}},tags:["Insights"],method:"get",path:"/process-instances/{key}",info:{title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.\n\n:::caution\n\nThis API is not yet stable - we may break backward compatibility in newer releases of `v0`.\n\n:::",version:"0.2.0-SNAPSHOT",externalDocs:{description:"Find out more",url:"https://korthout.github.io/camunda-platform-rest-api/"}},postman:{name:"Retrieve the details of a process instance",description:{content:"Retrieve the details of a process instance.\nNote that this data may lag behind the actual process instance's status, but is eventually consistent.",type:"text/plain"},url:{path:["process-instances",":key"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Key (unique identifier) of the process instance",type:"text/plain"},type:"any",value:"",key:"key"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/camunda-platform-rest-api",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Insights",permalink:"/camunda-platform-rest-api/docs/api/insights"}},f={},g=[],b={toc:g};function k(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{className:"openapi__heading"},"Retrieve the details of a process instance"),(0,a.kt)(r.Z,{method:"get",path:"/process-instances/{key}",mdxType:"MethodEndpoint"}),(0,a.kt)("p",null,"Retrieve the details of a process instance.\nNote that this data may lag behind the actual process instance's status, but is eventually consistent."),(0,a.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(c.Z,{className:"paramsItem",param:{name:"key",description:"Key (unique identifier) of the process instance",in:"path",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The details of the process instance.")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{},className:"openapi-markdown__details"},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"A process instance")),(0,a.kt)(l.Z,{collapsible:!1,name:"processDefinitionKey",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Key of the process which this instance belongs to"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"bpmnProcessId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"BPMN process id of the process which this instance belongs to"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"version",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Version of the process which this instance belongs to"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"processInstanceKey",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Unique key of the process instance on the partition"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"parentInstanceKey",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Unique key of the process instance which this instance is a part of (e.g. called from call activity), or null if it has no parent instance"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`activated`, `has_incident`, `completed`, `terminated`]",schema:{type:"string",description:"The status of the process instance",enum:["activated","has_incident","completed","terminated"]},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"startedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp when the process instance was started, in ISO 8601 representation"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"endedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Timestamp when the process instance was ended, in ISO 8601 representation, or null if it has yet ended"},mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "data": {\n    "processDefinitionKey": 0,\n    "bpmnProcessId": "string",\n    "version": 0,\n    "processInstanceKey": 0,\n    "parentInstanceKey": 0,\n    "status": "activated",\n    "startedAt": "string",\n    "endedAt": "string"\n  },\n  "error": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Unable to find the process instance. Are you sure an instance with this key was created? Note that this data may lag behind due to eventual consistency. Please try this request again in a few moments.")),(0,a.kt)("div",null)),(0,a.kt)(m.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Unable to connect to Operate")),(0,a.kt)("div",null))))))}k.isMDXComponent=!0}}]);