import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{W as B}from"./index-26c_CCG4.js";import{c as k}from"./index-FGJkmGnF.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const R=".w-badge{--_background: var(--background, var(--w-color-badge-neutral-background));--_color: var(--color, var(--w-s-color-text));--_padding-y: var(--padding-y, .4rem);--_padding-x: var(--padding-x, .8rem);--_border-width: var(--border-width, 0);--_border: var(--border, transparent);--_border-radius: var(--border-radius, 4px);display:inline-flex;padding:var(--_padding-y) var(--_padding-x);background-color:var(--_background);color:var(--_color);border:var(--_border-width) solid var(--_border);border-radius:var(--_border-radius);font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.w-badge--neutral{--background: var(--w-color-badge-neutral-background);--color: var(--w-s-color-text)}.w-badge--info{--background: var(--w-color-badge-info-background);--color: var(--w-s-color-text)}.w-badge--positive{--background: var(--w-color-badge-positive-background);--color: var(--w-s-color-text)}.w-badge--warning{--background: var(--w-color-badge-warning-background);--color: var(--w-s-color-text)}.w-badge--negative{--background: var(--w-color-badge-negative-background);--color: var(--w-s-color-text)}.w-badge--disabled{--background: var(--w-s-color-background-disabled);--color: var(--w-s-color-text)}.w-badge--price{--background: rgba(var(--w-rgb-black), .7);--color: var(--w-s-color-text-inverted-static)}.w-badge--sponsored{--background: var(--w-color-badge-sponsored-background);--color: var(--w-s-color-text)}.w-badge--position-base{position:absolute;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.w-badge--position-top-left{top:0;left:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0}.w-badge--position-top-right{top:0;right:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0}.w-badge--position-bottom-right{bottom:0;right:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.w-badge--position-bottom-left{bottom:0;left:0;border-top-left-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}";function r(s){const{as:u="div",variant:i="neutral",position:t,className:w,children:f,style:x,...y}=s,j=k("w-badge",{"w-badge--info":i==="info","w-badge--positive":i==="positive","w-badge--warning":i==="warning","w-badge--negative":i==="negative","w-badge--disabled":i==="disabled","w-badge--sponsored":i==="sponsored","w-badge--neutral":i==="neutral","w-badge--price":i==="price","w-badge--position-base":t,"w-badge--position-top-left":t==="top-left","w-badge--position-top-right":t==="top-right","w-badge--position-bottom-left":t==="bottom-left","w-badge--position-bottom-right":t==="bottom-right"},w);return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"Badge",precedence:"medium",children:R}),e.jsx(u,{...y,className:j,style:x,children:f})]})}r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{as:{required:!1,tsType:{name:"As"},description:"Render as this element or component"},variant:{required:!1,tsType:{name:"union",raw:`| 'info'
| 'positive'
| 'warning'
| 'negative'
| 'disabled'
| 'sponsored'
| 'neutral'
| 'price'`,elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'sponsored'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'price'"}]},description:"Color / style variant"},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:"Positional modifier (for absolutely-positioned badges)"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the container."},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const q={title:"Badge",component:r},_=s=>e.jsx(r,{...s}),a=_.bind({});a.args={variant:"neutral",children:"Test Badge"};const o=()=>e.jsxs("ul",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[e.jsx(r,{as:"li",variant:"neutral",children:"neutral badge"}),e.jsx(r,{as:"li",variant:"info",children:"info badge"}),e.jsx(r,{as:"li",variant:"positive",children:"positive badge"}),e.jsx(r,{as:"li",variant:"warning",children:"warning badge"}),e.jsx(r,{as:"li",variant:"negative",children:"negative badge"}),e.jsx(r,{as:"li",variant:"disabled",children:"disabled badge"}),e.jsx(r,{as:"li",variant:"sponsored",children:"sponsored badge"}),e.jsx(r,{as:"li",variant:"price",children:"price badge"}),e.jsxs(r,{as:"li",variant:"warning",children:[e.jsx(B,{name:"Shipping",size:"small",style:{paddingRight:"4px"}})," Fiks ferdig"]})]}),d=()=>e.jsxs("div",{style:{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"4rem"},children:[e.jsxs("div",{style:{position:"relative",borderWidth:0,borderRadius:"4px",overflow:"hidden",height:"9.6rem"},children:[e.jsx("img",{src:"https://warp-ds.github.io/docs/images/profile1.jpg",alt:"top-left",style:{width:"100%",height:"9.6rem",objectFit:"cover",borderRadius:"8px"}}),e.jsx(r,{variant:"price",position:"top-left",children:"top-left"})]}),e.jsxs("div",{style:{position:"relative",borderWidth:0,borderRadius:"4px",overflow:"hidden",height:"9.6rem"},children:[e.jsx("img",{src:"https://warp-ds.github.io/docs/images/profile1.jpg",alt:"top-right",style:{width:"100%",height:"9.6rem",objectFit:"cover",borderRadius:"8px"}}),e.jsx(r,{variant:"price",position:"top-right",children:"top-right"})]}),e.jsxs("div",{style:{position:"relative",borderWidth:0,borderRadius:"4px",overflow:"hidden",height:"9.6rem"},children:[e.jsx("img",{src:"https://warp-ds.github.io/docs/images/profile1.jpg",alt:"bottom-right",style:{width:"100%",height:"9.6rem",objectFit:"cover",borderRadius:"8px"}}),e.jsx(r,{variant:"price",position:"bottom-right",children:"bottom-right"})]}),e.jsxs("div",{style:{position:"relative",borderWidth:0,borderRadius:"4px",overflow:"hidden",height:"9.6rem"},children:[e.jsx("img",{src:"https://warp-ds.github.io/docs/images/profile1.jpg",alt:"bottom-left",style:{width:"100%",height:"9.6rem",objectFit:"cover",borderRadius:"8px"}}),e.jsx(r,{variant:"price",position:"bottom-left",children:"bottom-left"})]})]});o.__docgenInfo={description:"",methods:[],displayName:"Variants"};d.__docgenInfo={description:"",methods:[],displayName:"Positions"};var n,l,g;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Badge {...args} />",...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,c,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => <ul style={{
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px'
}}>
    <Badge as="li" variant="neutral">
      neutral badge
    </Badge>
    <Badge as="li" variant="info">
      info badge
    </Badge>
    <Badge as="li" variant="positive">
      positive badge
    </Badge>
    <Badge as="li" variant="warning">
      warning badge
    </Badge>
    <Badge as="li" variant="negative">
      negative badge
    </Badge>
    <Badge as="li" variant="disabled">
      disabled badge
    </Badge>
    <Badge as="li" variant="sponsored">
      sponsored badge
    </Badge>
    <Badge as="li" variant="price">
      price badge
    </Badge>
    <Badge as="li" variant="warning">
      <WIcon name="Shipping" size="small" style={{
      paddingRight: '4px'
    }} /> Fiks ferdig
    </Badge>
  </ul>`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var h,m,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem'
}}>
    <div style={{
    position: 'relative',
    borderWidth: 0,
    borderRadius: '4px',
    overflow: 'hidden',
    height: '9.6rem'
  }}>
      <img src="https://warp-ds.github.io/docs/images/profile1.jpg" alt="top-left" style={{
      width: '100%',
      height: '9.6rem',
      objectFit: 'cover',
      borderRadius: '8px'
    }} />
      <Badge variant="price" position="top-left">
        top-left
      </Badge>
    </div>

    <div style={{
    position: 'relative',
    borderWidth: 0,
    borderRadius: '4px',
    overflow: 'hidden',
    height: '9.6rem'
  }}>
      <img src="https://warp-ds.github.io/docs/images/profile1.jpg" alt="top-right" style={{
      width: '100%',
      height: '9.6rem',
      objectFit: 'cover',
      borderRadius: '8px'
    }} />
      <Badge variant="price" position="top-right">
        top-right
      </Badge>
    </div>

    <div style={{
    position: 'relative',
    borderWidth: 0,
    borderRadius: '4px',
    overflow: 'hidden',
    height: '9.6rem'
  }}>
      <img src="https://warp-ds.github.io/docs/images/profile1.jpg" alt="bottom-right" style={{
      width: '100%',
      height: '9.6rem',
      objectFit: 'cover',
      borderRadius: '8px'
    }} />
      <Badge variant="price" position="bottom-right">
        bottom-right
      </Badge>
    </div>

    <div style={{
    position: 'relative',
    borderWidth: 0,
    borderRadius: '4px',
    overflow: 'hidden',
    height: '9.6rem'
  }}>
      <img src="https://warp-ds.github.io/docs/images/profile1.jpg" alt="bottom-left" style={{
      width: '100%',
      height: '9.6rem',
      objectFit: 'cover',
      borderRadius: '8px'
    }} />
      <Badge variant="price" position="bottom-left">
        bottom-left
      </Badge>
    </div>
  </div>`,...(v=(m=d.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const P=["Default","Variants","Positions"];export{a as Default,d as Positions,o as Variants,P as __namedExportsOrder,q as default};
