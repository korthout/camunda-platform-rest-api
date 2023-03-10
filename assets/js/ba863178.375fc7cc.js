(self.webpackChunkcamunda_platform_rest_api=self.webpackChunkcamunda_platform_rest_api||[]).push([[246],{9419:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var n=a(87462),o=a(67294),r=a(3905);a(44996),a(50941);a(55985),a(85162);var i=a(93162),s=a.n(i);const l=function(t){let{url:e,proxy:a}=t;return o.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},o.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),o.createElement("ul",{className:"export-dropdown dropdown__menu"},o.createElement("li",null,o.createElement("a",{onClick:t=>{t.preventDefault(),(t=>{let e;(t.endsWith("json")||t.endsWith("yaml")||t.endsWith("yml"))&&(e=t.substring(t.lastIndexOf("/")+1)),s().saveAs(t,e||"openapi.txt")})(`${e}`)},className:"dropdown__link",href:`${e}`},"OpenAPI Spec"))))},d={id:"camunda-platform-rest-api",title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},c=void 0,p={unversionedId:"api/camunda-platform-rest-api",id:"api/camunda-platform-rest-api",title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.",source:"@site/docs/api/camunda-platform-rest-api.info.mdx",sourceDirName:"api",slug:"/api/camunda-platform-rest-api",permalink:"/camunda-platform-rest-api/docs/api/camunda-platform-rest-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"camunda-platform-rest-api",title:"Camunda Platform REST API",description:"REST API to interact with Camunda Platform 8.",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"API",permalink:"/camunda-platform-rest-api/docs/api"},next:{title:"Cluster",permalink:"/camunda-platform-rest-api/docs/api/cluster"}},u={},m=[],f={toc:m};function b(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 0.2.0-SNAPSHOT"),(0,r.kt)(l,{url:"https://github.com/korthout/camunda-platform-rest-api/blob/main/openapi.yaml",proxy:void 0,mdxType:"Export"}),(0,r.kt)("h1",{className:"openapi__heading"},"Camunda Platform REST API"),(0,r.kt)("p",null,"REST API to interact with Camunda Platform 8."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This API is not yet stable - we may break backward compatibility in newer releases of ",(0,r.kt)("inlineCode",{parentName:"p"},"v0"),".")))}b.isMDXComponent=!0},93162:function(t,e,a){var n,o,r,i=a(25108);o=[],void 0===(r="function"==typeof(n=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(i.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){d(n.response,e,a)},n.onerror=function(){i.error("could not download file")},n.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(t,e,a){var i=s.URL||s.webkitURL,l=document.createElement("a");e=e||t.name||"download",l.download=e,l.rel="noopener","string"==typeof t?(l.href=t,l.origin===location.origin?r(l):o(l.href)?n(t,e,a):r(l,l.target="_blank")):(l.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){r(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,i){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),a);else if(o(t))n(t,a,i);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){r(s)}))}}:function(t,e,a,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,a);var r="application/octet-stream"===t.type,i=/constructor/i.test(s.HTMLElement)||s.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||r&&i||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=d?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},c.readAsDataURL(t)}else{var p=s.URL||s.webkitURL,u=p.createObjectURL(t);o?o.location=u:location.href=u,o=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});s.saveAs=d.saveAs=d,t.exports=d})?n.apply(e,o):n)||(t.exports=r)}}]);