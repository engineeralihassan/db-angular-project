"use strict";(self.webpackChunkAngularHttpRequest=self.webpackChunkAngularHttpRequest||[]).push([[4904],{4904:(G,T,m)=>{m.r(T),m.d(T,{startInputShims:()=>Y});var A=m(5861),L=m(1473),v=m(1643);const y=new WeakMap,b=(t,n,e,o=0)=>{y.has(t)!==e&&(e?C(t,n,o):M(t,n))},I=t=>t===t.getRootNode().activeElement,C=(t,n,e)=>{const o=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),y.set(t,r);const s="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",n.style.transform=`translate3d(${s}px,${e}px,0) scale(0)`},M=(t,n)=>{const e=y.get(t);e&&(y.delete(t),e.remove()),t.style.pointerEvents="",n.style.transform=""},D="input, textarea, [no-blur], [contenteditable]",H=function(){var t=(0,A.Z)(function*(n,e,o,r,a){if(!o&&!r)return;const s=((t,n,e)=>((t,n,e,o)=>{const r=t.top,a=t.bottom,s=n.top,i=s+15,f=.75*Math.min(n.bottom,o-e)-a,S=i-r,d=Math.round(f<0?-f:S>0?-S:0),c=Math.min(d,r-s),g=Math.abs(c)/.3;return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,g)),scrollPadding:e,inputSafeY:4-(r-i)}})((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),n.getBoundingClientRect(),e,t.ownerDocument.defaultView.innerHeight))(n,o||r,a);if(o&&Math.abs(s.scrollAmount)<4)e.focus();else if(b(n,e,!0,s.inputSafeY),e.focus(),(0,v.r)(()=>n.click()),"undefined"!=typeof window){let u;const i=function(){var f=(0,A.Z)(function*(){void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",i),o&&(yield(0,L.b)(o,0,s.scrollAmount,s.scrollDuration)),b(n,e,!1,s.inputSafeY),e.focus()});return function(){return f.apply(this,arguments)}}(),l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",i)};if(o){const f=yield(0,L.g)(o);if(s.scrollAmount>f.scrollHeight-f.clientHeight-f.scrollTop)return"password"===e.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",i),void(u=setTimeout(i,1e3))}i()}});return function(e,o,r,a,s){return t.apply(this,arguments)}}(),P="$ionPaddingTimer",p=(t,n)=>{var e,o;if("INPUT"!==t.tagName||t.parentElement&&"ION-INPUT"===t.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(e=t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===o?void 0:o.tagName))return;const r=(0,L.f)(t);if(null===r)return;const a=r[P];a&&clearTimeout(a),n>0?r.style.setProperty("--keyboard-offset",`${n}px`):r[P]=setTimeout(()=>{r.style.setProperty("--keyboard-offset","0px")},120)},Y=t=>{const n=document,e=t.getNumber("keyboardHeight",290),o=t.getBoolean("scrollAssist",!0),r=t.getBoolean("hideCaretOnScroll",!0),a=t.getBoolean("inputBlurring",!0),s=t.getBoolean("scrollPadding",!0),u=Array.from(n.querySelectorAll("ion-input, ion-textarea")),i=new WeakMap,l=new WeakMap,f=function(){var d=(0,A.Z)(function*(c){yield new Promise(_=>(0,v.c)(c,_));const w=c.shadowRoot||c,g=w.querySelector("input")||w.querySelector("textarea"),h=(0,L.f)(c),B=h?null:c.closest("ion-footer");if(g){if(h&&r&&!i.has(c)){const _=((t,n,e)=>{if(!e||!n)return()=>{};const o=u=>{I(n)&&b(t,n,u)},r=()=>b(t,n,!1),a=()=>o(!0),s=()=>o(!1);return(0,v.a)(e,"ionScrollStart",a),(0,v.a)(e,"ionScrollEnd",s),n.addEventListener("blur",r),()=>{(0,v.b)(e,"ionScrollStart",a),(0,v.b)(e,"ionScrollEnd",s),n.addEventListener("ionBlur",r)}})(c,g,h);i.set(c,_)}if((h||B)&&o&&!l.has(c)){const _=((t,n,e,o,r)=>{let a;const s=i=>{a=(0,v.p)(i)},u=i=>{if(!a)return;const l=(0,v.p)(i);!((t,n,e)=>{if(n&&e){const o=n.x-e.x,r=n.y-e.y;return o*o+r*r>t*t}return!1})(6,a,l)&&!I(n)&&(i.stopPropagation(),H(t,n,e,o,r))};return t.addEventListener("touchstart",s,!0),t.addEventListener("touchend",u,!0),()=>{t.removeEventListener("touchstart",s,!0),t.removeEventListener("touchend",u,!0)}})(c,g,h,B,e);l.set(c,_)}}});return function(w){return d.apply(this,arguments)}}();a&&(()=>{let t=!0,n=!1;const e=document;(0,v.a)(e,"ionScrollStart",()=>{n=!0}),e.addEventListener("focusin",()=>{t=!0},!0),e.addEventListener("touchend",s=>{if(n)return void(n=!1);const u=e.activeElement;if(!u||u.matches(D))return;const i=s.target;i!==u&&(i.matches(D)||i.closest(D)||(t=!1,setTimeout(()=>{t||u.blur()},50)))},!1)})(),s&&(t=>{const n=document;n.addEventListener("focusin",r=>{p(r.target,t)}),n.addEventListener("focusout",r=>{p(r.target,0)})})(e);for(const d of u)f(d);n.addEventListener("ionInputDidLoad",d=>{f(d.detail)}),n.addEventListener("ionInputDidUnload",d=>{(d=>{if(r){const c=i.get(d);c&&c(),i.delete(d)}if(o){const c=l.get(d);c&&c(),l.delete(d)}})(d.detail)})}}}]);