import{B as s,C as a,D as r,E as i,F as d,s as p}from"./index.89e2cf0c.js";import{r as C,b as l}from"./vendor.a132856b.js";const e=C(),{updateUserProfile:t}=p,y=async o=>{try{const{data:n}=await s(o),{connections:c}=n;t({connections:c})}catch(n){console.dir(n)}},m=async o=>{try{const{data:n}=await a(o),{connections:c}=n;t({connections:c})}catch(n){console.dir(n)}},u=async o=>{try{const{data:n}=await r(o),{connections:c}=n;t({connections:c})}catch(n){console.dir(n)}},f=async o=>{try{const{data:n}=await i(o),{connections:c}=n;t({connections:c})}catch(n){console.dir(n)}},v=async o=>{try{const{data:n}=await d(o);console.log("data log => ",n);const{connections:c}=n;t({connections:c})}catch(n){console.dir(n)}},h=(o={})=>e.value=o;var b={user:l(e),removeSentConnect:m,submitConnect:y,updateOrderSideUser:h,acceptConnect:u,removeConnected:f,refuseConnect:v};export{b as c};
