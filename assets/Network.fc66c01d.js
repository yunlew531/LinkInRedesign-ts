import{_ as c,g as l}from"./index.bb2099de.js";import{d as _,r as m,c as s,g as o,h as e,F as p,k as d,j as u,o as a,e as v,w as h,u as g,t as k}from"./vendor.d58ea184.js";const w={class:"network-container"},f={class:"aside"},N=["src","alt"],x={class:"main-container"},y=_({setup(B){const n=m([{title:"Connections",path:"/network/connections",imgName:"link"},{title:"Invitations",path:"/network/invitations",imgName:"invitations"},{title:"Groups",path:"/network/groups",imgName:"users"},{title:"Articles",path:"/network/articles",imgName:"articles"},{title:"Hashtags",path:"/network/hashtags",imgName:"hash"}]);return(C,b)=>{const r=s("router-link"),i=s("router-view");return a(),o("div",w,[e("aside",f,[(a(!0),o(p,null,d(n.value,t=>(a(),v(r,{to:t.path,key:t.title,class:"nav-link","active-class":"active"},{default:h(()=>[e("img",{src:g(l)(t.imgName),alt:t.title,class:"nav-link-icon"},null,8,N),e("span",null,k(t.title),1)]),_:2},1032,["to"]))),128))]),e("div",x,[u(i)])])}}});var F=c(y,[["__scopeId","data-v-33dbf549"]]);export{F as default};