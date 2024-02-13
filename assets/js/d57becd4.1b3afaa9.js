"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3226],{82972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=r(85893),n=r(11151),s=r(81850);const i={id:"getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function"},l=void 0,d={id:"playground/getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function",source:"@site/versioned_docs/version-2.0.0/playground/getNetwork.mdx",sourceDirName:"playground",slug:"/playground/getNetwork",permalink:"/docs/2.0.0/playground/getNetwork",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.0.0/playground/getNetwork.mdx",tags:[],version:"2.0.0",frontMatter:{id:"getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function"},sidebar:"docs",previous:{title:"getAddress",permalink:"/docs/2.0.0/playground/getAddress"},next:{title:"getPublicKey",permalink:"/docs/2.0.0/playground/getPublicKey"}},a={},c=[{value:"<code>getNetwork()</code>",id:"getnetwork",level:4}];function g(e){const t={code:"code",h4:"h4",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h4,{id:"getnetwork",children:(0,o.jsx)(t.code,{children:"getNetwork()"})}),"\n","\n","\n",(0,o.jsxs)("strong",{children:["Test GemWallet's ",(0,o.jsx)(t.code,{children:"getNetwork"})," method:"]}),"\n",(0,o.jsx)(s.b,{})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},81850:(e,t,r)=>{r.d(t,{b:()=>i});var o=r(67294),n=r(50791),s=r(85893);const i=()=>{const[e,t]=(0,o.useState)(""),[r,i]=(0,o.useState)(""),l=(0,o.useCallback)((async()=>{try{if(!await(0,n.isConnected)())return void i("Please install GemWallet");const e=await(0,n.getNetwork)();if(null===e)return void i("Sharing the network has been refused!");if(void 0===e)return void i("Something went wrong!");t(e)}catch(r){i("Something went wrong")}}),[]);return(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{children:"What network is GemWallet using?"}),e?(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Network: ",e]}):null,!e&&r?(0,s.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",r]}):null,(0,s.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:l,children:"Get Network"})]})}}}]);