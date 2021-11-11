import{_ as k,d as D,m as I,J as P}from"./index.9fe55531.js";import{c as C}from"./createArticles.848c2856.js";import{d as j,C as O,r as u,H as V,g as c,h as i,x as b,F,k as y,u as n,l as B,m as E,n as N,o as v,j as g}from"./vendor.d65808b7.js";const p=d=>(E("data-v-7d39c7f6"),d=d(),N(),d),S={class:"page-title-container"},G=p(()=>i("h2",{class:"page-title"},"articles",-1)),L={class:"btns-container"},z=p(()=>i("span",null,"post",-1)),H=[z],J=p(()=>i("span",null,"favorites",-1)),q=[J],x={key:0},K={key:1},M=j({setup(d){const A=O(()=>D(()=>import("./Article.918001af.js"),["assets/Article.918001af.js","assets/Article.976e851b.css","assets/vendor.d65808b7.js","assets/index.9fe55531.js","assets/index.491beacd.css","assets/main.5ebddbe0.js","assets/dayjs.19e4cc98.js"])),a=C(I),l=C(P),m=u("post"),_=t=>m.value=t;V(m,t=>{t==="post"?a.getArticles():t==="favorites"&&l.getArticles()},{immediate:!0});const h=u([]),R=async t=>{const{articleIdx:r}=t;try{await a.postComment(t),h.value[r].resetCommentInput(r)}catch(e){console.log(e)}},f=u([]),U=async t=>{const{articleIdx:r}=t;try{await l.postComment(t),f.value[r].resetCommentInput(r)}catch(e){console.log(e)}},$=async(t,r)=>{try{await l.removeArticleFavorite(t,r),l.getArticles()}catch(e){console.dir(e)}},T=t=>a.deleteComment(t),w=t=>l.deleteComment(t);return(t,r)=>(v(),c("section",null,[i("div",S,[G,i("div",L,[i("button",{type:"button",class:b(["page-btn",{active:m.value==="post"}]),onClick:r[0]||(r[0]=e=>_("post"))},H,2),i("button",{type:"button",class:b(["page-btn",{active:m.value==="favorites"}]),onClick:r[1]||(r[1]=e=>_("favorites"))},q,2)])]),m.value==="post"?(v(),c("ul",x,[(v(!0),c(F,null,y(n(a).articles.value,(e,o)=>(v(),c("li",{key:e.id},[g(n(A),{ref:s=>h.value[o]=s,article:e,index:o,onThumbsUp:s=>n(a).thumbsUpArticle(e,o),onRemoveThumbsUp:s=>n(a).removeThumbsUpArticle(e,o),onDeleteArticle:s=>n(a).deleteArticle(e.id),onPostComment:R,onDeleteComment:T,onAddArticleFavorite:s=>n(a).addArticleFavorite(e,o),onRemoveArticleFavorite:s=>n(a).removeArticleFavorite(e,o)},null,8,["article","index","onThumbsUp","onRemoveThumbsUp","onDeleteArticle","onAddArticleFavorite","onRemoveArticleFavorite"])]))),128))])):m.value==="favorites"?(v(),c("ul",K,[(v(!0),c(F,null,y(n(l).articles.value,(e,o)=>(v(),c("li",{key:e.id},[g(n(A),{ref:s=>f.value[o]=s,article:e,index:o,onThumbsUp:s=>n(l).thumbsUpArticle(e,o),onRemoveThumbsUp:s=>n(l).removeThumbsUpArticle(e,o),onDeleteArticle:s=>n(l).deleteArticle(e.id),onPostComment:U,onDeleteComment:w,onAddArticleFavorite:s=>n(l).addArticleFavorite(e,o),onRemoveArticleFavorite:s=>$(e,o)},null,8,["article","index","onThumbsUp","onRemoveThumbsUp","onDeleteArticle","onAddArticleFavorite","onRemoveArticleFavorite"])]))),128))])):B("",!0)]))}});var Y=k(M,[["__scopeId","data-v-7d39c7f6"]]);export{Y as default};