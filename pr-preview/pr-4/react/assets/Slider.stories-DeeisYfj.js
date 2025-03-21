import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DmM0KDA7.js";import{C as P}from"./CoreSlider-CiuwwXfd.js";import{T as Q}from"./index-AHs_-OsL.js";function s(t){return P(t)}s.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | RangeValue",elements:[{name:"number"},{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}]},description:""},startEndValues:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | null)[]"},description:""},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"},description:""},onChange:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},onChangeAfter:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:""},showMarks:{required:!1,tsType:{name:"boolean"},description:""},showTooltips:{required:!1,tsType:{name:"boolean"},description:""},containMarks:{required:!1,tsType:{name:"boolean"},description:""},containTooltips:{required:!1,tsType:{name:"boolean"},description:""}}};const $={title:"Forms/Slider"},u=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},o=()=>{const[t,a]=r.useState(500);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1,max:1e3}),e.jsx("div",{style:{width:"50%",marginBottom:"10px"},children:e.jsx(Q,{value:t.toString(),onChange:n=>a(+n.target.value)})}),e.jsx("button",{onClick:()=>a(500),children:"Reset"})]})},l=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,step:1e3}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},i=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,keyboardStepFactor:.1}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},d=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,containMarks:!0}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},c=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,showMarks:!1}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},p=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},m=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChange:n=>a(n),value:t,min:1e4,max:6e4,startEndValues:["Less than 10 000","Over 60 000"],showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},v=()=>{const[t,a]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:t}),e.jsx(s,{onChangeAfter:n=>a(n),value:t,min:1e4,max:6e4}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},g=()=>{const t=[{label:"12:00"},{label:"12:30"},{label:"13:00"},{label:"13:30"},{label:"14:00"},{label:"14:30"},{label:"15:00"}],[a,n]=r.useState({label:"12:30"});return e.jsxs("div",{children:[e.jsx("output",{children:a.label}),e.jsx(s,{onChange:J=>n(J),rangeValues:t,value:a,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n({label:"12:30"}),children:"Reset"})]})};u.__docgenInfo={description:"",methods:[],displayName:"Regular"};o.__docgenInfo={description:"",methods:[],displayName:"RegularWithInput"};l.__docgenInfo={description:"",methods:[],displayName:"RegularStep1000"};i.__docgenInfo={description:"",methods:[],displayName:"RegularWithLargerKeyboardStepFactor"};d.__docgenInfo={description:"",methods:[],displayName:"RegularWithContainedMarks"};c.__docgenInfo={description:"",methods:[],displayName:"RegularWithoutMarks"};p.__docgenInfo={description:"",methods:[],displayName:"RegularWithTooltips"};m.__docgenInfo={description:"",methods:[],displayName:"RegularWithStartEndValues"};v.__docgenInfo={description:"",methods:[],displayName:"RegularOnChangeAfter"};g.__docgenInfo={description:"",methods:[],displayName:"WithRangeValues"};var h,b,x;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(x=(b=u.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var V,S,R;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(R=(S=o.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var k,C,y;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={1000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var j,f,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} keyboardStepFactor={0.1} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var w,_,q;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var W,M,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showMarks={false} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(I=(M=c.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var N,E,F;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(F=(E=p.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var A,O,L;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} startEndValues={['Less than 10 000', 'Over 60 000']} showTooltips containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var K,B,z;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChangeAfter={value => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(z=(B=v.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var D,G,H;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ee=["Regular","RegularWithInput","RegularStep1000","RegularWithLargerKeyboardStepFactor","RegularWithContainedMarks","RegularWithoutMarks","RegularWithTooltips","RegularWithStartEndValues","RegularOnChangeAfter","WithRangeValues"];export{u as Regular,v as RegularOnChangeAfter,l as RegularStep1000,d as RegularWithContainedMarks,o as RegularWithInput,i as RegularWithLargerKeyboardStepFactor,m as RegularWithStartEndValues,p as RegularWithTooltips,c as RegularWithoutMarks,g as WithRangeValues,ee as __namedExportsOrder,$ as default};
