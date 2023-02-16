"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[7321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={template:"post",draft:!1,hide_title:!1,title:"Git clone permission denied",slug:"git-clone-permission-denied",date:new Date("2023-01-03T07:00:00.000Z"),canonical:"",description:"Fixing the git permission denied when git clone",category:"Reference",tags:["Reference","Git","Fleek Network","permissions"]},a=void 0,c={unversionedId:"Git/git-clone-permission-denied",id:"Git/git-clone-permission-denied",title:"Git clone permission denied",description:"Fixing the git permission denied when git clone",source:"@site/reference/Git/git-clone-permission-denied.md",sourceDirName:"Git",slug:"/Git/git-clone-permission-denied",permalink:"/reference/Git/git-clone-permission-denied",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/reference/Git/git-clone-permission-denied.md",tags:[{label:"Reference",permalink:"/reference/tags/reference"},{label:"Git",permalink:"/reference/tags/git"},{label:"Fleek Network",permalink:"/reference/tags/fleek-network"},{label:"permissions",permalink:"/reference/tags/permissions"}],version:"current",lastUpdatedAt:1676567075,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{template:"post",draft:!1,hide_title:!1,title:"Git clone permission denied",slug:"git-clone-permission-denied",date:"2023-01-03T07:00:00.000Z",canonical:"",description:"Fixing the git permission denied when git clone",category:"Reference",tags:["Reference","Git","Fleek Network","permissions"]},sidebar:"defaultSidebar",previous:{title:"Buildkit required by docker build",permalink:"/reference/Docker/buildkit-required-by-docker-build"},next:{title:"How to checkout a commit in project history",permalink:"/reference/Git/how-to-checkout-a-commit-in-project-history"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," throws an error, it means GitHub is rejecting your connection because GitHub does not trust your computer as it does not have a public key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:fleek-network/ursa.git\nCloning into 'ursa'...\ngit@github.com: Permission denied (public key).\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n")),(0,i.kt)("p",null,"Since the repository is public, you can clone it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS")," url version of the repository, which does not require authentication with SSH."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/fleek-network/ursa\n")),(0,i.kt)("p",null,"Alternatively, if you'd like to set up SSH, create SSH key pair and add the SSH key to your GitHub account. Find the instructions in the GitHub documents ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh"},"here"),"."))}u.isMDXComponent=!0}}]);