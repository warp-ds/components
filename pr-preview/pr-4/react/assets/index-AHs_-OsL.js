import{r as ue,R as m}from"./index-DmM0KDA7.js";var L={},N={},k;function fe(){return k||(k=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.errorMessages=t.ErrorType=void 0;var e;(function(r){r.MalformedUnicode="MALFORMED_UNICODE",r.MalformedHexadecimal="MALFORMED_HEXADECIMAL",r.CodePointLimit="CODE_POINT_LIMIT",r.OctalDeprecation="OCTAL_DEPRECATION",r.EndOfString="END_OF_STRING"})(e=t.ErrorType||(t.ErrorType={})),t.errorMessages=new Map([[e.MalformedUnicode,"malformed Unicode character escape sequence"],[e.MalformedHexadecimal,"malformed hexadecimal character escape sequence"],[e.CodePointLimit,"Unicode codepoint must not be greater than 0x10FFFF in escape sequence"],[e.OctalDeprecation,'"0"-prefixed octal literals and octal escape sequences are deprecated; for octal literals use the "0o" prefix instead'],[e.EndOfString,"malformed escape sequence at end of string"]])}(N)),N}var V;function de(){return V||(V=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.unraw=t.errorMessages=t.ErrorType=void 0;const e=fe();Object.defineProperty(t,"ErrorType",{enumerable:!0,get:function(){return e.ErrorType}}),Object.defineProperty(t,"errorMessages",{enumerable:!0,get:function(){return e.errorMessages}});function r(l){return!l.match(/[^a-f0-9]/i)?parseInt(l,16):NaN}function n(l,f,d){const u=r(l);if(Number.isNaN(u)||d!==void 0&&d!==l.length)throw new SyntaxError(e.errorMessages.get(f));return u}function i(l){const f=n(l,e.ErrorType.MalformedHexadecimal,2);return String.fromCharCode(f)}function o(l,f){const d=n(l,e.ErrorType.MalformedUnicode,4);if(f!==void 0){const u=n(f,e.ErrorType.MalformedUnicode,4);return String.fromCharCode(d,u)}return String.fromCharCode(d)}function s(l){return l.charAt(0)==="{"&&l.charAt(l.length-1)==="}"}function a(l){if(!s(l))throw new SyntaxError(e.errorMessages.get(e.ErrorType.MalformedUnicode));const f=l.slice(1,-1),d=n(f,e.ErrorType.MalformedUnicode);try{return String.fromCodePoint(d)}catch(u){throw u instanceof RangeError?new SyntaxError(e.errorMessages.get(e.ErrorType.CodePointLimit)):u}}function c(l,f=!1){if(f)throw new SyntaxError(e.errorMessages.get(e.ErrorType.OctalDeprecation));const d=parseInt(l,8);return String.fromCharCode(d)}const h=new Map([["b","\b"],["f","\f"],["n",`
`],["r","\r"],["t","	"],["v","\v"],["0","\0"]]);function p(l){return h.get(l)||l}const _=/\\(?:(\\)|x([\s\S]{0,2})|u(\{[^}]*\}?)|u([\s\S]{4})\\u([^{][\s\S]{0,3})|u([\s\S]{0,4})|([0-3]?[0-7]{1,2})|([\s\S])|$)/g;function w(l,f=!1){return l.replace(_,function(d,u,v,O,M,D,g,I,G){if(u!==void 0)return"\\";if(v!==void 0)return i(v);if(O!==void 0)return a(O);if(M!==void 0)return o(M,D);if(g!==void 0)return o(g);if(I==="0")return"\0";if(I!==void 0)return c(I,!f);if(G!==void 0)return p(G);throw new SyntaxError(e.errorMessages.get(e.ErrorType.EndOfString))})}t.unraw=w,t.default=w}(L)),L}var he=de();const y=t=>typeof t=="string",pe=t=>typeof t=="function",B=new Map,Q="en";function U(t){return[...Array.isArray(t)?t:[t],Q]}function q(t,e,r){const n=U(t);r||(r="default");let i;if(typeof r=="string")switch(i={day:"numeric",month:"short",year:"numeric"},r){case"full":i.weekday="long";case"long":i.month="long";break;case"short":i.month="numeric";break}else i=r;return C(()=>T("date",n,r),()=>new Intl.DateTimeFormat(n,i)).format(y(e)?new Date(e):e)}function ve(t,e,r){let n;if(r||(r="default"),typeof r=="string")switch(n={second:"numeric",minute:"numeric",hour:"numeric"},r){case"full":case"long":n.timeZoneName="short";break;case"short":delete n.second}else n=r;return q(t,e,n)}function j(t,e,r){const n=U(t);return C(()=>T("number",n,r),()=>new Intl.NumberFormat(n,r)).format(e)}function J(t,e,r,{offset:n=0,...i}){const o=U(t),s=e?C(()=>T("plural-ordinal",o),()=>new Intl.PluralRules(o,{type:"ordinal"})):C(()=>T("plural-cardinal",o),()=>new Intl.PluralRules(o,{type:"cardinal"}));return i[r]??i[s.select(r-n)]??i.other}function C(t,e){const r=t();let n=B.get(r);return n||(n=e(),B.set(r,n)),n}function T(t,e,r){const n=e.join("-");return`${t}-${n}-${JSON.stringify(r)}`}const ee=/\\u[a-fA-F0-9]{4}|\\x[a-fA-F0-9]{2}/,te="%__lingui_octothorpe__%",me=(t,e,r={})=>{const n=e||t,i=s=>typeof s=="object"?s:r[s],o=(s,a)=>{const c=Object.keys(r).length?i("number"):void 0,h=j(n,s,c);return a.replace(new RegExp(te,"g"),h)};return{plural:(s,a)=>{const{offset:c=0}=a,h=J(n,!1,s,a);return o(s-c,h)},selectordinal:(s,a)=>{const{offset:c=0}=a,h=J(n,!0,s,a);return o(s-c,h)},select:be,number:(s,a)=>j(n,s,i(a)||{style:a}),date:(s,a)=>q(n,s,i(a)||a),time:(s,a)=>ve(n,s,i(a)||a)}},be=(t,e)=>e[t]??e.other;function _e(t,e,r){return(n={},i)=>{const o=me(e,r,i),s=(c,h=!1)=>Array.isArray(c)?c.reduce((p,_)=>{if(_==="#"&&h)return p+te;if(y(_))return p+_;const[w,l,f]=_;let d={};l==="plural"||l==="selectordinal"||l==="select"?Object.entries(f).forEach(([v,O])=>{d[v]=s(O,l==="plural"||l==="selectordinal")}):d=f;let u;if(l){const v=o[l];u=v(n[w],d)}else u=n[w];return u==null?p:p+u},""):c,a=s(t);return y(a)&&ee.test(a)?he.unraw(a):y(a)?a:a?String(a):""}}var ge=Object.defineProperty,ye=(t,e,r)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,we=(t,e,r)=>(ye(t,e+"",r),r);class Oe{constructor(){we(this,"_events",{})}on(e,r){var n;return(n=this._events)[e]??(n[e]=[]),this._events[e].push(r),()=>this.removeListener(e,r)}removeListener(e,r){const n=this._getListeners(e);if(!n)return;const i=n.indexOf(r);~i&&n.splice(i,1)}emit(e,...r){const n=this._getListeners(e);n&&n.map(i=>i.apply(this,r))}_getListeners(e){const r=this._events[e];return Array.isArray(r)?r:!1}}var Ee=Object.defineProperty,xe=(t,e,r)=>e in t?Ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,E=(t,e,r)=>(xe(t,typeof e!="symbol"?e+"":e,r),r);class Me extends Oe{constructor(e){super(),E(this,"_locale",""),E(this,"_locales"),E(this,"_localeData",{}),E(this,"_messages",{}),E(this,"_missing"),E(this,"_messageCompiler"),E(this,"t",this._.bind(this)),e.missing!=null&&(this._missing=e.missing),e.messages!=null&&this.load(e.messages),e.localeData!=null&&this.loadLocaleData(e.localeData),(typeof e.locale=="string"||e.locales)&&this.activate(e.locale??Q,e.locales)}get locale(){return this._locale}get locales(){return this._locales}get messages(){return this._messages[this._locale]??{}}get localeData(){return this._localeData[this._locale]??{}}_loadLocaleData(e,r){const n=this._localeData[e];n?Object.assign(n,r):this._localeData[e]=r}setMessagesCompiler(e){return this._messageCompiler=e,this}loadLocaleData(e,r){typeof e=="string"?this._loadLocaleData(e,r):Object.keys(e).forEach(n=>this._loadLocaleData(n,e[n])),this.emit("change")}_load(e,r){const n=this._messages[e];n?Object.assign(n,r):this._messages[e]=r}load(e,r){typeof e=="string"&&typeof r=="object"?this._load(e,r):Object.entries(e).forEach(([n,i])=>this._load(n,i)),this.emit("change")}loadAndActivate({locale:e,locales:r,messages:n}){this._locale=e,this._locales=r||void 0,this._messages[this._locale]=n,this.emit("change")}activate(e,r){this._locale=e,this._locales=r,this.emit("change")}_(e,r,n){if(!this.locale)throw new Error("Lingui: Attempted to call a translation function without setting a locale.\nMake sure to call `i18n.activate(locale)` before using Lingui functions.\nThis issue may also occur due to a race condition in your initialization logic.");let i=n==null?void 0:n.message;e||(e=""),y(e)||(r=e.values||r,i=e.message,e=e.id);const o=this.messages[e],s=o===void 0,a=this._missing;if(a&&s)return pe(a)?a(this._locale,e):a;s&&this.emit("missing",{id:e,locale:this._locale});let c=o||i||e;return y(c)&&(this._messageCompiler?c=this._messageCompiler(c):console.warn(`Uncompiled message detected! Message:

> ${c}

That means you use raw catalog or your catalog doesn't have a translation for the message and fallback was used.
ICU features such as interpolation and plurals will not work properly for that message. 

Please compile your catalog first. 
`)),y(c)&&ee.test(c)?JSON.parse(`"${c}"`):y(c)?c:_e(c,this._locale,this._locales)(r,n==null?void 0:n.formats)}date(e,r){return q(this._locales||this._locale,e,r)}number(e,r){return j(this._locales||this._locale,e,r)}}function Ce(t={}){return new Me(t)}const z=Ce();var Te={},Se=Object.defineProperty,Re=Object.defineProperties,Ae=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,W=(t,e,r)=>e in t?Se(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Pe=(t,e)=>{for(var r in e||(e={}))re.call(e,r)&&W(t,r,e[r]);if(S)for(var r of S(e))ne.call(e,r)&&W(t,r,e[r]);return t},De=(t,e)=>Re(t,Ae(e)),Ie=(t,e)=>{var r={};for(var n in t)re.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&S)for(var n of S(t))e.indexOf(n)<0&&ne.call(t,n)&&(r[n]=t[n]);return r},$=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return t.reduce(function(r,n){return r.concat(typeof n=="string"?n:Array.isArray(n)?$.apply(void 0,n):typeof n=="object"&&n?Object.keys(n).map(function(i){return n[i]?i:""}):"")},[]).join(" ")},b={wrapper:"relative",base:"block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current",default:"border-1 s-text s-bg s-border hover:s-border-hover active:s-border-selected",disabled:"border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none",invalid:"border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!",readOnly:"pl-0 bg-transparent pointer-events-none",placeholder:"placeholder:s-text-placeholder",suffix:"pr-40",prefix:"pl-[var(--w-prefix-width,_40px)]"},K={base:"antialiased block relative text-s font-bold pb-4 cursor-pointer s-text",optional:"pl-8 font-normal text-s s-text-subtle"},F={base:"text-xs mt-4 block",color:"s-text-subtle",colorInvalid:"s-text-negative"};function Le(t){const e=$([F.base,t.isInvalid?F.colorInvalid:F.color]);return m.createElement("div",{id:t.helpId,className:e},t.helpText)}var Ne=["en","nb","fi","da","sv"],ie="en",X=t=>Ne.find(e=>t===e||t.toLowerCase().includes(e))||ie;function Fe(){if(typeof window>"u"){const t=Te.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return X(t)}try{const t=document.documentElement.lang;return X(t)}catch(t){return console.warn("could not detect locale, falling back to source locale",t),ie}}var je=(t,e,r,n,i,o)=>t==="nb"?r:t==="fi"?n:t==="da"?i:t==="sv"?o:e,ze=(t,e,r,n,i)=>{const o=Fe(),s=je(o,t,e,r,n,i);z.load(o,s),z.activate(o)},se=function(){if(typeof Map<"u")return Map;function t(e,r){var n=-1;return e.some(function(i,o){return i[0]===r?(n=o,!0):!1}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(r){var n=t(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(r,n){var i=t(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},e.prototype.delete=function(r){var n=this.__entries__,i=t(n,r);~i&&n.splice(i,1)},e.prototype.has=function(r){return!!~t(this.__entries__,r)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];r.call(n,s[1],s[0])}},e}()}(),H=typeof window<"u"&&typeof document<"u"&&window.document===document,R=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),He=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(R):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),Ue=2;function qe(t,e){var r=!1,n=!1,i=0;function o(){r&&(r=!1,t()),n&&a()}function s(){He(o)}function a(){var c=Date.now();if(r){if(c-i<Ue)return;n=!0}else r=!0,n=!1,setTimeout(s,e);i=c}return a}var $e=20,Ge=["top","right","bottom","left","width","height","size","weight"],ke=typeof MutationObserver<"u",Ve=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=qe(this.refresh.bind(this),$e)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var r=this.observers_,n=r.indexOf(e);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return e.forEach(function(r){return r.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!H||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),ke?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!H||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var r=e.propertyName,n=r===void 0?"":r,i=Ge.some(function(o){return!!~n.indexOf(o)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),oe=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},x=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||R},ae=P(0,0,0,0);function A(t){return parseFloat(t)||0}function Y(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce(function(n,i){var o=t["border-"+i+"-width"];return n+A(o)},0)}function Be(t){for(var e=["top","right","bottom","left"],r={},n=0,i=e;n<i.length;n++){var o=i[n],s=t["padding-"+o];r[o]=A(s)}return r}function Je(t){var e=t.getBBox();return P(0,0,e.width,e.height)}function We(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return ae;var n=x(t).getComputedStyle(t),i=Be(n),o=i.left+i.right,s=i.top+i.bottom,a=A(n.width),c=A(n.height);if(n.boxSizing==="border-box"&&(Math.round(a+o)!==e&&(a-=Y(n,"left","right")+o),Math.round(c+s)!==r&&(c-=Y(n,"top","bottom")+s)),!Xe(t)){var h=Math.round(a+o)-e,p=Math.round(c+s)-r;Math.abs(h)!==1&&(a-=h),Math.abs(p)!==1&&(c-=p)}return P(i.left,i.top,a,c)}var Ke=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof x(t).SVGGraphicsElement}:function(t){return t instanceof x(t).SVGElement&&typeof t.getBBox=="function"}}();function Xe(t){return t===x(t).document.documentElement}function Ye(t){return H?Ke(t)?Je(t):We(t):ae}function Ze(t){var e=t.x,r=t.y,n=t.width,i=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return oe(s,{x:e,y:r,width:n,height:i,top:r,right:e+n,bottom:i+r,left:e}),s}function P(t,e,r,n){return{x:t,y:e,width:r,height:n}}var Qe=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=P(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=Ye(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),et=function(){function t(e,r){var n=Ze(r);oe(this,{target:e,contentRect:n})}return t}(),tt=function(){function t(e,r,n){if(this.activeObservations_=[],this.observations_=new se,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=r,this.callbackCtx_=n}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof x(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)||(r.set(e,new Qe(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof x(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)&&(r.delete(e),r.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&e.activeObservations_.push(r)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new et(n.target,n.broadcastRect())});this.callback_.call(e,r,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),ce=typeof WeakMap<"u"?new WeakMap:new se,le=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=Ve.getInstance(),n=new tt(e,r,this);ce.set(this,n)}return t}();["observe","unobserve","disconnect"].forEach(function(t){le.prototype[t]=function(){var e;return(e=ce.get(this))[t].apply(e,arguments)}});(function(){return typeof R.ResizeObserver<"u"?R.ResizeObserver:le})();var Z=m.useId,rt=typeof Z=="function"?()=>Z().replace(/:/g,""):()=>m.useState(it())[0],nt=t=>{const e=rt();return t||e};function it(){return Date.now().toString(36)+Math.random().toString(36).slice(2,5)}var st=JSON.parse('{"textfield.label.optional":["(valgfrit)"]}'),ot=JSON.parse('{"textfield.label.optional":["(optional)"]}'),at=JSON.parse('{"textfield.label.optional":["(vapaaehtoinen)"]}'),ct=JSON.parse('{"textfield.label.optional":["(valgfritt)"]}'),lt=JSON.parse('{"textfield.label.optional":["(valfritt)"]}'),ft=ue.forwardRef((t,e)=>{const r=t,{className:n,disabled:i,id:o,children:s,invalid:a,helpText:c,label:h,readOnly:p,type:_="text",style:w,optional:l}=r,f=Ie(r,["className","disabled","id","children","invalid","helpText","label","readOnly","type","style","optional"]);ze(ot,ct,at,st,lt);const d=nt(o),u=c?`${d}__hint`:void 0,v=a,O=m.Children.toArray(s).find(g=>m.isValidElement(g)&&g.props.suffix),M=m.Children.toArray(s).find(g=>m.isValidElement(g)&&g.props.prefix),D=$([b.base,!!t.placeholder&&b.placeholder,!!O&&b.suffix,!!M&&b.prefix,!v&&!i&&!p&&b.default,v&&!i&&!p&&b.invalid,!v&&i&&!p&&b.disabled,!v&&!i&&p&&b.readOnly]);return m.createElement("div",{className:n,style:w},h&&m.createElement("label",{htmlFor:d,className:K.base},h,l&&m.createElement("span",{className:K.optional},z._({id:"textfield.label.optional",message:"(optional)",comment:"Shown behind label when marked as optional"}))),m.createElement("div",{className:b.wrapper},M,m.createElement("input",De(Pe({className:D},f),{"aria-describedby":u,"aria-errormessage":v&&u?u:void 0,"aria-invalid":v,disabled:i,id:d,readOnly:p,ref:e,type:_})),O),t.helpText&&m.createElement(Le,{helpId:u,helpText:c,isInvalid:v}))});export{ft as T,z as i};
