import{_ as M,g as f,a as Y,b as H,c as K,d as g,s as W,e as z,f as J,h as Q,i as Z,j as E,k as ee,l as se}from"./index.fe1cc65e.js";import{d as te,C as oe,D as y,j as ie,k as C,r as m,h as P,c as p,e,u as t,q as ae,t as d,i as r,l as h,E as w,G as D,p as ne,f as re,o as u,F as I,m as x}from"./vendor.4dab4da4.js";const c=v=>(ne("data-v-91f953ce"),v=v(),re(),v),ce={class:"profile-container"},le={class:"profile-main"},de={class:"profile-header"},_e={class:"profile-cover"},pe={class:"profile-edit-btns-group"},ue={class:"upload-bg-cover"},me=c(()=>e("button",{type:"button"},[e("img",{src:E,alt:"upload"})],-1)),he=c(()=>e("button",{type:"button"},"edit profile",-1)),ve=c(()=>e("button",{type:"button"},[e("img",{src:Y,alt:"more infomation"})],-1)),fe={class:"profile-header-content"},ge={class:"user-photo"},ye=c(()=>e("div",{class:"user-photo-hover"},[e("img",{src:H,alt:"camera"})],-1)),be=["src"],ke={key:0,type:"button",class:"upload-photo-btn"},we=c(()=>e("img",{src:E,alt:"upload"},null,-1)),De=[we],Ne={class:"user-content-container"},Ee={class:"user-content"},Ce={class:"user-name-group"},Pe={class:"user-name"},Ie=c(()=>e("img",{class:"user-name-logo",src:K,alt:"LinkIned logo"},null,-1)),xe=c(()=>e("img",{src:ee,alt:"position mark"},null,-1)),Ae={class:"btns-group"},Se=c(()=>e("button",{class:"contact-btn",type:"button"},"Contact info",-1)),Ue={class:"connections-btn",type:"button"},Ve={class:"aside"},je={class:"aside-card"},Te={class:"aside-card"},Be={class:"visitor-cards-list"},Fe=["src","alt"],Le={class:"aside-card"},Oe={class:"course-cards-list"},Re={class:"course-img-group"},$e=c(()=>e("img",{src:se,alt:"play video",class:"play-video-btn"},null,-1)),Xe=["src","alt"],Ge={class:"course-title"},qe={class:"course-viewers"},Me=te({setup(v){oe(l=>({"796059b1":t(T)}));const A=y(()=>g(()=>import("./ProfileNav.810178e1.js"),["assets/ProfileNav.810178e1.js","assets/ProfileNav.6e847c96.css","assets/index.fe1cc65e.js","assets/index.754faa28.css","assets/vendor.4dab4da4.js"])),S=y(()=>g(()=>import("./MiniDashboard.263f665a.js"),["assets/MiniDashboard.263f665a.js","assets/MiniDashboard.c3fde0b6.css","assets/index.fe1cc65e.js","assets/index.754faa28.css","assets/vendor.4dab4da4.js"])),N=y(()=>g(()=>import("./AsideCard.11e33a89.js"),["assets/AsideCard.11e33a89.js","assets/AsideCard.3050d0fe.css","assets/index.fe1cc65e.js","assets/index.754faa28.css","assets/vendor.4dab4da4.js"])),U=y(()=>g(()=>import("./Editor.5a12f68a.js"),["assets/Editor.5a12f68a.js","assets/Editor.1cebcf8b.css","assets/vendor.4dab4da4.js","assets/index.fe1cc65e.js","assets/index.754faa28.css"])),{getProfile:V,updateUserProfile:b}=W,j=ie(z);V();const a=C(()=>j.value.user),T=C(()=>`url(${a.value.background_cover||f("Rectangle 3")})`),B=m([{name:"Darlene Black",fileName:"visitor-1",description:"HR-manager, 10 000 connec..."},{name:"Theresa Steward",fileName:"visitor-2",description:"iOS developer"},{name:"Brandon Wilson",fileName:"visitor-3",description:"Senior UX designer"},{name:"Kyle Fisher",fileName:"visitor-4",description:"Product designer at Com..."},{name:"Audrey Alexander",fileName:"visitor-5",description:"Team lead at Google"}]),F=m([{title:"UX Foundations: Prototyping",fileName:"courses-may-like-1",viewers:"27959"},{title:"Designing with Adobe XD and pro",fileName:"courses-may-like-2",viewers:"9122"},{title:"UX Foundations: Styles and GUIs",fileName:"courses-may-like-3",viewers:"13858"}]),k=m(null),L=m({placeholder:"input description"}),_=m(!1),O=()=>{k.value.setText(a.value.description),_.value=!0},R=async()=>{const l=k.value.getText();try{const{data:o}=await J(l),{description:i}=o;b({description:i}),_.value=!1}catch(o){alert(o.response.data.message)}},$=()=>_.value=!1,X=async l=>{const o=l.target.files[0],i=new FormData;i.append("img-file",o);try{const{data:n}=await Q(i),{url:s}=n;b({photo:s})}catch(n){alert(n.response.data.message)}},G=async l=>{const o=l.target.files[0],i=new FormData;i.append("img-file",o);try{const{data:n}=await Z(i),{url:s}=n;b({background_cover:s})}catch(n){alert(n.response.data.message)}};return(l,o)=>{const i=P("router-link"),n=P("router-view");return u(),p("div",ce,[e("main",le,[e("section",de,[e("div",_e,[e("div",pe,[e("div",ue,[me,e("input",{type:"file",onChange:o[0]||(o[0]=s=>G(s))},null,32)]),he,ve])]),e("div",fe,[e("div",ge,[e("input",{type:"file",class:"upload-photo-input",onChange:o[1]||(o[1]=s=>X(s))},null,32),ye,e("img",{src:t(a).photo||t(f)("user"),alt:"user photo"},null,8,be),t(a).photo?ae("",!0):(u(),p("button",ke,De))]),e("div",Ne,[e("p",Ee,[e("span",Ce,[e("span",Pe,d(t(a).name),1),Ie]),r(i,{to:`/${t(a).city}`,class:"user-position-group"},{default:h(()=>[xe,e("span",null,d(t(a).city),1)]),_:1},8,["to"])]),w(r(t(U),{ref:(s,q)=>{q.editorEl=s,k.value=s},options:L.value,marginY:"20px",onUpdate:R,onCancel:$},null,8,["options"]),[[D,_.value]]),w(e("p",{onDblclick:O,class:"user-description"},d(t(a).description||"empty. double click to add description"),545),[[D,!_.value]]),w(e("div",Ae,[Se,e("button",Ue,d(t(a).connections_qty||0)+" connections",1)],512),[[D,!_.value]])])])]),r(t(A)),r(n)]),e("aside",Ve,[e("ul",null,[e("li",je,[r(t(S),{profileViews:t(a).profile_views},null,8,["profileViews"])]),e("li",Te,[r(t(N),{title:"visitors",headLink:{title:"view all",path:"/"}},{"card-body":h(()=>[e("ul",Be,[(u(!0),p(I,null,x(B.value,s=>(u(),p("li",{key:s.fileName,class:"visitor-card"},[r(i,{to:"/"},{default:h(()=>[e("img",{src:t(f)(s.fileName),alt:s.name,class:"visitor-img"},null,8,Fe),e("p",null,d(s.description),1)]),_:2},1024)]))),128))])]),_:1})]),e("li",Le,[r(t(N),{title:"You may like these courses"},{"card-body":h(()=>[e("ul",Oe,[(u(!0),p(I,null,x(F.value,s=>(u(),p("li",{key:s.fileName,class:"course-card"},[r(i,{to:"/",class:"course-link"},{default:h(()=>[e("div",Re,[$e,e("img",{src:t(f)(s.fileName),alt:s.title,class:"course-img"},null,8,Xe)]),e("div",null,[e("h2",Ge,d(s.title),1),e("span",qe,d(s.viewers)+" viewers",1)])]),_:2},1024)]))),128))])]),_:1})])])])])}}});var Ke=M(Me,[["__scopeId","data-v-91f953ce"]]);export{Ke as default};
