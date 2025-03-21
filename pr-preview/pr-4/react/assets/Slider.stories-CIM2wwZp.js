import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DmM0KDA7.js";import{C as re}from"./CoreSlider-VqWU58dq.js";import{T as ue}from"./index-AHs_-OsL.js";function s(t){return re(t)}s.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | RangeValue",elements:[{name:"number"},{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}]},description:""},startEndValues:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | null)[]"},description:""},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"},description:""},onChange:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},onChangeAfter:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:""},showMarks:{required:!1,tsType:{name:"boolean"},description:""},showTooltips:{required:!1,tsType:{name:"boolean"},description:""},containMarks:{required:!1,tsType:{name:"boolean"},description:""},containTooltips:{required:!1,tsType:{name:"boolean"},description:""}}};const ce={title:"Forms/Slider"},u=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},o=()=>{const[t,a]=r.useState(500);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1,max:1e3}),e.jsx("div",{style:{width:"50%",marginBottom:"10px"},children:e.jsx(ue,{value:t.toString(),onChange:n=>a(+n.target.value)})}),e.jsx("button",{onClick:()=>a(500),children:"Reset"})]})},l=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,step:1e3}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},i=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,keyboardStepFactor:.1}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},d=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},c=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,showMarks:!1}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},p=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChangeAfter:n=>a(n),value:t,min:1e4,max:6e4}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},m=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},v=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{style:{width:"350px"},children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},g=()=>{const[t,a]=r.useState(5);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:-20,max:50,showTooltips:!0}),e.jsx("button",{onClick:()=>a(5),children:"Reset"})]})},h=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,startEndValues:["Less than 10 000","Over 60 000"],showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},x=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,startEndValues:[null,"Over 60 000"],showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(2e4),children:"Reset"})]})},b=()=>{const t=[{label:"12:00"},{label:"12:30"},{label:"13:00"},{label:"13:30"},{label:"14:00"},{label:"14:30"},{label:"15:00"}],[a,n]=r.useState({label:"12:30"});return e.jsxs("div",{children:[e.jsx("output",{children:a.label}),e.jsx(s,{onChange:se=>n(se),rangeValues:t,value:a,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n({label:"12:30"}),children:"Reset"})]})};u.__docgenInfo={description:"",methods:[],displayName:"Regular"};o.__docgenInfo={description:"",methods:[],displayName:"RegularWithInput"};l.__docgenInfo={description:"",methods:[],displayName:"RegularStep1000"};i.__docgenInfo={description:"",methods:[],displayName:"RegularWithLargerKeyboardStepFactor"};d.__docgenInfo={description:"",methods:[],displayName:"RegularWithContainedMarks"};c.__docgenInfo={description:"",methods:[],displayName:"RegularWithoutMarks"};p.__docgenInfo={description:"",methods:[],displayName:"RegularOnChangeAfter"};m.__docgenInfo={description:"",methods:[],displayName:"RegularWithTooltips"};v.__docgenInfo={description:"",methods:[],displayName:"RegularSmallerSize"};g.__docgenInfo={description:"",methods:[],displayName:"RegularOtherRange"};h.__docgenInfo={description:"",methods:[],displayName:"RegularWithStartEndValues"};x.__docgenInfo={description:"",methods:[],displayName:"RegularWithSingleStartEndValue"};b.__docgenInfo={description:"",methods:[],displayName:"WithRangeValues"};var S,V,R;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(R=(V=u.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var C,k,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var y,f,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={1000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(T=(f=l.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var w,_,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} keyboardStepFactor={0.1} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(W=(_=i.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var M,q,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(I=(q=d.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var E,N,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showMarks={false} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var F,A,L;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChangeAfter={value => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var z,K,B;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(B=(K=m.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var D,G,H;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div style={{
    width: '350px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,P,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(5);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={-20} max={50} showTooltips />
      <button onClick={() => setValue(5)}>Reset</button>
    </div>;
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} startEndValues={['Less than 10 000', 'Over 60 000']} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} startEndValues={[null, 'Over 60 000']} showTooltips containMarks />
      <button onClick={() => setValue(20000)}>Reset</button>
    </div>;
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const pe=["Regular","RegularWithInput","RegularStep1000","RegularWithLargerKeyboardStepFactor","RegularWithContainedMarks","RegularWithoutMarks","RegularOnChangeAfter","RegularWithTooltips","RegularSmallerSize","RegularOtherRange","RegularWithStartEndValues","RegularWithSingleStartEndValue","WithRangeValues"];export{u as Regular,p as RegularOnChangeAfter,g as RegularOtherRange,v as RegularSmallerSize,l as RegularStep1000,d as RegularWithContainedMarks,o as RegularWithInput,i as RegularWithLargerKeyboardStepFactor,x as RegularWithSingleStartEndValue,h as RegularWithStartEndValues,m as RegularWithTooltips,c as RegularWithoutMarks,b as WithRangeValues,pe as __namedExportsOrder,ce as default};
