import{_ as H,d as U,z as J,g as x}from"./index.89e2cf0c.js";import{d as _}from"./dayjs.9461779c.js";import{d as K,C as D,i as Q,r as f,c as W,g as r,h as e,j as N,w as y,u as c,t as i,F as h,k as v,m as Z,n as ee,o,l as te,q as T}from"./vendor.a132856b.js";const l=p=>(Z("data-v-cab68ae6"),p=p(),ee(),p),se={class:"profile-card"},re=l(()=>e("div",null,null,-1)),oe=l(()=>e("h2",{class:"card-title"},"About",-1)),ne={key:0,class:"card-paragraph"},ce={key:1,class:"about-list-empty"},ie=l(()=>e("button",{type:"button",class:"more-btn"},"see more",-1)),ae={class:"profile-card"},le=l(()=>e("div",{class:"card-header"},[e("h2",{class:"projects-title card-title"},"Projects"),e("span",{class:"projects-subtitle"},"3 of 12")],-1)),de={key:0,class:"project-list"},ue=["onClick"],_e=["src","alt"],he={class:"project-card-title"},pe={class:"project-card-subtitle"},me={key:1,class:"project-list-empty"},fe=l(()=>e("button",{type:"button",class:"more-btn"},"show all (12)",-1)),ye={class:"profile-card"},ve=l(()=>e("h2",{class:"card-title"},"Skills & Endoresments",-1)),ge={class:"skills-list"},je={class:"skill-user-num"},xe=l(()=>e("h3",{class:"skill-card-title"},"User experience (UX)",-1)),Ne={class:"users-photo-list"},ke=["src"],be={key:0,class:"user-num-btn"},Ie={type:"button"},Me={class:"profile-card"},Pe=l(()=>e("div",{class:"card-header"},[e("h2",{class:"card-title experience-section-title"},"Experience")],-1)),Ee={key:0},Ce=["src","alt"],Ye={class:"experience-card-content"},we={class:"experience-card-header"},Se={class:"experience-card-title"},Ue=T(" - "),De={class:"experience-card-experience-time"},Te={class:"experience-card-paragraph"},Ve={key:1,class:"experience-empty-notice"},Ae=T("This user did not write anything."),Be=l(()=>e("div",null,null,-1)),Le=K({setup(p){const V=D(()=>U(()=>import("./ProjectModal.e407ed1e.js"),["assets/ProjectModal.e407ed1e.js","assets/ProjectModal.47e869e3.css","assets/index.89e2cf0c.js","assets/index.491beacd.css","assets/vendor.a132856b.js","assets/main.21dd7f43.js","assets/dayjs.9461779c.js"])),A=D(()=>U(()=>import("./Education.4c393f39.js"),["assets/Education.4c393f39.js","assets/Education.428346e0.css","assets/index.89e2cf0c.js","assets/index.491beacd.css","assets/vendor.a132856b.js"])),a=Q(J),B=f([{title:"User experience (UX)",users:[{fileName:"user-experience-1"},{fileName:"user-experience-2"},{fileName:"user-experience-3"},{fileName:"user-experience-4"},{fileName:"user-experience-5"},{fileName:"user-experience-6"}]},{title:"User interface (UI)",users:[{fileName:"user-interface-1"},{fileName:"user-interface-2"},{fileName:"user-interface-3"},{fileName:"user-interface-4"},{fileName:"user-interface-5"},{fileName:"user-interface-6"},{fileName:"user-interface-7"}]},{title:"Brand identity",users:[{fileName:"user-identity-1"},{fileName:"user-identity-2"},{fileName:"user-identity-3"},{fileName:"user-identity-4"},{fileName:"user-identity-5"}]}]),L=s=>s.filter((n,u)=>u<5),m=f({}),g=f(0),j=f(),F=(s,n)=>{m.value=s,g.value=n,j.value.setModalStatus("update"),j.value.showModal()},R=s=>m.value=s,O=s=>{var n;g.value=s,!!((n=a.value)==null?void 0:n.projects)&&(m.value=a.value.projects[s])},X=s=>{const n=s.content.ops.filter(u=>u.insert.image)[0];return n?n.insert.image:x("image")},q=(s,n)=>s&&n?_(s*1e3).to(_(n*1e3),!0):"",z=s=>s?_(s*1e3).format("D MMMM YYYY"):"",$=s=>s?_(s*1e3).format("D MMMM YYYY"):"",G=s=>s&&s.image_url?s.image_url:x("upload_cloud");return(s,n)=>{var k,b,I,M,P,E,C,Y,w,S;const u=W("router-link");return o(),r(h,null,[e("section",se,[N(c(V),{ref:(t,d)=>{d.projectModalEl=t,j.value=t},projects:(k=c(a))==null?void 0:k.projects,currentProject:m.value,currentProjectIdx:g.value,onSetCurrentProject:R,onSetCurrentIdx:O},{"project-body-header":y(()=>[re]),_:1},8,["projects","currentProject","currentProjectIdx"]),oe,((b=c(a))==null?void 0:b.about)?(o(),r("p",ne,i(((I=c(a))==null?void 0:I.about)||"This user did not write anything."),1)):(o(),r("div",ce,"This user did not write anything.")),ie]),e("section",ae,[le,((P=(M=c(a))==null?void 0:M.projects)==null?void 0:P.length)?(o(),r("ul",de,[(o(!0),r(h,null,v((E=c(a))==null?void 0:E.projects,(t,d)=>(o(),r("li",{key:t.id,class:"project-card",onClick:Fe=>F(t,d)},[e("img",{src:X(t),alt:t.title,class:"project-img"},null,8,_e),e("h3",he,i(t.title),1),e("span",pe,i(t.create_time?c(_)(t.create_time*1e3).format("YYYY/MM/DD"):""),1)],8,ue))),128))])):(o(),r("div",me,"This user did not write anything.")),fe]),e("section",ye,[ve,e("ul",ge,[(o(!0),r(h,null,v(B.value,t=>(o(),r("li",{key:t.title,class:"skill-card"},[e("span",je,i(t.users.length),1),xe,e("ul",Ne,[(o(!0),r(h,null,v(L(t.users),d=>(o(),r("li",{key:d.fileName},[N(u,{to:"/"},{default:y(()=>[e("img",{class:"skill-user-img",src:c(x)(d.fileName),alt:"user"},null,8,ke)]),_:2},1024)]))),128)),t.users.length-5>0?(o(),r("li",be,[e("button",Ie,"+"+i(t.users.length-5),1)])):te("",!0)])]))),128))])]),e("section",Me,[Pe,((Y=(C=c(a))==null?void 0:C.experience)==null?void 0:Y.length)?(o(),r("ul",Ee,[(o(!0),r(h,null,v((w=c(a))==null?void 0:w.experience,t=>(o(),r("li",{key:t.title,class:"experience-card"},[e("img",{class:"experience-card-img",src:G(t),alt:t.title},null,8,Ce),e("div",Ye,[e("div",we,[e("div",null,[e("h3",Se,i(t.title),1),e("h4",null,i(t.place),1)])]),e("p",null,[e("span",null,i(z(t.start_time)),1),Ue,e("span",null,i($(t.end_time)),1),e("span",De,i(q(t.start_time,t.end_time)),1)]),e("p",Te,i(t.content),1)])]))),128))])):(o(),r("div",Ve," This user did not write anything. "))]),N(c(A),{education:(S=c(a))==null?void 0:S.education},{"empty-content":y(()=>[Ae]),"header-right":y(()=>[Be]),_:1},8,["education"])],64)}}});var qe=H(Le,[["__scopeId","data-v-cab68ae6"]]);export{qe as default};
