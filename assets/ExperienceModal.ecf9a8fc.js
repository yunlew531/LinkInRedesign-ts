import{_ as B,d as N,O as P,P as A,Q as J,g as L,R,s as q}from"./index.bdfff709.js";import{d as z,C as F,r as p,H as h,f as g,o as H,g as Q,h as l,D as f,I as _,u as w,j as G,x as K,L as W,m as X,n as Z,q as $}from"./vendor.175a345b.js";import{d as s}from"./dayjs.71f06998.js";const i=c=>(X("data-v-6f8b749e"),c=c(),Z(),c),ee=["onClick"],te={class:"experience-modal"},ae=i(()=>l("h3",{class:"modal-title"},"experience",-1)),le=i(()=>l("span",null,"image",-1)),oe={class:"img-upload-group"},ne=["src"],se=i(()=>l("span",null,"experience title",-1)),re=i(()=>l("span",null,"work place",-1)),ie=i(()=>l("span",null,"work time",-1)),ce={class:"time-group"},ue=$(" - "),de=["max"],pe=i(()=>l("span",{class:"content"},"content",-1)),me=z({props:{experience:{type:Object,default:()=>({})}},emits:["setTempExperience"],setup(c,{expose:E,emit:y}){const T=c,k=F(()=>N(()=>import("./Editor.9f4e1a32.js"),["assets/Editor.9f4e1a32.js","assets/Editor.62b0f2d3.css","assets/vendor.175a345b.js","assets/index.bdfff709.js","assets/index.64331f55.css"])),{updateUserProfile:x}=q,m=p(null),t=p({});h(()=>T.experience,o=>{t.value=JSON.parse(JSON.stringify(o)),m.value.setText(t.value.content),o&&t.value.start_time&&t.value.end_time?(n.value.workTimeStart=s(t.value.start_time*1e3).format("YYYY-MM-DD"),n.value.workTimeEnd=s(t.value.end_time*1e3).format("YYYY-MM-DD")):(n.value.workTimeStart="",n.value.workTimeEnd="")});const n=p({workTimeStart:"",workTimeEnd:""}),D=g(()=>s().format("YYYY-MM-DD")),v=p(!1),M=()=>v.value=!0,u=()=>v.value=!1,d=p("create"),S=g(()=>{if(d.value==="create")return!1;if(d.value==="update")return!0}),b=()=>{d.value==="create"?Y():d.value==="update"&&I()},Y=async()=>{const o={title:t.value.title,start_time:Math.floor(s(n.value.workTimeStart).valueOf()/1e3),end_time:Math.floor(s(n.value.workTimeEnd).valueOf()/1e3),image_url:t.value.image_url,place:t.value.place,content:m.value.getText()};try{const{data:a}=await P(o),{experience:e}=a;x({experience:e}),u()}catch(a){alert("create failed")}},I=async()=>{const{id:o}=t.value;if(!o)return;const a={title:t.value.title,start_time:Math.floor(s(n.value.workTimeStart).valueOf()/1e3),end_time:Math.floor(s(n.value.workTimeEnd).valueOf()/1e3),image_url:t.value.image_url,place:t.value.place,content:m.value.getText()};try{const{data:e}=await A(o,a),{experience:r}=e;x({experience:r}),u()}catch(e){alert("update failed")}},U=async()=>{const{id:o}=t.value;if(!!o)try{const{data:a}=await J(o),{experience:e}=a;x({experience:e}),u()}catch(a){console.dir(a)}};h(v,o=>{o?document.body.style.overflow="hidden":(document.body.style.overflow="auto",y("setTempExperience",{}))});const C=o=>d.value=o,O=()=>t.value.image_url?t.value.image_url:L("upload_cloud"),j=async o=>{const a=o.target.files[0],e=new FormData;e.append("img-file",a);try{const{data:r}=await R(e),{imgUrl:V}=r;t.value.image_url=V}catch(r){alert("upload failed")}};return E({showModal:M,setStatus:C}),(o,a)=>(H(),Q("div",{class:K(["experience-modal-container",{show:v.value}]),onClick:W(u,["self"])},[l("div",te,[ae,l("label",null,[le,l("div",oe,[l("img",{src:O(),alt:"experience"},null,8,ne),l("input",{type:"file",onChange:a[0]||(a[0]=e=>j(e))},null,32)])]),l("label",null,[se,f(l("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>t.value.title=e)},null,512),[[_,t.value.title]])]),l("label",null,[re,f(l("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>t.value.place=e)},null,512),[[_,t.value.place]])]),l("label",null,[ie,l("div",ce,[f(l("input",{type:"date","onUpdate:modelValue":a[3]||(a[3]=e=>n.value.workTimeStart=e)},null,512),[[_,n.value.workTimeStart]]),ue,f(l("input",{type:"date",max:w(D),"onUpdate:modelValue":a[4]||(a[4]=e=>n.value.workTimeEnd=e)},null,8,de),[[_,n.value.workTimeEnd]])])]),l("label",null,[pe,G(w(k),{ref:(e,r)=>{r.editorEl=e,m.value=e},deleteBtn:w(S),onCancel:u,onUpdate:b,onDelete:U},null,8,["deleteBtn"])])])],10,ee))}});var xe=B(me,[["__scopeId","data-v-6f8b749e"]]);export{xe as default};