import{m as r,t as i}from"./tap.3b5cc1bd.js";import{f as o}from"./header.42500b50.js";import{B as m}from"./BehaviorSubject.39e5689a.js";import{m as n}from"./merge.5838d407.js";import{s as u}from"./startWith.64320dfe.js";import{w as c}from"./withLatestFrom.423d9801.js";import"./Subject.9e91c958.js";import"./mergeAll.849e765c.js";import"./empty.dbade674.js";import"./args.33b442f4.js";import"./isScheduler.b11c038e.js";import"./from.854743c8.js";const a=document.querySelector("#minus"),l=document.querySelector("#plus"),p=document.querySelector("#input"),e=new m(0),b=o(a,"click").pipe(r(()=>-1)),f=o(l,"click").pipe(r(()=>1)),S=o(p,"input").pipe(r(t=>t.target.value),r(t=>parseInt(t)),r(t=>Number.isNaN(t)?0:t));n(b,f).pipe(u(0),c(e),r(([t,s])=>s+t),i(t=>{e.next(t)})).subscribe();S.pipe(i(t=>{e.next(t)})).subscribe();e.pipe(i(t=>{p.value=String(t)})).subscribe();