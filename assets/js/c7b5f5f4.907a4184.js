"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[52663,49804,27423,5042,82661,39328,16947,94566,72185,70756,48375,6237,28618,50999,73380,95761,18142,40523,62904,85285,7666,35238,12857,8e4,57619,45714,23333,90476,68095,56190,33809,99631,22012,54869,77250,89155,11536,44393,66774,20583,42964,90608,68227,45846,23465,1084,78703,56322,33941,89179,3417,25798,48179,70560,13893,36274,58655,81036,24369,46750,16226,93845,60988,38607,5750,83369,50512,28131,37178,14797,29035,51416,84273,6654,39511,61892,94749,17130,8083,30464,31452,9071,86690,64309,20976,98595,76214,53833,52404,30023,44261,66642,89023,11404,33785,56166,78547,928,65213,87594,22455,44836,77693,74,11979,34360,67217,89598,1503,23884,9646,87265,54408,32027,20122,97741,64884,42503,88694,66313,96837,19218,41599,63980,86361,8742,31123,53504,17789,40170,84028,61647,39266,16885,73552],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5400:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(96540),a=n(20053);const i={tabItem:"tabItem_Ymn6"};function o({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,n),hidden:t},e)}},53720:(e,t,n)=>{n.d(t,{A:()=>S});var r=n(96540),a=n(20053),i=n(65697),o=n(56347),s=n(9226),l=n(34387),c=n(28609);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:d(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m({value:e,tabValues:t}){return t.some((t=>t.value===e))}function y({queryString:e=!1,groupId:t}){const n=(0,o.W6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),i=(0,s.aZ)(a),l=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[a,n]);return[i,l]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=g(e),[o,s]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=y({queryString:n,groupId:a}),[p,d]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,c.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),f=(()=>{const e=null!=l?l:p;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),d(e)}),[u,d,i]),tabValues:i}}var b=n(20162);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function N({className:e,block:t,selectedValue:n,selectValue:o,tabValues:s}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==n&&(c(t),o(a))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var n;t=null!==(n=l[r])&&void 0!==n?n:l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;var r;t=null!==(r=l[n])&&void 0!==r?r:l[l.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e)},s.map((({value:e,label:t,attributes:i})=>r.createElement("li",O(w({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>l.push(e),onKeyDown:p,onClick:u},i),{className:(0,a.A)("tabs__item",h.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function j({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function P(e){const t=f(e);return r.createElement("div",{className:(0,a.A)("tabs-container",h.tabList)},r.createElement(N,w({},e,t)),r.createElement(j,w({},e,t)))}function S(e){const t=(0,b.A)();return r.createElement(P,w({key:String(t)},e))}},1767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>g});n(96540);var r=n(15680),a=n(53720),i=n(5400);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={sidebar_position:7,title:"CSV Enricher",slug:"/generated/ingestion/sources/csv-enricher",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/csv-enricher.md"},u="CSV Enricher",p={unversionedId:"docs/generated/ingestion/sources/csv-enricher",id:"docs/generated/ingestion/sources/csv-enricher",title:"CSV Enricher",description:"Incubating",source:"@site/genDocs/docs/generated/ingestion/sources/csv-enricher.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/csv-enricher",permalink:"/docs/generated/ingestion/sources/csv-enricher",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/csv-enricher.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"CSV Enricher",slug:"/generated/ingestion/sources/csv-enricher",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/csv-enricher.md"},sidebar:"overviewSidebar",previous:{title:"CockroachDB",permalink:"/docs/generated/ingestion/sources/cockroachdb"},next:{title:"Databricks",permalink:"/docs/generated/ingestion/sources/databricks"}},d={},g=[{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:g},y="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.yg)(y,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"csv-enricher"},"CSV Enricher"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,r.yg)("admonition",{title:"Looking to ingest a CSV data file into DataHub, as an asset?",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/s3"},"Local File")," ingestion source.\nThe CSV enricher is used for enriching entities already ingested into DataHub.")),(0,r.yg)("p",null,"This plugin is used to bulk upload metadata to Datahub.\nIt will apply glossary terms, tags, description, owners and domain at the entity level. It can also be used to apply tags,\nglossary terms, and documentation at the column level. These values are read from a CSV file. You have the option to either overwrite\nor append existing values."),(0,r.yg)("p",null,"The format of the CSV is demonstrated below. The header is required and URNs should be surrounded by quotes when they contains commas (most URNs contains commas)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'resource,subresource,glossary_terms,tags,owners,ownership_type,description,domain,ownership_type_urn\n"urn:li:dataset:(urn:li:dataPlatform:snowflake,datahub.growth.users,PROD)",,[urn:li:glossaryTerm:Users],[urn:li:tag:HighQuality],[urn:li:corpuser:lfoe|urn:li:corpuser:jdoe],CUSTOM,"description for users table",urn:li:domain:Engineering,urn:li:ownershipType:a0e9176c-d8cf-4b11-963b-f7a1bc2333c9\n"urn:li:dataset:(urn:li:dataPlatform:hive,datahub.growth.users,PROD)",first_name,[urn:li:glossaryTerm:FirstName],,,,"first_name description",\n"urn:li:dataset:(urn:li:dataPlatform:hive,datahub.growth.users,PROD)",last_name,[urn:li:glossaryTerm:LastName],,,,"last_name description",\n')),(0,r.yg)("p",null,"Note that the first row does not have a subresource populated. That means any glossary terms, tags, and owners will\nbe applied at the entity field. If a subresource is populated (as it is for the second and third rows), glossary\nterms and tags will be applied on the column. Every row MUST have a resource. Also note that owners can only\nbe applied at the resource level."),(0,r.yg)("p",null,"If ownership_type_urn is set then ownership_type must be set to CUSTOM."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"This source will not work on very large csv files that do not fit in memory.")),(0,r.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"csv-enricher")," source works out of the box with ",(0,r.yg)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,r.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: csv-enricher \n  config:\n    # relative path to your csv file to ingest\n    filename: ./path/to/your/file.csv\n\n# Default sink is datahub-rest and doesn't need to be configured\n# See https://datahubproject.io/docs/metadata-ingestion/sink_docs/datahub for customization options\n\n")),(0,r.yg)("h3",{id:"config-details"},"Config Details"),(0,r.yg)(a.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.yg)("p",null,"Note that a ",(0,r.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.yg)("div",{className:"config-table"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"filename"),"\xa0",(0,r.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"File path or URL of CSV file to ingest.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"array_delimiter"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Delimiter to use when parsing array fields (tags, terms and owners) ",(0,r.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.yg)("span",{className:"default-value"},"|")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"delimiter"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},"Delimiter to use when parsing CSV ",(0,r.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.yg)("span",{className:"default-value"},",")))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("div",{className:"path-line"},(0,r.yg)("span",{className:"path-main"},"write_semantics"))," ",(0,r.yg)("div",{className:"type-name-line"},(0,r.yg)("span",{className:"type-name"},"string"))),(0,r.yg)("td",{parentName:"tr",align:"left"},'Whether the new tags, terms and owners to be added will override the existing ones added only by this source or not. Value for this config can be "PATCH" or "OVERRIDE" ',(0,r.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.yg)("span",{className:"default-value"},"PATCH")))))))),(0,r.yg)(i.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "CSVEnricherConfig",\n  "type": "object",\n  "properties": {\n    "filename": {\n      "title": "Filename",\n      "description": "File path or URL of CSV file to ingest.",\n      "type": "string"\n    },\n    "write_semantics": {\n      "title": "Write Semantics",\n      "description": "Whether the new tags, terms and owners to be added will override the existing ones added only by this source or not. Value for this config can be \\"PATCH\\" or \\"OVERRIDE\\"",\n      "default": "PATCH",\n      "type": "string"\n    },\n    "delimiter": {\n      "title": "Delimiter",\n      "description": "Delimiter to use when parsing CSV",\n      "default": ",",\n      "type": "string"\n    },\n    "array_delimiter": {\n      "title": "Array Delimiter",\n      "description": "Delimiter to use when parsing array fields (tags, terms and owners)",\n      "default": "|",\n      "type": "string"\n    }\n  },\n  "required": [\n    "filename"\n  ],\n  "additionalProperties": false\n}\n')))),(0,r.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Class Name: ",(0,r.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.csv_enricher.CSVEnricherSource")),(0,r.yg)("li",{parentName:"ul"},"Browse on ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/csv_enricher.py"},"GitHub"))),(0,r.yg)("h2",null,"Questions"),(0,r.yg)("p",null,"If you've got any questions on configuring ingestion for CSV Enricher, feel free to ping us on ",(0,r.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}f.isMDXComponent=!0}}]);