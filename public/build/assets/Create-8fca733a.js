import{l as p,o as c,c as x,b as a,w as f,a as t,z as y,A as r,B as d,u as i,F as k,p as v,H as g}from"./vendor-9580edd1.js";import{_}from"./Navbar.vue_vue_type_script_setup_true_lang-7477f862.js";import{S as C}from"./Sidebar-1e42415c.js";import{_ as T}from"./Footer.vue_vue_type_script_setup_true_lang-83a668be.js";import{u as h}from"./index-7687189b.js";import"./app-2c5c3ded.js";const w={class:"card card-body"},$=t("div",{class:"text-xl text-danger bg-primary"},"Create a Post",-1),B=t("div",{class:"text-xs text-muted bg-primary"}," Make sure you post in the appropriate sub-forum and that your post does not break any site rules. ",-1),I=t("div",{class:"mx-1 my-3 divider"},null,-1),F=["onSubmit"],S=t("label",{for:"post-title",class:"mb-2 text-xs fw-bold text-uppercase"},"Post Title",-1),U=t("label",{for:"post-body",class:"mb-2 text-xs fw-bold text-uppercase"},"Post Content",-1),V=["disabled"],L={class:"min-w-0 gap-2 mt-3 flex-container"},q=p({__name:"Create",props:{topic:{type:Object,required:!0}},setup(b){const m=b,s=h({title:"",body:""}),u=()=>{v.get("/sanctum/csrf-cookie").then(l=>{s.post(g("forum.create.validate",{id:m.topic.id}),{onFinish:()=>s.reset("password")})})},n=l=>{s.body+=l};return(l,e)=>(c(),x(k,null,[a(_),a(C,null,{default:f(()=>[t("div",w,[$,B,I,t("form",{onSubmit:y(u,["prevent"])},[S,r(t("input",{id:"post-title",class:"mb-2 form",type:"text",name:"title","onUpdate:modelValue":e[0]||(e[0]=o=>i(s).title=o),placeholder:"Title",maxlength:"64"},null,512),[[d,i(s).title]]),U,r(t("textarea",{id:"post-body",class:"mb-2 form",name:"body","onUpdate:modelValue":e[1]||(e[1]=o=>i(s).body=o),placeholder:"Body",maxlength:"4096"},null,512),[[d,i(s).body]]),t("button",{class:"btn btn-success btn-block",type:"submit",disabled:i(s).processing},"Create",8,V)],40,F),t("div",L,[t("button",{class:"btn btn-info",onClick:e[2]||(e[2]=o=>n("[color=#hexcodehere]Colored Text[/color]"))},"Add Color"),t("button",{class:"btn btn-warning",onClick:e[3]||(e[3]=o=>n("[b]Bold Text[/b]"))},"Bold Text"),t("button",{class:"btn btn-success",onClick:e[4]||(e[4]=o=>n("[i]Italic Text[/i]"))},"Italic Text"),t("button",{class:"btn btn-success",onClick:e[5]||(e[5]=o=>n("[u]Underlined Text[/u]"))},"Underline Text"),t("button",{class:"btn btn-info",onClick:e[6]||(e[6]=o=>n("[img]Image Link[/img]"))},"Insert an Image"),t("button",{class:"btn btn-danger",onClick:e[7]||(e[7]=o=>n("[url=https://yourlinkhere]Link Text[/url]"))},"Link To Website")])])]),_:1}),a(T)],64))}});export{q as default};