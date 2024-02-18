"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3038],{92234:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=s(85893),d=s(11151),i=s(34739);const r={id:"addTrustline",title:"addTrustline",description:"Provides a playground to test addTrustline function"},l=void 0,a={id:"playground/addTrustline",title:"addTrustline",description:"Provides a playground to test addTrustline function",source:"@site/versioned_docs/version-2.1.0/playground/addTrustline.mdx",sourceDirName:"playground",slug:"/playground/addTrustline",permalink:"/docs/2.1.0/playground/addTrustline",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.1.0/playground/addTrustline.mdx",tags:[],version:"2.1.0",frontMatter:{id:"addTrustline",title:"addTrustline",description:"Provides a playground to test addTrustline function"},sidebar:"docs",previous:{title:"Using GemWallet in Node.js",permalink:"/docs/2.1.0/api/using-gemwallet-in-node-js"},next:{title:"getAddress",permalink:"/docs/2.1.0/playground/getAddress"}},o={},u=[{value:"<code>addTrustline()</code>",id:"addtrustline",level:4}];function c(e){const t={code:"code",h4:"h4",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h4,{id:"addtrustline",children:(0,n.jsx)(t.code,{children:"addTrustline()"})}),"\n","\n","\n",(0,n.jsxs)("strong",{children:["Test GemWallet's ",(0,n.jsx)(t.code,{children:"addTrustline"})," method:"]}),"\n",(0,n.jsx)(i.K,{})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},34739:(e,t,s)=>{s.d(t,{K:()=>l});var n=s(67294),d=s(50791),i=s(85893);const r={currency:"USD",issuer:"rwtDvu9QDfCskWuyE2TSEt3s56RbiWUKJN",value:"10000000"},l=()=>{const[e,t]=(0,n.useState)(""),[s,l]=(0,n.useState)(""),a=(0,n.useCallback)((async()=>{try{if(!await(0,d.isConnected)())return void l("Please install GemWallet");const e=await(0,d.addTrustline)(r);if(null===e)return void l("The transaction has been refused!");if(void 0===e)return void l("Something went wrong!");t(e)}catch(s){l("Something went wrong!")}}),[]);return(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{children:"This button adds a USD trustline to your testnet:"}),e?(0,i.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&s?(0,i.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",s]}):null,(0,i.jsx)("button",{type:"button",onClick:a,style:{margin:"1em 0"},children:"Add Trustline"}),(0,i.jsxs)("div",{children:["You can use"," ",(0,i.jsx)("a",{href:"https://issue.cash",target:"_blank",rel:"nofollow",children:"issue.cash"})," ","to get some USD funds from this trustline on the testnet."]})]})}}}]);