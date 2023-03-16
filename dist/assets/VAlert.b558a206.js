import{l as I,n as A,o as L,a as w,U as R,W as z,b as E,c as F,q as O,s as j,t as q,v as M,e as N,X as U,Y as W,f as X,k as Y,w as Z,i as u,y as G,V as H}from"./VAvatar.22a83401.js";import{d as J,I as K,m as Q,D as p,c as o,p as ee,t as te,Z as ae,a}from"./index.8ad9c49b.js";const le=I("v-alert-title"),se=["success","info","warning","error"],re=J({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:K,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>se.includes(e)},...A(),...L(),...w(),...R(),...z(),...E(),...F(),...Q(),...O({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const n=p(e,"modelValue"),s=o(()=>{var l;if(e.icon!==!1)return e.type?(l=e.icon)!=null?l:`$${e.type}`:e.icon}),v=o(()=>{var l;return{color:(l=e.color)!=null?l:e.type,variant:e.variant}}),{themeClasses:m}=ee(e),{colorClasses:y,colorStyles:f,variantClasses:b}=j(v),{densityClasses:V}=q(e),{dimensionStyles:k}=M(e),{elevationClasses:C}=N(e),{locationStyles:P}=U(e),{positionClasses:x}=W(e),{roundedClasses:S}=X(e),{textColorClasses:_,textColorStyles:g}=Y(te(e,"borderColor")),{t:T}=ae(),r=o(()=>({"aria-label":T(e.closeLabel),onClick(l){n.value=!1}}));return()=>{var l,i;const $=!!(t.prepend||s.value),h=!!(t.title||e.title),B=!!(e.text||t.text),D=!!(t.close||e.closable);return n.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,y.value,V.value,C.value,x.value,S.value,b.value],style:[f.value,k.value,P.value],role:"alert"},{default:()=>[Z(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",_.value],style:g.value},null),$&&a(u,{key:"prepend",defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},{default:()=>[a("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():s.value&&a(G,null,null)])]}),a("div",{class:"v-alert__content"},[h&&a(le,{key:"title"},{default:()=>[t.title?t.title():e.title]}),B&&(t.text?t.text():e.text),(l=t.default)==null?void 0:l.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),D&&a(u,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[a("div",{class:"v-alert__close"},[(c=(i=t.close)==null?void 0:i.call(t,{props:r.value}))!=null?c:a(H,r.value,null)])]}})]})}}});export{re as V};