import{_ as T,d as k,n as w,H as D}from"./index.f9042d71.js";import{h as b}from"./handleArticles.99b27c6d.js";import{d as I,C as P,r as u,H as j,g as i,h as c,x as C,F as y,k as F,u as t,l as V,m as B,n as E,o as v,j as g}from"./vendor.d65808b7.js";const p=d=>(B("data-v-50aad920"),d=d(),E(),d),N={class:"page-title-container"},O=p(()=>c("h2",{class:"page-title"},"articles",-1)),S={class:"btns-container"},G=p(()=>c("span",null,"post",-1)),H=[G],L=p(()=>c("span",null,"favorites",-1)),z=[L],q={key:0},x={key:1},J=I({setup(d){const A=P(()=>k(()=>import("./Article.e99b2e90.js"),["assets/Article.e99b2e90.js","assets/Article.3b939f84.css","assets/vendor.d65808b7.js","assets/index.f9042d71.js","assets/index.491beacd.css","assets/main.5ebddbe0.js","assets/dayjs.19e4cc98.js"])),a=b(w),l=b(D),m=u("post"),_=o=>m.value=o;j(m,o=>{o==="post"?a.getArticles():o==="favorites"&&l.getArticles()},{immediate:!0});const h=u([]),R=async o=>{const{articleIdx:r}=o;try{await a.postComment(o),h.value[r].resetCommentInput(r)}catch(e){console.log(e)}},f=u([]),U=async o=>{const{articleIdx:r}=o;try{await l.postComment(o),f.value[r].resetCommentInput(r)}catch(e){console.log(e)}},$=async(o,r)=>{try{await l.removeArticleFavorite(o,r),l.getArticles()}catch(e){console.dir(e)}};return(o,r)=>(v(),i("section",null,[c("div",N,[O,c("div",S,[c("button",{type:"button",class:C(["page-btn",{active:m.value==="post"}]),onClick:r[0]||(r[0]=e=>_("post"))},H,2),c("button",{type:"button",class:C(["page-btn",{active:m.value==="favorites"}]),onClick:r[1]||(r[1]=e=>_("favorites"))},z,2)])]),m.value==="post"?(v(),i("ul",q,[(v(!0),i(y,null,F(t(a).articles.value,(e,s)=>(v(),i("li",{key:e.id},[g(t(A),{ref:n=>h.value[s]=n,article:e,index:s,onThumbsUp:n=>t(a).thumbsUpArticle(e,s),onRemoveThumbsUp:n=>t(a).removeThumbsUpArticle(e,s),onDeleteArticle:n=>t(a).deleteArticle(e.id),onPostComment:R,onDeleteComment:t(a).deleteComment,onAddArticleFavorite:n=>t(a).addArticleFavorite(e,s),onRemoveArticleFavorite:n=>t(a).removeArticleFavorite(e,s)},null,8,["article","index","onThumbsUp","onRemoveThumbsUp","onDeleteArticle","onDeleteComment","onAddArticleFavorite","onRemoveArticleFavorite"])]))),128))])):m.value==="favorites"?(v(),i("ul",x,[(v(!0),i(y,null,F(t(l).articles.value,(e,s)=>(v(),i("li",{key:e.id},[g(t(A),{ref:n=>f.value[s]=n,article:e,index:s,onThumbsUp:n=>t(l).thumbsUpArticle(e,s),onRemoveThumbsUp:n=>t(l).removeThumbsUpArticle(e,s),onDeleteArticle:n=>t(l).deleteArticle(e.id),onPostComment:U,onDeleteComment:t(l).deleteComment,onAddArticleFavorite:n=>t(l).addArticleFavorite(e,s),onRemoveArticleFavorite:n=>$(e,s)},null,8,["article","index","onThumbsUp","onRemoveThumbsUp","onDeleteArticle","onDeleteComment","onAddArticleFavorite","onRemoveArticleFavorite"])]))),128))])):V("",!0)]))}});var W=T(J,[["__scopeId","data-v-50aad920"]]);export{W as default};