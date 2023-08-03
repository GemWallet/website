"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[5240],{8313:function(e,t,r){r.d(t,{x:function(){return l}});var n=r(1017),a=r(4035),s=r(7294),o=r(5547),c={takerGets:"10000000",takerPays:{currency:"ETH",issuer:"rnm76Qgz4G9G4gZBJVuXVvkbt7gVD7szey",value:"0.1"},flags:{tfPassive:!0}},l=function(){var e=(0,s.useState)(""),t=e[0],r=e[1],l=(0,s.useState)(""),i=l[0],u=l[1],f=(0,s.useCallback)((0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.isInstalled)();case 3:if(e.sent.result.isInstalled){e.next=7;break}return u("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,o.createOffer)(c);case 9:if("reject"!==(t=e.sent).type){e.next=13;break}return u("The transaction has been refused!"),e.abrupt("return");case 13:r(t.result.hash),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),u("Something went wrong!");case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]);return s.createElement("section",null,s.createElement("div",null,"This button creates a new offer, with the following data:",s.createElement("pre",null,s.createElement("code",null,JSON.stringify(c,null,4)))),t?s.createElement("div",{style:{display:"block",margin:"1em 0"}},"Transaction hash: ",t):null,!t&&i?s.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",i):null,s.createElement("button",{type:"button",onClick:f,style:{margin:"1em 0"}},"Create offer"))}},578:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=r(3117),a=r(102),s=(r(7294),r(4137)),o=r(8313),c=["components"],l={id:"createOffer",title:"createOffer",description:"Provides a playground to test createOffer function"},i=void 0,u={unversionedId:"playground/createOffer",id:"version-3.4.0/playground/createOffer",title:"createOffer",description:"Provides a playground to test createOffer function",source:"@site/versioned_docs/version-3.4.0/playground/createOffer.mdx",sourceDirName:"playground",slug:"/playground/createOffer",permalink:"/docs/playground/createOffer",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-3.4.0/playground/createOffer.mdx",tags:[],version:"3.4.0",frontMatter:{id:"createOffer",title:"createOffer",description:"Provides a playground to test createOffer function"},sidebar:"docs",previous:{title:"createNFTOffer",permalink:"/docs/playground/createNFTOffer"},next:{title:"getAddress",permalink:"/docs/playground/getAddress"}},f={},d=[{value:"<code>createOffer()</code>",id:"createoffer",level:4}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h4",{id:"createoffer"},(0,s.kt)("inlineCode",{parentName:"h4"},"createOffer()")),(0,s.kt)("strong",null,"Test GemWallet's `createOffer` method:"),(0,s.kt)(o.x,{mdxType:"CreateOfferDemo"}))}m.isMDXComponent=!0}}]);