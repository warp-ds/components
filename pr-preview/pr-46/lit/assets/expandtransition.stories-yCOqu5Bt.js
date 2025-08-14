import{r as x,a as h,x as a}from"./iframe-ChWPcwQ9.js";import{a as m,n as f}from"./class-map-F65hX8Zc.js";import"./preload-helper-C1FmrZbK.js";const u=".w-expandtransition{display:grid;grid-template-rows:0fr;transition:.4s grid-template-rows ease}.w-expandtransition--expanded{grid-template-rows:1fr}.w-expandtransition>div{overflow:hidden}";var g=Object.defineProperty,v=(t,s,d,y)=>{for(var e=void 0,r=t.length-1,p;r>=0;r--)(p=t[r])&&(e=p(s,d,e)||e);return e&&g(s,d,e),e};const i=class i extends x{constructor(){super(...arguments),this.show=!1}render(){const s={"w-expandtransition":!0,"w-expandtransition--expanded":this.show};return a`
      <div class="${m(s)}">
        <div>
          <slot></slot>
        </div>
      </div>
    `}};i.styles=[h(u)];let o=i;v([f({type:Boolean,reflect:!0})],o.prototype,"show");customElements.get("w-expandtransition")||customElements.define("w-expandtransition",o);const T={title:"ExpandTransition",component:"w-expandtransition",argTypes:{show:{control:"boolean",description:"Whether the content should be expanded"}}},b=t=>a`
  <w-expandtransition ?show=${t.show}>
    ${t.content}
  </w-expandtransition>
`,n=b.bind({});n.args={show:!0,content:a`
    <div style="padding: 16px; background-color: #f0f0f0; border: 1px solid #ccc;">
      <h3>Expandable Content</h3>
      <p>This content can be expanded or collapsed smoothly.</p>
    </div>
  `};var l,c,w;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"args => html`\n  <w-expandtransition ?show=${args.show}>\n    ${args.content}\n  </w-expandtransition>\n`",...(w=(c=n.parameters)==null?void 0:c.docs)==null?void 0:w.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,T as default};
