"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2291],{41503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var s=t(85893),i=t(11151),a=t(46658);const d={id:"sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function"},o=void 0,r={id:"playground/sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function",source:"@site/versioned_docs/version-2.0.0/playground/sendPayment.mdx",sourceDirName:"playground",slug:"/playground/sendPayment",permalink:"/docs/2.0.0/playground/sendPayment",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.0.0/playground/sendPayment.mdx",tags:[],version:"2.0.0",frontMatter:{id:"sendPayment",title:"sendPayment",description:"Provides a playground to test sendPayment function"},sidebar:"docs",previous:{title:"getPublicKey",permalink:"/docs/2.0.0/playground/getPublicKey"},next:{title:"signMessage",permalink:"/docs/2.0.0/playground/signMessage"}},l={},c=[{value:"<code>sendPayment()</code>",id:"sendpayment",level:4}];function m(e){const n={code:"code",h4:"h4",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h4,{id:"sendpayment",children:(0,s.jsx)(n.code,{children:"sendPayment()"})}),"\n","\n","\n",(0,s.jsxs)("strong",{children:["Test GemWallet's ",(0,s.jsx)(n.code,{children:"sendPayment"})," method:"]}),"\n",(0,s.jsx)(a.S,{})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},46658:(e,n,t)=>{t.d(n,{S:()=>o});var s=t(67294),i=t(50791),a=t(85893);const d={amount:"50",destination:"rMrXopFSnCDSd5Eej4TpeHrV7SPjKtLpo2"},o=()=>{const[e,n]=(0,s.useState)(""),[t,o]=(0,s.useState)(""),r=(0,s.useCallback)((async()=>{try{if(!await(0,i.isConnected)())return void o("Please install GemWallet");const e=await(0,i.sendPayment)(d);if(null===e)return void o("The payment has been refused!");if(void 0===e)return void o("Something went wrong!");n(e)}catch(t){o("Something went wrong!")}}),[]);return(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{children:["This button is using the following payment information:",(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:JSON.stringify(d,null,4)})})]}),e?(0,a.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&t?(0,a.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",t]}):null,(0,a.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:r,children:"Make Transaction"})]})}}}]);