import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{H as s}from"./HelpText-D3rZRzqx.js";import"./index-FGJkmGnF.js";import"./_commonjsHelpers-CqkleIqs.js";const D={title:"Forms/HelpText",component:s},t=()=>e.jsx(s,{helpText:"This is a helpful message to guide the user."}),a=()=>e.jsx(s,{helpText:"This field is required and cannot be empty.",isInvalid:!0}),r=()=>e.jsx(s,{helpId:"custom-help-id",helpText:"This help text has a custom ID for accessibility."}),i=()=>e.jsx(s,{helpText:e.jsxs("span",{children:["This help text contains ",e.jsx("strong",{children:"formatted content"})," and a"," ",e.jsx("a",{href:"https://example.com",style:{color:"inherit",textDecoration:"underline"},children:"link"}),"."]})}),o=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Normal state"}),e.jsx(s,{helpText:"This is normal help text."})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Invalid state"}),e.jsx(s,{helpText:"This help text indicates an error.",isInvalid:!0})]})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Invalid"};r.__docgenInfo={description:"",methods:[],displayName:"WithCustomId"};i.__docgenInfo={description:"",methods:[],displayName:"ReactNode"};o.__docgenInfo={description:"",methods:[],displayName:"AllVariants"};var l,n,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:'() => <HelpText helpText="This is a helpful message to guide the user." />',...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,c,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:'() => <HelpText helpText="This field is required and cannot be empty." isInvalid />',...(h=(c=a.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,x,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:'() => <HelpText helpId="custom-help-id" helpText="This help text has a custom ID for accessibility." />',...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var T,f,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => <HelpText helpText={<span>
      This help text contains <strong>formatted content</strong> and a{' '}
      <a href="https://example.com" style={{
    color: 'inherit',
    textDecoration: 'underline'
  }}>
        link
      </a>
      .
    </span>} />`,...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var g,v,j;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}}>
    <div>
      <h3>Normal state</h3>
      <HelpText helpText="This is normal help text." />
    </div>
    <div>
      <h3>Invalid state</h3>
      <HelpText helpText="This help text indicates an error." isInvalid />
    </div>
  </div>`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const S=["Default","Invalid","WithCustomId","ReactNode","AllVariants"];export{o as AllVariants,t as Default,a as Invalid,i as ReactNode,r as WithCustomId,S as __namedExportsOrder,D as default};
