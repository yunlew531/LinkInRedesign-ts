import{_ as P,d as R,M as w,N as U,O as x,P as A,s as E}from"./index.89e2cf0c.js";import{d as S,C as $,s as B,r as d,g as v,h as e,j as I,w as j,N as F,u as T,m as z,n as K,o as h,D as l,H as i,I as q,x as L,l as V,q as g}from"./vendor.a132856b.js";const a=u=>(z("data-v-5721c3e6"),u=u(),K(),u),M={class:"login-container"},O={class:"login-content"},G={class:"login-main"},H=a(()=>e("p",{class:"login-paragraph"},[g("Find Dream Jobs,"),e("br"),g(" All In LinkIn")],-1)),J={class:"login-card",key:"login"},Q=a(()=>e("div",{class:"login-card-header"},[e("img",{src:w,alt:"LinkIn logo",class:"logo-img"}),e("h1",null,[g("Link"),e("span",null,"In")])],-1)),W={class:"login-card-body"},X={class:"input-group"},Y=a(()=>e("span",null,"Email",-1)),Z={class:"input-group"},ee=a(()=>e("span",null,"Password",-1)),se=["onKeyup"],te=["disabled"],oe={class:"login-card",key:"register"},ne=a(()=>e("div",{class:"login-card-header"},[e("img",{src:w,alt:"LinkIn logo",class:"logo-img"}),e("h1",null,[g("Link"),e("span",null,"In")])],-1)),ae={class:"login-card-body login-card-body-register"},le={class:"input-group"},ie=a(()=>e("span",null,"Name",-1)),re={class:"input-group"},de=a(()=>e("span",null,"Phone",-1)),ue={class:"input-group"},pe=a(()=>e("span",null,"Email",-1)),ce={class:"input-group"},_e=a(()=>e("span",null,"Password",-1)),ge={class:"input-group"},me=a(()=>e("span",null,"City",-1)),ve=["disabled"],he=S({setup(u){const C=$(()=>R(()=>import("./index.89e2cf0c.js").then(function(n){return n.a3}),["assets/index.89e2cf0c.js","assets/index.491beacd.css","assets/vendor.a132856b.js"])),b=B(),{setLogin:y}=E,p=d("login");let f="";const m=(n,s="")=>{n instanceof Element?p.value=f:(p.value="",f=s)},c=d(!1),o=d({name:"",phone:"",email:"",password:"",city:""}),D=async()=>{var n;c.value=!0;try{const{data:s}=await U(o.value),{token:t,expired:N}=s;document.cookie=`LinkInRe=${t};expires=${new Date(N)};`,x.defaults.headers.common.Authorization=`${t}`,y(),b.push("/")}catch(s){const t=((n=s.response)==null?void 0:n.data.message)||"register failed";alert(t)}c.value=!1},_=d(!1),r=d({email:"mike@gmail.com",password:"6666666666"}),k=async()=>{_.value=!0;try{const{data:n}=await A(r.value),{token:s,expired:t}=n;document.cookie=`LinkInRe=${s};expires=${new Date(t)};`,x.defaults.headers.common.Authorization=`${s}`,y(),b.push("/")}catch(n){alert(n.response.data.message)}_.value=!1};return(n,s)=>(h(),v("div",M,[e("div",O,[e("main",G,[H,I(F,{name:"card",onAfterLeave:s[9]||(s[9]=t=>m(t))},{default:j(()=>[p.value==="login"?(h(),v("section",J,[Q,e("div",W,[e("label",X,[Y,l(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=t=>r.value.email=t)},null,512),[[i,r.value.email]])]),e("label",Z,[ee,l(e("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=t=>r.value.password=t),onKeyup:q(k,["enter"])},null,40,se),[[i,r.value.password]])])]),e("button",{type:"button",class:L(["login-btn",{disabled:_.value}]),onClick:k,disabled:_.value},"Login",10,te),e("button",{type:"button",class:"go-register-btn",onClick:s[2]||(s[2]=t=>m(t,"register"))},"No account? register one")])):V("",!0),p.value==="register"?(h(),v("section",oe,[ne,e("div",ae,[e("label",le,[ie,l(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=t=>o.value.name=t)},null,512),[[i,o.value.name]])]),e("label",re,[de,l(e("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=t=>o.value.phone=t)},null,512),[[i,o.value.phone]])]),e("label",ue,[pe,l(e("input",{type:"email","onUpdate:modelValue":s[5]||(s[5]=t=>o.value.email=t)},null,512),[[i,o.value.email]])]),e("label",ce,[_e,l(e("input",{type:"password","onUpdate:modelValue":s[6]||(s[6]=t=>o.value.password=t)},null,512),[[i,o.value.password]])]),e("label",ge,[me,l(e("input",{type:"text","onUpdate:modelValue":s[7]||(s[7]=t=>o.value.city=t)},null,512),[[i,o.value.city]])])]),e("button",{type:"button",class:L(["register-btn",{disabled:c.value}]),onClick:D,disabled:c.value},"Register",10,ve),e("button",{type:"button",class:"go-login-btn",onClick:s[8]||(s[8]=t=>m(t,"login"))}," I have account")])):V("",!0)]),_:1})]),I(T(C))])]))}});var fe=P(he,[["__scopeId","data-v-5721c3e6"]]);export{fe as default};
