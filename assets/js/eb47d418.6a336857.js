"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[8934],{709:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(1017),i=n(4035),l=n(7294),u=n(5547),o=function(){var e=(0,l.useState)(""),t=e[0],n=e[1],o=(0,l.useState)(""),c=o[0],a=o[1],s=(0,l.useCallback)((0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.isConnected)();case 3:if(e.sent){e.next=7;break}return a("Please install GemWallet"),e.abrupt("return");case 7:return e.next=9,(0,u.getPublicKey)();case 9:if(null!==(null==(t=e.sent)?void 0:t.publicKey)){e.next=13;break}return a("Sharing the public key has been refused!"),e.abrupt("return");case 13:if(void 0!==(null==t?void 0:t.publicKey)){e.next=16;break}return a("Something went wrong!"),e.abrupt("return");case 16:n(t.publicKey),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a("Something went wrong!");case 22:case"end":return e.stop()}}),e,null,[[0,19]])}))),[]);return l.createElement("section",null,l.createElement("div",null,"What is your public key?"),t?l.createElement("div",{style:{display:"block",margin:"1em 0"}},"Public key: ",t):null,!t&&c?l.createElement("div",{style:{display:"block",margin:"1em 0"}},"Error: ",c):null,l.createElement("button",{type:"button",style:{margin:"1em 0"},onClick:s},"Get Public Key"))}},7643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return y}});var r=n(3117),i=n(102),l=(n(7294),n(4137)),u=n(709),o=["components"],c={id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},a=void 0,s={unversionedId:"playground/getPublicKey",id:"version-2.0.0/playground/getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function",source:"@site/versioned_docs/version-2.0.0/playground/getPublicKey.mdx",sourceDirName:"playground",slug:"/playground/getPublicKey",permalink:"/docs/2.0.0/playground/getPublicKey",draft:!1,editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/versioned_docs/version-2.0.0/playground/getPublicKey.mdx",tags:[],version:"2.0.0",frontMatter:{id:"getPublicKey",title:"getPublicKey",description:"Provides a playground to test getPublicKey function"},sidebar:"docs",previous:{title:"getNetwork",permalink:"/docs/2.0.0/playground/getNetwork"},next:{title:"sendPayment",permalink:"/docs/2.0.0/playground/sendPayment"}},d={},y=[{value:"<code>getPublicKey()</code>",id:"getpublickey",level:4}],b={toc:y};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"getpublickey"},(0,l.kt)("inlineCode",{parentName:"h4"},"getPublicKey()")),(0,l.kt)("strong",null,"Test GemWallet's `getPublicKey` method:"),(0,l.kt)(u.D,{mdxType:"GetPublicKeyDemo"}))}p.isMDXComponent=!0}}]);