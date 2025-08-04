import{j as e}from"./jsx-runtime-D_zvdyIk.js";const _=".badge{--_background: var(--background, var(--w-color-badge-neutral-background));--_color: var(--color, var(--w-s-color-text));--_padding-y: var(--padding-y, .4rem);--_padding-x: var(--padding-x, .8rem);--_border-width: var(--border-width, 0);--_border: var(--border, transparent);--_border-radius: var(--border-radius, 4px);display:inline-flex;padding:var(--_padding-y) var(--_padding-x);background-color:var(--_background);color:var(--_color);border:var(--_border-width) solid var(--_border);border-radius:var(--_border-radius);font-size:var(--w-font-size-xs);line-height:var(--w-line-height-xs)}.badge--neutral{--background: var(--w-color-badge-neutral-background);--color: var(--w-s-color-text)}.badge--info{--background: var(--w-color-badge-info-background);--color: var(--w-s-color-text)}.badge--positive{--background: var(--w-color-badge-positive-background);--color: var(--w-s-color-text)}.badge--warning{--background: var(--w-color-badge-warning-background);--color: var(--w-s-color-text)}.badge--negative{--background: var(--w-color-badge-negative-background);--color: var(--w-s-color-text)}.badge--disabled{--background: var(--w-s-color-background-disabled);--color: var(--w-s-color-text)}.badge--price{--background: rgba(var(--w-rgb-black), .7);--color: var(--w-s-color-text-inverted-static)}.badge--sponsored{--background: var(--w-color-badge-sponsored-background);--color: var(--w-s-color-text)}.badge--position-base{position:absolute;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.badge--position-top-left{top:0;left:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0}.badge--position-top-right{top:0;right:0;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0}.badge--position-bottom-right{bottom:0;right:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.badge--position-bottom-left{bottom:0;left:0;border-top-left-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}";function r(o){const{as:m="div",variant:u="neutral",position:d,className:f="",children:x,style:w,...j}=o,y="badge",B=[`badge--${u}`,d&&`badge--position-base badge--position-${d}`].filter(Boolean).join(" "),k=[y,B,f].filter(Boolean).join(" ");return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"Badge",precedence:"medium",children:_}),e.jsx(m,{...j,className:k,style:w,children:x})]})}r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{as:{required:!1,tsType:{name:"As"},description:"Render as this element or component"},variant:{required:!1,tsType:{name:"union",raw:`| 'info'
| 'positive'
| 'warning'
| 'negative'
| 'disabled'
| 'sponsored'
| 'neutral'
| 'price'`,elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'sponsored'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'price'"}]},description:"Color / style variant"},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:"Positional modifier (for absolutely-positioned badges)"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the container."},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const W={title:"Badge",component:r},R=o=>e.jsx(r,{...o}),i=R.bind({});i.args={variant:"neutral",children:"Test Badge"};const t=()=>e.jsxs("ul",{className:"flex flex-wrap gap-8",children:[e.jsx(r,{as:"li",variant:"neutral",children:"neutral badge"}),e.jsx(r,{as:"li",variant:"info",children:"info badge"}),e.jsx(r,{as:"li",variant:"positive",children:"positive badge"}),e.jsx(r,{as:"li",variant:"warning",children:"warning badge"}),e.jsx(r,{as:"li",variant:"negative",children:"negative badge"}),e.jsx(r,{as:"li",variant:"disabled",children:"disabled badge"}),e.jsx(r,{as:"li",variant:"sponsored",children:"sponsored badge"}),e.jsx(r,{as:"li",variant:"price",children:"price badge"})]}),a=()=>e.jsxs("div",{style:{maxWidth:"400px",display:"flex",flexDirection:"column",gap:"4rem"},children:[e.jsxs("div",{style:{position:"relative",borderWidth:0,borderRadius:"4px",overflow:"hidden",height:"9.6rem"},children:[e.jsx("img",{src:"https://warp-ds.github.io/docs/images/profile1.jpg",alt:"top-left",style:{width:"100%",height:"9.6rem",objectFit:"cover",borderRadius:"8px"}}),e.jsx(r,{variant:"price",position:"top-left",children:"top-left"})]}),e.jsxs("div",{style:{position:"relative",borderWidth:0,borderRadius:"4px",overflow:"hidden",height:"9.6rem"},children:[e.jsx("img",{src:"https://warp-ds.github.io/docs/images/profile1.jpg",alt:"top-right",style:{width:"100%",height:"9.6rem",objectFit:"cover",borderRadius:"8px"}}),e.jsx(r,{variant:"price",position:"top-right",children:"top-right"})]}),e.jsxs("div",{style:{position:"relative",borderWidth:0,borderRadius:"4px",overflow:"hidden",height:"9.6rem"},children:[e.jsx("img",{src:"https://warp-ds.github.io/docs/images/profile1.jpg",alt:"bottom-right",style:{width:"100%",height:"9.6rem",objectFit:"cover",borderRadius:"8px"}}),e.jsx(r,{variant:"price",position:"bottom-right",children:"bottom-right"})]}),e.jsxs("div",{style:{position:"relative",borderWidth:0,borderRadius:"4px",overflow:"hidden",height:"9.6rem"},children:[e.jsx("img",{src:"https://warp-ds.github.io/docs/images/profile1.jpg",alt:"bottom-left",style:{width:"100%",height:"9.6rem",objectFit:"cover",borderRadius:"8px"}}),e.jsx(r,{variant:"price",position:"bottom-left",children:"bottom-left"})]})]});t.__docgenInfo={description:"",methods:[],displayName:"Variants"};a.__docgenInfo={description:"",methods:[],displayName:"Positions"};var s,n,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:"args => <Badge {...args} />",...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var g,p,c;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => <ul className="flex flex-wrap gap-8">
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
  </ul>`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var b,h,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => <div style={{
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
</div>`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const F=["Default","Variants","Positions"];export{i as Default,a as Positions,t as Variants,F as __namedExportsOrder,W as default};
