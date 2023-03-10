"use strict";(self.webpackChunkcamunda_platform_rest_api=self.webpackChunkcamunda_platform_rest_api||[]).push([[44],{73739:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>g,frontMatter:()=>h,metadata:()=>u,toc:()=>f});var a=i(87462),o=(i(67294),i(3905)),s=i(38055),n=(i(47878),i(55878)),r=i(51663),c=i(98045),m=i(91795),l=i(18211),p=i(55985),d=i(85162);const h={id:"activate-jobs",title:"Activate Jobs of a specific type",description:"Will activate available jobs of the specific type, and returns the activated jobs.",sidebar_label:"Activate Jobs of a specific type",hide_title:!0,hide_table_of_contents:!0,api:{description:"Will activate available jobs of the specific type, and returns the activated jobs.\n\nIf no jobs of this type are available, then the connection may be kept open until one or\nmore jobs become available, or the request times out due to long polling.",operationId:"activateJobs",parameters:[{name:"type",description:"The type of the job to activate",in:"query",style:"form",required:!0,schema:{type:"string"}},{name:"maxJobsToActivate",description:"The maximum number of jobs to activate in this request",in:"query",style:"form",required:!1,schema:{type:"integer",format:"int32",default:32}},{name:"worker",description:"The name of the worker requesting to activate the jobs",in:"query",style:"form",required:!1,schema:{type:"string",default:"default"}},{name:"jobTimeout",description:"Duration during which the activated jobs are claimed by this worker",in:"query",style:"form",required:!1,schema:{type:"string",default:"5m"},examples:{durationTenSeconds:{summary:"Duration of ten seconds",value:"10s"},durationFiveMin:{summary:"Duration of five minutes",value:"5m"},durationOneAndAHalfHour:{summary:"Duration of one hour and thirty minutes",value:"1h30m"}}},{name:"fetchVariables",description:"Names of the variables to fetch with each job.\n\nIf empty, all visible variables at the time of activation for the scope of the job will\nbe returned.",in:"query",style:"form",required:!1,schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"Zero or more jobs activated",content:{"application/json":{schema:{title:"A response to a request to Activate Jobs",description:"A response to a request to Activate Jobs",type:"object",properties:{data:{type:"object",properties:{jobs:{type:"array",items:{title:"A unit of work within a process",description:"A job represents a distinct unit of work within a business process.\n\nService tasks represent such jobs in your process and are identified by a unique id.\nA job has a type to allow specific job workers to find jobs that they can work on.",type:"object",properties:{key:{type:"integer",format:"int64",description:"Key of the job"},status:{type:"string",description:"The status of the job",enum:["activatable","activated","failed","error_thrown","completed"]},type:{type:"string",description:"Type of the job"},processInstanceKey:{type:"integer",format:"int64",description:"Key of the process instance which this job belongs to"},bpmnProcessId:{type:"string",description:"BPMN process id of the process which this job belongs to"},processDefinitionVersion:{type:"integer",format:"int32",description:"Version number of the process which this job belongs to"},processDefinitionKey:{type:"integer",format:"int64",description:"Key of the process which this job belongs to"},elementId:{type:"string",description:"Id of the element in the process which this job belongs to"},elementInstanceKey:{type:"integer",format:"int64",description:"Key of the element instance which this job belongs to"},customHeaders:{type:"object",description:"Set of custom headers defined during modelling; returned as a serialized JSON document\n"},worker:{type:"string",description:"Name of the worker that activated this job"},retries:{type:"integer",format:"int32",description:"Number of retries left for this job"},deadline:{type:"integer",format:"int64",description:"UNIX epoch timestamp specifying when the job can be activated again"},variables:{type:"object",description:"JSON document consisting of all variables visible to the task scope at the time of job\nactivation\n"}}}}}},error:{type:"string"}}}}}},503:{description:"Unable to connect to Zeebe cluster"}},tags:["Process-Automation"],method:"get",path:"/jobs",info:{title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.\n\n:::caution\n\nThis API is not yet stable - we may break backward compatibility in newer releases of `v0`.\n\n:::",version:"0.2.0-SNAPSHOT"},postman:{name:"Activate Jobs of a specific type",description:{content:"Will activate available jobs of the specific type, and returns the activated jobs.\n\nIf no jobs of this type are available, then the connection may be kept open until one or\nmore jobs become available, or the request times out due to long polling.",type:"text/plain"},url:{path:["jobs"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The type of the job to activate",type:"text/plain"},key:"type",value:""},{disabled:!1,description:{content:"The maximum number of jobs to activate in this request",type:"text/plain"},key:"maxJobsToActivate",value:""},{disabled:!1,description:{content:"The name of the worker requesting to activate the jobs",type:"text/plain"},key:"worker",value:""},{disabled:!1,description:{content:"Duration during which the activated jobs are claimed by this worker",type:"text/plain"},key:"jobTimeout",value:""},{disabled:!1,description:{content:"Names of the variables to fetch with each job.\n\nIf empty, all visible variables at the time of activation for the scope of the job will\nbe returned.",type:"text/plain"},key:"fetchVariables",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/camunda-platform-rest-api",custom_edit_url:null},b=void 0,u={unversionedId:"api/activate-jobs",id:"api/activate-jobs",title:"Activate Jobs of a specific type",description:"Will activate available jobs of the specific type, and returns the activated jobs.",source:"@site/docs/api/activate-jobs.api.mdx",sourceDirName:"api",slug:"/api/activate-jobs",permalink:"/camunda-platform-rest-api/docs/api/activate-jobs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"activate-jobs",title:"Activate Jobs of a specific type",description:"Will activate available jobs of the specific type, and returns the activated jobs.",sidebar_label:"Activate Jobs of a specific type",hide_title:!0,hide_table_of_contents:!0,api:{description:"Will activate available jobs of the specific type, and returns the activated jobs.\n\nIf no jobs of this type are available, then the connection may be kept open until one or\nmore jobs become available, or the request times out due to long polling.",operationId:"activateJobs",parameters:[{name:"type",description:"The type of the job to activate",in:"query",style:"form",required:!0,schema:{type:"string"}},{name:"maxJobsToActivate",description:"The maximum number of jobs to activate in this request",in:"query",style:"form",required:!1,schema:{type:"integer",format:"int32",default:32}},{name:"worker",description:"The name of the worker requesting to activate the jobs",in:"query",style:"form",required:!1,schema:{type:"string",default:"default"}},{name:"jobTimeout",description:"Duration during which the activated jobs are claimed by this worker",in:"query",style:"form",required:!1,schema:{type:"string",default:"5m"},examples:{durationTenSeconds:{summary:"Duration of ten seconds",value:"10s"},durationFiveMin:{summary:"Duration of five minutes",value:"5m"},durationOneAndAHalfHour:{summary:"Duration of one hour and thirty minutes",value:"1h30m"}}},{name:"fetchVariables",description:"Names of the variables to fetch with each job.\n\nIf empty, all visible variables at the time of activation for the scope of the job will\nbe returned.",in:"query",style:"form",required:!1,schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"Zero or more jobs activated",content:{"application/json":{schema:{title:"A response to a request to Activate Jobs",description:"A response to a request to Activate Jobs",type:"object",properties:{data:{type:"object",properties:{jobs:{type:"array",items:{title:"A unit of work within a process",description:"A job represents a distinct unit of work within a business process.\n\nService tasks represent such jobs in your process and are identified by a unique id.\nA job has a type to allow specific job workers to find jobs that they can work on.",type:"object",properties:{key:{type:"integer",format:"int64",description:"Key of the job"},status:{type:"string",description:"The status of the job",enum:["activatable","activated","failed","error_thrown","completed"]},type:{type:"string",description:"Type of the job"},processInstanceKey:{type:"integer",format:"int64",description:"Key of the process instance which this job belongs to"},bpmnProcessId:{type:"string",description:"BPMN process id of the process which this job belongs to"},processDefinitionVersion:{type:"integer",format:"int32",description:"Version number of the process which this job belongs to"},processDefinitionKey:{type:"integer",format:"int64",description:"Key of the process which this job belongs to"},elementId:{type:"string",description:"Id of the element in the process which this job belongs to"},elementInstanceKey:{type:"integer",format:"int64",description:"Key of the element instance which this job belongs to"},customHeaders:{type:"object",description:"Set of custom headers defined during modelling; returned as a serialized JSON document\n"},worker:{type:"string",description:"Name of the worker that activated this job"},retries:{type:"integer",format:"int32",description:"Number of retries left for this job"},deadline:{type:"integer",format:"int64",description:"UNIX epoch timestamp specifying when the job can be activated again"},variables:{type:"object",description:"JSON document consisting of all variables visible to the task scope at the time of job\nactivation\n"}}}}}},error:{type:"string"}}}}}},503:{description:"Unable to connect to Zeebe cluster"}},tags:["Process-Automation"],method:"get",path:"/jobs",info:{title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.\n\n:::caution\n\nThis API is not yet stable - we may break backward compatibility in newer releases of `v0`.\n\n:::",version:"0.2.0-SNAPSHOT"},postman:{name:"Activate Jobs of a specific type",description:{content:"Will activate available jobs of the specific type, and returns the activated jobs.\n\nIf no jobs of this type are available, then the connection may be kept open until one or\nmore jobs become available, or the request times out due to long polling.",type:"text/plain"},url:{path:["jobs"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The type of the job to activate",type:"text/plain"},key:"type",value:""},{disabled:!1,description:{content:"The maximum number of jobs to activate in this request",type:"text/plain"},key:"maxJobsToActivate",value:""},{disabled:!1,description:{content:"The name of the worker requesting to activate the jobs",type:"text/plain"},key:"worker",value:""},{disabled:!1,description:{content:"Duration during which the activated jobs are claimed by this worker",type:"text/plain"},key:"jobTimeout",value:""},{disabled:!1,description:{content:"Names of the variables to fetch with each job.\n\nIf empty, all visible variables at the time of activation for the scope of the job will\nbe returned.",type:"text/plain"},key:"fetchVariables",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/api/camunda-platform-rest-api",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Create a new Process Instance",permalink:"/camunda-platform-rest-api/docs/api/create-process-instance"},next:{title:"Update a Job",permalink:"/camunda-platform-rest-api/docs/api/update-job"}},y={},f=[],v={toc:f};function g(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{className:"openapi__heading"},"Activate Jobs of a specific type"),(0,o.kt)(n.Z,{method:"get",path:"/jobs",mdxType:"MethodEndpoint"}),(0,o.kt)("p",null,"Will activate available jobs of the specific type, and returns the activated jobs."),(0,o.kt)("p",null,"If no jobs of this type are available, then the connection may be kept open until one or\nmore jobs become available, or the request times out due to long polling."),(0,o.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Query Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(c.Z,{className:"paramsItem",param:{name:"type",description:"The type of the job to activate",in:"query",style:"form",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,o.kt)(c.Z,{className:"paramsItem",param:{name:"maxJobsToActivate",description:"The maximum number of jobs to activate in this request",in:"query",style:"form",required:!1,schema:{type:"integer",format:"int32",default:32}},mdxType:"ParamsItem"}),(0,o.kt)(c.Z,{className:"paramsItem",param:{name:"worker",description:"The name of the worker requesting to activate the jobs",in:"query",style:"form",required:!1,schema:{type:"string",default:"default"}},mdxType:"ParamsItem"}),(0,o.kt)(c.Z,{className:"paramsItem",param:{name:"jobTimeout",description:"Duration during which the activated jobs are claimed by this worker",in:"query",style:"form",required:!1,schema:{type:"string",default:"5m"},examples:{durationTenSeconds:{summary:"Duration of ten seconds",value:"10s"},durationFiveMin:{summary:"Duration of five minutes",value:"5m"},durationOneAndAHalfHour:{summary:"Duration of one hour and thirty minutes",value:"1h30m"}}},mdxType:"ParamsItem"}),(0,o.kt)(c.Z,{className:"paramsItem",param:{name:"fetchVariables",description:"Names of the variables to fetch with each job.\n\nIf empty, all visible variables at the time of activation for the scope of the job will\nbe returned.",in:"query",style:"form",required:!1,schema:{type:"array",items:{type:"string"}}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Zero or more jobs activated")),(0,o.kt)("div",null,(0,o.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(p.Z,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details"},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{},className:"openapi-markdown__details"},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"jobs"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(l.Z,{collapsible:!1,name:"key",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Key of the job"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`activatable`, `activated`, `failed`, `error_thrown`, `completed`]",schema:{type:"string",description:"The status of the job",enum:["activatable","activated","failed","error_thrown","completed"]},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Type of the job"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"processInstanceKey",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Key of the process instance which this job belongs to"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"bpmnProcessId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"BPMN process id of the process which this job belongs to"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"processDefinitionVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"Version number of the process which this job belongs to"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"processDefinitionKey",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Key of the process which this job belongs to"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"elementId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Id of the element in the process which this job belongs to"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"elementInstanceKey",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"Key of the element instance which this job belongs to"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"customHeaders",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",description:"Set of custom headers defined during modelling; returned as a serialized JSON document\n"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"worker",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name of the worker that activated this job"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"retries",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",description:"Number of retries left for this job"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"deadline",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"UNIX epoch timestamp specifying when the job can be activated again"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"variables",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",description:"JSON document consisting of all variables visible to the task scope at the time of job\nactivation\n"},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,o.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(m.Z,{responseExample:'{\n  "data": {\n    "jobs": [\n      {\n        "key": 0,\n        "status": "activatable",\n        "type": "string",\n        "processInstanceKey": 0,\n        "bpmnProcessId": "string",\n        "processDefinitionVersion": 0,\n        "processDefinitionKey": 0,\n        "elementId": "string",\n        "elementInstanceKey": 0,\n        "customHeaders": {},\n        "worker": "string",\n        "retries": 0,\n        "deadline": 0,\n        "variables": {}\n      }\n    ]\n  },\n  "error": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Unable to connect to Zeebe cluster")),(0,o.kt)("div",null))))))}g.isMDXComponent=!0}}]);