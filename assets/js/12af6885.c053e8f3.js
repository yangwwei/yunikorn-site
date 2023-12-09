"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95643],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var i=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(o),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return o?i.createElement(m,s(s({ref:t},d),{},{components:o})):i.createElement(m,s({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<n;p++)s[p]=o[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},55908:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var i=o(87462),r=(o(67294),o(3905));const n={id:"simple_preemptor",title:"DaemonSet Scheduling using Simple Preemptor"},s=void 0,a={unversionedId:"design/simple_preemptor",id:"design/simple_preemptor",title:"DaemonSet Scheduling using Simple Preemptor",description:"\x3c!--",source:"@site/docs/design/simple_preemptor.md",sourceDirName:"design",slug:"/design/simple_preemptor",permalink:"/docs/next/design/simple_preemptor",draft:!1,tags:[],version:"current",frontMatter:{id:"simple_preemptor",title:"DaemonSet Scheduling using Simple Preemptor"},sidebar:"docs",previous:{title:"Preemption",permalink:"/docs/next/design/preemption"},next:{title:"Generic Resource Types in Namespace Quota",permalink:"/docs/next/design/generic_resource"}},l={},p=[{value:"When to start preemption?",id:"when-to-start-preemption",level:2},{value:"How to do preemption?",id:"how-to-do-preemption",level:2},{value:"Steps in trigger_preempt_workflow() go routine:",id:"steps-in-trigger_preempt_workflow-go-routine",level:3},{value:"Reservation age check (1)",id:"reservation-age-check-1",level:5},{value:"Get allocations from specific required Node (2)",id:"get-allocations-from-specific-required-node-2",level:5},{value:"Pre-filter pods to choose Victims/Candidates suited for Preemption (3)",id:"pre-filter-pods-to-choose-victimscandidates-suited-for-preemption-3",level:5},{value:"DaemonSet Pods",id:"daemonset-pods",level:6},{value:"Ordering Victim pods (4)",id:"ordering-victim-pods-4",level:5},{value:"Pods classification",id:"pods-classification",level:6},{value:"Sorting Pods",id:"sorting-pods",level:6},{value:"Victim pods selection strategy (5)",id:"victim-pods-selection-strategy-5",level:4},{value:"1. Single Victim Pod",id:"1-single-victim-pod",level:5},{value:"2. Multiple Victim Pods",id:"2-multiple-victim-pods",level:5},{value:"Communicate the Pod Preemption to Shim (6)",id:"communicate-the-pod-preemption-to-shim-6",level:4},{value:"What happens after Preemption?",id:"what-happens-after-preemption",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design--implementation-of-preemption-for-daemonset-pods-using-simple-preemptor"},"Design & Implementation of Preemption for DaemonSet Pods using Simple Preemptor"),(0,r.kt)("p",null,"The simplistic approach to preempt or free up resources of running applications for DaemonSet pods. A good example of daemonset pod is fluentd logging pod which is very essential for any applicaton pod running in the node for logging."),(0,r.kt)("h2",{id:"when-to-start-preemption"},"When to start preemption?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-1184"},"YUNIKORN-1184")," ensures daemon set pods have been allocated properly if resources are available on the required node, otherwise, reserve the same required node so that it can be picked up to make reservation as reserved allocation (AllocatedReserved) in the next scheduling cycle. However, the whole process of modifying the reservation to reserved allocation depends on how much resources are freed up in the meantime. Duration for freeing up resources by natural course is non deterministic as it depends on the running pods execution on that particular node and it could take slightly longer time as well."),(0,r.kt)("p",null,"By any chance, before the next run of the regular scheduling cycle (context#schedule() ), resources become available and particularly on that specific required node, then nothing needs to be done. It just moves ahead with the next steps. In case of resource constraints, unlike the regular pod reservation, other nodes cannot be tried by calling application#tryNodesNoReserve() as this demonset pod needs to run only on the specific required node. Instead, we can fork a new go routine (trigger_preempt_workflow() ) to run the workflow steps described below."),(0,r.kt)("h2",{id:"how-to-do-preemption"},"How to do preemption?"),(0,r.kt)("p",null,"K8s does the preemption based on the pod priority. Pods with lower priority would be chosen first and so on. Proposal is not to depend on k8s for Preemption. Instead, Core should take the responsibility of finding out the list of pods that needs to be preempted, making communications to Shim and finally expecting the preempted resources to allocate to the corresponding daemonset automatically as part of the regular scheduling cycle."),(0,r.kt)("h3",{id:"steps-in-trigger_preempt_workflow-go-routine"},"Steps in trigger_preempt_workflow() go routine:"),(0,r.kt)("h5",{id:"reservation-age-check-1"},"Reservation age check (1)"),(0,r.kt)("p",null,"We can introduce a new Reservation age \u201ccreatetime\u201d (can be added to the reservation object) to check against the configured value of preemption_start_delay, a property to define the minimal waiting time to start the preemption process. Once reservation age exceeds this waiting time, the next step would be carried out. Otherwise, the corresponding reservation has to wait and can be processed next time."),(0,r.kt)("h5",{id:"get-allocations-from-specific-required-node-2"},"Get allocations from specific required Node (2)"),(0,r.kt)("p",null,"Get all allocations from the required node of the daemonset pod and go through the below Pre-filter pods step to filter the pods not suited for a preemption."),(0,r.kt)("h5",{id:"pre-filter-pods-to-choose-victimscandidates-suited-for-preemption-3"},"Pre-filter pods to choose Victims/Candidates suited for Preemption (3)"),(0,r.kt)("p",null,"Core should filter the pods based on the following criteria:"),(0,r.kt)("h6",{id:"daemonset-pods"},"DaemonSet Pods"),(0,r.kt)("p",null,"All Daemonset pods should be filtered out completely irrespective of priority settings. Depending on the \u201crequiredNode\u201d value of pod spec, these pods can be filtered out and cannot be taken forward for the remaining process."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"simple_preemptor",src:o(51770).Z,width:"1024",height:"768"})),(0,r.kt)("h5",{id:"ordering-victim-pods-4"},"Ordering Victim pods (4)"),(0,r.kt)("h6",{id:"pods-classification"},"Pods classification"),(0,r.kt)("p",null,"Once pods has been filtered out, need to classify the pods based on its types:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Regular/Normal Pods (RP)"),(0,r.kt)("li",{parentName:"ol"},"Driver/Owner Pods (DP)"),(0,r.kt)("li",{parentName:"ol"},"Preemption Opt out Pods (OP)")),(0,r.kt)("p",null,"This classification ensures different treatment for each type of pod so that victims can be chosen among these pods in the same order. Please refer to the above diagram. It shows the 2-Dimensional array (NOTE: \u201cArray\u201d has been used only for documentation purposes, need to finalize the appropriate data structure) with each sub array holding pods of the same type. 1st sub array has RP\u2019s, 2nd sub array has DP\u2019s, 3rd sub array has OP\u2019s and goes on."),(0,r.kt)("p",null,"Regular/Normal Pods (RP)"),(0,r.kt)("p",null,"The regular/normal pods should be gathered and placed in the 1st sub array as these pods are given first preference for choosing the victims. In general, preempting these pods have very little impact when compared to other types/classes of pods. Hence, keeping these pods in the first subarray is the right choice"),(0,r.kt)("p",null,"Application Owner (DP)"),(0,r.kt)("p",null,"Pod acting as owner/master for other pods in the same application should be placed in the 2nd sub array because preempting those kinds of pods has a major impact when compared to Regular pods. We can select these pods by checking whether any owner reference exists between this pod and other pods. This will help prevent scenarios such as a driver pod being evicted at a very early stage when other alternatives are available for choosing the victim."),(0,r.kt)("p",null,"Preemption Opt out (OP)"),(0,r.kt)("p",null,"Pods can be allowed to run with the Preempt opt out option. So, Pods marked with opt out should be placed in the 3rd sub array and can be used to choose victims as a last option. For now, we can use a label such as yunikorn.apache.org/allow-preemption: false for detecting those pods."),(0,r.kt)("p",null,"As and when we want to introduce a new class/type of Pods, a new sub array would be created for the same and would be placed in the main array based on its significance."),(0,r.kt)("h6",{id:"sorting-pods"},"Sorting Pods"),(0,r.kt)("p",null,"Each sub array should be sorted based on the multiple criteria:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Priority"),(0,r.kt)("li",{parentName:"ol"},"Age"),(0,r.kt)("li",{parentName:"ol"},"Resource")),(0,r.kt)("p",null,"Each sub array would be sorted priority wise, age wise and finally resource wise. The 1st sub array carrying Regular Pods has 4 pods of priority 1 and 2 pods of Priority 2. Among the 4 pods of the same priority, 3 pods are of the same age as well. Hence, again sorting resource wise really adds value and sorts them in the above shown order. Please refer to \u201czone\u201d."),(0,r.kt)("h4",{id:"victim-pods-selection-strategy-5"},"Victim pods selection strategy (5)"),(0,r.kt)("p",null,"Introduce a new configuration, preemption_victim_poselection_strategy with different options (single, multiple etc) but later options act as fallback to earlier one. Defining an order for these options should be possible and upto the Administrator to place the options in an order he/she desires. Depending on the values, the whole selection strategy mechanism can decide whether a \u201cfallback\u201d approach among these options should be followed or not. Depending on the value, the selection strategy process would continue with the next option only if no selection has been made with the earlier option or stop only with the first option even if no selection has been made."),(0,r.kt)("h5",{id:"1-single-victim-pod"},"1. Single Victim Pod"),(0,r.kt)("p",null,"Single Victim Pod, but resource deviation between victim pod and daemonset pod is not beyond configurable percentage. Configuring deviation with lower percentage (for example, 5% or 10%) helps prevent evicting victim pods already running with higher resource requirements. If there are many single victims found within the defined deviation %, then selection starts based on deviation % ascending order as intent is to choose the victim as close as possible to the daemonset pod resource requirements."),(0,r.kt)("h5",{id:"2-multiple-victim-pods"},"2. Multiple Victim Pods"),(0,r.kt)("p",null,"Multiple Victim Pods, but no. of victim pods not more than configured value. This selection strategy helps to choose more than one victim, starts with the victim (resource wise descending order) and goes upto to a stage where total resource of victims meets the daemonset resource requirements but ensuring total count of victim pods not exceeding configured value."),(0,r.kt)("p",null,"New config: preemption_victim_pods_selection_strategy\nPossible values are single,multiple (default) or multiple,single or single or multiple"),(0,r.kt)("p",null,"In case of more than one value (for ex. single,multiple), fallback would be followed as described above."),(0,r.kt)("h4",{id:"communicate-the-pod-preemption-to-shim-6"},"Communicate the Pod Preemption to Shim (6)"),(0,r.kt)("p",null,"Once the list of pods has been finalized for preemption, Core can make a call to Shim for termination using notifyRMAllocationReleased (with type as TerminationType_PREEMPTED_BY_SCHEDULER). Shim can process the request as usual by making a call to K8s to delete the pod and subsequently call failTaskPodWithReasonAndMsg to notify the pod with reasons."),(0,r.kt)("h3",{id:"what-happens-after-preemption"},"What happens after Preemption?"),(0,r.kt)("p",null,"Shim makes a call to K8s to delete the pod. Once k8s delete the pod, shim gets a notification from k8 and passes the information to core. This flow happens for any pod deletion and exists even today. So, even for preempted resources, we can leave it upto the regular scheduling cycle and Core-Shim communications to allocate these freed up preempted resources to the daemonset pod as node has been already reserved much earlier before the above described whole preemption workflow has begun."))}u.isMDXComponent=!0},51770:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/simple_preemptor-96e222cf57c1a7731592f0547e71eafd.png"}}]);