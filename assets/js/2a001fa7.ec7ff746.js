"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[4498],{19485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(85893),c=t(11151),l=t(70714);const a={id:"cancelOffer",title:"cancelOffer",description:"Provides a playground to test cancelOffer function"},s=void 0,o={id:"playground/cancelOffer",title:"cancelOffer",description:"Provides a playground to test cancelOffer function",source:"@site/versioned_docs/version-3.5.0/playground/cancelOffer.mdx",sourceDirName:"playground",slug:"/playground/cancelOffer",permalink:"/docs/3.5.0/playground/cancelOffer",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.5.0/playground/cancelOffer.mdx",tags:[],version:"3.5.0",frontMatter:{id:"cancelOffer",title:"cancelOffer",description:"Provides a playground to test cancelOffer function"},sidebar:"docs",previous:{title:"cancelNFTOffer",permalink:"/docs/3.5.0/playground/cancelNFTOffer"},next:{title:"createNFTOffer",permalink:"/docs/3.5.0/playground/createNFTOffer"}},i={},d=[{value:"<code>cancelOffer()</code>",id:"canceloffer",level:4}];function f(e){const n={code:"code",h4:"h4",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h4,{id:"canceloffer",children:(0,r.jsx)(n.code,{children:"cancelOffer()"})}),"\n","\n","\n",(0,r.jsxs)("strong",{children:["Test GemWallet's ",(0,r.jsx)(n.code,{children:"cancelOffer"})," method:"]}),"\n",(0,r.jsx)(l.m,{})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},70714:(e,n,t)=>{t.d(n,{m:()=>a});var r=t(67294),c=t(45547),l=t(85893);const a=()=>{const[e,n]=(0,r.useState)(""),[t,a]=(0,r.useState)(""),[s,o]=(0,r.useState)(""),i=(0,r.useCallback)((async()=>{try{if(!(await(0,c.isInstalled)()).result.isInstalled)return void o("Please install GemWallet");const e=await(0,c.cancelOffer)({offerSequence:[t]});if("reject"===e.type)return void o("The transaction has been refused!");n(e.result.hash)}catch(s){o("Something went wrong!")}}),[t]);return(0,l.jsxs)("section",{children:[(0,l.jsxs)("div",{children:["Input the Offer Sequence to be cancelled:",(0,l.jsx)("input",{type:"text",value:t,onChange:e=>a(e.target.value)})]}),e?(0,l.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&s?(0,l.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",s]}):null,(0,l.jsx)("button",{type:"button",onClick:i,style:{margin:"1em 0"},children:"Cancel Offer"})]})}}}]);