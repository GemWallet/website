"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[9584],{11137:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=o(85893),n=o(11151),r=o(70489);const a={id:"setHook",title:"setHook",description:"Provides a playground to test setHook function"},l=void 0,i={id:"playground/setHook",title:"setHook",description:"Provides a playground to test setHook function",source:"@site/docs/playground/setHook.mdx",sourceDirName:"playground",slug:"/playground/setHook",permalink:"/docs/next/playground/setHook",draft:!1,unlisted:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/setHook.mdx",tags:[],version:"current",frontMatter:{id:"setHook",title:"setHook",description:"Provides a playground to test setHook function"},sidebar:"docs",previous:{title:"setAccount",permalink:"/docs/next/playground/setAccount"},next:{title:"setRegularKey",permalink:"/docs/next/playground/setRegularKey"}},d={},c=[{value:"<code>setHook()</code>",id:"sethook",level:4}];function u(e){const t={code:"code",h4:"h4",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h4,{id:"sethook",children:(0,s.jsx)(t.code,{children:"setHook()"})}),"\n","\n","\n",(0,s.jsxs)("strong",{children:["Test GemWallet's ",(0,s.jsx)(t.code,{children:"setHook"})," method:"]}),"\n",(0,s.jsx)(r.M,{})]})}function k(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},70489:(e,t,o)=>{o.d(t,{M:()=>l});var s=o(67294),n=o(45547),r=o(85893);const a={hooks:[{Hook:{CreateCode:"0061736D01000000011C0460057F7F7F7F7F017E60037F7F7E017E60027F7F017F60017F017E02230303656E76057472616365000003656E7606616363657074000103656E76025F670002030201030503010002062B077F0141B088040B7F004180080B7F0041A6080B7F004180080B7F0041B088040B7F0041000B7F0041010B07080104686F6F6B00030AC4800001C0800001017F230041106B220124002001200036020C41920841134180084112410010001A410022002000420010011A41012200200010021A200141106A240042000B0B2C01004180080B254163636570742E633A2043616C6C65642E00224163636570742E633A2043616C6C65642E22",Flags:1,HookApiVersion:0,HookOn:"F".repeat(58)+"BFFFFE",HookNamespace:"3963ADEB1B0E8934C0963680531202FD511FF1E16D5864402C2DA63861C420A8",HookParameters:[{HookParameter:{HookParameterName:"ABCDEF12",HookParameterValue:"12345678"}}],HookGrants:[{HookGrant:{HookHash:"78CAF69EEE950A6C55A450AC2A980DE434D624CD1B13148E007E28B7B6461CC8"}}]}}]},l=()=>{const[e,t]=(0,s.useState)(""),[o,l]=(0,s.useState)(""),i=(0,s.useCallback)((async()=>{try{if(!(await(0,n.isInstalled)()).result.isInstalled)return void l("Please install GemWallet");const e=await(0,n.setHook)(a);if("reject"===e.type)return void l("The transaction has been refused!");t(e.result.hash)}catch(o){l("Something went wrong!")}}),[]);return(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{children:["This button sets hooks to the account, with the following data:",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:JSON.stringify(a,null,4)})})]}),e?(0,r.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Transaction hash: ",e]}):null,!e&&o?(0,r.jsxs)("div",{style:{display:"block",margin:"1em 0"},children:["Error: ",o]}):null,(0,r.jsx)("button",{type:"button",onClick:i,style:{margin:"1em 0"},children:"Set hook"})]})}}}]);