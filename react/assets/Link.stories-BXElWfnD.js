import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as _}from"./index-FGJkmGnF.js";import{b as j}from"./style-SB28ug5I.js";import"./_commonjsHelpers-CqkleIqs.js";const e=(i,b)=>{const{button:l,variant:n,size:k,fullWidth:p,disabled:o,className:v,target:f,href:y,...L}=i,w=_("w-link",{"w-button":l,"w-button--primary":n==="primary","w-button--secondary":n==="secondary","w-button--negative":n==="negative","w-button--utility":n==="utility","w-button--quiet":n==="quiet","w-button--negative-quiet":n==="negativeQuiet","w-button--utility-quiet":n==="utilityQuiet","w-button--small":k==="small","w-button--full-width":p,"w-button--disabled":o},v);return t.jsxs(t.Fragment,{children:[t.jsx("style",{href:"Button",precedence:"medium",children:j}),t.jsx("a",{...L,onClick:x=>{var s;return(s=i.onClick)==null?void 0:s.call(i,x)},"aria-current":i["aria-current"],href:o?void 0:y,target:f,rel:i.target==="_blank"?i.rel||"noopener":void 0,ref:b,className:w,role:l&&"button","aria-disabled":o,children:i.children})]})};e.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"e"}],return:{name:"void"}}},description:"Action to be called when the component is clicked"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"CSS styles to inline on the component"},button:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'negative' | 'utility' | 'quiet' | 'negativeQuiet' | 'utilityQuiet'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'utility'"},{name:"literal",value:"'quiet'"},{name:"literal",value:"'negativeQuiet'"},{name:"literal",value:"'utilityQuiet'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"}]},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Sets the link's width to its parent's width. Useful on mobile when link should take full width."},href:{required:!1,tsType:{name:"string"},description:"Set the href for the location where clicking the link will take you to."},target:{required:!1,tsType:{name:"string"},description:"Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"},rel:{required:!1,tsType:{name:"string"},description:"The relationship of the linked URL"},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const R={title:"Link",component:e,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","negative","utility","quiet","negativeQuiet","utilityQuiet","overlayQuiet"]}}},q=i=>t.jsx(e,{...i}),a=q.bind({});a.args={variant:"primary",button:!0,size:"default",disabled:!1,fullWidth:!1,children:"This is a link"};const r=()=>t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("h3",{children:"Default link"}),t.jsx(e,{href:"https://google.com",children:"Link"})]}),t.jsx("p",{}),t.jsxs("div",{children:[t.jsx("h3",{children:"Link styled as button"}),t.jsx(e,{button:!0,href:"https://google.com/",target:"_blank",children:"Link as button"}),t.jsx(e,{button:!0,variant:"primary",href:"https://google.com/",target:"_blank",children:"Link as button primary"}),t.jsx(e,{button:!0,variant:"negative",href:"https://google.com/",target:"_blank",children:"Link as button negative"}),t.jsx(e,{button:!0,variant:"quiet",href:"https://google.com/",target:"_blank",children:"Link as button negative"}),t.jsx(e,{button:!0,variant:"utility",href:"https://google.com/",target:"_blank",children:"Link as button utility"}),t.jsx(e,{button:!0,variant:"negativeQuiet",href:"https://google.com/",target:"_blank",children:"Link as button negative quiet"}),t.jsx(e,{button:!0,variant:"utilityQuiet",href:"https://google.com/",target:"_blank",children:"Link as button utility quiet"}),t.jsx(e,{button:!0,disabled:!0,href:"https://google.com/",target:"_blank",children:"Link as button disabled"}),t.jsx(e,{button:!0,href:"https://google.com/",target:"_blank",onClick:()=>alert("you've clicked"),children:"Link with onClick"})]}),t.jsxs("div",{children:[t.jsx("h3",{children:"Full width Link (href) styled as button"}),t.jsx(e,{button:!0,fullWidth:!0,variant:"primary",href:"https://google.com/",children:"Go to google.com"})]})]});r.__docgenInfo={description:"",methods:[],displayName:"Example"};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"args => <Link {...args} />",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,m,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div>
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

    <div>
      <h3>Full width Link (href) styled as button</h3>
      <Link button fullWidth variant="primary" href="https://google.com/">
        Go to google.com
      </Link>
    </div>
  </div>`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const C=["Default","Example"];export{a as Default,r as Example,C as __namedExportsOrder,R as default};
