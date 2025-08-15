import{r as O,a as N,x as r}from"./iframe-BfkhUZHm.js";import{e as T,n as j}from"./class-map-DPZl8t4P.js";import"./preload-helper-C1FmrZbK.js";const q=".w-pageindicator{display:grid;justify-content:center;height:max-content;pointer-events:none}.w-pageindicator--container{display:grid;grid-auto-flow:column;gap:8px}.w-pageindicator--dot{background-color:var(--w-s-color-background-disabled);border-radius:5px;width:10px;height:10px}.w-pageindicator--selecteddot{background-color:var(--w-s-color-icon-selected)}";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*z(t,e){if(t!==void 0){let i=0;for(const n of t)yield e(n,i++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*A(t,e,i=1){const n=e===void 0?0:t;e??(e=t);for(let a=n;i>0?a<e:e<a;a+=i)yield a}var B=Object.defineProperty,D=(t,e,i,n)=>{for(var a=void 0,l=t.length-1,h;l>=0;l--)(h=t[l])&&(a=h(e,i,a)||a);return a&&B(e,i,a),a};const u=class u extends O{constructor(){super(...arguments),this.selectedPage=1,this.pageCount=1}render(){return r`
      <div class="w-pageindicator">
        <div class="w-pageindicator--container">
          ${z(A(this.pageCount),e=>{const n={"w-pageindicator--dot":!0,"w-pageindicator--selecteddot":e===this.selectedPage-1};return r`<div class="${T(n)}"></div>`})}
        </div>
      </div>
    `}};u.styles=[N(q)];let o=u;D([j({type:Number,attribute:"selected-page"})],o.prototype,"selectedPage");D([j({type:Number,attribute:"page-count"})],o.prototype,"pageCount");customElements.get("w-pageindicator")||customElements.define("w-pageindicator",o);const K={component:"w-pageindicator",title:"PageIndicator",render:({pageCount:t,selectedPage:e})=>r`
    <w-pageindicator page-count=${t} selected-page=${e}></w-pageindicator>
  `,argTypes:{pageCount:{control:{type:"number"}},selectedPage:{control:{type:"number"}}}},s={args:{pageCount:5,selectedPage:1}},d=()=>r`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator 
      page-count="5" 
      selected-page="1" 
      style="padding-bottom: 12px; align-self: end;">
    </w-pageindicator>
  </div>
`;class F extends O{constructor(){super(...arguments),this.page=1}connectedCallback(){super.connectedCallback(),this.startPageChanger()}startPageChanger(){setInterval(()=>{this.page>4?this.page=1:this.page=this.page+1},1e3)}render(){return r`
      <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
        <div style="align-self: center; justify-self: center;">Page ${this.page}</div>
        <w-pageindicator 
          page-count="5" 
          selected-page=${this.page} 
          style="padding-bottom: 12px; align-self: end;">
        </w-pageindicator>
      </div>
    `}}customElements.get("page-indicator-change-page")||customElements.define("page-indicator-change-page",F);const g=()=>r`
  <page-indicator-change-page></page-indicator-change-page>
`,c=()=>r`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator 
      page-count="10" 
      selected-page="3" 
      style="padding-bottom: 12px; align-self: end;">
    </w-pageindicator>
  </div>
`,p=()=>r`
  <div style="height: 450px; border: 1px solid lightgrey;">
    <div style="height: 300px; border-bottom: 1px solid #e6e6e6;"></div>
    <w-pageindicator 
      page-count="5" 
      selected-page="1" 
      style="padding-top: 16px;">
    </w-pageindicator>
  </div>
`;var m,y,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    pageCount: 5,
    selectedPage: 1
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var f,w,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator 
      page-count="5" 
      selected-page="1" 
      style="padding-bottom: 12px; align-self: end;">
    </w-pageindicator>
  </div>
\``,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,C,P;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:"() => html`\n  <page-indicator-change-page></page-indicator-change-page>\n`",...(P=(C=g.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var I,S,$;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => html\`
  <div style="display: grid; height: 60vh; border: 1px solid lightgrey;">
    <w-pageindicator 
      page-count="10" 
      selected-page="3" 
      style="padding-bottom: 12px; align-self: end;">
    </w-pageindicator>
  </div>
\``,...($=(S=c.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var _,k,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => html\`
  <div style="height: 450px; border: 1px solid lightgrey;">
    <div style="height: 300px; border-bottom: 1px solid #e6e6e6;"></div>
    <w-pageindicator 
      page-count="5" 
      selected-page="1" 
      style="padding-top: 16px;">
    </w-pageindicator>
  </div>
\``,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const L=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{s as Default,d as InsideContainer,c as InsideContainer10Pages,g as InsideContainerChangePage,p as OutsideContainer,L as __namedExportsOrder,K as default};
