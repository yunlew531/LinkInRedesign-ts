import{_ as l,n as _}from"./index.fe1cc65e.js";import{d,y as p,r as v,h as f,o as u,c as h,e as n,i as s,l as a,t as m,v as o}from"./vendor.4dab4da4.js";const x={class:"profile-nav"},k={class:"profile-nav-container"},y=o("Profile"),N=o("Activity & interests"),g=o("Articles "),w={class:"articles-num"},A=d({setup(B){p().params;const c=v(),r=async()=>{try{const{data:e}=await _();c.value=e.articles}catch(e){console.dir(e)}};return(()=>{r()})(),(e,V)=>{const t=f("router-link");return u(),h("section",x,[n("div",k,[s(t,{to:"/profile","exact-active-class":"active",class:"profile-nav-link"},{default:a(()=>[y]),_:1}),s(t,{to:"/profile/interests","exact-active-class":"active",class:"profile-nav-link"},{default:a(()=>[N]),_:1}),s(t,{to:"/profile/articles","exact-active-class":"active",class:"profile-nav-link"},{default:a(()=>{var i;return[g,n("span",w,"("+m(((i=c.value)==null?void 0:i.length)||0)+")",1)]}),_:1})])])}}});var b=l(A,[["__scopeId","data-v-5776e7fa"]]);export{b as default};
