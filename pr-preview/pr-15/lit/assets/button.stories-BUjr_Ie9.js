var f=Object.defineProperty;var w=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>w(e,typeof t!="symbol"?t+"":t,o);import{T as m,i as v,r as y,a as g,x as i}from"./lit-element-WLMTLahS.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x={ATTRIBUTE:1},$=e=>(...t)=>({_$litDirective$:e,values:t});class k{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=$(class extends k{constructor(e){var t;if(super(e),e.type!==x.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,c;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((s=this.nt)!=null&&s.has(r))&&this.st.add(r);return this.render(t)}const o=e.element.classList;for(const r of this.st)r in t||(o.remove(r),this.st.delete(r));for(const r in t){const u=!!t[r];u===this.st.has(r)||(c=this.nt)!=null&&c.has(r)||(u?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return m}}),_=v`
.w-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
`,S=".w-button{max-width:-webkit-max-content;max-width:max-content;justify-content:center;border:2px solid var(--w-s-color-border);border-radius:8px;padding:1rem 1.4rem;background-color:var(--w-s-color-background);color:var(--w-s-color-text-link);font-size:var(--w-font-size-m);font-weight:700;line-height:2.4rem}.w-button:hover{border-color:var(--w-s-color-border-hover);background-color:var(--w-s-color-background-hover)}.w-button:focus:not(:focus-visible){outline:none!important}.w-button:focus,.w-button:focus-visible{outline:2px solid var(--w-s-color-border-focused, var(--w-s-color-focused));outline-offset:var(--w-outline-offset, 1px)}.w-button--primary{border-width:0;padding:1.2rem 1.6rem;background-color:var(--w-color-button-primary-background);color:var(--w-s-color-text-inverted)}.w-button--primary:hover{background-color:var(--w-color-button-primary-background-hover)}",A=y(S),d=["primary","secondary","negative","utility","pill","link"];class l extends g{constructor(){super(),this.variant="secondary",this.ariaValueTextLoading="Loading..."}connectedCallback(){if(super.connectedCallback(),!d.includes(this.variant))throw new Error(`Invalid "variant" attribute. Set its value to one of the following:
${d.join(", ")}.`)}firstUpdated(){this.autofocus&&setTimeout(()=>this.focus(),0)}render(){const t={"w-button":!0,"w-button--primary":this.variant==="primary"};return i`<button part="buttonpart" type=${this.type||"button"} class=${T(t)}>
        <slot></slot>
      </button>
      ${this.loading?i`<span
            class="sr-only"
            role="progressbar"
            aria-valuenow="{0}"
            aria-valuetext=${this.ariaValueTextLoading}
          />`:null}`}}a(l,"styles",[A,_]),a(l,"properties",{type:{type:"button"|"submit"|"reset",reflect:!0},autofocus:{type:Boolean,reflect:!0},variant:{type:String,reflect:!0},quiet:{type:Boolean,reflect:!0},small:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},href:{type:String,reflect:!0},target:{type:String,reflect:!0},rel:{type:String,reflect:!0},fullWidth:{type:Boolean,reflect:!0},buttonClass:{type:String,reflect:!0}});customElements.get("w-button")||customElements.define("w-button",l);const j={component:"w-button",render:({variant:e,child:t})=>i`
      <w-button variant=${e}>${t}</w-button>
  `},n={args:{variant:"primary",child:"Button"}};var p,h,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    child: 'Button'
  }
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const C=["Primary"];export{n as Primary,C as __namedExportsOrder,j as default};
