"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||s;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={id:"prometheus",title:"Setting Prometheus"},a=void 0,i={unversionedId:"user_guide/prometheus",id:"version-1.3.0/user_guide/prometheus",title:"Setting Prometheus",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.3.0/user_guide/prometheus.md",sourceDirName:"user_guide",slug:"/user_guide/prometheus",permalink:"/zh-cn/docs/1.3.0/user_guide/prometheus",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"prometheus",title:"Setting Prometheus"},sidebar:"docs",previous:{title:"Labels and Annotations in YuniKorn",permalink:"/zh-cn/docs/1.3.0/user_guide/labels_and_annotations_in_yunikorn"},next:{title:"Use Cases",permalink:"/zh-cn/docs/1.3.0/user_guide/use_cases"}},u={},l=[{value:"1. <strong>Download Prometheus release</strong>",id:"1-download-prometheus-release",level:3},{value:"2. <strong>Configure prometheus.yml</strong>",id:"2-configure-prometheusyml",level:3},{value:"3. Start port-forward",id:"3-start-port-forward",level:3},{value:"4. Execute prometheus",id:"4-execute-prometheus",level:3},{value:"5. Access the Prometheus UI",id:"5-access-the-prometheus-ui",level:3}],c={toc:l},p="wrapper";function m(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"YuniKorn exposes its scheduling metrics via Prometheus. Thus, we need to set up a Prometheus server to collect these metrics."),(0,o.kt)("p",null,"If you don't know what metric can be used, you can use ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.3.0/api/scheduler#%E6%8C%87%E6%A0%87(Metrics)"},"REST API"),"."),(0,o.kt)("h3",{id:"1-download-prometheus-release"},"1. ",(0,o.kt)("strong",{parentName:"h3"},"Download Prometheus release")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/prometheus/prometheus/releases/download/v2.30.3/prometheus-2.30.3.linux-amd64.tar.gz\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar xvfz prometheus-*.tar.gz\ncd prometheus-*\n")),(0,o.kt)("h3",{id:"2-configure-prometheusyml"},"2. ",(0,o.kt)("strong",{parentName:"h3"},"Configure prometheus.yml")),(0,o.kt)("p",null,"Prometheus collects metrics from\xa0",(0,o.kt)("em",{parentName:"p"},"targets"),"\xa0by scraping metrics HTTP endpoints."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['localhost:9080'] \n    # 9080 is internal port, need port forward or modify 9080 to service's port\n")),(0,o.kt)("h3",{id:"3-start-port-forward"},"3. Start port-forward"),(0,o.kt)("p",null,"Port forwarding for the core's web service on the standard port can be turned on via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/yunikorn-service 9080:9080 -n yunikorn\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"9080"),"is the default port for core's web service. "),(0,o.kt)("h3",{id:"4-execute-prometheus"},"4. Execute prometheus"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./prometheus --config.file=prometheus.yml\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"prometheus-cmd",src:r(36559).Z,width:"2560",height:"662"})),(0,o.kt)("h3",{id:"5-access-the-prometheus-ui"},"5. Access the Prometheus UI"),(0,o.kt)("p",null,"You should be able to browse to a status page at\xa0",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/"},"localhost:9090"),". Give it a couple of seconds to collect data about itself from its own HTTP metrics endpoint."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"prometheus-web-ui",src:r(32927).Z,width:"2560",height:"1418"})),(0,o.kt)("p",null,"You can also verify that Prometheus is serving metrics by navigating to its metrics endpoint:",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/metrics"},"localhost:9090/metrics")))}m.isMDXComponent=!0},36559:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/prometheus-cmd-e9648bf15688017326c8d89df9640099.png"},32927:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/prometheus-web-ui-19fc9b727de2706c897400faf4095815.png"}}]);