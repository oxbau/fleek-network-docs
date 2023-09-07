"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3872:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{image:t,name:r,title:a,url:o}=e;return n.createElement("section",{className:"author_card"},n.createElement("div",null,n.createElement("span",{className:"avatar"},n.createElement("a",{href:o,target:"_blank",alt:r},n.createElement("img",{src:t,alt:r}))),n.createElement("div",null,n.createElement("span",{className:"name"},n.createElement("a",{href:o,target:"_blank",alt:r},r)),n.createElement("span",{className:"title"},a),n.createElement("span",{className:"discord"},"Got questions? Find us on ",n.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},3477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),o=r(3872);const i={title:"Overview",slug:"overview",hide_title:!0,tags:["build"]},l=void 0,s={unversionedId:"node/index",id:"node/index",title:"Overview",description:"\x3c!--",source:"@site/docs/node/index.md",sourceDirName:"node",slug:"/node/overview",permalink:"/docs/node/overview",draft:!1,tags:[{label:"build",permalink:"/docs/tags/build"}],version:"current",frontMatter:{title:"Overview",slug:"overview",hide_title:!0,tags:["build"]},sidebar:"docs",previous:{title:"Developers",permalink:"/docs/learn/developers"},next:{title:"Requirements",permalink:"/docs/node/requirements"}},c={},d=[{value:"Overview",id:"overview",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This section provides instructions to help you build a ",(0,a.kt)("strong",{parentName:"p"},"Fleek Network Node"),", it's aimed at everybody willing to learn and cultivate knowledge as a Node operator."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To participate in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/roadmap"},"alpha Testnet"),", you can begin by setting up and running nodes. Check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/requirements"},"requirements")," and find the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/testnet-onboarding"},"onboarding instructions")," to enable you to ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install"},"install")," a network node successfully.")),(0,a.kt)("h1",{id:"node-operator"},"Node operator"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Node Operator")," is represented as a system administrator who builds, installs or maintains one or many Nodes in a server or more."),(0,a.kt)("p",null,"Anyone willing to learn can become a Node operator, which will be enabled to set up and run a Node on their own at any time without the need for anyone's permission."),(0,a.kt)("p",null,"Amongst others, the use cases we try to cover are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server requirements"),(0,a.kt)("li",{parentName:"ul"},"Installing the Node easily with the installation wizard"),(0,a.kt)("li",{parentName:"ul"},"Building a Node binary from source code"),(0,a.kt)("li",{parentName:"ul"},"Configuring the Node"),(0,a.kt)("li",{parentName:"ul"},"Securing the server and identity"),(0,a.kt)("li",{parentName:"ul"},"Updating the Node"),(0,a.kt)("li",{parentName:"ul"},"Learning to troubleshoot"),(0,a.kt)("li",{parentName:"ul"},"Understanding the Node log messages")),(0,a.kt)("p",null,"While we do our best to provide the clearest instructions, there's always space for improvement, therefore feel free to make any contributions by messaging us on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"Discord")," or by opening a PR in any of our repositories."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ready?")," Start by checking the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/requirements"},"Server requirements")),(0,a.kt)(o.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}u.isMDXComponent=!0}}]);