import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{L as e}from"./Link-DG2_T6Q8.js";import"./style-DhxcUcNZ.js";import"./index-BhM8QKG_.js";import"./iframe-i_st9cJz.js";import"./preload-helper-C1FmrZbK.js";const L={title:"Link",component:e,argTypes:{variant:{control:{type:"select"},options:["primary","secondary","negative","utility","quiet","negativeQuiet","utilityQuiet","overlayQuiet"]}}},h=g=>t.jsx(e,{...g}),i=h.bind({});i.args={variant:"primary",button:!0,size:"default",disabled:!1,fullWidth:!1,children:"This is a link"};const n=()=>t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("h3",{children:"Default link"}),t.jsx(e,{href:"https://google.com",children:"Link"})]}),t.jsx("p",{}),t.jsxs("div",{children:[t.jsx("h3",{children:"Link styled as button"}),t.jsx(e,{button:!0,href:"https://google.com/",target:"_blank",children:"Link as button"}),t.jsx(e,{button:!0,variant:"primary",href:"https://google.com/",target:"_blank",children:"Link as button primary"}),t.jsx(e,{button:!0,variant:"negative",href:"https://google.com/",target:"_blank",children:"Link as button negative"}),t.jsx(e,{button:!0,variant:"quiet",href:"https://google.com/",target:"_blank",children:"Link as button negative"}),t.jsx(e,{button:!0,variant:"utility",href:"https://google.com/",target:"_blank",children:"Link as button utility"}),t.jsx(e,{button:!0,variant:"negativeQuiet",href:"https://google.com/",target:"_blank",children:"Link as button negative quiet"}),t.jsx(e,{button:!0,variant:"utilityQuiet",href:"https://google.com/",target:"_blank",children:"Link as button utility quiet"}),t.jsx(e,{button:!0,disabled:!0,href:"https://google.com/",target:"_blank",children:"Link as button disabled"}),t.jsx(e,{button:!0,href:"https://google.com/",target:"_blank",onClick:()=>alert("you've clicked"),children:"Link with onClick"})]}),t.jsx("p",{}),t.jsxs("div",{children:[t.jsx("h3",{children:"Full width Link (href) styled as button"}),t.jsx(e,{button:!0,fullWidth:!0,variant:"primary",href:"https://google.com/",children:"Go to google.com"})]})]});n.__docgenInfo={description:"",methods:[],displayName:"Example"};var o,a,r;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Link {...args} />",...(r=(a=i.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,l,u;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div>
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
  </div>`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const v=["Default","Example"];export{i as Default,n as Example,v as __namedExportsOrder,L as default};
