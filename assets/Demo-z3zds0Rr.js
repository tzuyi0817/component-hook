import{d as _,r as c,a as f,g as o,t as h,E as i,b as r,G as b,f as u,v as d,h as p,H as y,I as g,J as w,o as C,K as v,_ as S}from"./index-DoOXFzRQ.js";const D={class:"demo-wrapper"},$={class:"mb-4"},k={class:"example-wrapper border border-border-color rounded"},I={class:"p-6 border-b border-b-border-color"},B={class:"px-4 py-3 flex justify-end items-center gap-3"},E=["href"],N=_({__name:"Demo",props:{title:{},source:{},playground:{}},setup(R){const s=c(!1),l=c(!1);function m(e,a=!0){const t=a?g(e):e;return encodeURIComponent(t)}async function n(){l.value=!0,await w(150),s.value=!s.value}return(e,a)=>(C(),f("div",D,[o("h3",null,h(e.title),1),o("p",$,[i(e.$slots,"description",{},void 0,!0)]),o("div",k,[o("div",I,[i(e.$slots,"default",{},void 0,!0)]),o("div",B,[o("a",{target:"_blank",rel:"noopener noreferrer",href:`https://code-immediate.vercel.app/${e.playground}`},[r(v,{name:"playground"})],8,E),r(b,{source:e.source},null,8,["source"]),r(v,{name:"source",onClick:n})])]),o("div",null,[u(o("div",{class:p(["example-source-wrapper h-0",s.value?"scale-y-100 h-full":"scale-y-0"]),onTransitionend:a[0]||(a[0]=t=>l.value=s.value)},[r(y,{source:m(e.source),raw:encodeURIComponent(e.source)},null,8,["source","raw"])],34),[[d,l.value]]),u(o("div",{class:p(["example-source-collapse",s.value?"opacity-100":"opacity-0"]),onClick:n}," Collapse source ",2),[[d,s.value]])])]))}}),V=S(N,[["__scopeId","data-v-87b4f78b"]]);export{V as D};