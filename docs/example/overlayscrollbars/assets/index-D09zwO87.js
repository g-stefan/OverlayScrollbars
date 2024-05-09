(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();/*!
 * OverlayScrollbars
 * Version: 2.8.0
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const vt=(t,e)=>{const{o:n,i:o,u:s}=t;let c=n,r;const l=(d,i)=>{const v=c,b=d,h=i||(o?!o(v,b):v!==b);return(h||s)&&(c=b,r=v),[c,h,r]};return[e?d=>l(e(c,r),d):l,d=>[c,!!d,r]]},oo=typeof window<"u"&&typeof document<"u",pt=oo?window:{},we=Math.max,Xo=Math.min,Ze=Math.round,Ce=Math.abs,Rn=Math.sign,so=pt.cancelAnimationFrame,co=pt.requestAnimationFrame,Ee=pt.setTimeout,Ge=pt.clearTimeout,Re=t=>typeof pt[t]<"u"?pt[t]:void 0,Yo=Re("MutationObserver"),Dn=Re("IntersectionObserver"),$e=Re("ResizeObserver"),Je=Re("ScrollTimeline"),ro=oo&&Node.ELEMENT_NODE,{toString:Zo,hasOwnProperty:Ue}=Object.prototype,Go=/^\[object (.+)\]$/,ue=t=>t===void 0,De=t=>t===null,Jo=t=>ue(t)||De(t)?`${t}`:Zo.call(t).replace(Go,"$1").toLowerCase(),At=t=>typeof t=="number",Ie=t=>typeof t=="string",lo=t=>typeof t=="boolean",bt=t=>typeof t=="function",Tt=t=>Array.isArray(t),re=t=>typeof t=="object"&&!Tt(t)&&!De(t),ke=t=>{const e=!!t&&t.length,n=At(e)&&e>-1&&e%1==0;return Tt(t)||!bt(t)&&n?e>0&&re(t)?e-1 in t:!0:!1},Ae=t=>{if(!t||!re(t)||Jo(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=Ue.call(t,n),r=s&&Ue.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return ue(e)||Ue.call(t,e)},Te=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===ro:!1},Me=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===ro:!1};function Y(t,e){if(ke(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&Y(Object.keys(t),n=>e(t[n],n,t));return t}const _e=(t,e)=>t.indexOf(e)>=0,Ht=(t,e)=>t.concat(e),ot=(t,e,n)=>(!Ie(e)&&ke(e)?Array.prototype.push.apply(t,e):t.push(e),t),Mt=t=>Array.from(t||[]),io=t=>Tt(t)?t:[t],Qe=t=>!!t&&!t.length,In=t=>Mt(new Set(t)),St=(t,e,n)=>{Y(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},ao="paddingTop",uo="paddingRight",fo="paddingLeft",po="paddingBottom",yo="marginLeft",mo="marginRight",go="marginBottom",Qo="overflowX",ts="overflowY",Wt="width",Xt="height",Rt="visible",_t="hidden",Yt="scroll",es=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},ze=(t,e,n,o)=>{if(t&&e){let s=!0;return Y(n,c=>{const r=t[c],l=e[c];r!==l&&(s=!1)}),s}return!1},vo=(t,e)=>ze(t,e,["w","h"]),xe=(t,e)=>ze(t,e,["x","y"]),ns=(t,e)=>ze(t,e,["t","r","b","l"]),Dt=()=>{},D=(t,...e)=>t.bind(0,...e),zt=t=>{let e;const n=t?Ee:co,o=t?Ge:so;return[s=>{o(e),e=n(s,bt(t)?t():t)},()=>o(e)]},ho=(t,e)=>{let n,o,s,c=Dt;const{_:r,p:l,v:a}=e||{},f=function(h){c(),Ge(n),n=o=void 0,c=Dt,t.apply(this,h)},d=b=>a&&o?a(o,b):b,i=()=>{c!==Dt&&f(d(s)||s)},v=function(){const h=Mt(arguments),O=bt(r)?r():r;if(At(O)&&O>=0){const H=bt(l)?l():l,p=At(H)&&H>=0,B=O>0?Ee:co,z=O>0?Ge:so,L=d(h)||h,X=f.bind(0,L);c();const Z=B(X,O);c=()=>z(Z),p&&!n&&(n=Ee(i,H)),o=s=L}else f(h)};return v.S=i,v},bo=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Lt=t=>t?Object.keys(t):[],W=(t,e,n,o,s,c,r)=>{const l=[e,n,o,s,c,r];return(typeof t!="object"||De(t))&&!bt(t)&&(t={}),Y(l,a=>{Y(a,(f,d)=>{const i=a[d];if(t===i)return!0;const v=Tt(i);if(i&&Ae(i)){const b=t[d];let h=b;v&&!Tt(b)?h=[]:!v&&!Ae(b)&&(h={}),t[d]=W(h,i)}else t[d]=v?i.slice():i})}),t},So=(t,e)=>Y(W({},t),(n,o,s)=>{n===void 0?delete s[o]:n&&Ae(n)&&(s[o]=So(n))}),vn=t=>{for(const e in t)return!1;return!0},tn=(t,e,n)=>we(t,Xo(e,n)),Nt=t=>Mt(new Set((Tt(t)?t:(t||"").split(" ")).filter(e=>e))),Be=(t,e)=>t&&t.getAttribute(e),kn=(t,e)=>t&&t.hasAttribute(e),Et=(t,e,n)=>{Y(Nt(e),o=>{t&&t.setAttribute(o,String(n||""))})},wt=(t,e)=>{Y(Nt(e),n=>t&&t.removeAttribute(n))},Ne=(t,e)=>{const n=Nt(Be(t,e)),o=D(Et,t,e),s=(c,r)=>{const l=new Set(n);return Y(Nt(c),a=>{l[r](a)}),Mt(l).join(" ")};return{m:c=>o(s(c,"delete")),O:c=>o(s(c,"add")),$:c=>{const r=Nt(c);return r.reduce((l,a)=>l&&n.includes(a),r.length>0)}}},wo=(t,e,n)=>(Ne(t,e).m(n),D(hn,t,e,n)),hn=(t,e,n)=>(Ne(t,e).O(n),D(wo,t,e,n)),en=(t,e,n,o)=>(o?hn:wo)(t,e,n),os=(t,e,n)=>Ne(t,e).$(n),xo=t=>Ne(t,"class"),Oo=(t,e)=>{xo(t).m(e)},bn=(t,e)=>(xo(t).O(e),D(Oo,t,e)),Co=(t,e)=>{const n=[],o=e?Me(e)&&e:document;return o?ot(n,o.querySelectorAll(t)):n},ss=(t,e)=>{const n=e?Me(e)&&e:document;return n?n.querySelector(t):null},He=(t,e)=>Me(t)?t.matches(e):!1,Eo=t=>He(t,"body"),nn=t=>t?Mt(t.childNodes):[],Zt=t=>t&&t.parentElement,qt=(t,e)=>Me(t)&&t.closest(e),on=t=>document.activeElement,cs=(t,e,n)=>{const o=qt(t,e),s=t&&ss(n,o),c=qt(s,e)===o;return o&&s?o===t||s===t||c&&qt(qt(t,n),e)!==o:!1},It=t=>{if(ke(t))Y(Mt(t),e=>It(e));else if(t){const e=Zt(t);e&&e.removeChild(t)}},$o=(t,e,n)=>{if(n&&t){let o=e,s;return ke(n)?(s=document.createDocumentFragment(),Y(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null),()=>It(n)}return Dt},mt=(t,e)=>$o(t,null,e),Mn=(t,e)=>$o(Zt(t),t&&t.nextSibling,e),jt=t=>{const e=document.createElement("div");return Et(e,"class",t),e},Ao=t=>{const e=jt();return e.innerHTML=t.trim(),Y(nn(e),n=>It(n))},rs=/^--/,_n=(t,e)=>t.getPropertyValue(e)||t[e]||"",Sn=t=>{const e=t||0;return isFinite(e)?e:0},ve=t=>Sn(parseFloat(t||"")),zn=t=>`${(Sn(t)*100).toFixed(3)}%`,sn=t=>`${Sn(t)}px`;function le(t,e){t&&e&&Y(e,(n,o)=>{try{const s=t.style,c=At(n)?sn(n):(n||"")+"";rs.test(o)?s.setProperty(o,c):s[o]=c}catch{}})}function Ft(t,e,n){const o=Ie(e);let s=o?"":{};if(t){const c=pt.getComputedStyle(t,n)||t.style;s=o?_n(c,e):Mt(e).reduce((r,l)=>(r[l]=_n(c,l),r),s)}return s}const Bn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,l=`${o}bottom${s}`,a=`${o}left${s}`,f=Ft(t,[c,r,l,a]);return{t:ve(f[c]),r:ve(f[r]),b:ve(f[l]),l:ve(f[a])}},We=(t,e)=>`translate${re(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,ls=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),is={w:0,h:0},Fe=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:is,as=t=>Fe("inner",t||pt),oe=D(Fe,"offset"),To=D(Fe,"client"),Le=D(Fe,"scroll"),wn=t=>{const e=parseFloat(Ft(t,Wt))||0,n=parseFloat(Ft(t,Xt))||0;return{w:e-Ze(e),h:n-Ze(n)}},se=t=>t.getBoundingClientRect(),us=t=>!!t&&ls(t),cn=t=>!!(t&&(t[Xt]||t[Wt])),Ho=(t,e)=>{const n=cn(t);return!cn(e)&&n},Nn=(t,e,n,o)=>{Y(Nt(e),s=>{t&&t.removeEventListener(s,n,o)})},et=(t,e,n,o)=>{var s;const c=(s=o&&o.C)!=null?s:!0,r=o&&o.H||!1,l=o&&o.A||!1,a={passive:c,capture:r};return D(St,Nt(e).map(f=>{const d=l?i=>{Nn(t,f,d,r),n&&n(i)}:n;return t&&t.addEventListener(f,d,a),D(Nn,t,f,d,r)}))},xn=t=>t.stopPropagation(),rn=t=>t.preventDefault(),ds=t=>xn(t)||rn(t),$t=(t,e)=>{const{x:n,y:o}=At(e)?{x:e,y:e}:e||{};At(n)&&(t.scrollLeft=n),At(o)&&(t.scrollTop=o)},ht=t=>({x:t.scrollLeft,y:t.scrollTop}),Lo=()=>({I:{x:0,y:0},T:{x:0,y:0}}),fs=(t,e)=>{const{I:n,T:o}=t,{w:s,h:c}=e,r=(i,v,b)=>{let h=Rn(i)*b,O=Rn(v)*b;if(h===O){const C=Ce(i),H=Ce(v);O=C>H?0:O,h=C<H?0:h}return[h+0,O+0]},[l,a]=r(n.x,o.x,s),[f,d]=r(n.y,o.y,c);return{I:{x:l,y:f},T:{x:a,y:d}}},Fn=({I:t,T:e})=>{const n=(o,s)=>o===0&&o<=s;return{x:n(t.x,e.x),y:n(t.y,e.y)}},Vn=({I:t,T:e},n)=>{const o=(s,c,r)=>tn(0,1,(s-r)/(s-c)||0);return{x:o(t.x,e.x,n.x),y:o(t.y,e.y,n.y)}},qn=(t,e)=>{Y(io(e),t)},ln=t=>{const e=new Map,n=(c,r)=>{if(c){const l=e.get(c);qn(a=>{l&&l[a?"delete":"clear"](a)},r)}else e.forEach(l=>{l.clear()}),e.clear()},o=(c,r)=>{if(Ie(c)){const f=e.get(c)||new Set;return e.set(c,f),qn(d=>{bt(d)&&f.add(d)},r),D(n,c,r)}lo(r)&&r&&n();const l=Lt(c),a=[];return Y(l,f=>{const d=c[f];d&&ot(a,o(f,d))}),D(St,a)},s=(c,r)=>{Y(Mt(e.get(c)),l=>{r&&!Qe(r)?l.apply(0,r):l()})};return o(t||{}),[o,n,s]},Kn=t=>JSON.stringify(t,(e,n)=>{if(bt(n))throw 0;return n}),jn=(t,e)=>t?`${e}`.split(".").reduce((n,o)=>n&&bo(n,o)?n[o]:void 0,t):void 0,ps={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Po=(t,e)=>{const n={},o=Ht(Lt(e),Lt(t));return Y(o,s=>{const c=t[s],r=e[s];if(re(c)&&re(r))W(n[s]={},Po(c,r)),vn(n[s])&&delete n[s];else if(bo(e,s)&&r!==c){let l=!0;if(Tt(c)||Tt(r))try{Kn(c)===Kn(r)&&(l=!1)}catch{}l&&(n[s]=r)}}),n},Un=(t,e,n)=>o=>[jn(t,o),n||jn(e,o)!==void 0],Gt="data-overlayscrollbars",Oe="os-environment",he=`${Oe}-scrollbar-hidden`,Xe=`${Gt}-initialize`,Wn="noClipping",Xn=`${Gt}-body`,Ut=Gt,ys="host",Pt=`${Gt}-viewport`,ms=Qo,gs=ts,vs="arrange",On="measuring",Ro="scrollbarHidden",hs="scrollbarPressed",bs="noContent",an=`${Gt}-padding`,Yn=`${Gt}-content`,Cn="os-size-observer",Ss=`${Cn}-appear`,ws=`${Cn}-listener`,xs="os-trinsic-observer",Os="os-theme-none",gt="os-scrollbar",Cs=`${gt}-rtl`,Es=`${gt}-horizontal`,$s=`${gt}-vertical`,Do=`${gt}-track`,En=`${gt}-handle`,As=`${gt}-visible`,Ts=`${gt}-cornerless`,Zn=`${gt}-interaction`,Gn=`${gt}-unusable`,un=`${gt}-auto-hide`,Jn=`${un}-hidden`,Qn=`${gt}-wheel`,Hs=`${Do}-interactive`,Ls=`${En}-interactive`;let Ye;const Ps=()=>{const t=(p,B,z)=>{mt(document.body,p),mt(document.body,p);const J=To(p),L=oe(p),X=wn(B);return z&&It(p),{x:L.h-J.h+X.h,y:L.w-J.w+X.w}},e=p=>{let B=!1;const z=bn(p,he);try{B=Ft(p,"scrollbar-width")==="none"||Ft(p,"display","::-webkit-scrollbar")==="none"}catch{}return z(),B},n=`.${Oe}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${Oe} div{width:200%;height:200%;margin:10px 0}.${he}{scrollbar-width:none!important}.${he}::-webkit-scrollbar,.${he}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`,s=Ao(`<div class="${Oe}"><div></div><style>${n}</style></div>`)[0],c=s.firstChild,[r,,l]=ln(),[a,f]=vt({o:t(s,c),i:xe},D(t,s,c,!0)),[d]=f(),i=e(s),v={x:d.x===0,y:d.y===0},b={elements:{host:null,padding:!i,viewport:p=>i&&Eo(p)&&p,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},h=W({},ps),O=D(W,{},h),C=D(W,{},b),H={D:d,k:v,R:i,M:!!Je,V:D(r,"r"),L:C,P:p=>W(b,p)&&C(),U:O,N:p=>W(h,p)&&O(),j:W({},b),q:W({},h)};if(wt(s,"style"),It(s),et(pt,"resize",()=>{l("r",[])}),bt(pt.matchMedia)&&!i&&(!v.x||!v.y)){const p=B=>{const z=pt.matchMedia(`(resolution: ${pt.devicePixelRatio}dppx)`);et(z,"change",()=>{B(),p(B)},{A:!0})};p(()=>{const[B,z]=a();W(H.D,B),l("r",[z])})}return H},xt=()=>(Ye||(Ye=Ps()),Ye),Io=(t,e)=>bt(e)?e.apply(0,t):e,Rs=(t,e,n,o)=>{const s=ue(o)?n:o;return Io(t,s)||e.apply(0,t)},ko=(t,e,n,o)=>{const s=ue(o)?n:o,c=Io(t,s);return!!c&&(Te(c)?c:e.apply(0,t))},Ds=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{k:s,R:c,L:r}=xt(),{nativeScrollbarsOverlaid:l,body:a}=r().cancel,f=n??l,d=ue(o)?a:o,i=(s.x||s.y)&&f,v=t&&(De(d)?!c:d);return!!i||!!v},$n=new WeakMap,Is=(t,e)=>{$n.set(t,e)},ks=t=>{$n.delete(t)},Mo=t=>$n.get(t),Ms=(t,e,n)=>{let o=!1;const s=n?new WeakMap:!1,c=()=>{o=!0},r=l=>{if(s&&n){const a=n.map(f=>{const[d,i]=f||[];return[i&&d?(l||Co)(d,t):[],i]});Y(a,f=>Y(f[0],d=>{const i=f[1],v=s.get(d)||[];if(t.contains(d)&&i){const h=et(d,i,O=>{o?(h(),s.delete(d)):e(O)});s.set(d,ot(v,h))}else St(v),s.delete(d)}))}};return r(),[c,r]},to=(t,e,n,o)=>{let s=!1;const{F:c,B:r,X:l,Y:a,W:f,J:d}=o||{},i=ho(()=>s&&n(!0),{_:33,p:99}),[v,b]=Ms(t,i,l),h=c||[],O=r||[],C=Ht(h,O),H=(B,z)=>{if(!Qe(z)){const J=f||Dt,L=d||Dt,X=[],Z=[];let N=!1,x=!1;if(Y(z,S=>{const{attributeName:M,target:m,type:j,oldValue:R,addedNodes:V,removedNodes:U}=S,F=j==="attributes",k=j==="childList",g=t===m,E=F&&M,q=E&&Be(m,M||"")||null,K=E&&R!==q,ct=_e(O,M)&&K;if(e&&(k||!g)){const w=F&&K,I=w&&a&&He(m,a),A=(I?!J(m,M,R,q):!F||w)&&!L(S,!!I,t,o);Y(V,u=>ot(X,u)),Y(U,u=>ot(X,u)),x=x||A}!e&&g&&K&&!J(m,M,R,q)&&(ot(Z,M),N=N||ct)}),b(S=>In(X).reduce((M,m)=>(ot(M,Co(S,m)),He(m,S)?ot(M,m):M),[])),e)return!B&&x&&n(!1),[!1];if(!Qe(Z)||N){const S=[In(Z),N];return!B&&n.apply(0,S),S}}},p=new Yo(D(H,!1));return[()=>(p.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:C,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(v(),p.disconnect(),s=!1)}),()=>{if(s)return i.S(),H(!0,p.takeRecords())}]},_o={},zo={},_s=t=>{Y(t,e=>Y(e,(n,o)=>{_o[o]=e[o]}))},Bo=(t,e,n)=>Lt(t).map(o=>{const{static:s,instance:c}=t[o],[r,l,a]=n||[],f=n?c:s;if(f){const d=n?f(r,l,e):f(e);return(a||zo)[o]=d}}),de=t=>zo[t],zs="__osOptionsValidationPlugin",Bs="__osSizeObserverPlugin",Ns=(t,e)=>{const{k:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},Pe=t=>t.indexOf(Rt)===0,Fs=(t,e)=>{const n=(s,c,r,l)=>{const a=s===Rt?_t:s.replace(`${Rt}-`,""),f=Pe(s),d=Pe(r);return!c&&!l?_t:f&&d?Rt:f?c&&l?a:c?Rt:_t:c?a:d&&l?Rt:_t},o={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{K:o,G:{x:o.x===Yt,y:o.y===Yt}}},No="__osScrollbarsHidingPlugin",Vs="__osClickScrollPlugin",Fo=(t,e,n)=>{const{dt:o}=n||{},s=de(Bs),[c]=vt({o:!1,u:!0});return()=>{const r=[],a=Ao(`<div class="${Cn}"><div class="${ws}"></div></div>`)[0],f=a.firstChild,d=i=>{const v=i instanceof ResizeObserverEntry;let b=!1,h=!1;if(v){const[O,,C]=c(i.contentRect),H=cn(O);h=Ho(O,C),b=!h&&!H}else h=i===!0;b||e({_t:!0,dt:h})};if($e){const i=new $e(v=>d(v.pop()));i.observe(f),ot(r,()=>{i.disconnect()})}else if(s){const[i,v]=s(f,d,o);ot(r,Ht([bn(a,Ss),et(a,"animationstart",i)],v))}else return Dt;return D(St,ot(r,mt(t,a)))}},qs=(t,e)=>{let n;const o=a=>a.h===0||a.isIntersecting||a.intersectionRatio>0,s=jt(xs),[c]=vt({o:!1}),r=(a,f)=>{if(a){const d=c(o(a)),[,i]=d;return i&&!f&&e(d)&&[d]}},l=(a,f)=>r(f.pop(),a);return[()=>{const a=[];if(Dn)n=new Dn(D(l,!1),{root:t}),n.observe(s),ot(a,()=>{n.disconnect()});else{const f=()=>{const d=oe(s);r(d)};ot(a,Fo(s,f)()),f()}return D(St,ot(a,mt(t,s)))},()=>n&&l(!0,n.takeRecords())]},Ks=(t,e,n,o)=>{let s,c,r,l,a,f;const{R:d}=xt(),i=`[${Ut}]`,v=`[${Pt}]`,b=["tabindex"],h=["wrap","cols","rows"],O=["id","class","style","open"],{ft:C,vt:H,nt:p,ht:B,gt:z,bt:J,tt:L,wt:X,yt:Z}=t,N=u=>Ft(u,"direction")==="rtl",x={St:!1,et:N(C)},S=xt(),M=de(No),[m]=vt({i:vo,o:{w:0,h:0}},()=>{const u=M&&M.Z(t,e,x,S,n).it,y=!L&&X(vs),P=y&&ht(B),T=Z(On,!0),_=y&&u&&u()[0],tt=Le(z),lt=Le(p),it=wn(p);return _&&_(),$t(B,P),T(),{w:lt.w+tt.w+it.w,h:lt.h+tt.h+it.h}}),j=J?h:Ht(O,h),R=ho(o,{_:()=>s,p:()=>c,v(u,y){const[P]=u,[T]=y;return[Ht(Lt(P),Lt(T)).reduce((_,tt)=>(_[tt]=P[tt]||T[tt],_),{})]}}),V=u=>{const y=N(C);W(u,{Ot:f!==y}),W(x,{et:y}),f=y},U=u=>{Y(u||b,y=>{if(_e(b,y)){const P=Be(H,y);Ie(P)?Et(p,y,P):wt(p,y)}})},F=(u,y)=>{const[P,T]=u,_={$t:T};return W(x,{St:P}),!y&&o(_),_},k=({_t:u,dt:y})=>{const T=!(u&&!y)&&d?R:o,_={_t:u||y,dt:y};V(_),T(_)},g=(u,y)=>{const[,P]=m(),T={Ct:P};return V(T),P&&!y&&(u?o:R)(T),T},E=(u,y,P)=>{const T={xt:y};return V(T),y&&!P?R(T):L||U(u),T},{V:q}=S,[K,ct]=z?qs(H,F):[],w=!L&&Fo(H,k,{dt:!0}),[I,$]=to(H,!1,E,{B:O,F:Ht(O,b)}),A=L&&$e&&new $e(u=>{const y=u[u.length-1].contentRect;k({_t:!0,dt:Ho(y,a)}),a=y});return[()=>{U(),A&&A.observe(H);const u=w&&w(),y=K&&K(),P=I(),T=q(_=>{const[,tt]=m();R({Ht:_,Ct:tt})});return()=>{A&&A.disconnect(),u&&u(),y&&y(),l&&l(),P(),T()}},({Et:u,zt:y,At:P})=>{const T={},[_]=u("update.ignoreMutation"),[tt,lt]=u("update.attributes"),[it,G]=u("update.elementEvents"),[st,yt]=u("update.debounce"),ut=G||lt,at=y||P,dt=rt=>bt(_)&&_(rt);if(ut){r&&r(),l&&l();const[rt,nt]=to(z||p,!0,g,{F:Ht(j,tt||[]),X:it,Y:i,J:(Q,ft)=>{const{target:Ot,attributeName:Jt}=Q;return(!ft&&Jt&&!L?cs(Ot,i,v):!1)||!!qt(Ot,`.${gt}`)||!!dt(Q)}});l=rt(),r=nt}if(yt)if(R.S(),Tt(st)){const rt=st[0],nt=st[1];s=At(rt)&&rt,c=At(nt)&&nt}else At(st)?(s=st,c=!1):(s=!1,c=!1);if(at){const rt=$(),nt=ct&&ct(),Q=r&&r();rt&&W(T,E(rt[0],rt[1],at)),nt&&W(T,F(nt[0],at)),Q&&W(T,g(Q[0],at))}return V(T),T},x]},js=(t,e,n,o)=>{const{L:s}=xt(),{scrollbars:c}=s(),{slot:r}=c,{ft:l,vt:a,nt:f,It:d,ht:i,Tt:v,tt:b}=e,{scrollbars:h}=d?{}:t,{slot:O}=h||{},C=new Map,H=w=>Je&&new Je({source:i,axis:w}),p={x:H("x"),y:H("y")},B=ko([l,a,f],()=>b&&v?l:a,r,O),z=(w,I)=>{if(I){const T=w?Wt:Xt,{Dt:_,kt:tt}=I,lt=se(tt)[T],it=se(_)[T];return tn(0,1,lt/it||0)}const $=w?"x":"y",{Rt:A,Mt:u}=n,y=u[$],P=A[$];return tn(0,1,y/(y+P)||0)},J=(w,I,$)=>{const A=z($,w);return 1/A*(1-A)*I},L=w=>W(w,{clear:["left"]}),X=w=>{C.forEach((I,$)=>{(w?_e(io(w),$):!0)&&(Y(I||[],u=>{u&&u.cancel()}),C.delete($))})},Z=(w,I,$,A)=>{const u=C.get(w)||[],y=u.find(P=>P&&P.timeline===I);y?y.effect=new KeyframeEffect(w,$,{composite:A}):C.set(w,Ht(u,[w.animate($,{timeline:I,composite:A})]))},N=(w,I,$)=>{const A=$?bn:Oo;Y(w,u=>{A(u.Vt,I)})},x=(w,I)=>{Y(w,$=>{const[A,u]=I($);le(A,u)})},S=(w,I)=>{x(w,$=>{const{kt:A}=$;return[A,{[I?Wt:Xt]:zn(z(I))}]})},M=(w,I)=>{const{Lt:$}=n,A=I?"x":"y",u=p[A],y=Fn($)[A],P=(T,_)=>We(zn(J(T,y?_:1-_,I)),I);u?Y(w,T=>{const{kt:_}=T;Z(_,u,L({transform:[0,1].map(tt=>P(T,tt))}))}):x(w,T=>[T.kt,{transform:P(T,Vn($,ht(i))[A])}])},m=w=>b&&!v&&Zt(w)===f,j=[],R=[],V=[],U=(w,I,$)=>{const A=lo($),u=A?$:!0,y=A?!$:!0;u&&N(R,w,I),y&&N(V,w,I)},F=()=>{S(R,!0),S(V)},k=()=>{M(R,!0),M(V)},g=()=>{if(b){const{Rt:w,Lt:I}=n,$=Fn(I),A=.5;if(p.x&&p.y)Y(Ht(V,R),({Vt:u})=>{if(m(u)){const y=P=>Z(u,p[P],L({transform:[0,$[P]?1:-1].map(T=>We(sn(T*(w[P]-A)),P==="x"))}),"add");y("x"),y("y")}else X(u)});else{const u=Vn(I,ht(i)),y=P=>{const{Vt:T}=P,_=m(T)&&T,tt=(lt,it,G)=>{const st=it*lt;return sn(G?st:-st)};return[_,_&&{transform:We({x:tt(u.x,w.x,$.x),y:tt(u.y,w.y,$.y)})}]};x(R,y),x(V,y)}}},E=w=>{const $=jt(`${gt} ${w?Es:$s}`),A=jt(Do),u=jt(En),y={Vt:$,Dt:A,kt:u};return ot(w?R:V,y),ot(j,[mt($,A),mt(A,u),D(It,$),X,o(y,U,M,w)]),y},q=D(E,!0),K=D(E,!1),ct=()=>(mt(B,R[0].Vt),mt(B,V[0].Vt),D(St,j));return q(),K(),[{Pt:F,Ut:k,Nt:g,jt:U,qt:{M:p.x,Ft:R,Bt:q,Xt:D(x,R)},Yt:{M:p.y,Ft:V,Bt:K,Xt:D(x,V)}},ct]},Us=(t,e,n,o)=>(s,c,r,l)=>{const{vt:a,nt:f,tt:d,ht:i,Wt:v,yt:b}=e,{Vt:h,Dt:O,kt:C}=s,[H,p]=zt(333),[B,z]=zt(444),[J,L]=zt(),X=D(r,[s],l),Z=m=>{bt(i.scrollBy)&&i.scrollBy({behavior:"smooth",left:m.x,top:m.y})},N=l?Wt:Xt,x=()=>{const m="pointerup pointercancel lostpointercapture",j=`client${l?"X":"Y"}`,R=l?"left":"top",V=l?"w":"h",U=l?"x":"y",F=(k,g)=>E=>{const{Rt:q}=n,K=oe(O)[V]-oe(C)[V],w=g*E/K*q[U];$t(i,{[U]:k+w})};return et(O,"pointerdown",k=>{const g=qt(k.target,`.${En}`)===C,E=g?C:O,q=t.scrollbars,{button:K,isPrimary:ct,pointerType:w}=k,{pointers:I}=q;if(K===0&&ct&&q[g?"dragScroll":"clickScroll"]&&(I||[]).includes(w)){z();const A=!g&&k.shiftKey,u=D(se,C),y=D(se,O),P=(Q,ft)=>(Q||u())[R]-(ft||y())[R],T=Ze(se(i)[N])/oe(i)[V]||1,_=F(ht(i)[U],1/T),tt=k[j],lt=u(),it=y(),G=lt[N],st=P(lt,it)+G/2,yt=tt-it[R],ut=g?0:yt-st,at=Q=>{St(nt),E.releasePointerCapture(Q.pointerId)},dt=()=>b(hs,!0),rt=dt(),nt=[()=>{const Q=ht(i);rt();const ft=ht(i),Ot={x:ft.x-Q.x,y:ft.y-Q.y};(Ce(Ot.x)>3||Ce(Ot.y)>3)&&(dt(),$t(i,Q),Z(Ot),B(rt))},et(v,m,at),et(v,"selectstart",Q=>rn(Q),{C:!1}),et(O,m,at),et(O,"pointermove",Q=>{const ft=Q[j]-tt;(g||A)&&_(ut+ft)})];if(E.setPointerCapture(k.pointerId),A)_(ut);else if(!g){const Q=de(Vs);Q&&ot(nt,Q(_,P,ut,G,yt))}}})};let S=!0;const M=m=>m.propertyName.indexOf(N)>-1;return D(St,[et(C,"pointermove pointerleave",o),et(h,"pointerenter",()=>{c(Zn,!0)}),et(h,"pointerleave pointercancel",()=>{c(Zn,!1)}),!d&&et(h,"mousedown",()=>{const m=on();(kn(m,Pt)||kn(m,Ut)||m===document.body)&&Ee(()=>{f.focus({preventScroll:!0})},25)}),et(h,"wheel",m=>{const{deltaX:j,deltaY:R,deltaMode:V}=m;S&&V===0&&Zt(h)===a&&Z({x:j,y:R}),S=!1,c(Qn,!0),H(()=>{S=!0,c(Qn)}),rn(m)},{C:!1,H:!0}),et(C,"transitionstart",m=>{if(M(m)){const j=()=>{X(),J(j)};j()}}),et(C,"transitionend transitioncancel",m=>{M(m)&&(L(),X())}),et(h,"pointerdown",D(et,v,"click",ds,{A:!0,H:!0,C:!1}),{H:!0}),x(),p,z,L])},Ws=(t,e,n,o,s,c)=>{let r,l,a,f,d,i=Dt,v=0;const b=g=>g.pointerType==="mouse",[h,O]=zt(),[C,H]=zt(100),[p,B]=zt(100),[z,J]=zt(()=>v),[L,X]=js(t,s,o,Us(e,s,o,g=>b(g)&&V())),{vt:Z,Jt:N,Tt:x}=s,{jt:S,Pt:M,Ut:m,Nt:j}=L,R=(g,E)=>{if(J(),g)S(Jn);else{const q=D(S,Jn,!0);v>0&&!E?z(q):q()}},V=()=>{(a?!r:!f)&&(R(!0),C(()=>{R(!1)}))},U=g=>{S(un,g,!0),S(un,g,!1)},F=g=>{b(g)&&(r=a,a&&R(!0))},k=[J,H,B,O,()=>i(),et(Z,"pointerover",F,{A:!0}),et(Z,"pointerenter",F),et(Z,"pointerleave",g=>{b(g)&&(r=!1,a&&R(!1))}),et(Z,"pointermove",g=>{b(g)&&l&&V()}),et(N,"scroll",g=>{h(()=>{m(),V()}),c(g),j()})];return[()=>D(St,ot(k,X())),({Et:g,At:E,Kt:q,Gt:K})=>{const{Qt:ct,Zt:w,tn:I,nn:$}=K||{},{Ot:A,dt:u}=q||{},{et:y}=n,{k:P}=xt(),{K:T,sn:_}=o,[tt,lt]=g("showNativeOverlaidScrollbars"),[it,G]=g("scrollbars.theme"),[st,yt]=g("scrollbars.visibility"),[ut,at]=g("scrollbars.autoHide"),[dt,rt]=g("scrollbars.autoHideSuspend"),[nt]=g("scrollbars.autoHideDelay"),[Q,ft]=g("scrollbars.dragScroll"),[Ot,Jt]=g("scrollbars.clickScroll"),[Qt,Ve]=g("overflow"),Ct=u&&!E,fe=_.x||_.y,qe=ct||w||$||A||E,Vt=I||yt||Ve,Ke=tt&&P.x&&P.y,pe=(te,ee,ye)=>{const me=te.includes(Yt)&&(st===Rt||st==="auto"&&ee===Yt);return S(As,me,ye),me};if(v=nt,Ct&&(dt&&fe?(U(!1),i(),p(()=>{i=et(N,"scroll",D(U,!0),{A:!0})})):U(!0)),lt&&S(Os,Ke),G&&(S(d),S(it,!0),d=it),rt&&!dt&&U(!0),at&&(l=ut==="move",a=ut==="leave",f=ut==="never",R(f,!0)),ft&&S(Ls,Q),Jt&&S(Hs,Ot),Vt){const te=pe(Qt.x,T.x,!0),ee=pe(Qt.y,T.y,!1);S(Ts,!(te&&ee))}qe&&(M(),m(),j(),S(Gn,!_.x,!0),S(Gn,!_.y,!1),S(Cs,y&&!x))},{},L]},Xs=t=>{const e=xt(),{L:n,R:o}=e,{elements:s}=n(),{host:c,padding:r,viewport:l,content:a}=s,f=Te(t),d=f?{}:t,{elements:i}=d,{host:v,padding:b,viewport:h,content:O}=i||{},C=f?t:d.target,H=Eo(C),p=He(C,"textarea"),B=C.ownerDocument,z=B.documentElement,J=()=>B.defaultView||pt,L=G=>{G&&G.focus&&G.focus({preventScroll:!0})},X=D(Rs,[C]),Z=D(ko,[C]),N=D(jt,""),x=D(X,N,l),S=D(Z,N,a),M=x(h),m=M===C,j=m&&H,R=!m&&S(O),V=!m&&M===R,U=j?z:M,F=p?X(N,c,v):C,k=j?U:F,g=!m&&Z(N,r,b),E=!V&&R,q=[E,U,g,k].map(G=>Te(G)&&!Zt(G)&&G),K=G=>G&&_e(q,G),ct=K(U)?C:U,w={ft:C,vt:k,nt:U,en:g,gt:E,ht:j?z:U,Jt:j?B:U,cn:H?z:ct,Wt:B,bt:p,Tt:H,It:f,tt:m,rn:J,wt:G=>os(U,Pt,G),yt:(G,st)=>en(U,Pt,G,st)},{ft:I,vt:$,en:A,nt:u,gt:y}=w,P=[()=>{wt($,[Ut,Xe]),wt(I,Xe),H&&wt(z,[Xe,Ut])}],T=p&&K($);let _=p?I:nn([y,u,A,$,I].find(G=>G&&!K(G)));const tt=j?I:y||u,lt=D(St,P);return[w,()=>{const G=J(),st=on(),yt=nt=>{mt(Zt(nt),nn(nt)),It(nt)},ut=nt=>et(nt,"focusin focusout focus blur",xn,{H:!0}),at="tabindex",dt=Be(u,at),rt=ut(st);return Et($,Ut,m?"":ys),Et(A,an,""),Et(u,Pt,""),Et(y,Yn,""),m||(Et(u,at,dt||"-1"),H&&Et(z,Xn,"")),T&&(Mn(I,$),ot(P,()=>{Mn($,I),It($)})),mt(tt,_),mt($,A),mt(A||$,!m&&u),mt(u,y),ot(P,[rt,()=>{const nt=on(),Q=ut(nt);wt(A,an),wt(y,Yn),wt(u,Pt),H&&wt(z,Xn),dt?Et(u,at,dt):wt(u,at),K(y)&&yt(y),K(u)&&yt(u),K(A)&&yt(A),L(nt),Q()}]),o&&!m&&(hn(u,Pt,Ro),ot(P,D(wt,u,Pt))),L(!m&&st===C&&G.top===G?u:st),rt(),_=0,lt},lt]},Ys=({gt:t})=>({Kt:e,ln:n,At:o})=>{const{$t:s}=e||{},{St:c}=n;t&&(s||o)&&le(t,{[Xt]:c&&"100%"})},Zs=({vt:t,en:e,nt:n,tt:o},s)=>{const[c,r]=vt({i:ns,o:Bn()},D(Bn,t,"padding",""));return({Et:l,Kt:a,ln:f,At:d})=>{let[i,v]=r(d);const{R:b}=xt(),{_t:h,Ct:O,Ot:C}=a||{},{et:H}=f,[p,B]=l("paddingAbsolute");(h||v||(d||O))&&([i,v]=c(d));const J=!o&&(B||C||v);if(J){const L=!p||!e&&!b,X=i.r+i.l,Z=i.t+i.b,N={[mo]:L&&!H?-X:0,[go]:L?-Z:0,[yo]:L&&H?-X:0,top:L?-i.t:0,right:L?H?-i.r:"auto":0,left:L?H?"auto":-i.l:0,[Wt]:L&&`calc(100% + ${X}px)`},x={[ao]:L?i.t:0,[uo]:L?i.r:0,[po]:L?i.b:0,[fo]:L?i.l:0};le(e||n,N),le(n,x),W(s,{en:i,an:!L,ct:e?x:W({},N,x)})}return{un:J}}},Gs=(t,e)=>{const n=xt(),{vt:o,en:s,nt:c,tt:r,ht:l,Tt:a,yt:f,rn:d}=t,{R:i}=n,v=a&&r,b=D(we,0),h=["display","direction","flexDirection","writingMode"],O={i:vo,o:{w:0,h:0}},C=(F,k)=>{const g=pt.devicePixelRatio%1!==0?1:0,E={w:b(F.w-k.w),h:b(F.h-k.h)};return{w:E.w>g?E.w:0,h:E.h>g?E.h:0}},H=()=>{const F=ht(l),k=f(bs,!0),g=et(l,Yt,xn,{H:!0});$t(l,{x:0,y:0}),k();const E=ht(l),q=Le(l);$t(l,{x:q.w,y:q.h});const K=ht(l);$t(l,{x:K.x-E.x<1&&-q.w,y:K.y-E.y<1&&-q.h});const ct=ht(l);return $t(l,F),g(),{I:E,T:ct}},p=()=>W({},us(c)?Ft(c,h):{}),[B,z]=vt(O,D(wn,c)),[J,L]=vt(O,D(Le,c)),[X,Z]=vt(O),[N,x]=vt(O),[S]=vt({i:xe,o:{}}),[M]=vt({i:(F,k)=>ze(F,k,h),o:{}}),[m,j]=vt({i:(F,k)=>xe(F.I,k.I)&&xe(F.T,k.T),o:Lo()}),R=de(No),V=(F,k)=>`${k?ms:gs}${es(F)}`,U=F=>{const{K:k}=F;Y(Lt(k),g=>{const E=g==="x",q=[Rt,_t,Yt].map(K=>V(K,E));f(q.join(" ")),f(V(k[g],E),!0)})};return({Et:F,Kt:k,ln:g,At:E},{un:q})=>{const{_t:K,Ct:ct,Ot:w,dt:I,Ht:$}=k||{},A=R&&R.Z(t,e,g,n,F),{lt:u,it:y,ut:P}=A||{},[T,_]=Ns(F,n),[tt,lt]=F("overflow"),it=Pe(tt.x),G=Pe(tt.y),st=K||q||ct||w||$||_;let yt=z(E),ut=L(E),at=Z(E),dt=x(E);if(_&&i&&f(Ro,!T),st){const[An]=y?y():[],[ge]=yt=B(E),[ne]=ut=J(E),je=To(c),Tn=ne,Hn=je;An&&An();const Ln=as(d()),Wo={w:b(we(ne.w,Tn.w)+ge.w),h:b(we(ne.h,Tn.h)+ge.h)},Pn={w:b((v?Ln.w:Hn.w+b(je.w-ne.w))+ge.w),h:b((v?Ln.h:Hn.h+b(je.h-ne.h))+ge.h)};dt=N(Pn),at=X(C(Wo,Pn),E)}const[rt,nt]=dt,[Q,ft]=at,[Ot,Jt]=ut,[Qt,Ve]=yt,Ct={x:Q.w>0,y:Q.h>0},fe=it&&G&&(Ct.x||Ct.y)||it&&Ct.x&&!Ct.y||G&&Ct.y&&!Ct.x,qe=q||w||$||Ve||Jt||nt||ft||lt||_||st,Vt=Fs(Ct,tt),[Ke,pe]=S(Vt.K),[,te]=M(p(),E),ee=w||I||te||E,[ye,me]=ee?m(H(),E):j();return qe&&(U(Vt),P&&u&&le(c,P(Vt,g,u(Vt,Ot,Qt)))),en(o,Ut,Wn,fe),en(s,an,Wn,fe),W(e,{K:Ke,Mt:{x:rt.w,y:rt.h},Rt:{x:Q.w,y:Q.h},sn:Ct,Lt:fs(ye,Q)}),{tn:pe,Qt:nt,Zt:ft,nn:me||ft}}},Js=t=>{const[e,n,o]=Xs(t),s={en:{t:0,r:0,b:0,l:0},an:!1,ct:{[mo]:0,[go]:0,[yo]:0,[ao]:0,[uo]:0,[po]:0,[fo]:0},Mt:{x:0,y:0},Rt:{x:0,y:0},K:{x:_t,y:_t},sn:{x:!1,y:!1},Lt:Lo()},{ft:c,ht:r,tt:l,yt:a}=e,{R:f,k:d}=xt(),i=!f&&(d.x||d.y),v=[Ys(e),Zs(e,s),Gs(e,s)];return[n,b=>{const h={},O=i,C=a(On,!0),H=O&&ht(r);return Y(v,p=>{W(h,p(b,h)||{})}),$t(r,H),!l&&$t(c,0),C(),h},s,e,o]},Qs=(t,e,n,o)=>{const s=Un(e,{}),[c,r,l,a,f]=Js(t),[d,i,v]=Ks(a,l,s,p=>{H({},p)}),[b,h,,O]=Ws(t,e,v,l,a,o),C=p=>Lt(p).some(B=>!!p[B]),H=(p,B)=>{const{dn:z,At:J,zt:L,_n:X}=p,Z=z||{},N=!!J,x={Et:Un(e,Z,N),dn:Z,At:N};if(X)return h(x),!1;const S=B||i(W({},x,{zt:L})),M=r(W({},x,{ln:v,Kt:S}));h(W({},x,{Kt:S,Gt:M}));const m=C(S),j=C(M),R=m||j||!vn(Z)||N;return R&&n(p,{Kt:S,Gt:M}),R};return[()=>{const{cn:p,ht:B,yt:z}=a,J=z(On,!0),L=ht(p),X=[d(),c(),b()];return $t(B,L),J(),D(St,X)},H,()=>({fn:v,pn:l}),{vn:a,hn:O},f]},kt=(t,e,n)=>{const{U:o}=xt(),s=Te(t),c=s?t:t.target,r=Mo(c);if(e&&!r){let l=!1;const a=[],f={},d=x=>{const S=So(x),M=de(zs);return M?M(S,!0):S},i=W({},o(),d(e)),[v,b,h]=ln(),[O,C,H]=ln(n),p=(x,S)=>{H(x,S),h(x,S)},[B,z,J,L,X]=Qs(t,i,({dn:x,At:S},{Kt:M,Gt:m})=>{const{_t:j,Ot:R,$t:V,Ct:U,xt:F,dt:k}=M,{Qt:g,Zt:E,tn:q,nn:K}=m;p("updated",[N,{updateHints:{sizeChanged:!!j,directionChanged:!!R,heightIntrinsicChanged:!!V,overflowEdgeChanged:!!g,overflowAmountChanged:!!E,overflowStyleChanged:!!q,scrollCoordinatesChanged:!!K,contentMutation:!!U,hostMutation:!!F,appear:!!k},changedOptions:x||{},force:!!S}])},x=>p("scroll",[N,x])),Z=x=>{ks(c),St(a),l=!0,p("destroyed",[N,x]),b(),C()},N={options(x,S){if(x){const M=S?o():{},m=Po(i,W(M,d(x)));vn(m)||(W(i,m),z({dn:m}))}return W({},i)},on:O,off:(x,S)=>{x&&S&&C(x,S)},state(){const{fn:x,pn:S}=J(),{et:M}=x,{Mt:m,Rt:j,K:R,sn:V,en:U,an:F,Lt:k}=S;return W({},{overflowEdge:m,overflowAmount:j,overflowStyle:R,hasOverflow:V,scrollCoordinates:{start:k.I,end:k.T},padding:U,paddingAbsolute:F,directionRTL:M,destroyed:l})},elements(){const{ft:x,vt:S,en:M,nt:m,gt:j,ht:R,Jt:V}=L.vn,{qt:U,Yt:F}=L.hn,k=E=>{const{kt:q,Dt:K,Vt:ct}=E;return{scrollbar:ct,track:K,handle:q}},g=E=>{const{Ft:q,Bt:K}=E,ct=k(q[0]);return W({},ct,{clone:()=>{const w=k(K());return z({_n:!0}),w}})};return W({},{target:x,host:S,padding:M||m,viewport:m,content:j||m,scrollOffsetElement:R,scrollEventElement:V,scrollbarHorizontal:g(U),scrollbarVertical:g(F)})},update:x=>z({At:x,zt:!0}),destroy:D(Z,!1),plugin:x=>f[Lt(x)[0]]};return ot(a,[X]),Is(c,N),Bo(_o,kt,[N,v,f]),Ds(L.vn.Tt,!s&&t.cancel)?(Z(!0),N):(ot(a,B()),p("initialized",[N]),N.update(!0),N)}return r};kt.plugin=t=>{const e=Tt(t),n=e?t:[t],o=n.map(s=>Bo(s,kt)[0]);return _s(n),e?o:o[0]};kt.valid=t=>{const e=t&&t.elements,n=bt(e)&&e();return Ae(n)&&!!Mo(n.target)};kt.env=()=>{const{D:t,k:e,R:n,M:o,j:s,q:c,L:r,P:l,U:a,N:f}=xt();return W({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:o,staticDefaultInitialization:s,staticDefaultOptions:c,getDefaultInitialization:r,setDefaultInitialization:l,getDefaultOptions:a,setDefaultOptions:f})};const tc=document.querySelector("#eventsSection"),eo=document.querySelector("#events"),ec=t=>{tc.style.display="",eo.innerHTML="",Object.entries(t).forEach(([e,n])=>{const o=document.createElement("div");o.className=`event ${n.active?"active":""}`,o.textContent=`${e} (${n.count})`,eo.append(o)})},nc=()=>{let t=[];const e={},n={},o=r=>({active:t.includes(r),count:e[r]||0}),s=r=>{t=r,ec({initialized:o("initialized"),destroyed:o("destroyed"),updated:o("updated"),scroll:o("scroll")})};return r=>{const l=e[r];e[r]=typeof l=="number"?l+1:1,s(Array.from(new Set([...t,r]))),clearTimeout(n[r]),n[r]=setTimeout(()=>{const a=new Set(t);a.delete(r),s(Array.from(a))},500)}};let Bt,dn=!1,fn=!1,pn=!0;const be=nc(),Kt=document.querySelector("#target"),no=document.querySelector("#targetContent"),Se=document.querySelector("#impostor"),yn=document.querySelector("#scrollButton"),ie=document.querySelector("#toggleContentButton"),ae=document.querySelector("#toggleElementButton"),mn=document.querySelector("#toggleOverlayScrollbarsButton"),Vo=()=>{dn?(no.style.display="none",ie.textContent="Show Content"):(no.style.display="",ie.textContent="Hide Content")},qo=()=>{fn?(Kt.style.display="none",ae.textContent="Show Element"):(Kt.style.display="",ae.textContent="Hide Element")},Ko=()=>{var t,e;pn?((t=Se.parentElement)==null||t.append(Kt),Se.remove(),yn.style.display="",ie.style.display="",ae.style.display="",mn.textContent="Destroy OverlayScrollbars",Bt=kt(Kt,{},{initialized:()=>be("initialized"),destroyed:()=>be("destroyed"),updated:()=>be("updated"),scroll:()=>be("scroll")})):(Bt==null||Bt.destroy(),(e=Kt.parentElement)==null||e.append(Se),Kt.remove(),Se.style.display="",yn.style.display="none",ie.style.display="none",ae.style.display="none",mn.textContent="Initialize OverlayScrollbars")};yn.addEventListener("click",()=>{if(!Bt)return;const{overflowAmount:t}=Bt.state(),{scrollOffsetElement:e}=Bt.elements(),{scrollLeft:n,scrollTop:o}=e;e.scrollTo({behavior:"smooth",left:Math.round((t.x-n)/t.x)*t.x,top:Math.round((t.y-o)/t.y)*t.y})});ie.addEventListener("click",()=>{dn=!dn,Vo()});ae.addEventListener("click",()=>{fn=!fn,qo()});mn.addEventListener("click",()=>{pn=!pn,Ko()});Vo();qo();Ko();let ce=null;const jo=t=>kt({target:document.body,cancel:{body:t?!1:null}},{}).state().destroyed,oc=document.querySelector("#toggleBodyOverlayScrollbarsSection"),gn=document.querySelector("#toggleBodyOverlayScrollbarsButton"),Uo=()=>{ce===null&&(ce=!jo()),oc.style.display="",gn.style.display="",gn.textContent=`${ce?"Destroy":"Initialize"} Body OverlayScrollbars`};gn.addEventListener("click",()=>{const t=kt(document.body);t?(t.destroy(),ce=!1):ce=!jo(!0),Uo()});Uo();