import{ap as J,m as R,aq as mt,ai as gt,ah as Ee,g as ee,r as T,U as Te,j as te,B as O,F as ht,ar as bt,as as yt,w as Le,p as $,c as d,b as S,n as r,at as de,q as ze,T as Re,L as _t,K as ve,z as oe,C as Ne,M as Pe,A as pt,aj as W,au as q,Z as Ae,av as Ce,am as Se,t as D,v as H,u as z,x as Ct,e as St,d as Oe,i as kt,a as wt,y as We,o as $t,N as xt,Q as Bt,k as It,al as Vt,s as Et,I as Q,aw as Tt,ax as Lt,V as zt,ay as Rt,az as ke,H as Me,aA as Nt,aB as we,O as Pt}from"./index.9f24a137.js";const De=["top","bottom"],At=["start","end","left","right"];function Ot(e,n){let[a,t]=e.split(" ");return t||(t=J(De,a)?"start":J(At,a)?"top":"center"),{side:$e(a,n),align:$e(t,n)}}function $e(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function wn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function $n(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function xn(e){return{side:e.align,align:e.side}}function Bn(e){return J(De,e.side)?"y":"x"}function Wt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return R({name:a!=null?a:mt(gt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n}},setup(t,s){let{slots:l}=s;return()=>{var i;return Ee(t.tag,{class:e},(i=l.default)==null?void 0:i.call(l))}}})}function N(e){const n=ee("useRender");n.render=e}function Mt(e){const n=T(),a=T();if(Te){const t=new ResizeObserver(s=>{e==null||e(s,t),s.length&&(a.value=s[0].contentRect)});te(()=>{t.disconnect()}),O(n,(s,l)=>{l&&(t.unobserve(l),a.value=void 0),s&&t.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:ht(a)}}const In=(e,n)=>{const a=e.__vccOpts||e;for(const[t,s]of n)a[t]=s;return a},ie=bt({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,n){let{slots:a}=n;const{defaults:t,reset:s,root:l,scoped:i}=yt(e);return Le(t,{reset:s,root:l,scoped:i}),()=>{var o;return(o=a.default)==null?void 0:o.call(a)}}});const He=$({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ge(e){return{dimensionStyles:d(()=>({height:S(e.height),maxHeight:S(e.maxHeight),maxWidth:S(e.maxWidth),minHeight:S(e.minHeight),minWidth:S(e.minWidth),width:S(e.width)}))}}function Dt(e){return{aspectStyles:d(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Ht=R({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...He()},setup(e,n){let{slots:a}=n;const{aspectStyles:t}=Dt(e),{dimensionStyles:s}=Ge(e);return N(()=>{var l;return r("div",{class:"v-responsive",style:s.value},[r("div",{class:"v-responsive__sizer",style:t.value},null),(l=a.additional)==null?void 0:l.call(a),a.default&&r("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function Gt(e,n){if(!de)return;const a=n.modifiers||{},t=n.value,{handler:s,options:l}=typeof t=="object"?t:{handler:t,options:{}},i=new IntersectionObserver(function(){var o;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const g=(o=e._observe)==null?void 0:o[n.instance.$.uid];if(!g)return;const b=u.some(c=>c.isIntersecting);s&&(!a.quiet||g.init)&&(!a.once||b||g.init)&&s(b,u,f),b&&a.once?je(e,n):g.init=!0},l);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:i},i.observe(e)}function je(e,n){var a;const t=(a=e._observe)==null?void 0:a[n.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const jt={mounted:Gt,unmounted:je},Ft=jt,qt=$({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),X=(e,n)=>{let{slots:a}=n;const{transition:t,...s}=e,{component:l=Re,...i}=typeof t=="object"?t:{};return Ee(l,ze(typeof t=="string"?{name:t}:i,s),a)},Ut=R({name:"VImg",directives:{intersect:Ft},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...qt()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const s=T(""),l=T(),i=T(e.eager?"loading":"idle"),o=T(),u=T(),f=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=d(()=>f.value.aspect||o.value/u.value||0);O(()=>e.src,()=>{b(i.value!=="idle")}),O(g,(m,k)=>{!m&&k&&l.value&&C(l.value)}),_t(()=>b());function b(m){if(!(e.eager&&m)&&!(de&&!m&&!e.eager)){if(i.value="loading",f.value.lazySrc){const k=new Image;k.src=f.value.lazySrc,C(k,null)}!f.value.src||ve(()=>{var k,x;if(a("loadstart",((k=l.value)==null?void 0:k.currentSrc)||f.value.src),(x=l.value)!=null&&x.complete){if(l.value.naturalWidth||v(),i.value==="error")return;g.value||C(l.value,null),c()}else g.value||C(l.value),p()})}}function c(){var m;p(),i.value="loaded",a("load",((m=l.value)==null?void 0:m.currentSrc)||f.value.src)}function v(){var m;i.value="error",a("error",((m=l.value)==null?void 0:m.currentSrc)||f.value.src)}function p(){const m=l.value;m&&(s.value=m.currentSrc||m.src)}let h=-1;function C(m){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const x=()=>{clearTimeout(h);const{naturalHeight:L,naturalWidth:A}=m;L||A?(o.value=A,u.value=L):!m.complete&&i.value==="loading"&&k!=null?h=window.setTimeout(x,k):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};x()}const _=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),y=()=>{var m;if(!f.value.src||i.value==="idle")return null;const k=r("img",{class:["v-img__img",_.value],src:f.value.src,srcset:f.value.srcset,alt:"",sizes:e.sizes,ref:l,onLoad:c,onError:v},null),x=(m=t.sources)==null?void 0:m.call(t);return r(X,{transition:e.transition,appear:!0},{default:()=>[oe(x?r("picture",{class:"v-img__picture"},[x,k]):k,[[pt,i.value==="loaded"]])]})},w=()=>r(X,{transition:e.transition},{default:()=>[f.value.lazySrc&&i.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",_.value],src:f.value.lazySrc,alt:""},null)]}),I=()=>t.placeholder?r(X,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,V=()=>t.error?r(X,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,P=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,M=T(!1);{const m=O(g,k=>{k&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{M.value=!0})}),m())})}return N(()=>oe(r(Ht,{class:["v-img",{"v-img--booting":!M.value}],style:{width:S(e.width==="auto"?o.value:e.width)},aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>r(Pe,null,[r(y,null,null),r(w,null,null),r(P,null,null),r(I,null,null),r(V,null,null)]),default:t.default}),[[Ne("intersect"),{handler:b,options:e.options},null,{once:!0}]])),{currentSrc:s,image:l,state:i,naturalWidth:o,naturalHeight:u}}}),G=$({tag:{type:String,default:"div"}},"tag"),Fe=$({border:[Boolean,Number,String]},"border");function qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{borderClasses:d(()=>{const t=q(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))s.push(`border-${l}`);return s})}}const Ue=$({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Xe(e){return{elevationClasses:d(()=>{const a=q(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const ne=$({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ae(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{roundedClasses:d(()=>{const t=q(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))s.push(`rounded-${l}`);return s})}}function fe(e){return Ae(()=>{const n=[],a={};return e.value.background&&(Ce(e.value.background)?a.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(Ce(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function Z(e,n){const a=d(()=>({text:q(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=fe(a);return{textColorClasses:t,textColorStyles:s}}function xe(e,n){const a=d(()=>({background:q(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=fe(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Xt=[null,"default","comfortable","compact"],me=$({density:{type:String,default:"default",validator:e=>Xt.includes(e)}},"density");function ge(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{densityClasses:d(()=>`${n}--density-${e.density}`)}}const Yt=["elevated","flat","tonal","outlined","text","plain"];function Ye(e,n){return r(Pe,null,[e&&r("span",{key:"overlay",class:`${n}__overlay`},null),r("span",{key:"underlay",class:`${n}__underlay`},null)])}const he=$({color:String,variant:{type:String,default:"elevated",validator:e=>Yt.includes(e)}},"variant");function Je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();const a=d(()=>{const{variant:l}=Se(e);return`${n}--variant-${l}`}),{colorClasses:t,colorStyles:s}=fe(d(()=>{const{variant:l,color:i}=Se(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const Qe=$({divided:Boolean,...Fe(),...me(),...Ue(),...ne(),...G(),...D(),...he()},"v-btn-group"),Ze=R({name:"VBtnGroup",props:Qe(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=H(e),{densityClasses:s}=ge(e),{borderClasses:l}=qe(e),{elevationClasses:i}=Xe(e),{roundedClasses:o}=ae(e);Le({VBtn:{height:"auto",color:z(e,"color"),density:z(e,"density"),flat:!0,variant:z(e,"variant")}}),N(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,l.value,s.value,i.value,o.value]},a))}});function Jt(e){return Ct(e,Object.keys(Ze.props))}const Qt=$({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Zt=$({value:null,disabled:Boolean,selectedClass:String},"group-item");function Kt(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=ee("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=St();Oe(Symbol.for(`${n.description}:id`),s);const l=kt(n,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const i=z(e,"value"),o=d(()=>l.disabled.value||e.disabled);l.register({id:s,value:i,disabled:o},t),te(()=>{l.unregister(s)});const u=d(()=>l.isSelected(s)),f=d(()=>u.value&&[l.selectedClass.value,e.selectedClass]);return O(u,g=>{t.emit("group:selected",{value:g})}),{id:s,isSelected:u,toggle:()=>l.select(s,!u.value),select:g=>l.select(s,g),selectedClass:f,value:i,disabled:o,group:l}}function en(e,n){let a=!1;const t=wt([]),s=We(e,"modelValue",[],c=>c==null?[]:Ke(t,Bt(c)),c=>{const v=nn(t,c);return e.multiple?v:v[0]}),l=ee("useGroup");function i(c,v){const p=c,h=Symbol.for(`${n.description}:id`),_=It(h,l==null?void 0:l.vnode).indexOf(v);_>-1?t.splice(_,0,p):t.push(p)}function o(c){if(a)return;u();const v=t.findIndex(p=>p.id===c);t.splice(v,1)}function u(){const c=t.find(v=>!v.disabled);c&&e.mandatory==="force"&&!s.value.length&&(s.value=[c.id])}$t(()=>{u()}),te(()=>{a=!0});function f(c,v){const p=t.find(h=>h.id===c);if(!(v&&p!=null&&p.disabled))if(e.multiple){const h=s.value.slice(),C=h.findIndex(y=>y===c),_=~C;if(v=v!=null?v:!_,_&&e.mandatory&&h.length<=1||!_&&e.max!=null&&h.length+1>e.max)return;C<0&&v?h.push(c):C>=0&&!v&&h.splice(C,1),s.value=h}else{const h=s.value.includes(c);if(e.mandatory&&h)return;s.value=(v!=null?v:!h)?[c]:[]}}function g(c){if(e.multiple&&Vt('This method is not supported when using "multiple" prop'),s.value.length){const v=s.value[0],p=t.findIndex(_=>_.id===v);let h=(p+c)%t.length,C=t[h];for(;C.disabled&&h!==p;)h=(h+c)%t.length,C=t[h];if(C.disabled)return;s.value=[t[h].id]}else{const v=t.find(p=>!p.disabled);v&&(s.value=[v.id])}}const b={register:i,unregister:o,selected:s,select:f,disabled:z(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:c=>s.value.includes(c),selectedClass:d(()=>e.selectedClass),items:d(()=>t),getItemIndex:c=>tn(t,c)};return Oe(n,b),b}function tn(e,n){const a=Ke(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function Ke(e,n){const a=[];for(let t=0;t<e.length;t++){const s=e[t];s.value!=null?n.find(l=>xt(l,s.value))!=null&&a.push(s.id):n.includes(t)&&a.push(s.id)}return a}function nn(e,n){const a=[];for(let t=0;t<e.length;t++){const s=e[t];n.includes(s.id)&&a.push(s.value!=null?s.value:t)}return a}const et=Symbol.for("vuetify:v-btn-toggle");Et()({name:"VBtnToggle",props:{...Qe(),...Qt()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:l,select:i,selected:o}=en(e,et);return N(()=>{var u;const[f]=Jt(e);return r(Ze,ze({class:"v-btn-toggle"},f),{default:()=>[(u=a.default)==null?void 0:u.call(a,{isSelected:t,next:s,prev:l,select:i,selected:o})]})}),{next:s,prev:l,select:i}}});const an=["x-small","small","default","large","x-large"],le=$({size:{type:[String,Number],default:"default"}},"size");function se(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return Ae(()=>{let a,t;return J(an,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:S(e.size),height:S(e.size)}),{sizeClasses:a,sizeStyles:t}})}const ln=$({color:String,start:Boolean,end:Boolean,icon:Q,...le(),...G({tag:"i"}),...D()},"v-icon"),Y=R({name:"VIcon",props:ln(),setup(e,n){let{attrs:a,slots:t}=n,s;t.default&&(s=d(()=>{var g,b;const c=(g=t.default)==null?void 0:g.call(t);if(!!c)return(b=c.filter(v=>v.type===Lt&&v.children&&typeof v.children=="string")[0])==null?void 0:b.children}));const{themeClasses:l}=H(e),{iconData:i}=Tt(s||e),{sizeClasses:o}=se(e),{textColorClasses:u,textColorStyles:f}=Z(z(e,"color"));return N(()=>{var g;return r(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,o.value,u.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[o.value?void 0:{fontSize:S(e.size),height:S(e.size),width:S(e.size)},f.value],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[(g=t.default)==null?void 0:g.call(t)]})}),{}}});function tt(e){const n=T(),a=T(!1);if(de){const t=new IntersectionObserver(s=>{e==null||e(s,t),a.value=!!s.find(l=>l.isIntersecting)});te(()=>{t.disconnect()}),O(n,(s,l)=>{l&&(t.unobserve(l),a.value=!1),s&&t.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const sn=R({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...le(),...G({tag:"div"}),...D()},setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,l=T(),{themeClasses:i}=H(e),{sizeClasses:o,sizeStyles:u}=se(e),{textColorClasses:f,textColorStyles:g}=Z(z(e,"color")),{textColorClasses:b,textColorStyles:c}=Z(z(e,"bgColor")),{intersectionRef:v,isIntersecting:p}=tt(),{resizeRef:h,contentRect:C}=Mt(),_=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),y=d(()=>Number(e.width)),w=d(()=>u.value?Number(e.size):C.value?C.value.width:Math.max(y.value,32)),I=d(()=>t/(1-y.value/w.value)*2),V=d(()=>y.value/w.value*I.value),P=d(()=>S((100-_.value)/100*s));return zt(()=>{v.value=l.value,h.value=l.value}),N(()=>r(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,o.value,f.value],style:[u.value,g.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[r("circle",{class:["v-progress-circular__underlay",b.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":V.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":V.value,"stroke-dasharray":s,"stroke-dashoffset":P.value},null)]),a.default&&r("div",{class:"v-progress-circular__content"},[a.default({value:_.value})])]})),{}}});const ue=Symbol("rippleStop"),rn=80;function Be(e,n){e.style.transform=n,e.style.webkitTransform=n}function ce(e){return e.constructor.name==="TouchEvent"}function nt(e){return e.constructor.name==="KeyboardEvent"}const on=function(e,n){var a;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,l=0;if(!nt(e)){const c=n.getBoundingClientRect(),v=ce(e)?e.touches[e.touches.length-1]:e;s=v.clientX-c.left,l=v.clientY-c.top}let i=0,o=.3;(a=n._ripple)!=null&&a.circle?(o=.15,i=n.clientWidth/2,i=t.center?i:i+Math.sqrt((s-i)**2+(l-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const u=`${(n.clientWidth-i*2)/2}px`,f=`${(n.clientHeight-i*2)/2}px`,g=t.center?u:`${s-i}px`,b=t.center?f:`${l-i}px`;return{radius:i,scale:o,x:g,y:b,centerX:u,centerY:f}},K={show(e,n){var a;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(n!=null&&(a=n._ripple)!=null&&a.enabled))return;const s=document.createElement("span"),l=document.createElement("span");s.appendChild(l),s.className="v-ripple__container",t.class&&(s.className+=` ${t.class}`);const{radius:i,scale:o,x:u,y:f,centerX:g,centerY:b}=on(e,n,t),c=`${i*2}px`;l.className="v-ripple__animation",l.style.width=c,l.style.height=c,n.appendChild(s);const v=window.getComputedStyle(n);v&&v.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),Be(l,`translate(${u}, ${f}) scale3d(${o},${o},${o})`),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),Be(l,`translate(${g}, ${b}) scale3d(1,1,1)`)},0)},hide(e){var n;if(!(e!=null&&(n=e._ripple)!=null&&n.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const t=a[a.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const s=performance.now()-Number(t.dataset.activated),l=Math.max(250-s,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var i;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((i=t.parentNode)==null?void 0:i.parentNode)===e&&e.removeChild(t.parentNode)},300)},l)}};function at(e){return typeof e>"u"||!!e}function j(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ue])){if(e[ue]=!0,ce(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||nt(e),a._ripple.class&&(n.class=a._ripple.class),ce(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{K.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;a!=null&&(t=a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},rn)}else K.show(e,a,n)}}function Ie(e){e[ue]=!0}function B(e){const n=e.currentTarget;if(!(!n||!n._ripple)){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{B(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),K.hide(n)}}function lt(e){const n=e.currentTarget;!n||!n._ripple||(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let F=!1;function st(e){!F&&(e.keyCode===ke.enter||e.keyCode===ke.space)&&(F=!0,j(e))}function it(e){F=!1,B(e)}function rt(e){F&&(F=!1,B(e))}function ot(e,n,a){var i;const{value:t,modifiers:s}=n,l=at(t);if(l||K.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,Rt(t)&&t.class&&(e._ripple.class=t.class),l&&!a){if(s.stop){e.addEventListener("touchstart",Ie,{passive:!0}),e.addEventListener("mousedown",Ie);return}e.addEventListener("touchstart",j,{passive:!0}),e.addEventListener("touchend",B,{passive:!0}),e.addEventListener("touchmove",lt,{passive:!0}),e.addEventListener("touchcancel",B),e.addEventListener("mousedown",j),e.addEventListener("mouseup",B),e.addEventListener("mouseleave",B),e.addEventListener("keydown",st),e.addEventListener("keyup",it),e.addEventListener("blur",rt),e.addEventListener("dragstart",B,{passive:!0})}else!l&&a&&ut(e)}function ut(e){e.removeEventListener("mousedown",j),e.removeEventListener("touchstart",j),e.removeEventListener("touchend",B),e.removeEventListener("touchmove",lt),e.removeEventListener("touchcancel",B),e.removeEventListener("mouseup",B),e.removeEventListener("mouseleave",B),e.removeEventListener("keydown",st),e.removeEventListener("keyup",it),e.removeEventListener("dragstart",B),e.removeEventListener("blur",rt)}function un(e,n){ot(e,n,!1)}function cn(e){delete e._ripple,ut(e)}function dn(e,n){if(n.value===n.oldValue)return;const a=at(n.oldValue);ot(e,n,a)}const vn={mounted:un,unmounted:cn,updated:dn};const Ve={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ct=$({location:String},"location");function dt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Me();return{locationStyles:d(()=>{if(!e.location)return{};const{side:l,align:i}=Ot(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function o(f){return a?a(f):0}const u={};return l!=="center"&&(n?u[Ve[l]]=`calc(100% - ${o(l)}px)`:u[l]=0),i!=="center"?n?u[Ve[i]]=`calc(100% - ${o(i)}px)`:u[i]=0:(l==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),u})}}const fn=R({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ct({location:"top"}),...ne(),...G(),...D()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=We(e,"modelValue"),{isRtl:s}=Me(),{themeClasses:l}=H(e),{locationStyles:i}=dt(e),{textColorClasses:o,textColorStyles:u}=Z(e,"color"),{backgroundColorClasses:f,backgroundColorStyles:g}=xe(d(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:c}=xe(e,"color"),{roundedClasses:v}=ae(e),{intersectionRef:p,isIntersecting:h}=tt(),C=d(()=>parseInt(e.max,10)),_=d(()=>parseInt(e.height,10)),y=d(()=>parseFloat(e.bufferValue)/C.value*100),w=d(()=>parseFloat(t.value)/C.value*100),I=d(()=>s.value!==e.reverse),V=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),P=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function M(m){if(!p.value)return;const{left:k,right:x,width:L}=p.value.getBoundingClientRect(),A=I.value?L-m.clientX+(x-L):m.clientX-k;t.value=Math.round(A/L*C.value)}return N(()=>r(e.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&h.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,l.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?S(_.value):0,"--v-progress-linear-height":S(_.value),...i.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:w.value,onClick:e.clickable&&M},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...u.value,[I.value?"left":"right"]:S(-_.value),borderTop:`${S(_.value/2)} dotted`,opacity:P.value,top:`calc(50% - ${S(_.value/4)})`,width:S(100-y.value,"%"),"--v-progress-linear-stream-to":S(_.value*(I.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",f.value],style:[g.value,{opacity:P.value,width:S(e.stream?y.value:100,"%")}]},null),r(Re,{name:V.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>r("div",{key:m,class:["v-progress-linear__indeterminate",m,b.value],style:c.value},null))]):r("div",{class:["v-progress-linear__determinate",b.value],style:[c.value,{width:S(w.value,"%")}]},null)]}),a.default&&r("div",{class:"v-progress-linear__content"},[a.default({value:w.value,buffer:y.value})])]})),{}}}),mn=$({loading:[Boolean,String]},"loader");function gn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{loaderClasses:d(()=>({[`${n}--loading`]:e.loading}))}}function Vn(e,n){var a;let{slots:t}=n;return r("div",{class:`${e.name}__loader`},[((a=t.default)==null?void 0:a.call(t,{color:e.color,isActive:e.active}))||r(fn,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const hn=["static","relative","fixed","absolute","sticky"],bn=$({position:{type:String,validator:e=>hn.includes(e)}},"position");function yn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{positionClasses:d(()=>e.position?`${n}--${e.position}`:void 0)}}function En(){var e,n;return(e=ee("useRouter"))==null||(n=e.proxy)==null?void 0:n.$router}function _n(e,n){const a=Nt("RouterLink"),t=d(()=>!!(e.href||e.to)),s=d(()=>(t==null?void 0:t.value)||we(n,"click")||we(e,"click"));if(typeof a=="string")return{isLink:t,isClickable:s,href:z(e,"href")};const l=e.to?a.useLink(e):void 0;return{isLink:t,isClickable:s,route:l==null?void 0:l.route,navigate:l==null?void 0:l.navigate,isActive:l&&d(()=>{var i,o;return e.exact?(i=l.isExactActive)==null?void 0:i.value:(o=l.isActive)==null?void 0:o.value}),href:d(()=>e.to?l==null?void 0:l.route.value.href:e.href)}}const pn=$({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let re=!1;function Tn(e,n){let a=!1,t,s;Te&&(ve(()=>{window.addEventListener("popstate",l),t=e==null?void 0:e.beforeEach((i,o,u)=>{re?a?n(u):u():setTimeout(()=>a?n(u):u()),re=!0}),s=e==null?void 0:e.afterEach(()=>{re=!1})}),Pt(()=>{var i,o;window.removeEventListener("popstate",l),(i=t)==null||i(),(o=s)==null||o()}));function l(i){var o;(o=i.state)!=null&&o.replaced||(a=!0,setTimeout(()=>a=!1))}}function Cn(e,n){O(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&ve(()=>{n(!0)})},{immediate:!0})}const Ln=R({name:"VBtn",directives:{Ripple:vn},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:et},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Q,appendIcon:Q,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Fe(),...ne(),...me(),...He(),...Ue(),...Zt(),...mn(),...ct(),...bn(),...pn(),...le(),...G({tag:"button"}),...D(),...he({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=H(e),{borderClasses:l}=qe(e),{colorClasses:i,colorStyles:o,variantClasses:u}=Je(e),{densityClasses:f}=ge(e),{dimensionStyles:g}=Ge(e),{elevationClasses:b}=Xe(e),{loaderClasses:c}=gn(e),{locationStyles:v}=dt(e),{positionClasses:p}=yn(e),{roundedClasses:h}=ae(e),{sizeClasses:C,sizeStyles:_}=se(e),y=Kt(e,e.symbol,!1),w=_n(e,a),I=d(()=>{if(e.active!==void 0)return e.active;if(w.isLink.value){var m;return(m=w.isActive)==null?void 0:m.value}return y==null?void 0:y.isSelected.value}),V=d(()=>(y==null?void 0:y.disabled.value)||e.disabled),P=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),M=d(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});return Cn(w,y==null?void 0:y.select),N(()=>{var m,k,x,L,A,be;const ye=w.isLink.value?"a":e.tag,vt=!!(e.prependIcon||t.prepend),ft=!!(e.appendIcon||t.append),_e=!!(e.icon&&e.icon!==!0),pe=(y==null?void 0:y.isSelected.value)&&(!w.isLink.value||((m=w.isActive)==null?void 0:m.value))||!y||((k=w.isActive)==null?void 0:k.value);return oe(r(ye,{type:ye==="a"?void 0:"button",class:["v-btn",y==null?void 0:y.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":P.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},s.value,l.value,pe?i.value:void 0,f.value,b.value,c.value,p.value,h.value,C.value,u.value],style:[pe?o.value:void 0,g.value,v.value,_.value],disabled:V.value||void 0,href:w.href.value,onClick:U=>{var E;V.value||((E=w.navigate)==null||E.call(w,U),y==null||y.toggle())},value:M.value},{default:()=>{var U;return[Ye(!0,"v-btn"),!e.icon&&vt&&r(ie,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var E;return[r("span",{class:"v-btn__prepend"},[(E=(x=t.prepend)==null?void 0:x.call(t))!=null?E:r(Y,null,null)])]}}),r("span",{class:"v-btn__content","data-no-activator":""},[r(ie,{key:"content",defaults:{VIcon:{icon:_e?e.icon:void 0}}},{default:()=>{var E;return[(E=(L=t.default)==null?void 0:L.call(t))!=null?E:_e&&r(Y,{key:"icon"},null)]}})]),!e.icon&&ft&&r(ie,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var E;return[r("span",{class:"v-btn__append"},[(E=(A=t.append)==null?void 0:A.call(t))!=null?E:r(Y,null,null)])]}}),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[(U=(be=t.loader)==null?void 0:be.call(t))!=null?U:r(sn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ne("ripple"),!V.value&&e.ripple,null]])}),{}}}),zn=Wt("flex-grow-1","div","VSpacer");const Sn=$({start:Boolean,end:Boolean,icon:Q,image:String,...me(),...ne(),...le(),...G(),...D(),...he({variant:"flat"})},"v-avatar"),Rn=R({name:"VAvatar",props:Sn(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=H(e),{colorClasses:s,colorStyles:l,variantClasses:i}=Je(e),{densityClasses:o}=ge(e),{roundedClasses:u}=ae(e),{sizeClasses:f,sizeStyles:g}=se(e);return N(()=>{var b;return r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,o.value,u.value,f.value,i.value],style:[l.value,g.value]},{default:()=>[e.image?r(Ut,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(Y,{key:"icon",icon:e.icon},null):(b=a.default)==null?void 0:b.call(a),Ye(!1,"v-avatar")]})}),{}}});export{$e as A,Qt as B,en as C,Zt as D,le as E,se as F,Kt as G,Ot as H,wn as I,$n as J,xn as K,Bn as L,qt as M,Tn as N,X as O,zn as P,mn as Q,vn as R,gn as S,Vn as T,Ft as U,ie as V,ct as W,bn as X,dt as Y,yn as Z,In as _,N as a,Fe as b,Ue as c,ne as d,xe as e,qe as f,Xe as g,ae as h,Ut as i,Ln as j,Z as k,Wt as l,G as m,me as n,He as o,pn as p,he as q,_n as r,Je as s,ge as t,Mt as u,Ge as v,Ye as w,Rn as x,Y as y,En as z};
