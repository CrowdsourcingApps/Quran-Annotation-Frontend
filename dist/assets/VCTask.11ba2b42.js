import{E as q,Q as I,V as T,b as P,a as R}from"./VTimelineItem.7d03d8ca.js";import{V as S,q as E}from"./VcInstructions.a5197738.js";import{aC as k,X as y,Y as o,Z as c,m as s,a1 as p,_ as t,a2 as u,L as v,U as a,a0 as l,aD as z}from"./index.ffdc5a0c.js";import{_ as B,y as w,j as r,Z as L}from"./VAvatar.85c12dcd.js";import{a as h,V as m}from"./VRow.884d130b.js";import{V as b,d as f,c as U,b as j}from"./VCard.6cd96cb4.js";import{V as D}from"./VSpacer.5cb2105a.js";import"./VAlert.cb751e47.js";import"./VOverlay.5bd09020.js";import"./forwardRefs.54bb1675.js";const V="tasks/";class N{get_validate_correctness(){return k.get(V+"validate_correctness/")}save_validate_correctness_answers(i){return k.post(V+"validate_correctness/answers",i).then(g=>(console.log(g),g))}}const _=new N,Q={components:{VcInstructions:S,Error:q},data:()=>({error:null,loading:!0,quran:E,questions:[],currnet:new I,index:0,problem:!1,message:null,title:null,text:null,time_line_colors:[],answers:[],disabled:!1,end:!1,audio:new Audio,Instructions_dialog:!1}),created(){this.getRealTasks()},methods:{toggleProblem(){this.problem=!this.problem},reloadPage(){window.location.reload()},getRealTasks(){_.get_validate_correctness().then(e=>{this.questions=e.data,console.log(this.questions),this.currnet=this.questions[0],this.time_line_colors=new Array(this.questions.length).fill("white"),this.time_line_colors[0]="blue",this.loading=!1},e=>{e.response.status===404?this.error="tasks.404_message":e.response.status===400?this.error="tasks.400_message":this.error="error",this.loading=!1})},setAnswer(e){this.disabled=!0;let i={id:this.currnet.id,label:e,control_task:this.currnet.control_task};this.answers.push(i),this.time_line_colors[this.index]="success",this.index===this.questions.length-1?(this.loading=!0,this.saveAnswers()):this.next()},next(){this.audio&&this.audio.pause(),this.loading=!0,this.problem=!1,this.index=this.index+1,this.currnet=this.questions[this.index],this.time_line_colors[this.index]="blue",this.disabled=!1,this.loading=!1},skip(){this.audio&&this.audio.pause(),this.loading=!0,this.problem=!1,this.time_line_colors[this.index]="fail",this.index===this.questions.length-1?(this.loading=!0,this.saveAnswers()):(this.index=this.index+1,this.currnet=this.questions[this.index],this.time_line_colors[this.index]="blue",this.disabled=!1,this.loading=!1)},playAudio(){this.audio.src="https://"+this.currnet.audio_file_name,this.audio.play()},saveAnswers(){_.save_validate_correctness_answers(this.answers).then(e=>{this.end=!0,this.loading=!1},e=>{e.response.status===400?e.response.data.detail==="Participant should pass the entrance exam first"?this.error="tasks.400_message":this.error="error":this.error="error",this.loading=!1})}},beforeRouteLeave(e,i,g){this.answers.length>0&&this.saveAnswers(),g()}},Z={key:1,style:{display:"inline-grid"}},F={key:2,style:{display:"inline-grid"}};function X(e,i,g,Y,G,d){const $=y("Error"),C=y("VcInstructions");return o(),c(v,null,[s($,{error:e.error},null,8,["error"]),e.end?(o(),p(h,{key:0,style:{"margin-top":"50px"}},{default:t(()=>[s(m,{cols:"1",sm:"3"}),s(m,{col:"10",sm:"6"},{default:t(()=>[s(b,{class:"mx-auto ma-2 pa-2",style:{"text-align":"center"}},{default:t(()=>[s(f,{class:"text-h5 ma-2 pa-2",style:{"text-align":"center"}},{default:t(()=>[s(w,{class:"ma-2",icon:"mdi-party-popper",color:"gold"}),a(" "+l(e.$t("support.jazak"))+" ",1),s(w,{class:"ma-2",icon:"mdi-party-popper",color:"gold"})]),_:1}),s(f,{class:"text-h5 ma-2 pa-2",style:{"text-align":"center","line-height":"2.25rem"}},{default:t(()=>[a(l(e.$t("tasks.completed")),1)]),_:1}),s(f,null,{default:t(()=>[a(l(e.$t("tasks.contribution_today")+" "+this.answers.length+" "+e.$t("tasks.tasks")),1)]),_:1}),e.end_result?(o(),p(f,{key:0,class:"text-h5"},{default:t(()=>[a(l(e.$t("trainning_session.ready")),1)]),_:1})):u("",!0),s(r,{style:{margin:"10px",color:"#fff !important"},color:"success",onClick:i[0]||(i[0]=n=>d.reloadPage())},{default:t(()=>[a(l(e.$t("tasks.contribute_again")),1)]),_:1})]),_:1})]),_:1}),s(m,{cols:"1",sm:"3"})]),_:1})):u("",!0),e.loading?(o(),p(h,{key:1,style:{"margin-top":"50px"}},{default:t(()=>[s(m,{cols:"4"}),s(m,{cols:"4",style:{"text-align":"center"}},{default:t(()=>[s(L,{indeterminate:"",size:51,width:7})]),_:1})]),_:1})):u("",!0),!e.loading&&!e.end&&!e.error?(o(),p(h,{key:2,style:{"justify-content":"center"}},{default:t(()=>[s(m,{cols:"12",sm:"6"},{default:t(()=>[s(T,{"line-inset":"200",direction:"horizontal"},{default:t(()=>[(o(!0),c(v,null,z(e.time_line_colors,(n,A)=>(o(),p(R,{key:A,size:"small","dot-color":n,icon:"mdi-check"},null,8,["dot-color"]))),128))]),_:1})]),_:1})]),_:1})):u("",!0),!e.loading&&!e.end&&!e.error?(o(),p(h,{key:3,style:{"margin-top":"0px"}},{default:t(()=>[s(m,{cols:"1",sm:"3"}),s(m,{cols:"10",sm:"6"},{default:t(()=>[s(b,{class:"mx-auto",style:{"text-align":"center"}},{default:t(()=>[s(f,{class:"ma-2 pa-2"},{default:t(()=>[a(l(e.$t("trainning.listen")),1)]),_:1}),s(r,{onClick:i[1]||(i[1]=n=>d.playAudio()),class:"mr-3",variant:"outlined",color:"black",icon:"mdi-play"}),s(f,{class:"ma-2 pa-2"},{default:t(()=>[a(l(e.$t("trainning.recited_correctly")),1)]),_:1}),s(f,{style:{"line-height":"2.25rem"},class:"ma-2 pa-2 text-h5"},{default:t(()=>[a(l(e.quran[e.currnet.surra_number][e.currnet.aya_number].uthmani),1)]),_:1}),e.problem?(o(),p(U,{key:0,class:"ma-2 pa-2"},{default:t(()=>[a(l(e.$t("trainning.what_problem")),1)]),_:1})):u("",!0),e.problem?u("",!0):(o(),c("div",Z,[s(r,{disabled:e.disabled,onClick:i[2]||(i[2]=n=>d.setAnswer("correct")),color:"success",style:{margin:"10px",color:"#fff !important"}},{default:t(()=>[a(l(e.$t("trainning.correct")),1)]),_:1},8,["disabled"]),s(r,{disabled:e.disabled,onClick:i[3]||(i[3]=n=>d.setAnswer("in_correct")),color:"fail",style:{margin:"10px",color:"#fff !important"}},{default:t(()=>[a(l(e.$t("trainning.incorrect")),1)]),_:1},8,["disabled"]),s(r,{disabled:e.disabled,onClick:i[4]||(i[4]=n=>d.toggleProblem()),color:"invalid",style:{margin:"10px"}},{default:t(()=>[a(l(e.$t("trainning.problem")),1)]),_:1},8,["disabled"])])),e.problem?(o(),c("div",F,[s(r,{disabled:e.disabled,onClick:i[5]||(i[5]=n=>d.setAnswer("in_complete")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:t(()=>[a(l(e.$t("trainning.incomplete")),1)]),_:1},8,["disabled"]),s(r,{disabled:e.disabled,onClick:i[6]||(i[6]=n=>d.setAnswer("not_match_aya")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:t(()=>[a(l(e.$t("trainning.different")),1)]),_:1},8,["disabled"]),s(r,{disabled:e.disabled,onClick:i[7]||(i[7]=n=>d.setAnswer("multiple_aya")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:t(()=>[a(l(e.$t("trainning.multiple")),1)]),_:1},8,["disabled"]),s(r,{disabled:e.disabled,onClick:i[8]||(i[8]=n=>d.setAnswer("not_related_quran")),variant:"outlined",color:"invalidoption",style:{margin:"10px"}},{default:t(()=>[a(l(e.$t("trainning.empty")),1)]),_:1},8,["disabled"]),s(r,{disabled:e.disabled,onClick:i[9]||(i[9]=n=>d.toggleProblem()),color:"invalid",style:{margin:"10px"},modelValue:e.problem,"onUpdate:modelValue":i[10]||(i[10]=n=>e.problem=n)},{default:t(()=>[a(l(e.$t("trainning.back")),1)]),_:1},8,["disabled","modelValue"])])):u("",!0)]),_:1}),s(h,{style:{margin:"15px"}},{default:t(()=>[s(r,{variant:"text",color:"info","prepend-icon":"mdi-notebook-outline"},{default:t(()=>[a(l(e.$t("homepage.instructions"))+" ",1),s(P,{modelValue:e.Instructions_dialog,"onUpdate:modelValue":i[12]||(i[12]=n=>e.Instructions_dialog=n),activator:"parent",width:"auto"},{default:t(()=>[s(b,null,{default:t(()=>[s(C,{Showstart:!1}),s(j,null,{default:t(()=>[s(r,{color:"invalid",block:"",onClick:i[11]||(i[11]=n=>e.Instructions_dialog=!1)},{default:t(()=>[a(l(e.$t("trainning.close")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(D),e.index!=this.questions.length?(o(),p(r,{key:0,onClick:i[13]||(i[13]=n=>d.skip()),variant:"text",color:"info","prepend-icon":e.$i18n.locale==="AR"?"mdi-chevron-left":"mdi-chevron-right"},{default:t(()=>[a(l(e.$t("tasks.skip")),1)]),_:1},8,["prepend-icon"])):u("",!0)]),_:1})]),_:1}),s(m,{col:"1",sm:"3"})]),_:1})):u("",!0)],64)}const ie=B(Q,[["render",X]]);export{ie as default};
