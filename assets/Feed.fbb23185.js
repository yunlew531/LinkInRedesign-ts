import{_ as rt,s as ut,d as I,e as mt,o as _t,g as ht,p as pt,q as vt,r as ft,t as bt,v as gt,w as kt,x as yt,y as Ct,z as wt,A as At,B as St,C as Tt,D as Dt,E as xt}from"./index.bdfff709.js";import{d as jt,C as P,i as Ut,f as B,r as f,c as Et,g as c,h as e,j as b,w as A,u,F as D,k as x,m as Jt,n as Ot,q as g,o as l,l as h,t as m,x as Ft,D as j,E as V,I as Nt,J as Mt}from"./vendor.175a345b.js";import{d as q}from"./dayjs.71f06998.js";import{Q as Ht}from"./main.657b20f9.js";const r=k=>(Jt("data-v-8afc6436"),k=k(),Ot(),k),Lt={class:"feed-container"},Yt={class:"feed-main"},$t={class:"new-post"},It=r(()=>e("h3",null,"new post",-1)),Pt=r(()=>e("img",{src:pt,alt:"submit button"},null,-1)),Bt=[Pt],Vt=r(()=>e("div",null,null,-1)),qt=r(()=>e("div",{class:"divide"},[e("span",{class:"divide-text"},[g(" Sort by: "),e("span",{class:"emphasize"},"trending")])],-1)),Qt={class:"feeds-list"},Wt={class:"feed-card"},zt={class:"feed-card-header"},Gt={class:"liked-list"},Rt={key:0},Xt={key:1},Kt={key:0,class:"like-this-text"},Zt=g(" and"),te=r(()=>e("button",{class:"people-like-btn"},"more",-1)),ee=g("people "),se=[Zt,te,ee],oe={key:1},ne={type:"button",class:"feed-card-more-btn"},ie={src:vt,alt:"more button"},ae={src:ft,alt:"more button"},ce={key:0},le=["onClick"],de={key:1},re=["onClick"],ue={key:2},me=["onClick"],_e={class:"feed-card-body"},he={class:"feed-card-user"},pe=["src","alt"],ve={key:0,class:"user-link-notice"},fe={class:"article-time"},be={class:"article-create-time"},ge=["innerHTML"],ke={class:"feed-card-footer"},ye=["onClick"],Ce=r(()=>e("img",{src:bt,alt:"thumbs-up button",class:"thumbs-up-img"},null,-1)),we={class:"feed-card-likes-qty"},Ae=["onClick"],Se=r(()=>e("img",{src:gt,alt:"thumbs-up button",class:"thumbs-up-img"},null,-1)),Te={class:"feed-card-likes-qty"},De={type:"button",class:"feed-card-footer-btn"},xe=r(()=>e("img",{src:kt,alt:"comments",class:"comments-img"},null,-1)),je={class:"feed-card-comments-qty"},Ue=r(()=>e("button",{type:"button",class:"feed-card-footer-btn"},[e("img",{src:yt,alt:"share button",class:"share-img"}),e("span",null,"share")],-1)),Ee={class:"article-messages"},Je=["src"],Oe={class:"comment-body"},Fe={class:"comment-header"},Ne=["onClick"],Me=r(()=>e("span",{class:"material-icons"},"delete_outline",-1)),He=[Me],Le={class:"comment-input-group"},Ye=["src"],$e=["onUpdate:modelValue","onKeyup"],Ie=["onClick"],Pe=r(()=>e("span",{class:"material-icons"},"send",-1)),Be=[Pe],Ve=jt({setup(k){const{getProfile:Q,getArticles:U,setArticles:W,setArticle:v,setArticleComments:z}=ut;Q(),U(1);const G=P(()=>I(()=>import("./FeedAside.bc8307e2.js"),["assets/FeedAside.bc8307e2.js","assets/FeedAside.00172f05.css","assets/index.bdfff709.js","assets/index.64331f55.css","assets/vendor.175a345b.js"])),R=P(()=>I(()=>import("./Editor.9f4e1a32.js"),["assets/Editor.9f4e1a32.js","assets/Editor.62b0f2d3.css","assets/vendor.175a345b.js","assets/index.bdfff709.js","assets/index.64331f55.css"])),E=Ut(mt),X=B(()=>E.value.articles),d=B(()=>E.value.user),K={placeholder:"input content",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline"],["image","code-block"]]}},y=f(null);f([{id:"b61owa2CGXa70CPs",uid:"QbW2SLcSr90oL9ly05U0",name:"Theresa Steward",user_photo:"feed-user-1",profession:"iOS developer",content:"What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn\u2019t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).",likes:[{name:"Alina",uid:"5hiP6EBTn5m7bI7Qc68t"},{name:"Mike",uid:"8TmjUC59g7fn6NUJ3p5x"},{name:"Jason",uid:"wEUnj3c3FJ6kEC5W6z82"},{name:"Tom",uid:"W0dX676k7n6SDsr1QYma"}],comments:[],imgs:[]},{id:"UO1w88P1nG2dS2pu",uid:"abB3kTo3WDS319sOC5td",name:"Kyle Fisher",user_photo:"feed-user-2",profession:"Product designer at Commandor Corp.",content:"How\u2019s your day going, guys?",likes:[{name:"Jack",uid:"3G1Lhjnj46MlmEY5JUg4"}],comments:[],imgs:[]}]);const S=f([]),J=o=>{const s=o.target;o.type==="mouseenter"?s.classList.add("show"):o.type==="mouseleave"&&s.classList.remove("show")},Z=async()=>{const o={content:y.value.getContents()};try{const{data:s}=await _t(o),{articles:i}=s;W(i),y.value.setText()}catch(s){console.dir(s)}},tt=o=>new Ht(o.ops).convert(),et=async o=>{try{const{data:s}=await Ct(o);console.log("data log => ",s),U(1)}catch(s){console.dir(s)}},st=()=>y.value.focus(),ot=async(o,s)=>{const i=JSON.parse(JSON.stringify(o)),t={name:d.value.name,photo:d.value.photo,job:d.value.job};try{const{data:n}=await wt(t,o.id),{likes:_}=n.article;i.likes=_,v(s,i)}catch(n){console.dir(n)}},nt=async(o,s)=>{const i=JSON.parse(JSON.stringify(o));try{const{data:t}=await At(o.id),{likes:n}=t.article;i.likes=n,v(s,i)}catch(t){console.dir(t)}},it=o=>{var i;return((i=o.likes)==null?void 0:i.length)?o.likes.some(t=>t.uid===d.value.uid):!1},C=o=>{if(!(!o||o&&!o.length))return o.filter((s,i)=>i<5)},T=f(!1),w=f([]),O=async(o,s)=>{if(T.value){alert("Please wait 30 seconds for each message");return}T.value=!0;const i=w.value[s];i||alert("comment required");const t={name:d.value.name,photo:d.value.photo||"",comment:i};try{const{data:n}=await St(t,o),{comments:_}=n;z(_,s),w.value[s]=""}catch(n){console.dir(n)}setTimeout(()=>{T.value=!1},30*1e3)},at=async(o,s,i)=>{const t=JSON.parse(JSON.stringify(s));try{const{data:n}=await Tt(s.id,i),{comments:_}=n;t.comments=_,v(o,t)}catch(n){console.dir(n)}},ct=async(o,s)=>{const i=JSON.parse(JSON.stringify(s));try{const{data:t}=await Dt(s.id),{favorites:n}=t;i.favorites=n,v(o,i),alert("add success")}catch(t){console.log(t)}},lt=async(o,s)=>{const i=JSON.parse(JSON.stringify(s));try{const{data:t}=await xt(s.id),{favorites:n}=t;i.favorites=n,v(o,i),alert("remove success")}catch(t){console.dir(t)}},dt=o=>{if(!!o)return o.some(s=>s.uid===d.value.uid)};return(o,s)=>{const i=Et("router-link");return l(),c("div",Lt,[e("main",Yt,[e("section",$t,[e("div",{class:"new-post-header"},[It,e("button",{type:"button",class:"new-post-submit-btn",onClick:Z},Bt)]),b(u(R),{ref:(t,n)=>{n.editorEl=t,y.value=t},options:K,toolbar:!0},{buttons:A(()=>[Vt]),_:1},512)]),qt,e("ul",Qt,[(l(!0),c(D,null,x(u(X),(t,n)=>{var _,F,N,M;return l(),c("li",Wt,[e("div",zt,[e("ul",Gt,[(l(!0),c(D,null,x(C(t.likes),(a,p)=>{var H,L,Y,$;return l(),c("li",{key:a.uid},[p!==0&&((H=C(t.likes))==null?void 0:H.length)-1===p&&t.likes&&((L=t.likes)==null?void 0:L.length)<=5?(l(),c("span",Rt,"\xA0and\xA0")):h("",!0),b(i,{to:`@${a.uid}`},{default:A(()=>[g(m(a.name),1)]),_:2},1032,["to"]),p<4&&t.likes&&(((Y=C(t.likes))==null?void 0:Y.length)-2!==p||t.likes.length>5)&&(($=C(t.likes))==null?void 0:$.length)-1!==p?(l(),c("span",Xt,",\xA0")):h("",!0)])}),128)),t.likes&&t.likes.length>5?(l(),c("li",Kt,se)):h("",!0),((_=t.likes)==null?void 0:_.length)?(l(),c("li",oe,"\xA0liked this")):h("",!0)]),e("div",{class:Ft(["card-btns-group",{show:S.value.includes(t.id)}]),onMouseleave:s[0]||(s[0]=a=>J(a)),onMouseenter:s[1]||(s[1]=a=>J(a))},[e("button",ne,[j(e("img",ie,null,512),[[V,!S.value.includes(t.id)]]),j(e("img",ae,null,512),[[V,S.value.includes(t.id)]])]),e("ul",null,[u(d).uid===t.uid?(l(),c("li",ce,[e("button",{type:"button",onClick:a=>et(t.id)},"delete",8,le)])):h("",!0),dt(t.favorites)?(l(),c("li",ue,[e("button",{type:"button",class:"un-favorite-btn",onClick:a=>lt(n,t)},"UnFavorite",8,me)])):(l(),c("li",de,[e("button",{type:"button",onClick:a=>ct(n,t)},"favorite",8,re)]))])],34)]),e("div",_e,[e("div",he,[b(i,{to:`/@${t.uid}`,class:"user-link"},{default:A(()=>[e("img",{src:t.photo||u(ht)("user"),alt:t.name},null,8,pe)]),_:2},1032,["to"]),e("div",null,[b(i,{to:`/@${t.uid}`,class:"user-link"},{default:A(()=>[g(m(t.name),1)]),_:2},1032,["to"]),u(d).uid===t.uid?(l(),c("span",ve,"You")):h("",!0),e("h4",null,m(t.job),1)]),e("div",fe,[e("span",be," create time: "+m(u(q)(t.create_time*1e3).format("YYYY/MM/DD HH:mm:ss")),1)])]),e("div",{innerHTML:tt(t.content)},null,8,ge)]),e("div",ke,[it(t)?(l(),c("button",{key:0,type:"button",onClick:a=>nt(t,n),class:"feed-card-footer-btn active"},[Ce,e("span",we,m((F=t.likes)==null?void 0:F.length),1)],8,ye)):(l(),c("button",{key:1,type:"button",class:"feed-card-footer-btn",onClick:a=>ot(t,n)},[Se,e("span",Te,m((N=t.likes)==null?void 0:N.length),1)],8,Ae)),e("button",De,[xe,e("span",je,m((M=t.comments)==null?void 0:M.length),1)]),Ue]),e("ul",Ee,[(l(!0),c(D,null,x(t.comments,a=>(l(),c("li",{key:a.id},[e("img",{src:a.photo,alt:"comment.name"},null,8,Je),e("div",Oe,[e("div",Fe,[e("h4",null,m(a.name||"mike"),1),e("span",null,m(u(q)(a.create_time*1e3).format("YYYY/MM/DD HH:mm:ss")||"2018/10/21 10:05"),1)]),e("p",null,m(a.comment||"fefef5085484"),1)]),a.uid===u(d).uid?(l(),c("button",{key:0,type:"button",class:"comment-delete-btn",onClick:p=>at(n,t,a.id)},He,8,Ne)):h("",!0)]))),128)),e("li",Le,[e("img",{src:u(d).photo,alt:"comment.name"},null,8,Ye),j(e("input",{type:"text","onUpdate:modelValue":a=>w.value[n]=a,onKeyup:Mt(a=>O(t.id,n),["enter"])},null,40,$e),[[Nt,w.value[n]]]),e("button",{type:"button",onClick:a=>O(t.id,n)},Be,8,Ie)])])])}),256))])]),b(u(G),{onFocus:st})])}}});var Ge=rt(Ve,[["__scopeId","data-v-8afc6436"]]);export{Ge as default};