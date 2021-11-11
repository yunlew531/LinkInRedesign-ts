import{_ as F,d as N,s as $,g as D}from"./index.9fe55531.js";import{d as q,C as A,i as L,f as M,r as u,c as O,o as n,g as d,j as _,u as m,h as o,t as h,e as P,w as p,l as f,F as R,k as T,q as b,x as z,K,m as Y,n as G}from"./vendor.d65808b7.js";import{b as H}from"./handleConnections.e760155a.js";const v=t=>(Y("data-v-185abd70"),t=t(),G(),t),J=["onClick"],Q={"data-simplebar":"",class:"modal"},W={class:"modal-header"},X={class:"modal-title"},Z=v(()=>o("span",null,"connections",-1)),ee=b("go console"),oe={class:"connections-list"},se=["src","alt"],te={class:"connected-item-contents"},ne={class:"connected-item-name"},ae={key:0},ce={class:"recent-connections-job"},de=["onClick"],le=v(()=>o("span",null,"friend",-1)),ie=v(()=>o("span",{class:"material-icons"},"done",-1)),re=[le,ie],ue=q({props:{connections:{type:Object,default:()=>({}),required:!0},consoleBtn:Boolean},emits:["refreshUser"],setup(t,{expose:g,emit:j}){const x=A(()=>N(()=>import("./ConfirmModal.088e75d1.js"),["assets/ConfirmModal.088e75d1.js","assets/ConfirmModal.135dd53f.css","assets/vendor.d65808b7.js","assets/index.9fe55531.js","assets/index.491beacd.css"])),C=L($),B=M(()=>C.value.user.uid),I=M(()=>{var s;return(s=C.value.user.connections)==null?void 0:s.connected}),S=s=>{var a;return(a=I.value)==null?void 0:a.some(c=>c.uid===s)},l=u(!1),E=()=>l.value=!0,k=()=>l.value=!1,i=u(),r=u(),U=s=>{r.value=s.uid;const a=`Do you want to remove the connections with ${s.name} ?`;i.value.showModal(a)},V=async()=>{if(!!r.value)try{await H(r.value),i.value.hideModal(),j("refreshUser")}catch(s){console.dir(s)}};return g({isModalShow:l,showModal:E,hideModal:k}),(s,a)=>{var w;const c=O("router-link");return n(),d("div",{class:z(["modal-container",{show:l.value}]),onClick:K(k,["self"])},[_(m(x),{ref:(e,y)=>{y.confirmModalEl=e,i.value=e},onClickYes:V},null,512),o("div",Q,[o("div",W,[o("h3",X,[Z,o("span",null,"("+h(((w=t.connections.connected)==null?void 0:w.length)||0)+")",1)]),t.consoleBtn?(n(),P(c,{key:0,to:"/network/connections"},{default:p(()=>[ee]),_:1})):f("",!0)]),o("ul",oe,[(n(!0),d(R,null,T(t.connections.connected,e=>(n(),d("li",{key:e.uid,class:"connections-item"},[_(c,{to:`/@${e.uid}`,class:"connected-item-link"},{default:p(()=>[o("img",{src:e.photo||m(D)("user"),alt:e.name,class:"connected-item-img"},null,8,se)]),_:2},1032,["to"]),o("div",te,[o("h3",ne,[_(c,{to:`/@${e.uid}`},{default:p(()=>[b(h(e.name),1)]),_:2},1032,["to"]),e.uid===m(B)?(n(),d("span",ae,"you")):f("",!0)]),o("h4",ce,h(e.job),1)]),S(e.uid)?(n(),d("button",{key:0,onClick:y=>U(e),type:"button",class:"friend-btn"},re,8,de)):f("",!0)]))),128))])])],10,J)}}});var pe=F(ue,[["__scopeId","data-v-185abd70"]]);export{pe as default};