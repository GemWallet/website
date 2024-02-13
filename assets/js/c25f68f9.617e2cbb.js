"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2660],{89265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(85893),r=n(11151),l=n(98126);const o={id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},i=void 0,d={id:"playground/getNFT",title:"getNFT",description:"Provides a playground to test getNFT function",source:"@site/versioned_docs/version-3.1.0/playground/getNFT.mdx",sourceDirName:"playground",slug:"/playground/getNFT",permalink:"/docs/3.1.0/playground/getNFT",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.1.0/playground/getNFT.mdx",tags:[],version:"3.1.0",frontMatter:{id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},sidebar:"docs",previous:{title:"getNetwork",permalink:"/docs/3.1.0/playground/getNetwork"},next:{title:"getPublicKey",permalink:"/docs/3.1.0/playground/getPublicKey"}},a={},c=[{value:"<code>getNFT()</code>",id:"getnft",level:4}];function u(e){const t={code:"code",h4:"h4",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"getnft",children:(0,s.jsx)(t.code,{children:"getNFT()"})}),"\n","\n","\n",(0,s.jsxs)("strong",{children:["Test GemWallet's ",(0,s.jsx)(t.code,{children:"GetNFTDemo"})," method:"]}),"\n",(0,s.jsx)(l.h,{})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},98126:(e,t,n)=>{n.d(t,{h:()=>o});var s=n(67294),r=n(45547),l=n(85893);const o=()=>{const[e,t]=(0,s.useState)(),[n,o]=(0,s.useState)(""),i=(0,s.useCallback)((async()=>{try{if(!(await(0,r.isInstalled)()).result.isInstalled)return void o("Please install GemWallet");const e=await(0,r.getNFT)();if("reject"===e.type)return void o("Sharing the NFTs has been refused!");t(e.result.account_nfts)}catch(n){o("Something went wrong!")}}),[]);return(0,l.jsxs)("section",{children:[(0,l.jsx)("div",{children:"Show the NFTs held your wallet?"}),e?(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:JSON.stringify(e,null,4)})}):null,!e&&n?(0,l.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",n]}):null,(0,l.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:i,children:"Get my NFTs"})]})}}}]);