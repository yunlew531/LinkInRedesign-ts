import{_ as W,d as k,u as Z,g as E}from"./index.f237255b.js";import{d as p}from"./dayjs.5546b05e.js";import{d as ee,B as M,i as te,r as u,c as se,g as r,h as e,j as v,w as y,u as n,t as c,F as h,k as j,m as re,n as oe,o,l as ne,q as V}from"./vendor.d58ea184.js";const d=m=>(re("data-v-2236698e"),m=m(),oe(),m),ie={class:"profile-card"},ce=d(()=>e("div",null,null,-1)),ae=d(()=>e("h2",{class:"card-title"},"About",-1)),le={key:0,class:"card-paragraph"},de={key:1,class:"about-list-empty"},ue=d(()=>e("button",{type:"button",class:"more-btn"},"see more",-1)),_e={class:"profile-card"},pe=d(()=>e("div",{class:"card-header"},[e("h2",{class:"projects-title card-title"},"Projects"),e("span",{class:"projects-subtitle"},"3 of 12")],-1)),he={key:0,class:"project-list"},me=["onClick"],fe=["src","alt"],ve={class:"project-card-title"},ye={class:"project-card-subtitle"},je={key:1,class:"project-list-empty"},ge=d(()=>e("button",{type:"button",class:"more-btn"},"show all (12)",-1)),xe={class:"profile-card"},be=d(()=>e("h2",{class:"card-title"},"Skills & Endoresments",-1)),Ne={class:"skills-list"},ke={class:"skill-user-num"},Ee=d(()=>e("h3",{class:"skill-card-title"},"User experience (UX)",-1)),Me={class:"users-photo-list"},Ie=["src"],Pe={key:0,class:"user-num-btn"},Ce={type:"button"},we={class:"profile-card"},Se=d(()=>e("div",{class:"card-header"},[e("h2",{class:"card-title experience-section-title"},"Experience")],-1)),Ye={key:0},Te=["src","alt"],De={class:"experience-card-content"},Ue={class:"experience-card-header"},Ve={class:"experience-card-title"},Ae=["onClick"],Be=V(" - "),Le={class:"experience-card-experience-time"},Re={class:"experience-card-paragraph"},Fe={key:1,class:"experience-empty-notice"},Oe=V("This user did not write anything."),Xe=d(()=>e("div",null,null,-1)),$e=ee({setup(m){const A=M(()=>k(()=>import("./ProjectModal.878b7e12.js"),["assets/ProjectModal.878b7e12.js","assets/ProjectModal.5134f8bb.css","assets/index.f237255b.js","assets/index.a5847c83.css","assets/vendor.d58ea184.js","assets/main.9c3e8e8a.js","assets/dayjs.5546b05e.js"])),B=M(()=>k(()=>import("./ExperienceModal.3df9d1db.js"),["assets/ExperienceModal.3df9d1db.js","assets/ExperienceModal.88d2298b.css","assets/index.f237255b.js","assets/index.a5847c83.css","assets/vendor.d58ea184.js","assets/dayjs.5546b05e.js"])),L=M(()=>k(()=>import("./Education.b9403e86.js"),["assets/Education.b9403e86.js","assets/Education.ead56601.css","assets/index.f237255b.js","assets/index.a5847c83.css","assets/vendor.d58ea184.js"])),a=te(Z),R=u([{title:"User experience (UX)",users:[{fileName:"user-experience-1"},{fileName:"user-experience-2"},{fileName:"user-experience-3"},{fileName:"user-experience-4"},{fileName:"user-experience-5"},{fileName:"user-experience-6"}]},{title:"User interface (UI)",users:[{fileName:"user-interface-1"},{fileName:"user-interface-2"},{fileName:"user-interface-3"},{fileName:"user-interface-4"},{fileName:"user-interface-5"},{fileName:"user-interface-6"},{fileName:"user-interface-7"}]},{title:"Brand identity",users:[{fileName:"user-identity-1"},{fileName:"user-identity-2"},{fileName:"user-identity-3"},{fileName:"user-identity-4"},{fileName:"user-identity-5"}]}]),F=s=>s.filter((i,_)=>_<5),f=u({}),g=u(0),x=u(null),O=(s,i)=>{f.value=s,g.value=i,x.value.setModalStatus("update"),x.value.showModal()},X=s=>f.value=s,$=s=>{var i;g.value=s,!!((i=a.value)==null?void 0:i.projects)&&(f.value=a.value.projects[s])},q=s=>{const i=s.content.ops.filter(_=>_.insert.image)[0];return i?i.insert.image:E("image")},b=u(null),N=u({}),z=s=>{N.value=s,b.value.setStatus("update"),b.value.showModal()},G=(s,i)=>s&&i?p(s*1e3).to(p(i*1e3),!0):"",H=s=>s?p(s*1e3).format("D MMMM YYYY"):"",J=s=>s?p(s*1e3).format("D MMMM YYYY"):"",K=s=>s&&s.image_url?s.image_url:E("upload_cloud"),Q=s=>N.value=s;return(s,i)=>{var I,P,C,w,S,Y,T,D,U;const _=se("router-link");return o(),r(h,null,[e("section",ie,[v(n(A),{ref:(t,l)=>{l.projectModalEl=t,x.value=t},projects:(I=n(a))==null?void 0:I.projects,currentProject:f.value,currentProjectIdx:g.value,onSetCurrentProject:X,onSetCurrentIdx:$},{"project-body-header":y(()=>[ce]),_:1},8,["projects","currentProject","currentProjectIdx"]),v(n(B),{ref:(t,l)=>{l.experienceModalEl=t,b.value=t},experience:N.value,onSetTempExperience:Q},null,8,["experience"]),ae,((P=n(a))==null?void 0:P.about)?(o(),r("p",le,c(((C=n(a))==null?void 0:C.about)||"This user did not write anything."),1)):(o(),r("div",de,"This user did not write anything.")),ue]),e("section",_e,[pe,((S=(w=n(a))==null?void 0:w.projects)==null?void 0:S.length)?(o(),r("ul",he,[(o(!0),r(h,null,j((Y=n(a))==null?void 0:Y.projects,(t,l)=>(o(),r("li",{key:t.id,class:"project-card",onClick:qe=>O(t,l)},[e("img",{src:q(t),alt:t.title,class:"project-img"},null,8,fe),e("h3",ve,c(t.title),1),e("span",ye,c(t.create_time?n(p)(t.create_time*1e3).format("YYYY/MM/DD"):""),1)],8,me))),128))])):(o(),r("div",je,"This user did not write anything.")),ge]),e("section",xe,[be,e("ul",Ne,[(o(!0),r(h,null,j(R.value,t=>(o(),r("li",{key:t.title,class:"skill-card"},[e("span",ke,c(t.users.length),1),Ee,e("ul",Me,[(o(!0),r(h,null,j(F(t.users),l=>(o(),r("li",{key:l.fileName},[v(_,{to:"/"},{default:y(()=>[e("img",{class:"skill-user-img",src:n(E)(l.fileName),alt:"user"},null,8,Ie)]),_:2},1024)]))),128)),t.users.length-5>0?(o(),r("li",Pe,[e("button",Ce,"+"+c(t.users.length-5),1)])):ne("",!0)])]))),128))])]),e("section",we,[Se,((D=(T=n(a))==null?void 0:T.experience)==null?void 0:D.length)?(o(),r("ul",Ye,[(o(!0),r(h,null,j((U=n(a))==null?void 0:U.experience,t=>(o(),r("li",{key:t.title,class:"experience-card"},[e("img",{class:"experience-card-img",src:K(t),alt:t.title},null,8,Te),e("div",De,[e("div",Ue,[e("div",null,[e("h3",Ve,c(t.title),1),e("h4",null,c(t.place),1)]),e("button",{type:"button",class:"experience-edit-btn",onClick:l=>z(t)},"edit",8,Ae)]),e("p",null,[e("span",null,c(H(t.start_time)),1),Be,e("span",null,c(J(t.end_time)),1),e("span",Le,c(G(t.start_time,t.end_time)),1)]),e("p",Re,c(t.content),1)])]))),128))])):(o(),r("div",Fe," This user did not write anything. "))]),v(n(L),{education:n(a).education},{"empty-content":y(()=>[Oe]),"header-right":y(()=>[Xe]),_:1},8,["education"])],64)}}});var Je=W($e,[["__scopeId","data-v-2236698e"]]);export{Je as default};
