"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7543:(M,w,d)=>{d.d(w,{c:()=>l});var c=d(1308),g=d(7864),a=d(1911);const l=(s,n)=>{let e,t;const i=(u,p,f)=>{if(typeof document>"u")return;const _=document.elementFromPoint(u,p);_&&n(_)?_!==e&&(h(),r(_,f)):h()},r=(u,p)=>{e=u,t||(t=e);const f=e;(0,c.c)(()=>f.classList.add("ion-activated")),p()},h=(u=!1)=>{if(!e)return;const p=e;(0,c.c)(()=>p.classList.remove("ion-activated")),u&&t!==e&&e.click(),e=void 0};return(0,a.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>i(u.currentX,u.currentY,g.a),onMove:u=>i(u.currentX,u.currentY,g.b),onEnd:()=>{h(!0),(0,g.h)(),t=void 0}})}},2225:(M,w,d)=>{d.d(w,{g:()=>c});const c=(n,e,t,i,r)=>a(n[1],e[1],t[1],i[1],r).map(h=>g(n[0],e[0],t[0],i[0],h)),g=(n,e,t,i,r)=>r*(3*e*Math.pow(r-1,2)+r*(-3*t*r+3*t+i*r))-n*Math.pow(r-1,3),a=(n,e,t,i,r)=>s((i-=r)-3*(t-=r)+3*(e-=r)-(n-=r),3*t-6*e+3*n,3*e-3*n,n).filter(u=>u>=0&&u<=1),s=(n,e,t,i)=>{if(0===n)return((n,e,t)=>{const i=e*e-4*n*t;return i<0?[]:[(-e+Math.sqrt(i))/(2*n),(-e-Math.sqrt(i))/(2*n)]})(e,t,i);const r=(3*(t/=n)-(e/=n)*e)/3,h=(2*e*e*e-9*e*t+27*(i/=n))/27;if(0===r)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-r),-Math.sqrt(-r)];const u=Math.pow(h/2,2)+Math.pow(r/3,3);if(0===u)return[Math.pow(h/2,.5)-e/3];if(u>0)return[Math.pow(-h/2+Math.sqrt(u),1/3)-Math.pow(h/2+Math.sqrt(u),1/3)-e/3];const p=Math.sqrt(Math.pow(-r/3,3)),f=Math.acos(-h/(2*Math.sqrt(Math.pow(-r/3,3)))),_=2*Math.pow(p,1/3);return[_*Math.cos(f/3)-e/3,_*Math.cos((f+2*Math.PI)/3)-e/3,_*Math.cos((f+4*Math.PI)/3)-e/3]}},5062:(M,w,d)=>{d.d(w,{i:()=>c});const c=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5106:(M,w,d)=>{d.r(w),d.d(w,{startFocusVisible:()=>l});const c="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,i=s||document.body,r=E=>{n.forEach(m=>m.classList.remove(c)),E.forEach(m=>m.classList.add(c)),n=E},h=()=>{e=!1,r([])},u=E=>{e=a.includes(E.key),e||r([])},p=E=>{if(e&&void 0!==E.composedPath){const m=E.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));r(m)}},f=()=>{t.activeElement===i&&r([])};return t.addEventListener("keydown",u),t.addEventListener("focusin",p),t.addEventListener("focusout",f),t.addEventListener("touchstart",h),t.addEventListener("mousedown",h),{destroy:()=>{t.removeEventListener("keydown",u),t.removeEventListener("focusin",p),t.removeEventListener("focusout",f),t.removeEventListener("touchstart",h),t.removeEventListener("mousedown",h)},setFocus:r}}},7040:(M,w,d)=>{d.d(w,{C:()=>s,a:()=>a,d:()=>l});var c=d(5861),g=d(5730);const a=function(){var n=(0,c.Z)(function*(e,t,i,r,h,u){var p;if(e)return e.attachViewToDom(t,i,h,r);if(!(u||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof i?null===(p=t.ownerDocument)||void 0===p?void 0:p.createElement(i):i;return r&&r.forEach(_=>f.classList.add(_)),h&&Object.assign(f,h),t.appendChild(f),yield new Promise(_=>(0,g.c)(f,_)),f});return function(t,i,r,h,u,p){return n.apply(this,arguments)}}(),l=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},s=()=>{let n,e;return{attachViewToDom:function(){var r=(0,c.Z)(function*(h,u,p={},f=[]){var _,E;if(n=h,u){const v="string"==typeof u?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(u):u;f.forEach(o=>v.classList.add(o)),Object.assign(v,p),n.appendChild(v),yield new Promise(o=>(0,g.c)(v,o))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const o=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");o.classList.add("ion-delegate-host"),f.forEach(y=>o.classList.add(y)),o.append(...n.children),n.appendChild(o)}const m=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),n.parentNode.insertBefore(e,n),m.appendChild(n),n});return function(u,p){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&e&&(e.parentNode.insertBefore(n,e),e.remove()),Promise.resolve())}}},7864:(M,w,d)=>{d.d(w,{a:()=>l,b:()=>s,c:()=>a,d:()=>e,h:()=>n});const c={getEngine(){var t;const i=window;return i.TapticEngine||(null===(t=i.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var t;const i=window;return!!this.getEngine()&&("web"!==(null===(t=i.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:r})},notification(t){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>c.available(),a=()=>{g()&&c.selection()},l=()=>{g()&&c.selectionStart()},s=()=>{g()&&c.selectionChanged()},n=()=>{g()&&c.selectionEnd()},e=t=>{g()&&c.impact(t)}},6642:(M,w,d)=>{d.d(w,{I:()=>s,a:()=>r,b:()=>n,c:()=>p,d:()=>_,f:()=>h,g:()=>i,i:()=>t,p:()=>f,r:()=>E,s:()=>u});var c=d(5861),g=d(5730),a=d(4147);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=m=>"ION-CONTENT"===m.tagName,i=function(){var m=(0,c.Z)(function*(v){return t(v)?(yield new Promise(o=>(0,g.c)(v,o)),v.getScrollElement()):v});return function(o){return m.apply(this,arguments)}}(),r=m=>m.querySelector(n)||m.querySelector(e),h=m=>m.closest(e),u=(m,v)=>t(m)?m.scrollToTop(v):Promise.resolve(m.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),p=(m,v,o,y)=>t(m)?m.scrollByPoint(v,o,y):Promise.resolve(m.scrollBy({top:o,left:v,behavior:y>0?"smooth":"auto"})),f=m=>(0,a.a)(m,s),_=m=>{if(t(m)){const o=m.scrollY;return m.scrollY=!1,o}return m.style.setProperty("overflow","hidden"),!0},E=(m,v)=>{t(m)?m.scrollY=v:m.style.removeProperty("overflow")}},2357:(M,w,d)=>{d.d(w,{a:()=>c,b:()=>u,c:()=>e,d:()=>p,e:()=>D,f:()=>n,g:()=>f,h:()=>a,i:()=>g,j:()=>o,k:()=>y,l:()=>t,m:()=>r,n:()=>_,o:()=>i,p:()=>s,q:()=>l,r:()=>v,s:()=>C,t:()=>h,u:()=>E,v:()=>m});const c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(M,w,d)=>{d.d(w,{s:()=>c});const c=t=>{try{if(t instanceof e)return t.value;if(!l()||"string"!=typeof t||""===t)return t;const i=document.createDocumentFragment(),r=document.createElement("div");i.appendChild(r),r.innerHTML=t,n.forEach(f=>{const _=i.querySelectorAll(f);for(let E=_.length-1;E>=0;E--){const m=_[E];m.parentNode?m.parentNode.removeChild(m):i.removeChild(m);const v=a(m);for(let o=0;o<v.length;o++)g(v[o])}});const h=a(i);for(let f=0;f<h.length;f++)g(h[f]);const u=document.createElement("div");u.appendChild(i);const p=u.querySelector("div");return null!==p?p.innerHTML:u.innerHTML}catch(i){return console.error(i),""}},g=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let r=t.attributes.length-1;r>=0;r--){const h=t.attributes.item(r),u=h.name;if(!s.includes(u.toLowerCase())){t.removeAttribute(u);continue}const p=h.value;null!=p&&p.toLowerCase().includes("javascript:")&&t.removeAttribute(u)}const i=a(t);for(let r=0;r<i.length;r++)g(i[r])},a=t=>null!=t.children?t.children:t.childNodes,l=()=>{var t;const i=window,r=null===(t=null==i?void 0:i.Ionic)||void 0===t?void 0:t.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},s=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class e{constructor(i){this.value=i}}},1316:(M,w,d)=>{d.r(w),d.d(w,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>v,keyboardDidClose:()=>f,keyboardDidOpen:()=>u,keyboardDidResize:()=>p,resetKeyboardAssist:()=>e,setKeyboardClose:()=>h,setKeyboardOpen:()=>r,startKeyboardAssist:()=>t,trackViewportChanges:()=>m});const c="ionKeyboardDidShow",g="ionKeyboardDidHide";let l={},s={},n=!1;const e=()=>{l={},s={},n=!1},t=o=>{i(o),o.visualViewport&&(s=v(o.visualViewport),o.visualViewport.onresize=()=>{m(o),u()||p(o)?r(o):f(o)&&h(o)})},i=o=>{o.addEventListener("keyboardDidShow",y=>r(o,y)),o.addEventListener("keyboardDidHide",()=>h(o))},r=(o,y)=>{_(o,y),n=!0},h=o=>{E(o),n=!1},u=()=>!n&&l.width===s.width&&(l.height-s.height)*s.scale>150,p=o=>n&&!f(o),f=o=>n&&s.height===o.innerHeight,_=(o,y)=>{const D=new CustomEvent(c,{detail:{keyboardHeight:y?y.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(D)},E=o=>{const y=new CustomEvent(g);o.dispatchEvent(y)},m=o=>{l=Object.assign({},s),s=v(o.visualViewport)},v=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(M,w,d)=>{d.d(w,{c:()=>g});var c=d(3457);const g=a=>{let l,s,n;const e=()=>{l=()=>{n=!0,a&&a(!0)},s=()=>{n=!1,a&&a(!1)},null==c.w||c.w.addEventListener("keyboardWillShow",l),null==c.w||c.w.addEventListener("keyboardWillHide",s)};return e(),{init:e,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",l),null==c.w||c.w.removeEventListener("keyboardWillHide",s),l=s=void 0},isKeyboardVisible:()=>n}}},7741:(M,w,d)=>{d.d(w,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(a,l,s)=>{const n=a*l/s-a+"ms",e=2*Math.PI*l/s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(a,l,s)=>{const n=l/s,e=a*n-a+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,l)=>({r:6,style:{left:9-9*l+"px","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,l,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*l+(l<s/2?180:-180)}deg)`,"animation-delay":a*l/s-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,l,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*l+(l<s/2?180:-180)}deg)`,"animation-delay":a*l/s-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,l,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":a*l/s-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,l,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":a*l/s-a+"ms"}})}}},1959:(M,w,d)=>{d.r(w),d.d(w,{createSwipeBackGesture:()=>s});var c=d(5730),g=d(5062),a=d(1911);d(4349);const s=(n,e,t,i,r)=>{const h=n.ownerDocument.defaultView,u=(0,g.i)(n),f=o=>u?-o.deltaX:o.deltaX;return(0,a.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(o=>{const{startX:C}=o;return u?C>=h.innerWidth-50:C<=50})(o)&&e(),onStart:t,onMove:o=>{const C=f(o)/h.innerWidth;i(C)},onEnd:o=>{const y=f(o),C=h.innerWidth,D=y/C,O=(o=>u?-o.velocityX:o.velocityX)(o),x=O>=0&&(O>.2||y>C/2),L=(x?1-D:D)*C;let P=0;if(L>5){const k=L/Math.abs(O);P=Math.min(k,540)}r(x,D<=0?.01:(0,c.l)(0,D,.9999),P)}})}},2766:(M,w,d)=>{d.d(w,{e:()=>s});var c=d(8274),g=d(6895),a=d(5035);const l=function(n,e){return{top:n,center:e}};class s{constructor(){this.infoPosition="center"}ngOnInit(){}}s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=c.Xpm({type:s,selectors:[["app-empty-grid"]],inputs:{message:"message",iconFileName:"iconFileName",infoPosition:"infoPosition"},decls:6,vars:6,consts:[[1,"empty-cart-container"],[3,"ngClass"],[1,"empty-cart-icon",3,"icon"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-grid",0)(1,"ion-row")(2,"ion-col",1),c._UZ(3,"ion-icon",2),c.TgZ(4,"ion-text"),c._uU(5),c.qZA()()()()),2&e&&(c.xp6(2),c.Q6J("ngClass",c.WLB(3,l,"top"===t.infoPosition,"center"===t.infoPosition)),c.xp6(1),c.Q6J("icon","/assets/icon/"+t.iconFileName+".svg"),c.xp6(2),c.Oqu(t.message))},dependencies:[g.mk,a.wI,a.jY,a.gu,a.Nd,a.yW],styles:[".empty-cart-container[_ngcontent-%COMP%]{height:100%}.empty-cart-container[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{height:100%}.empty-cart-container[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.empty-cart-container[_ngcontent-%COMP%]   ion-col.center[_ngcontent-%COMP%]{justify-content:center}.empty-cart-container[_ngcontent-%COMP%]   ion-col.top[_ngcontent-%COMP%]{justify-content:start}.empty-cart-icon[_ngcontent-%COMP%]{font-size:110px;stroke:var(--ion-color-medium)}"]})},5789:(M,w,d)=>{d.d(w,{N:()=>a});var c=d(1135),g=d(8274);class a{constructor(){this._productsInCart=new c.X([]),this.productsInCart$=this._productsInCart.asObservable()}addProductToCart(s){const n=this._productsInCart.getValue();this._productsInCart.next([...n,s])}}a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},7606:(M,w,d)=>{d.d(w,{K:()=>a});var c=d(8249),g=d(8274);class a{constructor(){}getAvailableTypesInCategory(s){return(0,c.PL)(s)}getProductTypeById(s){return(0,c.RW)(s)}}a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=g.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}}]);