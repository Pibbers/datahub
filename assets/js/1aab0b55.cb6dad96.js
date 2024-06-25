"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[66028,49804,27423,5042,82661,39328,16947,94566,72185,70756,48375,6237,28618,50999,73380,95761,18142,40523,62904,85285,7666,35238,12857,8e4,57619,45714,23333,90476,68095,56190,33809,99631,22012,54869,77250,89155,11536,44393,66774,20583,42964,90608,68227,45846,23465,1084,78703,56322,33941,89179,3417,25798,48179,70560,13893,36274,58655,81036,24369,46750,16226,93845,60988,38607,5750,83369,50512,28131,37178,14797,29035,51416,84273,6654,39511,61892,94749,17130,8083,30464,31452,9071,86690,64309,20976,98595,76214,53833,52404,30023,44261,66642,89023,11404,33785,56166,78547,928,65213,87594,22455,44836,77693,74,11979,34360,67217,89598,1503,23884,9646,87265,54408,32027,20122,97741,64884,42503,88694,66313,96837,19218,41599,63980,86361,8742,31123,53504,17789,40170,84028,61647,39266,16885,73552],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:n,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5400:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(96540),n=r(20053);const o={tabItem:"tabItem_Ymn6"};function i({children:e,hidden:t,className:r}){return a.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,r),hidden:t},e)}},53720:(e,t,r)=>{r.d(t,{A:()=>T});var a=r(96540),n=r(20053),o=r(65697),i=r(56347),u=r(9226),l=r(34387),s=r(28609);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function d(e){return function(e){var t,r;return null!==(r=null===(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}(e).map((({props:{value:e,label:t,attributes:r,default:a}})=>({value:e,label:t,attributes:r,default:a})))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:d(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function y({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const r=(0,i.W6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),o=(0,u.aZ)(n),l=(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace(p(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){c(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[n,r]);return[o,l]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[i,u]=(0,a.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!y({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const a=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=f({queryString:r,groupId:n}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,s.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),b=(()=>{const e=null!=l?l:p;return y({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),d(e)}),[c,d,o]),tabValues:o}}var g=r(20162);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){v(e,t,r[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function j({className:e,block:t,selectedValue:r,selectValue:i,tabValues:u}){const l=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=u[a].value;n!==r&&(s(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;var r;t=null!==(r=l[a])&&void 0!==r?r:l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;var a;t=null!==(a=l[r])&&void 0!==a?a:l[l.length-1];break}}null==t||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},e)},u.map((({value:e,label:t,attributes:o})=>a.createElement("li",w(O({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>l.push(e),onKeyDown:p,onClick:c},o),{className:(0,n.A)("tabs__item",h.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function D({lazy:e,children:t,selectedValue:r}){const n=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function P(e){const t=b(e);return a.createElement("div",{className:(0,n.A)("tabs-container",h.tabList)},a.createElement(j,O({},e,t)),a.createElement(D,O({},e,t)))}function T(e){const t=(0,g.A)();return a.createElement(P,O({key:String(t)},e))}},64038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>m});r(96540);var a=r(15680),n=r(53720),o=r(5400);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={title:"Deprecation",slug:"/api/tutorials/deprecation",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/deprecation.md"},c="Deprecation",p={unversionedId:"docs/api/tutorials/deprecation",id:"version-0.13.1/docs/api/tutorials/deprecation",title:"Deprecation",description:"Why Would You Deprecate Datasets?",source:"@site/versioned_docs/version-0.13.1/docs/api/tutorials/deprecation.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/deprecation",permalink:"/docs/0.13.1/api/tutorials/deprecation",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/deprecation.md",tags:[],version:"0.13.1",frontMatter:{title:"Deprecation",slug:"/api/tutorials/deprecation",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/deprecation.md"},sidebar:"overviewSidebar",previous:{title:"Domains",permalink:"/docs/0.13.1/api/tutorials/domains"},next:{title:"Description",permalink:"/docs/0.13.1/api/tutorials/descriptions"}},d={},m=[{value:"Why Would You Deprecate Datasets?",id:"why-would-you-deprecate-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Read Deprecation",id:"read-deprecation",level:2},{value:"Update Deprecation",id:"update-deprecation",level:2},{value:"Expected Outcomes of Updating Deprecation",id:"expected-outcomes-of-updating-deprecation",level:3}],y={toc:m},f="wrapper";function b(e){var{components:t}=e,r=l(e,["components"]);return(0,a.yg)(f,u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){i(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"deprecation"},"Deprecation"),(0,a.yg)("h2",{id:"why-would-you-deprecate-datasets"},"Why Would You Deprecate Datasets?"),(0,a.yg)("p",null,"The Deprecation feature on DataHub indicates the status of an entity. For datasets, keeping the deprecation status up-to-date is important to inform users and downstream systems of changes to the dataset's availability or reliability. By updating the status, you can communicate changes proactively, prevent issues and ensure users are always using highly trusted data assets."),(0,a.yg)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,a.yg)("p",null,"This guide will show you how to read or update deprecation status of a dataset."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.13.1/quickstart"},"Datahub Quickstart Guide"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Before updating deprecation, you need to ensure the targeted dataset is already present in your datahub.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from a sample ingestion.")),(0,a.yg)("h2",{id:"read-deprecation"},"Read Deprecation"),(0,a.yg)(n.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)") {\n    deprecation {\n      deprecated\n      decommissionTime\n    }\n  }\n}\n')),(0,a.yg)("p",null,"If you see the following response, the operation was successful:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "dataset": {\n      "deprecation": {\n        "deprecated": false,\n        "decommissionTime": null\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,a.yg)(o.A,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{ dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") { deprecation { deprecated decommissionTime } } }\", \"variables\":{} }'\n")),(0,a.yg)("p",null,"Expected Response:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n      "deprecation": { "deprecated": false, "decommissionTime": null }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,a.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_deprecation.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import DeprecationClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["deprecation"],\n    aspect_types=[DeprecationClass],\n)\n\nprint(result)\n\n')))),(0,a.yg)("h2",{id:"update-deprecation"},"Update Deprecation"),(0,a.yg)(n.A,{mdxType:"Tabs"},(0,a.yg)(o.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'mutation updateDeprecation {\n    updateDeprecation(input: { urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)", deprecated: true })\n}\n')),(0,a.yg)("p",null,"Also note that you can update deprecation status of multiple entities or subresource using ",(0,a.yg)("inlineCode",{parentName:"p"},"batchUpdateDeprecation"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'mutation batchUpdateDeprecation {\n    batchUpdateDeprecation(\n      input: {\n        deprecated: true,\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n\n')),(0,a.yg)("p",null,"If you see the following response, the operation was successful:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "updateDeprecation": true\n  },\n  "extensions": {}\n}\n'))),(0,a.yg)(o.A,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"mutation updateDeprecation { updateDeprecation(input: { deprecated: true, urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\" }) }\", \"variables\":{}}'\n")),(0,a.yg)("p",null,"Expected Response:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{ "data": { "removeTag": true }, "extensions": {} }\n'))),(0,a.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"})),(0,a.yg)("h3",{id:"expected-outcomes-of-updating-deprecation"},"Expected Outcomes of Updating Deprecation"),(0,a.yg)("p",null,"You can now see the dataset ",(0,a.yg)("inlineCode",{parentName:"p"},"fct_users_created")," has been marked as ",(0,a.yg)("inlineCode",{parentName:"p"},"Deprecated.")),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/deprecation-updated.png"})))}b.isMDXComponent=!0}}]);