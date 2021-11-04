import{_ as B,s as $,d as _,e as q,C as H,D as Q,o as z,p as G,q as M,E as X,F as Y,r as K,t as Z}from"./index.f488c0b0.js";import{d as ee,C as f,i as te,f as S,r as m,g as y,h as n,j as A,w as se,u,F as oe,k as ae,m as ne,n as ie,q as re,o as b}from"./vendor.d65808b7.js";const p=d=>(ne("data-v-432a57b7"),d=d(),ie(),d),ce={class:"feed-container"},le={class:"feed-main"},de={class:"new-post"},me=p(()=>n("h3",null,"new post",-1)),ue=p(()=>n("img",{src:Q,alt:"submit button"},null,-1)),pe=[ue],he=p(()=>n("div",null,null,-1)),ve=p(()=>n("div",{class:"divide"},[n("span",{class:"divide-text"},[re(" Sort by: "),n("span",{class:"emphasize"},"trending")])],-1)),_e={class:"feeds-list"},fe=ee({setup(d){const{getProfile:k,getArticles:w,setArticles:T,setArticle:r,setArticleComments:E}=$;k(),w(1);const F=f(()=>_(()=>import("./FeedAside.79989bf4.js"),["assets/FeedAside.79989bf4.js","assets/FeedAside.e7751684.css","assets/index.f488c0b0.js","assets/index.491beacd.css","assets/vendor.d65808b7.js"])),O=f(()=>_(()=>import("./Editor.3b8f2aea.js"),["assets/Editor.3b8f2aea.js","assets/Editor.1cebcf8b.css","assets/vendor.d65808b7.js","assets/index.f488c0b0.js","assets/index.491beacd.css"])),D=f(()=>_(()=>import("./Article.75d39afd.js"),["assets/Article.75d39afd.js","assets/Article.18d16097.css","assets/vendor.d65808b7.js","assets/index.f488c0b0.js","assets/index.491beacd.css","assets/main.5ebddbe0.js","assets/dayjs.19e4cc98.js"])),g=te(q),c=S(()=>g.value.user),J=S(()=>g.value.articles),N={placeholder:"input content",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","code-block"]]}},l=m();m([{id:"b61owa2CGXa70CPs",uid:"QbW2SLcSr90oL9ly05U0",name:"Theresa Steward",user_photo:"feed-user-1",profession:"iOS developer",content:"What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn\u2019t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).",likes:[{name:"Alina",uid:"5hiP6EBTn5m7bI7Qc68t"},{name:"Mike",uid:"8TmjUC59g7fn6NUJ3p5x"},{name:"Jason",uid:"wEUnj3c3FJ6kEC5W6z82"},{name:"Tom",uid:"W0dX676k7n6SDsr1QYma"}],comments:[],imgs:[]},{id:"UO1w88P1nG2dS2pu",uid:"abB3kTo3WDS319sOC5td",name:"Kyle Fisher",user_photo:"feed-user-2",profession:"Product designer at Commandor Corp.",content:"How\u2019s your day going, guys?",likes:[{name:"Jack",uid:"3G1Lhjnj46MlmEY5JUg4"}],comments:[],imgs:[]}]);const U=async()=>{if(l.value.checkEmpty()){alert("content required");return}const a={content:l.value.getContents()};try{const{data:e}=await H(a),{articles:t}=e;T(t),l.value.setText()}catch(e){console.dir(e)}},j=()=>l.value.focus(),I=async(o,a)=>{const e=JSON.parse(JSON.stringify(o)),t={name:c.value.name,photo:c.value.photo,job:c.value.job};try{const{data:s}=await z(t,o.id),{likes:i}=s;e.likes=i,r(a,e)}catch(s){console.dir(s)}},P=async(o,a)=>{const e=JSON.parse(JSON.stringify(o));try{const{data:t}=await G(o.id),{likes:s}=t;e.likes=s,r(a,e)}catch(t){console.dir(t)}},R=async o=>{try{await M(o),w(1)}catch(a){console.dir(a)}},x=async(o,a)=>{const e=JSON.parse(JSON.stringify(o));try{const{data:t}=await X(o.id),{favorites:s}=t;e.favorites=s,r(a,e),alert("add success")}catch(t){console.log(t)}},L=async(o,a)=>{const e=JSON.parse(JSON.stringify(o));try{const{data:t}=await Y(o.id),{favorites:s}=t;e.favorites=s,r(a,e),alert("remove success")}catch(t){console.dir(t)}},C=m([]),h=m(!1),V=async o=>{const{articleId:a,articleIdx:e,comment:t}=o;if(h.value){alert("Please wait 30 seconds for each message");return}if(h.value=!0,!t){alert("comment required");return}const s={name:c.value.name,photo:c.value.photo||"",comment:t};try{const{data:i}=await K(s,a),{comments:v}=i;E(v,e),C.value[e].resetCommentInput(e)}catch(i){console.dir(i)}setTimeout(()=>{h.value=!1},30*1e3)},W=async o=>{const{article:a,articleIdx:e,commentId:t}=o,s=JSON.parse(JSON.stringify(a));try{const{data:i}=await Z(a.id,t),{comments:v}=i;s.comments=v,r(e,s)}catch(i){console.dir(i)}};return(o,a)=>(b(),y("div",ce,[n("main",le,[n("section",de,[n("div",{class:"new-post-header"},[me,n("button",{type:"button",class:"new-post-submit-btn",onClick:U},pe)]),A(u(O),{ref:(e,t)=>{t.editorEl=e,l.value=e},options:N,toolbar:!0},{buttons:se(()=>[he]),_:1},512)]),ve,n("ul",_e,[(b(!0),y(oe,null,ae(u(J),(e,t)=>(b(),y("li",{key:e.id},[A(u(D),{ref:s=>C.value[t]=s,article:e,index:t,onThumbsUp:s=>I(e,t),onRemoveThumbsUp:s=>P(e,t),onDeleteArticle:s=>R(e.id),onAddArticleFavorite:s=>x(e,t),onRemoveAriticleFavorite:s=>L(e,t),onSubmitComment:V,onDeleteComment:W},null,8,["article","index","onThumbsUp","onRemoveThumbsUp","onDeleteArticle","onAddArticleFavorite","onRemoveAriticleFavorite"])]))),128))])]),A(u(F),{onFocus:j})]))}});var be=B(fe,[["__scopeId","data-v-432a57b7"]]);export{be as default};
