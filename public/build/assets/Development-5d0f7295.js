import{r as m,o as l,c as r,a as s,f as c,t as a,z as h,A as p,B as u,C as b,b as f,F as w,N as g}from"./vendor-9580edd1.js";import{_ as v}from"./app-2c5c3ded.js";const _={data(){return{password:"",showError:!1}},methods:{submitPassword(){this.$inertia.post("/maintenance",{password:this.password}).then(()=>{location.reload()}).catch(()=>{this.showError=!0})}}},x={class:"container"},y={class:"grid-x"},k={class:"cell medium-7 p-2"},A={class:"text-xl fw-semibold mb-1"},q=s("i",{class:"fas fa-globe text-warning"},null,-1),F={class:"card card-body mb-3"},P={class:"mb-3"},$=s("div",{class:"text-xl"},"Frequently Asked Questions",-1),E=s("div",{class:"mx-1 my-2 divider"},null,-1),N=s("p",null,[s("b",null,"Can I reserve my username?")],-1),S={class:"cell medium-5 p-2"},V=g('<div class="text-xl fw-semibold mb-1">Progress <i class="fas fa-bars-progress fa-flip-horizontal text-warning"></i></div><div class="card card-body mb-2"><div class="mb-2"><ul class="tabs flex-dir-column"><li class="tab-item"><a href="#" class="tab-link active squish"><i class="fas fa-check"> </i>Authentication</a></li><li class="tab-item mt-1"><a href="#" class="tab-link active squish"><i class="fas fa-check"> </i>Item Shop</a></li><li class="tab-item mt-1"><a href="#" class="tab-link active squish"><i class="fas fa-check"> </i>Forums</a></li><li class="tab-item"><a href="#" class="tab-link squish"><i class="fas fa-clock text-warning"> </i>Settings</a></li><li class="tab-item"><a href="#" class="tab-link squish"><i class="fas fa-clock text-warning"> </i>Real Life Purchasing</a></li><li class="tab-item"><a href="#" class="tab-link squish"><i class="fas fa-clock text-warning"> </i>Settings</a></li><li class="tab-item"><a href="#" class="tab-link squish"><i class="fas fa-clock text-warning"> </i>Real Life Purchasing (Memberships)</a></li></ul></div></div>',2),C={class:"card card-body mb-3"},B=s("div",{class:"text-xl"},"Maintenance Code",-1),D=s("div",{class:"text-sm mt-1 text-muted"},"We will be back up soon!",-1),M=s("div",{class:"mx-1 my-3 divider"},null,-1),I={class:"mb-2"},R=s("button",{class:"btn btn-info mb-2 w-100 d-block",type:"submit"},"Enter",-1),W={key:0,class:"text-xs text-danger fw-bold mini-text mb-2"};function z(e,t,L,T,i,n){const d=m("Footer");return l(),r(w,null,[s("main",x,[s("div",y,[s("div",k,[s("div",A,[c("Roadmap - "+a(e.$page.props.site.name)+" ",1),q]),s("div",F,[s("div",P,[c(a(e.$page.props.site.name)+" is a new website where you can imagine something you've always wanted to build, and then bring that imagination into a creation of your own. "+a(e.$page.props.site.name)+" is pretty new and were still setting everything up to be ready for you. ",1),s("p",null,"We can not wait to see you on "+a(e.$page.props.site.name)+"! ❤️",1),$,E,s("p",null,[s("b",null,"Will "+a(e.$page.props.site.name)+" have a game client & workshop?",1)]),s("p",null,"Yes, "+a(e.$page.props.site.name)+" will have an official game client and workshop! Our client is specifically being made in the Godot engine, so users can have everything they need to start bring their imagination to life.",1),N,s("p",null,"As of right now, it is not possible to reserve a username, although we will be opening this up in the near future close to "+a(e.$page.props.site.name)+"'s release. You will only be able to reserve one username, including spaced usernames.",1)])])]),s("div",S,[V,s("div",C,[B,D,M,s("form",{onSubmit:t[1]||(t[1]=h((...o)=>n.submitPassword&&n.submitPassword(...o),["prevent"]))},[s("div",I,[p(s("input",{class:"form",type:"password",placeholder:"Developer Password","onUpdate:modelValue":t[0]||(t[0]=o=>i.password=o)},null,512),[[u,i.password]])]),R],32),i.showError?(l(),r("div",W," Incorrect password. Please try again. ")):b("",!0)])])])]),f(d)],64)}const O=v(_,[["render",z]]);export{O as default};