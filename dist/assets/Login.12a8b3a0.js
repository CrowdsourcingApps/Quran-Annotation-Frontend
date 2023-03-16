import{d as k,r as C,a as l,m as P,p as M,t as L,o as c,b as v,w as u,e as h,f as m,$ as b,a2 as $,a3 as F,a5 as R}from"./index.c7dc571c.js";import{d as q,e as B,c as w,_ as D}from"./VTextField.06824869.js";import{h as U,m as T,o as N,a as I,U as z,W as A,b as E,c as W,u as X,d as Y,v as j,e as G,X as H,Y as J,f as K,_ as O,V}from"./VAvatar.f6608b79.js";import{V as Q}from"./VSpacer.bf2846e2.js";import{V as Z}from"./VAlert.2d67c6b2.js";import{f as _}from"./forwardRefs.54bb1675.js";import{V as x}from"./VCard.4f4b6cc7.js";class ee{constructor(s,i){this.email=s,this.password=i}}const se=k({name:"VForm",props:{...q()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,s){let{slots:i,emit:p}=s;const d=B(e),o=C();function a(r){r.preventDefault(),d.reset()}function g(r){const n=r,t=d.validate();n.then=t.then.bind(t),n.catch=t.catch.bind(t),n.finally=t.finally.bind(t),p("submit",n),n.defaultPrevented||t.then(f=>{let{valid:S}=f;if(S){var y;(y=o.value)==null||y.submit()}}),n.preventDefault()}return U(()=>{var r;return l("form",{ref:o,class:"v-form",novalidate:!0,onReset:a,onSubmit:g},[(r=i.default)==null?void 0:r.call(i,d)])}),_(d,o)}});const oe=k({name:"VSheet",props:{color:String,...T(),...N(),...I(),...z(),...A(),...E(),...W(),...P()},setup(e,s){let{slots:i}=s;const{themeClasses:p}=M(e),{backgroundColorClasses:d,backgroundColorStyles:o}=X(L(e,"color")),{borderClasses:a}=Y(e),{dimensionStyles:g}=j(e),{elevationClasses:r}=G(e),{locationStyles:n}=H(e),{positionClasses:t}=J(e),{roundedClasses:f}=K(e);return()=>l(e.tag,{class:["v-sheet",p.value,d.value,a.value,r.value,t.value,f.value],style:[o.value,g.value,n.value]},i)}}),ae={data:()=>({form:!1,user:new ee(null,null),repeat_password:null,loading:!1,show1:!1,show2:!1,isLoginMode:!0,message:null}),computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&this.$router.push("/")},methods:{onSubmit(){!this.form||(this.message=null,this.loading=!0,this.isLoginMode?this.$store.dispatch("auth/login",this.user).then(()=>{this.$router.replace(this.$route.query.redirect||"/")},e=>{this.loading=!1,e.response.status===401?this.message=this.$t("login.401_message"):this.message=this.$t("error")}):this.$store.dispatch("auth/register",this.user).then(()=>{this.$router.replace(this.$route.query.redirect||"/")},e=>{this.loading=!1,e.response.status===400?this.message=this.$t("login.400_message"):this.message=this.$t("error")}))},required(e){return!!e||this.$t("login.required")},valid_mail(e){return/.+@.+\..+/.test(e)||this.$t("login.notvalid_mail")},min(e){return e.length>=8||this.$t("login.min_8")},PasswordMatch(e){return e===this.user.password||this.$t("login.mismatch_password")},onSwitchMode(){this.isLoginMode=!this.isLoginMode}}},te={class:"font-weight-bold text-h4 ma-2 pa-2"},le=h("img",{class:"ml-5 mr-5",src:D},null,-1),re={class:"font-weight-bold text-h6 ma-2 pa-2"},ne=h("br",null,null,-1);function ie(e,s,i,p,d,o){return c(),v(oe,{class:"absolute-fill pa-12",style:{"background-color":"#F5F5F5"}},{default:u(()=>[l(x,{class:"mx-auto px-6 py-8",style:R(e.$i18n.locale==="AR"?"direction: rtl;text-align:center;margin-top: 50px":"text-align:center;margin-top: 50px"),"max-width":"344"},{default:u(()=>[h("p",te,m(e.isLoginMode?e.$t("nav.login"):e.$t("login.create")),1),le,h("p",re,m(e.$t("homepage.goal")),1),l(Q),e.message?(c(),v(Z,{key:0,variant:"outlined",type:"warning",prominent:"",border:"top",style:{color:"#F79191 !important","margin-bottom":"20px"}},{default:u(()=>[b(m(e.message),1)]),_:1})):$("",!0),l(se,{modelValue:e.form,"onUpdate:modelValue":s[6]||(s[6]=a=>e.form=a),onSubmit:F(o.onSubmit,["prevent"])},{default:u(()=>[l(w,{modelValue:e.user.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.user.email=a),readonly:e.loading,rules:[o.required,o.valid_mail],class:"mb-2",clearable:"",variant:"underlined",label:e.$t("login.email"),placeholder:e.$t("login.email_placeholder"),"prepend-inner-icon":"mdi-email-outline"},null,8,["modelValue","readonly","rules","label","placeholder"]),l(w,{modelValue:e.user.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.user.password=a),readonly:e.loading,variant:"underlined",type:e.show1?"text":"password",label:e.$t("login.password"),"prepend-inner-icon":"mdi-lock-outline",placeholder:e.$t("login.password_placeholder"),"append-icon":e.show1?"mdi-eye":"mdi-eye-off",rules:[o.required,o.min],hint:e.$t("login.hint"),clearable:"","onClick:append":s[2]||(s[2]=a=>e.show1=!e.show1)},null,8,["modelValue","readonly","type","label","placeholder","append-icon","rules","hint"]),e.isLoginMode?$("",!0):(c(),v(w,{key:0,modelValue:e.repeat_password,"onUpdate:modelValue":s[3]||(s[3]=a=>e.repeat_password=a),readonly:e.loading,variant:"underlined",type:e.show2?"text":"password",label:e.$t("login.repeat_password"),placeholder:e.$t("login.repeat_password_placeholder"),"prepend-inner-icon":"mdi-lock-outline","append-icon":e.show2?"mdi-eye":"mdi-eye-off",rules:[o.required,o.PasswordMatch],hint:e.$t("login.hint"),clearable:"","onClick:append":s[4]||(s[4]=a=>e.show2=!e.show2)},null,8,["modelValue","readonly","type","label","placeholder","append-icon","rules","hint"])),ne,l(V,{disabled:!e.form,loading:e.loading,block:"",style:{"background-color":"#5FD083",color:"#fff"},size:"large",type:"submit",variant:"elevated"},{default:u(()=>[b(m(e.isLoginMode?e.$t("nav.login"):e.$t("login.create")),1)]),_:1},8,["disabled","loading"]),l(V,{style:{"margin-top":"20px"},variant:"text",color:"info",onClick:s[5]||(s[5]=a=>o.onSwitchMode())},{default:u(()=>[b(m(e.isLoginMode?e.$t("login.no_account"):e.$t("login.have_account")),1)]),_:1})]),_:1},8,["modelValue","onSubmit"])]),_:1},8,["style"])]),_:1})}const ce=O(ae,[["render",ie]]);export{ce as default};
