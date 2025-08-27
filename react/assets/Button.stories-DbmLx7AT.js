import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as i}from"./Button-BZIbAEaV.js";import"./style-DhxcUcNZ.js";import"./index-BAUi5aDK.js";import"./index-BwBCBctg.js";import"./iframe-PNrS-Gz9.js";import"./preload-helper-C1FmrZbK.js";const p={title:"Button",component:i,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","negative","utility","negativeQuiet","utilityQuiet","overlay","overlayQuiet","overlayInverted","overlayInvertedQuiet","link"]}}},c=u=>t.jsx(i,{...u}),e=c.bind({});e.args={variant:"primary",size:"default",loading:!1,disabled:!1,fullWidth:!1,children:"This is a button"};const n=()=>t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("h3",{children:"Variants"}),t.jsx("p",{children:"Allowed values: empty, or one of variant"}),t.jsx(i,{children:"Default"}),t.jsx(i,{variant:"primary",children:"Primary"}),t.jsx(i,{variant:"secondary",children:"Secondary"}),t.jsx(i,{variant:"negative",children:"Negative"}),t.jsx(i,{variant:"utility",children:"Utility"}),t.jsx(i,{variant:"negativeQuiet",children:"Negative-Quiet"}),t.jsx(i,{variant:"utilityQuiet",children:"utility-Quiet"}),t.jsxs("p",{style:{marginTop:"10px"},children:["This is a ",t.jsx(i,{variant:"link",children:"button"})," pretending to be a link."]})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Sizes"}),t.jsx("p",{children:"Allowed values: empty(default) or one size "}),t.jsx(i,{children:"Default"}),t.jsx(i,{size:"small",children:"Default small"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"widths"}),t.jsx("p",{children:"Allowed values: empty(default) or one width "}),t.jsx(i,{children:"Default"}),t.jsx(i,{fullWidth:!0,children:"Default fullWidth"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"States"}),t.jsx("p",{children:"Allowed values: empty(default) or any number of states"}),t.jsx("p",{children:"Loading state, Pattern is supposed to be: button is triggered, button is disabled until loading success, while in the disabled state it also show loading animation to show something is happening."}),t.jsx(i,{children:"Default"}),t.jsx(i,{disabled:!0,children:"Default disabled"}),t.jsx(i,{loading:!0,children:"Default loading"})]}),t.jsx("h2",{style:{marginTop:"100px"},children:"All combos"}),t.jsxs("div",{children:[t.jsx("h3",{children:"Default (Secondary)"}),t.jsx(i,{children:"Button"}),t.jsx(i,{loading:!0,disabled:!0,children:"Loading"}),t.jsx(i,{size:"small",children:"Small"}),t.jsx(i,{size:"small",loading:!0,children:"Small Loading"}),t.jsx(i,{disabled:!0,children:"Disabled"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Primary"}),t.jsx(i,{variant:"primary",children:"Button"}),t.jsx(i,{variant:"primary",loading:!0,children:"Loading"}),t.jsx(i,{variant:"primary",size:"small",children:"Small"}),t.jsx(i,{variant:"primary",size:"small",loading:!0,children:"Small Loading"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Secondary"}),t.jsx(i,{variant:"secondary",children:"Button"}),t.jsx(i,{variant:"secondary",loading:!0,children:"Loading"}),t.jsx(i,{variant:"secondary",size:"small",children:"Small"}),t.jsx(i,{variant:"secondary",size:"small",loading:!0,children:"Small Loading"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Negative"}),t.jsx(i,{variant:"negative",children:"Button"}),t.jsx(i,{variant:"negative",loading:!0,children:"Negative Loading"}),t.jsx(i,{variant:"negative",size:"small",children:"Negative Small"}),t.jsx(i,{variant:"negative",size:"small",loading:!0,children:"Negative Small Loading"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Utility"}),t.jsx(i,{variant:"utility",children:"Button"}),t.jsx(i,{variant:"utility",loading:!0,children:"Loading"}),t.jsx(i,{variant:"utility",size:"small",children:"Small"}),t.jsx(i,{variant:"utility",size:"small",loading:!0,children:"Small Loading"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Link"}),"This is a ",t.jsx(i,{variant:"link",children:"button"})," pretending to be a link."]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Utility quiet with Icon"}),t.jsx(i,{variant:"utilityQuiet",hasIconOnly:!0,children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:[t.jsx("title",{children:"Three dots"}),t.jsx("circle",{cx:"2.4",cy:"8",r:"1.4",fill:"currentColor"}),t.jsx("circle",{cx:"8",cy:"8",r:"1.4",fill:"currentColor"}),t.jsx("circle",{cx:"13.6",cy:"8",r:"1.4",fill:"currentColor"})]})})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Primary with Icon"}),t.jsx(i,{variant:"primary",hasIconOnly:!0,children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16",children:[t.jsx("title",{children:"Three dots"}),t.jsx("circle",{cx:"2.4",cy:"8",r:"1.4",fill:"currentColor"}),t.jsx("circle",{cx:"8",cy:"8",r:"1.4",fill:"currentColor"}),t.jsx("circle",{cx:"13.6",cy:"8",r:"1.4",fill:"currentColor"})]})})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Full width button"}),t.jsx(i,{fullWidth:!0,variant:"primary",children:"Full width"})]})]});n.__docgenInfo={description:"",methods:[],displayName:"Example"};var l,a,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Button {...args} />",...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var o,s,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => <div>
    <div>
      <h3>Variants</h3>
      <p>Allowed values: empty, or one of variant</p>
      <Button>Default</Button>

      <Button variant="primary">Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="negative">Negative</Button>

      <Button variant="utility">Utility</Button>

      <Button variant="negativeQuiet">Negative-Quiet</Button>

      <Button variant="utilityQuiet">utility-Quiet</Button>

      <p style={{
      marginTop: '10px'
    }}>
        This is a <Button variant="link">button</Button> pretending to be a link.
      </p>
    </div>

    <div>
      <h3>Sizes</h3>
      <p>Allowed values: empty(default) or one size </p>
      <Button>Default</Button>

      <Button size="small">Default small</Button>
    </div>

    <div>
      <h3>widths</h3>
      <p>Allowed values: empty(default) or one width </p>
      <Button>Default</Button>

      <Button fullWidth>Default fullWidth</Button>
    </div>

    <div>
      <h3>States</h3>
      <p>Allowed values: empty(default) or any number of states</p>
      <p>
        Loading state, Pattern is supposed to be: button is triggered, button is disabled until loading success, while
        in the disabled state it also show loading animation to show something is happening.
      </p>
      <Button>Default</Button>

      <Button disabled>Default disabled</Button>

      <Button loading>Default loading</Button>
    </div>

    <h2 style={{
    marginTop: '100px'
  }}>All combos</h2>
    <div>
      <h3>Default (Secondary)</h3>
      <Button>Button</Button>

      <Button loading disabled>
        Loading
      </Button>

      <Button size="small">Small</Button>

      <Button size="small" loading>
        Small Loading
      </Button>

      <Button disabled>Disabled</Button>
    </div>
    <div>
      <h3>Primary</h3>

      <Button variant="primary">Button</Button>

      <Button variant="primary" loading>
        Loading
      </Button>

      <Button variant="primary" size="small">
        Small
      </Button>

      <Button variant="primary" size="small" loading>
        Small Loading
      </Button>
    </div>
    <div>
      <h3>Secondary</h3>

      <Button variant="secondary">Button</Button>

      <Button variant="secondary" loading>
        Loading
      </Button>

      <Button variant="secondary" size="small">
        Small
      </Button>

      <Button variant="secondary" size="small" loading>
        Small Loading
      </Button>
    </div>
    <div>
      <h3>Negative</h3>

      <Button variant="negative">Button</Button>

      <Button variant="negative" loading>
        Negative Loading
      </Button>

      <Button variant="negative" size="small">
        Negative Small
      </Button>

      <Button variant="negative" size="small" loading>
        Negative Small Loading
      </Button>
    </div>
    <div>
      <h3>Utility</h3>

      <Button variant="utility">Button</Button>

      <Button variant="utility" loading>
        Loading
      </Button>

      <Button variant="utility" size="small">
        Small
      </Button>

      <Button variant="utility" size="small" loading>
        Small Loading
      </Button>
    </div>

    <div>
      <h3>Link</h3>
      This is a <Button variant="link">button</Button> pretending to be a link.
    </div>
    <div>
      <h3>Utility quiet with Icon</h3>
      <Button variant="utilityQuiet" hasIconOnly>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
          <title>Three dots</title>
          <circle cx="2.4" cy="8" r="1.4" fill="currentColor" />
          <circle cx="8" cy="8" r="1.4" fill="currentColor" />
          <circle cx="13.6" cy="8" r="1.4" fill="currentColor" />
        </svg>
      </Button>
    </div>
    <div>
      <h3>Primary with Icon</h3>
      <Button variant="primary" hasIconOnly>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
          <title>Three dots</title>
          <circle cx="2.4" cy="8" r="1.4" fill="currentColor" />
          <circle cx="8" cy="8" r="1.4" fill="currentColor" />
          <circle cx="13.6" cy="8" r="1.4" fill="currentColor" />
        </svg>
      </Button>
    </div>
    <div>
      <h3>Full width button</h3>

      <Button fullWidth variant="primary">
        Full width
      </Button>
    </div>
  </div>`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const j=["Default","Example"];export{e as Default,n as Example,j as __namedExportsOrder,p as default};
