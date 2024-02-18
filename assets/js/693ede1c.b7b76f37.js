"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3770],{48941:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=n(85893),c=n(11151),o=n(18609);const l={id:"setAccount",title:"setAccount",description:"Provides a playground to test setAccount function"},i=void 0,r={id:"playground/setAccount",title:"setAccount",description:"Provides a playground to test setAccount function",source:"@site/docs/playground/setAccount.mdx",sourceDirName:"playground",slug:"/playground/setAccount",permalink:"/docs/next/playground/setAccount",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/setAccount.mdx",tags:[],version:"current",frontMatter:{id:"setAccount",title:"setAccount",description:"Provides a playground to test setAccount function"},sidebar:"docs",previous:{title:"sendPayment",permalink:"/docs/next/playground/sendPayment"},next:{title:"setHook",permalink:"/docs/next/playground/setHook"}},a={},d=[{value:"<code>setAccount()</code>",id:"setaccount",level:4}];function u(t){const e={code:"code",h4:"h4",...(0,c.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h4,{id:"setaccount",children:(0,s.jsx)(e.code,{children:"setAccount()"})}),"\n","\n","\n",(0,s.jsxs)("strong",{children:["Test GemWallet's ",(0,s.jsx)(e.code,{children:"setAccount"})," method:"]}),"\n",(0,s.jsx)(o.j,{})]})}function h(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},18609:(t,e,n)=>{n.d(e,{j:()=>i});var s=n(67294),c=n(45547),o=n(85893);const l={emailHash:"1D1382344586ECFF844DACFF698C2EFB"},i=()=>{const[t,e]=(0,s.useState)(""),[n,i]=(0,s.useState)(""),r=(0,s.useCallback)((async()=>{try{if(!(await(0,c.isInstalled)()).result.isInstalled)return void i("Please install GemWallet");const t=await(0,c.setAccount)(l);if("reject"===t.type)return void i("The transaction has been refused!");e(t.result.hash)}catch(n){i("Something went wrong!")}}),[]);return(0,o.jsxs)("section",{children:[(0,o.jsxs)("div",{children:["This button sets the account, with the following data:",(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:JSON.stringify(l,null,4)})})]}),t?(0,o.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",t]}):null,!t&&n?(0,o.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",n]}):null,(0,o.jsx)("button",{type:"button",onClick:r,style:{margin:"1em 0"},children:"Set account"})]})}}}]);