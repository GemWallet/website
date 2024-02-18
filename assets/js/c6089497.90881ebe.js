"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[9415],{51109:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var d=t(85893),r=t(11151),n=t(13393);const i={id:"getAddress",title:"getAddress",description:"Provides a playground to test getAddress function"},o=void 0,l={id:"playground/getAddress",title:"getAddress",description:"Provides a playground to test getAddress function",source:"@site/versioned_docs/version-2.2.0/playground/getAddress.mdx",sourceDirName:"playground",slug:"/playground/getAddress",permalink:"/docs/2.2.0/playground/getAddress",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.2.0/playground/getAddress.mdx",tags:[],version:"2.2.0",frontMatter:{id:"getAddress",title:"getAddress",description:"Provides a playground to test getAddress function"},sidebar:"docs",previous:{title:"addTrustline",permalink:"/docs/2.2.0/playground/addTrustline"},next:{title:"getNetwork",permalink:"/docs/2.2.0/playground/getNetwork"}},a={},c=[{value:"<code>getAddress()</code>",id:"getaddress",level:4}];function g(e){const s={code:"code",h4:"h4",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h4,{id:"getaddress",children:(0,d.jsx)(s.code,{children:"getAddress()"})}),"\n","\n","\n",(0,d.jsxs)("strong",{children:["Test GemWallet's ",(0,d.jsx)(s.code,{children:"getAddress"})," method:"]}),"\n",(0,d.jsx)(n.V,{})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}},13393:(e,s,t)=>{t.d(s,{V:()=>i});var d=t(67294),r=t(50791),n=t(85893);const i=()=>{const[e,s]=(0,d.useState)(""),[t,i]=(0,d.useState)(""),o=(0,d.useCallback)((async()=>{try{if(!await(0,r.isConnected)())return void i("Please install GemWallet");const e=await(0,r.getAddress)();if(null===e)return void i("Sharing the address has been refused!");if(void 0===e)return void i("Something went wrong!");s(e)}catch(e){i("Something went wrong!")}}),[]);return(0,n.jsxs)("section",{children:[(0,n.jsx)("div",{children:"What is your address?"}),e?(0,n.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Address: ",e]}):null,!e&&t?(0,n.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",t]}):null,(0,n.jsx)("button",{type:"button",style:{margin:"1em 0"},onClick:o,children:"Get Address"})]})}}}]);