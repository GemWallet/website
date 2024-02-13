"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[7333],{85387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(85893),i=n(11151),l=n(40897);const r={id:"mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function"},o=void 0,a={id:"playground/mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function",source:"@site/versioned_docs/version-3.5.1/playground/mintNFT.mdx",sourceDirName:"playground",slug:"/playground/mintNFT",permalink:"/docs/3.5.1/playground/mintNFT",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.5.1/playground/mintNFT.mdx",tags:[],version:"3.5.1",frontMatter:{id:"mintNFT",title:"mintNFT",description:"Provides a playground to test mintNFT function"},sidebar:"docs",previous:{title:"isInstalled",permalink:"/docs/3.5.1/playground/isInstalled"},next:{title:"sendPayment",permalink:"/docs/3.5.1/playground/sendPayment"}},d={},c=[{value:"<code>mintNFT()</code>",id:"mintnft",level:4}];function m(e){const t={code:"code",h4:"h4",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"mintnft",children:(0,s.jsx)(t.code,{children:"mintNFT()"})}),"\n","\n","\n",(0,s.jsxs)("strong",{children:["Test GemWallet's ",(0,s.jsx)(t.code,{children:"mintNFT"})," method:"]}),"\n",(0,s.jsx)(l.z,{})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},40897:(e,t,n)=>{n.d(t,{z:()=>o});var s=n(67294),i=n(45547),l=n(85893);const r={URI:"4d696e746564207468726f7567682047656d57616c6c657421",flags:{tfOnlyXRP:!0,tfTransferable:!0},transferFee:3e3,NFTokenTaxon:0,memos:[{memo:{memoType:"4465736372697074696f6e",memoData:"54657374206d656d6f"}}]},o=()=>{const[e,t]=(0,s.useState)(""),[n,o]=(0,s.useState)(""),a=(0,s.useCallback)((async()=>{try{if(!(await(0,i.isInstalled)()).result.isInstalled)return void o("Please install GemWallet");const e=await(0,i.mintNFT)(r);if("reject"===e.type)return void o("The transaction has been refused!");t(e.result.hash)}catch(n){o("Something went wrong!")}}),[]);return(0,l.jsxs)("section",{children:[(0,l.jsxs)("div",{children:["This button mints a new NFT, with the following data:",(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:JSON.stringify(r,null,4)})})]}),e?(0,l.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&n?(0,l.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",n]}):null,(0,l.jsx)("button",{type:"button",onClick:a,style:{margin:"1em 0"},children:"Mint NFT"})]})}}}]);