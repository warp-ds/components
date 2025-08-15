import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as k,r as y}from"./iframe-B8dIub99.js";import{r as R,a as D,x,n as T,e as q,l as z}from"./class-map-63b4Tez8.js";import"./preload-helper-C1FmrZbK.js";const A=".w-pageindicator{display:grid;justify-content:center;height:max-content;pointer-events:none}.w-pageindicator--container{display:grid;grid-auto-flow:column;gap:8px}.w-pageindicator--dot{background-color:var(--w-s-color-background-disabled);border-radius:5px;width:10px;height:10px}.w-pageindicator--selecteddot{background-color:var(--w-s-color-icon-selected)}";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*F(e,t){if(e!==void 0){let s=0;for(const i of e)yield t(i,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*G(e,t,s=1){const i=t===void 0?0:e;t??(t=e);for(let n=i;s>0?n<t:t<n;n+=s)yield n}var H=Object.defineProperty,$=(e,t,s,i)=>{for(var n=void 0,m=e.length-1,h;m>=0;m--)(h=e[m])&&(n=h(t,s,n)||n);return n&&H(t,s,n),n},o;let u=(o=class extends R{constructor(){super(...arguments),this.selectedPage=1,this.pageCount=1}render(){return x`
      <div class="w-pageindicator">
        <div class="w-pageindicator--container">
          ${F(G(this.pageCount),t=>{const i={"w-pageindicator--dot":!0,"w-pageindicator--selecteddot":t===this.selectedPage-1};return x`<div class="${q(i)}"></div>`})}
        </div>
      </div>
    `}},o.styles=[D(A)],o);$([T({type:Number,attribute:"selected-page"})],u.prototype,"selectedPage");$([T({type:Number,attribute:"page-count"})],u.prototype,"pageCount");customElements.get("w-pageindicator")||customElements.define("w-pageindicator",u);u.__docgenInfo={description:"",methods:[],displayName:"WPageIndicator"};const r=z({tagName:"w-pageindicator",elementClass:u,react:k}),U={title:"PageIndicator",component:r},J=e=>a.jsx(r,{...e}),d=J.bind({});d.args={pageCount:5,selectedPage:1};const g=()=>a.jsx("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:a.jsx(r,{pageCount:5,selectedPage:1,style:{paddingBottom:"12px",alignSelf:"end"}})}),c=()=>{const[e,t]=y.useState(1);return y.useEffect(()=>{setTimeout(()=>{e>4?t(1):t(s=>s+1)},1e3)},[e]),a.jsxs("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:[a.jsxs("div",{style:{alignSelf:"center",justifySelf:"center"},children:["Page ",e]}),a.jsx(r,{pageCount:5,selectedPage:e,style:{paddingBottom:"12px",alignSelf:"end"}})]})},l=()=>a.jsx("div",{style:{display:"grid",height:"60vh",border:"1px solid lightgrey"},children:a.jsx(r,{pageCount:10,selectedPage:3,style:{paddingBottom:"12px",alignSelf:"end"}})}),p=()=>a.jsxs("div",{style:{height:"450px",border:"1px solid lightgrey"},children:[a.jsx("div",{style:{height:"300px",borderBottom:"1px solid #e6e6e6"}}),a.jsx(r,{pageCount:5,selectedPage:1,style:{paddingTop:"16px"}})]});g.__docgenInfo={description:"",methods:[],displayName:"InsideContainer"};c.__docgenInfo={description:"",methods:[],displayName:"InsideContainerChangePage"};l.__docgenInfo={description:"",methods:[],displayName:"InsideContainer10Pages"};p.__docgenInfo={description:"",methods:[],displayName:"OutsideContainer"};var f,v,P;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:"args => <WPageIndicator {...args} />",...(P=(v=d.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var C,I,b;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  height: '60vh',
  border: '1px solid lightgrey'
}}>
    <WPageIndicator pageCount={5} selectedPage={1} style={{
    paddingBottom: '12px',
    alignSelf: 'end'
  }} />
  </div>`,...(b=(I=g.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var S,j,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
      <WPageIndicator pageCount={5} selectedPage={page} style={{
      paddingBottom: '12px',
      alignSelf: 'end'
    }} />
    </div>;
}`,...(_=(j=c.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var w,B,N;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
  display: 'grid',
  height: '60vh',
  border: '1px solid lightgrey'
}}>
    <WPageIndicator pageCount={10} selectedPage={3} style={{
    paddingBottom: '12px',
    alignSelf: 'end'
  }} />
  </div>`,...(N=(B=l.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var W,E,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div style={{
  height: '450px',
  border: '1px solid lightgrey'
}}>
    <div style={{
    height: '300px',
    borderBottom: '1px solid #e6e6e6'
  }} />
    <WPageIndicator pageCount={5} selectedPage={1} style={{
    paddingTop: '16px'
  }} />
  </div>`,...(O=(E=p.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const V=["Default","InsideContainer","InsideContainerChangePage","InsideContainer10Pages","OutsideContainer"];export{d as Default,g as InsideContainer,l as InsideContainer10Pages,c as InsideContainerChangePage,p as OutsideContainer,V as __namedExportsOrder,U as default};
