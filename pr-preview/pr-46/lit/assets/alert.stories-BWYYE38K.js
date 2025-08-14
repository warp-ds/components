import{T as L,r as N,a as q,x as l}from"./iframe-ChWPcwQ9.js";import{e as A,i as H,t as P,a as m,n as d}from"./class-map-F65hX8Zc.js";import"./preload-helper-C1FmrZbK.js";const O=".w-alert{--_alert-background: var(--alert-background, var(--w-s-color-background));--_alert-border: var(--alert-border, var(--w-s-color-border));--_alert-border-left: var(--alert-border-left, var(--w-s-color-border));--_alert-border-width: var(--alert-border-width, 1px);--_alert-border-radius: var(--alert-border-radius, 4px);background-color:var(--_alert-background);border:var(--_alert-border-width) solid var(--_alert-border);border-left:var(--_alert-border-width) solid var(--_alert-border-left);border-radius:var(--_alert-border-radius);border-left-width:4px;padding:20px 16px;display:flex}.w-alert--negative{--alert-border: var(--w-s-color-border-negative-subtle);--alert-border-left: var(--w-s-color-border-negative);--alert-background: var(--w-s-color-background-negative-subtle)}.w-alert--positive{--alert-border: var(--w-s-color-border-positive-subtle);--alert-border-left: var(--w-s-color-border-positive);--alert-background: var(--w-s-color-background-positive-subtle)}.w-alert--warning{--alert-border: var(--w-s-color-border-warning-subtle);--alert-border-left: var(--w-s-color-border-warning);--alert-background: var(--w-s-color-background-warning-subtle)}.w-alert--info{--alert-border: var(--w-s-color-border-info-subtle);--alert-border-left: var(--w-s-color-border-info);--alert-background: var(--w-s-color-background-info-subtle)}.w-alert--icon{margin-right:.8rem;line-height:0}.w-alert--content{margin:1px 0 -1px}";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R="important",j=" !"+R,D=A(class extends H{constructor(t){var a;if(super(t),t.type!==P.ATTRIBUTE||t.name!=="style"||((a=t.strings)==null?void 0:a.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((a,o)=>{const e=t[o];return e==null?a:a+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(t,[a]){const{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(a)),this.render(a);for(const e of this.ft)a[e]==null&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in a){const r=a[e];if(r!=null){this.ft.add(e);const i=typeof r=="string"&&r.endsWith(j);e.includes("-")||i?o.setProperty(e,i?r.slice(0,-11):r,i?R:""):o[e]=r}}return L}});var z=Object.defineProperty,c=(t,a,o,e)=>{for(var r=void 0,i=t.length-1,w;i>=0;i--)(w=t[i])&&(r=w(a,o,r)||r);return r&&z(a,o,r),r};const M={info:{class:"w-alert--info",iconName:"Info",iconClass:"s-icon-info"},warning:{class:"w-alert--warning",iconName:"Warning",iconClass:"s-icon-warning"},negative:{class:"w-alert--negative",iconName:"Error",iconClass:"s-icon-negative"},positive:{class:"w-alert--positive",iconName:"Success",iconClass:"s-icon-positive"}},g=class g extends N{constructor(){super(...arguments),this.show=!1,this.type="info"}render(){const a=M[this.type],o={"w-alert":!0,[a.class]:!0,...this.class?{[this.class]:!0}:{}},e={"w-alert--icon":!0,[a.iconClass]:!0};return l`
      <w-expandtransition .show=${this.show}>
        <div 
          role=${this.alertRole||"alert"}
          class="${m(o)}"
          style=${this.customStyle?D(this.customStyle):""}
        >
          <div class="${m(e)}">
            <w-icon name="${a.iconName}" size="medium"></w-icon>
          </div>
          <div class="w-alert--content">
            <slot></slot>
          </div>
        </div>
      </w-expandtransition>
    `}};g.styles=[q(O)];let n=g;c([d({type:Boolean,reflect:!0})],n.prototype,"show");c([d({type:String,reflect:!0})],n.prototype,"type");c([d({type:String,attribute:"alert-role"})],n.prototype,"alertRole");c([d({type:String,reflect:!0})],n.prototype,"class");c([d({type:Object})],n.prototype,"customStyle");customElements.get("w-alert")||customElements.define("w-alert",n);const J={title:"Alert",component:"w-alert",argTypes:{show:{control:"boolean",description:"Whether the alert should be visible"},type:{control:"select",options:["info","warning","negative","positive"],description:"Type of alert"},"alert-role":{control:"text",description:'ARIA live region "role" attribute value'},class:{control:"text",description:"Additional classes to include"}}},V=t=>l`
  <w-alert 
    ?show=${t.show} 
    type=${t.type} 
    alert-role=${t.alertRole}
    class=${t.class}
  >
    ${t.content}
  </w-alert>
`,s=V.bind({});s.args={type:"info",show:!0,content:'This is an "info" variant of the alert component'};const u=()=>l`
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div data-testid="info">
      <h3>Info</h3>
      <w-alert type="info" show alert-role="status">
        This is an "info" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="warning">
      <h3>Warning</h3>
      <w-alert type="warning" show alert-role="alert">
        This is a "warning" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="negative">
      <h3>Negative</h3>
      <w-alert type="negative" show alert-role="alert">
        This is a "negative" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="positive">
      <h3>Positive</h3>
      <w-alert type="positive" show alert-role="status">
        This is a "positive" variant of the alert component
      </w-alert>
    </div>
  </div>
`,p=()=>l`
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h3>Info</h3>
      <w-alert type="info" show alert-role="status">
        <h4>This is an info variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Warning</h3>
      <w-alert type="warning" show>
        <h4>This is a warning variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Negative</h3>
      <w-alert type="negative" show>
        <h4>This is a negative variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Positive</h3>
      <w-alert type="positive" show alert-role="status">
        <h4>This is a positive variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
  </div>
`,h=()=>{let t=!0;return l`
    <div>
      <h3>Example with default role="alert"</h3>
      <button
        id="toggle-button"
        style="margin-bottom: 16px;"
        @click=${()=>{t=!t;const o=document.querySelector("#negative-alert");o&&(o.show=t);const e=document.querySelector("#toggle-button");e&&(e.textContent=t?"Hide negative alert":"Show negative alert",e.setAttribute("aria-expanded",t.toString()))}}
        aria-controls="negative-alert"
        aria-expanded="true"
      >
        Hide negative alert
      </button>

      <w-alert id="negative-alert" type="negative" show>
        <h4>This is a "negative" variant of the alert component</h4>
        <div>Use this variant to call extra attention to useful, contextual information.</div>
      </w-alert>
    </div>
  `},v=()=>{let t=!0;return l`
    <div>
      <h3>Example with role="alert" on a descendant element</h3>
      <button
        id="toggle-button-2"
        style="margin-bottom: 16px;"
        @click=${()=>{t=!t;const o=document.querySelector("#overriden-role-example-alert");o&&(o.show=t);const e=document.querySelector("#toggle-button-2");e&&(e.textContent=t?"Hide warning alert":"Show warning alert",e.setAttribute("aria-expanded",t.toString()))}}
        aria-controls="overriden-role-example-alert"
        aria-expanded="true"
      >
        Hide warning alert
      </button>
      <w-alert id="overriden-role-example-alert" type="warning" show>
        <h4>This is a "warning" variant of the alert component</h4>
        <div role="alert">Use this variant to call extra attention to useful, contextual information.</div>
      </w-alert>
    </div>
  `};var f,b,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`
  <w-alert 
    ?show=\${args.show} 
    type=\${args.type} 
    alert-role=\${args.alertRole}
    class=\${args.class}
  >
    \${args.content}
  </w-alert>
\``,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var y,S,T;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => html\`
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div data-testid="info">
      <h3>Info</h3>
      <w-alert type="info" show alert-role="status">
        This is an "info" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="warning">
      <h3>Warning</h3>
      <w-alert type="warning" show alert-role="alert">
        This is a "warning" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="negative">
      <h3>Negative</h3>
      <w-alert type="negative" show alert-role="alert">
        This is a "negative" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="positive">
      <h3>Positive</h3>
      <w-alert type="positive" show alert-role="status">
        This is a "positive" variant of the alert component
      </w-alert>
    </div>
  </div>
\``,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var k,$,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => html\`
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h3>Info</h3>
      <w-alert type="info" show alert-role="status">
        <h4>This is an info variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Warning</h3>
      <w-alert type="warning" show>
        <h4>This is a warning variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Negative</h3>
      <w-alert type="negative" show>
        <h4>This is a negative variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Positive</h3>
      <w-alert type="positive" show alert-role="status">
        <h4>This is a positive variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
  </div>
\``,...(B=($=p.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var _,C,U;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  let show = true;
  const toggle = () => {
    show = !show;
    const alert = document.querySelector('#negative-alert') as any;
    if (alert) {
      alert.show = show;
    }
    const button = document.querySelector('#toggle-button');
    if (button) {
      button.textContent = show ? 'Hide negative alert' : 'Show negative alert';
      button.setAttribute('aria-expanded', show.toString());
    }
  };
  return html\`
    <div>
      <h3>Example with default role="alert"</h3>
      <button
        id="toggle-button"
        style="margin-bottom: 16px;"
        @click=\${toggle}
        aria-controls="negative-alert"
        aria-expanded="true"
      >
        Hide negative alert
      </button>

      <w-alert id="negative-alert" type="negative" show>
        <h4>This is a "negative" variant of the alert component</h4>
        <div>Use this variant to call extra attention to useful, contextual information.</div>
      </w-alert>
    </div>
  \`;
}`,...(U=(C=h.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var W,E,I;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  let show = true;
  const toggle = () => {
    show = !show;
    const alert = document.querySelector('#overriden-role-example-alert') as any;
    if (alert) {
      alert.show = show;
    }
    const button = document.querySelector('#toggle-button-2');
    if (button) {
      button.textContent = show ? 'Hide warning alert' : 'Show warning alert';
      button.setAttribute('aria-expanded', show.toString());
    }
  };
  return html\`
    <div>
      <h3>Example with role="alert" on a descendant element</h3>
      <button
        id="toggle-button-2"
        style="margin-bottom: 16px;"
        @click=\${toggle}
        aria-controls="overriden-role-example-alert"
        aria-expanded="true"
      >
        Hide warning alert
      </button>
      <w-alert id="overriden-role-example-alert" type="warning" show>
        <h4>This is a "warning" variant of the alert component</h4>
        <div role="alert">Use this variant to call extra attention to useful, contextual information.</div>
      </w-alert>
    </div>
  \`;
}`,...(I=(E=v.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const K=["Default","Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole"];export{s as Default,u as Variants,h as WithDefaultRole,p as WithInteractiveContent,v as WithOverriddenRole,K as __namedExportsOrder,J as default};
