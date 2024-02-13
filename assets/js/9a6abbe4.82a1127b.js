"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[6421],{92950:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=i(85893),l=i(11151),s=i(22216);const o={id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},c=void 0,r={id:"playground/getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function",source:"@site/versioned_docs/version-2.1.0/playground/getPublicKey.mdx",sourceDirName:"playground",slug:"/playground/getPublicKey",permalink:"/docs/2.1.0/playground/getPublicKey",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.1.0/playground/getPublicKey.mdx",tags:[],version:"2.1.0",frontMatter:{id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},sidebar:"docs",previous:{title:"getNetwork",permalink:"/docs/2.1.0/playground/getNetwork"},next:{title:"isConnected",permalink:"/docs/2.1.0/playground/isConnected"}},d={},u=[{value:"<code>getPublicKey()</code>",id:"getpublickey",level:4}];function a(e){const t={code:"code",h4:"h4",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h4,{id:"getpublickey",children:(0,n.jsx)(t.code,{children:"getPublicKey()"})}),"\n","\n","\n",(0,n.jsxs)("strong",{children:["Test GemWallet's ",(0,n.jsx)(t.code,{children:"getPublicKey"})," method:"]}),"\n",(0,n.jsx)(s.D,{})]})}function g(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},22216:(e,t,i)=>{i.d(t,{D:()=>o});var n=i(67294),l=i(50791),s=i(85893);const o=()=>{const[e,t]=(0,n.useState)(""),[i,o]=(0,n.useState)(""),c=(0,n.useCallback)((async()=>{try{if(!await(0,l.isConnected)())return void o("Please install GemWallet");const e=await(0,l.getPublicKey)();if(null===e?.publicKey)return void o("Sharing the public key has been refused!");if(void 0===e?.publicKey)return void o("Something went wrong!");t(e.publicKey)}catch(i){o("Something went wrong!")}}),[]);return(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{children:"What is your public key?"}),e?(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Public key: ",e]}):null,!e&&i?(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",i]}):null,(0,s.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:c,children:"Get Public Key"})]})}}}]);