"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[9510],{8126:function(e,t,n){n.d(t,{h:function(){return s}});var r=n(1017),o=n(4035),l=n(7294),a=n(5547),s=function(){var e=(0,l.useState)(),t=e[0],n=e[1],s=(0,l.useState)(""),u=s[0],i=s[1],c=(0,l.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return i("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,a.getNFT)();case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return i("Sharing the NFTs has been refused!"),e.abrupt("return");case 13:n(t.result.account_nfts),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),i("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return l.createElement("section",null,l.createElement("div",null,"Show the NFTs held your wallet?"),t?l.createElement("pre",null,l.createElement("code",null,JSON.stringify(t,null,4))):null,!t&&u?l.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",u):null,l.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:c},"Get my NFTs"))}},7580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var r=n(3117),o=n(102),l=(n(7294),n(4137)),a=n(8126),s=["components"],u={id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},i=void 0,c={unversionedId:"playground/getNFT",id:"version-3.3.0/playground/getNFT",title:"getNFT",description:"Provides a playground to test getNFT function",source:"@site/versioned_docs/version-3.3.0/playground/getNFT.mdx",sourceDirName:"playground",slug:"/playground/getNFT",permalink:"/docs/3.3.0/playground/getNFT",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.3.0/playground/getNFT.mdx",tags:[],version:"3.3.0",frontMatter:{id:"getNFT",title:"getNFT",description:"Provides a playground to test getNFT function"},sidebar:"docs",previous:{title:"getNetwork",permalink:"/docs/3.3.0/playground/getNetwork"},next:{title:"getPublicKey",permalink:"/docs/3.3.0/playground/getPublicKey"}},d={},g=[{value:"<code>getNFT()</code>",id:"getnft",level:4}],p={toc:g};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"getnft"},(0,l.kt)("inlineCode",{parentName:"h4"},"getNFT()")),(0,l.kt)("strong",null,"Test GemWallet's `GetNFTDemo` method:"),(0,l.kt)(a.h,{mdxType:"GetNFTDemo"}))}m.isMDXComponent=!0}}]);