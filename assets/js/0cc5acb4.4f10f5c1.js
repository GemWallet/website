"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[9960],{5234:function(e,t,r){r.d(t,{b:function(){return l}});var n=r(1017),o=r(4035),a=r(7294),s=r(5547),l=function(){var e=(0,a.useState)(""),t=e[0],r=e[1],l=(0,a.useState)(""),i=l[0],u=l[1],d=(0,a.useCallback)((0,o.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return u("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,s.getNetwork)();case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return u("Sharing the network has been refused!"),e.abrupt("return");case 13:r(t.result.network),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),u("Something went wrong");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return a.createElement("section",null,a.createElement("div",null,"What network is GemWallet using?"),t?a.createElement("div",{style:{display:"block",margin:"1em 0"}},"Network: ",t):null,!t&&i?a.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",i):null,a.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:d},"Get Network"))}},309:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return g}});var n=r(3117),o=r(102),a=(r(7294),r(4137)),s=r(5234),l=["components"],i={id:"getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function"},u=void 0,d={unversionedId:"playground/getNetwork",id:"version-3.2.0/playground/getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function",source:"@site/versioned_docs/version-3.2.0/playground/getNetwork.mdx",sourceDirName:"playground",slug:"/playground/getNetwork",permalink:"/docs/playground/getNetwork",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.2.0/playground/getNetwork.mdx",tags:[],version:"3.2.0",frontMatter:{id:"getNetwork",title:"getNetwork",description:"Provides a playground to test getNetwork function"},sidebar:"docs",previous:{title:"getAddress",permalink:"/docs/playground/getAddress"},next:{title:"getNFT",permalink:"/docs/playground/getNFT"}},c={},g=[{value:"<code>getNetwork()</code>",id:"getnetwork",level:4}],k={toc:g};function p(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"getnetwork"},(0,a.kt)("inlineCode",{parentName:"h4"},"getNetwork()")),(0,a.kt)("strong",null,"Test GemWallet's `getNetwork` method:"),(0,a.kt)(s.b,{mdxType:"GetNetworkDemo"}))}p.isMDXComponent=!0}}]);