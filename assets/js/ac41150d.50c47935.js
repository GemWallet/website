"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[7047],{33553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(85893),a=r(11151),s=r(84710);const l={id:"createNFTOffer",title:"createNFTOffer",description:"Provides a playground to test createNFTOffer function"},o=void 0,c={id:"playground/createNFTOffer",title:"createNFTOffer",description:"Provides a playground to test createNFTOffer function",source:"@site/versioned_docs/version-3.5.1/playground/createNFTOffer.mdx",sourceDirName:"playground",slug:"/playground/createNFTOffer",permalink:"/docs/3.5.1/playground/createNFTOffer",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.5.1/playground/createNFTOffer.mdx",tags:[],version:"3.5.1",frontMatter:{id:"createNFTOffer",title:"createNFTOffer",description:"Provides a playground to test createNFTOffer function"},sidebar:"docs",previous:{title:"cancelOffer",permalink:"/docs/3.5.1/playground/cancelOffer"},next:{title:"createOffer",permalink:"/docs/3.5.1/playground/createOffer"}},i={},d=[{value:"<code>createNFTOffer()</code>",id:"createnftoffer",level:4}];function f(e){const t={code:"code",h4:"h4",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h4,{id:"createnftoffer",children:(0,n.jsx)(t.code,{children:"createNFTOffer()"})}),"\n","\n","\n",(0,n.jsxs)("strong",{children:["Test GemWallet's ",(0,n.jsx)(t.code,{children:"createNFTOffer"})," method:"]}),"\n",(0,n.jsx)(s.h,{})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},84710:(e,t,r)=>{r.d(t,{h:()=>o});var n=r(67294),a=r(45547),s=r(85893);const l={amount:5e7,flags:{tfSellNFToken:!0}},o=()=>{const[e,t]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),[c,i]=(0,n.useState)(""),d=(0,n.useCallback)((async()=>{try{if(!(await(0,a.isInstalled)()).result.isInstalled)return void i("Please install GemWallet");const e=await(0,a.createNFTOffer)({...l,NFTokenID:r});if("reject"===e.type)return void i("The transaction has been refused!");t(e.result.hash)}catch(c){i("Something went wrong!")}}),[r]);return(0,s.jsxs)("section",{children:[(0,s.jsxs)("div",{children:["Input the NFT Token ID used to create the offer:",(0,s.jsx)("input",{type:"text",value:r,onChange:e=>o(e.target.value)})]}),(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["The following data will be used to create the offer:",(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:JSON.stringify(l,null,4)})})]}),e?(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&c?(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",c]}):null,(0,s.jsx)("button",{type:"button",onClick:d,style:{margin:"1em 0"},children:"Create NFT Offer"})]})}}}]);