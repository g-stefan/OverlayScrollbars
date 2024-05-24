(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();/*!
 * OverlayScrollbars
 * Version: 2.8.3
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */const mt=(t,e)=>{const{o:n,i:o,u:s}=t;let c=n,r;const i=(u,a)=>{const w=c,O=u,m=a||(o?!o(w,O):w!==O);return(m||s)&&(c=O,r=w),[c,m,r]};return[e?u=>i(e(c,r),u):i,u=>[c,!!u,r]]},oo=typeof window<"u"&&typeof document<"u",ft=oo?window:{},so=Math.max,Jo=Math.min,We=Math.round,Ce=Math.abs,Dn=Math.sign,co=ft.cancelAnimationFrame,vn=ft.requestAnimationFrame,Ee=ft.setTimeout,Ke=ft.clearTimeout,Pe=t=>typeof ft[t]<"u"?ft[t]:void 0,Qo=Pe("MutationObserver"),In=Pe("IntersectionObserver"),$e=Pe("ResizeObserver"),Xe=Pe("ScrollTimeline"),ro=oo&&Node.ELEMENT_NODE,{toString:oc,hasOwnProperty:qe}=Object.prototype,Me=t=>t===void 0,hn=t=>t===null,Et=t=>typeof t=="number",De=t=>typeof t=="string",lo=t=>typeof t=="boolean",St=t=>typeof t=="function",$t=t=>Array.isArray(t),se=t=>typeof t=="object"&&!$t(t)&&!hn(t),Ie=t=>{const e=!!t&&t.length,n=Et(e)&&e>-1&&e%1==0;return $t(t)||!St(t)&&n?e>0&&se(t)?e-1 in t:!0:!1},Ae=t=>{if(!t||!se(t))return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=qe.call(t,n),r=s&&qe.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return Me(e)||qe.call(t,e)},Te=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===ro:!1},Re=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===ro:!1};function K(t,e){if(Ie(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&K(Object.keys(t),n=>e(t[n],n,t));return t}const bn=(t,e)=>t.indexOf(e)>=0,Ht=(t,e)=>t.concat(e),ot=(t,e,n)=>(!De(e)&&Ie(e)?Array.prototype.push.apply(t,e):t.push(e),t),_t=t=>Array.from(t||[]),io=t=>$t(t)?t:[t],Ye=t=>!!t&&!t.length,Rn=t=>_t(new Set(t)),wt=(t,e,n)=>{K(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},ao="paddingTop",uo="paddingRight",fo="paddingLeft",po="paddingBottom",yo="marginLeft",mo="marginRight",go="marginBottom",ts="overflowX",es="overflowY",Kt="width",Xt="height",Dt="visible",Bt="hidden",Yt="scroll",ns=t=>{const e=String(t||"");return e?e[0].toUpperCase()+e.slice(1):""},ke=(t,e,n,o)=>{if(t&&e){let s=!0;return K(n,c=>{const r=t[c],i=e[c];r!==i&&(s=!1)}),s}return!1},vo=(t,e)=>ke(t,e,["w","h"]),we=(t,e)=>ke(t,e,["x","y"]),os=(t,e)=>ke(t,e,["t","r","b","l"]),It=()=>{},I=(t,...e)=>t.bind(0,...e),Nt=t=>{let e;const n=t?Ee:vn,o=t?Ke:co;return[s=>{o(e),e=n(()=>s(),St(t)?t():t)},()=>o(e)]},Ze=(t,e)=>{const{_:n,p:o,v:s,m:c}=e||{};let r,i,l,f,u=It;const a=function(b){u(),Ke(r),f=r=i=void 0,u=It,t.apply(this,b)},w=H=>c&&i?c(i,H):H,O=()=>{u!==It&&a(w(l)||l)},m=function(){const b=_t(arguments),L=St(n)?n():n;if(Et(L)&&L>=0){const P=St(o)?o():o,k=Et(P)&&P>=0,V=L>0?Ee:vn,z=L>0?Ke:co,j=w(b)||b,F=a.bind(0,j);let S;u(),s&&!f?(F(),f=!0,S=V(()=>f=void 0,L)):(S=V(F,L),k&&!r&&(r=Ee(O,P))),u=()=>z(S),i=l=j}else a(b)};return m.S=O,m},ho=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),Lt=t=>t?Object.keys(t):[],U=(t,e,n,o,s,c,r)=>{const i=[e,n,o,s,c,r];return(typeof t!="object"||hn(t))&&!St(t)&&(t={}),K(i,l=>{K(l,(f,u)=>{const a=l[u];if(t===a)return!0;const w=$t(a);if(a&&Ae(a)){const O=t[u];let m=O;w&&!$t(O)?m=[]:!w&&!Ae(O)&&(m={}),t[u]=U(m,a)}else t[u]=w?a.slice():a})}),t},bo=(t,e)=>K(U({},t),(n,o,s)=>{n===void 0?delete s[o]:n&&Ae(n)&&(s[o]=bo(n))}),Sn=t=>{for(const e in t)return!1;return!0},Je=(t,e,n)=>so(t,Jo(e,n)),Vt=t=>_t(new Set(($t(t)?t:(t||"").split(" ")).filter(e=>e))),wn=(t,e)=>t&&t.getAttribute(e),kn=(t,e)=>t&&t.hasAttribute(e),Tt=(t,e,n)=>{K(Vt(e),o=>{t&&t.setAttribute(o,String(n||""))})},Ot=(t,e)=>{K(Vt(e),n=>t&&t.removeAttribute(n))},ze=(t,e)=>{const n=Vt(wn(t,e)),o=I(Tt,t,e),s=(c,r)=>{const i=new Set(n);return K(Vt(c),l=>{i[r](l)}),_t(i).join(" ")};return{O:c=>o(s(c,"delete")),$:c=>o(s(c,"add")),C:c=>{const r=Vt(c);return r.reduce((i,l)=>i&&n.includes(l),r.length>0)}}},So=(t,e,n)=>(ze(t,e).O(n),I(xn,t,e,n)),xn=(t,e,n)=>(ze(t,e).$(n),I(So,t,e,n)),Qe=(t,e,n,o)=>(o?xn:So)(t,e,n),On=(t,e,n)=>ze(t,e).C(n),wo=t=>ze(t,"class"),xo=(t,e)=>{wo(t).O(e)},Cn=(t,e)=>(wo(t).$(e),I(xo,t,e)),Oo=(t,e)=>{const n=[],o=e?Re(e)&&e:document;return o?ot(n,o.querySelectorAll(t)):n},ss=(t,e)=>{const n=e?Re(e)&&e:document;return n?n.querySelector(t):null},He=(t,e)=>Re(t)?t.matches(e):!1,Co=t=>He(t,"body"),tn=t=>t?_t(t.childNodes):[],Zt=t=>t&&t.parentElement,Ut=(t,e)=>Re(t)&&t.closest(e),en=t=>document.activeElement,cs=(t,e,n)=>{const o=Ut(t,e),s=t&&ss(n,o),c=Ut(s,e)===o;return o&&s?o===t||s===t||c&&Ut(Ut(t,n),e)!==o:!1},kt=t=>{if(Ie(t))K(_t(t),e=>kt(e));else if(t){const e=Zt(t);e&&e.removeChild(t)}},Eo=(t,e,n)=>{if(n&&t){let o=e,s;return Ie(n)?(s=document.createDocumentFragment(),K(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null),()=>kt(n)}return It},gt=(t,e)=>Eo(t,null,e),zn=(t,e)=>Eo(Zt(t),t&&t.nextSibling,e),Wt=t=>{const e=document.createElement("div");return Tt(e,"class",t),e},$o=t=>{const e=Wt();return e.innerHTML=t.trim(),K(tn(e),n=>kt(n))},rs=/^--/,_n=(t,e)=>t.getPropertyValue(e)||t[e]||"",En=t=>{const e=t||0;return isFinite(e)?e:0},ve=t=>En(parseFloat(t||"")),Bn=t=>`${(En(t)*100).toFixed(3)}%`,nn=t=>`${En(t)}px`;function ce(t,e){t&&e&&K(e,(n,o)=>{try{const s=t.style,c=Et(n)?nn(n):(n||"")+"";rs.test(o)?s.setProperty(o,c):s[o]=c}catch{}})}function qt(t,e,n){const o=De(e);let s=o?"":{};if(t){const c=ft.getComputedStyle(t,n)||t.style;s=o?_n(c,e):_t(e).reduce((r,i)=>(r[i]=_n(c,i),r),s)}return s}const Nn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,i=`${o}bottom${s}`,l=`${o}left${s}`,f=qt(t,[c,r,i,l]);return{t:ve(f[c]),r:ve(f[r]),b:ve(f[i]),l:ve(f[l])}},je=(t,e)=>`translate${se(t)?`(${t.x},${t.y})`:`${e?"X":"Y"}(${t})`}`,ls=t=>!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length),is={w:0,h:0},_e=(t,e)=>e?{w:e[`${t}Width`],h:e[`${t}Height`]}:is,as=t=>_e("inner",t||ft),ee=I(_e,"offset"),Ao=I(_e,"client"),on=I(_e,"scroll"),$n=t=>{const e=parseFloat(qt(t,Kt))||0,n=parseFloat(qt(t,Xt))||0;return{w:e-We(e),h:n-We(n)}},ne=t=>t.getBoundingClientRect(),us=t=>!!t&&ls(t),sn=t=>!!(t&&(t[Xt]||t[Kt])),To=(t,e)=>{const n=sn(t);return!sn(e)&&n},Fn=(t,e,n,o)=>{K(Vt(e),s=>{t&&t.removeEventListener(s,n,o)})},Q=(t,e,n,o)=>{var s;const c=(s=o&&o.H)!=null?s:!0,r=o&&o.I||!1,i=o&&o.A||!1,l={passive:c,capture:r};return I(wt,Vt(e).map(f=>{const u=i?a=>{Fn(t,f,u,r),n&&n(a)}:n;return t&&t.addEventListener(f,u,l),I(Fn,t,f,u,r)}))},Ho=t=>t.stopPropagation(),cn=t=>t.preventDefault(),Lo=t=>Ho(t)||cn(t),Ct=(t,e)=>{const{x:n,y:o}=Et(e)?{x:e,y:e}:e||{};Et(n)&&(t.scrollLeft=n),Et(o)&&(t.scrollTop=o)},vt=t=>({x:t.scrollLeft,y:t.scrollTop}),Po=()=>({T:{x:0,y:0},D:{x:0,y:0}}),ds=(t,e)=>{const{T:n,D:o}=t,{w:s,h:c}=e,r=(a,w,O)=>{let m=Dn(a)*O,H=Dn(w)*O;if(m===H){const b=Ce(a),L=Ce(w);H=b>L?0:H,m=b<L?0:m}return m=m===H?0:m,[m+0,H+0]},[i,l]=r(n.x,o.x,s),[f,u]=r(n.y,o.y,c);return{T:{x:i,y:f},D:{x:l,y:u}}},Vn=({T:t,D:e})=>{const n=(o,s)=>o===0&&o<=s;return{x:n(t.x,e.x),y:n(t.y,e.y)}},qn=({T:t,D:e},n)=>{const o=(s,c,r)=>Je(0,1,(s-r)/(s-c)||0);return{x:o(t.x,e.x,n.x),y:o(t.y,e.y,n.y)}},rn=t=>{t&&t.focus&&t.focus({preventScroll:!0})},jn=(t,e)=>{K(io(e),t)},ln=t=>{const e=new Map,n=(c,r)=>{if(c){const i=e.get(c);jn(l=>{i&&i[l?"delete":"clear"](l)},r)}else e.forEach(i=>{i.clear()}),e.clear()},o=(c,r)=>{if(De(c)){const f=e.get(c)||new Set;return e.set(c,f),jn(u=>{St(u)&&f.add(u)},r),I(n,c,r)}lo(r)&&r&&n();const i=Lt(c),l=[];return K(i,f=>{const u=c[f];u&&ot(l,o(f,u))}),I(wt,l)},s=(c,r)=>{K(_t(e.get(c)),i=>{r&&!Ye(r)?i.apply(0,r):i()})};return o(t||{}),[o,n,s]},Un=t=>JSON.stringify(t,(e,n)=>{if(St(n))throw 0;return n}),Gn=(t,e)=>t?`${e}`.split(".").reduce((n,o)=>n&&ho(n,o)?n[o]:void 0,t):void 0,fs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Mo=(t,e)=>{const n={},o=Ht(Lt(e),Lt(t));return K(o,s=>{const c=t[s],r=e[s];if(se(c)&&se(r))U(n[s]={},Mo(c,r)),Sn(n[s])&&delete n[s];else if(ho(e,s)&&r!==c){let i=!0;if($t(c)||$t(r))try{Un(c)===Un(r)&&(i=!1)}catch{}i&&(n[s]=r)}}),n},Wn=(t,e,n)=>o=>[Gn(t,o),n||Gn(e,o)!==void 0],Jt="data-overlayscrollbars",xe="os-environment",he=`${xe}-scrollbar-hidden`,Ue=`${Jt}-initialize`,Oe="noClipping",Kn=`${Jt}-body`,Rt=Jt,ps="host",Mt=`${Jt}-viewport`,ys=ts,ms=es,gs="arrange",Do="measuring",Io="scrollbarHidden",vs="scrollbarPressed",hs="noContent",an=`${Jt}-padding`,Xn=`${Jt}-content`,An="os-size-observer",bs=`${An}-appear`,Ss=`${An}-listener`,ws="os-trinsic-observer",xs="os-theme-none",ht="os-scrollbar",Os=`${ht}-rtl`,Cs=`${ht}-horizontal`,Es=`${ht}-vertical`,Ro=`${ht}-track`,Tn=`${ht}-handle`,$s=`${ht}-visible`,As=`${ht}-cornerless`,Yn=`${ht}-interaction`,Zn=`${ht}-unusable`,un=`${ht}-auto-hide`,Jn=`${un}-hidden`,Qn=`${ht}-wheel`,Ts=`${Ro}-interactive`,Hs=`${Tn}-interactive`;let Ge;const Ls=()=>{const t=(x,P,k)=>{gt(document.body,x),gt(document.body,x);const V=Ao(x),z=ee(x),X=$n(P);return k&&kt(x),{x:z.h-V.h+X.h,y:z.w-V.w+X.w}},e=x=>{let P=!1;const k=Cn(x,he);try{P=qt(x,"scrollbar-width")==="none"||qt(x,"display","::-webkit-scrollbar")==="none"}catch{}return k(),P},n=`.${xe}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${xe} div{width:200%;height:200%;margin:10px 0}.${he}{scrollbar-width:none!important}.${he}::-webkit-scrollbar,.${he}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`,s=$o(`<div class="${xe}"><div></div><style>${n}</style></div>`)[0],c=s.firstChild,[r,,i]=ln(),[l,f]=mt({o:t(s,c),i:we},I(t,s,c,!0)),[u]=f(),a=e(s),w={x:u.x===0,y:u.y===0},O={elements:{host:null,padding:!a,viewport:x=>a&&Co(x)&&x,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},m=U({},fs),H=I(U,{},m),b=I(U,{},O),L={k:u,M:w,R:a,V:!!Xe,L:I(r,"r"),P:b,U:x=>U(O,x)&&b(),N:H,q:x=>U(m,x)&&H(),B:U({},O),F:U({},m)};if(Ot(s,"style"),kt(s),Q(ft,"resize",()=>{i("r",[])}),St(ft.matchMedia)){const x=P=>{const k=ft.matchMedia(`(resolution: ${ft.devicePixelRatio}dppx)`);Q(k,"change",()=>{P(),x(P)},{A:!0})};x(()=>{let P,k;!a&&(!w.x||!w.y)&&([P,k]=l(),U(L.k,P)),i("r",[k])})}return L},At=()=>(Ge||(Ge=Ls()),Ge),ko=(t,e)=>St(e)?e.apply(0,t):e,Ps=(t,e,n,o)=>{const s=Me(o)?n:o;return ko(t,s)||e.apply(0,t)},zo=(t,e,n,o)=>{const s=Me(o)?n:o,c=ko(t,s);return!!c&&(Te(c)?c:e.apply(0,t))},Ms=(t,e)=>{const{nativeScrollbarsOverlaid:n,body:o}=e||{},{M:s,R:c,P:r}=At(),{nativeScrollbarsOverlaid:i,body:l}=r().cancel,f=n??i,u=Me(o)?l:o,a=(s.x||s.y)&&f,w=t&&(hn(u)?!c:u);return!!a||!!w},Hn=new WeakMap,Ds=(t,e)=>{Hn.set(t,e)},Is=t=>{Hn.delete(t)},_o=t=>Hn.get(t),Rs=(t,e,n)=>{let o=!1;const s=n?new WeakMap:!1,c=()=>{o=!0},r=i=>{if(s&&n){const l=n.map(f=>{const[u,a]=f||[];return[a&&u?(i||Oo)(u,t):[],a]});K(l,f=>K(f[0],u=>{const a=f[1],w=s.get(u)||[];if(t.contains(u)&&a){const m=Q(u,a,H=>{o?(m(),s.delete(u)):e(H)});s.set(u,ot(w,m))}else wt(w),s.delete(u)}))}};return r(),[c,r]},to=(t,e,n,o)=>{let s=!1;const{j:c,X:r,Y:i,W:l,J:f,K:u}=o||{},a=Ze(()=>s&&n(!0),{_:33,p:99}),[w,O]=Rs(t,a,i),m=c||[],H=r||[],b=Ht(m,H),L=(P,k)=>{if(!Ye(k)){const V=f||It,z=u||It,X=[],j=[];let F=!1,S=!1;if(K(k,v=>{const{attributeName:A,target:h,type:G,oldValue:_,addedNodes:D,removedNodes:J}=v,tt=G==="attributes",Y=G==="childList",p=t===h,B=tt&&A,N=B&&wn(h,A||""),M=De(N)?N:null,Z=B&&_!==M,g=bn(H,A)&&Z;if(e&&(Y||!p)){const E=tt&&Z,C=E&&l&&He(h,l),y=(C?!V(h,A,_,M):!tt||E)&&!z(v,!!C,t,o);K(D,$=>ot(X,$)),K(J,$=>ot(X,$)),S=S||y}!e&&p&&Z&&!V(h,A,_,M)&&(ot(j,A),F=F||g)}),O(v=>Rn(X).reduce((A,h)=>(ot(A,Oo(v,h)),He(h,v)?ot(A,h):A),[])),e)return!P&&S&&n(!1),[!1];if(!Ye(j)||F){const v=[Rn(j),F];return!P&&n.apply(0,v),v}}},x=new Qo(I(L,!1));return[()=>(x.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:b,subtree:e,childList:e,characterData:e}),s=!0,()=>{s&&(w(),x.disconnect(),s=!1)}),()=>{if(s)return a.S(),L(!0,x.takeRecords())}]},Bo={},No={},ks=t=>{K(t,e=>K(e,(n,o)=>{Bo[o]=e[o]}))},Fo=(t,e,n)=>Lt(t).map(o=>{const{static:s,instance:c}=t[o],[r,i,l]=n||[],f=n?c:s;if(f){const u=n?f(r,i,e):f(e);return(l||No)[o]=u}}),ie=t=>No[t],zs="__osOptionsValidationPlugin",_s="__osSizeObserverPlugin",Bs=(t,e)=>{const{M:n}=e,[o,s]=t("showNativeOverlaidScrollbars");return[o&&n.x&&n.y,s]},Le=t=>t.indexOf(Dt)===0,Ns=(t,e)=>{const n=(s,c,r,i)=>{const l=s===Dt?Bt:s.replace(`${Dt}-`,""),f=Le(s),u=Le(r);return!c&&!i?Bt:f&&u?Dt:f?c&&i?l:c?Dt:Bt:c?l:u&&i?Dt:Bt},o={x:n(e.x,t.x,e.y,t.y),y:n(e.y,t.y,e.x,t.x)};return{G:o,Z:{x:o.x===Yt,y:o.y===Yt}}},Vo="__osScrollbarsHidingPlugin",Fs="__osClickScrollPlugin",qo=(t,e,n)=>{const{dt:o}=n||{},s=ie(_s),[c]=mt({o:!1,u:!0});return()=>{const r=[],l=$o(`<div class="${An}"><div class="${Ss}"></div></div>`)[0],f=l.firstChild,u=a=>{const w=a instanceof ResizeObserverEntry;let O=!1,m=!1;if(w){const[H,,b]=c(a.contentRect),L=sn(H);m=To(H,b),O=!m&&!L}else m=a===!0;O||e({ft:!0,dt:m})};if($e){const a=new $e(w=>u(w.pop()));a.observe(f),ot(r,()=>{a.disconnect()})}else if(s){const[a,w]=s(f,u,o);ot(r,Ht([Cn(l,bs),Q(l,"animationstart",a)],w))}else return It;return I(wt,ot(r,gt(t,l)))}},Vs=(t,e)=>{let n;const o=l=>l.h===0||l.isIntersecting||l.intersectionRatio>0,s=Wt(ws),[c]=mt({o:!1}),r=(l,f)=>{if(l){const u=c(o(l)),[,a]=u;return a&&!f&&e(u)&&[u]}},i=(l,f)=>r(f.pop(),l);return[()=>{const l=[];if(In)n=new In(I(i,!1),{root:t}),n.observe(s),ot(l,()=>{n.disconnect()});else{const f=()=>{const u=ee(s);r(u)};ot(l,qo(s,f)()),f()}return I(wt,ot(l,gt(t,s)))},()=>n&&i(!0,n.takeRecords())]},qs=(t,e,n,o)=>{let s,c,r,i,l,f;const u=`[${Rt}]`,a=`[${Mt}]`,w=[],O=["wrap","cols","rows"],m=["id","class","style","open"],{vt:H,ht:b,ot:L,gt:x,bt:P,wt:k,nt:V,yt:z,St:X,Ot:j}=t,F=d=>qt(d,"direction")==="rtl",S={$t:!1,ct:F(H)},v=At(),A=ie(Vo),[h]=mt({i:vo,o:{w:0,h:0}},()=>{const d=A&&A.tt(t,e,S,v,n).ut,$=!(z&&V)&&On(b,Rt,Oe),T=!V&&X(gs),R=T&&vt(x),W=j(Do,$),ct=T&&d&&d()[0],it=on(L),q=$n(L);return ct&&ct(),Ct(x,R),$&&W(),{w:it.w+q.w,h:it.h+q.h}}),G=k?O:Ht(m,O),_=Ze(o,{_:()=>s,p:()=>c,m(d,y){const[$]=d,[T]=y;return[Ht(Lt($),Lt(T)).reduce((R,W)=>(R[W]=$[W]||T[W],R),{})]}}),D=d=>{const y=F(H);U(d,{Ct:f!==y}),U(S,{ct:y}),f=y},J=(d,y)=>{const[$,T]=d,R={xt:T};return U(S,{$t:$}),!y&&o(R),R},tt=({ft:d,dt:y})=>{const T=!(d&&!y)&&v.R?_:o,R={ft:d||y,dt:y};D(R),T(R)},Y=(d,y)=>{const[,$]=h(),T={Ht:$};return D(T),$&&!y&&(d?o:_)(T),T},p=(d,y,$)=>{const T={Et:y};return D(T),y&&!$&&_(T),T},[B,N]=P?Vs(b,J):[],M=!V&&qo(b,tt,{dt:!0}),[Z,g]=to(b,!1,p,{X:m,j:Ht(m,w)}),E=V&&$e&&new $e(d=>{const y=d[d.length-1].contentRect;tt({ft:!0,dt:To(y,l)}),l=y}),C=Ze(()=>{const[,d]=h();o({Ht:d})},{_:222,v:!0});return[()=>{E&&E.observe(b);const d=M&&M(),y=B&&B(),$=Z(),T=v.L(R=>{R?_({zt:R,Ht:!0}):C()});return()=>{E&&E.disconnect(),d&&d(),y&&y(),i&&i(),$(),T()}},({It:d,At:y,Tt:$})=>{const T={},[R]=d("update.ignoreMutation"),[W,ct]=d("update.attributes"),[it,q]=d("update.elementEvents"),[rt,at]=d("update.debounce"),bt=q||ct,lt=y||$,pt=st=>St(R)&&R(st);if(bt){r&&r(),i&&i();const[st,et]=to(P||L,!0,Y,{j:Ht(G,W||[]),Y:it,W:u,K:(ut,nt)=>{const{target:dt,attributeName:yt}=ut;return(!nt&&yt&&!V?cs(dt,u,a):!1)||!!Ut(dt,`.${ht}`)||!!pt(ut)}});i=st(),r=et}if(at)if(_.S(),$t(rt)){const st=rt[0],et=rt[1];s=Et(st)&&st,c=Et(et)&&et}else Et(rt)?(s=rt,c=!1):(s=!1,c=!1);if(lt){const st=g(),et=N&&N(),ut=r&&r();st&&U(T,p(st[0],st[1],lt)),et&&U(T,J(et[0],lt)),ut&&U(T,Y(ut[0],lt))}return D(T),T},S]},js=(t,e,n,o)=>{const{P:s}=At(),{scrollbars:c}=s(),{slot:r}=c,{vt:i,ht:l,ot:f,Dt:u,gt:a,yt:w,nt:O}=e,{scrollbars:m}=u?{}:t,{slot:H}=m||{},b=new Map,L=g=>Xe&&new Xe({source:a,axis:g}),x={x:L("x"),y:L("y")},P=zo([i,l,f],()=>O&&w?i:l,r,H),k=(g,E)=>{if(E){const R=g?Kt:Xt,{kt:W,Mt:ct}=E,it=ne(ct)[R],q=ne(W)[R];return Je(0,1,it/q||0)}const C=g?"x":"y",{Rt:d,Vt:y}=n,$=y[C],T=d[C];return Je(0,1,$/($+T)||0)},V=(g,E,C)=>{const d=k(C,g);return 1/d*(1-d)*E},z=g=>U(g,{clear:["left"]}),X=g=>{b.forEach((E,C)=>{(g?bn(io(g),C):!0)&&(K(E||[],y=>{y&&y.cancel()}),b.delete(C))})},j=(g,E,C,d)=>{const y=b.get(g)||[],$=y.find(T=>T&&T.timeline===E);$?$.effect=new KeyframeEffect(g,C,{composite:d}):b.set(g,Ht(y,[g.animate(C,{timeline:E,composite:d})]))},F=(g,E,C)=>{const d=C?Cn:xo;K(g,y=>{d(y.Lt,E)})},S=(g,E)=>{K(g,C=>{const[d,y]=E(C);ce(d,y)})},v=(g,E)=>{S(g,C=>{const{Mt:d}=C;return[d,{[E?Kt:Xt]:Bn(k(E))}]})},A=(g,E)=>{const{Pt:C}=n,d=E?"x":"y",y=x[d],$=Vn(C)[d],T=(R,W)=>je(Bn(V(R,$?W:1-W,E)),E);y?K(g,R=>{const{Mt:W}=R;j(W,y,z({transform:[0,1].map(ct=>T(R,ct))}))}):S(g,R=>[R.Mt,{transform:T(R,qn(C,vt(a))[d])}])},h=g=>O&&!w&&Zt(g)===f,G=[],_=[],D=[],J=(g,E,C)=>{const d=lo(C),y=d?C:!0,$=d?!C:!0;y&&F(_,g,E),$&&F(D,g,E)},tt=()=>{v(_,!0),v(D)},Y=()=>{A(_,!0),A(D)},p=()=>{if(O){const{Rt:g,Pt:E}=n,C=Vn(E),d=.5;if(x.x&&x.y)K(Ht(D,_),({Lt:y})=>{if(h(y)){const $=T=>j(y,x[T],z({transform:[0,C[T]?1:-1].map(R=>je(nn(R*(g[T]-d)),T==="x"))}),"add");$("x"),$("y")}else X(y)});else{const y=qn(E,vt(a)),$=T=>{const{Lt:R}=T,W=h(R)&&R,ct=(it,q,rt)=>{const at=q*it;return nn(rt?at:-at)};return[W,W&&{transform:je({x:ct(y.x,g.x,C.x),y:ct(y.y,g.y,C.y)})}]};S(_,$),S(D,$)}}},B=g=>{const C=Wt(`${ht} ${g?Cs:Es}`),d=Wt(Ro),y=Wt(Tn),$={Lt:C,kt:d,Mt:y};return ot(g?_:D,$),ot(G,[gt(C,d),gt(d,y),I(kt,C),X,o($,J,A,g)]),$},N=I(B,!0),M=I(B,!1),Z=()=>(gt(P,_[0].Lt),gt(P,D[0].Lt),I(wt,G));return N(),M(),[{Ut:tt,Nt:Y,qt:p,Bt:J,Ft:{V:x.x,jt:_,Xt:N,Yt:I(S,_)},Wt:{V:x.y,jt:D,Xt:M,Yt:I(S,D)}},Z]},Us=(t,e,n,o)=>(s,c,r,i)=>{const{ht:l,ot:f,nt:u,gt:a,Jt:w,Ot:O}=e,{Lt:m,kt:H,Mt:b}=s,[L,x]=Nt(333),[P,k]=Nt(444),[V,z]=Nt(),X=I(r,[s],i),j=h=>{St(a.scrollBy)&&a.scrollBy({behavior:"smooth",left:h.x,top:h.y})},F=i?Kt:Xt,S=()=>{const h="pointerup pointercancel lostpointercapture",G=`client${i?"X":"Y"}`,_=i?"left":"top",D=i?"w":"h",J=i?"x":"y",tt=(Y,p)=>B=>{const{Rt:N}=n,M=ee(H)[D]-ee(b)[D],g=p*B/M*N[J];Ct(a,{[J]:Y+g})};return Q(H,"pointerdown",Y=>{const p=Ut(Y.target,`.${Tn}`)===b,B=p?b:H,N=t.scrollbars,{button:M,isPrimary:Z,pointerType:g}=Y,{pointers:E}=N;if(M===0&&Z&&N[p?"dragScroll":"clickScroll"]&&(E||[]).includes(g)){k();const d=!p&&Y.shiftKey,y=I(ne,b),$=I(ne,H),T=(nt,dt)=>(nt||y())[_]-(dt||$())[_],R=We(ne(a)[F])/ee(a)[D]||1,W=tt(vt(a)[J],1/R),ct=Y[G],it=y(),q=$(),rt=it[F],at=T(it,q)+rt/2,bt=ct-q[_],lt=p?0:bt-at,pt=nt=>{wt(ut),B.releasePointerCapture(nt.pointerId)},st=()=>O(vs,!0),et=st(),ut=[()=>{const nt=vt(a);et();const dt=vt(a),yt={x:dt.x-nt.x,y:dt.y-nt.y};(Ce(yt.x)>3||Ce(yt.y)>3)&&(st(),Ct(a,nt),j(yt),P(et))},Q(w,h,pt),Q(w,"selectstart",nt=>cn(nt),{H:!1}),Q(H,h,pt),Q(H,"pointermove",nt=>{const dt=nt[G]-ct;(p||d)&&W(lt+dt)})];if(B.setPointerCapture(Y.pointerId),d)W(lt);else if(!p){const nt=ie(Fs);nt&&ot(ut,nt(W,T,lt,rt,bt))}}})};let v=!0;const A=h=>h.propertyName.indexOf(F)>-1;return I(wt,[Q(b,"pointermove pointerleave",o),Q(m,"pointerenter",()=>{c(Yn,!0)}),Q(m,"pointerleave pointercancel",()=>{c(Yn,!1)}),!u&&Q(m,"mousedown",()=>{const h=en();(kn(h,Mt)||kn(h,Rt)||h===document.body)&&Ee(I(rn,f),25)}),Q(m,"wheel",h=>{const{deltaX:G,deltaY:_,deltaMode:D}=h;v&&D===0&&Zt(m)===l&&j({x:G,y:_}),v=!1,c(Qn,!0),L(()=>{v=!0,c(Qn)}),cn(h)},{H:!1,I:!0}),Q(b,"transitionstart",h=>{if(A(h)){const G=()=>{X(),V(G)};G()}}),Q(b,"transitionend transitioncancel",h=>{A(h)&&(z(),X())}),Q(m,"pointerdown",I(Q,w,"click",Lo,{A:!0,I:!0,H:!1}),{I:!0}),S(),x,k,z])},Gs=(t,e,n,o,s,c)=>{let r,i,l,f,u,a=It,w=0;const O=p=>p.pointerType==="mouse",[m,H]=Nt(),[b,L]=Nt(100),[x,P]=Nt(100),[k,V]=Nt(()=>w),[z,X]=js(t,s,o,Us(e,s,o,p=>O(p)&&D())),{ht:j,Kt:F,yt:S}=s,{Bt:v,Ut:A,Nt:h,qt:G}=z,_=(p,B)=>{if(V(),p)v(Jn);else{const N=I(v,Jn,!0);w>0&&!B?k(N):N()}},D=()=>{(l?!r:!f)&&(_(!0),b(()=>{_(!1)}))},J=p=>{v(un,p,!0),v(un,p,!1)},tt=p=>{O(p)&&(r=l,l&&_(!0))},Y=[V,L,P,H,()=>a(),Q(j,"pointerover",tt,{A:!0}),Q(j,"pointerenter",tt),Q(j,"pointerleave",p=>{O(p)&&(r=!1,l&&_(!1))}),Q(j,"pointermove",p=>{O(p)&&i&&D()}),Q(F,"scroll",p=>{m(()=>{h(),D()}),c(p),G()})];return[()=>I(wt,ot(Y,X())),({It:p,Tt:B,Gt:N,Qt:M})=>{const{Zt:Z,tn:g,nn:E,sn:C}=M||{},{Ct:d,dt:y}=N||{},{ct:$}=n,{M:T}=At(),{G:R,en:W}=o,[ct,it]=p("showNativeOverlaidScrollbars"),[q,rt]=p("scrollbars.theme"),[at,bt]=p("scrollbars.visibility"),[lt,pt]=p("scrollbars.autoHide"),[st,et]=p("scrollbars.autoHideSuspend"),[ut]=p("scrollbars.autoHideDelay"),[nt,dt]=p("scrollbars.dragScroll"),[yt,jt]=p("scrollbars.clickScroll"),[ae,Be]=p("overflow"),Ne=y&&!B,Fe=W.x||W.y,xt=Z||g||C||d||B,Ve=E||bt||Be,ue=ct&&T.x&&T.y,de=(Pt,Qt,te)=>{const fe=Pt.includes(Yt)&&(at===Dt||at==="auto"&&Qt===Yt);return v($s,fe,te),fe};if(w=ut,Ne&&(st&&Fe?(J(!1),a(),x(()=>{a=Q(F,"scroll",I(J,!0),{A:!0})})):J(!0)),it&&v(xs,ue),rt&&(v(u),v(q,!0),u=q),et&&!st&&J(!0),pt&&(i=lt==="move",l=lt==="leave",f=lt==="never",_(f,!0)),dt&&v(Hs,nt),jt&&v(Ts,yt),Ve){const Pt=de(ae.x,R.x,!0),Qt=de(ae.y,R.y,!1);v(As,!(Pt&&Qt))}xt&&(A(),h(),G(),v(Zn,!W.x,!0),v(Zn,!W.y,!1),v(Os,$&&!S))},{},z]},Ws=t=>{const e=At(),{P:n,R:o}=e,{elements:s}=n(),{host:c,padding:r,viewport:i,content:l}=s,f=Te(t),u=f?{}:t,{elements:a}=u,{host:w,padding:O,viewport:m,content:H}=a||{},b=f?t:u.target,L=Co(b),x=He(b,"textarea"),P=b.ownerDocument,k=P.documentElement,V=()=>P.defaultView||ft,z=I(Ps,[b]),X=I(zo,[b]),j=I(Wt,""),F=I(z,j,i),S=I(X,j,l),v=F(m),A=v===b,h=A&&L,G=!A&&S(H),_=!A&&v===G,D=h?k:v,J=x?z(j,c,w):b,tt=h?D:J,Y=!A&&X(j,r,O),p=!_&&G,B=[p,D,Y,tt].map(q=>Te(q)&&!Zt(q)&&q),N=q=>q&&bn(B,q),M=N(D)?b:D,Z={vt:b,ht:tt,ot:D,cn:Y,bt:p,gt:h?k:D,Kt:h?P:D,rn:L?k:M,Jt:P,wt:x,yt:L,Dt:f,nt:A,ln:V,St:q=>On(D,Mt,q),Ot:(q,rt)=>Qe(D,Mt,q,rt)},{vt:g,ht:E,cn:C,ot:d,bt:y}=Z,$=[()=>{Ot(E,[Rt,Ue]),Ot(g,Ue),L&&Ot(k,[Ue,Rt])}],T=x&&N(E);let R=x?g:tn([y,d,C,E,g].find(q=>q&&!N(q)));const W=h?g:y||d,ct=I(wt,$);return[Z,()=>{const q=V(),rt=en(),at=et=>{gt(Zt(et),tn(et)),kt(et)},bt=et=>Q(et,"focusin focusout focus blur",Lo,{I:!0,H:!1}),lt="tabindex",pt=wn(d,lt),st=bt(rt);return Tt(E,Rt,A?"":ps),Tt(C,an,""),Tt(d,Mt,""),Tt(y,Xn,""),A||(Tt(d,lt,pt||"-1"),L&&Tt(k,Kn,"")),T&&(zn(g,E),ot($,()=>{zn(E,g),kt(E)})),gt(W,R),gt(E,C),gt(C||E,!A&&d),gt(d,y),ot($,[st,()=>{const et=en(),ut=N(d),nt=ut&&et===d?g:et,dt=bt(nt);Ot(C,an),Ot(y,Xn),Ot(d,Mt),L&&Ot(k,Kn),pt?Tt(d,lt,pt):Ot(d,lt),N(y)&&at(y),ut&&at(d),N(C)&&at(C),rn(nt),dt()}]),o&&!A&&(xn(d,Mt,Io),ot($,I(Ot,d,Mt))),rn(!A&&L&&rt===g&&q.top===q?d:rt),st(),R=0,ct},ct]},Ks=({bt:t})=>({Gt:e,an:n,Tt:o})=>{const{xt:s}=e||{},{$t:c}=n;t&&(s||o)&&ce(t,{[Xt]:c&&"100%"})},Xs=({ht:t,cn:e,ot:n,nt:o},s)=>{const[c,r]=mt({i:os,o:Nn()},I(Nn,t,"padding",""));return({It:i,Gt:l,an:f,Tt:u})=>{let[a,w]=r(u);const{R:O}=At(),{ft:m,Ht:H,Ct:b}=l||{},{ct:L}=f,[x,P]=i("paddingAbsolute");(m||w||(u||H))&&([a,w]=c(u));const V=!o&&(P||b||w);if(V){const z=!x||!e&&!O,X=a.r+a.l,j=a.t+a.b,F={[mo]:z&&!L?-X:0,[go]:z?-j:0,[yo]:z&&L?-X:0,top:z?-a.t:0,right:z?L?-a.r:"auto":0,left:z?L?"auto":-a.l:0,[Kt]:z&&`calc(100% + ${X}px)`},S={[ao]:z?a.t:0,[uo]:z?a.r:0,[po]:z?a.b:0,[fo]:z?a.l:0};ce(e||n,F),ce(n,S),U(s,{cn:a,un:!z,rt:e?S:U({},F,S)})}return{_n:V}}},Ys=(t,e)=>{const n=At(),{ht:o,cn:s,ot:c,nt:r,Kt:i,gt:l,yt:f,Ot:u,ln:a}=t,{R:w}=n,O=f&&r,m=I(so,0),H=["display","direction","flexDirection","writingMode"],b={i:vo,o:{w:0,h:0}},L={i:we,o:{}},x=p=>{u(Do,!O&&p)},P=(p,B)=>{const N=ft.devicePixelRatio%1!==0?1:0,M={w:m(p.w-B.w),h:m(p.h-B.h)};return{w:M.w>N?M.w:0,h:M.h>N?M.h:0}},[k,V]=mt(b,I($n,c)),[z,X]=mt(b,I(on,c)),[j,F]=mt(b),[S]=mt(L),[v,A]=mt(b),[h]=mt(L),[G]=mt({i:(p,B)=>ke(p,B,H),o:{}},()=>us(c)?qt(c,H):{}),[_,D]=mt({i:(p,B)=>we(p.T,B.T)&&we(p.D,B.D),o:Po()},()=>{x(!0);const p=vt(l),B=u(hs,!0),N=Q(i,Yt,C=>{const d=vt(l);C.isTrusted&&d.x===p.x&&d.y===p.y&&Ho(C)},{I:!0,A:!0});Ct(l,{x:0,y:0}),B();const M=vt(l),Z=on(l);Ct(l,{x:Z.w,y:Z.h});const g=vt(l);Ct(l,{x:g.x-M.x<1&&-Z.w,y:g.y-M.y<1&&-Z.h});const E=vt(l);return Ct(l,p),vn(()=>N()),{T:M,D:E}}),J=ie(Vo),tt=(p,B)=>`${B?ys:ms}${ns(p)}`,Y=p=>{const B=M=>[Dt,Bt,Yt].map(Z=>tt(Z,M)),N=B(!0).concat(B()).join(" ");u(N),u(Lt(p).map(M=>tt(p[M],M==="x")).join(" "),!0)};return({It:p,Gt:B,an:N,Tt:M},{_n:Z})=>{const{ft:g,Ht:E,Ct:C,dt:d,zt:y}=B||{},$=J&&J.tt(t,e,N,n,p),{it:T,ut:R,_t:W}=$||{},[ct,it]=Bs(p,n),[q,rt]=p("overflow"),at=Le(q.x),bt=Le(q.y),lt=g||Z||E||C||y||it;let pt=V(M),st=X(M),et=F(M),ut=A(M);if(it&&w&&u(Io,!ct),lt){On(o,Rt,Oe)&&x(!0);const[Pn]=R?R():[],[pe]=pt=k(M),[ye]=st=z(M),me=Ao(c),ge=O&&as(a()),Zo={w:m(ye.w+pe.w),h:m(ye.h+pe.h)},Mn={w:m((ge?ge.w:me.w+m(me.w-ye.w))+pe.w),h:m((ge?ge.h:me.h+m(me.h-ye.h))+pe.h)};Pn&&Pn(),ut=v(Mn),et=j(P(Zo,Mn),M)}const[nt,dt]=ut,[yt,jt]=et,[ae,Be]=st,[Ne,Fe]=pt,[xt,Ve]=S({x:yt.w>0,y:yt.h>0}),ue=at&&bt&&(xt.x||xt.y)||at&&xt.x&&!xt.y||bt&&xt.y&&!xt.x,de=Z||C||y||Fe||Be||dt||jt||rt||it||lt,Pt=Ns(xt,q),[Qt,te]=h(Pt.G),[,fe]=G(M),Ln=C||d||fe||Ve||M,[Xo,Yo]=Ln?_(M):D();return de&&(te&&Y(Pt.G),W&&T&&ce(c,W(Pt,N,T(Pt,ae,Ne)))),x(!1),Qe(o,Rt,Oe,ue),Qe(s,an,Oe,ue),U(e,{G:Qt,Vt:{x:nt.w,y:nt.h},Rt:{x:yt.w,y:yt.h},en:xt,Pt:ds(Xo,yt)}),{nn:te,Zt:dt,tn:jt,sn:Yo||jt,dn:Ln}}},Zs=t=>{const[e,n,o]=Ws(t),s={cn:{t:0,r:0,b:0,l:0},un:!1,rt:{[mo]:0,[go]:0,[yo]:0,[ao]:0,[uo]:0,[po]:0,[fo]:0},Vt:{x:0,y:0},Rt:{x:0,y:0},G:{x:Bt,y:Bt},en:{x:!1,y:!1},Pt:Po()},{vt:c,gt:r,nt:i}=e,{R:l,M:f}=At(),u=!l&&(f.x||f.y),a=[Ks(e),Xs(e,s),Ys(e,s)];return[n,w=>{const O={},H=u&&vt(r);return K(a,b=>{U(O,b(w,O)||{})}),Ct(r,H),!i&&Ct(c,0),O},s,e,o]},Js=(t,e,n,o,s)=>{const c=Wn(e,{}),[r,i,l,f,u]=Zs(t),[a,w,O]=qs(f,l,c,P=>{x({},P)}),[m,H,,b]=Gs(t,e,O,l,f,s),L=P=>Lt(P).some(k=>!!P[k]),x=(P,k)=>{if(n())return!1;const{fn:V,Tt:z,At:X,pn:j}=P,F=V||{},S=!!z,v={It:Wn(e,F,S),fn:F,Tt:S};if(j)return H(v),!1;const A=k||w(U({},v,{At:X})),h=i(U({},v,{an:O,Gt:A}));H(U({},v,{Gt:A,Qt:h}));const G=L(A),_=L(h),D=G||_||!Sn(F)||S;return D&&o(P,{Gt:A,Qt:h}),D};return[()=>{const{rn:P,gt:k}=f,V=vt(P),z=[a(),r(),m()];return Ct(k,V),I(wt,z)},x,()=>({vn:O,hn:l}),{gn:f,bn:b},u]},zt=(t,e,n)=>{const{N:o}=At(),s=Te(t),c=s?t:t.target,r=_o(c);if(e&&!r){let i=!1;const l=[],f={},u=S=>{const v=bo(S),A=ie(zs);return A?A(v,!0):v},a=U({},o(),u(e)),[w,O,m]=ln(),[H,b,L]=ln(n),x=(S,v)=>{L(S,v),m(S,v)},[P,k,V,z,X]=Js(t,a,()=>i,({fn:S,Tt:v},{Gt:A,Qt:h})=>{const{ft:G,Ct:_,xt:D,Ht:J,Et:tt,dt:Y}=A,{Zt:p,tn:B,nn:N,sn:M}=h;x("updated",[F,{updateHints:{sizeChanged:!!G,directionChanged:!!_,heightIntrinsicChanged:!!D,overflowEdgeChanged:!!p,overflowAmountChanged:!!B,overflowStyleChanged:!!N,scrollCoordinatesChanged:!!M,contentMutation:!!J,hostMutation:!!tt,appear:!!Y},changedOptions:S||{},force:!!v}])},S=>x("scroll",[F,S])),j=S=>{Is(c),wt(l),i=!0,x("destroyed",[F,S]),O(),b()},F={options(S,v){if(S){const A=v?o():{},h=Mo(a,U(A,u(S)));Sn(h)||(U(a,h),k({fn:h}))}return U({},a)},on:H,off:(S,v)=>{S&&v&&b(S,v)},state(){const{vn:S,hn:v}=V(),{ct:A}=S,{Vt:h,Rt:G,G:_,en:D,cn:J,un:tt,Pt:Y}=v;return U({},{overflowEdge:h,overflowAmount:G,overflowStyle:_,hasOverflow:D,scrollCoordinates:{start:Y.T,end:Y.D},padding:J,paddingAbsolute:tt,directionRTL:A,destroyed:i})},elements(){const{vt:S,ht:v,cn:A,ot:h,bt:G,gt:_,Kt:D}=z.gn,{Ft:J,Wt:tt}=z.bn,Y=B=>{const{Mt:N,kt:M,Lt:Z}=B;return{scrollbar:Z,track:M,handle:N}},p=B=>{const{jt:N,Xt:M}=B,Z=Y(N[0]);return U({},Z,{clone:()=>{const g=Y(M());return k({pn:!0}),g}})};return U({},{target:S,host:v,padding:A||h,viewport:h,content:G||h,scrollOffsetElement:_,scrollEventElement:D,scrollbarHorizontal:p(J),scrollbarVertical:p(tt)})},update:S=>k({Tt:S,At:!0}),destroy:I(j,!1),plugin:S=>f[Lt(S)[0]]};return ot(l,[X]),Ds(c,F),Fo(Bo,zt,[F,w,f]),Ms(z.gn.yt,!s&&t.cancel)?(j(!0),F):(ot(l,P()),x("initialized",[F]),F.update(!0),F)}return r};zt.plugin=t=>{const e=$t(t),n=e?t:[t],o=n.map(s=>Fo(s,zt)[0]);return ks(n),e?o:o[0]};zt.valid=t=>{const e=t&&t.elements,n=St(e)&&e();return Ae(n)&&!!_o(n.target)};zt.env=()=>{const{k:t,M:e,R:n,V:o,B:s,F:c,P:r,U:i,N:l,q:f}=At();return U({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,scrollTimeline:o,staticDefaultInitialization:s,staticDefaultOptions:c,getDefaultInitialization:r,setDefaultInitialization:i,getDefaultOptions:l,setDefaultOptions:f})};const Qs=document.querySelector("#eventsSection"),eo=document.querySelector("#events"),tc=t=>{Qs.style.display="",eo.innerHTML="",Object.entries(t).forEach(([e,n])=>{const o=document.createElement("div");o.className=`event ${n.active?"active":""}`,o.textContent=`${e} (${n.count})`,eo.append(o)})},ec=()=>{let t=[];const e={},n={},o=r=>({active:t.includes(r),count:e[r]||0}),s=r=>{t=r,tc({initialized:o("initialized"),destroyed:o("destroyed"),updated:o("updated"),scroll:o("scroll")})};return r=>{const i=e[r];e[r]=typeof i=="number"?i+1:1,s(Array.from(new Set([...t,r]))),clearTimeout(n[r]),n[r]=setTimeout(()=>{const l=new Set(t);l.delete(r),s(Array.from(l))},500)}};let Ft,dn=!1,fn=!1,pn=!0;const be=ec(),Gt=document.querySelector("#target"),no=document.querySelector("#targetContent"),Se=document.querySelector("#impostor"),yn=document.querySelector("#scrollButton"),re=document.querySelector("#toggleContentButton"),le=document.querySelector("#toggleElementButton"),mn=document.querySelector("#toggleOverlayScrollbarsButton"),jo=()=>{dn?(no.style.display="none",re.textContent="Show Content"):(no.style.display="",re.textContent="Hide Content")},Uo=()=>{fn?(Gt.style.display="none",le.textContent="Show Element"):(Gt.style.display="",le.textContent="Hide Element")},Go=()=>{var t,e;pn?((t=Se.parentElement)==null||t.append(Gt),Se.remove(),yn.style.display="",re.style.display="",le.style.display="",mn.textContent="Destroy OverlayScrollbars",Ft=zt(Gt,{},{initialized:()=>be("initialized"),destroyed:()=>be("destroyed"),updated:()=>be("updated"),scroll:()=>be("scroll")})):(Ft==null||Ft.destroy(),(e=Gt.parentElement)==null||e.append(Se),Gt.remove(),Se.style.display="",yn.style.display="none",re.style.display="none",le.style.display="none",mn.textContent="Initialize OverlayScrollbars")};yn.addEventListener("click",()=>{if(!Ft)return;const{overflowAmount:t}=Ft.state(),{scrollOffsetElement:e}=Ft.elements(),{scrollLeft:n,scrollTop:o}=e;e.scrollTo({behavior:"smooth",left:Math.round((t.x-n)/t.x)*t.x,top:Math.round((t.y-o)/t.y)*t.y})});re.addEventListener("click",()=>{dn=!dn,jo()});le.addEventListener("click",()=>{fn=!fn,Uo()});mn.addEventListener("click",()=>{pn=!pn,Go()});jo();Uo();Go();let oe=null;const Wo=t=>zt({target:document.body,cancel:{body:t?!1:null}},{}).state().destroyed,nc=document.querySelector("#toggleBodyOverlayScrollbarsSection"),gn=document.querySelector("#toggleBodyOverlayScrollbarsButton"),Ko=()=>{oe===null&&(oe=!Wo()),nc.style.display="",gn.style.display="",gn.textContent=`${oe?"Destroy":"Initialize"} Body OverlayScrollbars`};gn.addEventListener("click",()=>{const t=zt(document.body);t?(t.destroy(),oe=!1):oe=!Wo(!0),Ko()});Ko();
