"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[985],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,f=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77005:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"sorting_policies",title:"Sorting Policies"},s=void 0,p={unversionedId:"user_guide/sorting_policies",id:"version-0.12.2/user_guide/sorting_policies",title:"Sorting Policies",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/user_guide/sorting_policies.md",sourceDirName:"user_guide",slug:"/user_guide/sorting_policies",permalink:"/docs/0.12.2/user_guide/sorting_policies",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"sorting_policies",title:"Sorting Policies"},sidebar:"version-0.12.2/docs",previous:{title:"User & Group Resolution",permalink:"/docs/0.12.2/user_guide/usergroup_resolution"},next:{title:"ACLs",permalink:"/docs/0.12.2/user_guide/acls"}},u={},c=[{value:"Application sorting",id:"application-sorting",level:2},{value:"FifoSortPolicy",id:"fifosortpolicy",level:3},{value:"FairSortPolicy",id:"fairsortpolicy",level:3},{value:"StateAwarePolicy",id:"stateawarepolicy",level:3},{value:"Node sorting",id:"node-sorting",level:2},{value:"FairnessPolicy",id:"fairnesspolicy",level:3},{value:"BinPackingPolicy",id:"binpackingpolicy",level:3},{value:"Resource weighting",id:"resource-weighting",level:2},{value:"Request sorting",id:"request-sorting",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The scheduler uses policies allow changing the scheduling behaviour without code changes.\nPolicies can be set for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#application-sorting"},"Applications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#node-sorting"},"Nodes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#request-sorting"},"Requests"))),(0,r.kt)("h2",{id:"application-sorting"},"Application sorting"),(0,r.kt)("p",null,"The application sorting policy is set for each queue via the config.\nA sorting policy setting is only effective on a ",(0,r.kt)("inlineCode",{parentName:"p"},"leaf")," queue.\nEach ",(0,r.kt)("inlineCode",{parentName:"p"},"leaf")," queue can use a different policy."),(0,r.kt)("p",null,"A sorting policy only specifies the order in which the applications are sorted within a queue.\nThat order is crucial in specifying which application is considered first when assigning resources.\nSorting policies do ",(0,r.kt)("em",{parentName:"p"},"not")," affect the number of applications that are scheduled or active in the queue at the same time.\nAll applications that have pending resource requests can and will be scheduled in a queue unless specifically filtered out.\nEven when applications are sorted using a first in first out policy multiple applications will run in a queue in parallel. "),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," queue will always use the fair policy to sort the child queues."),(0,r.kt)("p",null,"The following configuration entry sets the application sorting policy to ",(0,r.kt)("inlineCode",{parentName:"p"},"fifo")," for the queue ",(0,r.kt)("inlineCode",{parentName:"p"},"root.sandbox"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n    - name: root\n      queues:\n      - name: sandbox\n        properties:\n          application.sort.policy: fifo\n")),(0,r.kt)("p",null,"The only applications that are considered during scheduling must have outstanding requests.\nA filter is applied ",(0,r.kt)("em",{parentName:"p"},"while")," sorting the applications to remove all that do not have outstanding requests."),(0,r.kt)("h3",{id:"fifosortpolicy"},"FifoSortPolicy"),(0,r.kt)("p",null,"Short description: first in first out, based on application create time",(0,r.kt)("br",{parentName:"p"}),"\n","Config value: fifo (default)",(0,r.kt)("br",{parentName:"p"}),"\n","Behaviour:",(0,r.kt)("br",{parentName:"p"}),"\n","Before sorting the applications are filtered and must have pending resource requests."),(0,r.kt)("p",null,"After filtering the applications left are sorted based on the application create time stamp only, no other filtering is applied.\nSince applications can only be added while the system is locked there can never be two applications with the exact same time stamp. "),(0,r.kt)("p",null,"The result is that the oldest application that requests resources gets resources.\nYounger applications will be given resources when all the current requests of older applications have been fulfilled. "),(0,r.kt)("h3",{id:"fairsortpolicy"},"FairSortPolicy"),(0,r.kt)("p",null,"Short description: fair based on usage",(0,r.kt)("br",{parentName:"p"}),"\n","Config value: fair",(0,r.kt)("br",{parentName:"p"}),"\n","Behaviour:",(0,r.kt)("br",{parentName:"p"}),"\n","Before sorting the applications are filtered and must have pending resource requests."),(0,r.kt)("p",null,"After filtering the applications left are sorted based on the application usage.\nThe usage of the application is defined as all confirmed and unconfirmed allocations for the applications.\nAll resources defined on the application will be taken into account when calculating the usage."),(0,r.kt)("p",null,"The result is that the resources available are spread equally over all applications that request resources."),(0,r.kt)("h3",{id:"stateawarepolicy"},"StateAwarePolicy"),(0,r.kt)("p",null,"Short description: limit of one (1) application in Starting or Accepted state",(0,r.kt)("br",{parentName:"p"}),"\n","Config value: stateaware",(0,r.kt)("br",{parentName:"p"}),"\n","Behaviour:",(0,r.kt)("br",{parentName:"p"}),"\n","This sorting policy requires an understanding of the application states.\nApplications states are described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.2/design/scheduler_object_states#application-state"},"application states")," documentation."),(0,r.kt)("p",null,"Before sorting applications the following filters are applied to all applications in the queue:\nThe first filter is based on the application state.\nThe following applications pass through the filter and generate the first intermediate list:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all applications in the state ",(0,r.kt)("em",{parentName:"li"},"running")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"one")," (1) application in the ",(0,r.kt)("em",{parentName:"li"},"starting")," state"),(0,r.kt)("li",{parentName:"ul"},"if there are ",(0,r.kt)("em",{parentName:"li"},"no")," applications in the ",(0,r.kt)("em",{parentName:"li"},"starting")," state ",(0,r.kt)("em",{parentName:"li"},"one")," (1) application in the ",(0,r.kt)("em",{parentName:"li"},"accepted")," state is added")),(0,r.kt)("p",null,"The second filter takes the result of the first filter as an input.\nThe preliminary list is filtered again: all applications ",(0,r.kt)("em",{parentName:"p"},"without")," a pending request are removed."),(0,r.kt)("p",null,"After filtering based on status and pending requests the applications that remain are sorted.\nThe final list is thus filtered twice with the remaining applications sorted on create time."),(0,r.kt)("p",null,"To recap the ",(0,r.kt)("em",{parentName:"p"},"staring")," and ",(0,r.kt)("em",{parentName:"p"},"accepted")," state interactions:\nThe application in the ",(0,r.kt)("em",{parentName:"p"},"accepted")," state is only added if there is no application in the ",(0,r.kt)("em",{parentName:"p"},"starting")," state.\nThe application in the ",(0,r.kt)("em",{parentName:"p"},"starting")," state does not have to have pending requests.\nAny application in the ",(0,r.kt)("em",{parentName:"p"},"starting")," state will prevent ",(0,r.kt)("em",{parentName:"p"},"accepted")," applications from being added to the filtered list."),(0,r.kt)("p",null,"For further details see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.2/design/state_aware_scheduling#example-run"},"Example run")," in the design document."),(0,r.kt)("p",null,"The result is that already running applications that request resources will get resources first.\nA drip feed of one new applications is added to the list of running applications to be allocated after all running applications.  "),(0,r.kt)("h2",{id:"node-sorting"},"Node sorting"),(0,r.kt)("p",null,"The node sorting policy is set for a partition via the config.\nEach partition can use a different policy."),(0,r.kt)("p",null,"The following configuration entry sets the node sorting policy to ",(0,r.kt)("inlineCode",{parentName:"p"},"fair")," for the partition ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    nodesortpolicy:\n        type: fair\n")),(0,r.kt)("h3",{id:"fairnesspolicy"},"FairnessPolicy"),(0,r.kt)("p",null,"Short description: available resource, descending order",(0,r.kt)("br",{parentName:"p"}),"\n","Config value: fair (default)",(0,r.kt)("br",{parentName:"p"}),"\n","Behaviour:",(0,r.kt)("br",{parentName:"p"}),"\n","Sort the list of nodes by the amount of available resources so that the node with the ",(0,r.kt)("em",{parentName:"p"},"highest")," amount of available resource is the first in the list.\nAll resources defined on a node will be taken into account when calculating the usage.\nResources of the same type are compared for the nodes. "),(0,r.kt)("p",null,"This results in a node with the lowest utilisation to be considered first for assigning new allocation.\nResulting in a spread of allocations over all available nodes.\nLeading to an overall lower utilisation of the individual available nodes, unless the whole environment is highly utilised.\nKeeping the load on all nodes at a similar level does help\nIn an environment that auto scales by adding new nodes this could trigger unexpected auto scale requests.   "),(0,r.kt)("h3",{id:"binpackingpolicy"},"BinPackingPolicy"),(0,r.kt)("p",null,"Short description: available resource, ascending order",(0,r.kt)("br",{parentName:"p"}),"\n","Config value: binpacking",(0,r.kt)("br",{parentName:"p"}),"\n","Behaviour:",(0,r.kt)("br",{parentName:"p"}),"\n","Sort the list of nodes by the amount of available resources so that the node with the ",(0,r.kt)("em",{parentName:"p"},"lowest")," amount of available resource is the first in the list.\nAll resources defined on a node will be taken into account when calculating the usage.\nResources of the same type are compared for the nodes. "),(0,r.kt)("p",null,"This results in a node with the highest utilisation to be considered first for assigning new allocation.\nResulting in a high(er) utilisation of a small(er) number of nodes, better suited for cloud deployments.   "),(0,r.kt)("h2",{id:"resource-weighting"},"Resource weighting"),(0,r.kt)("p",null,"Node sorting policies may use the utilization of a node to determine ordering. Because nodes can have several unique\nresource types, a node's utilization is determined by a weighted average of its individual resource types. Resource\nweighting can be customized by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceweights")," section of ",(0,r.kt)("inlineCode",{parentName:"p"},"nodesortpolicy"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceweights")," is not\npresent or empty, the default configuration sets the weight of both ",(0,r.kt)("inlineCode",{parentName:"p"},"vcore")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," equally to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0"),". All other\nresource types are ignored. Only resource types explicitly mentioned will have a weight."),(0,r.kt)("p",null,"YuniKorn tracks CPU resources internally as the ",(0,r.kt)("inlineCode",{parentName:"p"},"vcore")," resource type. This maps to the Kubernetes resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu"),".\nAll other resource types have consistent naming between YuniKorn and Kubernetes."),(0,r.kt)("p",null,"For example, in the default configuration, if a node has ",(0,r.kt)("inlineCode",{parentName:"p"},"90%")," of its CPU and ",(0,r.kt)("inlineCode",{parentName:"p"},"50%")," of its memory allocated, the node\nwill be considered to be ",(0,r.kt)("inlineCode",{parentName:"p"},"70%")," utilized."),(0,r.kt)("p",null,"The following configuration entry sets the weight of ",(0,r.kt)("inlineCode",{parentName:"p"},"vcore")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"4.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," for the partition ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),".\nThis will weight CPU usage four times higher than memory usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    nodesortpolicy:\n      type: fair\n      resourceweights:\n        vcore: 4.0\n        memory: 1.0\n")),(0,r.kt)("p",null,"With this configuration, In this example, if a node has ",(0,r.kt)("inlineCode",{parentName:"p"},"90%")," of its CPU and ",(0,r.kt)("inlineCode",{parentName:"p"},"50%")," of its memory allocated, the node\nwill be considered to be ",(0,r.kt)("inlineCode",{parentName:"p"},"82%")," utilized."),(0,r.kt)("p",null,"Note that weights are relative to each other, so specifying weights of ",(0,r.kt)("inlineCode",{parentName:"p"},"{ 4.0, 1.0 }")," is equivalent to\n",(0,r.kt)("inlineCode",{parentName:"p"},"{ 1.0, 0.25 }"),". Negative weights are not allowed."),(0,r.kt)("h2",{id:"request-sorting"},"Request sorting"),(0,r.kt)("p",null,"There is currently one policy for sorting requests within an application.\nThis policy is not configurable.\nSorting requests is only possible based on the priority of the request.\nIf there are multiple requests within an application that have the same priority the order of the requests is undetermined.\nThis means that the order of requests with the same priority can, and most likely will, change between runs."))}h.isMDXComponent=!0}}]);