import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./index-FGJkmGnF.js";import{i as c}from"./index-BAUi5aDK.js";import"./_commonjsHelpers-CqkleIqs.js";var E={};const B=["en","nb","fi","da","sv"],v="en",m=e=>B.find(t=>e===t||e.toLowerCase().includes(t))||v;function M(){if(typeof window>"u"){const e=E.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return m(e)}try{const e=document.documentElement.lang;return m(e)}catch(e){return console.warn("could not detect locale, falling back to source locale",e),v}}const _=(e,t,n,a,r,o)=>e==="nb"?n:e==="fi"?a:e==="da"?r:e==="sv"?o:t,C=(e,t,n,a,r)=>{const o=M(),u=_(o,e,t,n,a,r);c.load(o,u),c.activate(o)},j="",k=JSON.parse("{}"),A=JSON.parse("{}"),H=JSON.parse("{}"),O=JSON.parse("{}"),I=JSON.parse("{}");C(A,O,H,k,I);const d=(e,t)=>{const{primary:n,secondary:a,negative:r,utility:o,quiet:u,small:T,pill:w,loading:q,disabled:S,className:N}=e,L=x(J({primary:n,secondary:a,negative:r,utility:o,quiet:u,small:T,pill:w,loading:q}),N),R=c._({id:"button.aria.loading",message:"Loading...",comment:"Screenreader message for buttons that are loading"});return s.jsxs("div",{className:`w-button ${L}`,children:[s.jsx("style",{href:"Button",precedence:"medium",children:j}),s.jsx("button",{type:e.type||"button",ref:t,disabled:S,children:e.children}),e.loading?s.jsx("span",{className:"sr-only",role:"progressbar","aria-valuenow":0,"aria-valuetext":R}):null]})};function J(e){const t="w-button--",n={};for(const a in e)n[t+a]=e[a];return n}d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}]},name:"e"}],return:{name:"void"}}},description:"Action to be called when the component is clicked"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"CSS styles to inline on the component"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Button type, only applied when href is not set.
@default button`},primary:{required:!1,tsType:{name:"boolean"},description:"Set the button to be a primary, call to action button. Can be combined with `small`.\n@default false"},secondary:{required:!1,tsType:{name:"boolean"},description:"Set the button to be a secondary button. Can be combined with `quiet` and `small`.\n@default false"},negative:{required:!1,tsType:{name:"boolean"},description:"Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.\n@default false"},utility:{required:!1,tsType:{name:"boolean"},description:"Set the button to be a utility style button. Can be combined with `small`.\n@default false"},quiet:{required:!1,tsType:{name:"boolean"},description:`Quieten down the button, can be combined with other button types
@default false`},small:{required:!1,tsType:{name:"boolean"},description:`Set the button to be a small size, can be combined with other button types
@default false`},pill:{required:!1,tsType:{name:"boolean"},description:`Set the button to look like a pill style button
@default false`},loading:{required:!1,tsType:{name:"boolean"},description:`Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.
@default false`},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const D={title:"Button"},i=()=>s.jsx("div",{children:s.jsx(d,{primary:!0,quiet:!0,small:!0,className:"test",children:"Test"})}),l=()=>s.jsx("div",{children:s.jsx(d,{primary:!0,small:!0,loading:!0,quiet:!0,children:"Test"})});i.__docgenInfo={description:"",methods:[],displayName:"Regular"};l.__docgenInfo={description:"",methods:[],displayName:"Regular2"};var p,b,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div>
      <Button primary quiet small className='test'>Test</Button>
    </div>;
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <div>
      <Button primary small loading quiet>Test</Button>
    </div>;
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const F=["Regular","Regular2"];export{i as Regular,l as Regular2,F as __namedExportsOrder,D as default};
