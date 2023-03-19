"use strict";(self.webpackChunkcamunda_platform_rest_api=self.webpackChunkcamunda_platform_rest_api||[]).push([[557],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>E});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),c=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(d.Provider,{value:a},e.children)},_="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),_=c(t),m=i,E=_["".concat(d,".").concat(m)]||_[m]||p[m]||l;return t?n.createElement(E,o(o({ref:a},s),{},{components:t})):n.createElement(E,o({ref:a},s))}));function E(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var d in a)hasOwnProperty.call(a,d)&&(r[d]=a[d]);r.originalType=e,r[_]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},43820:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>_,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const l={id:"config",sidebar_position:3,tags:["guides"]},o="Configuration",r={unversionedId:"guides/config",id:"guides/config",title:"Configuration",description:"The Camunda Platform REST API connects to several components in your cluster.",source:"@site/docs/guides/configuration.md",sourceDirName:"guides",slug:"/guides/config",permalink:"/camunda-platform-rest-api/docs/guides/config",draft:!1,editUrl:"https://github.com/korthout/camunda-platform-rest-api/tree/main/docs/docs/guides/configuration.md",tags:[{label:"guides",permalink:"/camunda-platform-rest-api/docs/tags/guides"}],version:"current",sidebarPosition:3,frontMatter:{id:"config",sidebar_position:3,tags:["guides"]},sidebar:"tutorialSidebar",previous:{title:"Camunda Platform 8 SM",permalink:"/camunda-platform-rest-api/docs/guides/connection/self-managed"}},d={},c=[{value:"Zeebe",id:"zeebe",level:2},{value:"<code>ZEEBE_CLIENT_CLOUD_CLUSTER_ID</code> SaaS",id:"zeebe_client_cloud_cluster_id-saas",level:3},{value:"<code>ZEEBE_CLIENT_CLOUD_REGION</code> SaaS",id:"zeebe_client_cloud_region-saas",level:3},{value:"<code>ZEEBE_CLIENT_CLOUD_CLIENT_ID</code> SaaS",id:"zeebe_client_cloud_client_id-saas",level:3},{value:"<code>ZEEBE_CLIENT_CLOUD_CLIENT_SECRET</code> SaaS",id:"zeebe_client_cloud_client_secret-saas",level:3},{value:"<code>ZEEBE_CLIENT_BROKER_GATEWAYADDRESS</code> Self-Managed",id:"zeebe_client_broker_gatewayaddress-self-managed",level:3},{value:"<code>ZEEBE_CA_CERTIFICATE_PATH</code> Self-Managed",id:"zeebe_ca_certificate_path-self-managed",level:3},{value:"<code>ZEEBE_INSECURE_CONNECTION</code> Self-Managed",id:"zeebe_insecure_connection-self-managed",level:3},{value:"Other environment variables",id:"other-environment-variables",level:3},{value:"Operate",id:"operate",level:2},{value:"<code>ZEEBE_CLIENT_CLOUD_CLUSTER_ID</code> SaaS",id:"zeebe_client_cloud_cluster_id-saas-1",level:3},{value:"<code>ZEEBE_CLIENT_CLOUD_REGION</code> SaaS",id:"zeebe_client_cloud_region-saas-1",level:3},{value:"<code>ZEEBE_CLIENT_CLOUD_CLIENT_ID</code> SaaS",id:"zeebe_client_cloud_client_id-saas-1",level:3},{value:"<code>ZEEBE_CLIENT_CLOUD_CLIENT_SECRET</code> SaaS",id:"zeebe_client_cloud_client_secret-saas-1",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_URL</code> Self-Managed",id:"camunda_operate_client_url-self-managed",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_USERNAME</code> Self-Managed",id:"camunda_operate_client_username-self-managed",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_PASSWORD</code> Self-Managed",id:"camunda_operate_client_password-self-managed",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_CLIENTID</code> SaaS",id:"camunda_operate_client_clientid-saas",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_CLIENTID</code> Self-Managed",id:"camunda_operate_client_clientid-self-managed",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_CLIENTSECRET</code> SaaS",id:"camunda_operate_client_clientsecret-saas",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_CLIENTSECRET</code> Self-Managed",id:"camunda_operate_client_clientsecret-self-managed",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_KEYCLOAKREALM</code> Self-Managed",id:"camunda_operate_client_keycloakrealm-self-managed",level:3},{value:"<code>CAMUNDA_OPERATE_CLIENT_KEYCLOAKURL</code> Self-Managed",id:"camunda_operate_client_keycloakurl-self-managed",level:3},{value:"Next steps",id:"next-steps",level:2}],s={toc:c};function _(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The Camunda Platform REST API connects to several components in your cluster."),(0,i.kt)("h2",{id:"zeebe"},"Zeebe"),(0,i.kt)("p",null,"You can configure the Zeebe connection using the following properties:"),(0,i.kt)("h3",{id:"zeebe_client_cloud_cluster_id-saas"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_CLOUD_CLUSTER_ID")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"ID of the SaaS cluster that Zeebe is part of."),(0,i.kt)("h3",{id:"zeebe_client_cloud_region-saas"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_CLOUD_REGION")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"Region where the SaaS cluster exists."),(0,i.kt)("h3",{id:"zeebe_client_cloud_client_id-saas"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_CLOUD_CLIENT_ID")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"ID of an API Client with ",(0,i.kt)("inlineCode",{parentName:"p"},"Zeebe")," scope."),(0,i.kt)("h3",{id:"zeebe_client_cloud_client_secret-saas"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_CLOUD_CLIENT_SECRET")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"Secret belonging to API Client defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_CLOUD_CLIENT_ID"),"."),(0,i.kt)("h3",{id:"zeebe_client_broker_gatewayaddress-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_BROKER_GATEWAYADDRESS")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"Address of a Zeebe Gateway."),(0,i.kt)("h3",{id:"zeebe_ca_certificate_path-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CA_CERTIFICATE_PATH")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"Path to the CA certificate to validate the gateway's certificate chain.\nThe client looks in the system's certificate store instead by default."),(0,i.kt)("h3",{id:"zeebe_insecure_connection-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_INSECURE_CONNECTION")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"Disables secure communication over TLS.\nSecure communication over TLS is enabled by default."),(0,i.kt)("h3",{id:"other-environment-variables"},"Other environment variables"),(0,i.kt)("p",null,"You can also configure the Zeebe connection using any of the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.camunda.io/docs/apis-clients/java-client/#bootstrapping"},"Zeebe Client environment variables"),"\nand the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/camunda-community-hub/spring-zeebe#additional-configuration-options"},"additional configuration options"),"\noffered by spring-zeebe."),(0,i.kt)("h2",{id:"operate"},"Operate"),(0,i.kt)("p",null,"You can configure the Operate connection using the following properties:"),(0,i.kt)("h3",{id:"zeebe_client_cloud_cluster_id-saas-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_CLOUD_CLUSTER_ID")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"ID of the SaaS cluster that Operate is part of."),(0,i.kt)("h3",{id:"zeebe_client_cloud_region-saas-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_CLOUD_REGION")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"Region where the SaaS cluster exists."),(0,i.kt)("h3",{id:"zeebe_client_cloud_client_id-saas-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_CLOUD_CLIENT_ID")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"ID of an API Client with ",(0,i.kt)("inlineCode",{parentName:"p"},"Operate")," scope."),(0,i.kt)("h3",{id:"zeebe_client_cloud_client_secret-saas-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"ZEEBE_CLIENT_CLOUD_CLIENT_SECRET")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"Secret belonging to API Client defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_CLOUD_CLIENT_ID"),"."),(0,i.kt)("h3",{id:"camunda_operate_client_url-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_URL")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"Base URL of Operate."),(0,i.kt)("h3",{id:"camunda_operate_client_username-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_USERNAME")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"Username for simple authentication to Operate."),(0,i.kt)("h3",{id:"camunda_operate_client_password-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_PASSWORD")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"Password for simple authentication to Operate."),(0,i.kt)("h3",{id:"camunda_operate_client_clientid-saas"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_CLIENTID")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"ID of an API Client with ",(0,i.kt)("inlineCode",{parentName:"p"},"Operate")," scope."),(0,i.kt)("h3",{id:"camunda_operate_client_clientid-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_CLIENTID")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"ID of an Identity API."),(0,i.kt)("h3",{id:"camunda_operate_client_clientsecret-saas"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_CLIENTSECRET")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-SaaS-informational",alt:"SaaS"})),(0,i.kt)("p",null,"Secret belonging to API Client defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_CLIENTID"),"."),(0,i.kt)("h3",{id:"camunda_operate_client_clientsecret-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_CLIENTSECRET")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"Secret belonging to Identity API defined by ",(0,i.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_CLIENTID"),"."),(0,i.kt)("h3",{id:"camunda_operate_client_keycloakrealm-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_KEYCLOAKREALM")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"Keycloak realm that Identity is connected to."),(0,i.kt)("h3",{id:"camunda_operate_client_keycloakurl-self-managed"},(0,i.kt)("inlineCode",{parentName:"h3"},"CAMUNDA_OPERATE_CLIENT_KEYCLOAKURL")," ",(0,i.kt)("img",{parentName:"h3",src:"https://img.shields.io/badge/-Self--Managed-informational",alt:"Self-Managed"})),(0,i.kt)("p",null,"URL of Keycloak."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"explore the ",(0,i.kt)("a",{parentName:"li",href:"/docs/api"},"API docs")),(0,i.kt)("li",{parentName:"ul"},"play around with the API in Swagger UI (running at ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:8080/swagger-ui.html/"},"/swagger-ui"),").")))}_.isMDXComponent=!0}}]);