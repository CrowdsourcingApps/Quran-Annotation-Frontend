import{E as z,Q as P,V as S}from"./VDialog.0df64257.js";import{V as E,q as U}from"./VcInstructions.210450df.js";import{aF as $,aC as B,W as F,Y as w,Z as r,_ as y,m as t,a2 as d,$ as i,a4 as o,L as N,U as n,a1 as a}from"./index.30a016ab.js";import{_ as L,w as V}from"./VAvatar.cd1b5461.js";import{a as h,V as g}from"./VRow.dd64bc8c.js";import{V as k,e as p,c as R,b as D}from"./VCard.279009b9.js";import{V as u,d as _}from"./VBtn.fbb07072.js";import{V as Q,a as c}from"./VTimelineItem.78921f83.js";import{V as C}from"./VAlert.52448df5.js";import{V as j}from"./VSpacer.292e376a.js";import"./VOverlay.40cbd6c6.js";import"./forwardRefs.54bb1675.js";const q="control_tasks/";class W{get_validate_correctness(){return $.get(q+"validate_correctness/")}save_validate_correctness_answers(s){return $.post(q+"validate_correctness/answers",s).then(f=>(f.data.pass_exam===!0&&B.updateValidateCorrectnessExamPass(),f))}}const A=new W,Y={components:{VcInstructions:E,Error:z},data:()=>({error:null,loading:!0,loading_audio:!1,quran:U,questions:[],currnet:new P,index:0,problem:!1,message:null,title:null,text:null,q1:"blue",q2:"white",q3:"white",q4:"white",q5:"white",q6:"white",q7:"white",q8:"white",answers:[],disabled:!1,end:!1,end_result:null,correct_answers:0,audio:new Audio,Instructions_dialog:!1,next_disable:!0}),created(){this.getTrainningTasks()},methods:{InstructionsClicked(){const e={location:"VCTrain"};F.track("VCInstructions Clicked",e)},toggleProblem(){this.problem=!this.problem},reloadPage(){window.location.reload()},getTrainningTasks(){A.get_validate_correctness().then(e=>{this.questions=e.data,this.currnet=this.questions[0],this.loading=!1},e=>{e.response.status===404?this.error="trainning.404_message":e.response.status===400?e.response.data.detail==="Participant already pass the entrance exam"?this.error="trainning.400_message":this.error="trainning.404_message":this.error="error",this.loading=!1})},setAnswer(e){this.next_disable=!1,this.disabled=!0;let s={id:this.currnet.id,label:e};this.answers.push(s);const f=this.currnet.label;e===f?(this["q"+(this.index+1)]="success",this.message=!0,this.correct_answers=this.correct_answers+1,this.title=this.$t("trainning.correct_answer")):(this["q"+(this.index+1)]="fail",this.message=!1,this.title=this.$t("trainning.Incorrect_answer")),this.text=this.$t("trainning.answer_correct_is")+" ",f==="multiple_aya"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.multiple")+" >. "+this.$t("trainning.multiple_feedback"):f==="correct"?this.text=this.text+" < "+this.$t("trainning.correct")+" >. "+this.$t("trainning.correct_feedback"):f==="in_correct"?this.text=this.text+" < "+this.$t("trainning.incorrect")+" >. "+this.$t("trainning.incorrect_feedback"):f==="not_related_quran"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.empty")+" >. "+this.$t("trainning.empty_feedback"):f==="not_match_aya"?this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.different")+" >. "+this.$t("trainning.different_feedback"):f==="in_complete"&&(this.text=this.text+this.$t("trainning.problem")+" < "+this.$t("trainning.incomplete")+" >. "+this.$t("trainning.incomplete_feedback")),this.index===7&&(this.loading=!0,A.save_validate_correctness_answers(this.answers).then(b=>{b.data.pass_exam===!0?this.end_result=!0:this.end_result=!1,this.end=!0,this.loading=!1},b=>{b.response.status===400?b.response.data.detail==="Participant already pass the entrance exam"?this.error="trainning.400_message":this.error="error":this.error="error",this.loading=!1}))},next(){this.message=null,this.next_disable=!0,this.audio&&this.audio.pause(),this.loading=!0,this.problem=!1,this.index=this.index+1,this.currnet=this.questions[this.index],this["q"+(this.index+1)]="blue",this.disabled=!1,this.loading=!1},playAudio(){this.loading_audio=!0,this.audio.src="https://"+this.currnet.audio_file_name,this.audio.load(),this.audio.addEventListener("canplaythrough",()=>{this.audio.readyState===4&&(this.audio.play(),this.loading_audio=!1)})}}},Z={key:3,style:{display:"inline-grid"}},x={key:4,style:{display:"inline-grid"}};function G(e,s,f,b,v,m){const I=w("Error"),T=w("VcInstructions");return r(),y(N,null,[t(I,{error:e.error},null,8,["error"]),e.end?(r(),d(h,{key:0,style:{"margin-top":"50px"}},{default:i(()=>[t(g,{cols:"1",sm:"3"}),t(g,{col:"10",sm:"6"},{default:i(()=>[t(k,{class:"mx-auto ma-2 pa-2",style:{"text-align":"center"}},{default:i(()=>[t(p,{class:"text-h5 ma-2 pa-2",style:{"text-align":"center"}},{default:i(()=>[t(V,{class:"ma-2",icon:"mdi-party-popper",color:"gold"}),n(" "+a(e.$t("support.mash"))+" ",1),t(V,{class:"ma-2",icon:"mdi-party-popper",color:"gold"})]),_:1}),t(p,{class:"text-h5 ma-2 pa-2",style:{"text-align":"center","line-height":"2.25rem"}},{default:i(()=>[n(a(e.$t("trainning_session.completed")),1)]),_:1}),t(p,null,{default:i(()=>[n(a(e.$t("trainning_session.Points")+" "+this.correct_answers+" / 8"),1)]),_:1}),e.end_result?(r(),d(p,{key:0,class:"text-h5"},{default:i(()=>[n(a(e.$t("trainning_session.ready")),1)]),_:1})):o("",!0),e.end_result?o("",!0):(r(),d(p,{key:1},{default:i(()=>[n(a(e.$t("trainning_session.train_again")),1)]),_:1})),e.end_result?(r(),d(u,{key:2,style:{margin:"10px",color:"#fff !important"},color:"success",to:"/task/vc"},{default:i(()=>[n(a(e.$t("trainning_session.contribute")),1)]),_:1})):o("",!0),e.end_result?o("",!0):(r(),d(u,{key:3,style:{margin:"10px",color:"#fff !important"},color:"success",onClick:s[0]||(s[0]=l=>m.reloadPage())},{default:i(()=>[n(a(e.$t("trainning_session.try")),1)]),_:1}))]),_:1})]),_:1}),t(g,{cols:"1",sm:"3"})]),_:1})):o("",!0),e.loading?(r(),d(h,{key:1,style:{"margin-top":"50px"}},{default:i(()=>[t(g,{cols:"4"}),t(g,{cols:"4",style:{"text-align":"center"}},{default:i(()=>[t(_,{indeterminate:"",size:51,width:7})]),_:1})]),_:1})):o("",!0),!e.loading&&!e.end&&!e.error?(r(),d(h,{key:2,style:{"justify-content":"center"}},{default:i(()=>[t(g,{cols:"12",sm:"6"},{default:i(()=>[t(Q,{"line-inset":"50",direction:"horizontal"},{default:i(()=>[t(c,{size:"small","dot-color":e.q1},null,8,["dot-color"]),t(c,{size:"small","dot-color":e.q2},null,8,["dot-color"]),t(c,{size:"small","dot-color":e.q3},null,8,["dot-color"]),t(c,{size:"small","dot-color":e.q4},null,8,["dot-color"]),t(c,{size:"small","dot-color":e.q5},null,8,["dot-color"]),t(c,{size:"small","dot-color":e.q6},null,8,["dot-color"]),t(c,{size:"small","dot-color":e.q7},null,8,["dot-color"]),t(c,{size:"small","dot-color":e.q8},null,8,["dot-color"])]),_:1})]),_:1})]),_:1})):o("",!0),!e.loading&&!e.end&&!e.error?(r(),d(h,{key:3,style:{"margin-top":"0px"}},{default:i(()=>[t(g,{cols:"1",sm:"3"}),t(g,{cols:"10",sm:"6"},{default:i(()=>[t(k,{class:"mx-auto",style:{"text-align":"center"}},{default:i(()=>[t(p,{class:"ma-2 pa-2"},{default:i(()=>[n(a(e.$t("trainning.listen")),1)]),_:1}),e.loading_audio?o("",!0):(r(),d(u,{key:0,onClick:s[1]||(s[1]=l=>m.playAudio(e.audioFileName)),class:"mr-3",variant:"outlined",color:"black",icon:"mdi-play"})),e.loading_audio?(r(),d(_,{key:1,"model-value":"20",size:47,indeterminate:""})):o("",!0),t(p,{class:"ma-2 pa-2"},{default:i(()=>[n(a(e.$t("trainning.recited_correctly")),1)]),_:1}),t(p,{style:{"line-height":"2.25rem"},class:"ma-2 pa-2 text-h5"},{default:i(()=>[n(a(e.quran[e.currnet.surra_number][e.currnet.aya_number].uthmani),1)]),_:1}),e.problem?(r(),d(R,{key:2,class:"ma-2 pa-2"},{default:i(()=>[n(a(e.$t("trainning.what_problem")),1)]),_:1})):o("",!0),e.problem?o("",!0):(r(),y("div",Z,[t(u,{disabled:e.disabled,onClick:s[2]||(s[2]=l=>m.setAnswer("correct")),color:"success",style:{margin:"10px",color:"#fff !important"}},{default:i(()=>[n(a(e.$t("trainning.correct")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[3]||(s[3]=l=>m.setAnswer("in_correct")),color:"fail",style:{margin:"10px",color:"#fff !important"}},{default:i(()=>[n(a(e.$t("trainning.incorrect")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[4]||(s[4]=l=>m.toggleProblem()),color:"invalid",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.problem")),1)]),_:1},8,["disabled"])])),e.problem?(r(),y("div",x,[t(u,{disabled:e.disabled,onClick:s[5]||(s[5]=l=>m.setAnswer("in_complete")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.incomplete")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[6]||(s[6]=l=>m.setAnswer("not_match_aya")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.different")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[7]||(s[7]=l=>m.setAnswer("multiple_aya")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.multiple")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[8]||(s[8]=l=>m.setAnswer("not_related_quran")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:i(()=>[n(a(e.$t("trainning.empty")),1)]),_:1},8,["disabled"]),t(u,{disabled:e.disabled,onClick:s[9]||(s[9]=l=>m.toggleProblem()),color:"invalid",style:{margin:"10px"},modelValue:e.problem,"onUpdate:modelValue":s[10]||(s[10]=l=>e.problem=l)},{default:i(()=>[n(a(e.$t("trainning.back")),1)]),_:1},8,["disabled","modelValue"])])):o("",!0)]),_:1}),t(h,{style:{"margin-top":"10px"}},{default:i(()=>[t(g,null,{default:i(()=>[e.message?(r(),d(C,{key:0,style:{color:"#fff !important"},density:"compact",type:"success",title:e.title,text:e.text},null,8,["title","text"])):o("",!0),e.message===!1?(r(),d(C,{key:1,style:{"background-color":"#F79191 !important",color:"#fff !important"},density:"compact",type:"warning",title:e.title,text:e.text},null,8,["title","text"])):o("",!0)]),_:1})]),_:1}),t(h,{style:{margin:"15px"}},{default:i(()=>[t(u,{variant:"outlined",color:"info","prepend-icon":"mdi-notebook-outline",onClick:s[13]||(s[13]=l=>m.InstructionsClicked())},{default:i(()=>[n(a(e.$t("homepage.instructions"))+" ",1),t(S,{modelValue:e.Instructions_dialog,"onUpdate:modelValue":s[12]||(s[12]=l=>e.Instructions_dialog=l),activator:"parent",width:"auto"},{default:i(()=>[t(k,null,{default:i(()=>[t(T,{Showstart:!1}),t(D,null,{default:i(()=>[t(u,{color:"invalid",block:"",onClick:s[11]||(s[11]=l=>e.Instructions_dialog=!1)},{default:i(()=>[n(a(e.$t("trainning.close")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(j),e.index!=7?(r(),d(u,{key:0,onClick:s[14]||(s[14]=l=>m.next()),variant:"outlined",color:"info","prepend-icon":e.$i18n.locale==="AR"?"mdi-chevron-left":"mdi-chevron-right",disabled:e.next_disable},{default:i(()=>[n(a(e.$t("trainning.next")),1)]),_:1},8,["prepend-icon","disabled"])):o("",!0)]),_:1})]),_:1}),t(g,{col:"1",sm:"3"})]),_:1})):o("",!0)],64)}const re=L(Y,[["render",G]]);export{re as default};
