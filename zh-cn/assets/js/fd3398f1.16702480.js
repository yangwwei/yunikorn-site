"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={id:"resilience",title:"Resilience"},a=void 0,s={unversionedId:"design/resilience",id:"design/resilience",title:"Resilience",description:"\x3c!--",source:"@site/docs/design/resilience.md",sourceDirName:"design",slug:"/design/resilience",permalink:"/zh-cn/docs/next/design/resilience",draft:!1,tags:[],version:"current",frontMatter:{id:"resilience",title:"Resilience"},sidebar:"docs",previous:{title:"Priority Scheduling",permalink:"/zh-cn/docs/next/design/priority_scheduling"},next:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/zh-cn/docs/next/design/state_aware_scheduling"}},l={},c=[{value:"The problem",id:"the-problem",level:2},{value:"Design",id:"design",level:2},{value:"Workflow",id:"workflow",level:3},{value:"How to determine recovery is complete?",id:"how-to-determine-recovery-is-complete",level:3},{value:"Node recovery",id:"node-recovery",level:3},{value:"Requests for recovery",id:"requests-for-recovery",level:3},{value:"Applications",id:"applications",level:4},{value:"Nodes and allocations",id:"nodes-and-allocations",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is not a HA (High-availability) design, HA implies that a service can\nsurvive from a fatal software/hardware failure. That requires one or more\nstandby instances providing same services to take over active instance on failures.\nResilience here means for YuniKorn, we can restart it without losing its state."),(0,r.kt)("h2",{id:"the-problem"},"The problem"),(0,r.kt)("p",null,"YuniKorn is designed as a stateless service, it doesn't persist its state, e.g\napplications/queues/allocations etc, to any persistent storage. All states are\nin memory only. This design ensures YuniKorn to be able to response requests with\nlow latency, and deployment mode is simple. However, a restart (or recovery) will\nhave the problem to lose state data. We need a decent way to reconstruct all\nprevious states on a restart."),(0,r.kt)("h2",{id:"design"},"Design"),(0,r.kt)("h3",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,'Scheduler core has no notion of "state", which means it does not know if it is under recovering.\nIt is too complex to maintain a series of ',(0,r.kt)("inlineCode",{parentName:"p"},"scheduler states")," in both core and shim, because we must\nkeep them in-sync. However, if we live under a simple assumption: ",(0,r.kt)("strong",{parentName:"p"},"scheduler core only responses\nrequests, the correction of requests is ensured by shim according its current state"),".\nThe design becomes much simpler. This way, the shim maintains a state machine like below. When\nit is under ",(0,r.kt)("inlineCode",{parentName:"p"},"running")," state, it sends new requests to the scheduler core as long as a new one is found;\nwhen under ",(0,r.kt)("inlineCode",{parentName:"p"},"recovering")," state, it collects previous allocations and send recovery messages to\nthe scheduler core, and waiting for recovery to be accomplished."),(0,r.kt)("p",null,"Shim scheduler state machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      Register                 Recover                Success\nNew -----------\x3e Registered -----------\x3e Recovering ----------\x3e Running\n                                             |   Fail\n                                              --------\x3e Failed\n")),(0,r.kt)("p",null,"Following chart illustrate how yunikorn-core and shim works together on recovery."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Workflow",src:n(29974).Z,width:"7198",height:"2222"})),(0,r.kt)("p",null,"Restart (with recovery) process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"yunikorn-shim registers itself with yunikorn-core"),(0,r.kt)("li",{parentName:"ul"},'shim enters "recovering" state. Under "recovering" state, the shim only scans existing nodes and allocations, no new scheduling requests will be sent.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"shim scans existing nodes from api-server and added them to cache"),(0,r.kt)("li",{parentName:"ul"},"shim scans existing pods from api-server, filter out the pods that already assigned (scheduled to a node), and added that to cache (allocation in that node)"),(0,r.kt)("li",{parentName:"ul"},"shim sends update request to yunikorn-core with the info found in previous steps"))),(0,r.kt)("li",{parentName:"ul"},"yunikorn-core handles update requests, the steps should look like a replay of allocation process, including",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"adding node"),(0,r.kt)("li",{parentName:"ul"},"adding applications"),(0,r.kt)("li",{parentName:"ul"},"adding allocations"),(0,r.kt)("li",{parentName:"ul"},"modifying queue resources"),(0,r.kt)("li",{parentName:"ul"},"update partition info"))),(0,r.kt)("li",{parentName:"ul"},'when all nodes are fully recovered, shim transits the state to "running"'),(0,r.kt)("li",{parentName:"ul"},'shim notifies yunikorn-core that recovery is done, then yunikorn-core transits to "running" state.')),(0,r.kt)("h3",{id:"how-to-determine-recovery-is-complete"},"How to determine recovery is complete?"),(0,r.kt)("p",null,"Shim queries K8s api-server to get how many nodes were available in this cluster. It tracks the recovering status of each node.\nOnce all nodes are recovered, it can claim the recovery is completed. This approach requires us to add ",(0,r.kt)("inlineCode",{parentName:"p"},"recovering")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"recovered"),"\nstates to nodes' state machine in the shim."),(0,r.kt)("h3",{id:"node-recovery"},"Node recovery"),(0,r.kt)("p",null,"In the shim layer, it maintains states for each node and pods running on this node. When start to recover nodes,\nall nodes initially are considered as under ",(0,r.kt)("inlineCode",{parentName:"p"},"recovering"),". Only when all pods running on this node are fully recovered,\nthe node can be considered as ",(0,r.kt)("inlineCode",{parentName:"p"},"recovered"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"node-recovery",src:n(66550).Z,width:"6426",height:"2489"})),(0,r.kt)("p",null,"Like demonstrated on upon diagram,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node0 is still recovering because pod0 is recovering."),(0,r.kt)("li",{parentName:"ul"},"Node1 is recovered (become schedulable) because all pods on this node have been recovered."),(0,r.kt)("li",{parentName:"ul"},"Node2 is lost, shim lost contact with this node. If after sometime this node comes back, shim should still try to recover this node.")),(0,r.kt)("h3",{id:"requests-for-recovery"},"Requests for recovery"),(0,r.kt)("p",null,"During recovery process, shim needs to collect all known information of applications, nodes and allocations from the underneath\nResource Manager and use them for recovery."),(0,r.kt)("h4",{id:"applications"},"Applications"),(0,r.kt)("p",null,"Existing applications must be recovered first before allocations. Shim needs to scan all existing applications\nfrom nodes, and add applications info as a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"AddApplicationRequest")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateRequest"),". This is same\nas the fresh application submission."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"message AddApplicationRequest {\n  string applicationID = 1;\n  string queueName = 2;\n  string partitionName = 3;\n}\n")),(0,r.kt)("h4",{id:"nodes-and-allocations"},"Nodes and allocations"),(0,r.kt)("p",null,"Once a shim is registered to the scheduler-core, subsequent requests are sent via ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateRequest#NewNodeInfo"),"\n(see more from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface/blob/master/si.proto"},"si.proto"),").\nThe structure of the messages looks like,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"message NewNodeInfo {\n  // nodeID\n  string nodeID = 1;\n  // optional node attributes\n  map<string, string> attributes = 2;\n  // total node resource\n  Resource schedulableResource = 3;\n  // existing allocations on this node\n  repeated Allocation existingAllocations = 4;\n}\n")),(0,r.kt)("p",null,"Shim needs to scan all existing allocations on a node and wrap these info up as a ",(0,r.kt)("inlineCode",{parentName:"p"},"NewNodeInfo"),", add that to a\n",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," and then send to scheduler-core."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": the recovery of existing allocations depend on the existence of applications, which means applications must\nbe recovered first. Since scheduler-core handles ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," one by one, it is required that all existing allocations\nin a ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateRequest")," must from known applications or new applications embedded within the same ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateRequest"),", which can be\nspecified in ",(0,r.kt)("inlineCode",{parentName:"p"},"NewApplications")," field. Scheduler-core ensures ",(0,r.kt)("inlineCode",{parentName:"p"},"NewApplications")," are always processed first."))}u.isMDXComponent=!0},66550:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/resilience-node-recovery-6abe663c243bdfdbff691e14a70166e5.jpg"},29974:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/resilience-workflow-191f147a7501740ec6632f216f2bb25f.jpg"}}]);