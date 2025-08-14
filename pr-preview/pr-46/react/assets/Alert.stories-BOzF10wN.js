import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as P,r as z}from"./iframe-4ajwLuou.js";import{B as g}from"./Button-CRBMpzJC.js";import{L as U}from"./Link-iMaOXiZ8.js";import{e as D,i as H,t as L,T as F,r as V,a as M,b as y,x as Q,n as m,l as Z}from"./class-map-obzit4R7.js";import"./preload-helper-C1FmrZbK.js";import"./style-DhxcUcNZ.js";import"./index-BAUi5aDK.js";import"./index-DcNGyp6h.js";const q=".w-alert{--_alert-background: var(--alert-background, var(--w-s-color-background));--_alert-border: var(--alert-border, var(--w-s-color-border));--_alert-border-left: var(--alert-border-left, var(--w-s-color-border));--_alert-border-width: var(--alert-border-width, 1px);--_alert-border-radius: var(--alert-border-radius, 4px);background-color:var(--_alert-background);border:var(--_alert-border-width) solid var(--_alert-border);border-left:var(--_alert-border-width) solid var(--_alert-border-left);border-radius:var(--_alert-border-radius);border-left-width:4px;padding:20px 16px;display:flex}.w-alert--negative{--alert-border: var(--w-s-color-border-negative-subtle);--alert-border-left: var(--w-s-color-border-negative);--alert-background: var(--w-s-color-background-negative-subtle)}.w-alert--positive{--alert-border: var(--w-s-color-border-positive-subtle);--alert-border-left: var(--w-s-color-border-positive);--alert-background: var(--w-s-color-background-positive-subtle)}.w-alert--warning{--alert-border: var(--w-s-color-border-warning-subtle);--alert-border-left: var(--w-s-color-border-warning);--alert-background: var(--w-s-color-background-warning-subtle)}.w-alert--info{--alert-border: var(--w-s-color-border-info-subtle);--alert-border-left: var(--w-s-color-border-info);--alert-background: var(--w-s-color-background-info-subtle)}.w-alert--icon{margin-right:.8rem;line-height:0}.w-alert--content{margin:1px 0 -1px}";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O="important",G=" !"+O,J=D(class extends H{constructor(t){var r;if(super(t),t.type!==L.ATTRIBUTE||t.name!=="style"||((r=t.strings)==null?void 0:r.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((r,n)=>{const a=t[n];return a==null?r:r+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(t,[r]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(r)),this.render(r);for(const a of this.ft)r[a]==null&&(this.ft.delete(a),a.includes("-")?n.removeProperty(a):n[a]=null);for(const a in r){const i=r[a];if(i!=null){this.ft.add(a);const l=typeof i=="string"&&i.endsWith(G);a.includes("-")||l?n.setProperty(a,l?i.slice(0,-11):i,l?O:""):n[a]=i}}return F}});var K=Object.defineProperty,w=(t,r,n,a)=>{for(var i=void 0,l=t.length-1,x;l>=0;l--)(x=t[l])&&(i=x(r,n,i)||i);return i&&K(r,n,i),i};const X={info:{class:"w-alert--info",iconName:"Info",iconClass:"s-icon-info"},warning:{class:"w-alert--warning",iconName:"Warning",iconClass:"s-icon-warning"},negative:{class:"w-alert--negative",iconName:"Error",iconClass:"s-icon-negative"},positive:{class:"w-alert--positive",iconName:"Success",iconClass:"s-icon-positive"}};var d;let s=(d=class extends V{constructor(){super(...arguments),this.show=!1,this.type="info"}render(){const r=X[this.type],n={"w-alert":!0,[r.class]:!0,...this.class?{[this.class]:!0}:{}},a={"w-alert--icon":!0,[r.iconClass]:!0};return Q`
      <w-expandtransition .show=${this.show}>
        <div 
          role=${this.alertRole||"alert"}
          class="${y(n)}"
          style=${this.customStyle?J(this.customStyle):""}
        >
          <div class="${y(a)}">
            <w-icon name="${r.iconName}" size="medium"></w-icon>
          </div>
          <div class="w-alert--content">
            <slot></slot>
          </div>
        </div>
      </w-expandtransition>
    `}},d.styles=[M(q)],d);w([m({type:Boolean,reflect:!0})],s.prototype,"show");w([m({type:String,reflect:!0})],s.prototype,"type");w([m({type:String,attribute:"alert-role"})],s.prototype,"alertRole");w([m({type:String,reflect:!0})],s.prototype,"class");w([m({type:Object})],s.prototype,"customStyle");customElements.get("w-alert")||customElements.define("w-alert",s);s.__docgenInfo={description:"",methods:[],displayName:"WAlert"};const o=Z({tagName:"w-alert",elementClass:s,react:P}),de={title:"Alert",component:o},Y=t=>e.jsx(o,{...t}),c=Y.bind({});c.args={type:"info",show:!0,children:'This is an "info" variant of the alert component'};const h=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{"data-testid":"info",children:[e.jsx("h3",{children:"Info"}),e.jsx(o,{type:"info",show:!0,role:"status",children:'This is an "info" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"warning",children:[e.jsx("h3",{children:"Warning"}),e.jsx(o,{type:"warning",show:!0,role:"alert",children:'This is a "warning" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"negative",children:[e.jsx("h3",{children:"Negative"}),e.jsx(o,{type:"negative",show:!0,role:"alert",children:'This is a "negative" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"positive",children:[e.jsx("h3",{children:"Positive"}),e.jsx(o,{type:"positive",show:!0,role:"status",children:'This is a "positive" variant of the alert component'})]})]}),f=({type:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("h4",{children:["This is a ",t," variant of the alert component"]}),e.jsx("p",{children:"Use this variant to call extra attention to useful, contextual information."}),e.jsx(U,{href:"https://google.com",children:"Link to more information"}),e.jsx("p",{}),e.jsxs("div",{className:"mt-8 space-x-8",children:[e.jsx(g,{size:"default",variant:"secondary",children:"Button"}),e.jsx(g,{size:"default",variant:"utilityQuiet",children:"Button"})]})]}),p=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(o,{type:"info",show:!0,role:"status",children:e.jsx(f,{type:"info"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(o,{type:"warning",show:!0,children:e.jsx(f,{type:"warning"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(o,{type:"negative",show:!0,children:e.jsx(f,{type:"negative"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(o,{type:"positive",show:!0,role:"status",children:e.jsx(f,{type:"positive"})})]})]}),v=()=>{const[t,r]=z.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with default role="alert"'}),e.jsx(g,{className:"mb-16",size:"default",variant:"primary",onClick:()=>{r(!t)},"aria-controls":"negative-alert","aria-expanded":t,children:t?"Hide negative alert":"Show negative alert"}),e.jsxs(o,{id:"negative-alert",type:"negative",show:t,children:[e.jsx("h4",{children:'This is a "negative" variant of the alert component'}),e.jsx("div",{children:"Use this variant to call extra attention to useful, contextual information."})]})]})},u=()=>{const[t,r]=z.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with role="alert" on a descendant element'}),e.jsx(g,{className:"mb-16",size:"default",variant:"primary",onClick:()=>{r(!t)},"aria-controls":"overriden-role-example-alert","aria-expanded":t,children:t?"Hide warning alert":"Show warning alert"}),e.jsxs(o,{id:"overriden-role-example-alert",type:"warning",show:t,children:[e.jsx("h4",{children:'This is a "warning" variant of the alert component'}),e.jsx("div",{role:"alert",children:"Use this variant to call extra attention to useful, contextual information."})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"Variants"};p.__docgenInfo={description:"",methods:[],displayName:"WithInteractiveContent"};v.__docgenInfo={description:"",methods:[],displayName:"WithDefaultRole"};u.__docgenInfo={description:"",methods:[],displayName:"WithOverriddenRole"};var b,j,W;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"args => <WAlert {...args} />",...(W=(j=c.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var A,S,_;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div data-testid="info">
      <h3>Info</h3>
      <WAlert type="info" show role="status">
        This is an "info" variant of the alert component
      </WAlert>
    </div>
    <div data-testid="warning">
      <h3>Warning</h3>
      <WAlert type="warning" show role="alert">
        This is a "warning" variant of the alert component
      </WAlert>
    </div>
    <div data-testid="negative">
      <h3>Negative</h3>
      <WAlert type="negative" show role="alert">
        This is a "negative" variant of the alert component
      </WAlert>
    </div>
    <div data-testid="positive">
      <h3>Positive</h3>
      <WAlert type="positive" show role="status">
        This is a "positive" variant of the alert component
      </WAlert>
    </div>
  </div>`,...(_=(S=h.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var N,k,C;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div>
      <h3>Info</h3>
      <WAlert type="info" show role="status">
        <InteractiveContent type="info" />
      </WAlert>
    </div>
    <div>
      <h3>Warning</h3>
      <WAlert type="warning" show>
        <InteractiveContent type="warning" />
      </WAlert>
    </div>
    <div>
      <h3>Negative</h3>
      <WAlert type="negative" show>
        <InteractiveContent type="negative" />
      </WAlert>
    </div>
    <div>
      <h3>Positive</h3>
      <WAlert type="positive" show role="status">
        <InteractiveContent type="positive" />
      </WAlert>
    </div>
  </div>`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var I,T,E;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(true);
  return <>
      <h3>Example with default role="alert"</h3>
      <Button className="mb-16" size="default" variant="primary" onClick={() => {
      setShow(!show);
    }} aria-controls="negative-alert" aria-expanded={show}>
        {show ? 'Hide negative alert' : 'Show negative alert'}
      </Button>

      <WAlert id="negative-alert" type="negative" show={show}>
        <h4>This is a "negative" variant of the alert component</h4>
        <div>Use this variant to call extra attention to useful, contextual information.</div>
      </WAlert>
    </>;
}`,...(E=(T=v.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var R,$,B;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(true);
  return <>
      <h3>Example with role="alert" on a descendant element</h3>
      <Button className="mb-16" size="default" variant="primary" onClick={() => {
      setShow(!show);
    }} aria-controls="overriden-role-example-alert" aria-expanded={show}>
        {show ? 'Hide warning alert' : 'Show warning alert'}
      </Button>
      <WAlert id="overriden-role-example-alert" type="warning" show={show}>
        <h4>This is a "warning" variant of the alert component</h4>
        <div role="alert">Use this variant to call extra attention to useful, contextual information.</div>
      </WAlert>
    </>;
}`,...(B=($=u.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};const ce=["Default","Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole"];export{c as Default,h as Variants,v as WithDefaultRole,p as WithInteractiveContent,u as WithOverriddenRole,ce as __namedExportsOrder,de as default};
