import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-DmM0KDA7.js";import{C as B}from"./CoreSlider-D5zOTX21.js";import{T as L}from"./index-AHs_-OsL.js";function s(a){return B(a)}s.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | RangeValue",elements:[{name:"number"},{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}]},description:""},startEndValues:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | null)[]"},description:""},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"},description:""},onChange:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},onChangeAfter:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:""},showMarks:{required:!1,tsType:{name:"boolean"},description:""},showTooltips:{required:!1,tsType:{name:"boolean"},description:""},containMarks:{required:!1,tsType:{name:"boolean"},description:""},containTooltips:{required:!1,tsType:{name:"boolean"},description:""}}};const J={title:"Forms/Slider"},u=()=>{const[a,n]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:t=>n(t),value:a,min:1e4,max:6e4}),e.jsx("button",{onClick:()=>n(15e3),children:"Reset"})]})},o=()=>{const[a,n]=r.useState(500);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:t=>n(t),value:a,min:1,max:1e3}),e.jsx("div",{style:{width:"50%",marginBottom:"10px"},children:e.jsx(L,{value:a.toString(),onChange:t=>n(+t.target.value)})}),e.jsx("button",{onClick:()=>n(500),children:"Reset"})]})},l=()=>{const[a,n]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:t=>n(t),value:a,min:1e4,max:6e4,step:1e3}),e.jsx("button",{onClick:()=>n(15e3),children:"Reset"})]})},i=()=>{const[a,n]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:t=>n(t),value:a,min:1e4,max:6e4,containMarks:!0}),e.jsx("button",{onClick:()=>n(15e3),children:"Reset"})]})},d=()=>{const[a,n]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:t=>n(t),value:a,min:1e4,max:6e4,showMarks:!1}),e.jsx("button",{onClick:()=>n(15e3),children:"Reset"})]})},c=()=>{const[a,n]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:t=>n(t),value:a,min:1e4,max:6e4,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n(15e3),children:"Reset"})]})},p=()=>{const[a,n]=r.useState(2e4);return e.jsxs("div",{children:[e.jsx("output",{children:a}),e.jsx(s,{onChange:t=>n(t),value:a,min:1e4,max:6e4,startEndValues:["Less than 10 000","Over 60 000"],showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n(15e3),children:"Reset"})]})},m=()=>{const a=[{label:"12:00"},{label:"12:30"},{label:"13:00"},{label:"13:30"},{label:"14:00"},{label:"14:30"},{label:"15:00"}],[n,t]=r.useState({label:"12:30"});return e.jsxs("div",{children:[e.jsx("output",{children:n.label}),e.jsx(s,{onChange:A=>t(A),rangeValues:a,value:n,showTooltips:!0,containMarks:!0}),e.jsx("button",{onClick:()=>t({label:"12:30"}),children:"Reset"})]})};u.__docgenInfo={description:"",methods:[],displayName:"Regular"};o.__docgenInfo={description:"",methods:[],displayName:"RegularWithInput"};l.__docgenInfo={description:"",methods:[],displayName:"RegularStep1000"};i.__docgenInfo={description:"",methods:[],displayName:"RegularWithContainedMarks"};d.__docgenInfo={description:"",methods:[],displayName:"RegularWithoutMarks"};c.__docgenInfo={description:"",methods:[],displayName:"RegularWithTooltips"};p.__docgenInfo={description:"",methods:[],displayName:"RegularWithStartEndValues"};m.__docgenInfo={description:"",methods:[],displayName:"WithRangeValues"};var v,g,h;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(h=(g=u.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,V;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(V=(x=o.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var R,k,S;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={1000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var y,C,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(j=(C=i.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var f,T,w;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showMarks={false} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var q,_,M;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var W,I,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} startEndValues={['Less than 10 000', 'Over 60 000']} showTooltips containMarks />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var N,O,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};const K=["Regular","RegularWithInput","RegularStep1000","RegularWithContainedMarks","RegularWithoutMarks","RegularWithTooltips","RegularWithStartEndValues","WithRangeValues"];export{u as Regular,l as RegularStep1000,i as RegularWithContainedMarks,o as RegularWithInput,p as RegularWithStartEndValues,c as RegularWithTooltips,d as RegularWithoutMarks,m as WithRangeValues,K as __namedExportsOrder,J as default};
