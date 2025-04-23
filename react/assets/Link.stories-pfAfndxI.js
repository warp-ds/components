import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as j}from"./index-FGJkmGnF.js";import{t as T,b as S}from"./Button-CFDNVtMU.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BAUi5aDK.js";const t=(n,d)=>{const{button:a,primary:c,secondary:h,negative:b,utility:m,quiet:g,negativeQuiet:k,utilityQuiet:p,small:f,fullWidth:y,disabled:o,className:L,target:v,href:x,...q}=n,w=j("w-link",{"w-button":a,...T({primary:c,secondary:h,negative:b,utility:m,quiet:g,negativeQuiet:k,utilityQuiet:p,small:f,fullWidth:y,disabled:o})},L);return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"Button",precedence:"medium",children:S}),e.jsx("a",{...q,onClick:_=>{var l;return(l=n.onClick)==null?void 0:l.call(n,_)},"aria-current":n["aria-current"],href:o?void 0:x,target:v,rel:n.target==="_blank"?n.rel||"noopener":void 0,ref:d,className:w,role:a&&"button","aria-disabled":o,children:n.children})]})};t.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"Additional classes to include"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLAnchorElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"e"}],return:{name:"void"}}},description:"Action to be called when the component is clicked"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"CSS styles to inline on the component"},button:{required:!1,tsType:{name:"boolean"},description:""},primary:{required:!1,tsType:{name:"boolean"},description:"Set the link to be a primary, call to action button. Can be combined with `small`.\n@default false"},secondary:{required:!1,tsType:{name:"boolean"},description:"Set the link to be a secondary button. Can be combined with `quiet` and `small`.\n@default false"},negative:{required:!1,tsType:{name:"boolean"},description:"Set the link to be a negative, destructive style button. Can be combined with `quiet` and `small`.\n@default false"},utility:{required:!1,tsType:{name:"boolean"},description:"Set the link to be a utility style button. Can be combined with `small`.\n@default false"},quiet:{required:!1,tsType:{name:"boolean"},description:`Quieten down the link, can be combined with other types
@default false`},negativeQuiet:{required:!1,tsType:{name:"boolean"},description:`Quieten down the button, negative style
@default false`},utilityQuiet:{required:!1,tsType:{name:"boolean"},description:`Quieten down the button, utility style
@default false`},small:{required:!1,tsType:{name:"boolean"},description:`Set the link to be a small size, can be combined with other types
@default false`},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Sets the link's width to its parent's width. Useful on mobile when link should take full width."},href:{required:!1,tsType:{name:"string"},description:"Set the href for the location where clicking the link will take you to."},target:{required:!1,tsType:{name:"string"},description:"Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"},rel:{required:!1,tsType:{name:"string"},description:"The relationship of the linked URL"},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const M={title:"Link"},i=()=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default link"}),e.jsx(t,{href:"https://google.com",children:"Link"})]}),e.jsx("p",{}),e.jsxs("div",{children:[e.jsx("h3",{children:"Link styled as button"}),e.jsx(t,{button:!0,href:"https://google.com/",target:"_blank",children:"Link as button"}),e.jsx(t,{button:!0,primary:!0,href:"https://google.com/",target:"_blank",children:"Link as button primary"}),e.jsx(t,{button:!0,negative:!0,href:"https://google.com/",target:"_blank",children:"Link as button negative"}),e.jsx(t,{button:!0,quiet:!0,href:"https://google.com/",target:"_blank",children:"Link as button negative"}),e.jsx(t,{button:!0,utility:!0,href:"https://google.com/",target:"_blank",children:"Link as button utility"}),e.jsx(t,{button:!0,negativeQuiet:!0,href:"https://google.com/",target:"_blank",children:"Link as button negative quiet"}),e.jsx(t,{button:!0,utilityQuiet:!0,href:"https://google.com/",target:"_blank",children:"Link as button utility quiet"}),e.jsx(t,{button:!0,disabled:!0,href:"https://google.com/",target:"_blank",children:"Link as button disabled"}),e.jsx(t,{button:!0,href:"https://google.com/",target:"_blank",onClick:()=>alert("you've clicked"),children:"Link with onClick"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Full width Link (href) styled as button"}),e.jsx(t,{button:!0,fullWidth:!0,primary:!0,href:"https://google.com/",children:"Go to google.com"})]})]});i.__docgenInfo={description:"",methods:[],displayName:"Example"};var r,s,u;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => <div>
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

      <Link button primary href="https://google.com/" target="_blank">
        Link as button primary
      </Link>

      <Link button negative href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button quiet href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button utility href="https://google.com/" target="_blank">
        Link as button utility
      </Link>

      <Link button negativeQuiet href="https://google.com/" target="_blank">
        Link as button negative quiet
      </Link>

      <Link button utilityQuiet href="https://google.com/" target="_blank">
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
      <Link button fullWidth primary href="https://google.com/">
        Go to google.com
      </Link>
    </div>
  </div>`,...(u=(s=i.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const A=["Example"];export{i as Example,A as __namedExportsOrder,M as default};
