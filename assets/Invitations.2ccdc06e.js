import{_ as w,d as x,s as H,g as L}from"./index.9fe55531.js";import{d as V,C as S,i as N,f as E,r as m,c as P,g as r,h as n,x as j,t as c,u as o,j as v,w as p,T as Y,F as I,k as q,m as F,n as M,o as i,e as O,J as U,q as z}from"./vendor.d65808b7.js";import{d as f}from"./dayjs.19e4cc98.js";const g=d=>(F("data-v-0e32fac9"),d=d(),M(),d),G={class:"btns-container"},J=g(()=>n("span",null,"Received",-1)),K={class:"received-qty"},Q=g(()=>n("span",null,"Sent",-1)),W={class:"sent-qty"},X=g(()=>n("div",{class:"divide"},[n("span",{class:"divide-text"},"recent connections")],-1)),Z={class:"recent-connections-list"},ee=["src","alt"],ne={class:"recent-connections-contents"},te={class:"recent-connections-name"},se={class:"recent-connections-profession"},oe={key:0,class:"connections-time"},ce={key:1,class:"connections-time"},ie=V({setup(d){const R=S(()=>x(()=>import("./ReceivedConnections.33e0ea06.js"),["assets/ReceivedConnections.33e0ea06.js","assets/ReceivedConnections.2e698d89.css","assets/index.9fe55531.js","assets/index.491beacd.css","assets/vendor.d65808b7.js","assets/dayjs.19e4cc98.js","assets/handleConnections.e760155a.js"])),D=S(()=>x(()=>import("./SentConnections.c2d00cb4.js"),["assets/SentConnections.c2d00cb4.js","assets/SentConnections.b7268037.css","assets/index.9fe55531.js","assets/index.491beacd.css","assets/vendor.d65808b7.js","assets/dayjs.19e4cc98.js","assets/handleConnections.e760155a.js"])),T=N(H),C=E(()=>T.value.user.connections),A=m([{name:"Audrey Alexander",uid:"argaerg",profession:"Team lead at Google",img:"feed-user-4",connect_time:1632428039},{name:"Kyle Fisher",uid:"ergerg",profession:"Product designer at Commandor Corp",img:"feed-user-2",connect_time:1632426180}]),h=m(""),a=m("ReceivedConnections"),B=E(()=>{let t=null;switch(a.value){case"ReceivedConnections":t=R;break;case"SentConnections":t=D;break}return t});let _=0;const u=m(),l=t=>{t?t instanceof Element?(_=t.clientHeight||_,a.value=h.value):(a.value="",h.value=t):_=0,u.value&&(!t||t instanceof Element&&!t.clientHeight)&&(u.value.style.height=`${_}px`)};return(t,s)=>{var k,b;const y=P("router-link");return i(),r(I,null,[n("div",G,[n("button",{type:"button",class:j(["page-btn",{active:a.value==="ReceivedConnections"}]),onClick:s[0]||(s[0]=e=>l("ReceivedConnections"))},[J,n("span",K,"("+c(((k=o(C))==null?void 0:k.received.length)||0)+")",1)],2),n("button",{type:"button",class:j(["page-btn",{active:a.value==="SentConnections"}]),onClick:s[1]||(s[1]=e=>l("SentConnections"))},[Q,n("span",W,"("+c(((b=o(C))==null?void 0:b.sent.length)||0)+")",1)],2)]),n("div",{ref:(e,$)=>{$.fillHeightEl=e,u.value=e}},null,512),v(Y,{name:"fade",mode:"out-in",onBeforeEnter:s[2]||(s[2]=e=>l(null)),onBeforeLeave:s[3]||(s[3]=e=>l(e)),onAfterLeave:s[4]||(s[4]=e=>l(e))},{default:p(()=>[(i(),O(U(o(B))))]),_:1}),X,n("ul",Z,[(i(!0),r(I,null,q(A.value,e=>(i(),r("li",{key:e.uid,class:"recent-connections-card"},[v(y,{to:`/@${e.uid}`,class:"recent-card-img-link"},{default:p(()=>[n("img",{src:o(L)(e.img),alt:e.name,class:"recent-connections-img"},null,8,ee)]),_:2},1032,["to"]),n("div",ne,[n("h3",te,[v(y,{to:`/@${e.uid}`},{default:p(()=>[z(c(e.name),1)]),_:2},1032,["to"])]),n("h4",se,c(e.profession),1)]),o(f)(e.connect_time*1e3).isToday()?(i(),r("span",oe,c(o(f)(e.connect_time*1e3).fromNow()),1)):(i(),r("span",ce,c(o(f)(e.connect_time*1e3).format("YYYY/MM/DD")),1))]))),128))])],64)}}});var de=w(ie,[["__scopeId","data-v-0e32fac9"]]);export{de as default};