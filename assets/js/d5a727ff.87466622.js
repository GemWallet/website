"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[1152],{97797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(85893),c=r(11151),a=r(31781);const s={id:"acceptNFTOffer",title:"acceptNFTOffer",description:"Provides a playground to test acceptNFTOffer function"},i=void 0,l={id:"playground/acceptNFTOffer",title:"acceptNFTOffer",description:"Provides a playground to test acceptNFTOffer function",source:"@site/versioned_docs/version-3.5.0/playground/acceptNFTOffer.mdx",sourceDirName:"playground",slug:"/playground/acceptNFTOffer",permalink:"/docs/3.5.0/playground/acceptNFTOffer",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.5.0/playground/acceptNFTOffer.mdx",tags:[],version:"3.5.0",frontMatter:{id:"acceptNFTOffer",title:"acceptNFTOffer",description:"Provides a playground to test acceptNFTOffer function"},sidebar:"docs",previous:{title:"Reference",permalink:"/docs/3.5.0/api/gemwallet-api-reference"},next:{title:"burnNFT",permalink:"/docs/3.5.0/playground/burnNFT"}},o={},d=[{value:"<code>acceptNFTOffer()</code>",id:"acceptnftoffer",level:4}];function f(e){const t={code:"code",h4:"h4",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h4,{id:"acceptnftoffer",children:(0,n.jsx)(t.code,{children:"acceptNFTOffer()"})}),"\n","\n","\n",(0,n.jsxs)("strong",{children:["Test GemWallet's ",(0,n.jsx)(t.code,{children:"acceptNFTOffer"})," method:"]}),"\n",(0,n.jsx)(a.Q,{})]})}function p(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},31781:(e,t,r)=>{r.d(t,{Q:()=>s});var n=r(67294),c=r(45547),a=r(85893);const s=()=>{const[e,t]=(0,n.useState)(""),[r,s]=(0,n.useState)(""),[i,l]=(0,n.useState)(""),o=(0,n.useCallback)((async()=>{try{if(!(await(0,c.isInstalled)()).result.isInstalled)return void l("Please install GemWallet");const e=await(0,c.acceptNFTOffer)({NFTokenSellOffer:r});if("reject"===e.type)return void l("The transaction has been refused!");t(e.result.hash)}catch(i){l("Something went wrong!")}}),[r]);return(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{children:["Input the NFT Offer ID to be accepted:",(0,a.jsx)("input",{type:"text",value:r,onChange:e=>s(e.target.value)})]}),e?(0,a.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&i?(0,a.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",i]}):null,(0,a.jsx)("button",{type:"button",onClick:o,style:{margin:"1em 0"},children:"Accept NFT Offer"})]})}}}]);