"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[7055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3242:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<USERNAME>/.lightning/config.toml")," you'll find some and more of the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The configuration properties and values presented above are a shorter version of what you'll find on your ",(0,o.kt)("strong",{parentName:"p"},"configuration.toml"),". We keep it short to make it easier to follow, do not copy and paste.")),(0,o.kt)("p",null,"Find and replace all instances of ~ in the config file ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<USERNAME>/.lightning/config.toml"),". "),(0,o.kt)("p",null,"Here's an example of how to do it using ",(0,o.kt)("strong",{parentName:"p"},"sed"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i "s|~/.lightning|/home/<USERNAME>/.lightning|g" "/home/<USERNAME>/.lightning/config.toml"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," with your username. For example, if you have followed the recommendation to ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/install#create-a-user"},"create a user")," it would look like ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/lgtn/.lightning/config.toml")," for the username ",(0,o.kt)("strong",{parentName:"p"},"lgtn"),".")),(0,o.kt)("p",null,"For example, if your username is ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn")," that'd look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i "s|~/.lightning|/home/lgtn/.lightning|g" "/home/lgtn/.lightning/config.toml"\n')),(0,o.kt)("p",null,"Once modified, you can run a ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," to see the content of the files to confirm it has been updated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cat /home/lgtn/.lightning/config.toml\n")),(0,o.kt)("p",null,"For our example where we opted in for the username ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn")," that would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[BLANK]\n\n[application]\ndb_path = "~/.lightning/data/app_db"\n\n[consensus]\nstore_path = "~/.lightning/data/narwhal_store"\n\n[fsstore]\nroot = "~/.lightning/blockstore"\n\n[resolver]\nstore_path = "~/.lightning/data/resolver_store"\n\n[signer]\nconsensus_key_path = "~/.lightning/keystore/consensus.pem"\nnode_key_path = "~/.lightning/keystore/node.pem"\n')),(0,o.kt)("admonition",{title:"Warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Bear in mind that we are keeping the content of the file short to make it easier to read and follow. The content of your configuration file should look slightly different, amongst these it should contain other properties and values. You should not copy and replace the content of your files with the ones presented here.")))}l.isMDXComponent=!0},8275:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can restore the keystore (Public Keys) by copying the directory to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.lightning")," directory."),(0,o.kt)("p",null,"Let's assume that you know where your backup directory or files are located. To keep our instructions easy to follow, let's say that:"),(0,o.kt)("p",null,"1) The keystore and files are located under the hypothetical location ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-keystore-backup")),(0,o.kt)("p",null,"2) The files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-keystore-backup")," are the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/my-keystore-backup\n\u251c\u2500\u2500 consensus.pem\n\u2514\u2500\u2500 node.pem\n\n1 directory, 2 files\n")),(0,o.kt)("p",null,"Considering the above for our example, you would have to run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mv /my-keystore-backup /home/<YOUR-USERNAME>/.lightning/keystore\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<YOUR-USERNAME>")," with the correct username for the setup. For example, if you have installed the Fleek Network with the username ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn")," that would be ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/lgtn/.lightning/keystore"),".")),(0,o.kt)("p",null,"Once moved, remember to start the service, you can learn how to manage the service by reading the section ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/systemd-service"},"Systemd Service"),"."))}l.isMDXComponent=!0},8850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(3872),i=n(3242),l=n(8275);const s={title:"Restore the keystore",slug:"restore-the-keystore",hide_title:!0,tags:["references","help","keystore","backup","restore"]},p=void 0,c={unversionedId:"Lightning CLI/restore-keystore",id:"Lightning CLI/restore-keystore",title:"Restore the keystore",description:"The security of the private key is the responsibility of the user. Unfortunately, the Fleek Network team and any others are unable to help regain access to private key if lost or failed to secure them. The private keys are the user responsibility. The Fleek Network team doesn't endorse any methods of encryption and storage, the methods described here are for educational purposes only.",source:"@site/references/Lightning CLI/restore-keystore.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/restore-the-keystore",permalink:"/references/Lightning CLI/restore-the-keystore",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/restore-keystore.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"keystore",permalink:"/references/tags/keystore"},{label:"backup",permalink:"/references/tags/backup"},{label:"restore",permalink:"/references/tags/restore"}],version:"current",lastUpdatedAt:1698260881,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{title:"Restore the keystore",slug:"restore-the-keystore",hide_title:!0,tags:["references","help","keystore","backup","restore"]},sidebar:"defaultSidebar",previous:{title:"Permission denied (os error 13)",permalink:"/references/Lightning CLI/permission-denied-os-error-13"},next:{title:"Uninstall Lightning Node",permalink:"/references/Lightning CLI/uninstall-lightning-node"}},h={},u=[{value:"Switch user",id:"switch-user",level:2},{value:"Change directory to user home",id:"change-directory-to-user-home",level:2},{value:"Clear the config.toml",id:"clear-the-configtoml",level:2},{value:"Create a new config.toml",id:"create-a-new-configtoml",level:2},{value:"Update the config.toml with user home path",id:"update-the-configtoml-with-user-home-path",level:2},{value:"Restoring the keystore",id:"restoring-the-keystore",level:2}],m={toc:u},d="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The security of the private key is the responsibility of the user. Unfortunately, the Fleek Network team and any others are unable to help regain access to private key if lost or failed to secure them. The private keys are the user responsibility. The Fleek Network team doesn't endorse any methods of encryption and storage, the methods described here are for educational purposes only.")),(0,o.kt)("h2",{id:"switch-user"},"Switch user"),(0,o.kt)("p",null,"Switch to the correct username you have used to install and set up the Fleek Network Lightning. For example, let's say that the username is ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn"),". The command you'd have to run would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"su lgtn\n")),(0,o.kt)("h2",{id:"change-directory-to-user-home"},"Change directory to user home"),(0,o.kt)("p",null,"Change directory to the user you have used to install and set up the Fleek Network Lightning. For example, if you have used the username ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn")," the command would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd $HOME\n")),(0,o.kt)("p",null,"In other words:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /home/lgtn\n")),(0,o.kt)("h2",{id:"clear-the-configtoml"},"Clear the config.toml"),(0,o.kt)("p",null,"You should can delete, backup or move the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file in order to reset it. "),(0,o.kt)("p",null,"It might be necessary to, if your configuration, e.g. is corrupted, or you want to reset it for any other reason."),(0,o.kt)("p",null,"To move or backup, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mv ~/.lightning/config.toml ~/.lightning/config.toml.backup\n")),(0,o.kt)("p",null,"If you don't have a use-case for the backup, delete the file. To delete, run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm ~/.lightning/config.toml\n")),(0,o.kt)("admonition",{title:"warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You should have switched to the correct username. If you haven't done it, when stating ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," that will refer to the current username home, which can be anything other than the correct username! Make sure you have switched to the correct username used during the installation and set up of Fleek Network Lightning to avoid confusion and issues.")),(0,o.kt)("h2",{id:"create-a-new-configtoml"},"Create a new config.toml"),(0,o.kt)("p",null,"A new configuration file can be created by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"lgtn print-config --default > ~/.lightning/config.toml\n")),(0,o.kt)("h2",{id:"update-the-configtoml-with-user-home-path"},"Update the config.toml with user home path"),(0,o.kt)(i.ZP,{mdxType:"FindAndReplaceConfigWithUserPaths"}),(0,o.kt)("h2",{id:"restoring-the-keystore"},"Restoring the keystore"),(0,o.kt)(l.ZP,{mdxType:"RestoreKeystore"}),(0,o.kt)("p",null,"For a more in depth or step-by-step instructions read the guide ",(0,o.kt)("a",{parentName:"p",href:"/guides/Node%20Operators/managing-the-keystore"},"managing the keystore"),"."),(0,o.kt)(a.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}g.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=e=>{let{image:t,name:n,title:o,url:a,communityMember:i=!1}=e;return r.createElement("section",{className:"author_card"},r.createElement("div",null,r.createElement("span",{className:"avatar"},r.createElement("a",{href:a,target:"_blank",alt:n},r.createElement("img",{src:t,alt:n}))),r.createElement("div",null,r.createElement("span",{className:"name"},r.createElement("a",{href:a,target:"_blank",alt:n},n)),r.createElement("span",{className:"title"},o),r.createElement("span",{className:"discord"},i?"Join our community on":"Got questions? Find us on"," ",r.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);