"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,k=p["".concat(u,".").concat(c)]||p[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={id:"performance_tutorial",title:"Benchmarking Tutorial",keywords:["performance","tutorial"]},o=void 0,i={unversionedId:"performance/performance_tutorial",id:"version-0.12.2/performance/performance_tutorial",title:"Benchmarking Tutorial",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/performance/performance_tutorial.md",sourceDirName:"performance",slug:"/performance/performance_tutorial",permalink:"/docs/0.12.2/performance/performance_tutorial",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"performance_tutorial",title:"Benchmarking Tutorial",keywords:["performance","tutorial"]},sidebar:"version-0.12.2/docs",previous:{title:"Evaluate YuniKorn Performance with Kubemark",permalink:"/docs/0.12.2/performance/evaluate_perf_function_with_kubemark"},next:{title:"Scheduler Metrics",permalink:"/docs/0.12.2/performance/metrics"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Hardware",id:"hardware",level:2},{value:"1. Set /etc/sysctl.conf",id:"1-set-etcsysctlconf",level:3},{value:"2. Set /etc/security/limits.conf",id:"2-set-etcsecuritylimitsconf",level:3},{value:"Deploy workflow",id:"deploy-workflow",level:2},{value:"Setup Kubemark",id:"setup-kubemark",level:2},{value:"1. Build image",id:"1-build-image",level:3},{value:"Clone kubernetes repo, and build kubemark binary file",id:"clone-kubernetes-repo-and-build-kubemark-binary-file",level:5},{value:"Copy kubemark binary file to the image folder and build kubemark docker image",id:"copy-kubemark-binary-file-to-the-image-folder-and-build-kubemark-docker-image",level:5},{value:"2. Install Kubermark",id:"2-install-kubermark",level:3},{value:"Create kubemark namespace",id:"create-kubemark-namespace",level:5},{value:"Create configmap",id:"create-configmap",level:5},{value:"Create secret",id:"create-secret",level:5},{value:"3. Label node",id:"3-label-node",level:3},{value:"4. Deploy Kubemark",id:"4-deploy-kubemark",level:3},{value:"Deploy YuniKorn",id:"deploy-yunikorn",level:2},{value:"Install YuniKorn with helm",id:"install-yunikorn-with-helm",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Install YuniKorn with local release repo",id:"install-yunikorn-with-local-release-repo",level:4},{value:"Setup Prometheus",id:"setup-prometheus",level:2},{value:"1. Download Prometheus release",id:"1-download-prometheus-release",level:3},{value:"2. Configure prometheus.yml",id:"2-configure-prometheusyml",level:3},{value:"3. Launch Prometheus",id:"3-launch-prometheus",level:3},{value:"Run tests",id:"run-tests",level:2},{value:"Collect and Observe YuniKorn metrics",id:"collect-and-observe-yunikorn-metrics",level:2},{value:"Performance Tuning",id:"performance-tuning",level:2},{value:"Kubernetes",id:"kubernetes",level:3},{value:"kubeadm",id:"kubeadm",level:4},{value:"CNI",id:"cni",level:4},{value:"Api-Server",id:"api-server",level:4},{value:"Controller-Manager",id:"controller-manager",level:4},{value:"kubelet",id:"kubelet",level:4},{value:"Summary",id:"summary",level:2}],m={toc:s},p="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(p,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The YuniKorn community continues to optimize the performance of the scheduler, ensuring that YuniKorn satisfies the performance requirements of large-scale batch workloads. Thus, the community has built some useful tools for performance benchmarking that can be reused across releases. This document introduces all these tools and steps to run them."),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"Be aware that performance result is highly variable depending on the underlying  hardware. All results published in the doc can only be used as references. We encourage each individual to run similar tests on their own environments in order to get a result based on your own hardware. This doc is just for demonstration purpose."),(0,r.kt)("p",null,"A list of servers being used in this test are (Huge thanks to ",(0,r.kt)("a",{parentName:"p",href:"http://www.ntcu.edu.tw/newweb/index.htm"},"National Taichung University of Education"),", ",(0,r.kt)("a",{parentName:"p",href:"http://www.ntcu.edu.tw/kclai/"},"Kuan-Chou Lai")," for providing these servers for running tests):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Manchine Type"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory"),(0,r.kt)("th",{parentName:"tr",align:null},"Download/upload(Mbps)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HP"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"36G"),(0,r.kt)("td",{parentName:"tr",align:null},"525.74/509.86")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HP"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"30G"),(0,r.kt)("td",{parentName:"tr",align:null},"564.84/461.82")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HP"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"30G"),(0,r.kt)("td",{parentName:"tr",align:null},"431.06/511.69")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HP"),(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"32G"),(0,r.kt)("td",{parentName:"tr",align:null},"577.31/576.21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"38G"),(0,r.kt)("td",{parentName:"tr",align:null},"432.11/4.15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"36G"),(0,r.kt)("td",{parentName:"tr",align:null},"714.84/4.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"42G"),(0,r.kt)("td",{parentName:"tr",align:null},"458.38/4.13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"42G"),(0,r.kt)("td",{parentName:"tr",align:null},"445.42/4.13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"32G"),(0,r.kt)("td",{parentName:"tr",align:null},"400.59/4.13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IBM blade H22"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"12G"),(0,r.kt)("td",{parentName:"tr",align:null},"499.87/4.13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IBM blade H23"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"32G"),(0,r.kt)("td",{parentName:"tr",align:null},"468.51/4.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WS660T"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"16G"),(0,r.kt)("td",{parentName:"tr",align:null},"87.73/86.30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ASUSPRO D640MB_M640SA"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"8G"),(0,r.kt)("td",{parentName:"tr",align:null},"92.43/93.77")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PRO E500 G6_WS720T"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"8G"),(0,r.kt)("td",{parentName:"tr",align:null},"90/87.18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WS E500 G6_WS720T"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"40G"),(0,r.kt)("td",{parentName:"tr",align:null},"92.61/89.78")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E500 G5"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"8G"),(0,r.kt)("td",{parentName:"tr",align:null},"91.34/85.84")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WS E500 G5_WS690T"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"16G"),(0,r.kt)("td",{parentName:"tr",align:null},"92.2/93.76")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WS E500 G5_WS690T"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"32G"),(0,r.kt)("td",{parentName:"tr",align:null},"91/89.41")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WS E900 G4_SW980T"),(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"512G"),(0,r.kt)("td",{parentName:"tr",align:null},"89.24/87.97")))),(0,r.kt)("p",null,"The following steps are needed for each server, otherwise the large scale testing may fail due to the limited number of users/processes/open-files."),(0,r.kt)("h3",{id:"1-set-etcsysctlconf"},"1. Set /etc/sysctl.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kernel.pid_max=400000\nfs.inotify.max_user_instances=50000\nfs.inotify.max_user_watches=52094\n")),(0,r.kt)("h3",{id:"2-set-etcsecuritylimitsconf"},"2. Set /etc/security/limits.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* soft nproc 4000000\n* hard nproc 4000000\nroot soft nproc 4000000\nroot hard nproc 4000000\n* soft nofile 50000\n* hard nofile 50000\nroot soft nofile 50000\nroot hard nofile 50000\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"deploy-workflow"},"Deploy workflow"),(0,r.kt)("p",null,"Before going into the details, here are the general steps used in our tests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Kubernetes"},"Step 1"),": Properly configure Kubernetes API server and controller manager, then add worker nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Setup-Kubemark"},"Step 2"),": Deploy hollow pods,which will simulate worker nodes, name hollow nodes. After all hollow nodes in ready status, we need to cordon all native nodes, which are physical presence in the cluster, not the simulated nodes, to avoid we allocated test workload pod to native nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Deploy-YuniKorn"},"Step 3"),": Deploy YuniKorn using the Helm chart on the master node, and scale down the Deployment to 0 replica, and ",(0,r.kt)("a",{parentName:"li",href:"#Setup-Prometheus"},"modify the port")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"prometheus.yml")," to match the port of the service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Run-tests"},"Step 4"),": Deploy 50k Nginx pods for testing, and the API server will create them. But since the YuniKorn scheduler Deployment has been scaled down to 0 replica, all Nginx pods will be stuck in pending."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.12.2/user_guide/trouble_shooting#restart-the-scheduler"},"Step 5"),": Scale up The YuniKorn Deployment back to 1 replica, and cordon the master node to avoid YuniKorn allocating Nginx pods there. In this step, YuniKorn will start collecting the metrics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Collect-and-Observe-YuniKorn-metrics"},"Step 6"),": Observe the metrics exposed in Prometheus UI.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setup-kubemark"},"Setup Kubemark"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/tree/master/test/kubemark"},"Kubemark")," is a performance testing tool which allows users to run experiments on simulated clusters. The primary use case is the scalability testing. The basic idea is to run tens or hundreds of fake kubelet nodes on one physical node in order to simulate large scale clusters. In our tests, we leverage Kubemark to simulate up to a 4K-node cluster on less than 20 physical nodes."),(0,r.kt)("h3",{id:"1-build-image"},"1. Build image"),(0,r.kt)("h5",{id:"clone-kubernetes-repo-and-build-kubemark-binary-file"},"Clone kubernetes repo, and build kubemark binary file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/kubernetes/kubernetes.git\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd kubernetes\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'KUBE_BUILD_PLATFORMS=linux/amd64 make kubemark GOFLAGS=-v GOGCFLAGS="-N -l"\n')),(0,r.kt)("h5",{id:"copy-kubemark-binary-file-to-the-image-folder-and-build-kubemark-docker-image"},"Copy kubemark binary file to the image folder and build kubemark docker image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp _output/bin/kubemark cluster/images/kubemark\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"IMAGE_TAG=v1.XX.X make build\n")),(0,r.kt)("p",null,"After this step, you can get the kubemark image which can simulate cluster node. You can upload it to Docker-Hub or just deploy it locally."),(0,r.kt)("h3",{id:"2-install-kubermark"},"2. Install Kubermark"),(0,r.kt)("h5",{id:"create-kubemark-namespace"},"Create kubemark namespace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create ns kubemark\n")),(0,r.kt)("h5",{id:"create-configmap"},"Create configmap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl create configmap node-configmap -n kubemark --from-literal=content.type="test-cluster"\n')),(0,r.kt)("h5",{id:"create-secret"},"Create secret"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create secret generic kubeconfig --type=Opaque --namespace=kubemark --from-file=kubelet.kubeconfig={kubeconfig_file_path} --from-file=kubeproxy.kubeconfig={kubeconfig_file_path}\n")),(0,r.kt)("h3",{id:"3-label-node"},"3. Label node"),(0,r.kt)("p",null,"We need to label all native nodes, otherwise the scheduler might allocate hollow pods to other simulated hollow nodes. We can leverage Node selector in yaml to allocate hollow pods to native nodes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl label node {node name} tag=tagName\n")),(0,r.kt)("h3",{id:"4-deploy-kubemark"},"4. Deploy Kubemark"),(0,r.kt)("p",null,"The hollow-node.yaml is down below, there are some parameters we can configure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: ReplicationController\nmetadata:\n  name: hollow-node\n  namespace: kubemark\nspec:\n  replicas: 2000  # the node number you want to simulate\n  selector:\n      name: hollow-node\n  template:\n    metadata:\n      labels:\n        name: hollow-node\n    spec:\n      nodeSelector:  # leverage label to allocate to native node\n        tag: tagName  \n      initContainers:\n      - name: init-inotify-limit\n        image: docker.io/busybox:latest\n        imagePullPolicy: IfNotPresent\n        command: ['sysctl', '-w', 'fs.inotify.max_user_instances=200'] # set as same as max_user_instance in actual node \n        securityContext:\n          privileged: true\n      volumes:\n      - name: kubeconfig-volume\n        secret:\n          secretName: kubeconfig\n      - name: logs-volume\n        hostPath:\n          path: /var/log\n      containers:\n      - name: hollow-kubelet\n        image: 0yukali0/kubemark:1.20.10 # the kubemark image you build \n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 4194\n        - containerPort: 10250\n        - containerPort: 10255\n        env:\n        - name: NODE_NAME\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.name\n        command:\n        - /kubemark\n        args:\n        - --morph=kubelet\n        - --name=$(NODE_NAME)\n        - --kubeconfig=/kubeconfig/kubelet.kubeconfig\n        - --alsologtostderr\n        - --v=2\n        volumeMounts:\n        - name: kubeconfig-volume\n          mountPath: /kubeconfig\n          readOnly: true\n        - name: logs-volume\n          mountPath: /var/log\n        resources:\n          requests:    # the resource of hollow pod, can modify it.\n            cpu: 20m\n            memory: 50M\n        securityContext:\n          privileged: true\n      - name: hollow-proxy\n        image: 0yukali0/kubemark:1.20.10 # the kubemark image you build \n        imagePullPolicy: IfNotPresent\n        env:\n        - name: NODE_NAME\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.name\n        command:\n        - /kubemark\n        args:\n        - --morph=proxy\n        - --name=$(NODE_NAME)\n        - --use-real-proxier=false\n        - --kubeconfig=/kubeconfig/kubeproxy.kubeconfig\n        - --alsologtostderr\n        - --v=2\n        volumeMounts:\n        - name: kubeconfig-volume\n          mountPath: /kubeconfig\n          readOnly: true\n        - name: logs-volume\n          mountPath: /var/log\n        resources:  # the resource of hollow pod, can modify it.\n          requests:\n            cpu: 20m\n            memory: 50M\n      tolerations:\n      - effect: NoExecute\n        key: node.kubernetes.io/unreachable\n        operator: Exists\n      - effect: NoExecute\n        key: node.kubernetes.io/not-ready\n        operator: Exists\n")),(0,r.kt)("p",null,"once done editing, apply it to the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f hollow-node.yaml\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"deploy-yunikorn"},"Deploy YuniKorn"),(0,r.kt)("h4",{id:"install-yunikorn-with-helm"},"Install YuniKorn with helm"),(0,r.kt)("p",null,"We can install YuniKorn with Helm, please refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/docs/#install"},"doc"),".\nWe need to tune some parameters based on the default configuration. We recommend to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release"},"release repo")," and modify the parameters in ",(0,r.kt)("inlineCode",{parentName:"p"},"value.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/incubator-yunikorn-release.git\ncd helm-charts/yunikorn\n")),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The modifications in the ",(0,r.kt)("inlineCode",{parentName:"p"},"value.yaml")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"increased memory/cpu resources for the scheduler pod"),(0,r.kt)("li",{parentName:"ul"},"disabled the admission controller"),(0,r.kt)("li",{parentName:"ul"},"set the app sorting policy to FAIR")),(0,r.kt)("p",null,"please see the changes below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"resources:\n  requests:\n    cpu: 14\n    memory: 16Gi\n  limits:\n    cpu: 14\n    memory: 16Gi\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"embedAdmissionController: false\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"configuration: |\n  partitions:\n    -\n      name: default\n      queues:\n        - name: root\n          submitacl: '*'\n          queues:\n            -\n              name: sandbox\n              properties:\n                application.sort.policy: fair\n")),(0,r.kt)("h4",{id:"install-yunikorn-with-local-release-repo"},"Install YuniKorn with local release repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Helm install yunikorn . --namespace yunikorn\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setup-prometheus"},"Setup Prometheus"),(0,r.kt)("p",null,"YuniKorn exposes its scheduling metrics via Prometheus. Thus, we need to set up a Prometheus server to collect these metrics."),(0,r.kt)("h3",{id:"1-download-prometheus-release"},"1. Download Prometheus release"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://github.com/prometheus/prometheus/releases/download/v2.30.3/prometheus-2.30.3.linux-amd64.tar.gz\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar xvfz prometheus-*.tar.gz\ncd prometheus-*\n")),(0,r.kt)("h3",{id:"2-configure-prometheusyml"},"2. Configure prometheus.yml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['docker.for.mac.host.internal:9080'] \n    # 9080 is internal port, need port forward or modify 9080 to service's port\n")),(0,r.kt)("h3",{id:"3-launch-prometheus"},"3. Launch Prometheus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./prometheus --config.file=prometheus.yml\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"run-tests"},"Run tests"),(0,r.kt)("p",null,"Once the environment is setup, you are good to run workloads and collect results. YuniKorn community has some useful tools to run workloads and collect metrics, more details will be published here."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"collect-and-observe-yunikorn-metrics"},"Collect and Observe YuniKorn metrics"),(0,r.kt)("p",null,"After Prometheus is launched, YuniKorn metrics can be easily collected. Here is the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.12.2/performance/metrics"},"docs")," of YuniKorn metrics. YuniKorn tracks some key scheduling metrics which measure the latency of some critical scheduling paths. These metrics include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scheduling_latency_seconds:")," Latency of the main scheduling routine, in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"app_sorting_latency_seconds"),": Latency of all applications sorting, in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"node_sorting_latency_seconds"),": Latency of all nodes sorting, in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"queue_sorting_latency_seconds"),": Latency of all queues sorting, in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"container_allocation_attempt_total"),": Total number of attempts to allocate containers. State of the attempt includes ",(0,r.kt)("inlineCode",{parentName:"li"},"allocated"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rejected"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"released"),". Increase only.")),(0,r.kt)("p",null,"you can select and generate graph on Prometheus UI easily, such as:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Prometheus Metrics List",src:n(85058).Z,width:"1189",height:"640"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"performance-tuning"},"Performance Tuning"),(0,r.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"The default K8s setup has limited concurrent requests which limits the overall throughput of the cluster. In this section, we introduced a few parameters that need to be tuned up in order to increase the overall throughput of the cluster."),(0,r.kt)("h4",{id:"kubeadm"},"kubeadm"),(0,r.kt)("p",null,"Set pod-network mask"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubeadm init --pod-network-cidr=10.244.0.0/8\n")),(0,r.kt)("h4",{id:"cni"},"CNI"),(0,r.kt)("p",null,"Modify CNI mask and resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  net-conf.json: |\n    {\n      "Network": "10.244.0.0/8",\n      "Backend": {\n        "Type": "vxlan"\n      }\n    }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  resources:\n    requests:\n      cpu: "100m"\n      memory: "200Mi"\n    limits:\n      cpu: "100m"\n      memory: "200Mi"\n')),(0,r.kt)("h4",{id:"api-server"},"Api-Server"),(0,r.kt)("p",null,"In the Kubernetes API server, we need to modify two parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"max-mutating-requests-inflight")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max-requests-inflight"),". Those two parameters represent the API request bandwidth. Because we will generate a large amount of pod request, we need to increase those two parameters. Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifest/kube-apiserver.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--max-mutating-requests-inflight=3000\n--max-requests-inflight=3000\n")),(0,r.kt)("h4",{id:"controller-manager"},"Controller-Manager"),(0,r.kt)("p",null,"In the Kubernetes controller manager, we need to increase the value of three parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-api-burst")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-api-qps"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-api-burst")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-api-qps")," control the server side request bandwidth. ",(0,r.kt)("inlineCode",{parentName:"p"},"node-cidr-mask-size")," represents the node CIDR. it needs to be increased as well in order to scale up to thousands of nodes. "),(0,r.kt)("p",null,"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/manifest/kube-controller-manager.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--node-cidr-mask-size=21 //log2(max number of pods in cluster)\n--kube-api-burst=3000\n--kube-api-qps=3000\n")),(0,r.kt)("h4",{id:"kubelet"},"kubelet"),(0,r.kt)("p",null,"In single worker node, we can run 110 pods as default. But to get higher node resource utilization, we need to add some parameters in Kubelet launch command, and restart it."),(0,r.kt)("p",null,"Modify start arg in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/kubelet.service.d/10-kubeadm.conf"),", add ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-Pods=300")," behind the start arg and restart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl daemon-reload\nsystemctl restart kubelet\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"With Kubemark and Prometheus, we can easily run benchmark testing, collect YuniKorn metrics and analyze the performance. This helps us to identify the performance bottleneck in the scheduler and further eliminate them. The YuniKorn community will continue to improve these tools in the future, and continue to gain more performance improvements."))}d.isMDXComponent=!0},85058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/prometheus-3765d2ddd0d81ce31bc9c0d44046aac6.png"}}]);