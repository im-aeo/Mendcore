import{l as C,s as r,v as F,r as c,o,c as a,b as i,w as u,a as e,y as E,t as m,u as t,A as B,B as V,C as l,n as A,H as D,f as p,F as N}from"./vendor-9580edd1.js";import{_ as T}from"./Navbar.vue_vue_type_script_setup_true_lang-7477f862.js";import{S as M}from"./Sidebar-1e42415c.js";import{_ as P}from"./Footer.vue_vue_type_script_setup_true_lang-83a668be.js";import{u as $}from"./index-7687189b.js";import"./app-2c5c3ded.js";const z={class:"cell large-8 medium-10"},H={class:"card"},I={class:"card-body"},L={class:"progress-bar"},R=e("div",{class:"mx-1 my-3 divider"},null,-1),j={class:"grid-x grid-margin-x grid-padding-y"},O=e("div",{class:"text-center cell medium-3"},[e("img",{src:"/assets/img/earl_placeholder.png",class:"show-for-medium",alt:"earl"}),e("img",{src:"/assets/img/earl_placeholder.png",alt:"earl",style:{"max-width":"180px"},class:"show-for-small-only"})],-1),U={class:"cell medium-9"},W={class:"text-2xl fw-semibold"},q={class:"gap-1 mb-2 flex-container flex-dir-column"},G={class:"text-sm text-muted fw-semibold"},J={key:0},K=e("div",{class:"text-xs fw-bold text-muted text-uppercase"}," Email Address ",-1),Q={key:1},X=e("div",null,[e("button",{class:"btn btn-info btn-disabled btn-block"},[e("i",{class:"fas fa-envelopes me-2"}),p("Resend Confirmation Email ")])],-1),Y=[X],Z=e("div",{class:"divider mx-1 my-3"},null,-1),ee={class:"flex-container align-justify"},se=["disabled"],_=2,de=C({__name:"Forgot",setup(te){const n=$({email:""});let s=r(1);const f=()=>{s.value<_&&s.value++},h=F(()=>s.value===1),v=()=>{s.value--},g=()=>`${s.value/_*100}%`,x=()=>{if(s.value===1)return"Oh noes! Did you forget your password?";if(s.value===2)return"Sent!"},b=()=>{if(s.value===1)return"Fill in the e-mail asscoiated with your account in the field below, if said e-mail is linked to an account, we will send you a link to reset your password.";if(s.value===2)return' If you do not see the e-mail within 5 minutes, please check your spam folder. If you still do not see it, then please press the "Resend Confirmation Email" button below. (Sorry for the inconvenience!)'};return r(""),r(""),(y,d)=>{const w=c("FlashMessages"),k=c("Link");return o(),a(N,null,[i(T),i(M,null,{default:u(()=>[e("div",z,[e("div",H,[e("div",I,[i(w),e("div",L,[e("span",{class:"progress",style:E({width:g()})},null,4)]),R,e("div",j,[O,e("div",U,[e("div",W,m(x()),1),e("div",q,[e("div",G,m(b()),1)]),t(s)===1?(o(),a("div",J,[e("div",null,[K,B(e("input",{type:"text",class:"form","onUpdate:modelValue":d[0]||(d[0]=S=>t(n).email=S),placeholder:"Email Address"},null,512),[[V,t(n).email]])])])):l("",!0),t(s)===2?(o(),a("div",Q,Y)):l("",!0),Z,e("div",ee,[t(s)>1?(o(),a("button",{key:0,onClick:v,class:A(["px-4 btn btn-danger",{disabled:h.value}])}," Previous ",2)):l("",!0),t(s)===1?(o(),a("button",{key:1,class:"px-4 btn btn-success",onClick:f,disabled:t(n).processing}," Send Email ",8,se)):l("",!0)]),i(k,{class:"text-xs fw-bold text-muted text-uppercase",href:t(D)("auth.login.page")},{default:u(()=>[p("Already have an account?")]),_:1},8,["href"])])])])])])]),_:1}),i(P)],64)}}});export{de as default};