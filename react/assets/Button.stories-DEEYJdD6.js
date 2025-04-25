import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as S}from"./index-FGJkmGnF.js";import{i as c}from"./index-BAUi5aDK.js";import{b as L}from"./style-SB28ug5I.js";import"./_commonjsHelpers-CqkleIqs.js";var z={};const T=["en","nb","fi","da","sv"],f="en",m=i=>T.find(a=>i===a||i.toLowerCase().includes(a))||f;function N(){if(typeof window>"u"){const i=z.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return m(i)}try{const i=document.documentElement.lang;return m(i)}catch(i){return console.warn("could not detect locale, falling back to source locale",i),f}}const Q=(i,a,l,o,s,n)=>i==="nb"?l:i==="fi"?o:i==="da"?s:i==="sv"?n:a,k=(i,a,l,o,s)=>{const n=N(),u=Q(n,i,a,l,o,s);c.load(n,u),c.activate(n)},q=JSON.parse('{"button.aria.loading":["Loading..."]}'),D=JSON.parse('{"button.aria.loading":["Loading..."]}'),E=JSON.parse('{"button.aria.loading":["Loading..."]}'),A=JSON.parse('{"button.aria.loading":["Loading..."]}'),R=JSON.parse('{"button.aria.loading":["Loading..."]}');k(D,A,E,q,R);const e=i=>{const{variant:a,size:l,loading:o,fullWidth:s,disabled:n,className:u,ref:x,...b}=i,j=S("w-button",{"w-button--primary":a==="primary","w-button--secondary":a==="secondary","w-button--negative":a==="negative","w-button--utility":a==="utility","w-button--quiet":a==="quiet","w-button--negative-quiet":a==="negativeQuiet","w-button--utility-quiet":a==="utilityQuiet","w-button--overlay-quiet":a==="overlayQuiet","w-button--link":a==="link","w-button--small":l==="small","w-button--full-width":s,"w-button--loading":o,"w-button--disabled":n},u),w=c._({id:"button.aria.loading",message:"Loading...",comment:"Screenreader message for buttons that are loading"});return t.jsxs(t.Fragment,{children:[t.jsx("style",{href:"Button",precedence:"medium",children:L}),t.jsx("button",{...b,type:i.type||"button",ref:x,className:j,disabled:n,role:a==="link"?"link":"button",children:i.children}),i.loading?t.jsx("span",{className:"sr-only",role:"progressbar","aria-valuenow":0,"aria-valuetext":w}):null]})};e.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Action to be called when the component is clicked"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"CSS styles to inline on the component"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Button type.
@default button`},variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'negative'
| 'utility'
| 'quiet'
| 'negativeQuiet'
| 'utilityQuiet'
| 'overlayQuiet'
| 'link'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'utility'"},{name:"literal",value:"'quiet'"},{name:"literal",value:"'negativeQuiet'"},{name:"literal",value:"'utilityQuiet'"},{name:"literal",value:"'overlayQuiet'"},{name:"literal",value:"'link'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:`Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.
@default false`},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Sets the button's width to its parent's width. Useful on mobile when button should take full width."},disabled:{required:!1,tsType:{name:"boolean"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""}}};const F={title:"Button",component:e,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","negative","utility","quiet","negativeQuiet","utilityQuiet","overlayQuiet","link"]}}},_=i=>t.jsx(e,{...i}),r=_.bind({});r.args={variant:"primary",size:"default",loading:!1,disabled:!1,fullWidth:!1,children:"This is a button"};const d=()=>t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("h3",{children:"Variants"}),t.jsx("p",{children:"Allowed values: empty, or one of variant"}),t.jsx(e,{children:"Default"}),t.jsx(e,{variant:"primary",children:"Primary"}),t.jsx(e,{variant:"secondary",children:"Secondary"}),t.jsx(e,{variant:"negative",children:"Negative"}),t.jsx(e,{variant:"utility",children:"Utility"}),t.jsx(e,{variant:"quiet",children:"Quiet"}),t.jsx(e,{variant:"negativeQuiet",children:"Negative-Quiet"}),t.jsx(e,{variant:"utilityQuiet",children:"utility-Quiet"}),t.jsxs("p",{style:{marginTop:"10px"},children:["This is a ",t.jsx(e,{variant:"link",children:"button"})," pretending to be a link."]})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Sizes"}),t.jsx("p",{children:"Allowed values: empty(default) or one size "}),t.jsx(e,{children:"Default"}),t.jsx(e,{size:"small",children:"Default small"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"widths"}),t.jsx("p",{children:"Allowed values: empty(default) or one width "}),t.jsx(e,{children:"Default"}),t.jsx(e,{fullWidth:!0,children:"Default fullWidth"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"States"}),t.jsx("p",{children:"Allowed values: empty(default) or any number of states"}),t.jsx("p",{children:"Loading state, Pattern is supposed to be: button is triggered, button is disabled until loading success, while in the disabled state it also show loading animation to show something is happening."}),t.jsx(e,{children:"Default"}),t.jsx(e,{disabled:!0,children:"Default disabled"}),t.jsx(e,{loading:!0,children:"Default loading"})]}),t.jsx("h2",{style:{marginTop:"100px"},children:"All combos"}),t.jsxs("div",{children:[t.jsx("h3",{children:"Default (Secondary)"}),t.jsx(e,{children:"Button"}),t.jsx(e,{loading:!0,disabled:!0,children:"Loading"}),t.jsx(e,{size:"small",children:"Small"}),t.jsx(e,{size:"small",loading:!0,children:"Small Loading"}),t.jsx(e,{disabled:!0,children:"Disabled"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Primary"}),t.jsx(e,{variant:"primary",children:"Button"}),t.jsx(e,{variant:"primary",loading:!0,children:"Loading"}),t.jsx(e,{variant:"primary",size:"small",children:"Small"}),t.jsx(e,{variant:"primary",size:"small",loading:!0,children:"Small Loading"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Secondary"}),t.jsx(e,{variant:"secondary",children:"Button"}),t.jsx(e,{variant:"secondary",loading:!0,children:"Loading"}),t.jsx(e,{variant:"secondary",size:"small",children:"Small"}),t.jsx(e,{variant:"secondary",size:"small",loading:!0,children:"Small Loading"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Negative"}),t.jsx(e,{variant:"negative",children:"Button"}),t.jsx(e,{variant:"negative",loading:!0,children:"Negative Loading"}),t.jsx(e,{variant:"negative",size:"small",children:"Negative Small"}),t.jsx(e,{variant:"negative",size:"small",loading:!0,children:"Negative Small Loading"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Utility"}),t.jsx(e,{variant:"utility",children:"Button"}),t.jsx(e,{variant:"utility",loading:!0,children:"Loading"}),t.jsx(e,{variant:"utility",size:"small",children:"Small"}),t.jsx(e,{variant:"utility",size:"small",loading:!0,children:"Small Loading"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Link"}),"This is a ",t.jsx(e,{variant:"link",children:"button"})," pretending to be a link."]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Overlay"}),t.jsx(e,{variant:"overlayQuiet",children:"Overlay quiet"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Full width button"}),t.jsx(e,{fullWidth:!0,variant:"primary",children:"Full width"})]})]});d.__docgenInfo={description:"",methods:[],displayName:"Example"};var v,h,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Button {...args} />",...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var p,y,B;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div>
    <div>
      <h3>Variants</h3>
      <p>Allowed values: empty, or one of variant</p>
      <Button>Default</Button>

      <Button variant="primary">Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="negative">Negative</Button>

      <Button variant="utility">Utility</Button>

      <Button variant="quiet">Quiet</Button>

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
      <h3>Overlay</h3>
      <Button variant="overlayQuiet">Overlay quiet</Button>
    </div>

    <div>
      <h3>Full width button</h3>

      <Button fullWidth variant="primary">
        Full width
      </Button>
    </div>
  </div>`,...(B=(y=d.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const U=["Default","Example"];export{r as Default,d as Example,U as __namedExportsOrder,F as default};
