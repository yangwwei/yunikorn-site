"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2868],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45002:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"user_guide",title:"User Guide",slug:"/"},s=void 0,p={unversionedId:"get_started/user_guide",id:"version-0.8.0/get_started/user_guide",title:"User Guide",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/get_started/user_guide.md",sourceDirName:"get_started",slug:"/",permalink:"/zh-cn/docs/0.8.0/",tags:[],version:"0.8.0",frontMatter:{id:"user_guide",title:"User Guide",slug:"/"},sidebar:"version-0.8.0/docs",next:{title:"Developer Guide",permalink:"/zh-cn/docs/0.8.0/get_started/developer_guide"}},u={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Run workloads with YuniKorn Scheduler",id:"run-workloads-with-yunikorn-scheduler",level:2},{value:"Running simple sample applications",id:"running-simple-sample-applications",level:3},{value:"Running a spark application",id:"running-a-spark-application",level:3},{value:"Running a simple Tensorflow job",id:"running-a-simple-tensorflow-job",level:3},{value:"Affinity scheduling",id:"affinity-scheduling",level:3},{value:"Volume examples",id:"volume-examples",level:3},{value:"Local volume",id:"local-volume",level:4},{value:"NFS volume",id:"nfs-volume",level:4},{value:"EBS volume",id:"ebs-volume",level:4}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Before reading this guide, we assume you either have a Kubernetes cluster, or a local Kubernetes dev environment, e.g Minikube.\nIt is also assumed that ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," is on your path and properly configured.\nFollow this ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.8.0/setup/env_setup"},"guide")," on how to setup a local Kubernetes cluster using docker-desktop."),(0,l.kt)("p",null,"All files mentioned in this user guide are part of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"yunikorn-k8shim")," repository.\nThey are located in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/scheduler"},"deployments")," sub directory. The command given assume that you are located in that directory."),(0,l.kt)("h2",{id:"quick-start"},"Quick Start"),(0,l.kt)("p",null,"The easiest way to get started is to use our Helm Charts to deploy YuniKorn on an existing Kubernetes cluster. Recommended to use Helm 3 or later versions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add yunikorn https://apache.github.io/incubator-yunikorn-release\nhelm repo update\nhelm install yunikorn yunikorn/yunikorn --version 0.8.0\n")),(0,l.kt)("p",null,"it will firstly create a ",(0,l.kt)("inlineCode",{parentName:"p"},"configmap")," where stores YuniKorn configuration, and then deploy YuniKorn scheduler\nand web UI containers in a pod as a ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," namespace. If you want to deploy YuniKorn to another namespace, you can do following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl create namespace yunikorn\nhelm install yunikorn yunikorn/yunikorn --namespace yunikorn --version 0.8.0\n")),(0,l.kt)("p",null,"Uninstall yunikorn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall yunikorn --namespace yunikorn\n")),(0,l.kt)("p",null,"If you don't want to use helm charts, you can find our step-by-step\ntutorial ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.8.0/setup/deployment"},"here"),"."),(0,l.kt)("h2",{id:"run-workloads-with-yunikorn-scheduler"},"Run workloads with YuniKorn Scheduler"),(0,l.kt)("p",null,"Unlike default Kubernetes scheduler, YuniKorn has ",(0,l.kt)("inlineCode",{parentName:"p"},"application")," notion in order to support batch workloads better.\nThere are a few ways to run batch workloads with YuniKorn scheduler"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add labels ",(0,l.kt)("inlineCode",{parentName:"li"},"applicationId")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"queue")," in pod's spec."),(0,l.kt)("li",{parentName:"ul"},"Pods that have the same applicationId will be considered as tasks from 1 application.")),(0,l.kt)("p",null,"Here is an example of the entry to add:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  labels:\n    applicationId: "MyOwnApplicationId"\n    queue: "root.sandbox"\n')),(0,l.kt)("p",null,"All examples provided in the next section have the labels already set. The ",(0,l.kt)("inlineCode",{parentName:"p"},"queue")," name must be a known queue name from the configuration.\nUnknown queue names will cause the pod to be rejected by the YuniKorn scheduler.  "),(0,l.kt)("h3",{id:"running-simple-sample-applications"},"Running simple sample applications"),(0,l.kt)("p",null,"All sample deployments can be found under ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," directory.\nThe list of all examples is in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/examples"},"README"),".\nNot all examples are given here. Further details can be found in that README."),(0,l.kt)("p",null,"A single pod based on a standard nginx image: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f examples/nginx/nginx.yaml\n")),(0,l.kt)("p",null,"A simple sleep job example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f examples/sleep/sleeppods.yaml\n")),(0,l.kt)("p",null,"The files for these examples can be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#nginx"},"README nginx")," and the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#sleep"},"README sleep")," sections."),(0,l.kt)("h3",{id:"running-a-spark-application"},"Running a spark application"),(0,l.kt)("p",null,"Kubernetes support for Apache Spark is not part of all releases. You must have a current release of Apache Spark with Kubernetes support built in. "),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"examples/spark")," directory contains pod template files for the Apache Spark driver and executor, they can be used if you want to run Spark on K8s using this scheduler."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get latest spark from github (only latest code supports to specify pod template), URL: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/spark"},"https://github.com/apache/spark")),(0,l.kt)("li",{parentName:"ul"},"Build spark with Kubernetes support:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mvn -Pyarn -Phadoop-2.7 -Dhadoop.version=2.7.4 -Phive -Pkubernetes -Phive-thriftserver -DskipTests package\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run spark submit")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"spark-submit --master k8s://http://localhost:8001 --deploy-mode cluster --name spark-pi \\\n  --class org.apache.spark.examples.SparkPi \\\n  --conf spark.executor.instances=1 \\\n  --conf spark.kubernetes.container.image=yunikorn/spark:latest \\\n  --conf spark.kubernetes.driver.podTemplateFile=examples/spark/driver.yaml \\\n  --conf spark.kubernetes.executor.podTemplateFile=examples/spark/executor.yaml \\\n  local:///opt/spark/examples/jars/spark-examples_2.12-3.0.0-SNAPSHOT.jar\n")),(0,l.kt)("p",null,"Spark uses its own version of the application ID tag called ",(0,l.kt)("em",{parentName:"p"},"spark-app-id"),". This tags is required for the pods to be recognised as specific spark pods.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"examples/spark/driver.yaml"),(0,l.kt)("li",{parentName:"ul"},"examples/spark/executor.yaml\nWhen you run Spark on Kubernetes with pod templates, ",(0,l.kt)("em",{parentName:"li"},"spark-app-id")," is considered the applicationId.\nA script to run the spark application and the yaml files are in the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#spark"},"README spark")," section.")),(0,l.kt)("h3",{id:"running-a-simple-tensorflow-job"},"Running a simple Tensorflow job"),(0,l.kt)("p",null,"There is an example for Tensorflow job. You must install tf-operator first.\nYou can install tf-operator by applying all yaml from two website down below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CRD: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base"},"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base")),(0,l.kt)("li",{parentName:"ul"},"Deployment: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"},"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"),"\nAlso you can install kubeflow which can auto install tf-operator for you, URL: ",(0,l.kt)("a",{parentName:"li",href:"https://www.kubeflow.org/docs/started/getting-started/"},"https://www.kubeflow.org/docs/started/getting-started/"))),(0,l.kt)("p",null,"A simple Tensorflow job example:"),(0,l.kt)("p",null,"You need to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/tf-operator/tree/master/examples/v1/dist-mnist"},"build the image")," which used in example yaml."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f examples/tfjob/tf-job-mnist.yaml\n")),(0,l.kt)("p",null,"The file for this example can be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#Tensorflow-job"},"README Tensorflow job")," section."),(0,l.kt)("h3",{id:"affinity-scheduling"},"Affinity scheduling"),(0,l.kt)("p",null,"The scheduler supports affinity and ati affinity scheduling on kubernetes using predicates:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f examples/predicates/pod-anti-affinity-example.yaml\n")),(0,l.kt)("p",null,"This deployment ensures 2 pods cannot be co-located together on same node.\nIf this yaml is deployed on 1 node cluster, expect 1 pod to be started and the other pod should stay in a pending state.\nMore examples on affinity and anti affinity scheduling in the predicates section of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#predicates"},"README predicates")),(0,l.kt)("h3",{id:"volume-examples"},"Volume examples"),(0,l.kt)("p",null,"There are three examples with volumes available. The NFS example does not work on docker desktop and requires ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"Minikube"),".\nThe EBS volume requires a kubernetes cluster running on AWS (EKS).\nFurther instructions for the volume examples in the section of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#volumes"},"README Volumes"),"."),(0,l.kt)("p",null,"CAUTION: All examples will generate an unending stream of data in a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"dates.txt")," on the mounted volume. This could cause a disk to fill up and execution time should be limited. "),(0,l.kt)("h4",{id:"local-volume"},"Local volume"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create the local volume and volume claim")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f examples/volume/local-pv.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create the pod that uses the volume")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f examples/volume/pod-local.yaml\n")),(0,l.kt)("h4",{id:"nfs-volume"},"NFS volume"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create the NFS server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f nfs-server.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"get the IP address for the NFS server and update the pod yaml by replacing the existing example IP with the one returned:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get services | grep nfs-server | awk '{print $3}'\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create the pod that uses the volume")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f pod-nfs.yaml\n")),(0,l.kt)("h4",{id:"ebs-volume"},"EBS volume"),(0,l.kt)("p",null,"The Volume for the first two examples must be created before you can run the examples. The ",(0,l.kt)("inlineCode",{parentName:"p"},"VolumeId")," must be updated in the yaml files to get this to work.\nTo create a volume you can use the command line or web UI:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"aws ec2 create-volume --volume-type gp2 --size 10 --availability-zone us-west-1\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"VolumeId")," is part of the returned information of the create command."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create the pod that uses a direct volume reference:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f pod-ebs-direct.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create the persistent volume (pv) and a pod that uses a persistent volume claim (pvc) to claim the existing volume:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f ebs-pv.yaml\nkubectl create -f pod-ebs-exist.yaml\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create a storage class to allow dynamic provisioning and create the pod that uses this mechanism:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create -f storage-class.yaml\nkubectl create -f pod-ebs-dynamic.yaml\n")),(0,l.kt)("p",null,"Dynamic provisioning has a number of pre-requisites for it to work, see ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/"},"Dynamic Volume Provisioning")," in the kubernetes docs.\nThe dynamically created volume will be automatically destroyed as soon as the pod is stopped."))}d.isMDXComponent=!0}}]);