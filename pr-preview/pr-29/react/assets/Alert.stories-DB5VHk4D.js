import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as H}from"./index-BKyFwriW.js";import{c as j}from"./index-FGJkmGnF.js";import{W as m}from"./index-CRjnYzPY.js";import{w as n,e as d}from"./index-Bv0kzN2J.js";import{B as u}from"./Button-CnxNmoOM.js";import{L as $}from"./Link-DFkBc0ja.js";import"./_commonjsHelpers-CqkleIqs.js";import"./style-DKfjRwA5.js";import"./index-BAUi5aDK.js";const M=".w-expandtransition{display:grid;grid-template-rows:0fr;transition:.2s grid-template-rows ease}.w-expandtransition--expanded{grid-template-rows:1fr}.w-expandtransition>div{overflow:hidden}";function U({show:t,children:a}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"ExpandTransition",precedence:"medium",children:M}),e.jsx("div",{className:`w-expandtransition ${t?"w-expandtransition--expanded":""}`,children:e.jsx("div",{children:a})})]})}U.__docgenInfo={description:"",methods:[],displayName:"ExpandTransition",props:{show:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"any"},description:""}}};const Q=".w-alert{--_alert-background: var(--alert-background, var(--w-s-color-background));--_alert-border: var(--alert-border, var(--w-s-color-border));--_alert-border-width: var(--alert-border-width, 1px);--_alert-border-radius: var(--alert-border-radius, 4px);background-color:var(--_alert-background);border:var(--_alert-border-width) solid var(--_alert-border);border-radius:var(--_alert-border-radius);border-left-width:4px;padding:1.2rem;display:flex;font-size:var(--w-font-size-s);line-height:var(--w-line-height-s)}.w-alert--negative{--alert-border: var(--w-s-color-border-negative-subtle);--alert-background: var(--w-s-color-background-negative-subtle)}.w-alert--positive{--alert-border: var(--w-s-color-border-positive-subtle);--alert-background: var(--w-s-color-background-positive-subtle)}.w-alert--warning{--alert-border: var(--w-s-color-border-warning-subtle);--alert-background: var(--w-s-color-background-warning-subtle)}.w-alert--info{--alert-border: var(--w-s-color-border-info-subtle);--alert-background: var(--w-s-color-background-info-subtle)}.w-alert--icon{margin-right:.8rem}.w-alert--content{padding:3.8px 0}",f={info:{class:"w-alert--info",icon:e.jsx(m,{name:"Info",size:"medium"}),iconClass:"s-icon-info"},warning:{class:"w-alert--warning",icon:e.jsx(m,{name:"Warning",size:"medium"}),iconClass:"s-icon-warning"},negative:{class:"w-alert--negative",icon:e.jsx(m,{name:"Error",size:"medium"}),iconClass:"s-icon-negative"},positive:{class:"w-alert--positive",icon:e.jsx(m,{name:"Success",size:"medium"}),iconClass:"s-icon-positive"}};function r(t){const{show:a,type:l,role:g,className:w,children:x,style:L}=t,V=j("w-alert",f[l].class,w);return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"Alert",precedence:"medium",children:Q}),e.jsx(U,{show:a,children:e.jsxs("div",{role:g,className:V,style:L,children:[e.jsx("div",{className:j("w-alert--icon",f[l].iconClass),children:f[l].icon}),e.jsx("div",{className:"w-alert--content",children:x})]})})]})}r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},show:{required:!1,tsType:{name:"boolean"},description:"Determines whether the alert should be visible"},type:{required:!0,tsType:{name:"union",raw:"'info' | 'warning' | 'negative' | 'positive'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:"Type of alert"},role:{required:!1,tsType:{name:"string"},description:'ARIA live region "role" attribute value'},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the container."},id:{required:!1,tsType:{name:"string"},description:"id used for relationship ARIA attributes"}}};const ne={title:"FeedbackIndicators/Alert",component:r},O=t=>e.jsx(r,{...t}),i=O.bind({});i.args={type:"info",show:!0,children:'This is an "info" variant of the alert component'};const s=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{"data-testid":"info",children:[e.jsx("h3",{children:"Info"}),e.jsx(r,{type:"info",show:!0,role:"status",children:'This is an "info" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"warning",children:[e.jsx("h3",{children:"Warning"}),e.jsx(r,{type:"warning",show:!0,role:"alert",children:'This is a "warning" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"negative",children:[e.jsx("h3",{children:"Negative"}),e.jsx(r,{type:"negative",show:!0,role:"alert",children:'This is a "negative" variant of the alert component'})]}),e.jsxs("div",{"data-testid":"positive",children:[e.jsx("h3",{children:"Positive"}),e.jsx(r,{type:"positive",show:!0,role:"status",children:'This is a "positive" variant of the alert component'})]})]});s.play=async({canvasElement:t})=>{const a=n(t),l=n(a.getByTestId("negative"));await d(l.getByRole("alert")).toBeInTheDocument();const g=n(a.getByTestId("positive"));await d(g.getByRole("status")).toBeInTheDocument();const w=n(a.getByTestId("warning"));await d(w.getByRole("alert")).toBeInTheDocument();const x=n(a.getByTestId("info"));await d(x.getByRole("status")).toBeInTheDocument()};const y={fontSize:"1.4rem",lineHeight:"1.8rem"},v=({type:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("h4",{style:y,children:["This is a ",t," variant of the alert component"]}),e.jsx("p",{children:"Use this variant to call extra attention to useful, contextual information."}),e.jsx($,{children:"Link to more information"}),e.jsx("p",{}),e.jsxs("div",{className:"mt-8 space-x-8",children:[e.jsx(u,{size:"small",variant:"secondary",children:"Button"}),e.jsx(u,{size:"small",variant:"utilityQuiet",children:"Button"})]})]}),c=()=>e.jsxs("div",{className:"flex flex-col gap-y-16",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Info"}),e.jsx(r,{type:"info",show:!0,role:"status",children:e.jsx(v,{type:"info"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Warning"}),e.jsx(r,{type:"warning",show:!0,children:e.jsx(v,{type:"warning"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(r,{type:"negative",show:!0,children:e.jsx(v,{type:"negative"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Positive"}),e.jsx(r,{type:"positive",show:!0,role:"status",children:e.jsx(v,{type:"positive"})})]})]}),h=()=>{const[t,a]=H.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with default role="alert"'}),e.jsx(u,{className:"mb-16",size:"small",variant:"primary",onClick:()=>{a(!t)},"aria-controls":"negative-alert","aria-expanded":t,children:t?"Hide negative alert":"Show negative alert"}),e.jsxs(r,{id:"negative-alert",type:"negative",show:t,children:[e.jsx("h4",{style:y,children:'This is a "negative" variant of the alert component'}),e.jsx("p",{children:"Use this variant to call extra attention to useful, contextual information."})]})]})},p=()=>{const[t,a]=H.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:'Example with role="alert" on a descendant element'}),e.jsx(u,{className:"mb-16",size:"small",variant:"primary",onClick:()=>{a(!t)},"aria-controls":"overriden-role-example-alert","aria-expanded":t,children:t?"Hide warning alert":"Show warning alert"}),e.jsxs(r,{id:"overriden-role-example-alert",type:"warning",show:t,children:[e.jsx("h4",{style:y,children:'This is a "warning" variant of the alert component'}),e.jsx("p",{role:"alert",children:"Use this variant to call extra attention to useful, contextual information."})]})]})},o=O.bind({});o.args={...i.args,role:"alert"};o.play=async({canvasElement:t})=>{const a=n(t);await d(a.getByRole("alert")).toBeInTheDocument()};s.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:["static"],params:[{name:"{ canvasElement }",optional:!1,type:null}],returns:null}],displayName:"Variants"};c.__docgenInfo={description:"",methods:[],displayName:"WithInteractiveContent"};h.__docgenInfo={description:"",methods:[],displayName:"WithDefaultRole"};p.__docgenInfo={description:"",methods:[],displayName:"WithOverriddenRole"};var b,T,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Alert {...args} />",...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var A,I,N;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
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
  </div>`,...(N=(I=s.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var k,_,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div className="flex flex-col gap-y-16">
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
  </div>`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var C,R,E;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [show, setShow] = useState(true);
  return <>
      <h3>Example with default role="alert"</h3>
      <Button className="mb-16" size="small" variant="primary" onClick={() => {
      setShow(!show);
    }} aria-controls="negative-alert" aria-expanded={show}>
        {show ? 'Hide negative alert' : 'Show negative alert'}
      </Button>

      <Alert id="negative-alert" type="negative" show={show}>
        <h4 style={h4Style}>This is a "negative" variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
      </Alert>
    </>;
}`,...(E=(R=h.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var W,z,D;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var q,F,P;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:"args => <Alert {...args} />",...(P=(F=o.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const ie=["Default","Variants","WithInteractiveContent","WithDefaultRole","WithOverriddenRole","InfoAlertTask"];export{i as Default,o as InfoAlertTask,s as Variants,h as WithDefaultRole,c as WithInteractiveContent,p as WithOverriddenRole,ie as __namedExportsOrder,ne as default};
