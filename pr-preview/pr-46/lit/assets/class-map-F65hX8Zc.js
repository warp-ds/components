import{f as h,u as d,T as l}from"./iframe-ChWPcwQ9.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h},p=(s=u,t,r)=>{const{kind:n,metadata:o}=r;let e=globalThis.litPropertyMetadata.get(o);if(e===void 0&&globalThis.litPropertyMetadata.set(o,e=new Map),e.set(r.name,s),n==="accessor"){const{name:i}=r;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,c,s)},init(a){return a!==void 0&&this.P(i,void 0,s),a}}}if(n==="setter"){const{name:i}=r;return function(a){const c=this[i];t.call(this,a),this.requestUpdate(i,c,s)}}throw Error("Unsupported decorator location: "+n)};function y(s){return(t,r)=>typeof r=="object"?p(s,t,r):((n,o,e)=>{const i=o.hasOwnProperty(e);return o.constructor.createProperty(e,i?{...n,wrapped:!0}:n),i?Object.getOwnPropertyDescriptor(o,e):void 0})(s,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f={ATTRIBUTE:1},g=s=>(...t)=>({_$litDirective$:s,values:t});class m{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=g(class extends m{constructor(s){var t;if(super(s),s.type!==f.ATTRIBUTE||s.name!=="class"||((t=s.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(t=>s[t]).join(" ")+" "}update(s,[t]){var n,o;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(e=>e!=="")));for(const e in t)t[e]&&!((n=this.nt)!=null&&n.has(e))&&this.st.add(e);return this.render(t)}const r=s.element.classList;for(const e of this.st)e in t||(r.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||(o=this.nt)!=null&&o.has(e)||(i?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return l}});export{b as a,g as e,m as i,y as n,f as t};
