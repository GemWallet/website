"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2546],{25471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(85893),o=n(11151),r=n(81768);const i={id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},l=void 0,d={id:"playground/getNFT",title:"getNFT",description:"Provides a playground to test getNFT function",source:"@site/versioned_docs/version-2.2.1/playground/getNFT.mdx",sourceDirName:"playground",slug:"/playground/getNFT",permalink:"/docs/2.2.1/playground/getNFT",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.2.1/playground/getNFT.mdx",tags:[],version:"2.2.1",frontMatter:{id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},sidebar:"docs",previous:{title:"getNetwork",permalink:"/docs/2.2.1/playground/getNetwork"},next:{title:"getPublicKey",permalink:"/docs/2.2.1/playground/getPublicKey"}},a={},c=[{value:"<code>getNFT()</code>",id:"getnft",level:4}];function g(e){const t={code:"code",h4:"h4",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"getnft",children:(0,s.jsx)(t.code,{children:"getNFT()"})}),"\n","\n","\n",(0,s.jsxs)("strong",{children:["Test GemWallet's ",(0,s.jsx)(t.code,{children:"GetNFTDemo"})," method:"]}),"\n",(0,s.jsx)(r.h,{})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},81768:(e,t,n)=>{n.d(t,{h:()=>i});var s=n(67294),o=n(50791),r=n(85893);const i=()=>{const[e,t]=(0,s.useState)(),[n,i]=(0,s.useState)(""),l=(0,s.useCallback)((async()=>{try{if(!await(0,o.isConnected)())return void i("Please install GemWallet");const e=await(0,o.getNFT)();if(null===e)return void i("Sharing the NFTs has been refused!");if(void 0===e)return void i("Something went wrong!");t(e)}catch(n){i("Something went wrong!")}}),[]);return(0,r.jsxs)("section",{children:[(0,r.jsx)("div",{children:"Show the NFTs held your wallet?"}),e?(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:JSON.stringify(e,null,4)})}):null,!e&&n?(0,r.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",n]}):null,(0,r.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:l,children:"Get my NFTs"})]})}}}]);