"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[6703],{8153:function(e,t,r){r.d(t,{V:function(){return o}});var n=r(1017),s=r(4035),d=r(7294),a=r(5547),o=function(){var e=(0,d.useState)(""),t=e[0],r=e[1],o=(0,d.useState)(""),l=o[0],i=o[1],u=(0,d.useCallback)((0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,a.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return i("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,a.getAddress)();case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return i("Sharing the address has been refused!"),e.abrupt("return");case 13:r(t.result.address),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),i("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return d.createElement("section",null,d.createElement("div",null,"What is your address?"),t?d.createElement("div",{style:{display:"block",margin:"1em 0"}},"Address: ",t):null,!t&&l?d.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",l):null,d.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:u},"Get Address"))}},3039:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var n=r(3117),s=r(102),d=(r(7294),r(4137)),a=r(8153),o=["components"],l={id:"getAddress",title:"getAddress",description:"Provides a playground to test getAddress function"},i=void 0,u={unversionedId:"playground/getAddress",id:"playground/getAddress",title:"getAddress",description:"Provides a playground to test getAddress function",source:"@site/docs/playground/getAddress.mdx",sourceDirName:"playground",slug:"/playground/getAddress",permalink:"/docs/next/playground/getAddress",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/docs/playground/getAddress.mdx",tags:[],version:"current",frontMatter:{id:"getAddress",title:"getAddress",description:"Provides a playground to test getAddress function"},sidebar:"docs",previous:{title:"Reference",permalink:"/docs/next/api/gemwallet-api-reference"},next:{title:"getNetwork",permalink:"/docs/next/playground/getNetwork"}},c={},g=[{value:"<code>getAddress()</code>",id:"getaddress",level:4}],p={toc:g};function m(e){var t=e.components,r=(0,s.Z)(e,o);return(0,d.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h4",{id:"getaddress"},(0,d.kt)("inlineCode",{parentName:"h4"},"getAddress()")),(0,d.kt)("strong",null,"Test GemWallet's `getAddress` method:"),(0,d.kt)(a.V,{mdxType:"GetAddressDemo"}))}m.isMDXComponent=!0}}]);