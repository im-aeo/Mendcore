import{l as m,Q as p,s as k,v as o,x as y,o as e,c as s,t as u,C as c,a as _,F as g}from"./vendor-9580edd1.js";const h={key:0},f={key:1},b={key:0},j=m({__name:"FlashMessages",setup(x){const{props:l}=p(),t=k(!0),n=o(()=>l.message),v=o(()=>l.error),r=o(()=>l.error),i=o(()=>r.value||Object.keys(r.value||{}).length>0);return y([n,i],()=>{t.value=!0},{deep:!0}),(C,a)=>(e(),s(g,null,[n.value&&t.value?(e(),s("div",{key:0,class:"mb-3 text-center alert alert-success fw-semibold",onClick:a[0]||(a[0]=d=>t.value=!1)},u(n.value),1)):c("",!0),i.value&&t.value?(e(),s("div",{key:1,class:"mb-3 text-center alert alert-danger fw-semibold",onClick:a[1]||(a[1]=d=>t.value=!1)},[v.value?(e(),s("div",h,u(v.value),1)):(e(),s("div",f,[Object.keys(r.value).length===1?(e(),s("span",b,"You have an error in your request.")):c("",!0),_("div",null,"You have "+u(Object.keys(r.value).length)+" errors in your request.",1)]))])):c("",!0)],64))}});export{j as _};