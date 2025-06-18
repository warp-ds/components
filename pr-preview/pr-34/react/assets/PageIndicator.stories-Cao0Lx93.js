import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const T=".w-pageindicator{display:grid;width:max-content;height:max-content;grid-auto-flow:column;gap:8px;pointer-events:none}.w-pageindicator--dot{background-color:var(--w-s-color-background-disabled);border-radius:5px;width:10px;height:10px}.w-pageindicator--selecteddot{background-color:var(--w-s-color-icon-selected)}";function n(t){const{pageCount:d,selectedPage:l,style:_}=t;return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"PageIndicator",precedence:"medium",children:T}),e.jsx("div",{className:"w-pageindicator",style:_,children:[...Array(d).keys()].map(g=>e.jsx("div",{className:`w-pageindicator--dot ${g===l-1?"w-pageindicator--selecteddot":""}`},g))})]})}n.__docgenInfo={description:"",methods:[],displayName:"PageIndicator",props:{selectedPage:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the container."}}};const k={title:"PageIndicator",component:n},B=t=>e.jsx(n,{...t}),s=B.bind({});s.args={pageCount:5,selectedPage:1};const r=()=>e.jsx("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:e.jsx(n,{pageCount:5,selectedPage:1,style:{paddingBottom:"12px",alignSelf:"end",justifySelf:"center"}})}),a=()=>{const[t,d]=c.useState(1);return c.useEffect(()=>{setTimeout(()=>{t>4?d(1):d(l=>l+1)},1e3)},[t]),e.jsxs("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:[e.jsxs("div",{style:{alignSelf:"center",justifySelf:"center"},children:["Page ",t]}),e.jsx(n,{pageCount:5,selectedPage:t,style:{paddingBottom:"12px",alignSelf:"end",justifySelf:"center"}})]})},i=()=>e.jsx("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:e.jsx(n,{pageCount:10,selectedPage:3,style:{paddingBottom:"12px",alignSelf:"end",justifySelf:"center"}})}),o=()=>e.jsxs("div",{style:{display:"grid",height:"450px",gridTemplateRows:"300px 1fr",border:"1px solid lightgrey"},children:[e.jsx("div",{style:{borderBottom:"1px solid #e6e6e6"}}),e.jsx(n,{pageCount:5,selectedPage:1,style:{paddingTop:"16px",justifySelf:"center"}})]});r.__docgenInfo={description:"",methods:[],displayName:"InsideContainer"};a.__docgenInfo={description:"",methods:[],displayName:"InsideContainerChangePage"};i.__docgenInfo={description:"",methods:[],displayName:"InsideContainer10Pages"};o.__docgenInfo={description:"",methods:[],displayName:"OutsideContainer"};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"args => <PageIndicator {...args} />",...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,h,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  height: '60vh',
  border: '1px solid lightgrey'
}}>
    <PageIndicator pageCount={5} selectedPage={1} style={{
    paddingBottom: '12px',
    alignSelf: 'end',
    justifySelf: 'center'
  }} />
  </div>`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,P,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      if (page > 4) {
        setPage(1);
      } else {
        setPage(p => p + 1);
      }
    }, 1000);
  }, [page]);
  return <div style={{
    display: 'grid',
    height: '60vh',
    border: '1px solid lightgrey'
  }}>
      <div style={{
      alignSelf: 'center',
      justifySelf: 'center'
    }}>Page {page}</div>
      <PageIndicator pageCount={5} selectedPage={page} style={{
      paddingBottom: '12px',
      alignSelf: 'end',
      justifySelf: 'center'
    }} />
    </div>;
}`,...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var C,v,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  height: '60vh',
  border: '1px solid lightgrey'
}}>
    <PageIndicator pageCount={10} selectedPage={3} style={{
    paddingBottom: '12px',
    alignSelf: 'end',
    justifySelf: 'center'
  }} />
  </div>`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,b,w;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  height: '450px',
  gridTemplateRows: '300px 1fr',
  border: '1px solid lightgrey'
}}>
    <div style={{
    borderBottom: '1px solid #e6e6e6'
  }} />
    <PageIndicator pageCount={5} selectedPage={1} style={{
    paddingTop: '16px',
    justifySelf: 'center'
  }} />
  </div>`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const O=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{s as Default,r as InsideContainer,i as InsideContainer10Pages,a as InsideContainerChangePage,o as OutsideContainer,O as __namedExportsOrder,k as default};
