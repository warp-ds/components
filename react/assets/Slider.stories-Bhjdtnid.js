import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DmM0KDA7.js";import{C as ie}from"./CoreSlider-B02rUkuo.js";import{T as de}from"./index-DKdif_WF.js";import"./index-BAUi5aDK.js";function s(t){return ie(t)}s.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | RangeValue",elements:[{name:"number"},{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}]},description:""},startEndValues:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | null)[]"},description:""},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"},description:""},onChange:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},onChangeAfter:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:""},showMarks:{required:!1,tsType:{name:"boolean"},description:""},showTooltips:{required:!1,tsType:{name:"boolean"},description:""},containMarks:{required:!1,tsType:{name:"boolean"},description:""},containTooltips:{required:!1,tsType:{name:"boolean"},description:""}}};const he={title:"Forms/Slider"},u=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},o=()=>{const[t,a]=r.useState(500);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1,max:1e3}),e.jsx("div",{style:{width:"50%",marginBottom:"10px"},children:e.jsx(de,{value:t.toString(),onChange:n=>a(+n.target.value)})}),e.jsx("button",{onClick:()=>a(500),children:"Reset"})]})},l=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,step:1e3}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},i=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,keyboardStepFactor:.1}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},d=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},c=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,showMarks:!1}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},p=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChangeAfter:n=>a(n),value:t,min:1e4,max:6e4}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},m=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},v=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{style:{width:"350px"},children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},g=()=>{const[t,a]=r.useState(5);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:-20,max:50,showTooltips:!0}),e.jsx("button",{onClick:()=>a(5),children:"Reset"})]})},h=()=>{const[t,a]=r.useState(16846250);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:125374,max:84383641,step:5e5,containMarks:!0,showTooltips:!0}),e.jsx("button",{onClick:()=>a(16846250),children:"Reset"})]})},x=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,startEndValues:["Less than 10 000","Over 60 000"],showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},b=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,startEndValues:[null,"Over 60 000"],showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},S=()=>{const t=[{label:"12:00"},{label:"12:30"},{label:"13:00"},{label:"13:30"},{label:"14:00"},{label:"14:30"},{label:"15:00"}],[a,n]=r.useState({label:"12:30"});return e.jsxs("div",{children:[e.jsx("output",{children:a.label}),e.jsx(s,{onChange:le=>n(le),rangeValues:t,value:a,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n({label:"12:30"}),children:"Reset"})]})};u.__docgenInfo={description:"",methods:[],displayName:"Regular"};o.__docgenInfo={description:"",methods:[],displayName:"RegularWithInput"};l.__docgenInfo={description:"",methods:[],displayName:"RegularStep1000"};i.__docgenInfo={description:"",methods:[],displayName:"RegularWithLargerKeyboardStepFactor"};d.__docgenInfo={description:"",methods:[],displayName:"RegularWithContainedMarks"};c.__docgenInfo={description:"",methods:[],displayName:"RegularWithoutMarks"};p.__docgenInfo={description:"",methods:[],displayName:"RegularOnChangeAfter"};m.__docgenInfo={description:"",methods:[],displayName:"RegularWithTooltips"};v.__docgenInfo={description:"",methods:[],displayName:"RegularSmallerSize"};g.__docgenInfo={description:"",methods:[],displayName:"RegularOtherRange"};h.__docgenInfo={description:"",methods:[],displayName:"RegularLargeRange"};x.__docgenInfo={description:"",methods:[],displayName:"RegularWithStartEndValues"};b.__docgenInfo={description:"",methods:[],displayName:"RegularWithSingleStartEndValue"};S.__docgenInfo={description:"",methods:[],displayName:"WithRangeValues"};var R,V,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var k,j,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(500);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={1000} />
      <div style={{
      width: '50%',
      marginBottom: '10px'
    }}>
        <TextField value={value.toString()} onChange={e => setValue(+e.target.value)} />
      </div>
      <button onClick={() => setValue(500)}>Reset</button>
    </div>;
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var f,T,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={1000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var _,M,W;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} keyboardStepFactor={0.1} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var q,I,N;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var E,O,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showMarks={false} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(F=(O=c.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var A,L,z;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChangeAfter={value => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(z=(L=p.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var K,B,D;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var G,H,J;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div style={{
    width: '350px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(J=(H=v.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var P,Q,U;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(5);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={-20} max={50} showTooltips />
      <button onClick={() => setValue(5)}>Reset</button>
    </div>;
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(16846250);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={125374} max={84383641} step={500000} containMarks showTooltips />
      <button onClick={() => setValue(16846250)}>Reset</button>
    </div>;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} startEndValues={['Less than 10 000', 'Over 60 000']} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} startEndValues={[null, 'Over 60 000']} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,ue,oe;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const range = [{
    label: '12:00'
  }, {
    label: '12:30'
  }, {
    label: '13:00'
  }, {
    label: '13:30'
  }, {
    label: '14:00'
  }, {
    label: '14:30'
  }, {
    label: '15:00'
  }];
  const [value, setValue] = useState({
    label: '12:30'
  });
  return <div>
      <output>{value.label}</output>
      <Slider onChange={value => setValue(value)} rangeValues={range} value={value} showTooltips containMarks />
      <button onClick={() => setValue({
      label: '12:30'
    })}>Reset</button>
    </div>;
}`,...(oe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};const xe=["Regular","RegularWithInput","RegularStep1000","RegularWithLargerKeyboardStepFactor","RegularWithContainedMarks","RegularWithoutMarks","RegularOnChangeAfter","RegularWithTooltips","RegularSmallerSize","RegularOtherRange","RegularLargeRange","RegularWithStartEndValues","RegularWithSingleStartEndValue","WithRangeValues"];export{u as Regular,h as RegularLargeRange,p as RegularOnChangeAfter,g as RegularOtherRange,v as RegularSmallerSize,l as RegularStep1000,d as RegularWithContainedMarks,o as RegularWithInput,i as RegularWithLargerKeyboardStepFactor,b as RegularWithSingleStartEndValue,x as RegularWithStartEndValues,m as RegularWithTooltips,c as RegularWithoutMarks,S as WithRangeValues,xe as __namedExportsOrder,he as default};
