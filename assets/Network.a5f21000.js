import{_ as u,e as v,g as h}from"./index.f488c0b0.js";import{d as g,i as k,f as w,r as f,c,g as a,h as t,F as N,k as y,j as x,o as s,e as C,w as j,u as n,t as l,l as B}from"./vendor.d65808b7.js";const I={class:"network-container"},b={class:"aside"},V=["src","alt"],F={key:0,class:"connect-received-qty"},L={class:"main-container"},S=g({setup(q){const _=k(v),o=w(()=>_.value.user.connections),m=f([{title:"Connections",path:"/network/connections",imgName:"link"},{title:"Invitations",path:"/network/invitations",imgName:"invitations"},{title:"Groups",path:"/network/groups",imgName:"users"},{title:"Articles",path:"/network/articles",imgName:"articles"},{title:"Hashtags",path:"/network/hashtags",imgName:"hash"}]);return(A,D)=>{const d=c("router-link"),p=c("router-view");return s(),a("div",I,[t("aside",b,[(s(!0),a(N,null,y(m.value,e=>(s(),C(d,{to:e.path,key:e.title,class:"nav-link","active-class":"active"},{default:j(()=>{var i,r;return[t("img",{src:n(h)(e.imgName),alt:e.title,class:"nav-link-icon"},null,8,V),t("span",null,l(e.title),1),e.title==="Invitations"&&((i=n(o))==null?void 0:i.received.length)?(s(),a("span",F,"("+l((r=n(o))==null?void 0:r.received.length)+")",1)):B("",!0)]}),_:2},1032,["to"]))),128))]),t("div",L,[x(p)])])}}});var H=u(S,[["__scopeId","data-v-74c57250"]]);export{H as default};
