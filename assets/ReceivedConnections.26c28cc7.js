import{_ as b,e as k,g as C}from"./index.49537e10.js";import{d as x}from"./dayjs.19e4cc98.js";import{h as j}from"./handleUser.8616b934.js";import{d as S,i as I,f as Y,c as w,o as c,g as n,h as e,t as o,u as s,F as U,k as $,j as m,w as v,q as h,m as q,n as B}from"./vendor.d65808b7.js";const d=i=>(q("data-v-10255597"),i=i(),B(),i),D={"data-name":"received-connections"},E=d(()=>e("div",{style:{height:"1px","margin-bottom":"-1px"}},null,-1)),M={class:"divide"},N={class:"divide-text"},R=h(" you have "),V={class:"emphasize"},F={key:0},H=["src","alt"],z={class:"received-card-contents"},A={class:"received-card-name"},G={class:"received-card-profession"},L={type:"button",class:"received-card-connections-qty"},O={class:"received-card-content"},T=d(()=>e("h3",null,"YOUR MESSAGE",-1)),J=["onClick"],K=["onClick"],P={class:"received-card-time"},Q={key:1,class:"empty-received"},W=d(()=>e("p",null,"empty",-1)),X=[W],Z=S({setup(i){const u=I(k),{acceptConnect:y,refuseConnect:f}=j(),a=Y(()=>u.value.user.connections);return(ee,te)=>{var r,l,p;const _=w("router-link");return c(),n("div",D,[E,e("div",M,[e("span",N,[R,e("span",V,o(((r=s(a))==null?void 0:r.received.length)||0)+" new connections",1)])]),((l=s(a))==null?void 0:l.received.length)?(c(),n("ul",F,[(c(!0),n(U,null,$((p=s(a))==null?void 0:p.received,t=>(c(),n("li",{key:t.uid,class:"received-card"},[m(_,{to:`/@${t.uid}`,class:"received-card-img-link"},{default:v(()=>[e("img",{src:t.photo||s(C)("user"),alt:t.name,class:"received-card-img"},null,8,H)]),_:2},1032,["to"]),e("div",z,[e("h3",A,[m(_,{to:`/@${t.uid}`},{default:v(()=>[h(o(t.name),1)]),_:2},1032,["to"])]),e("h4",G,o(t.job),1),e("button",L,o(t.connections_qty)+" connections ",1)]),e("div",O,[T,e("p",null,o(t.content||"empty"),1)]),e("div",null,[e("button",{type:"button",class:"received-card-accept-btn",onClick:g=>s(y)(t.uid)},"accept",8,J),e("button",{type:"button",class:"received-card-decline-btn",onClick:g=>s(f)(t.uid)},"decline",8,K),e("span",P,o(t.timestamp?s(x)(t.timestamp*1e3).format("YYYY/MM/DD HH:mm:ss"):""),1)])]))),128))])):(c(),n("div",Q,X))])}}});var ie=b(Z,[["__scopeId","data-v-10255597"]]);export{ie as default};