"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3069],{30234:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>g,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(85893),i=n(11151),a=n(40316);const o={id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},r=void 0,d={id:"playground/signMessage",title:"signMessage",description:"Provides a playground to test signMessage function",source:"@site/versioned_docs/version-2.2.0/playground/signMessage.mdx",sourceDirName:"playground",slug:"/playground/signMessage",permalink:"/docs/2.2.0/playground/signMessage",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.2.0/playground/signMessage.mdx",tags:[],version:"2.2.0",frontMatter:{id:"signMessage",title:"signMessage",description:"Provides a playground to test signMessage function"},sidebar:"docs",previous:{title:"sendPayment",permalink:"/docs/2.2.0/playground/sendPayment"}},g={},l=[{value:"<code>signMessage()</code>",id:"signmessage",level:4}];function c(e){const s={code:"code",h4:"h4",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h4,{id:"signmessage",children:(0,t.jsx)(s.code,{children:"signMessage()"})}),"\n","\n","\n",(0,t.jsxs)("strong",{children:["Test GemWallet's ",(0,t.jsx)(s.code,{children:"signMessage"})," method:"]}),"\n",(0,t.jsx)(a.N,{})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},40316:(e,s,n)=>{n.d(s,{N:()=>r});var t=n(67294),i=n(50791),a=n(85893);const o="The message I want to get signed",r=()=>{const[e,s]=(0,t.useState)(""),[n,r]=(0,t.useState)(""),d=(0,t.useCallback)((async()=>{try{if(!await(0,i.isConnected)())return void r("Please install GemWallet");const e=await(0,i.signMessage)(o);if(null===e)return void r("The signature of the message has been refused!");if(void 0===e)return void r("Something went wrong!");s(e)}catch(n){r("Something went wrong!")}}),[]);return(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{children:["This button is using the following message to be signed:",(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:o})})]}),e?(0,a.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Message: ",e]}):null,!e&&n?(0,a.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",n]}):null,(0,a.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:d,children:"Sign Message"})]})}}}]);