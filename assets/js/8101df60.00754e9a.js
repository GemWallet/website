"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[2561],{11570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var l=n(85893),o=n(11151);const s={slug:"gemwallet-looking-for-beta-testers",title:"GemWallet looking for beta testers",authors:"florianb",tags:["GemWallet","Release 2.0.0"]},i=void 0,r={permalink:"/blog/gemwallet-looking-for-beta-testers",editUrl:"https://github.com/GemWallet/gemwallet-website/blob/master/blog/2022-07-26-gemwallet-looking-for-beta-testers.mdx",source:"@site/blog/2022-07-26-gemwallet-looking-for-beta-testers.mdx",title:"GemWallet looking for beta testers",description:"GemWallet Beta - looking for beta testers",date:"2022-07-26T00:00:00.000Z",formattedDate:"July 26, 2022",tags:[{label:"GemWallet",permalink:"/blog/tags/gem-wallet"},{label:"Release 2.0.0",permalink:"/blog/tags/release-2-0-0"}],readingTime:3.135,hasTruncateMarker:!1,authors:[{name:"Florian Bouron",title:"Founder and Maintainer of GemWallet",url:"https://github.com/FlorianBouron",imageURL:"https://github.com/FlorianBouron.png",key:"florianb"}],frontMatter:{slug:"gemwallet-looking-for-beta-testers",title:"GemWallet looking for beta testers",authors:"florianb",tags:["GemWallet","Release 2.0.0"]},unlisted:!1,prevItem:{title:"Import XUMM wallets into GemWallet",permalink:"/blog/import-xumm-wallets-into-gemwallet"},nextItem:{title:"GemWallet awarded $75,000 by Ripple to speed up its development",permalink:"/blog/gemwallet-awarded-$75,000-by-ripple-to-speed-up-its-development"}},a={authorsImageUrls:[void 0]},h=[{value:"Introduction",id:"introduction",level:3},{value:"What&#39;s new?",id:"whats-new",level:3},{value:"How to install it?",id:"how-to-install-it",level:3},{value:"How to use it?",id:"how-to-use-it",level:3},{value:"How to give feedback?",id:"how-to-give-feedback",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"GemWallet Beta - looking for beta testers",src:n(87190).Z+"",width:"1366",height:"768"})}),"\n",(0,l.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsx)(t.p,{children:"GemWallet has already presented its beta version in a previous article, but now are working hard on version 2.0.0."}),"\n",(0,l.jsxs)(t.p,{children:["You can find the last source code of version 2.0.0 on the ",(0,l.jsx)(t.a,{href:"https://github.com/GemWallet/gemwallet-extension/tree/release/2.0.0",children:"release/2.0.0 branch"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"In this article, I am going to explain to you what changes in this version and what is planned on the TODO list before going to the Chrome Store."}),"\n",(0,l.jsx)(t.h3,{id:"whats-new",children:"What's new?"}),"\n",(0,l.jsx)(t.p,{children:"\ud83c\udf31 Features:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Refactor transaction payment API"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Make the payload simpler"}),"\n",(0,l.jsx)(t.li,{children:"Return the hash of the transaction in case of a successful transaction"}),"\n",(0,l.jsx)(t.li,{children:"Return an error in case of an unsuccessful transaction"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Inform the user when the password is wrong"}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Allow the user to go to the previous page on import seed phrase or create a new wallet"}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Inform users when they don't have enough funds in their wallet before executing a transaction"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"\ud83e\uddf0 Tech Improvements:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Replace constants by enum"}),"\n",(0,l.jsx)(t.li,{children:"Properly catch errors"}),"\n",(0,l.jsx)(t.li,{children:"Refactor onboardings"}),"\n",(0,l.jsx)(t.li,{children:"Disconnect the WebSocket to the ledger before the extension closes"}),"\n",(0,l.jsx)(t.li,{children:"Catch errors within Sentry"}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["And much more, you can check the ",(0,l.jsx)(t.a,{href:"https://github.com/GemWallet/gemwallet-extension/pull/44",children:"release 2.0.0 pull request"})," to see the other improvements."]}),"\n",(0,l.jsx)(t.h3,{id:"how-to-install-it",children:"How to install it?"}),"\n",(0,l.jsx)(t.p,{children:"To install the last beta version, it's pretty easy:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:["Download it ",(0,l.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(83046).Z+"",children:"here"})]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Extract the zip file you have just downloaded"}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Install it in your web browser:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Chrome: At the top right, click on ",(0,l.jsx)(t.img,{alt:"More",src:n(82343).Z+"",width:"24",height:"24"}),', "More tools" and then "Extensions".']}),"\n",(0,l.jsxs)(t.li,{children:["Brave: At the top right, click on ",(0,l.jsx)(t.img,{alt:"More",src:n(82343).Z+"",width:"24",height:"24"}),', then "Extensions".']}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Activate the developer mode by switching on the slider"}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:'Click on "Load unpacked" and select the folder of your extension.'}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Congrats \ud83c\udf89 you now have GemWallet installed."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"The video below is put at the right timestamp to show you how to install GemWallet within your web browser."}),"\n",(0,l.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GQFdgM6k60g?start=117",title:"GemWallet Beta Installation",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,l.jsx)(t.h3,{id:"how-to-use-it",children:"How to use it?"}),"\n",(0,l.jsxs)(t.p,{children:["To use GemWallet, you need to use the GemWallet API described in the ",(0,l.jsx)(t.a,{href:"/docs/user-guide/introduction",children:"documentation"}),"."]}),"\n",(0,l.jsx)(t.p,{children:"Unfortunately, the documentation is not up to date as the package is still under development."}),"\n",(0,l.jsx)(t.p,{children:"I am going to show you how to connect the version beta with the following code snippet:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:'import { isConnected, sendPayment } from "@gemwallet/api";\n\nexport function Checkout() {\n  const handlePayment = () => {\n    // We make sure that we are connected to the ledger with the isConnected API\n    isConnected().then((isConnected) => {\n      if (isConnected) {\n        const transaction = {\n          amount: "0.999999",\n          destination: "rNvFCZXpDtGeQ3bSas15wGLN6N2stGmA9o",\n        };\n        // We send the payment to the extension which will forward it to the XRP Ledger\n        sendPayment(transaction)\n          .then((trHash) => {\n            // If the transaction is a success, the promise returns a transaction hash\n            console.log("Transaction Hash: ", trHash);\n          })\n          .catch((e) => {\n            console.log("THE ERROR: ", e);\n          });\n      } else {\n        console.log("You are not connected");\n      }\n    });\n  };\n\n  return (\n    <button\n      onClick={handlePayment}\n      className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n    >\n      PAY\n    </button>\n  );\n}\n'})}),"\n",(0,l.jsxs)(t.p,{children:["In order to don't pollute the npm repository of GemWallet the beta is under the package: ",(0,l.jsx)(t.a,{href:"https://www.npmjs.com/package/@gemwallet-beta/api",children:"@gemwallet-beta/api"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["The code above is extracted from this repository where you can have an example of implementation: ",(0,l.jsx)(t.a,{href:"https://github.com/FlorianBouron/gemwallet-store-demo/tree/release/2.0.0",children:"https://github.com/FlorianBouron/gemwallet-store-demo/tree/release/2.0.0"})]}),"\n",(0,l.jsx)(t.h3,{id:"how-to-give-feedback",children:"How to give feedback?"}),"\n",(0,l.jsx)(t.p,{children:"Giving us feedback has never been that easy, there are a few ways:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Contact us on ",(0,l.jsx)(t.a,{href:"https://twitter.com/gemwallet_app",children:"Twitter"})]}),"\n",(0,l.jsxs)(t.li,{children:["Join the ",(0,l.jsx)(t.a,{href:"https://discord.gg/CnkP9KGHBe",children:"Discord"})]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"whats-next",children:"What's next?"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Improvements in explaining the reserved amount within the Ledger"}),"\n",(0,l.jsx)(t.li,{children:"Enable GemWallet to be connected to the mainnet"}),"\n",(0,l.jsx)(t.li,{children:"Answer to your feedback"}),"\n",(0,l.jsx)(t.li,{children:"Create a Sign Method to allow authentication within web3 pages"}),"\n",(0,l.jsx)(t.li,{children:"Make the 2.0.0 release"}),"\n",(0,l.jsxs)(t.li,{children:["And much more (Stay tuned for the next announcements, follow us on ",(0,l.jsx)(t.a,{href:"https://twitter.com/gemwallet_app",children:"Twitter"}),")."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},83046:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/files/gemwallet-beta-8f2860bee30fe2f6f6cd7b6b18f09f6e.zip"},87190:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/GemWalletBeta-70440d6f296006462a2a3b541921b23e.png"},82343:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAKElEQVR4AWMYrqDUvfQ5ELoTrQGo+D8QPqeZBoSTqAVGQ2k0lIYpAAA/gTrh2+TtPAAAAABJRU5ErkJggg=="}}]);