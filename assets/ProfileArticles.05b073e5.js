import{d as b,n as F}from"./index.f9042d71.js";import{h as R}from"./handleArticles.99b27c6d.js";import{d as T,C as U,r as j,g as l,F as $,k as g,u as t,o as m,j as k}from"./vendor.d65808b7.js";const w=T({setup(y){const i=U(()=>b(()=>import("./Article.e99b2e90.js"),["assets/Article.e99b2e90.js","assets/Article.3b939f84.css","assets/vendor.d65808b7.js","assets/index.f9042d71.js","assets/index.491beacd.css","assets/main.5ebddbe0.js","assets/dayjs.19e4cc98.js"])),{articles:a,getArticles:d,thumbsUpArticle:u,removeThumbsUpArticle:v,deleteArticle:A,postComment:p,deleteComment:_,addArticleFavorite:f,removeArticleFavorite:h}=R(F);(()=>d())();const c=j([]),C=async r=>{const{articleIdx:s}=r;try{await p(r),c.value[s].resetCommentInput(s)}catch(e){console.log(e)}};return(r,s)=>(m(),l("ul",null,[(m(!0),l($,null,g(t(a),(e,o)=>(m(),l("li",{key:e.id},[k(t(i),{ref:n=>c.value[o]=n,article:e,index:o,onThumbsUp:n=>t(u)(e,o),onRemoveThumbsUp:n=>t(v)(e,o),onPostComment:C,onDeleteComment:t(_),onDeleteArticle:n=>t(A)(e.id),onAddArticleFavorite:n=>t(f)(e,o),onRemoveArticleFavorite:n=>t(h)(e,o)},null,8,["article","index","onThumbsUp","onRemoveThumbsUp","onDeleteComment","onDeleteArticle","onAddArticleFavorite","onRemoveArticleFavorite"])]))),128))]))}});export{w as default};