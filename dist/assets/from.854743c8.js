import{e as a,i as f,a as x,r as I,b as O,c as h,d as w,g as S,h as k,j as A,k as L}from"./header.42500b50.js";import{j as l,h as y,O as i,i as g}from"./tap.3b5cc1bd.js";function v(e,n){return n===void 0&&(n=0),l(function(r,t){r.subscribe(y(t,function(o){return a(t,e,function(){return t.next(o)},n)},function(){return a(t,e,function(){return t.complete()},n)},function(o){return a(t,e,function(){return t.error(o)},n)}))})}function m(e,n){return n===void 0&&(n=0),l(function(r,t){t.add(e.schedule(function(){return r.subscribe(t)},n))})}function j(e,n){return f(e).pipe(m(n),v(n))}function E(e,n){return f(e).pipe(m(n),v(n))}function F(e,n){return new i(function(r){var t=0;return n.schedule(function(){t===e.length?r.complete():(r.next(e[t++]),r.closed||this.schedule())})})}function P(e,n){return new i(function(r){var t;return a(r,n,function(){t=e[x](),a(r,n,function(){var o,u,c;try{o=t.next(),u=o.value,c=o.done}catch(d){r.error(d);return}c?r.complete():r.next(u)},0,!0)}),function(){return g(t==null?void 0:t.return)&&t.return()}})}function s(e,n){if(!e)throw new Error("Iterable cannot be null");return new i(function(r){a(r,n,function(){var t=e[Symbol.asyncIterator]();a(r,n,function(){t.next().then(function(o){o.done?r.complete():r.next(o.value)})},0,!0)})})}function R(e,n){return s(I(e),n)}function T(e,n){if(e!=null){if(O(e))return j(e,n);if(h(e))return F(e,n);if(w(e))return E(e,n);if(S(e))return s(e,n);if(k(e))return P(e,n);if(A(e))return R(e,n)}throw L(e)}function $(e,n){return n?T(e,n):f(e)}export{$ as f};