import{r as b,o as y,w as v,l as e,a as o,c as t,u as a,t as d,i as f,b as c,F as h,e as w,f as x,g as B}from"./index.d307923d.js";import{f as p,b as E}from"./books.31378a42.js";const L={key:0},N={key:1,style:{color:"red"}},T=["href"],U=x(" - "),C=["onClick"],V={setup(m){const r="https://easy-lib.onrender.com",_=r+"/api/v1",l=b([]);y(()=>{p(),i()}),v(e,(s,u)=>{p(),i()});async function i(){if(!e.token){l.value=[];return}const s=_+"/booklendings?studentId="+e.id+"&token="+e.token;l.value=await(await fetch(s)).json()}async function g(s){fetch(r+s.self,{method:"DELETE",headers:{"Content-Type":"application/json","x-access-token":e.token}}).then(()=>{i()}).catch(u=>console.error(u))}return(s,u)=>(o(),t(h,null,[a(e).token?(o(),t("span",L," Here are you booklendings, "+d(a(e).email)+": ",1)):f("",!0),a(e).token?f("",!0):(o(),t("span",N," 'Please login to visualize booklendings!' ")),c("ul",null,[(o(!0),t(h,null,w(l.value,n=>(o(),t("li",{key:n.self},[c("a",{href:a(r)+n.book},d((a(E).value.find(k=>k.self==n.book)||{title:"unknown"}).title),9,T),U,c("button",{onClick:k=>g(n)},"RETURN "+d(n.self),9,C)]))),128))])],64))}},D=c("h1",null,"Booklendings:",-1),j={setup(m){return(r,_)=>(o(),t("div",null,[D,B(V)]))}};export{j as default};
