"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[9514],{99090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var s=t(85893),o=t(11151),i=t(33105);const d={id:"isConnected",title:"isConnected",description:"Provides a playground to test isConnected function"},c=void 0,l={id:"playground/isConnected",title:"isConnected",description:"Provides a playground to test isConnected function",source:"@site/versioned_docs/version-2.2.0/playground/isConnected.mdx",sourceDirName:"playground",slug:"/playground/isConnected",permalink:"/docs/2.2.0/playground/isConnected",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.2.0/playground/isConnected.mdx",tags:[],version:"2.2.0",frontMatter:{id:"isConnected",title:"isConnected",description:"Provides a playground to test isConnected function"},sidebar:"docs",previous:{title:"getPublicKey",permalink:"/docs/2.2.0/playground/getPublicKey"},next:{title:"sendPayment",permalink:"/docs/2.2.0/playground/sendPayment"}},r={},a=[{value:"<code>isConnected()</code>",id:"isconnected",level:4}];function u(e){const n={code:"code",h4:"h4",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h4,{id:"isconnected",children:(0,s.jsx)(n.code,{children:"isConnected()"})}),"\n","\n","\n",(0,s.jsxs)("strong",{children:["Test GemWallet's ",(0,s.jsx)(n.code,{children:"isConnected"})," method:"]}),"\n",(0,s.jsx)(i.B,{})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},33105:(e,n,t)=>{t.d(n,{B:()=>d});var s=t(67294),o=t(50791),i=t(85893);const d=()=>{const[e,n]=(0,s.useState)(""),[t,d]=(0,s.useState)(""),c=(0,s.useCallback)((async()=>{try{if(!await(0,o.isConnected)())return void n("Please install GemWallet");n("GemWallet is installed")}catch(t){d("Something went wrong!")}}),[]);return(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{children:"Is GemWallet currently connected to your browser?"}),e?(0,i.jsx)("div",{style:{display:"block",margin:"1em 0"},children:e}):null,!e&&t?(0,i.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",t]}):null,(0,i.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:c,children:"Check Connection"})]})}}}]);