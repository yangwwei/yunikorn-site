"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"acls",title:"ACLs"},i=void 0,o={unversionedId:"user_guide/acls",id:"version-1.0.0/user_guide/acls",title:"ACLs",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/user_guide/acls.md",sourceDirName:"user_guide",slug:"/user_guide/acls",permalink:"/zh-cn/docs/1.0.0/user_guide/acls",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"acls",title:"ACLs"},sidebar:"docs",previous:{title:"Sorting Policies",permalink:"/zh-cn/docs/1.0.0/user_guide/sorting_policies"},next:{title:"Resource Quota Management",permalink:"/zh-cn/docs/1.0.0/user_guide/resource_quota_management"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example config",id:"example-config",level:2},{value:"Simple examples",id:"simple-examples",level:3},{value:"Escaping and quotation marks",id:"escaping-and-quotation-marks",level:3},{value:"Access check",id:"access-check",level:2},{value:"User and Group information",id:"user-and-group-information",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"User information is passed to the core scheduler from the kubernetes shim using the methodology defined ",(0,r.kt)("a",{parentName:"p",href:"usergroup_resolution"},"here"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Access Control Lists are generic for YuniKorn.\nThey can be used in multiple places in YuniKorn.\nThe current use case is limited to queue ACLs."),(0,r.kt)("p",null,"Access control lists give access to the users and groups that have been specified in the list.\nThey do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."),(0,r.kt)("p",null,"If there is no access control list is configured access is ",(0,r.kt)("em",{parentName:"p"},"denied")," by default."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"The access control list is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n")),(0,r.kt)("p",null,"This definition specifies a wildcard of * which results in access for everyone."),(0,r.kt)("p",null,"If the user list is empty and the group list is empty nobody will have access.\nThis deny all ACL has two possible representations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an empty access control list. (implicit)"),(0,r.kt)("li",{parentName:"ul"},"a single space. (explicit)")),(0,r.kt)("h2",{id:"example-config"},"Example config"),(0,r.kt)("h3",{id:"simple-examples"},"Simple examples"),(0,r.kt)("p",null,"An ACL that allows access to just the user ",(0,r.kt)("inlineCode",{parentName:"p"},"sue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue\n")),(0,r.kt)("p",null,"Nobody else will get access, this is just for ",(0,r.kt)("inlineCode",{parentName:"p"},"sue"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"john")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," will be denied access."),(0,r.kt)("p",null,"An ACL that allows access to the user ",(0,r.kt)("inlineCode",{parentName:"p"},"sue")," and the members of the group ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue dev\n")),(0,r.kt)("p",null,"The user ",(0,r.kt)("inlineCode",{parentName:"p"},"sue")," gets access based on her explicit mention in the user part of the ACL.\nEven though she is not a member of the group ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),". Her group membership is irrelevant."),(0,r.kt)("p",null,"The user named ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\nA third user called ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," whom is not mentioned explicitly and is not a member of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," group will be denied access."),(0,r.kt)("p",null,"An ACL that allows access to the members of the groups ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'  adminacl: " dev,test"\n')),(0,r.kt)("p",null,"The ACL must start with a space to indicate that there is no user list.\nIf the ACL is not correctly quoted the space is dropped by the yaml parser.\nSince the user list is empty none of the users will get access unless they are a member of either the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," group."),(0,r.kt)("p",null,"Looking at the same three users as before:\nThe user ",(0,r.kt)("inlineCode",{parentName:"p"},"sue")," is not a member of either group and is denied access.\nThe user named ",(0,r.kt)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\n",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," is not a member of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," group but is a member of ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," and will be allowed access."),(0,r.kt)("h3",{id:"escaping-and-quotation-marks"},"Escaping and quotation marks"),(0,r.kt)("p",null,"ACLs are currently implemented in the queue configuration which uses a yaml file.\nThis places some limitations on the how to escape the values.\nIncorrectly quoted values will cause a yaml parse error or could lead to the incorrect interpretation of the value."),(0,r.kt)("p",null,"The following points need to be taken into account:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The wildcard entry must be quoted in the yaml config."),(0,r.kt)("li",{parentName:"ol"},"A simple list of users with or without it being followed by a list of groups does not need quoting but may be quoted."),(0,r.kt)("li",{parentName:"ol"},"An ACL without a user list and just one or more groups must be quoted to find the starting space:")),(0,r.kt)("p",null,"Correctly quoted ACL example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n      - name: test\n        submitacl: "*"\n        adminacl: sue dev,test\n      - name: product\n        submitacl: " product"\n')),(0,r.kt)("h2",{id:"access-check"},"Access check"),(0,r.kt)("p",null,"The access check follows the pattern:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"check if the ACL is the wildcard"),(0,r.kt)("li",{parentName:"ul"},"check if the user is in the user list"),(0,r.kt)("li",{parentName:"ul"},"check if any of the groups the user is a member of is part of the group list")),(0,r.kt)("p",null,"If a check matches the ACL allows access and checking is stopped.\nIf none of the checks match the ACL denies access."),(0,r.kt)("h2",{id:"user-and-group-information"},"User and Group information"),(0,r.kt)("p",null,"For User & Group resolution, please follow instructions defined ",(0,r.kt)("a",{parentName:"p",href:"usergroup_resolution"},"here")))}d.isMDXComponent=!0}}]);