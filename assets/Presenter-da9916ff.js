import{o as d,f as k,g as e,B as y,C as D,v as h,d as M,i as B,a as P,D as S,x as v,E as H,_ as z,G as I,H as R,c as C,b as A,I as $,J as E,K as L,L as j,M as q,N as F,O,P as U,Q as W,h as r,p as u,t as Z,n as x,j as N,R as V,S as G,T,U as J,V as K,q as Q,W as X,l as Y,X as w,Y as ee,Z as te,F as se,$ as oe,a0 as le,w as ne,a1 as ae,a2 as re,a3 as ie,a4 as ce}from"./index-1f268104.js";import{N as ue}from"./NoteDisplay-280ffc70.js";import de from"./DrawingControls-2d138819.js";const pe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_e=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),me=[_e];function ve(o,n){return d(),k("svg",pe,me)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(o,n){return d(),k("svg",fe,we)}const Se={name:"carbon-time",render:ye},ke="/ppt-cow-low-code/assets/logo-title-horizontal-96c3c915.png";function be(){const o=y(Date.now()),n=D({interval:1e3}),p=h(()=>{const t=(n.value-o.value)/1e3,l=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${l}`});function _(){o.value=n.value}return{timer:p,resetTimer:_}}const Ce=M({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(o){const n=o;B(P);const p=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.note}),_=h(()=>{var t,l,s;return(s=(l=(t=S.value)==null?void 0:t.meta)==null?void 0:l.slide)==null?void 0:s.noteHTML});return(t,l)=>(d(),v(ue,{class:H(n.class),note:p.value,"note-html":_.value},null,8,["class","note","note-html"]))}}),$e=z(Ce,[["__file","/home/runner/work/supermarket-cashier-system-ppt/supermarket-cashier-system-ppt/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=o=>(oe("data-v-1638ddb9"),o=o(),le(),o),Ne={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"}},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),ze=f(()=>e("div",{class:"context"}," next ",-1)),De={class:"grid-section note overflow-auto"},Ie={class:"grid-section bottom"},Re={class:"progress-bar"},Ae=M({__name:"Presenter",setup(o){B(P);const n=y();I(),R(n);const p=C.titleTemplate.replace("%s",C.title||"Slidev");A({title:`Presenter - ${p}`});const{timer:_,resetTimer:t}=be(),l=y([]),s=h(()=>$.value<E.value?{route:S.value,clicks:$.value+1}:L.value?{route:j.value,clicks:0}:null);return q(()=>{const b=n.value.querySelector("#slide-content"),i=F(O()),g=U();W(()=>{if(!g.value||ae.value||!re.value)return;const c=b.getBoundingClientRect(),a=(i.x-c.left)/c.width*100,m=(i.y-c.top)/c.height*100;if(!(a<0||a>100||m<0||m>100))return{x:a,y:m}},c=>{ne.cursor=c})}),(b,i)=>{const g=Se,c=he;return d(),k(se,null,[e("div",Ne,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...a)=>r(t)&&r(t)(...a))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,Z(r(_)),1)]),e("div",{ref_key:"main",ref:n,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(r(N))},[u(T,{key:"main",class:"h-full w-full"},{default:V(()=>[u(G,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(r(N))},[s.value?(d(),v(T,{key:"next",class:"h-full w-full"},{default:V(()=>{var a;return[u(r(K),{is:(a=s.value.route)==null?void 0:a.component,"clicks-elements":l.value,"onUpdate:clicksElements":i[1]||(i[1]=m=>l.value=m),clicks:s.value.clicks,"clicks-disabled":!1,class:H(r(J)(s.value.route)),route:s.value.route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):Q("v-if",!0),ze],4),e("div",De,[(d(),v($e,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ie,[u(ie,{persist:!0})]),(d(),v(de,{key:0}))]),e("div",Re,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(r(X)-1)/(r(Y)-1)*100}%`})},null,4)])]),u(ce),u(te,{modelValue:r(w),"onUpdate:modelValue":i[2]||(i[2]=a=>ee(w)?w.value=a:null)},null,8,["modelValue"])],64)}}});const qe=z(Ae,[["__scopeId","data-v-1638ddb9"],["__file","/home/runner/work/supermarket-cashier-system-ppt/supermarket-cashier-system-ppt/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.24_vite@4.3.9/node_modules/@slidev/client/internals/Presenter.vue"]]);export{qe as default};
