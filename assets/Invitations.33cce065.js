import{_ as j,d as h,g as D}from"./index.bdfff709.js";import{d as T,C as b,r as m,f as A,c as B,g as a,h as o,x as k,j as v,w as f,T as $,F as x,k as w,m as H,n as L,o as s,e as V,K as N,u as l,q as P,t as _}from"./vendor.175a345b.js";import{d as p}from"./dayjs.71f06998.js";const Y=r=>(H("data-v-467bed56"),r=r(),L(),r),F={class:"btns-container"},K=Y(()=>o("div",{class:"divide"},[o("span",{class:"divide-text"},"recent connections")],-1)),M={class:"recent-connections-list"},O=["src","alt"],U={class:"recent-connections-contents"},q={class:"recent-connections-name"},z={class:"recent-connections-profession"},G={key:0,class:"connections-time"},J={key:1,class:"connections-time"},Q=T({setup(r){const y=b(()=>h(()=>import("./ReceivedConnections.b565c506.js"),["assets/ReceivedConnections.b565c506.js","assets/ReceivedConnections.149ccdf8.css","assets/index.bdfff709.js","assets/index.64331f55.css","assets/vendor.175a345b.js"])),E=b(()=>h(()=>import("./SentConnections.67fdd318.js"),["assets/SentConnections.67fdd318.js","assets/SentConnections.1aefe11f.css","assets/index.bdfff709.js","assets/index.64331f55.css","assets/vendor.175a345b.js"])),S=m([{name:"Audrey Alexander",uid:"argaerg",profession:"Team lead at Google",img:"feed-user-4",connect_time:1632428039},{name:"Kyle Fisher",uid:"ergerg",profession:"Product designer at Commandor Corp",img:"feed-user-2",connect_time:1632426180}]),g=m(""),i=m("ReceivedConnections"),I=A(()=>{let n=null;switch(i.value){case"ReceivedConnections":n=y;break;case"SentConnections":n=E;break}return n});let d=0;const u=m(null),c=n=>{n?n instanceof Element?(d=n.clientHeight||d,i.value=g.value):(i.value="",g.value=n):d=0,u.value&&(!n||n instanceof Element&&!n.clientHeight)&&(u.value.style.height=`${d}px`)};return(n,t)=>{const C=B("router-link");return s(),a(x,null,[o("div",F,[o("button",{type:"button",class:k(["page-btn",{active:i.value==="ReceivedConnections"}]),onClick:t[0]||(t[0]=e=>c("ReceivedConnections"))},"Received ",2),o("button",{type:"button",class:k(["page-btn",{active:i.value==="SentConnections"}]),onClick:t[1]||(t[1]=e=>c("SentConnections"))},"Sent ",2)]),o("div",{ref:(e,R)=>{R.fillHeightEl=e,u.value=e}},null,512),v($,{name:"fade",mode:"out-in",onBeforeEnter:t[2]||(t[2]=e=>c(null)),onBeforeLeave:t[3]||(t[3]=e=>c(e)),onAfterLeave:t[4]||(t[4]=e=>c(e))},{default:f(()=>[(s(),V(N(l(I))))]),_:1}),K,o("ul",M,[(s(!0),a(x,null,w(S.value,e=>(s(),a("li",{key:e.uid,class:"recent-connections-card"},[v(C,{to:`/@${e.uid}`,class:"recent-card-img-link"},{default:f(()=>[o("img",{src:l(D)(e.img),alt:e.name,class:"recent-connections-img"},null,8,O)]),_:2},1032,["to"]),o("div",U,[o("h3",q,[v(C,{to:`/@${e.uid}`},{default:f(()=>[P(_(e.name),1)]),_:2},1032,["to"])]),o("h4",z,_(e.profession),1)]),l(p)(e.connect_time*1e3).isToday()?(s(),a("span",G,_(l(p)(e.connect_time*1e3).fromNow()),1)):(s(),a("span",J,_(l(p)(e.connect_time*1e3).format("YYYY/MM/DD")),1))]))),128))])],64)}}});var ee=j(Q,[["__scopeId","data-v-467bed56"]]);export{ee as default};