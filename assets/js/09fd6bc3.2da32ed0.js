"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8518],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4946:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={id:"events",title:"Events"},l=void 0,s={type:"mdx",permalink:"/community/events",source:"@site/src/pages/community/events.md",title:"Events",description:"\x3c!--",frontMatter:{id:"events",title:"Events"}},c=[{value:"Upcoming Meetup",id:"upcoming-meetup",level:2},{value:"Past Meetups",id:"past-meetups",level:2},{value:"Past Conference Sessions",id:"past-conference-sessions",level:2},{value:"Demo Videos",id:"demo-videos",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"upcoming-meetup"},"Upcoming Meetup"),(0,o.kt)("p",null,"Join us on ",(0,o.kt)("strong",{parentName:"p"},"4:30pm - 5:30pm, PST, Feb 16, 2022")),(0,o.kt)("p",null,"We are hosting an Apache YuniKorn (Incubating) meetup on Wednesday February 16. Come join us! Since our first meetup held in November last year, lots of new development has happened in the community. We are excited to have three talks lined up! Add this event to your calendar: ",(0,o.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0/r/eventedit/copy/N21jYmxiYWx0c211M2pvMTIydDZxZ2s5ajAgYXBhY2hlLnl1bmlrb3JuQG0/Y2hlbnlhemhhbmdjaGVueWFAZ21haWwuY29t?cid=YXBhY2hlLnl1bmlrb3JuQGdtYWlsLmNvbQ"},"\ud83d\udcc6")),(0,o.kt)("p",null,"Erica Lin, Luna Xu, and Sean Gorsky from Sync Computing will present their work on Spark autotuner and orchestrator.\nDescription:\nEfficiently managing the infrastructure and schedules of thousands of data pipelines in multi-tenant and heterogeneous environments is a daunting task. Poor application tuning, resource allocation, and scheduling can lead to exorbitant costs on the cloud, sluggish performance, and failed jobs due to the intractable infrastructure search space. Addressing each of these codependent issues separately also often doesn't lead to the best results overall. Sync Computing will share how their autotuner and orchestrator addresses these issues jointly as a single optimization problem. As a result, the solution offers globally optimized Spark configurations, resource provisioning, and job scheduling with configurable optimization goals, enabling a seamless user experience of running DAG workflows in the cloud. We experimentally demonstrate on AWS up to 77% cost savings or 45% performance acceleration of a Spark and Airflow DAG. Simulations of our solution on a multi-day Alibaba cloud trace resulted in a 57% reduction in total DAG completion time for their batch workloads. This work could be complementary to Yunikorn and we would like to discuss potential integration strategies with the community."),(0,o.kt)("p",null,"Craig Condit from Cloudera will talk about the latest YuniKorn release v0.12.2 and offer a glimpse of what the upcoming v1.0 release has in store.\nDescription:\nv0.12.2 release offers a host of new features and bug fixes. Specifically, the admission controller implementation has been refactored to enable the YuniKorn scheduler to be seamless maintained and upgraded. In the upcoming v1.0 release, we will witness a major milestone of the YuniKorn project. An exciting feature is a new mode of deployment based on the Kubernetes Scheduling Framework, which offers better compatibility with the default scheduler and makes it easier for new users to try out YuniKorn."),(0,o.kt)("p",null,"Tingyao Huang and Yuteng Chen are both YuniKorn committers. They have done extensive performance benchmarking using the latest YuniKorn codebase. Their results showed convincing throughput advantages of YuniKorn compared to the default scheduler."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"past-meetups"},"Past Meetups"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4:30pm - 6:00pm, PST, Nov 18, 2021")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wilfred Spiegelenburg")," presented a session to introduce the latest status in the YuniKorn community."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Abstract"),": Apache YuniKorn (Incubating) has released v0.11 earlier this year with a number of new features and improvements\nlike Gang scheduling, REST API enhancements and Kubernetes 1.19 support. In a month, we are planning the major\nv1.0.0 release with Kubernetes 1.20 & 1.21 support, improved node sorting and numerous small fixes & enhancements! In this meetup, we will deep dive into the implementation of Gang scheduling behind the use of temporary\nplaceholder pods on Kubernetes, significant performance improvement with simplified scheduler core code and\na new node sorting algorithm. Please find all the topics for this meetup ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1-NP0J22-Gp3cZ_hfKyA9htXJw7tlk-BmljF-7CBJg44"},"here"),". "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"past-conference-sessions"},"Past Conference Sessions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ApacheCon 2021: ",(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/gOST-iT-hj8"},"Next Level Spark on Kubernetes with Apache YuniKorn (Incubating)")," \ud83d\udc65 Weiwei Yang, Chaoran Yu"),(0,o.kt)("li",{parentName:"ul"},"ApacheCon Asia 2021: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=c9UYxzqVMeg"},"State Of The Union With Apache Yunikorn (Incubating) - Cloud Native Scheduler For Big Data Usecases"),"  \ud83d\udc65 Julia Kinga Marton, Sunil Govindan"),(0,o.kt)("li",{parentName:"ul"},"Future of Data Meetup: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=j-6ehu6GrwE"},"Apache YuniKorn: Cloud-native Resource Scheduling")," \ud83d\udc65 Wangda Tan, Wilfred Spiegelenburg"),(0,o.kt)("li",{parentName:"ul"},"ApacheCon 2020: ",(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/4hghJCuZk5M"},"Integrate Apache Flink with Cloud Native Ecosystem")," \ud83d\udc65 Yang Wang, Tao Yang"),(0,o.kt)("li",{parentName:"ul"},"Spark+AI Summit 2020: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/embed/ZA6aPZ9r9wA"},"Cloud-Native Spark Scheduling with YuniKorn Scheduler")," \ud83d\udc65 Gao Li, Weiwei Yang"),(0,o.kt)("li",{parentName:"ul"},"Flink Forward 2020: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/embed/NemFKL0kK9U"},"Energize multi-tenant Flink on K8s with YuniKorn")," \ud83d\udc65 Weiwei Yang, Wilfred Spiegelenburg")),(0,o.kt)("h2",{id:"demo-videos"},"Demo Videos"),(0,o.kt)("p",null,"Please subscribe to ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCDSJ2z-lEZcjdK27tTj_hGw"},"YuniKorn Youtube Channel")," to get notification about new demos!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cCHVFkbHIzo"},"Running YuniKorn on Kubernetes - a 12 minutes Hello-world demo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3WOaxoPogDY"},"YuniKorn configuration hot-refresh introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=XDrjOkMp3k4"},"Yunikorn scheduling and volumes on Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=DfhJLMjaFH0"},"Yunikorn placement rules for applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=l7Ydg_ZGZw0&t"},"Federated K8s compute pools with YuniKorn"))),(0,o.kt)("p",null,"If you are a YuniKorn evangelist, and you have public conference talks, demo recording that related to YuniKorn.\nPlease submit a PR to extend this list!"))}m.isMDXComponent=!0}}]);