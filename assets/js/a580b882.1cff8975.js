"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2292],{83233:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>y});var r=s(85893),l=s(11151),n=s(67294),a=s(45547);const i={regularKey:"rNvFCZXpDtGeQ3bVas95wGLN6N2stGmA9o"},o=()=>{const[e,t]=(0,n.useState)(""),[s,l]=(0,n.useState)(""),o=(0,n.useCallback)((async()=>{try{if(!(await(0,a.isInstalled)()).result.isInstalled)return void l("Please install GemWallet");const e=await(0,a.setRegularKey)(i);if("reject"===e.type)return void l("The transaction has been refused!");t(e.result.hash)}catch(s){l("Something went wrong!")}}),[]);return(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{children:["This button sets the account, with the following data:",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:JSON.stringify(i,null,4)})})]}),e?(0,r.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&s?(0,r.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",s]}):null,(0,r.jsx)("button",{type:"button",onClick:o,style:{margin:"1em 0"},children:"Set regular key"})]})},u={id:"setRegularKey",title:"setRegularKey",description:"Provides a playground to test setRegularKey function"},d=void 0,c={id:"playground/setRegularKey",title:"setRegularKey",description:"Provides a playground to test setRegularKey function",source:"@site/docs/playground/setRegularKey.mdx",sourceDirName:"playground",slug:"/playground/setRegularKey",permalink:"/docs/next/playground/setRegularKey",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/setRegularKey.mdx",tags:[],version:"current",frontMatter:{id:"setRegularKey",title:"setRegularKey",description:"Provides a playground to test setRegularKey function"},sidebar:"docs",previous:{title:"setAccount",permalink:"/docs/next/playground/setAccount"},next:{title:"setTrustline",permalink:"/docs/next/playground/setTrustline"}},g={},y=[{value:"<code>setRegularKey()</code>",id:"setregularkey",level:4}];function h(e){const t={code:"code",h4:"h4",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h4,{id:"setregularkey",children:(0,r.jsx)(t.code,{children:"setRegularKey()"})}),"\n","\n","\n",(0,r.jsxs)("strong",{children:["Test GemWallet's ",(0,r.jsx)(t.code,{children:"setRegularKey"})," method:"]}),"\n",(0,r.jsx)(o,{})]})}function p(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);