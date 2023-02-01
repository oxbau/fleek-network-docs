"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[3563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(1026),o=n(3872),l=n(2915);const s={template:"post",draft:!1,hide_title:!0,title:"Getting Started Guide",slug:"fleek-network-getting-started-guide",image:"./assets/fleek-network-getting-started.png?202301101924",date:new Date("2022-11-30T23:00:00.000Z"),canonical:"",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network"]},c=void 0,p={unversionedId:"Network nodes/fleek-network-getting-started-guide",id:"Network nodes/fleek-network-getting-started-guide",title:"Getting Started Guide",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",source:"@site/guides/Network nodes/fleek-network-getting-started-guide.mdx",sourceDirName:"Network nodes",slug:"/Network nodes/fleek-network-getting-started-guide",permalink:"/guides/Network nodes/fleek-network-getting-started-guide",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Network nodes/fleek-network-getting-started-guide.mdx",tags:[{label:"CDN",permalink:"/guides/tags/cdn"},{label:"Guide",permalink:"/guides/tags/guide"},{label:"Getting Started",permalink:"/guides/tags/getting-started"},{label:"Fleek Network",permalink:"/guides/tags/fleek-network"}],version:"current",lastUpdatedAt:1675257259,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{template:"post",draft:!1,hide_title:!0,title:"Getting Started Guide",slug:"fleek-network-getting-started-guide",image:"./assets/fleek-network-getting-started.png?202301101924",date:"2022-11-30T23:00:00.000Z",canonical:"",description:"A first look at what Fleek Network is, why it's important, and a simple tutorial of running and interacting with a node on your local machine!",category:"Tutorial",tags:["CDN","Guide","Getting Started","Fleek Network"]},sidebar:"defaultSidebar",previous:{title:"Introducing guides",permalink:"/guides/"},next:{title:"How to get the latest updates for Ursa CLI from the source repository",permalink:"/guides/Network nodes/fleek-network-how-to-get-the-latest-updates-for-ursa-cli-from-the-source-repository"}},d={image:n(926).Z},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Need a quick Fleek Network TL;DR?",id:"need-a-quick-fleek-network-tldr",level:2},{value:"Why is Fleek Network Needed?",id:"why-is-fleek-network-needed",level:2},{value:"How Does Fleek Network Work?",id:"how-does-fleek-network-work",level:2},{value:"Running a Node",id:"running-a-node",level:2},{value:"Put Data Via the CLI",id:"put-data-via-the-cli",level:3},{value:"Retrieve Data Via the CLI",id:"retrieve-data-via-the-cli",level:3},{value:"Final Thoughts",id:"final-thoughts",level:2}],h={toc:u};function k(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fleek Network: Getting started guide",src:n(926).Z,width:"1200",height:"628"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this guide, we\u2019ll have a simple look into how Fleek Network works in its current development phase and briefly share some of the core concepts like spinning up a node and putting + retrieving .car files from the network."),(0,r.kt)("p",null,"For those seeking advanced knowledge:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read our ",(0,r.kt)("a",{parentName:"li",href:"https://fleek.network/fleek-network.pdf?202212011428"},"whitepaper"),"."),(0,r.kt)("li",{parentName:"ul"},"Check out ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/ursa"},"our open source code"),".")),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"To follow the guide, you will need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface"),(0,r.kt)("li",{parentName:"ul"},"Git")),(0,r.kt)(i.ZP,{mdxType:"CheckoutCommitWarning"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"need-a-quick-fleek-network-tldr"},"Need a quick Fleek Network TL;DR?"),(0,r.kt)("p",null,"Fleek Network is a decentralized content and application layer built on established decentralized storage protocols combined with high-speed caching and an effective delivery layer. An alternative to traditional content delivery networks without a central authority that is reliable and censorship-resistant. Fleek Network relies on blockchain technology at its core, allowing governance and token rewards as incentives for participation in serving the network."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"why-is-fleek-network-needed"},"Why is Fleek Network Needed?"),(0,r.kt)("p",null,"The demand for content delivery is skyrocketing, and due to the rise of video, gaming, and other media content popularity, demand will keep going up. Content delivery providers have a central infrastructure giving immense control to obscure authorities that can block access to content and even manipulate it."),(0,r.kt)("p",null,"On the other hand, content delivery services depend on costly infrastructure that requires a significant number of resources. Traditionally these are dispersed geographically but more commonly located in convenient regions for the business; that is, a resolver might only find a content delivery node close to you sometimes."),(0,r.kt)("p",null,"Most web3 services have their client-facing interfaces hosted and delivered through centralized host providers and traditional content delivery networks, breaking the trust upfront and causing immense disappointment to the end user."),(0,r.kt)("p",null,"Since decentralized storage is a reality, a decentralized content delivery network can help achieve the goal of providing a fully decentralized web3 application."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-does-fleek-network-work"},"How Does Fleek Network Work?"),(0,r.kt)("p",null,"Fleek Network will build on web 3 technology. As a starter, it'll focus on static content, accelerating content delivery from protocols, such as FileCoin, IPFS, Arweave, Storj, Sia, etc. While in the future, support dynamic content. Contrary to traditional CDN networks, it grows only on demand, designed to be scalable, highly available, and fault-tolerant: meaning that it's intended to continue its normal operations despite system failures."),(0,r.kt)("p",null,"Content is replicated across nodes and delivered through peer-to-peer mechanisms while maintaining the user experience of traditional content delivery services we are accustomed to. Peer-to-peer technology is also helpful in providing content as quickly as possible. Fleek Network, at its basics, is a caching and delivery layer that has components based on solid web 3 protocols, inheriting the benefits of years of research and the highest advancements in blockchain and internet data transmission technology."),(0,r.kt)("p",null,"Fleek Network is offering an alternative route to access content without censorship that is cheaper and more performant! The network promotes a decentralized economy by caching and serving content while incentivizing participants. It features caching, load balancing, reduced round trips (RTT), and in-memory caching for more demanded content for quicker trip time for first-byte (TTFB). In counterpart, content is cleared based on access popularity."),(0,r.kt)("p",null,"Fleek Network also relies on blockchain technology to handle governance and rewards. Adopting a shared economy model allows anyone to participate with bandwidth and computation in exchange for FLK, the native protocol token. All participants are bound to a consensus algorithm for transparency and verifiable metrics for a fairer and open community."),(0,r.kt)("p",null,"Clients operate with the Fleek Network independently but interact with the network via Gateway nodes. The Gateway Nodes connect users to the closest Cache Nodes that are responsible for caching, replicating, and delivery of content through client-facing HTTPS GET and PUT methods."),(0,r.kt)("p",null,"Fleek Network allows direct access to content instead of only being accessible via HTTP-HTTPS methods, as the content is universally addressable and linkable. Users can access Fleek Network via the Gateway or the RPC interfaces."),(0,r.kt)("p",null,"The Gateway Nodes act like a reverse proxy for the entire network, handling client HTTPS GET requests. There are Origin Servers that persist Client data and respond to trivial requests from Cache Nodes."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"running-a-node"},"Running a Node"),(0,r.kt)("p",null,"A Fleek Network node can be built and run on your local machine. It\u2019s an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"open-source project")," and is open for contributions."),(0,r.kt)("p",null,"The project is built with Rust, a general-purpose programming language, be sure to have it installed on your local machine in advance to be able to follow the guide."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Installing and configuring Rust, packages and library dependencies can be tricky! If you haven't already, check the guides ",(0,r.kt)("a",{parentName:"p",href:"fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli"},"How to install Rust and the dependencies for Ursa CLI")," or ",(0,r.kt)("a",{parentName:"p",href:"fleek-network-running-a-node-in-a-docker-container"},"Running a node in a Docker container")," for help.")),(0,r.kt)("p",null,"We\u2019ll clone the repository locally, build it and interact with the node through the binary or the HTTP JSON-RPC API with a client like cURL, but you can use a GUI (Postman, Insomnia, etc.) if your preference."),(0,r.kt)("p",null,"Start by cloning the repository located at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa",title:"https://github.com/fleek-network/ursa"},"https://github.com/fleek-network/ursa")),(0,r.kt)(l.ZP,{mdxType:"GitCloneOptions"}),(0,r.kt)("p",null,"You\u2019ll notice that we try our best to document the project as we go, so it should be easy to follow if interested. Of course, don\u2019t shy away from contributing with any amends or your wording poetry!"),(0,r.kt)("p",null,"Once the git clone completes, you\u2019ll have the latest version at the time of cloning. You should use git to fetch or pull the latest versions consequently."),(0,r.kt)("p",null,"Execute the install command to build and install the Fleek Network CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"make install\n")),(0,r.kt)("p",null,"The install command uses the Rust compiler to build; depending on how fast your machine is, it might take a while."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1682).Z,width:"1624",height:"728"})),(0,r.kt)("p",null,"\u26a0\ufe0f If you encounter errors in the install process, is very likely that you're missing dependencies, packages, libraries for Rust to compile the Ursa CLI \ud83d\ude05. Save yourself time and energy, read the guide ",(0,r.kt)("a",{parentName:"p",href:"fleek-network-how-to-install-rust-and-the-dependencies-for-ursa-cli"},"How to install Rust and the dependencies for Ursa CLI")," or ",(0,r.kt)("a",{parentName:"p",href:"fleek-network-running-a-node-in-a-docker-container"},"Running a node in a Docker container")," for help!"),(0,r.kt)("p",null,"Once the Rust compiler completes generating the binary, it\u2019ll include it in the cargo\u2019s bin directory. On macOS and Linux this is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.cargo/bin")," and on Windows ",(0,r.kt)("inlineCode",{parentName:"p"},"%USERPROFILE%\\\\.cargo\\\\bin"),". These should be in your ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," environment variable. If you have customized these, check the ",(0,r.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/installation/index.html"},"installation guide")," for any questions."),(0,r.kt)("p",null,"Run the CLI with the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," to confirm it's available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ursa --version\n")),(0,r.kt)("p",null,'The CLI has an optional \u201cconfig.toml\u201d for custom configuration settings. As it depends on the CLI version, you can find what\u2019s available with the flag "help".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ursa --help\n")),(0,r.kt)("p",null,"The CLI can be called without flags or options to start a new node with default settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ursa\n")),(0,r.kt)("p",null,"Here\u2019s the output of the listener's host and port numbers:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8747).Z,width:"1626",height:"560"})),(0,r.kt)("h3",{id:"put-data-via-the-cli"},"Put Data Via the CLI"),(0,r.kt)("p",null,'We can interact with the network via the CLI, the HTTP endpoint "/", or the JSON-RPC API endpoint "/rcp/v0". Both HTTP and JSON-RPC are listening on port "4069\u201d.'),(0,r.kt)("p",null,"For today\u2019s example, we're going to \u201cput\u201d a ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/bafybeidqdywrzg7c3b4dmm332m4b7uiakgitplz2pep2zntederxpj3odi"},"file")," and then after, retrieve it."),(0,r.kt)("p",null,"Make sure you've started a node already, as described in the previous section."),(0,r.kt)("p",null,"At the current development stage, there\u2019s only support for IPLD car file format (content addressable aRchive). If curious, learn more about \u201cIPLD car\u201d in the ",(0,r.kt)("a",{parentName:"p",href:"https://ipld.io/specs/transport/car/"},"official specs"),"."),(0,r.kt)("p",null,"As we\u2019re keeping things simple, we\u2019ll download an existing \u201ccar\u201d demo file to our local machine to use later for our example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl https://ipfs.io/ipfs/bafybeidqdywrzg7c3b4dmm332m4b7uiakgitplz2pep2zntederxpj3odi -o basic.car\n")),(0,r.kt)("p",null,"If successful, we should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"basic.car"),"."),(0,r.kt)("p",null,"We can check the available CLI commands to determine how to perform our desired goal and put the ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/bafybeidqdywrzg7c3b4dmm332m4b7uiakgitplz2pep2zntederxpj3odi"},"car file")," into our network."),(0,r.kt)("p",null,"After we checked our base ",(0,r.kt)("inlineCode",{parentName:"p"},"help"),", we'll find that RPC is available as a subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ursa rpc --help\n\nrun rpc commands from cli\n\nUSAGE:\nursa rpc <SUBCOMMAND>\n\nFLAGS:\n-h, --help       Prints help information\n-V, --version    Prints version information\n\nSUBCOMMANDS:\nhelp    Prints this message or the help of the given subcommand(s)\nput     put the file on the node\n")),(0,r.kt)("p",null,"Very simple to find help by simply passing the help flat after the desired subcommand."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ursa rpc put --help\n\nput the file on the node\n\nUSAGE:\n    ursa rpc put <path>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nARGS:\n    <path>\n")),(0,r.kt)("p",null,"Finally, we can put our ",(0,r.kt)("inlineCode",{parentName:"p"},"basic.car")," file into our node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ursa rpc put basic.car\n")),(0,r.kt)("p",null,"On success, you\u2019ll get a hash representing the data of its content; it uses a format called CID (",(0,r.kt)("strong",{parentName:"p"},"C"),"ontent ",(0,r.kt)("strong",{parentName:"p"},"ID"),"entifier)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'2022-11-23T20:23:09.440690Z  INFO ursa_rpc_client: Using JSON-RPC v2 HTTP URL: <http://0.0.0.0:4069/rpc/v0>\n2022-11-23T20:23:09.441011Z  INFO surf::middleware::logger::native: sending request\n2022-11-23T20:23:09.451132Z  INFO surf::middleware::logger::native: request completed\n2022-11-23T20:23:09.451216Z  INFO ursa::ursa::rpc_commands: Put car file done: "bafybeifyjj2bjhtxmp235vlfeeiy7sz6rzyx3lervfk3ap2nyn4rggqgei"\n')),(0,r.kt)("h3",{id:"retrieve-data-via-the-cli"},"Retrieve Data Via the CLI"),(0,r.kt)("p",null,"We can get a file as quickly as we put the file in the network."),(0,r.kt)("p",null,"The subcommand is ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," followed by a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"CID")," and the output ",(0,r.kt)("inlineCode",{parentName:"p"},"pathname")," where the file will be saved."),(0,r.kt)("p",null,"Here\u2019s the syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ursa rpc get <CID> <PATHNAME>\n")),(0,r.kt)("p",null,"As previously explained, we can always use the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," to find out more about any available subcommands."),(0,r.kt)("p",null,"Following up on the \u201cput\u201d example, we have a valid CID that was returned in response to our request in our network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ursa rpc \\\n    get bafybeifyjj2bjhtxmp235vlfeeiy7sz6rzyx3lervfk3ap2nyn4rggqgei \\\n    ./output\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 Note that we have used a backslash ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," in our command example to break into several lines merely - you can ignore and write all in a single line!")),(0,r.kt)("p",null,"If successful, the output will be similar to the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9623).Z,width:"1624",height:"432"})),(0,r.kt)("p",null,"At this point, we are interested in the file in the \u201coutput\u201d directory. The file is named after the CID (Content identifier) plus the file extension car (the CAR file type)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bafybeifyjj2bjhtxmp235vlfeeiy7sz6rzyx3lervfk3ap2nyn4rggqgei.car\n")),(0,r.kt)("p",null,"The content is a string binary that only an interpreter can understand. Still, you can assert the file size by executing a simple list command to check the files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"output")," directory, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ls -hl ./output\n")),(0,r.kt)("p",null,"The output in our machines shows the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"-rw-r--r-- 1 fleek staff 26K 29 Nov 17:23 \nbafybeifyjj2bjhtxmp235vlfeeiy7sz6rzyx3lervfk3ap2nyn4rggqgei.car\n")),(0,r.kt)("p",null,"Notice that it's the same file size, as the original ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/bafybeidqdywrzg7c3b4dmm332m4b7uiakgitplz2pep2zntederxpj3odi"},"basic.car")," we\u2019ve put into the network. You can verify by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," command, you'll get no output because there's no difference:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cmp basic.car ./output/bafybeifyjj2bjhtxmp235vlfeeiy7sz6rzyx3lervfk3ap2nyn4rggqgei.car\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We\u2019ve now been successful in retrieving the original car file content we \u201cput\u201d into the network earlier!")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,r.kt)("p",null,"Content delivery services have a significant position in our web experience on access to information; If not considered, it might limit access to or manipulate the information we consume."),(0,r.kt)("p",null,"We have learned a bit about the importance of decentralized content delivery networks to mitigate the conflicting interest we otherwise face when trusting traditional content delivery providers for a complete web three experience: reasoning and fundamentals."),(0,r.kt)("p",null,"Finally, we introduced an open-source solution called Fleek Network, appealed for collaboration, and gave a brief example of how simple it is to run a node on anyone\u2019s computer!"),(0,r.kt)("p",null,"Discover more about the project by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa"},"watching/contributing on Github"),", following us on ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for all the best updates!"),(0,r.kt)(o.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}k.isMDXComponent=!0},1026:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83e\udd16 As Fleek Network's repositories are in constant development and change, you should consider that the following guide was ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-checkout"},"checked in")," to commit ",(0,r.kt)("inlineCode",{parentName:"p"},"0c08e9f"),". While we try our best to update documentation and guides during development, there might be breaking changes that might take some time to reflect in our docs. To avoid disappointment, feel free to check into commit ",(0,r.kt)("inlineCode",{parentName:"p"},"0c08e9f")," or contribute by getting in touch with us, or sending a PR in the relevant context. Learn how to checkout a commit in our repository history ",(0,r.kt)("a",{parentName:"p",href:"../../reference/Git/how-to-checkout-a-commit-in-project-history"},"here")," \ud83d\ude4f.")))}o.isMDXComponent=!0},2915:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You have several ways of doing this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clone via HTTPS"),(0,r.kt)("li",{parentName:"ul"},"Clone via SSH"),(0,r.kt)("li",{parentName:"ul"},"Download via Github CLI"),(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/ursa/archive/refs/heads/main.zip"},"zip package")," from the repository")),(0,r.kt)("p",null,"We recommend HTTPS because it is the easiest to set up on the wild, and by users who are new to all this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/fleek-network/ursa.git\n")),(0,r.kt)("p",null,"Although, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:fleek-network/ursa.git\n")))}o.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{image:t,name:n,title:r,url:i}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:i,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:i,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},r),a.createElement("span",{className:"discord"},"Got questions? Find us on ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}},926:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-getting-started-05bd5b4ed492f4044298d00c128a421f.png"},8747:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-node-listeners-a7e77eecd6ca13e7cbb11bfa989fc7b4.png"},1682:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-rust-compiler-cd09d237d1898713595f5909d1e568d7.png"},9623:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/fleek-network-ursa-rpc-get-f2e9bcdac796afa5b4f60808c5514ddc.png"}}]);