"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{5010:function(t,e,r){let n;r.d(e,{E:function(){return rC},A:function(){return rS}});var l=r(2265);/*!
 * OverlayScrollbars
 * Version: 2.7.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */let o=(t,e)=>{let r;let{o:n,u:l,_:o}=t,i=n,a=(t,e)=>{let n=i,a=e||(l?!l(n,t):n!==t);return(a||o)&&(i=t,r=n),[i,a,r]};return[e?t=>a(e(i,r),t):a,t=>[i,!!t,r]]},i="undefined"!=typeof document,a=i?window:{},c=Math.max,s=Math.min,u=Math.round,d=a.cancelAnimationFrame,f=a.requestAnimationFrame,p=a.setTimeout,y=a.clearTimeout,v=t=>void 0!==a[t]?a[t]:void 0,h=v("MutationObserver"),b=v("IntersectionObserver"),m=v("ResizeObserver"),w=v("ScrollTimeline"),g=i&&Node.ELEMENT_NODE,{toString:x,hasOwnProperty:E}=Object.prototype,O=/^\[object (.+)\]$/,S=t=>void 0===t,C=t=>null===t,T=t=>S(t)||C(t)?"".concat(t):x.call(t).replace(O,"$1").toLowerCase(),L=t=>"number"==typeof t,R=t=>"string"==typeof t,k=t=>"boolean"==typeof t,A=t=>"function"==typeof t,D=t=>Array.isArray(t),H=t=>"object"==typeof t&&!D(t)&&!C(t),M=t=>{let e=!!t&&t.length,r=L(e)&&e>-1&&e%1==0;return(!!D(t)||!A(t)&&!!r)&&(!(e>0&&H(t))||e-1 in t)},N=t=>{let e;if(!t||!H(t)||"object"!==T(t))return!1;let r="constructor",n=t[r],l=n&&n.prototype,o=E.call(t,r),i=l&&E.call(l,"isPrototypeOf");if(n&&!o&&!i)return!1;for(e in t);return S(e)||E.call(t,e)},P=t=>{let e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===g)},I=t=>{let e=Element;return!!t&&(e?t instanceof e:t.nodeType===g)};function V(t,e){if(M(t))for(let r=0;r<t.length&&!1!==e(t[r],r,t);r++);else t&&V(Object.keys(t),r=>e(t[r],r,t));return t}let _=(t,e)=>t.indexOf(e)>=0,z=(t,e)=>t.concat(e),j=(t,e,r)=>(!r&&!R(e)&&M(e)?Array.prototype.push.apply(t,e):t.push(e),t),F=t=>Array.from(t||[]),G=t=>D(t)?t:[t],U=t=>!!t&&!t.length,q=t=>F(new Set(t)),B=(t,e,r)=>{V(t,t=>t&&t.apply(void 0,e||[])),r||(t.length=0)},X="paddingTop",K="paddingRight",W="paddingLeft",Y="paddingBottom",$="marginLeft",J="marginRight",Z="marginBottom",Q="overflowX",tt="overflowY",te="width",tr="height",tn="hidden",tl="visible",to=(t,e,r,n)=>{if(t&&e){let l=!0;return V(r,r=>{(n?n(t[r]):t[r])!==(n?n(e[r]):e[r])&&(l=!1)}),l}return!1},ti=(t,e)=>to(t,e,["w","h"]),ta=(t,e)=>to(t,e,["x","y"]),tc=(t,e)=>to(t,e,["t","r","b","l"]),ts=()=>{},tu=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return t.bind(0,...r)},td=t=>{let e;let r=t?p:f,n=t?y:d;return[l=>{n(e),e=r(l,A(t)?t():t)},()=>n(e)]},tf=(t,e)=>{let r,n,l;let o=ts,{v:i,p:a,S:c}=e||{},s=function(e){o(),y(r),r=n=void 0,o=ts,t.apply(this,e)},u=t=>c&&n?c(n,t):t,v=()=>{o!==ts&&s(u(l)||l)},h=function(){let t=F(arguments),e=A(i)?i():i;if(L(e)&&e>=0){let i=A(a)?a():a,c=L(i)&&i>=0,h=e>0?p:f,b=e>0?y:d,m=u(t)||t,w=s.bind(0,m);o();let g=h(w,e);o=()=>b(g),c&&!r&&(r=p(v,i)),n=l=m}else s(t)};return h.m=v,h},tp=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),ty=t=>t?Object.keys(t):[],tv=(t,e,r,n,l,o,i)=>(("object"!=typeof t||C(t))&&!A(t)&&(t={}),V([e,r,n,l,o,i],e=>{V(e,(r,n)=>{let l=e[n];if(t===l)return!0;let o=D(l);if(l&&N(l)){let e=t[n],r=e;o&&!D(e)?r=[]:o||N(e)||(r={}),t[n]=tv(r,l)}else t[n]=o?l.slice():l})}),t),th=(t,e)=>V(tv({},t),(t,r,n)=>{void 0===t?delete n[r]:e&&t&&N(t)&&(n[r]=th(t,e))}),tb=t=>{for(let e in t)return!1;return!0},tm=(t,e,r)=>c(t,s(e,r)),tw=t=>F(new Set((D(t)?t:(t||"").split(" ")).filter(t=>t))),tg=(t,e)=>t&&t.getAttribute(e),tx=(t,e)=>t&&t.hasAttribute(e),tE=(t,e,r)=>{V(tw(e),e=>{t&&t.setAttribute(e,r||"")})},tO=(t,e)=>{V(tw(e),e=>t&&t.removeAttribute(e))},tS=(t,e)=>{let r=tw(tg(t,e)),n=tu(tE,t,e),l=(t,e)=>{let n=new Set(r);return V(tw(t),t=>n[e](t)),F(n).join(" ")};return{O:t=>n(l(t,"delete")),$:t=>n(l(t,"add")),C:t=>{let e=tw(t);return e.reduce((t,e)=>t&&r.includes(e),e.length>0)}}},tC=(t,e,r)=>{tS(t,e).O(r)},tT=(t,e,r)=>(tS(t,e).$(r),tu(tC,t,e,r)),tL=(t,e,r,n)=>{(n?tT:tC)(t,e,r)},tR=(t,e,r)=>tS(t,e).C(r),tk=t=>tS(t,"class"),tA=(t,e)=>{tk(t).O(e)},tD=(t,e)=>(tk(t).$(e),tu(tA,t,e)),tH=(t,e)=>{let r=[],n=e?I(e)&&e:document;return n?j(r,n.querySelectorAll(t)):r},tM=(t,e)=>{let r=e?I(e)&&e:document;return r?r.querySelector(t):null},tN=(t,e)=>!!I(t)&&t.matches(e),tP=t=>tN(t,"body"),tI=t=>t?F(t.childNodes):[],tV=t=>t&&t.parentElement,t_=(t,e)=>I(t)&&t.closest(e),tz=t=>(t||document).activeElement,tj=(t,e,r)=>{let n=t_(t,e),l=t&&tM(r,n),o=t_(l,e)===n;return!!n&&!!l&&(n===t||l===t||o&&t_(t_(t,r),e)!==n)},tF=t=>{if(M(t))V(F(t),t=>tF(t));else if(t){let e=tV(t);e&&e.removeChild(t)}},tG=(t,e,r)=>{if(r&&t){let n,l=e;return M(r)?(n=document.createDocumentFragment(),V(r,t=>{t===l&&(l=t.previousSibling),n.appendChild(t)})):n=r,e&&(l?l!==e&&(l=l.nextSibling):l=t.firstChild),t.insertBefore(n,l||null),()=>tF(r)}return ts},tU=(t,e)=>tG(t,null,e),tq=(t,e)=>tG(tV(t),t&&t.nextSibling,e),tB=t=>{let e=document.createElement("div");return tE(e,"class",t),e},tX=t=>{let e=tB();return e.innerHTML=t.trim(),V(tI(e),t=>tF(t))},tK=/^--/,tW=(t,e)=>t.getPropertyValue(e)||t[e]||"",tY=t=>{let e=t||0;return isFinite(e)?e:0},t$=t=>tY(parseFloat(t||"")),tJ=t=>"".concat((100*tY(t)).toFixed(3),"%"),tZ=t=>"".concat(tY(t),"px");function tQ(t,e){t&&V(e,(e,r)=>{try{let n=t.style,l=L(e)?tZ(e):(e||"")+"";tK.test(r)?n.setProperty(r,l):n[r]=l}catch(t){}})}function t0(t,e,r){let n=R(e),l=n?"":{};if(t){let o=a.getComputedStyle(t,r)||t.style;l=n?tW(o,e):e.reduce((t,e)=>(t[e]=tW(o,e),t),l)}return l}let t1=t=>"rtl"===t0(t,"direction"),t3=(t,e,r)=>{let n=e?"".concat(e,"-"):"",l=r?"-".concat(r):"",o="".concat(n,"top").concat(l),i="".concat(n,"right").concat(l),a="".concat(n,"bottom").concat(l),c="".concat(n,"left").concat(l),s=t0(t,[o,i,a,c]);return{t:t$(s[o]),r:t$(s[i]),b:t$(s[a]),l:t$(s[c])}},t2=(t,e)=>"translate".concat(H(t)?"(".concat(t.x,",").concat(t.y,")"):"".concat(e?"X":"Y","(").concat(t,")")),t9={w:0,h:0},t5=(t,e)=>e?{w:e["".concat(t,"Width")],h:e["".concat(t,"Height")]}:t9,t6=t=>t5("inner",t||a),t4=tu(t5,"offset"),t7=tu(t5,"client"),t8=tu(t5,"scroll"),et=t=>{let e=parseFloat(t0(t,te))||0,r=parseFloat(t0(t,tr))||0;return{w:e-u(e),h:r-u(r)}},ee=t=>t.getBoundingClientRect(),er=t=>!!(t&&(t[tr]||t[te])),en=(t,e)=>{let r=er(t);return!er(e)&&r},el=(t,e,r,n)=>{V(tw(e),e=>{t.removeEventListener(e,r,n)})},eo=(t,e,r,n)=>{var l;let o=null==(l=n&&n.H)||l,i=n&&n.I||!1,a=n&&n.A||!1,c={passive:o,capture:i};return tu(B,tw(e).map(e=>{let n=a?l=>{el(t,e,n,i),r(l)}:r;return t.addEventListener(e,n,c),tu(el,t,e,n,i)}))},ei=t=>t.stopPropagation(),ea=t=>t.preventDefault(),ec={x:0,y:0},es=t=>{let e=t&&ee(t);return e?{x:e.left+a.scrollX,y:e.top+a.scrollY}:ec},eu=(t,e,r)=>r?r.n?-t+0:r.i?e-t:t:t,ed=(t,e)=>[eu(0,t,e),eu(t,t,e)],ef=(t,e,r)=>tm(0,1,eu(t,e,r)/e||0),ep=(t,e)=>{let{x:r,y:n}=L(e)?{x:e,y:e}:e||{};L(r)&&(t.scrollLeft=r),L(n)&&(t.scrollTop=n)},ey=t=>({x:t.scrollLeft,y:t.scrollTop}),ev=(t,e)=>{V(G(e),t)},eh=t=>{let e=new Map,r=(t,r)=>{if(t){let n=e.get(t);ev(t=>{n&&n[t?"delete":"clear"](t)},r)}else e.forEach(t=>{t.clear()}),e.clear()},n=(t,l)=>{if(R(t)){let n=e.get(t)||new Set;return e.set(t,n),ev(t=>{A(t)&&n.add(t)},l),tu(r,t,l)}k(l)&&l&&r();let o=ty(t),i=[];return V(o,e=>{let r=t[e];r&&j(i,n(e,r))}),tu(B,i)};return n(t||{}),[n,r,(t,r)=>{V(F(e.get(t)),t=>{r&&!U(r)?t.apply(0,r):t()})}]},eb=t=>JSON.stringify(t,(t,e)=>{if(A(e))throw 0;return e}),em=(t,e)=>t?"".concat(e).split(".").reduce((t,e)=>t&&tp(t,e)?t[e]:void 0,t):void 0,ew={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},eg=(t,e)=>{let r={};return V(z(ty(e),ty(t)),n=>{let l=t[n],o=e[n];if(H(l)&&H(o))tv(r[n]={},eg(l,o)),tb(r[n])&&delete r[n];else if(tp(e,n)&&o!==l){let t=!0;if(D(l)||D(o))try{eb(l)===eb(o)&&(t=!1)}catch(t){}t&&(r[n]=o)}}),r},ex=(t,e,r)=>n=>[em(t,n),r||void 0!==em(e,n)],eE="data-overlayscrollbars",eO="os-environment",eS="".concat(eO,"-scrollbar-hidden"),eC="".concat(eE,"-initialize"),eT="".concat(eE,"-overflow-x"),eL="".concat(eE,"-overflow-y"),eR="overflowVisible",ek="updating",eA="".concat(eE,"-viewport"),eD="scrollbarHidden",eH="".concat(eE,"-padding"),eM="".concat(eE,"-content"),eN="os-size-observer",eP="".concat(eN,"-appear"),eI="".concat(eN,"-listener"),eV="os-scrollbar",e_="".concat(eV,"-rtl"),ez="".concat(eV,"-horizontal"),ej="".concat(eV,"-vertical"),eF="".concat(eV,"-track"),eG="".concat(eV,"-handle"),eU="".concat(eV,"-visible"),eq="".concat(eV,"-cornerless"),eB="".concat(eV,"-interaction"),eX="".concat(eV,"-unusable"),eK="".concat(eV,"-auto-hide"),eW="".concat(eK,"-hidden"),eY="".concat(eV,"-wheel"),e$="".concat(eF,"-interactive"),eJ="".concat(eG,"-interactive"),eZ={},eQ={},e0=t=>{V(t,t=>V(t,(e,r)=>{eZ[r]=t[r]}))},e1=(t,e,r)=>ty(t).map(n=>{let{static:l,instance:o}=t[n],[i,a,c]=r||[],s=r?o:l;if(s){let t=r?s(i,a,e):s(e);return(c||eQ)[n]=t}}),e3=t=>eQ[t],e2=(t,e)=>{let{T:r}=e,[n,l]=t("showNativeOverlaidScrollbars");return[n&&r.x&&r.y,l]},e9=t=>0===t.indexOf(tl),e5=(t,e)=>{let{D:r}=t,n=t=>{let n=t0(r,t),l=e?e[t]:n;return[n,"scroll"===l]},[l,o]=n(Q),[i,a]=n(tt);return{R:{x:l,y:i},k:{x:o,y:a}}},e6=(t,e,r,n)=>{let l=e.x||e.y,o=(t,e)=>{let r=e9(t),n=e&&r&&t.replace("".concat(tl,"-"),"")||(r&&l?"hidden":"");return[e&&!r?t:"",e9(n)?"hidden":n]},[i,a]=o(r.x,e.x),[c,s]=o(r.y,e.y);return n[Q]=a&&c?a:i,n[tt]=s&&i?s:c,e5(t,n)},e4="__osScrollbarsHidingPlugin",e7=()=>{let t=(t,e,r)=>{tU(document.body,t),tU(document.body,t);let n=t7(t),l=t4(t),o=et(e);return r&&tF(t),{x:l.h-n.h+o.h,y:l.w-n.w+o.w}},e=tX('<div class="'.concat(eO,'"><div></div><style></style></div>'))[0],r=e.firstChild,[n,,l]=eh(),[i,c]=o({o:t(e,r),u:ta},tu(t,e,r,!0)),[s]=c(),u=(t=>{let e=!1,r=tD(t,eS);try{e="none"===t0(t,"scrollbar-width")||"none"===t0(t,"display","::-webkit-scrollbar")}catch(t){}return r(),e})(e),d={x:0===s.x,y:0===s.y},f={elements:{host:null,padding:!u,viewport:t=>u&&tP(t)&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=tv({},ew),y=tu(tv,{},p),v=tu(tv,{},f),h={P:s,T:d,L:u,J:!!w,K:((t,e)=>{tQ(t,{[Q]:tn,[tt]:tn,direction:"rtl"}),ep(t,{x:0});let r=es(t),n=es(e);ep(t,{x:-999});let l=es(e);return{i:r.x===n.x,n:n.x!==l.x}})(e,r),Z:tu(n,"r"),G:v,tt:t=>tv(f,t)&&v(),nt:y,ot:t=>tv(p,t)&&y(),st:tv({},f),et:tv({},p)};return tO(e,"style"),tF(e),a.addEventListener("resize",()=>{let t;if(!u&&(!d.x||!d.y)){let e=e3(e4);t=!!(e?e.Y():ts)(h,i)}l("r",[t])}),h},e8=()=>(n||(n=e7()),n),rt=(t,e)=>A(e)?e.apply(0,t):e,re=(t,e,r,n)=>rt(t,S(n)?r:n)||e.apply(0,t),rr=(t,e,r,n)=>{let l=rt(t,S(n)?r:n);return!!l&&(P(l)?l:e.apply(0,t))},rn=(t,e)=>{let{nativeScrollbarsOverlaid:r,body:n}=e||{},{T:l,L:o,G:i}=e8(),{nativeScrollbarsOverlaid:a,body:c}=i().cancel,s=S(n)?c:n,u=(l.x||l.y)&&(null!=r?r:a),d=t&&(C(s)?!o:s);return!!u||!!d},rl=new WeakMap,ro=(t,e)=>{rl.set(t,e)},ri=t=>{rl.delete(t)},ra=t=>rl.get(t),rc=(t,e,r)=>{let n=!1,l=!!r&&new WeakMap,o=o=>{l&&r&&V(r.map(e=>{let[r,n]=e||[];return[n&&r?(o||tH)(r,t):[],n]}),r=>V(r[0],o=>{let i=r[1],a=l.get(o)||[];if(t.contains(o)&&i){let t=eo(o,i,r=>{n?(t(),l.delete(o)):e(r)});l.set(o,j(a,t))}else B(a),l.delete(o)}))};return o(),[()=>{n=!0},o]},rs=(t,e,r,n)=>{let l=!1,{ct:o,rt:i,lt:a,it:c,ut:s,ft:u}=n||{},d=tf(()=>l&&r(!0),{v:33,p:99}),[f,p]=rc(t,d,a),y=i||[],v=z(o||[],y),b=(l,o)=>{if(!U(o)){let i=s||ts,a=u||ts,d=[],f=[],v=!1,h=!1;if(V(o,r=>{let{attributeName:l,target:o,type:s,oldValue:u,addedNodes:p,removedNodes:b}=r,m="attributes"===s,w=t===o,g=m&&l,x=g&&tg(o,l||"")||null,E=g&&u!==x,O=_(y,l)&&E;if(e&&("childList"===s||!w)){let e=m&&E,s=e&&c&&tN(o,c),f=(s?!i(o,l,u,x):!m||e)&&!a(r,!!s,t,n);V(p,t=>j(d,t)),V(b,t=>j(d,t)),h=h||f}!e&&w&&E&&!i(o,l,u,x)&&(j(f,l),v=v||O)}),p(t=>q(d).reduce((e,r)=>(j(e,tH(t,r)),tN(r,t)?j(e,r):e),[])),e)return!l&&h&&r(!1),[!1];if(!U(f)||v){let t=[q(f),v];return l||r.apply(0,t),t}}},m=new h(tu(b,!1));return[()=>(m.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:v,subtree:e,childList:e,characterData:e}),l=!0,()=>{l&&(f(),m.disconnect(),l=!1)}),()=>{if(l)return d.m(),b(!0,m.takeRecords())}]},ru=(t,e,r)=>{let{_t:n,dt:l}=r||{},i=e3("__osSizeObserverPlugin"),{K:a}=e8(),c=tu(t1,t),[s]=o({o:!1,_:!0});return()=>{let r=[],u=tX('<div class="'.concat(eN,'"><div class="').concat(eI,'"></div></div>'))[0],d=u.firstChild,f=t=>{let r=t instanceof ResizeObserverEntry,l=!r&&D(t),o=!1,i=!1,c=!0;if(r){let[e,,r]=s(t.contentRect),n=er(e),l=en(e,r);c=!(o=!(i=!r||l)&&!n)}else l?[,c]=t:i=!0===t;if(n&&c){let e=l?t[0]:t1(u);ep(u,{x:eu(3333333,3333333,e&&a),y:3333333})}o||e({vt:l?t:void 0,ht:!l,dt:i})};if(m){let t=new m(t=>f(t.pop()));t.observe(d),j(r,()=>{t.disconnect()})}else{if(!i)return ts;let[t,e]=i(d,f,l);j(r,z([tD(u,eP),eo(u,"animationstart",t)],e))}if(n){let[t]=o({o:void 0},c);j(r,eo(u,"scroll",e=>{let[r,n,l]=t();n&&(tA(d,"ltr rtl"),tD(d,r?"rtl":"ltr"),f([!!r,n,l])),ei(e)}))}return tu(B,j(r,tU(t,u)))}},rd=(t,e)=>{let r;let n=t=>0===t.h||t.isIntersecting||t.intersectionRatio>0,l=tB("os-trinsic-observer"),[i]=o({o:!1}),a=(t,r)=>{if(t){let l=i(n(t)),[,o]=l;return o&&!r&&e(l)&&[l]}},c=(t,e)=>a(e.pop(),t);return[()=>{let e=[];if(b)(r=new b(tu(c,!1),{root:t})).observe(l),j(e,()=>{r.disconnect()});else{let t=()=>{a(t4(l))};j(e,ru(l,t)()),t()}return tu(B,j(e,tU(t,l)))},()=>r&&c(!0,r.takeRecords())]},rf=(t,e,r,n)=>{let l,i,a,c,s,u;let{L:d}=e8(),f="[".concat(eE,"]"),p="[".concat(eA,"]"),y=["tabindex"],v=["wrap","cols","rows"],h=["id","class","style","open"],{gt:b,bt:w,D:g,wt:x,St:E,V:O,yt:S,Ot:C}=t,T={$t:!1,N:t1(b)},k=e8(),H=e3(e4),[M]=o({u:ti,o:{w:0,h:0}},()=>{let n=H&&H.M(t,e,T,k,r).W,l=S(eR),o=!O&&S("arrange"),i=o&&ey(g);C(eR),O&&C(ek,!0);let a=o&&n&&n()[0],c=t8(x),s=t8(g),u=et(g);return C(eR,l),O&&C(ek),a&&a(),ep(g,i),{w:s.w+c.w+u.w,h:s.h+c.h+u.h}}),N=E?v:z(h,v),P=tf(n,{v:()=>l,p:()=>i,S(t,e){let[r]=t,[n]=e;return[z(ty(r),ty(n)).reduce((t,e)=>(t[e]=r[e]||n[e],t),{})]}}),I=t=>{if(O){let e=t1(b);tv(t,{Ct:u!==e}),tv(T,{N:e}),u=e}},j=t=>{V(t||y,t=>{if(_(y,t)){let e=tg(w,t);R(e)?tE(g,t,e):tO(g,t)}})},F=(t,e)=>{let[r,l]=t,o={xt:l};return tv(T,{$t:r}),e||n(o),o},G=t=>{let{ht:e,vt:r,dt:l}=t,o=!(e&&!l&&!r)&&d?P:n,[i,a]=r||[],c={ht:e||l,dt:l,Ct:a};I(c),r&&tv(T,{N:i}),o(c)},U=(t,e)=>{let[,r]=M(),l={Ht:r};I(l);let o=t?n:P;return r&&!e&&o(l),l},q=(t,e,r)=>{let n={It:e};return I(n),e&&!r?P(n):O||j(t),n},{Z:B}=k,[X,K]=x?rd(w,F):[],W=!O&&ru(w,G,{dt:!0,_t:!0}),[Y,$]=rs(w,!1,q,{rt:h,ct:z(h,y)}),J=O&&m&&new m(t=>{let e=t[t.length-1].contentRect;G({ht:!0,dt:en(e,s)}),s=e});return[()=>{j(),J&&J.observe(w);let t=W&&W(),e=X&&X(),r=Y(),n=B(t=>{let[,e]=M();P({zt:t,Ht:e})});return()=>{J&&J.disconnect(),t&&t(),e&&e(),c&&c(),r(),n()}},t=>{let{Et:e,At:r,Tt:n}=t,o={},[s]=e("update.ignoreMutation"),[u,d]=e("update.attributes"),[y,v]=e("update.elementEvents"),[h,b]=e("update.debounce"),m=r||n,w=t=>A(s)&&s(t);if(v||d){a&&a(),c&&c();let[t,e]=rs(x||g,!0,U,{ct:z(N,u||[]),lt:y,it:f,ft:(t,e)=>{let{target:r,attributeName:n}=t;return!e&&!!n&&!O&&tj(r,f,p)||!!t_(r,".".concat(eV))||!!w(t)}});c=t(),a=e}if(b){if(P.m(),D(h)){let t=h[0],e=h[1];l=L(t)&&t,i=L(e)&&e}else l=!!L(h)&&h,i=!1}if(m){let t=$(),e=K&&K(),r=a&&a();t&&tv(o,q(t[0],t[1],m)),e&&tv(o,F(e[0],m)),r&&tv(o,U(r[0],m))}return I(o),o},T]},rp=(t,e,r,n)=>{let{G:l,K:o}=e8(),{scrollbars:i}=l(),{slot:a}=i,{gt:c,bt:s,D:u,Dt:d,Rt:f,kt:p,V:y}=e,{scrollbars:v}=d?{}:t,{slot:h}=v||{},b=new Map,m=t=>w&&new w({source:f,axis:t}),g=m("x"),x=m("y"),E=rr([c,s,u],()=>y&&p?c:s,a,h),O=(t,e)=>{if(e){let r=t?te:tr,{Mt:n,Vt:l}=e;return tm(0,1,ee(l)[r]/ee(n)[r]||0)}let n=t?"x":"y",{Lt:l,Pt:o}=r,i=o[n];return tm(0,1,i/(i+l[n])||0)},S=(t,e,r,n)=>{let l=O(r,t);return 1/l*(1-l)*(n?1-e:e)||0},C=(t,e)=>tv(t,e?{clear:["left"]}:{}),T=t=>{b.forEach((e,r)=>{(!t||_(G(t),r))&&(V(e||[],t=>{t&&t.cancel()}),b.delete(r))})},L=(t,e,r,n)=>{let l=b.get(t)||[],o=l.find(t=>t&&t.timeline===e);o?o.effect=new KeyframeEffect(t,r,{composite:n}):b.set(t,z(l,[t.animate(r,{timeline:e,composite:n})]))},R=(t,e,r)=>{let n=r?tD:tA;V(t,t=>{n(t.Ut,e)})},A=(t,e)=>{V(t,t=>{let[r,n]=e(t);tQ(r,n)})},D=(t,e)=>{A(t,t=>{let{Vt:r}=t;return[r,{[e?te:tr]:tJ(O(e))}]})},H=(t,e)=>{let{Lt:n}=r,l=e?n.x:n.y,i=(t,r,n)=>t2(tJ(S(t,ef(r,l,n),e,n)),e);if(g&&x)V(t,t=>{let{Ut:r,Vt:n}=t,a=e&&t1(r)&&o;L(n,e?g:x,C({transform:ed(l,a).map(e=>i(t,e,a))},a))});else{let r=ey(f);A(t,t=>{let{Vt:n,Ut:l}=t;return[n,{transform:i(t,e?r.x:r.y,e&&t1(l)&&o)}]})}},M=t=>y&&!p&&tV(t)===u,N=[],P=[],I=[],F=(t,e,r)=>{let n=k(r),l=!n||r,o=!n||!r;l&&R(P,t,e),o&&R(I,t,e)},U=t=>{let e=tB("".concat(eV," ").concat(t?ez:ej)),r=tB(eF),l=tB(eG),o={Ut:e,Mt:r,Vt:l};return j(t?P:I,o),j(N,[tU(e,r),tU(r,l),tu(tF,e),T,n(o,F,H,t)]),o},q=tu(U,!0),X=tu(U,!1);return q(),X(),[{Bt:()=>{D(P,!0),D(I)},Nt:()=>{H(P,!0),H(I)},jt:()=>{if(y){let{Lt:t}=r;if(g&&x)V(z(I,P),e=>{let{Ut:r}=e;if(M(r)){let e=(t,e,n)=>{let l=n&&t1(r)&&o;L(r,t,C({transform:ed(e-.5,l).map(t=>t2(tZ(t),n))},l),"add")};e(g,t.x,!0),e(x,t.y)}else T(r)});else{let e=ey(f),r=r=>{let{Ut:n}=r,l=M(n)&&n,i=(t,e,r)=>{let n=ef(t,e,r),l=e*n;return tZ(r?-l:l)};return[l,{transform:l?t2({x:i(e.x,t.x,t1(n)&&o),y:i(e.y,t.y)}):""}]};A(P,r),A(I,r)}}},Ft:F,qt:{J:g,Wt:P,Xt:q,Yt:tu(A,P)},Jt:{J:x,Wt:I,Xt:X,Yt:tu(A,I)}},()=>(tU(E,P[0].Ut),tU(E,I[0].Ut),tu(B,N))]},ry=(t,e,r,n)=>{let{bt:l,D:o,V:i,Rt:a,Kt:c}=e;return(e,s,d,f)=>{let{Ut:y,Mt:v,Vt:h}=e,[b,m]=td(333),[w,g]=td(),x=tu(d,[e],f),E=!!a.scrollBy,O="client".concat(f?"X":"Y"),S=f?te:tr,C=f?"left":"top",T=f?"w":"h",L=f?"x":"y",R=t=>t.propertyName.indexOf(S)>-1,k=!0;return tu(B,[eo(h,"pointermove pointerleave",n),eo(y,"pointerenter",()=>{s(eB,!0)}),eo(y,"pointerleave pointercancel",()=>{s(eB,!1)}),!i&&eo(y,"mousedown",()=>{let t=tz();(tx(t,eA)||tx(t,eE)||t===document.body)&&p(()=>{o.focus()},25)}),eo(y,"wheel",t=>{let{deltaX:e,deltaY:r,deltaMode:n}=t;E&&k&&0===n&&tV(y)===l&&a.scrollBy({left:e,top:r,behavior:"smooth"}),k=!1,s(eY,!0),b(()=>{k=!0,s(eY)}),ea(t)},{H:!1,I:!0}),eo(h,"transitionstart",t=>{if(R(t)){let t=()=>{x(),w(t)};t()}}),eo(h,"transitionend transitioncancel",t=>{R(t)&&(g(),x())}),eo(y,"mousedown",tu(eo,c,"click",ei,{A:!0,I:!0}),{I:!0}),(()=>{let e="pointerup pointerleave pointercancel lostpointercapture",n=(t,e)=>n=>{let{Lt:l}=r,o=e*n/(t4(v)[T]-t4(h)[T])*l[L];ep(a,{[L]:t+o})};return eo(v,"pointerdown",r=>{let o=t_(r.target,".".concat(eG))===h,i=o?h:v,s=t.scrollbars,{button:d,isPrimary:f,pointerType:p}=r,{pointers:y}=s;if(0===d&&f&&s[o?"dragScroll":"clickScroll"]&&(y||[]).includes(p)){let t=!o&&r.shiftKey,s=tu(ee,h),d=tu(ee,v),f=(t,e)=>(t||s())[C]-(e||d())[C],p=u(ee(a)[S])/t4(a)[T]||1,y=n(ey(a)[L]||0,1/p),b=r[O],m=s(),w=d(),g=m[S],x=f(m,w)+g/2,E=b-w[C],R=o?0:E-x,k=t=>{B(A),i.releasePointerCapture(t.pointerId)},A=[tT(l,eE,"scrollbarPressed"),eo(c,e,k),eo(c,"selectstart",t=>ea(t),{H:!1}),eo(v,e,k),eo(v,"pointermove",e=>{let r=e[O]-b;(o||t)&&y(R+r)})];if(i.setPointerCapture(r.pointerId),t)y(R);else if(!o){let t=e3("__osClickScrollPlugin");t&&j(A,t(y,f,R,g,E))}}})})(),m,g])}},rv=(t,e,r,n,l,o)=>{let i,a,c,s,u;let d=ts,f=0,p=t=>"mouse"===t.pointerType,[y,v]=td(),[h,b]=td(100),[m,w]=td(100),[g,x]=td(()=>f),[E,O]=rp(t,l,n,ry(e,l,n,t=>p(t)&&H())),{bt:S,Zt:C,kt:T}=l,{Ft:L,Bt:R,Nt:k,jt:A}=E,D=(t,e)=>{if(x(),t)L(eW);else{let t=tu(L,eW,!0);f>0&&!e?g(t):t()}},H=()=>{(c?i:s)||(D(!0),h(()=>{D(!1)}))},M=t=>{L(eK,t,!0),L(eK,t,!1)},N=t=>{p(t)&&(i=c,c&&D(!0))},P=[x,b,w,v,()=>d(),eo(S,"pointerover",N,{A:!0}),eo(S,"pointerenter",N),eo(S,"pointerleave",t=>{p(t)&&(i=!1,c&&D(!1))}),eo(S,"pointermove",t=>{p(t)&&a&&H()}),eo(C,"scroll",t=>{y(()=>{k(),H()}),o(t),A()})];return[()=>tu(B,j(P,O())),t=>{let{Et:e,Tt:l,Gt:o,Qt:i}=t,{tn:p,nn:y,sn:v}=i||{},{Ct:h,dt:b}=o||{},{N:w}=r,{T:g}=e8(),{R:x,en:E}=n,[O,S]=e("showNativeOverlaidScrollbars"),[H,N]=e("scrollbars.theme"),[P,I]=e("scrollbars.visibility"),[V,_]=e("scrollbars.autoHide"),[z,j]=e("scrollbars.autoHideSuspend"),[F]=e("scrollbars.autoHideDelay"),[G,U]=e("scrollbars.dragScroll"),[q,B]=e("scrollbars.clickScroll"),[X,K]=e("overflow"),W=E.x||E.y,Y=O&&g.x&&g.y,$=(t,e,r)=>{let n=t.includes("scroll")&&("visible"===P||"auto"===P&&"scroll"===e);return L(eU,n,r),n};if(f=F,b&&!l&&(z&&W?(M(!1),d(),m(()=>{d=eo(C,"scroll",tu(M,!0),{A:!0})})):M(!0)),S&&L("os-theme-none",Y),N&&(L(u),L(H,!0),u=H),j&&!z&&M(!0),_&&(a="move"===V,c="leave"===V,D(s="never"===V,!0)),U&&L(eJ,G),B&&L(e$,q),v||I||K){let t=$(X.x,x.x,!0),e=$(X.y,x.y,!1);L(eq,!(t&&e))}(p||y||h||l)&&(R(),k(),A(),L(eX,!E.x,!0),L(eX,!E.y,!1),L(e_,w&&!T))},{},E]},rh=t=>{let{G:e,L:r}=e8(),{elements:n}=e(),{host:l,padding:o,viewport:i,content:c}=n,s=P(t),u=s?{}:t,{elements:d}=u,{host:f,padding:p,viewport:y,content:v}=d||{},h=s?t:u.target,b=tP(h),m=tN(h,"textarea"),w=h.ownerDocument,g=w.documentElement,x=()=>w.defaultView||a,E=t=>{t&&t.focus&&t.focus()},O=tu(re,[h]),S=tu(rr,[h]),C=tu(tB,""),T=tu(O,C,i),L=tu(S,C,c),R=T(y),k=R===h,A=k&&b,D=!k&&L(v),H=A?g:R,M=m?O(C,l,f):h,N=A?H:M,I=!k&&S(C,o,p),V=!(!k&&R===D)&&D,z=[V,H,I,N].map(t=>P(t)&&!tV(t)&&t),F=t=>t&&_(z,t),G=F(H)?h:H,U={gt:h,bt:N,D:H,cn:I,wt:V,Rt:A?g:H,Zt:A?w:H,rn:b?g:G,Kt:w,St:m,kt:b,Dt:s,V:k,ln:x,yt:t=>tR(H,k?eE:eA,t),Ot:(t,e)=>tL(H,k?eE:eA,t,e)},{gt:q,bt:X,cn:K,D:W,wt:Y}=U,$=[()=>{tO(X,[eE,eC]),tO(q,eC),b&&tO(g,[eC,eE])}],J=m&&F(X),Z=m?q:tI([Y,W,K,X,q].find(t=>t&&!F(t))),Q=A?q:Y||W,tt=tu(B,$);return[U,()=>{let t=x(),e=tz(),n=t=>{tU(tV(t),tI(t)),tF(t)},l=t=>t?eo(t,"focusin focusout focus blur",t=>{ei(t),t.stopImmediatePropagation()},{I:!0,H:!1}):ts,o="tabindex",i=tg(W,o),a=l(e);return tE(X,eE,k?"viewport":"host"),tE(K,eH,""),tE(Y,eM,""),!k&&(tE(W,eA,""),tE(W,o,i||"-1"),b&&tT(g,eE,"body")),J&&(tq(q,X),j($,()=>{tq(X,q),tF(X)})),tU(Q,Z),tU(X,K),tU(K||X,!k&&W),tU(W,Y),j($,[a,()=>{let t=tz(),e=l(t);tO(K,eH),tO(Y,eM),tO(W,[eT,eL,eA]),i?tE(W,o,i):tO(W,o),F(Y)&&n(Y),F(W)&&n(W),F(K)&&n(K),E(t),e()}]),r&&!k&&(tT(W,eA,eD),j($,tu(tO,W,eA))),E(k||e!==h||t.top!==t?e:W),a(),Z=0,tt},tt]},rb=t=>{let{wt:e}=t;return t=>{let{Gt:r,an:n,Tt:l}=t,{xt:o}=r||{},{$t:i}=n;e&&(o||l)&&tQ(e,{[tr]:i&&"100%"})}},rm=(t,e)=>{let{bt:r,cn:n,D:l,V:i}=t,[a,c]=o({u:tc,o:t3()},tu(t3,r,"padding",""));return t=>{let{Et:r,Gt:o,an:s,Tt:u}=t,[d,f]=c(u),{L:p}=e8(),{ht:y,Ht:v,Ct:h}=o||{},{N:b}=s,[m,w]=r("paddingAbsolute"),g=u||v;(y||f||g)&&([d,f]=a(u));let x=!i&&(w||h||f);if(x){let t=!m||!n&&!p,r=d.r+d.l,o=d.t+d.b,i={[J]:t&&!b?-r:0,[Z]:t?-o:0,[$]:t&&b?-r:0,top:t?-d.t:0,right:t?b?-d.r:"auto":0,left:t?b?"auto":-d.l:0,[te]:t&&"calc(100% + ".concat(r,"px)")},a={[X]:t?d.t:0,[K]:t?d.r:0,[Y]:t?d.b:0,[W]:t?d.l:0};tQ(n||l,i),tQ(l,a),tv(e,{cn:d,un:!t,j:n?a:tv({},i,a)})}return{fn:x}}},rw=(t,e)=>{let r=e8(),{bt:n,cn:l,D:i,V:s,kt:u,Ot:d,ln:f}=t,{L:p}=r,y=u&&s,v=tu(c,0),h={u:ti,o:{w:0,h:0}},b=(t,e)=>{let r=a.devicePixelRatio%1!=0?1:0,n={w:v(t.w-e.w),h:v(t.h-e.h)};return{w:n.w>r?n.w:0,h:n.h>r?n.h:0}},[m,w]=o(h,tu(et,i)),[g,x]=o(h,tu(t8,i)),[E,O]=o(h),[S,C]=o(h),[T]=o({u:ta,o:{x:tn,y:tn}}),L=e3(e4);return(o,a)=>{let u,{Et:h,Gt:R,an:k,Tt:A}=o,{fn:D}=a,{ht:H,Ht:M,Ct:N,zt:P}=R||{},{q:I,W:V,X:_}=L&&L.M(t,e,k,r,h)||{},[z,j]=e2(h,r),[F,G]=h("overflow"),U=H||D||M||N||P||j,q=e9(F.x),B=e9(F.y),X=q||B,K=w(A),W=x(A),Y=O(A),$=C(A);if(j&&p&&d(eD,!z),U){X&&d(eR,!1);let[t,e]=V?V(u):[],[r,n]=K=m(A),[l,o]=W=g(A),a=t7(i);t&&t(),(o||n||j)&&e&&!z&&I&&I(e,l,r);let s=t6(f()),p={w:v(c(l.w,l.w)+r.w),h:v(c(l.h,l.h)+r.h)},h={w:v((y?s.w:a.w+v(a.w-l.w))+r.w),h:v((y?s.h:a.h+v(a.h-l.h))+r.h)};$=S(h),Y=E(b(p,h),A)}let[J,Z]=$,[te,tr]=Y,[tn,tl]=W,[to,ti]=K,ta={x:te.w>0,y:te.h>0},tc=q&&B&&(ta.x||ta.y)||q&&ta.x&&!ta.y||B&&ta.y&&!ta.x;if(D||N||P||ti||tl||Z||tr||G||j||U){let e={},r=e6(t,ta,F,e);_&&_(r,k,!!I&&I(r,tn,to),e),s?(tE(n,eT,e[Q]),tE(n,eL,e[tt])):tQ(i,e)}tL(n,eE,eR,tc),tL(l,eH,eR,tc),s||tL(i,eA,eR,X);let[ts,tu]=T(e5(t).R);return tv(e,{R:ts,Pt:{x:J.w,y:J.h},Lt:{x:te.w,y:te.h},en:ta}),{sn:tu,tn:Z,nn:tr}}},rg=t=>{let[e,r,n]=rh(t),l={cn:{t:0,r:0,b:0,l:0},un:!1,j:{[J]:0,[Z]:0,[$]:0,[X]:0,[K]:0,[Y]:0,[W]:0},Pt:{x:0,y:0},Lt:{x:0,y:0},R:{x:tn,y:tn},en:{x:!1,y:!1}},{gt:o,D:i,V:a}=e,{L:c,T:s}=e8(),u=!c&&(s.x||s.y),d=[rb(e),rm(e,l),rw(e,l)];return[r,t=>{let e={},r=u&&ey(i),n=a?tT(i,eE,ek):ts;return V(d,r=>{tv(e,r(t,e)||{})}),n(),ep(i,r),a||ep(o,0),e},l,e,n]},rx=(t,e,r,n)=>{let l=ex(e,{}),[o,i,a,c,s]=rg(t),[u,d,f]=rf(c,a,l,t=>{b({},t)}),[p,y,,v]=rv(t,e,f,a,c,n),h=t=>ty(t).some(e=>!!t[e]),b=(t,n)=>{let{_n:l,Tt:o,At:a,dn:c}=t,s=l||{},u=!!o,p={Et:ex(e,s,u),_n:s,Tt:u};if(c)return y(p),!1;let v=n||d(tv({},p,{At:a})),b=i(tv({},p,{an:f,Gt:v}));y(tv({},p,{Gt:v,Qt:b}));let m=h(v),w=h(b),g=m||w||!tb(s)||u;return g&&r(t,{Gt:v,Qt:b}),g};return[()=>{let{rn:t,D:e}=c,r=ey(t),n=[u(),o(),p()];return ep(e,r),tu(B,n)},b,()=>({vn:f,hn:a}),{pn:c,gn:v},s]},rE=(t,e,r)=>{let{nt:n}=e8(),l=P(t),o=l?t:t.target,i=ra(o);if(e&&!i){let i=!1,a=[],c={},s=t=>{let e=th(t,!0),r=e3("__osOptionsValidationPlugin");return r?r(e,!0):e},u=tv({},n(),s(e)),[d,f,p]=eh(),[y,v,h]=eh(r),b=(t,e)=>{h(t,e),p(t,e)},[m,w,g,x,E]=rx(t,u,(t,e)=>{let{_n:r,Tt:n}=t,{Gt:l,Qt:o}=e,{ht:i,Ct:a,xt:c,Ht:s,It:u,dt:d}=l,{tn:f,nn:p,sn:y}=o;b("updated",[S,{updateHints:{sizeChanged:!!i,directionChanged:!!a,heightIntrinsicChanged:!!c,overflowEdgeChanged:!!f,overflowAmountChanged:!!p,overflowStyleChanged:!!y,contentMutation:!!s,hostMutation:!!u,appear:!!d},changedOptions:r||{},force:!!n}])},t=>b("scroll",[S,t])),O=t=>{ri(o),B(a),i=!0,b("destroyed",[S,t]),f(),v()},S={options(t,e){if(t){let r=eg(u,tv(e?n():{},s(t)));tb(r)||(tv(u,r),w({_n:r}))}return tv({},u)},on:y,off:(t,e)=>{t&&e&&v(t,e)},state(){let{vn:t,hn:e}=g(),{N:r}=t,{Pt:n,Lt:l,R:o,en:a,cn:c,un:s}=e;return tv({},{overflowEdge:n,overflowAmount:l,overflowStyle:o,hasOverflow:a,padding:c,paddingAbsolute:s,directionRTL:r,destroyed:i})},elements(){let{gt:t,bt:e,cn:r,D:n,wt:l,Rt:o,Zt:i}=x.pn,{qt:a,Jt:c}=x.gn,s=t=>{let{Vt:e,Mt:r,Ut:n}=t;return{scrollbar:n,track:r,handle:e}},u=t=>{let{Wt:e,Xt:r}=t;return tv({},s(e[0]),{clone:()=>{let t=s(r());return w({dn:!0}),t}})};return tv({},{target:t,host:e,padding:r||n,viewport:n,content:l||n,scrollOffsetElement:o,scrollEventElement:i,scrollbarHorizontal:u(a),scrollbarVertical:u(c)})},update:t=>w({Tt:t,At:!0}),destroy:tu(O,!1),plugin:t=>c[ty(t)[0]]};return(j(a,[E]),ro(o,S),e1(eZ,rE,[S,d,c]),rn(x.pn.kt,!l&&t.cancel))?O(!0):(j(a,m()),b("initialized",[S]),S.update(!0)),S}return i};rE.plugin=t=>{let e=D(t),r=e?t:[t],n=r.map(t=>e1(t,rE)[0]);return e0(r),e?n:n[0]},rE.valid=t=>{let e=t&&t.elements,r=A(e)&&e();return N(r)&&!!ra(r.target)},rE.env=()=>{let{P:t,T:e,L:r,K:n,J:l,st:o,et:i,G:a,tt:c,nt:s,ot:u}=e8();return tv({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:r,rtlScrollBehavior:n,scrollTimeline:l,staticDefaultInitialization:o,staticDefaultOptions:i,getDefaultInitialization:a,setDefaultInitialization:c,getDefaultOptions:s,setDefaultOptions:u})};let rO=()=>{let t,e;let r=window,n="function"==typeof r.requestIdleCallback,l=r.requestAnimationFrame,o=r.cancelAnimationFrame,i=n?r.requestIdleCallback:l,a=n?r.cancelIdleCallback:o,c=()=>{a(t),o(e)};return[(r,o)=>{c(),t=i(n?()=>{c(),e=l(r)}:r,"object"==typeof o?o:{timeout:2233})},c]},rS=t=>{let{options:e,events:r,defer:n}=t||{},[o,i]=(0,l.useMemo)(rO,[]),a=(0,l.useRef)(null),c=(0,l.useRef)(n),s=(0,l.useRef)(e),u=(0,l.useRef)(r);return(0,l.useEffect)(()=>{c.current=n},[n]),(0,l.useEffect)(()=>{let{current:t}=a;s.current=e,rE.valid(t)&&t.options(e||{},!0)},[e]),(0,l.useEffect)(()=>{let{current:t}=a;u.current=r,rE.valid(t)&&t.on(r||{},!0)},[r]),(0,l.useEffect)(()=>()=>{var t;i(),null==(t=a.current)||t.destroy()},[]),(0,l.useMemo)(()=>[t=>{let e=a.current;if(rE.valid(e))return;let r=c.current,n=s.current||{},l=u.current||{},i=()=>a.current=rE(t,n,l);r?o(i,r):i()},()=>a.current],[])},rC=(0,l.forwardRef)((t,e)=>{let{element:r="div",options:n,events:o,defer:i,children:a,...c}=t,s=(0,l.useRef)(null),u=(0,l.useRef)(null),[d,f]=rS({options:n,events:o,defer:i});return(0,l.useEffect)(()=>{let{current:t}=s,{current:e}=u;if(t)return d("body"===r?{target:t,cancel:{body:null}}:{target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=f())?void 0:t.destroy()}},[d,r]),(0,l.useImperativeHandle)(e,()=>({osInstance:f,getElement:()=>s.current}),[]),l.createElement(r,{"data-overlayscrollbars-initialize":"",ref:s,...c},"body"===r?a:l.createElement("div",{"data-overlayscrollbars-contents":"",ref:u},a))})}}]);