import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as S}from"./index-FGJkmGnF.js";import{i as m}from"./index-BAUi5aDK.js";import"./_commonjsHelpers-CqkleIqs.js";var j={};const L=["en","nb","fi","da","sv"],b="en",d=n=>L.find(a=>n===a||n.toLowerCase().includes(a))||b;function q(){if(typeof window>"u"){const n=j.NMP_LANGUAGE||Intl.DateTimeFormat().resolvedOptions().locale;return d(n)}try{const n=document.documentElement.lang;return d(n)}catch(n){return console.warn("could not detect locale, falling back to source locale",n),b}}const w=(n,a,l,s,r,i)=>n==="nb"?l:n==="fi"?s:n==="da"?r:n==="sv"?i:a,Q=(n,a,l,s,r)=>{const i=q(),u=w(i,n,a,l,s,r);m.load(i,u),m.activate(i)},T="",_=JSON.parse('{"button.aria.loading":["Loading..."]}'),k=JSON.parse('{"button.aria.loading":["Loading..."]}'),E=JSON.parse('{"button.aria.loading":["Loading..."]}'),D=JSON.parse('{"button.aria.loading":["Loading..."]}'),M=JSON.parse('{"button.aria.loading":["Loading..."]}');Q(k,D,E,_,M);const t=(n,a)=>{const{primary:l,secondary:s,negative:r,utility:i,quiet:u,small:h,pill:y,loading:N,disabled:B,className:v}=n,x=S(C({primary:l,secondary:s,negative:r,utility:i,quiet:u,small:h,pill:y,loading:N}),v),f=m._({id:"button.aria.loading",message:"Loading...",comment:"Screenreader message for buttons that are loading"});return e.jsxs("div",{className:`w-button ${x}`,children:[e.jsx("style",{href:"Button",precedence:"medium",children:T}),e.jsx("button",{type:n.type||"button",ref:a,disabled:B,children:n.children}),n.loading?e.jsx("span",{className:"sr-only",role:"progressbar","aria-valuenow":0,"aria-valuetext":f}):null]})};function C(n){const a="w-button--",l={};for(const s in n)l[a+s]=n[s];return l}t.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLAnchorElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLAnchorElement"}]}]},name:"e"}],return:{name:"void"}}},description:"Action to be called when the component is clicked"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"CSS styles to inline on the component"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Button type, only applied when href is not set.
@default button`},primary:{required:!1,tsType:{name:"boolean"},description:"Set the button to be a primary, call to action button. Can be combined with `small`.\n@default false"},secondary:{required:!1,tsType:{name:"boolean"},description:"Set the button to be a secondary button. Can be combined with `quiet` and `small`.\n@default false"},negative:{required:!1,tsType:{name:"boolean"},description:"Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.\n@default false"},utility:{required:!1,tsType:{name:"boolean"},description:"Set the button to be a utility style button. Can be combined with `small`.\n@default false"},quiet:{required:!1,tsType:{name:"boolean"},description:`Quieten down the button, can be combined with other button types
@default false`},small:{required:!1,tsType:{name:"boolean"},description:`Set the button to be a small size, can be combined with other button types
@default false`},pill:{required:!1,tsType:{name:"boolean"},description:`Set the button to look like a pill style button
@default false`},loading:{required:!1,tsType:{name:"boolean"},description:`Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.
@default false`},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const P={title:"Button"},o=()=>e.jsxs("div",{className:"flex flex-col space-y-32",children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Primary"}),e.jsx(t,{className:"mr-32",primary:!0,children:"Simple"}),e.jsx(t,{className:"mr-32",primary:!0,loading:!0,children:"Loading"}),e.jsx(t,{className:"mr-32",primary:!0,small:!0,children:"Small"}),e.jsx(t,{className:"mr-32",primary:!0,small:!0,loading:!0,children:"Small Loading"}),e.jsx(t,{className:"mr-32",primary:!0,quiet:!0,children:"Quiet"}),e.jsx(t,{className:"mr-32",primary:!0,quiet:!0,small:!0,children:"Quiet Small"}),e.jsx(t,{className:"mr-32",primary:!0,quiet:!0,small:!0,loading:!0,children:"Quiet Small Loading"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Secondary"}),e.jsx(t,{className:"mr-32",secondary:!0,children:"Simple"}),e.jsx(t,{className:"mr-32",secondary:!0,loading:!0,children:"Loading"}),e.jsx(t,{className:"mr-32",secondary:!0,quiet:!0,children:"Quiet"}),e.jsx(t,{className:"mr-32",secondary:!0,quiet:!0,loading:!0,children:"Quiet Loading"}),e.jsx(t,{className:"mr-32",secondary:!0,small:!0,children:"Small"}),e.jsx(t,{className:"mr-32",secondary:!0,small:!0,loading:!0,children:"Small Loading"}),e.jsx(t,{className:"mr-32",secondary:!0,quiet:!0,small:!0,children:"Quiet Small"}),e.jsx(t,{className:"mr-32",secondary:!0,quiet:!0,small:!0,loading:!0,children:"Quiet Small Loading"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Negative"}),e.jsx(t,{className:"mr-32",negative:!0,children:"Negative"}),e.jsx(t,{className:"mr-32",negative:!0,loading:!0,children:"Negative Loading"}),e.jsx(t,{className:"mr-32",negative:!0,small:!0,children:"Negative Small"}),e.jsx(t,{className:"mr-32",negative:!0,small:!0,loading:!0,children:"Negative Small Loading"}),e.jsx(t,{className:"mr-32",negative:!0,quiet:!0,children:"Quiet"}),e.jsx(t,{className:"mr-32",negative:!0,quiet:!0,loading:!0,children:"Quiet Loading"}),e.jsx(t,{className:"mr-32",negative:!0,quiet:!0,small:!0,children:"Quiet Small"}),e.jsx(t,{className:"mr-32",negative:!0,quiet:!0,small:!0,loading:!0,children:"Quiet Small Loading"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Utility"}),e.jsx(t,{className:"mr-32",utility:!0,children:"Simple"}),e.jsx(t,{className:"mr-32",utility:!0,loading:!0,children:"Loading"}),e.jsx(t,{className:"mr-32",utility:!0,small:!0,children:"Small"}),e.jsx(t,{className:"mr-32",utility:!0,small:!0,loading:!0,children:"Small Loading"}),e.jsx(t,{className:"mr-32",utility:!0,quiet:!0,children:"Quiet"}),e.jsx(t,{className:"mr-32",utility:!0,quiet:!0,small:!0,children:"Quiet small"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Pill"}),e.jsx(t,{className:"mr-32",pill:!0,children:"Simple pill"}),e.jsx(t,{className:"mr-32",pill:!0,small:!0,children:"Simple small pill"}),e.jsx(t,{className:"mr-32",pill:!0,loading:!0,children:"Loading"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Disabled button"}),e.jsx(t,{secondary:!0,small:!0,quiet:!0,disabled:!0,className:"mr-32",target:"_blank",children:"Disabled small quiet secondary button"}),e.jsx(t,{primary:!0,disabled:!0,className:"mr-32",target:"_blank",children:"Disabled button primary"}),e.jsx(t,{primary:!0,small:!0,disabled:!0,className:"mr-32",target:"_blank",children:"Disabled button small primary"}),e.jsx(t,{negative:!0,disabled:!0,className:"mr-32",target:"_blank",children:"Disabled button negative"}),e.jsx(t,{utility:!0,disabled:!0,className:"mr-32",target:"_blank",children:"Disabled button utility"}),e.jsx(t,{utility:!0,disabled:!0,small:!0,className:"mr-32",target:"_blank",children:"Disabled button utility small"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Full width button"}),e.jsx(t,{fullWidth:!0,className:"mr-32",primary:!0,children:"Full width"})]})]});o.__docgenInfo={description:"",methods:[],displayName:"Example"};var c,g,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => <div className="flex flex-col space-y-32">
    <div>
      <h3>Primary</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" primary>
        Simple
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary loading>
        Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary small>
        Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary small loading>
        Small Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary quiet>
        Quiet
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary quiet small>
        Quiet Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Secondary</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary>
        Simple
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary loading>
        Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary quiet>
        Quiet
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary quiet loading>
        Quiet Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary small>
        Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary small loading>
        Small Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary quiet small>
        Quiet Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Negative</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" negative>
        Negative
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative loading>
        Negative Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative small>
        Negative Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative small loading>
        Negative Small Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative quiet>
        Quiet
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative quiet loading>
        Quiet Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative quiet small>
        Quiet Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Utility</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" utility>
        Simple
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility loading>
        Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility small>
        Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility small loading>
        Small Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility quiet>
        Quiet
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility quiet small>
        Quiet small
      </Button>
    </div>
    <div>
      <h3>Pill</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" pill>
        Simple pill
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" pill small>
        Simple small pill
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" pill loading>
        Loading
      </Button>
    </div>

    <div>
      <h3>Disabled button</h3>
      {/* @ts-ignore */}
      <Button secondary small quiet disabled className="mr-32" target="_blank">
        Disabled small quiet secondary button
      </Button>
      {/* @ts-ignore */}
      <Button primary disabled className="mr-32" target="_blank">
        Disabled button primary
      </Button>
      {/* @ts-ignore */}
      <Button primary small disabled className="mr-32" target="_blank">
        Disabled button small primary
      </Button>
      {/* @ts-ignore */}
      <Button negative disabled className="mr-32" target="_blank">
        Disabled button negative
      </Button>
      {/* @ts-ignore */}
      <Button utility disabled className="mr-32" target="_blank">
        Disabled button utility
      </Button>
      {/* @ts-ignore */}
      <Button utility disabled small className="mr-32" target="_blank">
        Disabled button utility small
      </Button>
    </div>
    <div>
      <h3>Full width button</h3>
      {/* @ts-ignore */}
      <Button fullWidth className="mr-32" primary>
        Full width
      </Button>
    </div>
  </div>`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const F=["Example"];export{o as Example,F as __namedExportsOrder,P as default};
