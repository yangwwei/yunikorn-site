"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5931],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"developer_guide",title:"Developer Guide"},u=void 0,s={unversionedId:"get_started/developer_guide",id:"version-0.8.0/get_started/developer_guide",title:"Developer Guide",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/get_started/developer_guide.md",sourceDirName:"get_started",slug:"/get_started/developer_guide",permalink:"/docs/0.8.0/get_started/developer_guide",draft:!1,tags:[],version:"0.8.0",frontMatter:{id:"developer_guide",title:"Developer Guide"},sidebar:"version-0.8.0/docs",previous:{title:"User Guide",permalink:"/docs/0.8.0/"},next:{title:"Build Local",permalink:"/docs/0.8.0/setup/build_local"}},d={},c=[{value:"Development Environment setup",id:"development-environment-setup",level:2},{value:"Build YuniKorn for Kubernetes",id:"build-yunikorn-for-kubernetes",level:2},{value:"Build Docker image",id:"build-docker-image",level:3},{value:"Inspect the docker image",id:"inspect-the-docker-image",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Build the web UI",id:"build-the-web-ui",level:2},{value:"Locally run the integrated scheduler",id:"locally-run-the-integrated-scheduler",level:2},{value:"Core component build",id:"core-component-build",level:2},{value:"Build steps",id:"build-steps",level:3}],p={toc:c};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"YuniKorn always works with a container orchestrator system. Currently, a Kubernetes shim ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"yunikorn-k8shim"),"\nis provided in our repositories, you can leverage it to develop YuniKorn scheduling features and integrate with Kubernetes.\nThis document describes resources how to setup dev environment and how to do the development."),(0,i.kt)("h2",{id:"development-environment-setup"},"Development Environment setup"),(0,i.kt)("p",null,"Read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.8.0/setup/env_setup"},"environment setup guide")," first to setup Docker and Kubernetes development environment."),(0,i.kt)("h2",{id:"build-yunikorn-for-kubernetes"},"Build YuniKorn for Kubernetes"),(0,i.kt)("p",null,"Prerequisite:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go 1.11+")),(0,i.kt)("p",null,"You can build the scheduler for Kubernetes from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"yunikorn-k8shim")," project.\nThe build procedure will built all components into a single executable that can be deployed and running on Kubernetes."),(0,i.kt)("p",null,"Start the integrated build process by pulling the ",(0,i.kt)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/yunikorn/\ncd $HOME/yunikorn/\ngit clone https://github.com/apache/incubator-yunikorn-k8shim.git\n")),(0,i.kt)("p",null,"At this point you have an environment that will allow you to build an integrated image for the YuniKorn scheduler."),(0,i.kt)("h3",{id:"build-docker-image"},"Build Docker image"),(0,i.kt)("p",null,"Building a docker image can be triggered by following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make image\n")),(0,i.kt)("p",null,"The image with the build in configuration can be deployed directly on kubernetes.\nSome sample deployments that can be used are found under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/scheduler"},"deployments")," directory.\nFor the deployment that uses a config map you need to set up the ConfigMap in kubernetes.\nHow to deploy the scheduler with a ConfigMap is explained in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.8.0/setup/configure_scheduler"},"scheduler configuration deployment")," document."),(0,i.kt)("p",null,"The image build command will first build the integrated executable and then create the docker image.\nCurrently, there are some published docker images under ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/yunikorn"},"this docker hub repo"),", you are free to fetch and use.\nBut keep in mind, YuniKorn has no official release yet, the latest version image can only be used for testing or evaluating, do not use it in production.\nThe default image tags are not be suitable for deployments to an accessible repository as it uses a hardcoded user and would push to Docker Hub with proper credentials.\nYou ",(0,i.kt)("em",{parentName:"p"},"must")," update the ",(0,i.kt)("inlineCode",{parentName:"p"},"TAG")," variable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")," to push to an accessible repository.\nWhen you update the image tag be aware that the deployment examples given will also need to be updated to reflect the same change."),(0,i.kt)("h3",{id:"inspect-the-docker-image"},"Inspect the docker image"),(0,i.kt)("p",null,"The docker image built from previous step has embedded some important build info in image's metadata. You can retrieve\nthese info with docker ",(0,i.kt)("inlineCode",{parentName:"p"},"inspect")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker inspect apache/yunikorn:scheduler-latest\n")),(0,i.kt)("p",null,"these info includes git revisions (last commit SHA) for each component, to help you understand which version of the source code\nwas shipped by this image. They are listed as docker image ",(0,i.kt)("inlineCode",{parentName:"p"},"labels"),", such as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"Labels": {\n    "BuildTimeStamp": "2019-07-16T23:08:06+0800",\n    "Version": "0.1",\n    "yunikorn-core-revision": "dca66c7e5a9e",\n    "yunikorn-k8shim-revision": "bed60f720b28",\n    "yunikorn-scheduler-interface-revision": "3df392eded1f"\n}\n')),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"The dependencies in the projects are managed using ",(0,i.kt)("a",{parentName:"p",href:"https://blog.golang.org/using-go-modules"},"go modules"),".\nGo Modules require at least Go version 1.11 to be installed on the development system."),(0,i.kt)("p",null,"If you want to modify one of the projects locally and build with your local dependencies you will need to change the module file.\nChanging dependencies uses mod ",(0,i.kt)("inlineCode",{parentName:"p"},"replace")," directives as explained in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.8.0/setup/build_local"},"local build document"),"."),(0,i.kt)("h2",{id:"build-the-web-ui"},"Build the web UI"),(0,i.kt)("p",null,"Example deployments reference the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-web"},"YuniKorn web UI"),".\nThe YuniKorn web UI has its own specific requirements for the build. The project has specific requirements for the build follow the steps in the README to prepare a development environment and build how to build the projects.\nThe scheduler is fully functional without the web UI. "),(0,i.kt)("h2",{id:"locally-run-the-integrated-scheduler"},"Locally run the integrated scheduler"),(0,i.kt)("p",null,"When you have a local development environment setup you can run the scheduler in your local kubernetes environment.\nThis has been tested in a Docker desktop with docker for desktop and Minikube. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.8.0/setup/env_setup"},"environment setup guide")," for further details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make run\n")),(0,i.kt)("p",null,"It will connect with the kubernetes cluster using the users configured configuration located in ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),(0,i.kt)("p",null,"You can also use the same approach to run the scheduler locally but connecting to a remote kubernetes cluster,\nas long as the ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," file is pointing to that remote cluster."),(0,i.kt)("h2",{id:"core-component-build"},"Core component build"),(0,i.kt)("p",null,"The scheduler core, this repository build, by itself does not provide a functional scheduler.\nIt just builds the core scheduler functionality without any resource managers or shims.\nA functional scheduler must have at least one resource manager that registers."),(0,i.kt)("h3",{id:"build-steps"},"Build steps"),(0,i.kt)("p",null,"The core component contains two command line tools: the ",(0,i.kt)("inlineCode",{parentName:"p"},"simplescheduler")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"schedulerclient"),".\nThe two command line tools have been provided as examples only and are not supposed to implement all functionality."),(0,i.kt)("p",null,"Building the example command line tools:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make commands\n")),(0,i.kt)("p",null,"Run all unit tests for the core component: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make test\n")),(0,i.kt)("p",null,"Any changes made to the core code should not cause any existing tests to fail."),(0,i.kt)("p",null,"Running the lint tool over the current code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make lint\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.8.0/community/coding_guidelines"},"coding guidelines documentation")," for more details. "),(0,i.kt)("p",null,"As a utility target you can check that all files that must have a license have the correct license by running: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make common-check-license\n")))}h.isMDXComponent=!0}}]);