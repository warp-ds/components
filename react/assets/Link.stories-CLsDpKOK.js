import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as j}from"./style-DhxcUcNZ.js";import{c as q}from"./index-FGJkmGnF.js";import"./_commonjsHelpers-CqkleIqs.js";const t=i=>{const{button:o,variant:n,size:b,fullWidth:k,disabled:l,className:p,target:f,href:v,ref:y,...L}=i,x=q({"w-button":o,"w-button--primary":n==="primary","w-button--secondary":n==="secondary","w-button--negative":n==="negative","w-button--utility":n==="utility","w-button--quiet":n==="quiet","w-button--negative-quiet":n==="negativeQuiet","w-button--utility-quiet":n==="utilityQuiet","w-button--small":b==="small","w-button--full-width":k,"w-button--disabled":o&&l},p);return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"Button",precedence:"medium",children:j}),e.jsx("a",{...L,onClick:w=>{var s;return(s=i.onClick)==null?void 0:s.call(i,w)},"aria-current":i["aria-current"],href:l?void 0:v,target:f,rel:i.target==="_blank"?i.rel||"noopener":void 0,ref:y,className:x,role:o&&"button","aria-disabled":l,children:i.children})]})};t.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"e"}],return:{name:"void"}}},description:"Action to be called when the component is clicked"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"CSS styles to inline on the component"},button:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'negative' | 'utility' | 'quiet' | 'negativeQuiet' | 'utilityQuiet'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'utility'"},{name:"literal",value:"'quiet'"},{name:"literal",value:"'negativeQuiet'"},{name:"literal",value:"'utilityQuiet'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Sets the link's width to its parent's width. Useful on mobile when link should take full width."},href:{required:!1,tsType:{name:"string"},description:"Set the href for the location where clicking the link will take you to."},target:{required:!1,tsType:{name:"string"},description:"Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"},rel:{required:!1,tsType:{name:"string"},description:"The relationship of the linked URL"},disabled:{required:!1,tsType:{name:"boolean"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLAnchorElement"}],raw:"Ref<HTMLAnchorElement>"},description:""}}};const S={title:"Link",component:t,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","negative","utility","quiet","negativeQuiet","utilityQuiet","overlayQuiet"]}}},_=i=>e.jsx(t,{...i}),a=_.bind({});a.args={variant:"primary",button:!0,size:"default",disabled:!1,fullWidth:!1,children:"This is a link"};const r=()=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default link"}),e.jsx(t,{href:"https://google.com",children:"Link"})]}),e.jsx("p",{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Link styled as button"}),e.jsx(t,{button:!0,href:"https://google.com/",target:"_blank",children:"Link as button"}),e.jsx(t,{button:!0,variant:"primary",href:"https://google.com/",target:"_blank",children:"Link as button primary"}),e.jsx(t,{button:!0,variant:"negative",href:"https://google.com/",target:"_blank",children:"Link as button negative"}),e.jsx(t,{button:!0,variant:"quiet",href:"https://google.com/",target:"_blank",children:"Link as button negative"}),e.jsx(t,{button:!0,variant:"utility",href:"https://google.com/",target:"_blank",children:"Link as button utility"}),e.jsx(t,{button:!0,variant:"negativeQuiet",href:"https://google.com/",target:"_blank",children:"Link as button negative quiet"}),e.jsx(t,{button:!0,variant:"utilityQuiet",href:"https://google.com/",target:"_blank",children:"Link as button utility quiet"}),e.jsx(t,{button:!0,disabled:!0,href:"https://google.com/",target:"_blank",children:"Link as button disabled"}),e.jsx(t,{button:!0,href:"https://google.com/",target:"_blank",onClick:()=>alert("you've clicked"),children:"Link with onClick"})]}),e.jsx("p",{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Full width Link (href) styled as button"}),e.jsx(t,{button:!0,fullWidth:!0,variant:"primary",href:"https://google.com/",children:"Go to google.com"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Example"};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Link {...args} />",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,m,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div>
    <div>
      <h3>Default link</h3>

      <Link href="https://google.com">Link</Link>
    </div>
    <p />
    <div>
      <h3>Link styled as button</h3>

      <Link button href="https://google.com/" target="_blank">
        Link as button
      </Link>

      <Link button variant="primary" href="https://google.com/" target="_blank">
        Link as button primary
      </Link>

      <Link button variant="negative" href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button variant="quiet" href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button variant="utility" href="https://google.com/" target="_blank">
        Link as button utility
      </Link>

      <Link button variant="negativeQuiet" href="https://google.com/" target="_blank">
        Link as button negative quiet
      </Link>

      <Link button variant="utilityQuiet" href="https://google.com/" target="_blank">
        Link as button utility quiet
      </Link>

      <Link button disabled href="https://google.com/" target="_blank">
        Link as button disabled
      </Link>

      <Link button href="https://google.com/" target="_blank" onClick={() => alert("you've clicked")}>
        Link with onClick
      </Link>
    </div>
    <p />
    <div>
      <h3>Full width Link (href) styled as button</h3>
      <Link button fullWidth variant="primary" href="https://google.com/">
        Go to google.com
      </Link>
    </div>
  </div>`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const C=["Default","Example"];export{a as Default,r as Example,C as __namedExportsOrder,S as default};
