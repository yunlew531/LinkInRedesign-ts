import{_ as se,d as y,e as oe,m as ae,g as P,s as ce}from"./index.89e2cf0c.js";import{d as re,C as E,i as ne,f as le,r as u,c as ie,g as a,h as e,j as h,u as o,D as I,E as C,t as i,F as f,k as g,m as ue,n as de,o as c,w as _e,l as pe,q as me}from"./vendor.a132856b.js";import{d as v}from"./dayjs.9461779c.js";const d=b=>(ue("data-v-34c84772"),b=b(),de(),b),he={class:"profile-card"},fe=d(()=>e("h2",{class:"card-title"},"About",-1)),ve=d(()=>e("button",{type:"button",class:"more-btn"},"see more",-1)),be={class:"profile-card"},je=d(()=>e("h2",{class:"projects-title card-title"},"Projects",-1)),xe=d(()=>e("span",{class:"projects-subtitle"},"3 of 12",-1)),ye={key:0,class:"project-list"},Ee=["onClick"],ge=["src","alt"],ke={class:"project-card-title"},Ne={class:"project-card-subtitle"},Me={key:1,class:"project-list-empty"},Pe=d(()=>e("button",{type:"button",class:"more-btn"},"show all (12)",-1)),Ie={class:"profile-card"},Ce=d(()=>e("h2",{class:"card-title"},"Skills & Endoresments",-1)),Se={class:"skills-list"},De={class:"skill-user-num"},we=d(()=>e("h3",{class:"skill-card-title"},"User experience (UX)",-1)),Ye={class:"users-photo-list"},Ae=["src"],Ue={key:0,class:"user-num-btn"},Te={type:"button"},Ve={class:"profile-card"},Le=d(()=>e("h2",{class:"card-title experience-section-title"},"Experience",-1)),Oe={key:0},Re=["src","alt"],Be={class:"experience-card-content"},Fe={class:"experience-card-header"},Xe={class:"experience-card-title"},$e=["onClick"],qe=me(" - "),ze={class:"experience-card-experience-time"},Ge={class:"experience-card-paragraph"},He={key:1,class:"experience-empty-notice"},Je=re({setup(b){const Y=E(()=>y(()=>import("./Editor.e3e55e56.js"),["assets/Editor.e3e55e56.js","assets/Editor.1cebcf8b.css","assets/vendor.a132856b.js","assets/index.89e2cf0c.js","assets/index.491beacd.css"])),A=E(()=>y(()=>import("./ProjectModal.e407ed1e.js"),["assets/ProjectModal.e407ed1e.js","assets/ProjectModal.47e869e3.css","assets/index.89e2cf0c.js","assets/index.491beacd.css","assets/vendor.a132856b.js","assets/main.21dd7f43.js","assets/dayjs.9461779c.js"])),U=E(()=>y(()=>import("./ExperienceModal.f65706bf.js"),["assets/ExperienceModal.f65706bf.js","assets/ExperienceModal.129ab6f1.css","assets/index.89e2cf0c.js","assets/index.491beacd.css","assets/vendor.a132856b.js","assets/dayjs.9461779c.js"])),T=E(()=>y(()=>import("./Education.4c393f39.js"),["assets/Education.4c393f39.js","assets/Education.428346e0.css","assets/index.89e2cf0c.js","assets/index.491beacd.css","assets/vendor.a132856b.js"])),{updateUserProfile:V}=ce,L=ne(oe),n=le(()=>L.value.user),O=u([{title:"User experience (UX)",users:[{fileName:"user-experience-1"},{fileName:"user-experience-2"},{fileName:"user-experience-3"},{fileName:"user-experience-4"},{fileName:"user-experience-5"},{fileName:"user-experience-6"}]},{title:"User interface (UI)",users:[{fileName:"user-interface-1"},{fileName:"user-interface-2"},{fileName:"user-interface-3"},{fileName:"user-interface-4"},{fileName:"user-interface-5"},{fileName:"user-interface-6"},{fileName:"user-interface-7"}]},{title:"Brand identity",users:[{fileName:"user-identity-1"},{fileName:"user-identity-2"},{fileName:"user-identity-3"},{fileName:"user-identity-4"},{fileName:"user-identity-5"}]}]),R=u({placeholder:"input about"}),B=s=>s.filter((r,_)=>_<5),k=u(null),p=u(!1),S=()=>{const s=n.value.about;k.value.setText(s),p.value=!0},F=async()=>{const s=k.value.getText();try{const{data:r}=await ae(s),{about:_}=r;V({about:_})}catch(r){alert(r.response.data.message)}p.value=!1},X=()=>p.value=!1,j=u({}),N=u(0),x=u(),$=(s,r)=>{j.value=s,N.value=r,x.value.setModalStatus("update"),x.value.showModal()},q=s=>j.value=s,z=s=>{N.value=s,!!n.value.projects&&(j.value=n.value.projects[s])},G=()=>x.value.createProject(),H=s=>{const r=s.content.ops.filter(_=>_.insert.image)[0];return r?r.insert.image:P("image")},m=u(),J=()=>{m.value.setStatus("create"),m.value.showModal()},M=u({}),K=s=>{M.value=s,m.value.setStatus("update"),m.value.showModal()},Q=(s,r)=>s&&r?v(s*1e3).to(v(r*1e3),!0):"",W=s=>s?v(s*1e3).format("D MMMM YYYY"):"",Z=s=>s?v(s*1e3).format("D MMMM YYYY"):"",ee=s=>s&&s.image_url?s.image_url:P("upload_cloud"),te=s=>M.value=s;return(s,r)=>{var D,w;const _=ie("router-link");return c(),a(f,null,[e("section",he,[h(o(A),{ref:(t,l)=>{l.projectModalEl=t,x.value=t},projects:o(n).projects,currentProject:j.value,currentProjectIdx:N.value,onSetCurrentProject:q,onSetCurrentIdx:z},null,8,["projects","currentProject","currentProjectIdx"]),h(o(U),{ref:(t,l)=>{l.experienceModalEl=t,m.value=t},experience:M.value,onSetTempExperience:te},null,8,["experience"]),fe,I(h(o(Y),{ref:(t,l)=>{l.editorEl=t,k.value=t},options:R.value,onUpdate:F,onCancel:X},null,8,["options"]),[[C,p.value]]),I(e("p",{class:"card-paragraph",onDblclick:S},i(o(n).about),545),[[C,!p.value&&o(n).about]]),I(e("p",{class:"about-empty-paragraph",onDblclick:S}," empty. double click to add about.",544),[[C,!p.value&&!o(n).about]]),ve]),e("section",be,[e("div",{class:"card-header"},[je,xe,e("button",{type:"button",class:"projects-create-btn",onClick:G},"Create")]),((D=o(n).projects)==null?void 0:D.length)?(c(),a("ul",ye,[(c(!0),a(f,null,g(o(n).projects,(t,l)=>(c(),a("li",{key:t.id,class:"project-card",onClick:Ke=>$(t,l)},[e("img",{src:H(t),alt:t.title,class:"project-img"},null,8,ge),e("h3",ke,i(t.title),1),e("span",Ne,i(t.create_time?o(v)(t.create_time*1e3).format("YYYY/MM/DD"):""),1)],8,Ee))),128))])):(c(),a("div",Me,"empty. please click create button")),Pe]),e("section",Ie,[Ce,e("ul",Se,[(c(!0),a(f,null,g(O.value,t=>(c(),a("li",{key:t.title,class:"skill-card"},[e("span",De,i(t.users.length),1),we,e("ul",Ye,[(c(!0),a(f,null,g(B(t.users),l=>(c(),a("li",{key:l.fileName},[h(_,{to:"/"},{default:_e(()=>[e("img",{class:"skill-user-img",src:o(P)(l.fileName),alt:"user"},null,8,Ae)]),_:2},1024)]))),128)),t.users.length-5>0?(c(),a("li",Ue,[e("button",Te,"+"+i(t.users.length-5),1)])):pe("",!0)])]))),128))])]),e("section",Ve,[e("div",{class:"card-header"},[Le,e("button",{type:"button",class:"create-experience-btn",onClick:J},"create")]),((w=o(n).experience)==null?void 0:w.length)?(c(),a("ul",Oe,[(c(!0),a(f,null,g(o(n).experience,t=>(c(),a("li",{key:t.title,class:"experience-card"},[e("img",{class:"experience-card-img",src:ee(t),alt:t.title},null,8,Re),e("div",Be,[e("div",Fe,[e("div",null,[e("h3",Xe,i(t.title),1),e("h4",null,i(t.place),1)]),e("button",{type:"button",class:"experience-edit-btn",onClick:l=>K(t)},"edit",8,$e)]),e("p",null,[e("span",null,i(W(t.start_time)),1),qe,e("span",null,i(Z(t.end_time)),1),e("span",ze,i(Q(t.start_time,t.end_time)),1)]),e("p",Ge,i(t.content),1)])]))),128))])):(c(),a("div",He," empty. please click create button "))]),h(o(T),{education:o(n).education},null,8,["education"])],64)}}});var et=se(Je,[["__scopeId","data-v-34c84772"]]);export{et as default};
