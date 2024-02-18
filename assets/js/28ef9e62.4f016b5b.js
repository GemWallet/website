"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[658],{88331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(85893),s=t(11151),o=t(12778);const l={id:"burnNFT",title:"burnNFT",description:"Provides a playground to test burnNFT function"},a=void 0,i={id:"playground/burnNFT",title:"burnNFT",description:"Provides a playground to test burnNFT function",source:"@site/versioned_docs/version-3.5.0/playground/burnNFT.mdx",sourceDirName:"playground",slug:"/playground/burnNFT",permalink:"/docs/3.5.0/playground/burnNFT",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.5.0/playground/burnNFT.mdx",tags:[],version:"3.5.0",frontMatter:{id:"burnNFT",title:"burnNFT",description:"Provides a playground to test burnNFT function"},sidebar:"docs",previous:{title:"acceptNFTOffer",permalink:"/docs/3.5.0/playground/acceptNFTOffer"},next:{title:"cancelNFTOffer",permalink:"/docs/3.5.0/playground/cancelNFTOffer"}},d={},u=[{value:"<code>burnNFT()</code>",id:"burnnft",level:4}];function c(e){const n={code:"code",h4:"h4",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h4,{id:"burnnft",children:(0,r.jsx)(n.code,{children:"burnNFT()"})}),"\n","\n","\n",(0,r.jsxs)("strong",{children:["Test GemWallet's ",(0,r.jsx)(n.code,{children:"burnNFT"})," method:"]}),"\n",(0,r.jsx)(o.s,{})]})}function b(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},12778:(e,n,t)=>{t.d(n,{s:()=>l});var r=t(67294),s=t(45547),o=t(85893);const l=()=>{const[e,n]=(0,r.useState)(""),[t,l]=(0,r.useState)(""),[a,i]=(0,r.useState)(""),d=(0,r.useCallback)((async()=>{try{if(!(await(0,s.isInstalled)()).result.isInstalled)return void i("Please install GemWallet");const e=await(0,s.burnNFT)({NFTokenID:t});if("reject"===e.type)return void i("The transaction has been refused!");n(e.result.hash)}catch(a){i("Something went wrong!")}}),[t]);return(0,o.jsxs)("section",{children:[(0,o.jsxs)("div",{children:["Input the NFT Token ID to burn:",(0,o.jsx)("input",{type:"text",value:t,onChange:e=>l(e.target.value)})]}),e?(0,o.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&a?(0,o.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",a]}):null,(0,o.jsx)("button",{type:"button",onClick:d,style:{margin:"1em 0"},children:"Burn NFT"})]})}}}]);