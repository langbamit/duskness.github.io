import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f as p,F as l,h as d,k as f,l as i,n as m,H as h}from"./chunks/vendor-b47be5bd.js";function k(s){let r,a,f=s[1].stack+"";return{c(){r=t("pre"),a=e(f)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,f),t.forEach(u)},m(s,t){p(s,r,t),l(r,a)},p(s,r){2&r&&f!==(f=s[1].stack+"")&&d(a,f)},d(s){s&&u(r)}}}function v(s){let r,a,v,E,b,g,x,H=s[1].message+"",P=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),v=f(),E=t("p"),b=e(H),g=f(),P&&P.c(),x=i()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),v=m(t),E=o(t,"P",{});var p=n(E);b=c(p,H),p.forEach(u),g=m(t),P&&P.l(t),x=i()},m(s,t){p(s,r,t),l(r,a),p(s,v,t),p(s,E,t),l(E,b),p(s,g,t),P&&P.m(s,t),p(s,x,t)},p(s,[r]){1&r&&d(a,s[0]),2&r&&H!==(H=s[1].message+"")&&d(b,H),s[1].stack?P?P.p(s,r):(P=k(s),P.c(),P.m(x.parentNode,x)):P&&(P.d(1),P=null)},i:h,o:h,d(s){s&&u(r),s&&u(v),s&&u(E),s&&u(g),P&&P.d(s),s&&u(x)}}}function E({error:s,status:r}){return{props:{error:s,status:r}}}function b(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,b,v,a,{status:0,error:1})}}export{E as load};
