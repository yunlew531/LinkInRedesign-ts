import{d as v,y as p}from"./index.9fe55531.js";import{d as A,C as _,i as f,r as h,g as m,F as C,k as F,u as o,o as a,j as b}from"./vendor.d65808b7.js";const j=A({setup(R){const i=_(()=>v(()=>import("./Article.918001af.js"),["assets/Article.918001af.js","assets/Article.976e851b.css","assets/vendor.d65808b7.js","assets/index.9fe55531.js","assets/index.491beacd.css","assets/main.5ebddbe0.js","assets/dayjs.19e4cc98.js"])),t=f(p),c=h([]),d=async s=>{const{articleIdx:l}=s;try{await t.postComment(s),c.value[l].resetCommentInput(l)}catch(e){console.log(e)}},u=s=>t.deleteComment(s);return(s,l)=>(a(),m("ul",null,[(a(!0),m(C,null,F(o(t).articles.value,(e,n)=>(a(),m("li",{key:e.id},[b(o(i),{ref:r=>c.value[n]=r,article:e,index:n,onThumbsUp:r=>o(t).thumbsUpArticle(e,n),onRemoveThumbsUp:r=>o(t).removeThumbsUpArticle(e,n),onPostComment:d,onDeleteComment:u,onDeleteArticle:r=>o(t).deleteArticle(e.id),onAddArticleFavorite:r=>o(t).addArticleFavorite(e,n),onRemoveArticleFavorite:r=>o(t).removeArticleFavorite(e,n)},null,8,["article","index","onThumbsUp","onRemoveThumbsUp","onDeleteArticle","onAddArticleFavorite","onRemoveArticleFavorite"])]))),128))]))}});export{j as default};
