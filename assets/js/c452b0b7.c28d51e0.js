"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),a=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=a(n),m=o,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const i={id:"deployment_modes",title:"Deployment Modes"},l=void 0,s={unversionedId:"user_guide/deployment_modes",id:"version-1.1.0/user_guide/deployment_modes",title:"Deployment Modes",description:"\x3c!--",source:"@site/versioned_docs/version-1.1.0/user_guide/deployment_modes.md",sourceDirName:"user_guide",slug:"/user_guide/deployment_modes",permalink:"/docs/1.1.0/user_guide/deployment_modes",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"deployment_modes",title:"Deployment Modes"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/1.1.0/get_started/core_features"},next:{title:"Partition and Queue Configuration",permalink:"/docs/1.1.0/user_guide/queue_config"}},d={},a=[{value:"YuniKorn deployment modes",id:"yunikorn-deployment-modes",level:2},{value:"Which version should I use?",id:"which-version-should-i-use",level:2},{value:"Standard mode",id:"standard-mode",level:3},{value:"Plugin mode",id:"plugin-mode",level:3}],u={toc:a},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"yunikorn-deployment-modes"},"YuniKorn deployment modes"),(0,o.kt)("p",null,"YuniKorn can be deployed in two different modes: standard and plugin. In standard mode, YuniKorn runs as a customized\nKubernetes scheduler. In plugin mode, YuniKorn is implemented as a set of plugins on top of the default Kubernetes\nscheduling framework."),(0,o.kt)("p",null,"In both cases, it is recommended to run the admission controller as well, as this will ensure that only a single\nscheduler is active within your Kubernetes cluster. In this mode, the default Kubernetes scheduler (which is always running)\nwill be bypassed for all pods except YuniKorn itself."),(0,o.kt)("h2",{id:"which-version-should-i-use"},"Which version should I use?"),(0,o.kt)("h3",{id:"standard-mode"},"Standard mode"),(0,o.kt)("p",null,"Standard mode is currently the default. It is stable, efficient, and very performant. It is well-suited for\ndeployments where most if not all pods are leveraging the queueing features of YuniKorn."),(0,o.kt)("h3",{id:"plugin-mode"},"Plugin mode"),(0,o.kt)("p",null,"Plugin mode is a new deployment model where the scheduler is implemented on top of the default Kubernetes scheduling\nlogic, allowing for better compatibility with the default Kubernetes scheduler. It is well-suited for mixed\nworkloads (traditional Kubernetes as well as queued applications)."),(0,o.kt)("p",null,"Plugin mode is currently very new and has therefore not yet reached the maturity level of standard mode."),(0,o.kt)("p",null,"To activate plugin mode when deploying with Helm, set the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"enableSchedulerPlugin")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."))}p.isMDXComponent=!0}}]);