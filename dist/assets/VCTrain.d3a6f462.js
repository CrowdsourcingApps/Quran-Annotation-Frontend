import{E as T,Q as P,V as S,a as p,b as E}from"./VTimelineItem.9fee81f8.js";import{V as B,q as U}from"./VcInstructions.040fabae.js";import{aC as v,aB as N,X as w,Y as l,Z as y,m as t,a1 as d,_ as i,a2 as r,L as F,U as n,a0 as a}from"./index.99333668.js";import{_ as L,y as _,j as u,Z as V}from"./VAvatar.b9f9e0a6.js";import{a as h,V as f}from"./VRow.add2c9ba.js";import{V as k,d as c,c as R,b as j}from"./VCard.2ffb4d60.js";import{V as q}from"./VAlert.cea9590c.js";import{V as D}from"./VSpacer.e87c24c1.js";import"./VOverlay.f84e6b3b.js";import"./forwardRefs.54bb1675.js";const C="control_tasks/";class Q{get_validate_correctness(){return v.get(C+"validate_correctness/")}save_validate_correctness_answers(s){return v.post(C+"validate_correctness/answers",s).then(m=>(m.data.pass_exam===!0&&N.updateValidateCorrectnessExamPass(),m))}}const A=new Q,Z={components:{VcInstructions:B,Error:T},data:()=>({error:null,loading:!0,loading_audio:!1,quran:U,questions:[],currnet:new P,index:0,problem:!1,message:null,title:null,text:null,q1:"blue",q2:"white",q3:"white",q4:"white",q5:"white",q6:"white",q7:"white",q8:"white",answers:[],disabled:!1,end:!1,end_result:null,correct_answers:0,audio:new Audio,Instructions_dialog:!1,next_disable:!0}),created(){this.getTrainningTasks()},methods:{toggleProblem(){this.problem=!this.problem},reloadPage(){window.location.reload()},getTrainningTasks(){A.get_validate_correctness().then(e=>{this.questions=e.data,this.currnet=this.questions[0],this.loading=!1},e=>{e.response.status===404?this.error="trainning.404_message":e.response.status===400?e.response.data.detail==="Participant already pass the entrance exam"?this.error="trainning.400_message":this.error="trainning.404_message":this.error="error",this.loading=!1})},setAnswer(e){this.next_disable=!1,this.disabled=!0;let s={id:this.currnet.id,label:e};this.answers.push(s);const m=this.currnet.label;e===m?(this["q"+(this.index+1)]="success",this.message=!0,this.correct_answers=this.correct_answers+1,this.title=this.$t("trainning.correct_answer")):(this["q"+(this.index+1)]="fail",this.message=!1,this.title=this.$t("trainning.Incorrect_answer")),this.text=this.$t("trainning.answer_correct_is")+" ",m==="multiple_aya"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.multiple")+" >. "+this.$t("trainning.multiple_feedback"):m==="correct"?this.text=this.text+" < "+this.$t("trainning.correct")+" >. "+this.$t("trainning.correct_feedback"):m==="in_correct"?this.text=this.text+" < "+this.$t("trainning.incorrect")+" >. "+this.$t("trainning.incorrect_feedback"):m==="not_related_quran"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.empty")+" >. "+this.$t("trainning.empty_feedback"):m==="not_match_aya"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.different")+" >. "+this.$t("trainning.different_feedback"):m==="in_complete"&&(this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.incomplete")+" >. "+this.$t("trainning.incomplete_feedback")),this.index===7&&(this.loading=!0,A.save_validate_correctness_answers(this.answers).then(b=>{b.data.pass_exam===!0?this.end_result=!0:this.end_result=!1,this.end=!0,this.loading=!1},b=>{b.response.status===400?b.response.data.detail==="Participant already pass the entrance exam"?this.error="trainning.400_message":this.error="error":this.error="error",this.loading=!1}))},next(){this.message=null,this.next_disable=!0,this.audio&&this.audio.pause(),this.loading=!0,this.problem=!1,this.index=this.index+1,this.currnet=this.questions[this.index],this["q"+(this.index+1)]="blue",this.disabled=!1,this.loading=!1},playAudio(){this.loading_audio=!0,this.audio.src="https://"+this.currnet.audio_file_name,this.audio.load(),this.audio.addEventListener("canplaythrough",()=>{this.audio.readyState===4&&(this.audio.play(),this.loading_audio=!1)})}}},X={key:3,style:{display:"inline-grid"}},Y={key:4,style:{display:"inline-grid"}};function x(e,s,m,b,$,g){const z=w("Error"),I=w("VcInstructions");return l(),y(F,null,[t(z,{error:e.error},null,8,["error"]),e.end?(l(),d(h,{key:0,style:{"margin-top":"50px"}},{default:i(()=>[t(f,{cols:"1",sm:"3"}),t(f,{col:"10",sm:"6"},{default:i(()=>[t(k,{class:"mx-auto ma-2 pa-2",style:{"text-align":"center"}},{default:i(()=>[t(c,{class:"text-h5 ma-2 pa-2",style:{"text-align":"center"}},{default:i(()=>[t(_,{class:"ma-2",icon:"mdi-party-popper",color:"gold"}),n(" "+a(e.$t("support.mash"))+" ",1),t(_,{class:"ma-2",icon:"mdi-party-popper",color:"gold"})]),_:1}),t(c,{class:"text-h5 ma-2 pa-2",style:{"text-align":"center","line-height":"2.25rem"}},{default:i(()=>[n(a(e.$t("trainning_session.completed")),1)]),_:1}),t(c,null,{default:i(()=>[n(a(e.$t("trainning_session.Points")+" "+this.correct_answers+" / 8"),1)]),_:1}),e.end_result?(l(),d(c,{key:0,class:"text-h5"},{default:i(()=>[n(a(e.$t("trainning_session.ready")),1)]),_:1})):r("",!0),e.end_result?r("",!0):(l(),d(c,{key:1},{default:i(()=>[n(a(e.$t("trainning_session.train_again")),1)]),_:1})),e.end_result?(l(),d(u,{key:2,style:{margin:"10px",color:"#fff !important"},color:"success",to:"/task/vc"},{default:i(()=>[n(a(e.$t("trainning_session.contribute")),1)]),_:1})):r("",!0),e.end_result?r("",!0):(l(),d(u,{key:3,style:{margin:"10px",color:"#fff !important"},color:"success",onClick:s[0]||(s[0]=o=>g.reloadPage())},{default:i(()=>[n(a(e.$t("trainning_session.try")),1)]),_:1}))]),_:1})]),_:1}),t(f,{cols:"1",sm:"3"})]),_:1})):r("",!0),e.loading?(l(),d(h,{key:1,style:{"margin-top":"50px"}},{default:i(()=>[t(f,{cols:"4"}),t(f,{cols:"4",style:{"text-align":"center"}},{default:i(()=>[t(V,{indeterminate:"",size:51,width:7})]),_:1})]),_:1})):r("",!0),!e.loading&&!e.end&&!e.error?(l(),d(h,{key:2,style:{"justify-content":"center"}},{default:i(()=>[t(f,{cols:"12",sm:"6"},{default:i(()=>[t(S,{"line-inset":"50",direction:"horizontal"},{default:i(()=>[t(p,{size:"small","dot-color":e.q1},null,8,["dot-color"]),t(p,{size:"small","dot-color":e.q2},null,8,["dot-color"]),t(p,{size:"small","dot-color":e.q3},null,8,["dot-color"]),t(p,{size:"small","dot-color":e.q4},null,8,["dot-color"]),t(p,{size:"small","dot-color":e.q5},null,8,["dot-color"]),t(p,{size:"small","dot-color":e.q6},null,8,["dot-color"]),t(p,{size:"small","dot-color":e.q7},null,8,["dot-color"]),t(p,{size:"small","dot-color":e.q8},null,8,["dot-color"])]),_:1})]),_:1})]),_:1})):r("",!0),!e.loading&&!e.end&&!e.error?(l(),d(h,{key:3,style:{"margin-top":"0px"}},{default:i(()=>[t(f,{cols:"1",sm:"3"}),t(f,{cols:"10",sm:"6"},{default:i(()=>[t(k,{class:"mx-auto",style:{"text-align":"center"}},{default:i(()=>[t(c,{class:"ma-2 pa-2"},{default:i(()=>[n(a(e.$t("trainning.listen")),1)]),_:1}),e.loading_audio?r("",!0):(l(),d(u,{key:0,onClick:s[1]||(s[1]=o=>g.playAudio(e.audioFileName)),class:"mr-3",variant:"outlined",color:"black",icon:"mdi-play"})),e.loading_audio?(l(),d(V,{key:1,"model-value":"20",size:47,indeterminate:""})):r("",!0),t(c,{class:"ma-2 pa-2"},{default:i(()=>[n(a(e.$t("trainning.recited_correctly")),1)]),_:1}),t(c,{style:{"line-height":"2.25rem"},class:"ma-2 pa-2 text-h5"},{default:i(()=>[n(a(e.quran[e.currnet.surra_number][e.currnet.aya_number].uthmani),1)]),_:1}),e.problem?(l(),d(R,{key:2,class:"ma-2 pa-2"},{default:i(()=>[n(a(e.$t("trainning.what_problem")),1)]),_:1})):r("",!0),e.problem?r("",!0):(l(),y("div",X,[t(u,{disabled:e.disabled,onClick:s[2]||(s[2]=o=>g.setAnswer("correct")),color:"success",style:{margin:"10px",color:"#fff !important"}},{default:i(()=>[n(a(e.$t("trainning.correct")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[3]||(s[3]=o=>g.setAnswer("in_correct")),color:"fail",style:{margin:"10px",color:"#fff !important"}},{default:i(()=>[n(a(e.$t("trainning.incorrect")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[4]||(s[4]=o=>g.toggleProblem()),color:"invalid",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.problem")),1)]),_:1},8,["disabled"])])),e.problem?(l(),y("div",Y,[t(u,{disabled:e.disabled,onClick:s[5]||(s[5]=o=>g.setAnswer("in_complete")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.incomplete")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[6]||(s[6]=o=>g.setAnswer("not_match_aya")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.different")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[7]||(s[7]=o=>g.setAnswer("multiple_aya")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.multiple")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[8]||(s[8]=o=>g.setAnswer("not_related_quran")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.empty")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[9]||(s[9]=o=>g.toggleProblem()),color:"invalid",style:{margin:"10px"},modelValue:e.problem,"onUpdate:modelValue":s[10]||(s[10]=o=>e.problem=o)},{default:i(()=>[n(a(e.$t("trainning.back")),1)]),_:1},8,["disabled","modelValue"])])):r("",!0)]),_:1}),t(h,{style:{"margin-top":"10px"}},{default:i(()=>[t(f,null,{default:i(()=>[e.message?(l(),d(q,{key:0,style:{color:"#fff !important"},density:"compact",type:"success",title:e.title,text:e.text},null,8,["title","text"])):r("",!0),e.message===!1?(l(),d(q,{key:1,style:{"background-color":"#F79191 !important",color:"#fff !important"},density:"compact",type:"warning",title:e.title,text:e.text},null,8,["title","text"])):r("",!0)]),_:1})]),_:1}),t(h,{style:{margin:"15px"}},{default:i(()=>[t(u,{variant:"outlined",color:"info","prepend-icon":"mdi-notebook-outline"},{default:i(()=>[n(a(e.$t("homepage.instructions"))+" ",1),t(E,{modelValue:e.Instructions_dialog,"onUpdate:modelValue":s[12]||(s[12]=o=>e.Instructions_dialog=o),activator:"parent",width:"auto"},{default:i(()=>[t(k,null,{default:i(()=>[t(I,{Showstart:!1}),t(j,null,{default:i(()=>[t(u,{color:"invalid",block:"",onClick:s[11]||(s[11]=o=>e.Instructions_dialog=!1)},{default:i(()=>[n(a(e.$t("trainning.close")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(D),e.index!=7?(l(),d(u,{key:0,onClick:s[13]||(s[13]=o=>g.next()),variant:"outlined",color:"info","prepend-icon":e.$i18n.locale==="AR"?"mdi-chevron-left":"mdi-chevron-right",disabled:e.next_disable},{default:i(()=>[n(a(e.$t("trainning.next")),1)]),_:1},8,["prepend-icon","disabled"])):r("",!0)]),_:1})]),_:1}),t(f,{col:"1",sm:"3"})]),_:1})):r("",!0)],64)}const se=L(Z,[["render",x]]);export{se as default};
