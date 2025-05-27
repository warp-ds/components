import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./index-BKyFwriW.js";import{c as y}from"./index-FGJkmGnF.js";import{W as g}from"./index-CRjnYzPY.js";import{w as s,e as i}from"./index-Bv0kzN2J.js";import{B as x}from"./Button-CnxNmoOM.js";import{L as V}from"./Link-DFkBc0ja.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-DKfjRwA5.js";import"./index-BAUi5aDK.js";const $=".w-expandtransition{display:grid;grid-template-rows:0fr;transition:.2s grid-template-rows ease}.w-expandtransition--expanded{grid-template-rows:1fr}.w-expandtransition>div{overflow:hidden}";function H({show:t,children:a}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ExpandTransition",precedence:"medium",children:$}),e.jsx("div",{className:`w-expandtransition ${t?"w-expandtransition--expanded":""}`,children:e.jsx("div",{children:a})})]})}H.__docgenInfo={description:"",methods:[],displayName:"ExpandTransition",props:{show:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"any"},description:""}}};const M=".w-alert{--_alert-background: var(--alert-background, var(--w-s-color-background));--_alert-border: var(--alert-border, var(--w-s-color-border));--_alert-border-width: var(--alert-border-width, 1px);--_alert-border-radius: var(--alert-border-radius, 4px);background-color:var(--_alert-background);border:var(--_alert-border-width) solid var(--_alert-border);border-radius:var(--_alert-border-radius);border-left-width:4px;padding:1.6rem;display:flex;font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.w-alert--negative{--alert-border: var(--w-s-color-border-negative-subtle);--alert-background: var(--w-s-color-background-negative-subtle)}.w-alert--positive{--alert-border: var(--w-s-color-border-positive-subtle);--alert-background: var(--w-s-color-background-positive-subtle)}.w-alert--warning{--alert-border: var(--w-s-color-border-warning-subtle);--alert-background: var(--w-s-color-background-warning-subtle)}.w-alert--info{--alert-border: var(--w-s-color-border-info-subtle);--alert-background: var(--w-s-color-background-info-subtle)}.w-alert--icon{margin-right:.8rem}",Q={negative:e.jsx(g,{name:"Error",size:"18px"}),positive:e.jsx(g,{name:"Success",size:"18px"}),warning:e.jsx(g,{name:"Warning",size:"18px"}),info:e.jsx(g,{name:"Info",size:"18px"})},G={negative:"s-icon-negative",positive:"s-icon-positive",warning:"s-icon-warning",info:"s-icon-info"};function r(t){const{show:a,type:n,role:m,className:v,children:u,style:U}=t,L=y("w-alert",{"w-alert--negative":n==="negative","w-alert--positive":n==="positive","w-alert--warning":n==="warning","w-alert--info":n==="info"},v);return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"Alert",precedence:"medium",children:M}),e.jsx(H,{show:a,children:e.jsxs("div",{role:m,className:L,style:U,children:[e.jsx("div",{className:y("w-alert--icon",G[n]),children:Q[n]}),e.jsx("div",{children:u})]})})]})}r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},show:{required:!1,tsType:{name:"boolean"},description:"Determines whether the alert should be visible"},type:{required:!0,tsType:{name:"union",raw:"'info' | 'warning' | 'negative' | 'positive'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:"Type of alert"},role:{required:!1,tsType:{name:"string"},description:'ARIA live region "role" attribute value'},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the container."},id:{required:!1,tsType:{name:"string"},description:"id used for relationship ARIA attributes"}}};const ie={title:"FeedbackIndicators/Alert",component:r},O=t=>e.jsx(r,{...t}),o=O.bind({});o.args={type:"info",show:!0,children:'This is an "info" variant of the alert component'};const l=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{"data-testid":"info",children:[e.jsx("h3",{children:"Info"}),e.jsx(r,{type:"info",show:!0,role:"status",children:'This is an "info" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"warning",children:[e.jsx("h3",{children:"Warning"}),e.jsx(r,{type:"warning",show:!0,role:"alert",children:'This is a "warning" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"negative",children:[e.jsx("h3",{children:"Negative"}),e.jsx(r,{type:"negative",show:!0,role:"alert",children:'This is a "negative" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"positive",children:[e.jsx("h3",{children:"Positive"}),e.jsx(r,{type:"positive",show:!0,role:"status",children:'This is a "positive" variant of the alert component'})]})]});l.play=async({canvasElement:t})=>{const a=s(t),n=s(a.getByTestId("negative"));await i(n.getByRole("alert")).toBeInTheDocument(),await i(n.getByTitle(/Octagon/)).toBeInTheDocument();const m=s(a.getByTestId("positive"));await i(m.getByRole("status")).toBeInTheDocument(),await i(m.getByTitle(/checkmark/)).toBeInTheDocument();const v=s(a.getByTestId("warning"));await i(v.getByRole("alert")).toBeInTheDocument(),await i(v.getByTitle(/Warning/)).toBeInTheDocument();const u=s(a.getByTestId("info"));await i(u.getByRole("status")).toBeInTheDocument(),await i(u.getByTitle(/Information/)).toBeInTheDocument()};const f={fontSize:"1.4rem",lineHeight:"1.8rem"},w=({type:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("h4",{style:f,children:["This is a ",t," variant of the alert component"]}),e.jsx("p",{children:"Use this variant to call extra attention to useful, contextual information."}),e.jsx(V,{children:"Link to more information"}),e.jsx("p",{}),e.jsxs("div",{className:"mt-8 space-x-8",children:[e.jsx(x,{size:"small",variant:"secondary",children:"Button"}),e.jsx(x,{size:"small",variant:"utilityQuiet",children:"Button"})]})]}),c=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(r,{type:"info",show:!0,role:"status",children:e.jsx(w,{type:"info"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(r,{type:"warning",show:!0,children:e.jsx(w,{type:"warning"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(r,{type:"negative",show:!0,children:e.jsx(w,{type:"negative"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(r,{type:"positive",show:!0,role:"status",children:e.jsx(w,{type:"positive"})})]})]}),h=()=>{const[t,a]=P.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with default role="alert"'}),e.jsx(x,{className:"mb-16",size:"small",variant:"primary",onClick:()=>{a(!t)},"aria-controls":"negative-alert","aria-expanded":t,children:t?"Hide negative alert":"Show negative alert"}),e.jsxs(r,{id:"negative-alert",type:"negative",show:t,children:[e.jsx("h4",{style:f,children:'This is "negative" variant of the alert component'}),e.jsx("p",{children:"Use this variant to call extra attention to useful, contextual information."})]})]})},p=()=>{const[t,a]=P.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with role="alert" on a descendant element'}),e.jsx(x,{className:"mb-16",size:"small",variant:"primary",onClick:()=>{a(!t)},"aria-controls":"overriden-role-example-alert","aria-expanded":t,children:t?"Hide warning alert":"Show warning alert"}),e.jsxs(r,{id:"overriden-role-example-alert",type:"warning",show:t,children:[e.jsx("h4",{style:f,children:'This is a "warning" variant of the alert component'}),e.jsx("p",{role:"alert",children:"Use this variant to call extra attention to useful, contextual information."})]})]})},d=O.bind({});d.args={...o.args};d.play=async({canvasElement:t})=>{const a=s(t);await i(a.getByRole("alert")).toBeInTheDocument()};l.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Variants"};c.__docgenInfo={description:"",methods:[],displayName:"WithInteractiveContent"};h.__docgenInfo={description:"",methods:[],displayName:"WithDefaultRole"};p.__docgenInfo={description:"",methods:[],displayName:"WithOverriddenRole"};var j,b,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:"args => <Alert {...args} />",...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var I,S,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div data-testid="info">
      <h3>Info</h3>
      {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
      <Alert type="info" show role="status">
        This is an "info" variant of the alert component
      </Alert>
    </div>
    <div data-testid="warning">
      <h3>Warning</h3>
      <Alert type="warning" show role="alert">
        This is a "warning" variant of the alert component
      </Alert>
    </div>
    <div data-testid="negative">
      <h3>Negative</h3>
      <Alert type="negative" show role="alert">
        This is a "negative" variant of the alert component
      </Alert>
    </div>
    <div data-testid="positive">
      <h3>Positive</h3>
      {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
      <Alert type="positive" show role="status">
        This is a "positive" variant of the alert component
      </Alert>
    </div>
  </div>`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var B,N,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
    <div>
      <h3>Info</h3>
      {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
      <Alert type="info" show role="status">
        <InteractiveContent type="info" />
      </Alert>
    </div>
    <div>
      <h3>Warning</h3>
      <Alert type="warning" show>
        <InteractiveContent type="warning" />
      </Alert>
    </div>
    <div>
      <h3>Negative</h3>
      <Alert type="negative" show>
        <InteractiveContent type="negative" />
      </Alert>
    </div>
    <div>
      <h3>Positive</h3>
      {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
      <Alert type="positive" show role="status">
        <InteractiveContent type="positive" />
      </Alert>
    </div>
  </div>`,...(k=(N=c.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var _,R,W;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(true);
  return <>
      <h3>Example with default role="alert"</h3>
      <Button className="mb-16" size="small" variant="primary" onClick={() => {
      setShow(!show);
    }} aria-controls="negative-alert" aria-expanded={show}>
        {show ? 'Hide negative alert' : 'Show negative alert'}
      </Button>

      <Alert id="negative-alert" type="negative" show={show}>
        <h4 style={h4Style}>This is "negative" variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
      </Alert>
    </>;
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var C,E,D;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(true);
  return <>
      <h3>Example with role="alert" on a descendant element</h3>
      <Button className="mb-16" size="small" variant="primary" onClick={() => {
      setShow(!show);
    }} aria-controls="overriden-role-example-alert" aria-expanded={show}>
        {show ? 'Hide warning alert' : 'Show warning alert'}
      </Button>
      <Alert id="overriden-role-example-alert" type="warning" show={show}>
        <h4 style={h4Style}>This is a "warning" variant of the alert component</h4>
        <p role="alert">Use this variant to call extra attention to useful, contextual information.</p>
      </Alert>
    </>;
}`,...(D=(E=p.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var z,q,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:"args => <Alert {...args} />",...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const se=["Default","Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole","InfoAlertTask"];export{o as Default,d as InfoAlertTask,l as Variants,h as WithDefaultRole,c as WithInteractiveContent,p as WithOverriddenRole,se as __namedExportsOrder,ie as default};
