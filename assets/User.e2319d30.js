import{_ as ae,g as k,c as re,d as h,e as le,w as de,k as ue,l as _e,x as pe}from"./index.f9042d71.js";import{d as me,B as ve,C as f,v as he,s as fe,i as be,f as _,p as ye,r as M,H as ge,I as Ce,c as F,g as r,j as l,u as s,h as e,l as b,t as p,w as y,m as we,n as ke,o as d,F as $,k as X}from"./vendor.d65808b7.js";import{h as Me}from"./handleUser.bbd43599.js";const m=g=>(we("data-v-0dc4ef92"),g=g(),ke(),g),Ne={class:"profile-container"},Se={class:"profile-main"},Ee={class:"profile-header"},Ue={class:"profile-cover"},Ie={key:0,class:"profile-cover-btns"},Re=m(()=>e("span",null,"connected",-1)),De=m(()=>e("span",{class:"material-icons connected-btn-decoration"},"done",-1)),Pe=[Re,De],Ae={key:1,class:"profile-cover-btns"},Le=m(()=>e("button",{type:"button",class:"refuse-connect-btn"},"refuse connect",-1)),Ve={class:"profile-header-content"},je={class:"user-photo"},xe=["src"],Oe={class:"user-content-container"},Te={class:"user-content"},Be={class:"user-name-group"},Fe={class:"user-name"},$e=m(()=>e("img",{class:"user-name-logo",src:re,alt:"LinkIned logo"},null,-1)),Xe=m(()=>e("img",{src:ue,alt:"position mark"},null,-1)),Ge={class:"user-description"},He={class:"btns-group"},Ye=m(()=>e("button",{class:"contact-btn",type:"button"},"Contact info",-1)),qe={class:"aside"},Ke={class:"aside-card"},We={class:"aside-card"},ze={class:"visitor-cards-list"},Je=["src","alt"],Qe={class:"aside-card"},Ze={class:"course-cards-list"},es={class:"course-img-group"},ss=m(()=>e("img",{src:_e,alt:"play video",class:"play-video-btn"},null,-1)),os=["src","alt"],ts={class:"course-title"},ns={class:"course-viewers"},is=me({setup(g){ve(i=>({"23773f06":s(se)}));const G=f(()=>h(()=>import("./ProfileNav.674067cf.js"),["assets/ProfileNav.674067cf.js","assets/ProfileNav.8bcf1426.css","assets/index.f9042d71.js","assets/index.491beacd.css","assets/vendor.d65808b7.js"])),H=f(()=>h(()=>import("./MiniDashboard.589ceee5.js"),["assets/MiniDashboard.589ceee5.js","assets/MiniDashboard.c3fde0b6.css","assets/index.f9042d71.js","assets/index.491beacd.css","assets/vendor.d65808b7.js"])),U=f(()=>h(()=>import("./AsideCard.a0b140cb.js"),["assets/AsideCard.a0b140cb.js","assets/AsideCard.3050d0fe.css","assets/index.f9042d71.js","assets/index.491beacd.css","assets/vendor.d65808b7.js"])),Y=f(()=>h(()=>import("./ConfirmModal.c8657827.js"),["assets/ConfirmModal.c8657827.js","assets/ConfirmModal.135dd53f.css","assets/vendor.d65808b7.js","assets/index.f9042d71.js","assets/index.491beacd.css"])),q=f(()=>h(()=>import("./ConnectionsModal.e1abc69c.js"),["assets/ConnectionsModal.e1abc69c.js","assets/ConnectionsModal.2fe5a309.css","assets/index.f9042d71.js","assets/index.491beacd.css","assets/vendor.d65808b7.js","assets/handleUser.bbd43599.js"])),{user:n,removeSentConnect:K,updateOrderSideUser:I,submitConnect:W,acceptConnect:z,removeConnected:J}=Me(),C=he(),Q=fe(),N=be(le),S=_(()=>N.value.user.connections),Z=_(()=>N.value.user.uid),R=_(()=>N.value.isLogin);ye(de,n);const ee=async i=>{try{const{data:o}=await pe(i);I(o.user)}catch(o){console.dir(o),alert("not found"),Q.go(-1)}},se=_(()=>{var i;return`url(${((i=n.value)==null?void 0:i.background_cover)||k("Rectangle 3")})`}),oe=M([{name:"Darlene Black",fileName:"visitor-1",description:"HR-manager, 10 000 connec..."},{name:"Theresa Steward",fileName:"visitor-2",description:"iOS developer"},{name:"Brandon Wilson",fileName:"visitor-3",description:"Senior UX designer"},{name:"Kyle Fisher",fileName:"visitor-4",description:"Product designer at Com..."},{name:"Audrey Alexander",fileName:"visitor-5",description:"Team lead at Google"}]),te=M([{title:"UX Foundations: Prototyping",fileName:"courses-may-like-1",viewers:"27959"},{title:"Designing with Adobe XD and pro",fileName:"courses-may-like-2",viewers:"9122"},{title:"UX Foundations: Styles and GUIs",fileName:"courses-may-like-3",viewers:"13858"}]),E=M(),ne=()=>{const i="Do you want to remove the connections ?";E.value.showModal(i)},ie=()=>{!n.value||!n.value.uid||(J(n.value.uid),E.value.hideModal())},D=_(()=>{var o,c;return(c=(o=S.value)==null?void 0:o.connected)==null?void 0:c.some(v=>{var u;return v.uid===((u=n.value)==null?void 0:u.uid)})}),P=_(()=>{var o,c;return(c=(o=S.value)==null?void 0:o.sent)==null?void 0:c.some(v=>{var u;return v.uid===((u=n.value)==null?void 0:u.uid)})}),A=_(()=>{var i,o;return(o=(i=S.value)==null?void 0:i.received)==null?void 0:o.some(c=>c.uid===C.params.uid)}),L=_(()=>C.params.uid===Z.value),w=M(),ce=()=>{w.value.showModal()};return ge(()=>C.params.uid,i=>{var c;const o=C.meta.othersProfile;((c=w.value)==null?void 0:c.isModalShow)&&w.value.hideModal(),o&&ee(i)},{immediate:!0}),Ce((i,o,c)=>{I(),c()}),(i,o)=>{var u,V,j,x,O,T,B;const c=F("router-link"),v=F("router-view");return d(),r("div",Ne,[l(s(Y),{ref:(t,a)=>{a.confirmModalEl=t,E.value=t},onClickYes:ie},null,512),l(s(q),{ref:(t,a)=>{a.connectionsModalEl=t,w.value=t},connections:(u=s(n))==null?void 0:u.connections},null,8,["connections"]),e("main",Se,[e("section",Ee,[e("div",Ue,[!s(L)&&s(R)&&!s(A)?(d(),r("div",Ie,[s(D)?(d(),r("button",{key:0,type:"button",class:"connected-btn",onClick:ne},Pe)):b("",!0),!s(D)&&!s(P)?(d(),r("button",{key:1,type:"button",onClick:o[0]||(o[0]=t=>{var a;return s(W)((a=s(n))==null?void 0:a.uid)})},"connect")):b("",!0),s(P)?(d(),r("button",{key:2,type:"button",class:"wait-for-connect-btn",onClick:o[1]||(o[1]=t=>{var a;return s(K)((a=s(n))==null?void 0:a.uid)})},"wait for connect")):b("",!0)])):b("",!0),!s(L)&&s(R)&&s(A)?(d(),r("div",Ae,[e("button",{type:"button",class:"accept-connect-btn",onClick:o[2]||(o[2]=t=>{var a;return s(z)((a=s(n))==null?void 0:a.uid)})},"accept connect"),Le])):b("",!0)]),e("div",Ve,[e("div",je,[e("img",{src:((V=s(n))==null?void 0:V.photo)||s(k)("user"),alt:"user photo"},null,8,xe)]),e("div",Oe,[e("p",Te,[e("span",Be,[e("span",Fe,p((j=s(n))==null?void 0:j.name),1),$e]),l(c,{to:`/${(x=s(n))==null?void 0:x.city}`,class:"user-position-group"},{default:y(()=>{var t;return[Xe,e("span",null,p((t=s(n))==null?void 0:t.city),1)]}),_:1},8,["to"])]),e("p",Ge,p(((O=s(n))==null?void 0:O.description)||"This user did not write anything."),1),e("div",He,[Ye,e("button",{class:"connections-btn",type:"button",onClick:ce},p(((T=s(n))==null?void 0:T.connections_qty)||0)+" connections",1)])])])]),l(s(G)),l(v)]),e("aside",qe,[e("ul",null,[e("li",Ke,[l(s(H),{profileViews:(B=s(n))==null?void 0:B.profile_views},null,8,["profileViews"])]),e("li",We,[l(s(U),{title:"visitors",headLink:{title:"view all",path:"/"}},{"card-body":y(()=>[e("ul",ze,[(d(!0),r($,null,X(oe.value,t=>(d(),r("li",{key:t.fileName,class:"visitor-card"},[l(c,{to:"/"},{default:y(()=>[e("img",{src:s(k)(t.fileName),alt:t.name,class:"visitor-img"},null,8,Je),e("p",null,p(t.description),1)]),_:2},1024)]))),128))])]),_:1})]),e("li",Qe,[l(s(U),{title:"You may like these courses"},{"card-body":y(()=>[e("ul",Ze,[(d(!0),r($,null,X(te.value,t=>(d(),r("li",{key:t.fileName,class:"course-card"},[l(c,{to:"/",class:"course-link"},{default:y(()=>[e("div",es,[ss,e("img",{src:s(k)(t.fileName),alt:t.title,class:"course-img"},null,8,os)]),e("div",null,[e("h2",ts,p(t.title),1),e("span",ns,p(t.viewers)+" viewers",1)])]),_:2},1024)]))),128))])]),_:1})])])])])}}});var ls=ae(is,[["__scopeId","data-v-0dc4ef92"]]);export{ls as default};