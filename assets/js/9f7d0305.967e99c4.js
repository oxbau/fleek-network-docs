"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[4713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(m,l(l({ref:t},g),{},{components:n})):a.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3872:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{image:t,name:n,title:r,url:o,communityMember:l=!1}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:o,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:o,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},r),a.createElement("span",{className:"discord"},l?"Join our community on":"Got questions? Find us on"," ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}},4826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),o=n(3872);const l={title:"Analyzing logs",slug:"analyzing-logs",hide_title:!0,tags:["logs","diagnostic"]},i=void 0,s={unversionedId:"node/analyzing-logs",id:"node/analyzing-logs",title:"Analyzing logs",description:"Analyzing Logs",source:"@site/docs/node/analyzing-logs.md",sourceDirName:"node",slug:"/node/analyzing-logs",permalink:"/docs/node/analyzing-logs",draft:!1,tags:[{label:"logs",permalink:"/docs/tags/logs"},{label:"diagnostic",permalink:"/docs/tags/diagnostic"}],version:"current",frontMatter:{title:"Analyzing logs",slug:"analyzing-logs",hide_title:!0,tags:["logs","diagnostic"]},sidebar:"docs",previous:{title:"Health check",permalink:"/docs/node/health-check"},next:{title:"Systemd Service",permalink:"/docs/node/systemd-service"}},c={},g=[{value:"Analyzing Logs",id:"analyzing-logs",level:2}],d={toc:g},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"analyzing-logs"},"Analyzing Logs"),(0,r.kt)("p",null,"The service logs provide a timeline of events for the Lightning service that is valuable for troubleshooting when encountering issues. When issues arise, analyzing log files is the first thing a node operator needs to do."),(0,r.kt)("p",null,"To have the log message files (output.log and diagnostic.log), these have to be set up. If you have installed the Node via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/install#assisted-installer"},"Assisted installer"),", the logs are set up for you automatically."),(0,r.kt)("p",null,"You can watch the Node output by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f /var/log/lightning/output.log\n")),(0,r.kt)("p",null,"You can watch the Node diagnostics or errors by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f /var/log/lightning/diagnostic.log\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are controlling the Docker Container as a Systemd Service (use Systemctl to start, stop or check the status) then the stdout and stderr logs should be available as ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/lightning/*.log")," as the example provided in the section ",(0,r.kt)("a",{parentName:"p",href:"/docs/node/analyzing-logs"},"analyzing log messages"),"."),(0,r.kt)("p",{parentName:"admonition"},"In any case, you can use the Docker command to analyze the logs. If you have stick with the default naming conventions it'd look like:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker logs -f lightning-cli\n"))),(0,r.kt)(o.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}p.isMDXComponent=!0}}]);