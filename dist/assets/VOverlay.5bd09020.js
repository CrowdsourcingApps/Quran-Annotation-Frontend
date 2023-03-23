import{x as De,m as B,w as q,T as oe,p as W,ah as N,r as C,c as P,i as Oe,A as L,aq as se,J as K,av as Re,g as ce,aw as Pe,N as F,S as Me,ac as ue,am as He,ax as $e,b as D,ay as ve,H as Ie,o as Ne,a as Ce,d as Ve,D as qe,n as We,l as ze,v as je,q as Ye,G as Ge,t as Ue,az as Q,aA as Xe,y as Je,z as Ke,B as Qe,L as Ze,u as et}from"./index.ffdc5a0c.js";import{a as G,d as tt,s as ae,b as nt,n as Ae,B as Z,g as de}from"./forwardRefs.54bb1675.js";import{N as me,O as ee,P as te,Q as ye,S as ge,o as ot,H as at,e as it,v as rt,z as lt,a as st,M as ct,T as ut}from"./VAvatar.85c12dcd.js";function Le(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ft(e){for(;e;){if(fe(e))return e;e=e.parentElement}return document.scrollingElement}function X(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(fe(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function fe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function vt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Yt=De({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,c){var r;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),a.style.visibility="";const{x:l,y:u,sx:f,sy:s,speed:d}=we(e.target,a),g=G(a,[{transform:`translate(${l}px, ${u}px) scale(${f}, ${s})`,opacity:0},{}],{duration:225*d,easing:tt});(r=he(a))==null||r.forEach(m=>{G(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*d,easing:ae})}),g.finished.then(()=>c())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,c){var r;await new Promise(m=>requestAnimationFrame(m));const{x:l,y:u,sx:f,sy:s,speed:d}=we(e.target,a);G(a,[{},{transform:`translate(${l}px, ${u}px) scale(${f}, ${s})`,opacity:0}],{duration:125*d,easing:nt}).finished.then(()=>c()),(r=he(a))==null||r.forEach(m=>{G(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*d,easing:ae})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?B(oe,q({name:"dialog-transition"},o,{css:!1}),n):B(oe,{name:"dialog-transition"},n)}});function he(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function we(e,t){const n=e.getBoundingClientRect(),o=Ae(t),[a,c]=getComputedStyle(t).transformOrigin.split(" ").map(S=>parseFloat(S)),[r,l]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=n.left+n.width/2;r==="left"||l==="left"?u-=n.width/2:(r==="right"||l==="right")&&(u+=n.width/2);let f=n.top+n.height/2;r==="top"||l==="top"?f-=n.height/2:(r==="bottom"||l==="bottom")&&(f+=n.height/2);const s=n.width/o.width,d=n.height/o.height,g=Math.max(1,s,d),m=s/g||0,y=d/g||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),O=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(a+o.left),y:f-(c+o.top),sx:m,sy:y,speed:O}}const dt=W({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function mt(e,t){const n={},o=a=>()=>{if(!N)return Promise.resolve(!0);const c=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(r=>{var u;const l=parseInt((u=e[a])!=null?u:0,10);n[a]=window.setTimeout(()=>{t==null||t(c),r(c)},l)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const yt=Symbol.for("vuetify:v-menu"),gt=W({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...dt()},"v-overlay-activator");function ht(e,t){let{isActive:n,isTop:o}=t;const a=C();let c=!1,r=!1,l=!0;const u=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:s,runCloseDelay:d}=mt(e,i=>{i===(e.openOnHover&&c||u.value&&r)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==i&&(l=!0),n.value=i)}),g={click:i=>{i.stopPropagation(),a.value=i.currentTarget||i.target,n.value=!n.value},mouseenter:i=>{c=!0,a.value=i.currentTarget||i.target,s()},mouseleave:i=>{c=!1,d()},focus:i=>{Me&&!i.target.matches(":focus-visible")||(r=!0,i.stopPropagation(),a.value=i.currentTarget||i.target,s())},blur:i=>{r=!1,i.stopPropagation(),d()}},m=P(()=>{const i={};return f.value&&(i.click=g.click),e.openOnHover&&(i.mouseenter=g.mouseenter,i.mouseleave=g.mouseleave),u.value&&(i.focus=g.focus,i.blur=g.blur),i}),y=P(()=>{const i={};if(e.openOnHover&&(i.mouseenter=()=>{c=!0,s()},i.mouseleave=()=>{c=!1,d()}),e.closeOnContentClick){const M=Oe(yt,null);i.click=()=>{n.value=!1,M==null||M.closeParents()}}return i}),v=P(()=>{const i={};return e.openOnHover&&(i.mouseenter=()=>{l&&(c=!0,l=!1,s())},i.mouseleave=()=>{c=!1,d()}),i});L(o,i=>{i&&(e.openOnHover&&!c&&(!u.value||!r)||u.value&&!r&&(!e.openOnHover||!c))&&(n.value=!1)});const O=C();se(()=>{!O.value||K(()=>{const i=O.value;a.value=Re(i)?i.$el:i})});const S=ce("useActivator");let E;return L(()=>!!e.activator,i=>{i&&N?(E=Pe(),E.run(()=>{wt(e,S,{activatorEl:a,activatorEvents:m})})):E&&E.stop()},{flush:"post",immediate:!0}),F(()=>{var i;(i=E)==null||i.stop()}),{activatorEl:a,activatorRef:O,activatorEvents:m,contentEvents:y,scrimEvents:v}}function wt(e,t,n){let{activatorEl:o,activatorEvents:a}=n;L(()=>e.activator,(u,f)=>{if(f&&u!==f){const s=l(f);s&&r(s)}u&&K(()=>c())},{immediate:!0}),L(()=>e.activatorProps,()=>{c()}),F(()=>{r()});function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!u||(Object.entries(a.value).forEach(s=>{let[d,g]=s;u.addEventListener(d,g)}),Object.keys(f).forEach(s=>{f[s]==null?u.removeAttribute(s):u.setAttribute(s,f[s])}))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!u||(Object.entries(a.value).forEach(s=>{let[d,g]=s;u.removeEventListener(d,g)}),Object.keys(f).forEach(s=>{u.removeAttribute(s)}))}function l(){var u;let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,s;if(f)if(f==="parent"){var d,g;let m=t==null||(d=t.proxy)==null||(g=d.$el)==null?void 0:g.parentNode;for(;m.hasAttribute("data-no-activator");)m=m.parentNode;s=m}else typeof f=="string"?s=document.querySelector(f):"$el"in f?s=f.$el:s=f;return o.value=((u=s)==null?void 0:u.nodeType)===Node.ELEMENT_NODE?s:null,o.value}}const bt=W({eager:Boolean},"lazy");function pt(e,t){const n=C(!1),o=P(()=>n.value||e.eager||t.value);L(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:o,onAfterLeave:a}}function ne(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Et(e,t){return{x:e.x-t.x,y:e.y-t.y}}function be(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,a=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,c=n==="top"?0:n==="bottom"?t.height:n;return ne({x:a,y:c},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,a=n==="left"?0:n==="right"?t.width:n,c=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ne({x:a,y:c},t)}return ne({x:t.width/2,y:t.height/2},t)}const Te={static:kt,connected:Pt},St=W({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Te},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function xt(e,t){const n=C({}),o=C();N&&(ue(()=>!!(t.isActive.value&&e.locationStrategy),c=>{if(L(()=>e.locationStrategy,c),F(()=>{o.value=void 0}),typeof e.locationStrategy=="function"){var r;o.value=(r=e.locationStrategy(t,e,n))==null?void 0:r.updateLocation}else{var l;o.value=(l=Te[e.locationStrategy](t,e,n))==null?void 0:l.updateLocation}}),window.addEventListener("resize",a,{passive:!0}),F(()=>{window.removeEventListener("resize",a),o.value=void 0}));function a(c){var r;(r=o.value)==null||r.call(o,c)}return{contentStyles:n,updateLocation:o}}function kt(){}function Ot(e){const t=Ae(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Pt(e,t,n){vt(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:c}=He(()=>{const y=me(t.location,e.isRtl.value),v=t.origin==="overlap"?y:t.origin==="auto"?ee(y):me(t.origin,e.isRtl.value);return y.side===v.side&&y.align===te(v).align?{preferredAnchor:ye(y),preferredOrigin:ye(v)}:{preferredAnchor:y,preferredOrigin:v}}),[r,l,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>P(()=>{const v=parseFloat(t[y]);return isNaN(v)?1/0:v})),s=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const y=t.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let d=!1;const g=new ResizeObserver(()=>{d&&m()});L([e.activatorEl,e.contentEl],(y,v)=>{let[O,S]=y,[E,i]=v;E&&g.unobserve(E),O&&g.observe(O),i&&g.unobserve(i),S&&g.observe(S)},{immediate:!0}),F(()=>{g.disconnect()});function m(){if(d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const y=e.activatorEl.value.getBoundingClientRect(),v=Ot(e.contentEl.value),O=X(e.contentEl.value),S=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=O.reduce((x,p)=>{const h=p.getBoundingClientRect(),b=new Z({x:p===document.documentElement?0:h.x,y:p===document.documentElement?0:h.y,width:p.clientWidth,height:p.clientHeight});return x?new Z({x:Math.max(x.left,b.left),y:Math.max(x.top,b.top),width:Math.min(x.right,b.right)-Math.max(x.left,b.left),height:Math.min(x.bottom,b.bottom)-Math.max(x.top,b.top)}):b},void 0);E.x+=S,E.y+=S,E.width-=S*2,E.height-=S*2;let i={anchor:a.value,origin:c.value};function M(x){const p=new Z(v),h=be(x.anchor,y),b=be(x.origin,p);let{x:A,y:T}=Et(h,b);switch(x.anchor.side){case"top":T-=s.value[0];break;case"bottom":T+=s.value[0];break;case"left":A-=s.value[0];break;case"right":A+=s.value[0];break}switch(x.anchor.align){case"top":T-=s.value[1];break;case"bottom":T+=s.value[1];break;case"left":A-=s.value[1];break;case"right":A+=s.value[1];break}return p.x+=A,p.y+=T,p.width=Math.min(p.width,u.value),p.height=Math.min(p.height,f.value),{overflows:de(p,E),x:A,y:T}}let H=0,$=0;const I={x:0,y:0},z={x:!1,y:!1};let j=-1;for(;;){if(j++>10){$e("Infinite loop detected in connectedLocationStrategy");break}const{x,y:p,overflows:h}=M(i);H+=x,$+=p,v.x+=x,v.y+=p;{const b=ge(i.anchor),A=h.x.before||h.x.after,T=h.y.before||h.y.after;let V=!1;if(["x","y"].forEach(k=>{if(k==="x"&&A&&!z.x||k==="y"&&T&&!z.y){const w={anchor:{...i.anchor},origin:{...i.origin}},_=k==="x"?b==="y"?te:ee:b==="y"?ee:te;w.anchor=_(w.anchor),w.origin=_(w.origin);const{overflows:U}=M(w);(U[k].before<=h[k].before&&U[k].after<=h[k].after||U[k].before+U[k].after<(h[k].before+h[k].after)/2)&&(i=w,V=z[k]=!0)}}),V)continue}h.x.before&&(H+=h.x.before,v.x+=h.x.before),h.x.after&&(H-=h.x.after,v.x-=h.x.after),h.y.before&&($+=h.y.before,v.y+=h.y.before),h.y.after&&($-=h.y.after,v.y-=h.y.after);{const b=de(v,E);I.x=E.width-b.x.before-b.x.after,I.y=E.height-b.y.before-b.y.after,H+=b.x.before,v.x+=b.x.before,$+=b.y.before,v.y+=b.y.before}break}const R=ge(i.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${i.anchor.side} ${i.anchor.align}`,transformOrigin:`${i.origin.side} ${i.origin.align}`,top:D(pe($)),left:D(pe(H)),minWidth:D(R==="y"?Math.min(r.value,y.width):r.value),maxWidth:D(Ee(ve(I.x,r.value===1/0?0:r.value,u.value))),maxHeight:D(Ee(ve(I.y,l.value===1/0?0:l.value,f.value)))}),{available:I,contentBox:v}}return L(()=>[a.value,c.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>m()),K(()=>{const y=m();if(!y)return;const{available:v,contentBox:O}=y;O.height>v.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function pe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ee(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ie=!0;const J=[];function Ct(e){!ie||J.length?(J.push(e),re()):(ie=!1,e(),re())}let Se=-1;function re(){cancelAnimationFrame(Se),Se=requestAnimationFrame(()=>{const e=J.shift();e&&e(),J.length?re():ie=!0})}const le={none:null,close:Tt,block:Bt,reposition:Ft},At=W({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in le}},"v-overlay-scroll-strategies");function Lt(e,t){if(!N)return;let n;se(async()=>{var o;(o=n)==null||o.stop(),t.isActive.value&&e.scrollStrategy&&(n=Pe(),await K(),n.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t,e,n);else{var a;(a=le[e.scrollStrategy])==null||a.call(le,t,e,n)}}))}),F(()=>{var o;(o=n)==null||o.stop()})}function Tt(e){var n;function t(o){e.isActive.value=!1}Be((n=e.activatorEl.value)!=null?n:e.contentEl.value,t)}function Bt(e,t){var n;const o=(n=e.root.value)==null?void 0:n.offsetParent,a=[...new Set([...X(e.activatorEl.value,t.contained?o:void 0),...X(e.contentEl.value,t.contained?o:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),c=window.innerWidth-document.documentElement.offsetWidth,r=(l=>fe(l)&&l)(o||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((l,u)=>{l.style.setProperty("--v-body-scroll-x",D(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",D(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",D(c)),l.classList.add("v-overlay-scroll-blocked")}),F(()=>{a.forEach((l,u)=>{const f=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-f,l.scrollTop=-s}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Ft(e,t,n){let o=!1,a=-1,c=-1;function r(l){Ct(()=>{var u,f;const s=performance.now();(u=(f=e.updateLocation).value)==null||u.call(f,l),o=(performance.now()-s)/(1e3/60)>2})}c=requestIdleCallback(()=>{n.run(()=>{var l;Be((l=e.activatorEl.value)!=null?l:e.contentEl.value,u=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{r(u)})})):r(u)})})}),F(()=>{cancelIdleCallback(c),cancelAnimationFrame(a)})}function Be(e,t){const n=[document,...X(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),F(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function _t(){if(!N)return C(!1);const{ssr:e}=Ie();if(e){const t=C(!1);return Ne(()=>{t.value=!0}),t}else return C(!0)}function Dt(){const t=ce("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const xe=Symbol.for("vuetify:stack"),Y=Ce([]);function Rt(e,t,n){const o=ce("useStack"),a=!n,c=Oe(xe,void 0),r=Ce({activeChildren:new Set});Ve(xe,r);const l=C(+t.value);ue(e,()=>{var s;const d=(s=Y.at(-1))==null?void 0:s[1];l.value=d?d+10:+t.value,a&&Y.push([o.uid,l.value]),c==null||c.activeChildren.add(o.uid),F(()=>{if(a){const g=Y.findIndex(m=>m[0]===o.uid);Y.splice(g,1)}c==null||c.activeChildren.delete(o.uid)})});const u=C(!0);a&&se(()=>{var s;const d=((s=Y.at(-1))==null?void 0:s[0])===o.uid;setTimeout(()=>u.value=d)});const f=P(()=>!r.activeChildren.size);return{globalTop:qe(u),localTop:f,stackStyles:P(()=>({zIndex:l.value}))}}function Mt(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!N)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let a=o.querySelector(".v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Ht(){return!0}function Fe(e,t,n){if(!e||_e(e,n)===!1)return!1;const o=Le(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(c=>c==null?void 0:c.contains(e.target))}function _e(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Ht)(e)}function $t(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Fe(e,t,n)&&setTimeout(()=>{_e(e,n)&&o&&o(e)},0)}function ke(e,t){const n=Le(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const It={mounted(e,t){const n=a=>$t(a,e,t),o=a=>{e._clickOutside.lastMousedownWasOutside=Fe(a,e,t)};ke(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){!e._clickOutside||(ke(e,n=>{var o;if(!n||!((o=e._clickOutside)!=null&&o[t.instance.$.uid]))return;const{onClick:a,onMousedown:c}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",a,!0),n.removeEventListener("mousedown",c,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Nt(e){const{modelValue:t,color:n,...o}=e;return B(oe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&B("div",q({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Vt=W({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...gt(),...ot(),...bt(),...St(),...At(),...We(),...at()},"v-overlay"),qt=ze()({name:"VOverlay",directives:{ClickOutside:It},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Vt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:a}=t;const c=je(e,"modelValue"),r=P({get:()=>c.value,set:w=>{w&&e.disabled||(c.value=w)}}),{teleportTarget:l}=Mt(P(()=>e.attach||e.contained)),{themeClasses:u}=Ye(e),{rtlClasses:f,isRtl:s}=Ge(),{hasContent:d,onAfterLeave:g}=pt(e,r),m=it(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:y,localTop:v,stackStyles:O}=Rt(r,Ue(e,"zIndex"),e._disableGlobalStack),{activatorEl:S,activatorRef:E,activatorEvents:i,contentEvents:M,scrimEvents:H}=ht(e,{isActive:r,isTop:v}),{dimensionStyles:$}=rt(e),I=_t(),{scopeId:z}=Dt();L(()=>e.disabled,w=>{w&&(r.value=!1)});const j=C(),R=C(),{contentStyles:x,updateLocation:p}=xt(e,{isRtl:s,contentEl:R,activatorEl:S,isActive:r});Lt(e,{root:j,contentEl:R,activatorEl:S,isActive:r,updateLocation:p});function h(w){a("click:outside",w),e.persistent?k():r.value=!1}function b(){return r.value&&y.value}N&&L(r,w=>{w?window.addEventListener("keydown",A):window.removeEventListener("keydown",A)},{immediate:!0});function A(w){w.key==="Escape"&&y.value&&(e.persistent?k():r.value=!1)}const T=lt();ue(()=>e.closeOnBack,()=>{ut(T,w=>{y.value&&r.value?(w(!1),e.persistent?k():r.value=!1):w()})});const V=C();L(()=>r.value&&(e.absolute||e.contained)&&l.value==null,w=>{if(w){const _=ft(j.value);_&&_!==document.scrollingElement&&(V.value=_.scrollTop)}});function k(){e.noClickAnimation||R.value&&G(R.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ae})}return st(()=>{var w,_;return B(Ze,null,[(w=n.activator)==null?void 0:w.call(n,{isActive:r.value,props:q({ref:E},Q(i.value),e.activatorProps)}),I.value&&B(Xe,{disabled:!l.value,to:l.value},{default:()=>[d.value&&B("div",q({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},u.value,f.value],style:[O.value,{top:D(V.value)}],ref:j},z,o),[B(Nt,q({color:m,modelValue:r.value&&!!e.scrim},Q(H.value)),null),B(ct,{appear:!0,persisted:!0,transition:e.transition,target:S.value,onAfterLeave:()=>{g(),a("afterLeave")}},{default:()=>[Je(B("div",q({ref:R,class:["v-overlay__content",e.contentClass],style:[$.value,x.value]},Q(M.value),e.contentProps),[(_=n.default)==null?void 0:_.call(n,{isActive:r})]),[[Ke,r.value],[Qe("click-outside"),{handler:h,closeConditional:b,include:()=>[S.value]}]])]})])]})])}),{activatorEl:S,animateClick:k,contentEl:R,globalTop:y,localTop:v,updateLocation:p}}});function Gt(e){return et(e,Object.keys(qt.props))}export{Yt as V,yt as a,qt as b,Gt as f,Vt as m,Dt as u};
