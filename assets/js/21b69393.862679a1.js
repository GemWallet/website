"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2712],{18708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var s=r(85893),a=r(11151),n=r(78313);const c={id:"createOffer",title:"createOffer",description:"Provides a playground to test createOffer function"},l=void 0,i={id:"playground/createOffer",title:"createOffer",description:"Provides a playground to test createOffer function",source:"@site/docs/playground/createOffer.mdx",sourceDirName:"playground",slug:"/playground/createOffer",permalink:"/docs/next/playground/createOffer",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/createOffer.mdx",tags:[],version:"current",frontMatter:{id:"createOffer",title:"createOffer",description:"Provides a playground to test createOffer function"},sidebar:"docs",previous:{title:"createNFTOffer",permalink:"/docs/next/playground/createNFTOffer"},next:{title:"getAddress",permalink:"/docs/next/playground/getAddress"}},o={},d=[{value:"<code>createOffer()</code>",id:"createoffer",level:4}];function f(e){const t={code:"code",h4:"h4",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"createoffer",children:(0,s.jsx)(t.code,{children:"createOffer()"})}),"\n","\n","\n",(0,s.jsxs)("strong",{children:["Test GemWallet's ",(0,s.jsx)(t.code,{children:"createOffer"})," method:"]}),"\n",(0,s.jsx)(n.x,{})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},78313:(e,t,r)=>{r.d(t,{x:()=>l});var s=r(67294),a=r(45547),n=r(85893);const c={takerGets:"10000000",takerPays:{currency:"ETH",issuer:"rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",value:"0.1"},flags:{tfPassive:!0}},l=()=>{const[e,t]=(0,s.useState)(""),[r,l]=(0,s.useState)(""),i=(0,s.useCallback)((async()=>{try{if(!(await(0,a.isInstalled)()).result.isInstalled)return void l("Please install GemWallet");const e=await(0,a.createOffer)(c);if("reject"===e.type)return void l("The transaction has been refused!");t(e.result.hash)}catch(r){l("Something went wrong!")}}),[]);return(0,n.jsxs)("section",{children:[(0,n.jsxs)("div",{children:["This button creates a new offer, with the following data:",(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:JSON.stringify(c,null,4)})})]}),e?(0,n.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&r?(0,n.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",r]}):null,(0,n.jsx)("button",{type:"button",onClick:i,style:{margin:"1em 0"},children:"Create offer"})]})}}}]);