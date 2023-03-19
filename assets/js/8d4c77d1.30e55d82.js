"use strict";(self.webpackChunkcamunda_platform_rest_api=self.webpackChunkcamunda_platform_rest_api||[]).push([[193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"self-managed",sidebar_position:2.2,title:"Camunda Platform 8 SM",description:"Connect to Camunda Platform 8 Self-Managed",tags:["guides","connection"]},i="Connecting to your Camunda Platform Self-Managed cluster",l={unversionedId:"guides/connection/self-managed",id:"guides/connection/self-managed",title:"Camunda Platform 8 SM",description:"Connect to Camunda Platform 8 Self-Managed",source:"@site/docs/guides/connection/self-managed.md",sourceDirName:"guides/connection",slug:"/guides/connection/self-managed",permalink:"/camunda-platform-rest-api/docs/guides/connection/self-managed",draft:!1,editUrl:"https://github.com/korthout/camunda-platform-rest-api/tree/main/docs/docs/guides/connection/self-managed.md",tags:[{label:"guides",permalink:"/camunda-platform-rest-api/docs/tags/guides"},{label:"connection",permalink:"/camunda-platform-rest-api/docs/tags/connection"}],version:"current",sidebarPosition:2.2,frontMatter:{id:"self-managed",sidebar_position:2.2,title:"Camunda Platform 8 SM",description:"Connect to Camunda Platform 8 Self-Managed",tags:["guides","connection"]},sidebar:"tutorialSidebar",previous:{title:"Camunda Platform 8 SaaS",permalink:"/camunda-platform-rest-api/docs/guides/connection/saas"},next:{title:"Configuration",permalink:"/camunda-platform-rest-api/docs/guides/config"}},s={},c=[{value:"Connecting to Self-Managed Zeebe",id:"connecting-to-self-managed-zeebe",level:2},{value:"Secure Communication using TLS",id:"secure-communication-using-tls",level:3},{value:"Disabling TLS",id:"disabling-tls",level:3},{value:"Checking the connection to Self-Managed Zeebe",id:"checking-the-connection-to-self-managed-zeebe",level:3},{value:"Troubleshooting the connection to Self-Managed Zeebe",id:"troubleshooting-the-connection-to-self-managed-zeebe",level:3},{value:"Connecting to Self-Managed Operate",id:"connecting-to-self-managed-operate",level:2},{value:"Authenticate using a username and password",id:"authenticate-using-a-username-and-password",level:3},{value:"Authenticate using Identity and Keycloak",id:"authenticate-using-identity-and-keycloak",level:3},{value:"Checking the connection to Self-Managed Operate",id:"checking-the-connection-to-self-managed-operate",level:3},{value:"Troubleshooting the connection to Self-Managed Operate",id:"troubleshooting-the-connection-to-self-managed-operate",level:3},{value:"Next steps",id:"next-steps",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-to-your-camunda-platform-self-managed-cluster"},"Connecting to your Camunda Platform Self-Managed cluster"),(0,o.kt)("p",null,"The operations available in the Camunda Platform REST API require a connection between the REST API and your Camunda Platform cluster.\nConnections to each of the components of the cluster must be set up to access the full range of operations available in the Camunda Platform REST API.\nConnecting to the components in your cluster can be achieved using environment variables.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/camunda-platform-rest-api/docs/guides/config"},"configuration")," for an overview of all available environment variables."),(0,o.kt)("p",null,"We'll start this guide by ",(0,o.kt)("a",{parentName:"p",href:"#connecting-to-self-managed-zeebe"},"connecting to Zeebe"),", so you can start ",(0,o.kt)("a",{parentName:"p",href:"/camunda-platform-rest-api/docs/api/automation"},"automating")," your processes.\nAfter that, we can expand the available operations by ",(0,o.kt)("a",{parentName:"p",href:"#connecting-to-self-managed-operate"},"connecting to Operate"),", to gain ",(0,o.kt)("a",{parentName:"p",href:"/camunda-platform-rest-api/docs/api/insights"},"insights")," into your processes."),(0,o.kt)("h2",{id:"connecting-to-self-managed-zeebe"},"Connecting to Self-Managed Zeebe"),(0,o.kt)("p",null,"With a connection to Zeebe you can ",(0,o.kt)("a",{parentName:"p",href:"/camunda-platform-rest-api/docs/api/automation"},"automate")," your processes."),(0,o.kt)("p",null,"In order to connect to Zeebe in a Camunda Platform Self-Managed cluster, you'll need to know the IP address of the Zeebe Gateway.\nSimply pass the address of the Zeebe Gateway as ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_BROKER_GATEWAYADDRESS")," to Docker when you start up the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Example connecting to Self-Managed Zeebe Gateway at 192.168.50.118\ndocker run -p 8080:8080 \\\n  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \\\n  ghcr.io/korthout/camunda-platform-rest-api:latest\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You'll need to open port 8080, so you can reach the API from your local machine, and it can reach the cluster.")),(0,o.kt)("h3",{id:"secure-communication-using-tls"},"Secure Communication using TLS"),(0,o.kt)("p",null,"By default, the Camunda Platform REST API communicates securely with the Zeebe Gateway over TLS.\nWithout any configuration, the client looks in the system's certificate store for a CA certificate with which to validate the gateway's certificate chain.\nIf you wish to use TLS without having to install a certificate in client's system, you can specify a CA certificate using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEEBE_CA_CERTIFICATE_PATH"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Example connecting to Self-Managed Zeebe Gateway at 192.168.50.118 with a specific CA certificate\ndocker run -p 8080:8080 \\\n  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \\\n  -e ZEEBE_CA_CERTIFICATE_PATH=/path-to-ca-certificate \\\n  ghcr.io/korthout/camunda-platform-rest-api:latest\n")),(0,o.kt)("h3",{id:"disabling-tls"},"Disabling TLS"),(0,o.kt)("p",null,"If your Zeebe Gateway does not have ",(0,o.kt)("a",{parentName:"p",href:"https://docs.camunda.io/docs/self-managed/zeebe-deployment/security/secure-client-communication/#gateway"},"TLS enabled"),",\nthen you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEEBE_INSECURE_CONNECTION")," to disable the secure communication with the Zeebe Gateway over TLS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Example connecting to Self-Managed Zeebe Gateway at 192.168.50.118 without TLS\ndocker run -p 8080:8080 \\\n  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \\\n  -e ZEEBE_INSECURE_CONNECTION=true \\\n  ghcr.io/korthout/camunda-platform-rest-api:latest\n")),(0,o.kt)("h3",{id:"checking-the-connection-to-self-managed-zeebe"},"Checking the connection to Self-Managed Zeebe"),(0,o.kt)("p",null,"The Camunda Platform REST API should now be connected to your Self-Managed Zeebe.\nYou can easily verify whether the connection is working correctly using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/camunda-platform-rest-api/docs/api/get-status"},"Retrieve the Zeebe cluster status"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Assuming that Camunda Platform REST API is available at localhost:8080\ncurl localhost:8080/status\n")),(0,o.kt)("h3",{id:"troubleshooting-the-connection-to-self-managed-zeebe"},"Troubleshooting the connection to Self-Managed Zeebe"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"#checking-the-connection-to-self-managed-zeebe"},"check above")," responds an error, please read the error message carefully.\nIn most cases, the message should guide you to resolve the problem.\nIf you're unable to resolve the issue with the provided error message, please open an issue on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/korthout/camunda-platform-rest-api/issues/new"},"GitHub"),"."),(0,o.kt)("h2",{id:"connecting-to-self-managed-operate"},"Connecting to Self-Managed Operate"),(0,o.kt)("p",null,"Next, we can connect to Self-Managed Operate.\nWith a connection to Operate you can get ",(0,o.kt)("a",{parentName:"p",href:"/camunda-platform-rest-api/docs/api/insights"},"insights")," into your processes."),(0,o.kt)("p",null,"In order to connect to Operate, you'll need to know the base URL where Operate is available.\nSimply pass the URL as ",(0,o.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_URL")," to Docker when you start up the container."),(0,o.kt)("p",null,"You'll also need to authenticate yourself. There are two ways to authenticate to Operate:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"authenticate using a username and password"),(0,o.kt)("li",{parentName:"ul"},"authenticate using ",(0,o.kt)("a",{parentName:"li",href:"https://docs.camunda.io/docs/self-managed/identity/what-is-identity/"},"Identity")," and ",(0,o.kt)("a",{parentName:"li",href:"https://www.keycloak.org/"},"Keycloak"))),(0,o.kt)("h3",{id:"authenticate-using-a-username-and-password"},"Authenticate using a username and password"),(0,o.kt)("p",null,"To authenticate using this simple authentication, all you need is a username and a password."),(0,o.kt)("p",null,"The username and password are configured using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_USERNAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_PASSWORD"),"  enviroment variables, respectively.\nJust like before, we can pass these to Docker when you start up the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Example connecting to Self-Managed Zeebe and Operate\n# Both available at 192.168.50.118 through different ports\n# Authenticating to Operate using the demo account's username and password\ndocker run -p 8080:8080 \\\n  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \\\n  -e CAMUNDA_OPERATE_CLIENT_URL=http://192.168.50.118:8080 \\\n  -e CAMUNDA_OPERATE_CLIENT_USERNAME=demo \\\n  -e CAMUNDA_OPERATE_CLIENT_PASSWORD=demo \\\n  ghcr.io/korthout/camunda-platform-rest-api:latest\n")),(0,o.kt)("h3",{id:"authenticate-using-identity-and-keycloak"},"Authenticate using Identity and Keycloak"),(0,o.kt)("p",null,"To authenticate using Identity and Keycloak, you'll need to provide a client id and secret as well the keycloak realm."),(0,o.kt)("p",null,"The client id and client secret are configured using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_CLIENTID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_CLIENTSECRET")," environment variables, respectively."),(0,o.kt)("p",null,"You may also need to adjust the Keycload realm and URL based on your installation. These can be configured using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_KEYCLOAKREALM")," and `",(0,o.kt)("inlineCode",{parentName:"p"},"CAMUNDA_OPERATE_CLIENT_KEYCLOAKURL"),", respectively."),(0,o.kt)("p",null,"Just like before, we can pass these to Docker when you start up the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Example connecting to Self-Managed Zeebe and Operate\n# Both available at 192.168.50.118 through different ports\n# Authenticating to Operate using the rest-api-client API client\n# configured in Identity using the camunda-platform Keycloak realm\ndocker run -p 8080:8080 \\\n  -e ZEEBE_CLIENT_BROKER_GATEWAYADDRESS=192.168.50.118:26500 \\\n  -e CAMUNDA_OPERATE_CLIENT_URL=http://192.168.50.118:8080 \\\n  -e CAMUNDA_OPERATE_CLIENT_CLIENTID=rest-api-client \\\n  -e CAMUNDA_OPERATE_CLIENT_CLIENTSECRET=foTPogjlI0hidwbDZcYFWzmU8FOQwLx0 \\\n  -e CAMUNDA_OPERATE_CLIENT_KEYCLOAKREALM=camunda-platform \\\n  -e CAMUNDA_OPERATE_CLIENT_KEYCLOAKURL=http://localhost:18080 \\\n  ghcr.io/korthout/camunda-platform-rest-api:latest\n")),(0,o.kt)("h3",{id:"checking-the-connection-to-self-managed-operate"},"Checking the connection to Self-Managed Operate"),(0,o.kt)("p",null,"The Camunda Platform REST API should now be connected to your Self-Managed Operate as well. You can easily verify whether the connection is working correctly using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/camunda-platform-rest-api/docs/api/get-process-instance"},"Retrieve the details of a process instance"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Assuming that Camunda Platform REST API is available at localhost:8080\ncurl localhost:8080/process-instances/2251799813685251 --fail\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This requires the key of a process instance.\nIf you don't have a process instance key yet, you can ",(0,o.kt)("a",{parentName:"p",href:"/camunda-platform-rest-api/docs/api/create-process-instance"},"create a new process instance"),".\nOr just pass the key of a process instance that does not exist, which should respond with a ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found")," error.")),(0,o.kt)("h3",{id:"troubleshooting-the-connection-to-self-managed-operate"},"Troubleshooting the connection to Self-Managed Operate"),(0,o.kt)("p",null,"If the ",(0,o.kt)("a",{parentName:"p",href:"#checking-the-connection-to-self-managed-operate"},"check above")," responds an error, please read the error message carefully.\nIn most cases, the message should guide you to resolve the problem.\nIf you're unable to resolve the issue with the provided error message, please open an issue on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/korthout/camunda-platform-rest-api/issues/new"},"GitHub"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/config"},"configure the connection")),(0,o.kt)("li",{parentName:"ul"},"explore the ",(0,o.kt)("a",{parentName:"li",href:"/docs/api"},"API docs")),(0,o.kt)("li",{parentName:"ul"},"play around with the API in Swagger UI (running at ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:8080/swagger-ui.html/"},"/swagger-ui"),").")))}p.isMDXComponent=!0}}]);