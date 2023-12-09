"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const p={id:"system",title:"System"},o=void 0,s={unversionedId:"api/system",id:"version-1.4.0/api/system",title:"System",description:"\x3c!--",source:"@site/versioned_docs/version-1.4.0/api/system.md",sourceDirName:"api",slug:"/api/system",permalink:"/docs/api/system",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"system",title:"System"},sidebar:"docs",previous:{title:"Scheduler",permalink:"/docs/api/scheduler"},next:{title:"Scheduler",permalink:"/docs/metrics/scheduler"}},l={},i=[{value:"pprof",id:"pprof",level:2},{value:"Success response",id:"success-response",level:3},{value:"Heap",id:"heap",level:2},{value:"Success response",id:"success-response-1",level:3},{value:"Thread create",id:"thread-create",level:2},{value:"Success response",id:"success-response-2",level:3},{value:"Goroutine",id:"goroutine",level:2},{value:"Success response",id:"success-response-3",level:3},{value:"Allocations",id:"allocations",level:2},{value:"Success response",id:"success-response-4",level:3},{value:"Block",id:"block",level:2},{value:"Success response",id:"success-response-5",level:3},{value:"Mutex",id:"mutex",level:2},{value:"Success response",id:"success-response-6",level:3},{value:"Cmdline",id:"cmdline",level:2},{value:"Success response",id:"success-response-7",level:3},{value:"Profile",id:"profile",level:2},{value:"Success response",id:"success-response-8",level:3},{value:"Symbol",id:"symbol",level:2},{value:"Success response",id:"success-response-9",level:3},{value:"Trace",id:"trace",level:2},{value:"Success response",id:"success-response-10",level:3}],c={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These endpoints are for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof")," profiling tool."),(0,a.kt)("h2",{id:"pprof"},"pprof"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/debug/pprof/\n\nTypes of profiles available:\nCount   Profile\n273 allocs\n0   block\n0   cmdline\n78  goroutine\n273 heap\n0   mutex\n0   profile\n29  threadcreate\n0   trace\nfull goroutine stack dump\nProfile Descriptions:\n\nallocs: A sampling of all past memory allocations\nblock: Stack traces that led to blocking on synchronization primitives\ncmdline: The command line invocation of the current program\ngoroutine: Stack traces of all current goroutines\nheap: A sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample.\nmutex: Stack traces of holders of contended mutexes\nprofile: CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile.\nthreadcreate: Stack traces that led to the creation of new OS threads\ntrace: A trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace.\n")),(0,a.kt)("h2",{id:"heap"},"Heap"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/heap")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-1"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"thread-create"},"Thread create"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/threadcreate")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-2"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"goroutine"},"Goroutine"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/goroutine")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-3"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"allocations"},"Allocations"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/allocs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-4"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"block"},"Block"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/block")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-5"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"mutex"},"Mutex"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/mutex")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-6"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"cmdline"},"Cmdline"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/cmdline")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-7"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"profile"},"Profile"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/profile")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-8"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"symbol"},"Symbol"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/symbol")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-9"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"trace"},"Trace"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/trace")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-10"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")))}m.isMDXComponent=!0}}]);