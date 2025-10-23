import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as A}from"./index-B1q5H1Tx.js";import{R}from"./iframe-D0Z47RGF.js";import"./preload-helper-C1FmrZbK.js";const N=".w-box{--_background: var(--background, transparent);--_padding: var(--padding, 16px);--_border-radius: var(--border-radius, 8px);--_border-width: var(--border-width, 0px);--_border-color: var(--border-color, transparent);display:block;position:relative;overflow-wrap:break-word;padding:var(--_padding);background-color:var(--_background);border-radius:var(--_border-radius);border:var(--_border-width) solid var(--_border-color)}.w-box:last-child{margin-bottom:0}.w-box--info{--background: var(--w-s-color-background-info-subtle)}.w-box--neutral{--background: var(--w-s-color-surface-sunken)}.w-box--bordered{--border-width: 2px;--border-color: var(--w-s-color-border);--background: var(--w-s-color-background)}";function r(n){const{children:g,as:w="div",type:i="info",role:T,className:j,style:B,..._}=n,k=A("w-box",{"w-box--info":i==="info","w-box--neutral":i==="neutral","w-box--bordered":i==="bordered"},j);return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"Box",precedence:"medium",children:N}),R.createElement(w,{..._,role:T??"region",className:k,style:B},g)]})}r.__docgenInfo={description:"",methods:[],displayName:"Box",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"CSS styles to inline on the component"},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`The HTML element or component to render as
@default 'div'`},type:{required:!0,tsType:{name:"union",raw:"'info' | 'neutral' | 'bordered'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'bordered'"}]},description:"Type of box for styling"},role:{required:!1,tsType:{name:"string"},description:"ARIA role attribute"},id:{required:!1,tsType:{name:"string"},description:"id used for relationship ARIA attributes"}}};const P={title:"Layout/Box",component:r},S=n=>e.jsx(r,{...n}),s=S.bind({});s.args={children:"This is a default box component"};const o=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{"data-testid":"info",children:[e.jsx("h3",{children:"Info"}),e.jsx(r,{type:"info",children:"This is an info box with subtle info background"})]}),e.jsxs("div",{"data-testid":"neutral",children:[e.jsx("h3",{children:"Neutral"}),e.jsx(r,{type:"neutral",children:"This is a neutral box with sunken surface background"})]}),e.jsxs("div",{"data-testid":"bordered",children:[e.jsx("h3",{children:"Bordered"}),e.jsx(r,{type:"bordered",children:"This is a bordered box with border and background"})]})]}),a=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{"data-testid":"as-div",children:[e.jsx("h3",{children:"As div (default)"}),e.jsx(r,{type:"info",children:"This renders as a div element"})]}),e.jsxs("div",{"data-testid":"as-section",children:[e.jsx("h3",{children:"As section"}),e.jsx(r,{type:"info",as:"section",children:"This renders as a section element"})]}),e.jsxs("div",{"data-testid":"as-article",children:[e.jsx("h3",{children:"As article"}),e.jsx(r,{type:"info",as:"article",children:"This renders as an article element"})]})]}),t=()=>e.jsx(r,{type:"info",role:"banner",children:'This box has a custom ARIA role of "banner"'});o.__docgenInfo={description:"",methods:[],displayName:"Variants"};a.__docgenInfo={description:"",methods:[],displayName:"AsElements"};t.__docgenInfo={description:"",methods:[],displayName:"WithCustomRole"};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"(args: BoxProps) => <Box {...args} />",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div data-testid="info">
      <h3>Info</h3>
      <Box type="info">This is an info box with subtle info background</Box>
    </div>
    <div data-testid="neutral">
      <h3>Neutral</h3>
      <Box type="neutral">This is a neutral box with sunken surface background</Box>
    </div>
    <div data-testid="bordered">
      <h3>Bordered</h3>
      <Box type="bordered">This is a bordered box with border and background</Box>
    </div>
  </div>`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,x,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div data-testid="as-div">
      <h3>As div (default)</h3>
      <Box type="info">This renders as a div element</Box>
    </div>
    <div data-testid="as-section">
      <h3>As section</h3>
      <Box type="info" as="section">
        This renders as a section element
      </Box>
    </div>
    <div data-testid="as-article">
      <h3>As article</h3>
      <Box type="info" as="article">
        This renders as an article element
      </Box>
    </div>
  </div>`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,v,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Box type="info" role="banner">
    This box has a custom ARIA role of "banner"
  </Box>`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const V=["Default","Variants","AsElements","WithCustomRole"];export{a as AsElements,s as Default,o as Variants,t as WithCustomRole,V as __namedExportsOrder,P as default};
