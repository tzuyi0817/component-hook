import{d as f,E as _,r as v,w as g,g as C,v as b,b as w,G as u,o as m,B as y,h as a,t as S,e as t,f as c,H as p,I as x,i as $,D,J as h,K as H,L as B}from"./index-D4qoCqcO.js";const I=f({__name:"Collapse",props:{isShow:{type:Boolean}},setup(l){const i=_("collapse"),s=v(l.isShow);function d(e){s.value=!0,e.dataset.overflow=e.style.overflow,e.style.maxHeight="0",window.requestAnimationFrame(()=>{e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"})}function n(e){e.dataset.overflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,window.requestAnimationFrame(()=>{e.style.maxHeight="0",e.style.overflow="hidden"})}function o(e){if(e.propertyName!=="max-height")return;const r=e.target;r.style.maxHeight="",r.style.overflow=r.dataset.overflow??"",s.value=l.isShow}return g(()=>l.isShow,e=>{i.value&&(e?d(i.value):n(i.value))}),(e,r)=>C((m(),w("div",{ref:"collapse",class:"collapse-wrapper",onTransitionend:o},[u(e.$slots,"default",{},void 0,!0)],544)),[[b,s.value]])}}),k=y(I,[["__scopeId","data-v-e9458fe7"]]),R={class:"demo-wrapper"},V={class:"mb-4"},N={class:"example-wrapper border border-border-color rounded"},q={class:"p-6 border-b border-b-border-color"},A={class:"px-4 py-3 flex justify-end items-center gap-3"},E={class:"example-source"},F={class:"example-source-wrapper"},O=f({__name:"Demo",props:{title:{},source:{},playground:{},language:{}},setup(l){const i=l,s=v(!1);function d(o,e=!0){const r=e?B(o,i.language):o;return encodeURIComponent(r)}async function n(){s.value=!s.value}return(o,e)=>(m(),w("div",R,[a("h3",null,S(o.title),1),a("p",V,[u(o.$slots,"description",{},void 0,!0)]),a("div",N,[a("div",q,[u(o.$slots,"default",{},void 0,!0)]),a("div",A,[t(p,{title:"Open in Playground"},{default:c(()=>[t(D,{href:`https://code-immediate.vercel.app/${o.playground}`,title:"Open in Playground"},{default:c(()=>[t(h,{name:"playground"})]),_:1},8,["href"])]),_:1}),t(x,{source:o.source,title:"Copy Code"},null,8,["source"]),t(p,{title:"View Source","aria-label":"View Source"},{default:c(()=>[t(h,{name:"source",onClick:n})]),_:1})])]),a("div",E,[t(k,{"is-show":s.value},{default:c(()=>[a("div",F,[t(H,{source:d(o.source),raw:encodeURIComponent(o.source)},null,8,["source","raw"])])]),_:1},8,["is-show"]),a("div",{class:$(["example-source-collapse",s.value?"py-3 transition-opacity":"transition-none opacity-0 h-0"]),role:"button",tabindex:"0",onClick:n}," Collapse source ",2)])]))}}),T=y(O,[["__scopeId","data-v-38c266c6"]]);export{T as D};
