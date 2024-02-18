"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[5075],{95420:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var n=s(85893),i=s(11151),r=s(6351);const l={id:"setTrustline",title:"setTrustline",description:"Provides a playground to test setTrustline function"},o=void 0,a={id:"playground/setTrustline",title:"setTrustline",description:"Provides a playground to test setTrustline function",source:"@site/versioned_docs/version-3.4.0/playground/setTrustline.mdx",sourceDirName:"playground",slug:"/playground/setTrustline",permalink:"/docs/3.4.0/playground/setTrustline",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.4.0/playground/setTrustline.mdx",tags:[],version:"3.4.0",frontMatter:{id:"setTrustline",title:"setTrustline",description:"Provides a playground to test setTrustline function"},sidebar:"docs",previous:{title:"setAccount",permalink:"/docs/3.4.0/playground/setAccount"},next:{title:"signMessage",permalink:"/docs/3.4.0/playground/signMessage"}},u={},d=[{value:"<code>setTrustline()</code>",id:"settrustline",level:4}];function c(e){const t={code:"code",h4:"h4",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h4,{id:"settrustline",children:(0,n.jsx)(t.code,{children:"setTrustline()"})}),"\n","\n","\n",(0,n.jsxs)("strong",{children:["Test GemWallet's ",(0,n.jsx)(t.code,{children:"setTrustline"})," method:"]}),"\n",(0,n.jsx)(r.f,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},6351:(e,t,s)=>{s.d(t,{f:()=>o});var n=s(67294),i=s(45547),r=s(85893);const l={limitAmount:{currency:"USD",issuer:"rwtDvu9QDfCskWuyE2TSEt3s56RbiWUKJN",value:"1000000"},flags:{tfSetNoRipple:!0}},o=()=>{const[e,t]=(0,n.useState)(""),[s,o]=(0,n.useState)(""),a=(0,n.useCallback)((async()=>{try{if(!(await(0,i.isInstalled)()).result.isInstalled)return void o("Please install GemWallet");const e=await(0,i.setTrustline)(l);if("reject"===e.type)return void o("The transaction has been refused!");t(e.result.hash)}catch(s){o("Something went wrong!")}}),[]);return(0,r.jsxs)("section",{children:[(0,r.jsx)("div",{children:"This button adds a USD trustline to your testnet:"}),e?(0,r.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&s?(0,r.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",s]}):null,(0,r.jsx)("button",{type:"button",onClick:a,style:{margin:"1em 0"},children:"Add Trustline"}),(0,r.jsxs)("div",{children:["You can use"," ",(0,r.jsx)("a",{href:"https://issue.cash",target:"_blank",rel:"nofollow",children:"issue.cash"})," ","to get some USD funds from this trustline on the testnet."]})]})}}}]);