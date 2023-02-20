import{m as S,I as ee,t as T,y as te,c as b,v as D,u as I,R as ae,n as l,r as le,a5 as V,aa as w,a7 as c,a8 as p,a9 as g,a3 as $,ab as B,ac as se,ae as oe}from"./index.9111aaff.js";import{j as ne,k as re,f as ie,i as k,_ as de}from"./VTextField.b1ef0c78.js";import{l as ue,n as me,o as R,c as q,W as A,X as U,d as z,m as N,q as ce,s as ve,t as he,v as j,g as E,Y as O,Z as W,h as X,k as ge,w as fe,V as F,y as pe,j as C,a as ye,b as be,e as Ve,f as we,_ as $e,P as ke}from"./VAvatar.6dd0a183.js";import{V as Ce}from"./VCard.bc487ea8.js";class Se{constructor(a,t){this.email=a,this.password=t}}const Pe=ue("v-alert-title"),Le=["success","info","warning","error"],Me=S({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:ee,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Le.includes(e)},...me(),...R(),...q(),...A(),...U(),...z(),...N(),...T(),...ce({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const m=te(e,"modelValue"),n=b(()=>{var u;if(e.icon!==!1)return e.type?(u=e.icon)!=null?u:`$${e.type}`:e.icon}),s=b(()=>{var u;return{color:(u=e.color)!=null?u:e.type,variant:e.variant}}),{themeClasses:o}=D(e),{colorClasses:v,colorStyles:i,variantClasses:d}=ve(s),{densityClasses:r}=he(e),{dimensionStyles:h}=j(e),{elevationClasses:y}=E(e),{locationStyles:f}=O(e),{positionClasses:Y}=W(e),{roundedClasses:Z}=X(e),{textColorClasses:G,textColorStyles:H}=ge(I(e,"borderColor")),{t:J}=ae(),P=b(()=>({"aria-label":J(e.closeLabel),onClick(u){m.value=!1}}));return()=>{var u,L;const K=!!(t.prepend||n.value),Q=!!(t.title||e.title),_=!!(e.text||t.text),x=!!(t.close||e.closable);return m.value&&l(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},o.value,v.value,r.value,y.value,Y.value,Z.value,d.value],style:[i.value,h.value,f.value],role:"alert"},{default:()=>[fe(!1,"v-alert"),e.border&&l("div",{key:"border",class:["v-alert__border",G.value],style:H.value},null),K&&l(F,{key:"prepend",defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},{default:()=>[l("div",{class:"v-alert__prepend"},[t.prepend?t.prepend():n.value&&l(pe,null,null)])]}),l("div",{class:"v-alert__content"},[Q&&l(Pe,{key:"title"},{default:()=>[t.title?t.title():e.title]}),_&&(t.text?t.text():e.text),(u=t.default)==null?void 0:u.call(t)]),t.append&&l("div",{key:"append",class:"v-alert__append"},[t.append()]),x&&l(F,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var M;return[l("div",{class:"v-alert__close"},[(M=(L=t.close)==null?void 0:L.call(t,{props:P.value}))!=null?M:l(C,P.value,null)])]}})]})}}}),Be=S({name:"VForm",props:{...ne()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,a){let{slots:t,emit:m}=a;const n=re(e),s=le();function o(i){i.preventDefault(),n.reset()}function v(i){const d=i,r=n.validate();d.then=r.then.bind(r),d.catch=r.catch.bind(r),d.finally=r.finally.bind(r),m("submit",d),d.defaultPrevented||r.then(h=>{let{valid:y}=h;if(y){var f;(f=s.value)==null||f.submit()}}),d.preventDefault()}return ye(()=>{var i;return l("form",{ref:s,class:"v-form",novalidate:!0,onReset:o,onSubmit:v},[(i=t.default)==null?void 0:i.call(t,n)])}),ie(n,s)}});const Fe=S({name:"VSheet",props:{color:String,...be(),...R(),...q(),...A(),...U(),...z(),...N(),...T()},setup(e,a){let{slots:t}=a;const{themeClasses:m}=D(e),{backgroundColorClasses:n,backgroundColorStyles:s}=Ve(I(e,"color")),{borderClasses:o}=we(e),{dimensionStyles:v}=j(e),{elevationClasses:i}=E(e),{locationStyles:d}=O(e),{positionClasses:r}=W(e),{roundedClasses:h}=X(e);return()=>l(e.tag,{class:["v-sheet",m.value,n.value,o.value,i.value,r.value,h.value],style:[s.value,v.value,d.value]},t)}}),Te={data:()=>({form:!1,user:new Se(null,null),repeat_password:null,loading:!1,show1:!1,show2:!1,isLoginMode:!0,message:null}),computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/")},methods:{onSubmit(){!this.form||(this.message=null,this.loading=!0,this.isLoginMode?this.$store.dispatch("auth/login",this.user).then(()=>{this.$router.push("/")},e=>{this.loading=!1,e.response.status===401?this.message=this.$t("login.401_message"):this.message=this.$t("error")}):this.$store.dispatch("auth/register",this.user).then(()=>{this.$router.push("/")},e=>{this.loading=!1,e.response.status===400?this.message=this.$t("login.400_message"):this.message=this.$t("error")}))},required(e){return!!e||this.$t("login.required")},valid_mail(e){return/.+@.+\..+/.test(e)||this.$t("login.notvalid_mail")},min(e){return e.length>=8||this.$t("login.min_8")},PasswordMatch(e){return e===this.user.password||this.$t("login.mismatch_password")},onSwitchMode(){this.isLoginMode=!this.isLoginMode}}},De={class:"font-weight-bold text-h4 ma-2 pa-2"},Ie=p("img",{class:"ml-5 mr-5",src:de},null,-1),Re={class:"font-weight-bold text-h6 ma-2 pa-2"},qe=p("br",null,null,-1);function Ae(e,a,t,m,n,s){return V(),w(Fe,{class:"absolute-fill pa-12",style:{"background-color":"#F5F5F5"}},{default:c(()=>[l(Ce,{class:"mx-auto px-6 py-8",style:oe(e.$i18n.locale==="AR"?"direction: rtl;text-align:center;margin-top: 50px":"text-align:center;margin-top: 50px"),"max-width":"344"},{default:c(()=>[p("p",De,g(e.isLoginMode?e.$t("nav.login"):e.$t("login.create")),1),Ie,p("p",Re,g(e.$t("homepage.goal")),1),l(ke),e.message?(V(),w(Me,{key:0,variant:"outlined",type:"warning",prominent:"",border:"top",style:{color:"#F79191 !important","margin-bottom":"20px"}},{default:c(()=>[$(g(e.message),1)]),_:1})):B("",!0),l(Be,{modelValue:e.form,"onUpdate:modelValue":a[6]||(a[6]=o=>e.form=o),onSubmit:se(s.onSubmit,["prevent"])},{default:c(()=>[l(k,{modelValue:e.user.email,"onUpdate:modelValue":a[0]||(a[0]=o=>e.user.email=o),readonly:e.loading,rules:[s.required,s.valid_mail],class:"mb-2",clearable:"",variant:"underlined",label:e.$t("login.email"),placeholder:e.$t("login.email_placeholder"),"prepend-inner-icon":"mdi-email-outline"},null,8,["modelValue","readonly","rules","label","placeholder"]),l(k,{modelValue:e.user.password,"onUpdate:modelValue":a[1]||(a[1]=o=>e.user.password=o),readonly:e.loading,variant:"underlined",type:e.show1?"text":"password",label:e.$t("login.password"),"prepend-inner-icon":"mdi-lock-outline",placeholder:e.$t("login.password_placeholder"),"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[s.required,s.min],hint:e.$t("login.hint"),clearable:"","onClick:append":a[2]||(a[2]=o=>e.show1=!e.show1)},null,8,["modelValue","readonly","type","label","placeholder","append-icon","rules","hint"]),e.isLoginMode?B("",!0):(V(),w(k,{key:0,modelValue:e.repeat_password,"onUpdate:modelValue":a[3]||(a[3]=o=>e.repeat_password=o),readonly:e.loading,variant:"underlined",type:e.show2?"text":"password",label:e.$t("login.repeat_password"),placeholder:e.$t("login.repeat_password_placeholder"),"prepend-inner-icon":"mdi-lock-outline","append-icon":e.show2?"mdi-eye":"mdi-eye-off",rules:[s.required,s.PasswordMatch],hint:e.$t("login.hint"),clearable:"","onClick:append":a[4]||(a[4]=o=>e.show2=!e.show2)},null,8,["modelValue","readonly","type","label","placeholder","append-icon","rules","hint"])),qe,l(C,{disabled:!e.form,loading:e.loading,block:"",style:{"background-color":"#5FD083",color:"#fff"},size:"large",type:"submit",variant:"elevated"},{default:c(()=>[$(g(e.isLoginMode?e.$t("nav.login"):e.$t("login.create")),1)]),_:1},8,["disabled","loading"]),l(C,{style:{"margin-top":"20px"},variant:"text",color:"info",onClick:a[5]||(a[5]=o=>s.onSwitchMode())},{default:c(()=>[$(g(e.isLoginMode?e.$t("login.no_account"):e.$t("login.have_account")),1)]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["style"])]),_:1})}const Ee=$e(Te,[["render",Ae]]);export{Ee as default};