import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DmM0KDA7.js";import{C as D}from"./CoreSlider-CiuwwXfd.js";import{T as G}from"./index-AHs_-OsL.js";function s(a){return D(a)}s.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | RangeValue",elements:[{name:"number"},{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}]},description:""},startEndValues:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | null)[]"},description:""},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"},description:""},onChange:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},onChangeAfter:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:""},showMarks:{required:!1,tsType:{name:"boolean"},description:""},showTooltips:{required:!1,tsType:{name:"boolean"},description:""},containMarks:{required:!1,tsType:{name:"boolean"},description:""},containTooltips:{required:!1,tsType:{name:"boolean"},description:""}}};const U={title:"Forms/Slider"},u=()=>{const[a,t]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:n=>t(n),value:a,min:1e4,max:6e4}),e.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},o=()=>{const[a,t]=r.useState(500);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:n=>t(n),value:a,min:1,max:1e3}),e.jsx("div",{style:{width:"50%",marginBottom:"10px"},children:e.jsx(G,{value:a.toString(),onChange:n=>t(+n.target.value)})}),e.jsx("button",{onClick:()=>t(500),children:"Reset"})]})},l=()=>{const[a,t]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:n=>t(n),value:a,min:1e4,max:6e4,step:1e3}),e.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},i=()=>{const[a,t]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:n=>t(n),value:a,min:1e4,max:6e4,keyboardStepFactor:.1}),e.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},d=()=>{const[a,t]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:n=>t(n),value:a,min:1e4,max:6e4,containMarks:!0}),e.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},c=()=>{const[a,t]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:n=>t(n),value:a,min:1e4,max:6e4,showMarks:!1}),e.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},p=()=>{const[a,t]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:n=>t(n),value:a,min:1e4,max:6e4,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},m=()=>{const[a,t]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:n=>t(n),value:a,min:1e4,max:6e4,startEndValues:["Less than 10 000","Over 60 000"],showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>t(15e3),children:"Reset"})]})},v=()=>{const a=[{label:"12:00"},{label:"12:30"},{label:"13:00"},{label:"13:30"},{label:"14:00"},{label:"14:30"},{label:"15:00"}],[t,n]=r.useState({label:"12:30"});return e.jsxs("div",{children:[e.jsx("output",{children:t.label}),e.jsx(s,{onChange:z=>n(z),rangeValues:a,value:t,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n({label:"12:30"}),children:"Reset"})]})};u.__docgenInfo={description:"",methods:[],displayName:"Regular"};o.__docgenInfo={description:"",methods:[],displayName:"RegularWithInput"};l.__docgenInfo={description:"",methods:[],displayName:"RegularStep1000"};i.__docgenInfo={description:"",methods:[],displayName:"RegularWithLargerKeyboardStepFactor"};d.__docgenInfo={description:"",methods:[],displayName:"RegularWithContainedMarks"};c.__docgenInfo={description:"",methods:[],displayName:"RegularWithoutMarks"};p.__docgenInfo={description:"",methods:[],displayName:"RegularWithTooltips"};m.__docgenInfo={description:"",methods:[],displayName:"RegularWithStartEndValues"};v.__docgenInfo={description:"",methods:[],displayName:"WithRangeValues"};var g,h,b;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(b=(h=u.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,V,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(S=(V=o.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var R,k,y;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={1000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var C,j,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} keyboardStepFactor={0.1} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var T,w,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var q,W,M;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showMarks={false} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var I,N,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,L,O;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} startEndValues={['Less than 10 000', 'Over 60 000']} showTooltips containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var A,K,B;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(B=(K=v.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};const X=["Regular","RegularWithInput","RegularStep1000","RegularWithLargerKeyboardStepFactor","RegularWithContainedMarks","RegularWithoutMarks","RegularWithTooltips","RegularWithStartEndValues","WithRangeValues"];export{u as Regular,l as RegularStep1000,d as RegularWithContainedMarks,o as RegularWithInput,i as RegularWithLargerKeyboardStepFactor,m as RegularWithStartEndValues,p as RegularWithTooltips,c as RegularWithoutMarks,v as WithRangeValues,X as __namedExportsOrder,U as default};
