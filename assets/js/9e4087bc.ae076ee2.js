"use strict";(self.webpackChunkgemwallet_website=self.webpackChunkgemwallet_website||[]).push([[3608],{28151:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});s(67294);var a=s(34791),r=s(97325),i=s(35463),l=s(79641),n=s(60495),c=s(85893);function h(e){let{year:t,posts:s}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,{as:"h3",id:t,children:t}),(0,c.jsx)("ul",{children:s.map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)(a.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:t}=e;return(0,c.jsx)("section",{className:"margin-vert--lg",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,c.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,c.jsx)(h,{...e})},t)))})})})}function o(e){let{archive:t}=e;const s=(0,r.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,r.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const t=e.reduce(((e,t)=>{const s=t.metadata.date.split("-")[0],a=e.get(s)??[];return e.set(s,[t,...a])}),new Map);return Array.from(t,(e=>{let[t,s]=e;return{year:t,posts:s}}))}(t.blogPosts);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.d,{title:s,description:a}),(0,c.jsxs)(l.Z,{children:[(0,c.jsx)("header",{className:"hero hero--primary",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(n.Z,{as:"h1",className:"hero__title",children:s}),(0,c.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,c.jsx)("main",{children:h.length>0&&(0,c.jsx)(d,{years:h})})]})]})}}}]);