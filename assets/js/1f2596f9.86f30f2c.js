"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[1260],{31113:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var i=l(85893),n=l(11151),s=l(1830);const c={id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},r=void 0,o={id:"playground/getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function",source:"@site/docs/playground/getPublicKey.mdx",sourceDirName:"playground",slug:"/playground/getPublicKey",permalink:"/docs/next/playground/getPublicKey",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/getPublicKey.mdx",tags:[],version:"current",frontMatter:{id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},sidebar:"docs",previous:{title:"getNFT",permalink:"/docs/next/playground/getNFT"},next:{title:"isInstalled",permalink:"/docs/next/playground/isInstalled"}},d={},u=[{value:"<code>getPublicKey()</code>",id:"getpublickey",level:4}];function a(e){const t={code:"code",h4:"h4",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h4,{id:"getpublickey",children:(0,i.jsx)(t.code,{children:"getPublicKey()"})}),"\n","\n","\n",(0,i.jsxs)("strong",{children:["Test GemWallet's ",(0,i.jsx)(t.code,{children:"getPublicKey"})," method:"]}),"\n",(0,i.jsx)(s.D,{})]})}function g(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1830:(e,t,l)=>{l.d(t,{D:()=>c});var i=l(67294),n=l(45547),s=l(85893);const c=()=>{const[e,t]=(0,i.useState)(""),[l,c]=(0,i.useState)(""),r=(0,i.useCallback)((async()=>{try{if(!(await(0,n.isInstalled)()).result.isInstalled)return void c("Please install GemWallet");const e=await(0,n.getPublicKey)();if("reject"===e.type)return void c("Sharing the public key has been refused!");t(e.result.publicKey)}catch(l){c("Something went wrong!")}}),[]);return(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{children:"What is your public key?"}),e?(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Public key: ",e]}):null,!e&&l?(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",l]}):null,(0,s.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:r,children:"Get Public Key"})]})}}}]);