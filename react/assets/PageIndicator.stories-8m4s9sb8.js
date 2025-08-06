import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-C2uqs4nU.js";import"./preload-helper-C1FmrZbK.js";const B=".w-pageindicator{display:grid;justify-content:center;height:max-content;pointer-events:none}.w-pageindicator--container{display:grid;grid-auto-flow:column;gap:8px}.w-pageindicator--dot{background-color:var(--w-s-color-background-disabled);border-radius:5px;width:10px;height:10px}.w-pageindicator--selecteddot{background-color:var(--w-s-color-icon-selected)}";function n(t){const{pageCount:d,selectedPage:g,style:_}=t;return e.jsxs(e.Fragment,{children:[e.jsx("style",{href:"PageIndicator",precedence:"medium",children:B}),e.jsx("div",{className:"w-pageindicator",style:_,children:e.jsx("div",{className:"w-pageindicator--container",children:[...Array(d).keys()].map(c=>e.jsx("div",{className:`w-pageindicator--dot ${c===g-1?"w-pageindicator--selecteddot":""}`},c))})})]})}n.__docgenInfo={description:"",methods:[],displayName:"PageIndicator",props:{selectedPage:{required:!0,tsType:{name:"number"},description:""},pageCount:{required:!0,tsType:{name:"number"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional CSS styles for the container."}}};const O={title:"PageIndicator",component:n},N=t=>e.jsx(n,{...t}),s=N.bind({});s.args={pageCount:5,selectedPage:1};const a=()=>e.jsx("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:e.jsx(n,{pageCount:5,selectedPage:1,style:{paddingBottom:"12px",alignSelf:"end"}})}),r=()=>{const[t,d]=p.useState(1);return p.useEffect(()=>{setTimeout(()=>{t>4?d(1):d(g=>g+1)},1e3)},[t]),e.jsxs("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:[e.jsxs("div",{style:{alignSelf:"center",justifySelf:"center"},children:["Page ",t]}),e.jsx(n,{pageCount:5,selectedPage:t,style:{paddingBottom:"12px",alignSelf:"end"}})]})},i=()=>e.jsx("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:e.jsx(n,{pageCount:10,selectedPage:3,style:{paddingBottom:"12px",alignSelf:"end"}})}),o=()=>e.jsxs("div",{style:{height:"450px",border:"1px solid lightgrey"},children:[e.jsx("div",{style:{height:"300px",borderBottom:"1px solid #e6e6e6"}}),e.jsx(n,{pageCount:5,selectedPage:1,style:{paddingTop:"16px"}})]});a.__docgenInfo={description:"",methods:[],displayName:"InsideContainer"};r.__docgenInfo={description:"",methods:[],displayName:"InsideContainerChangePage"};i.__docgenInfo={description:"",methods:[],displayName:"InsideContainer10Pages"};o.__docgenInfo={description:"",methods:[],displayName:"OutsideContainer"};var l,m,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"args => <PageIndicator {...args} />",...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,y,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  height: '60vh',
  border: '1px solid lightgrey'
}}>
    <PageIndicator pageCount={5} selectedPage={1} style={{
    paddingBottom: '12px',
    alignSelf: 'end'
  }} />
  </div>`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var P,f,v;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
      alignSelf: 'end'
    }} />
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,I,S;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  height: '60vh',
  border: '1px solid lightgrey'
}}>
    <PageIndicator pageCount={10} selectedPage={3} style={{
    paddingBottom: '12px',
    alignSelf: 'end'
  }} />
  </div>`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var j,b,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  height: '450px',
  border: '1px solid lightgrey'
}}>
    <div style={{
    height: '300px',
    borderBottom: '1px solid #e6e6e6'
  }} />
    <PageIndicator pageCount={5} selectedPage={1} style={{
    paddingTop: '16px'
  }} />
  </div>`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};const q=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{s as Default,a as InsideContainer,i as InsideContainer10Pages,r as InsideContainerChangePage,o as OutsideContainer,q as __namedExportsOrder,O as default};
