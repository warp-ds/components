import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./Button-CFDNVtMU.js";import"./index-FGJkmGnF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BAUi5aDK.js";const h={title:"Button"},i=()=>n.jsxs("div",{children:[n.jsxs("div",{children:[n.jsx("h3",{children:"Variants"}),n.jsx("p",{children:"Allowed values: empty, or one of variant"}),n.jsx(t,{children:"Default"}),n.jsx(t,{primary:!0,children:"Primary"}),n.jsx(t,{secondary:!0,children:"Secondary"}),n.jsx(t,{negative:!0,children:"Negative"}),n.jsx(t,{utility:!0,children:"Utility"}),n.jsx(t,{quiet:!0,children:"Quiet"}),n.jsx(t,{negativeQuiet:!0,children:"Negative-Quiet"}),n.jsx(t,{utilityQuiet:!0,children:"utility-Quiet"}),n.jsxs("p",{style:{marginTop:"10px"},children:["This is a ",n.jsx(t,{link:!0,children:"button"})," pretending to be a link."]})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Sizes"}),n.jsx("p",{children:"Allowed values: empty(default) or one size "}),n.jsx(t,{children:"Default"}),n.jsx(t,{small:!0,children:"Default small"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"widths"}),n.jsx("p",{children:"Allowed values: empty(default) or one width "}),n.jsx(t,{children:"Default"}),n.jsx(t,{fullWidth:!0,children:"Default fullWidth"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"States"}),n.jsx("p",{children:"Allowed values: empty(default) or any number of states"}),n.jsx("p",{children:"Loading state, Pattern is supposed to be: button is triggered, button is disabled until loading success, while in the disabled state it also show loading animation to show something is happening."}),n.jsx(t,{children:"Default"}),n.jsx(t,{disabled:!0,children:"Default disabled"}),n.jsx(t,{loading:!0,children:"Default loading"})]}),n.jsx("h2",{style:{marginTop:"100px"},children:"All combos"}),n.jsxs("div",{children:[n.jsx("h3",{children:"Default (Secondary)"}),n.jsx(t,{children:"Button"}),n.jsx(t,{loading:!0,disabled:!0,children:"Loading"}),n.jsx(t,{small:!0,children:"Small"}),n.jsx(t,{small:!0,loading:!0,children:"Small Loading"}),n.jsx(t,{disabled:!0,children:"Disabled"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Primary"}),n.jsx(t,{primary:!0,children:"Button"}),n.jsx(t,{primary:!0,loading:!0,children:"Loading"}),n.jsx(t,{primary:!0,small:!0,children:"Small"}),n.jsx(t,{primary:!0,small:!0,loading:!0,children:"Small Loading"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Secondary"}),n.jsx(t,{secondary:!0,children:"Button"}),n.jsx(t,{secondary:!0,loading:!0,children:"Loading"}),n.jsx(t,{secondary:!0,small:!0,children:"Small"}),n.jsx(t,{secondary:!0,small:!0,loading:!0,children:"Small Loading"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Negative"}),n.jsx(t,{negative:!0,children:"Button"}),n.jsx(t,{negative:!0,loading:!0,children:"Negative Loading"}),n.jsx(t,{negative:!0,small:!0,children:"Negative Small"}),n.jsx(t,{negative:!0,small:!0,loading:!0,children:"Negative Small Loading"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Utility"}),n.jsx(t,{utility:!0,children:"Button"}),n.jsx(t,{utility:!0,loading:!0,children:"Loading"}),n.jsx(t,{utility:!0,small:!0,children:"Small"}),n.jsx(t,{utility:!0,small:!0,loading:!0,children:"Small Loading"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Link"}),"This is a ",n.jsx(t,{link:!0,children:"button"})," pretending to be a link."]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Overlay"}),n.jsx(t,{overlayQuiet:!0,children:"Overlay quiet"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Full width button"}),n.jsx(t,{fullWidth:!0,primary:!0,children:"Full width"})]}),n.jsxs("div",{children:[n.jsx("h3",{children:"Everything"}),n.jsx("p",{children:"primary secondary negative utility quiet link small loading fullwidth disabled"}),n.jsx(t,{primary:!0,secondary:!0,negative:!0,utility:!0,quiet:!0,link:!0,small:!0,loading:!0,fullWidth:!0,disabled:!0,children:"All things"})]})]});i.__docgenInfo={description:"",methods:[],displayName:"Example"};var e,l,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`() => <div>
    <div>
      <h3>Variants</h3>
      <p>Allowed values: empty, or one of variant</p>
      <Button>Default</Button>

      <Button primary>Primary</Button>

      <Button secondary>Secondary</Button>

      <Button negative>Negative</Button>

      <Button utility>Utility</Button>

      <Button quiet>Quiet</Button>

      <Button negativeQuiet>Negative-Quiet</Button>

      <Button utilityQuiet>utility-Quiet</Button>

      <p style={{
      marginTop: '10px'
    }}>
        This is a <Button link>button</Button> pretending to be a link.
      </p>
    </div>

    <div>
      <h3>Sizes</h3>
      <p>Allowed values: empty(default) or one size </p>
      <Button>Default</Button>

      <Button small>Default small</Button>
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

      <Button small>Small</Button>

      <Button small loading>
        Small Loading
      </Button>

      <Button disabled>Disabled</Button>
    </div>
    <div>
      <h3>Primary</h3>

      <Button primary>Button</Button>

      <Button primary loading>
        Loading
      </Button>

      <Button primary small>
        Small
      </Button>

      <Button primary small loading>
        Small Loading
      </Button>
    </div>
    <div>
      <h3>Secondary</h3>

      <Button secondary>Button</Button>

      <Button secondary loading>
        Loading
      </Button>

      <Button secondary small>
        Small
      </Button>

      <Button secondary small loading>
        Small Loading
      </Button>
    </div>
    <div>
      <h3>Negative</h3>

      <Button negative>Button</Button>

      <Button negative loading>
        Negative Loading
      </Button>

      <Button negative small>
        Negative Small
      </Button>

      <Button negative small loading>
        Negative Small Loading
      </Button>
    </div>
    <div>
      <h3>Utility</h3>

      <Button utility>Button</Button>

      <Button utility loading>
        Loading
      </Button>

      <Button utility small>
        Small
      </Button>

      <Button utility small loading>
        Small Loading
      </Button>
    </div>

    <div>
      <h3>Link</h3>
      This is a <Button link>button</Button> pretending to be a link.
    </div>

    <div>
      <h3>Overlay</h3>
      <Button overlayQuiet>Overlay quiet</Button>
    </div>

    <div>
      <h3>Full width button</h3>

      <Button fullWidth primary>
        Full width
      </Button>
    </div>

    <div>
      <h3>Everything</h3>
      <p>primary secondary negative utility quiet link small loading fullwidth disabled</p>

      <Button primary secondary negative utility quiet link small loading fullWidth disabled>
        All things
      </Button>
    </div>
  </div>`,...(a=(l=i.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const c=["Example"];export{i as Example,c as __namedExportsOrder,h as default};
