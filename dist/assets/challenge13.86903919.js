import"./style.7f2dd081.js";import{s as T}from"./data.80ff63d6.js";import{i as w,f as L}from"./header.5ef40da5.js";import{j as h,h as v,m as f,t as c}from"./tap.396166da.js";import{b as M}from"./async.55191640.js";import{d as S,s as E}from"./switchMap.05f447b8.js";import{f as p}from"./filter.512e3932.js";import{p as H,f as y}from"./from.1e9f5128.js";import"./isScheduler.f3313ce6.js";function C(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=H(e);return y(e,o)}function g(e){return h(function(n,o){var r=null,t=!1,a;r=n.subscribe(v(o,void 0,void 0,function(s){a=w(e(s,g(e)(n))),r?(r.unsubscribe(),r=null,a.subscribe(o)):t=!0})),t&&(r.unsubscribe(),r=null,a.subscribe(o))})}function q(e,n){return n===void 0&&(n=M),h(function(o,r){var t=null,a=null,s=null,m=function(){if(t){t.unsubscribe(),t=null;var i=a;a=null,r.next(i)}};function b(){var i=s+e,d=n.now();if(d<i){t=this.schedule(void 0,i-d),r.add(t);return}m()}o.subscribe(v(r,function(i){a=i,s=n.now(),t||(t=n.schedule(b,e),r.add(t))},function(){m(),r.complete()},void 0,function(){a=t=null}))})}const x=document.querySelector("#search"),l=document.querySelector(".loader"),u=document.querySelector("#list"),U=L(x,"input").pipe(f(e=>e.target.value)),j=e=>{var t;const n=Math.floor(Math.random()*3e3),o=(t=new URL(e).searchParams.get("search"))==null?void 0:t.toLowerCase();if(!o)return C([]);const r=T.filter(a=>a.toLowerCase().includes(o));return y(new Promise((a,s)=>{n>2500?setTimeout(s,n-1e3):setTimeout(a,n,r)}))};U.pipe(q(333),S(),c(()=>{u.innerHTML="Enter atleast 2 chars",l.style.display="none"}),p(e=>e.length>1),c(()=>{u.innerHTML="",l.style.display="block"}),E(e=>j("https://startups.com?search="+e)),f(e=>e.slice(0,5)),c(e=>{e.length===0&&(u.innerHTML="No results found",l.style.display="none")}),p(e=>e.length>0),f(e=>e.map(n=>`<li>${n}</li>`).join("")),c(e=>{u.innerHTML=e,l.style.display="none"}),g((e,n)=>(u.innerHTML="Something went wrong!!!",l.style.display="none",n))).subscribe();
