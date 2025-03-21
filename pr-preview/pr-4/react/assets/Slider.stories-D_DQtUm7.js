import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-DmM0KDA7.js";import{C as Z}from"./CoreSlider-CkDvIVdS.js";function r(t){return Z(t)}r.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"union",raw:"number | RangeValue",elements:[{name:"number"},{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}]},description:""},startEndValues:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | null)[]"},description:""},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"},description:""},onChange:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},onChangeAfter:{required:!1,tsType:{name:"union",raw:"((value: number) => void) | ((value: RangeValue) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:""},showMarks:{required:!1,tsType:{name:"boolean"},description:""},showTooltips:{required:!1,tsType:{name:"boolean"},description:""},containMarks:{required:!1,tsType:{name:"boolean"},description:""},containTooltips:{required:!1,tsType:{name:"boolean"},description:""}}};const ae={title:"Forms/Slider"},u=()=>{const[t,a]=n.useState(2e4);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,min:1e4,max:6e4,step:10}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},o=()=>{const[t,a]=n.useState(1e4);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,min:1e4,max:6e4,step:10}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},l=()=>{const[t,a]=n.useState(2e4);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,min:1e4,max:6e4,showTooltips:!0,showMarks:!0,step:100}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},i=()=>{const[t,a]=n.useState(2e4);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,min:1e4,max:6e4,showTooltips:!0,showMarks:!0,step:100}),e.jsx("button",{onClick:()=>a(15e3),children:"Reset"})]})},d=()=>{const[t,a]=n.useState(3);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,min:0,max:6,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>a(3),children:"Reset"})]})},c=()=>{const[t,a]=n.useState(3);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,min:1,max:8,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>a(3),children:"Reset"})]})},p=()=>{const[t,a]=n.useState(3);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,min:2,max:10,showTooltips:!0,showMarks:!0,containMarks:!0,startEndValues:["Less than 2","gt 10"]}),e.jsx("button",{onClick:()=>a(3),children:"Reset"})]})},m=()=>{const[t,a]=n.useState(3);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,min:2,max:10,showTooltips:!0,showMarks:!0,startEndValues:[null,"gt 10"]}),e.jsx("button",{onClick:()=>a(3),children:"Reset"})]})},h=()=>{const[t,a]=n.useState("yes"),s=["hi","haha","yes","nr","ok","1","2"];return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:x=>a(x),value:t,rangeValues:s,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>a("yes"),children:"Reset"})]})},v=()=>{const[t,a]=n.useState(625e3);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:t}),e.jsx(r,{onChange:s=>a(s),value:t,disabled:!0,min:1e3,max:1e7,step:1e3})]})},g=()=>{const[t,a]=n.useState(625e3),[s,x]=n.useState(t);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsx("output",{children:s}),e.jsx(r,{onChange:y=>a(y),onChangeAfter:y=>x(y),value:t,min:1e3,max:1e7,step:1e3})]})};u.__docgenInfo={description:"",methods:[],displayName:"Regular"};o.__docgenInfo={description:"",methods:[],displayName:"Regular1"};l.__docgenInfo={description:"",methods:[],displayName:"Regular2"};i.__docgenInfo={description:"",methods:[],displayName:"Regular3"};d.__docgenInfo={description:"",methods:[],displayName:"Regular4"};c.__docgenInfo={description:"",methods:[],displayName:"Regular5"};p.__docgenInfo={description:"",methods:[],displayName:"Regular6"};m.__docgenInfo={description:"",methods:[],displayName:"Regular7"};h.__docgenInfo={description:"",methods:[],displayName:"RegularRangeValues"};v.__docgenInfo={description:"",methods:[],displayName:"Disabled"};g.__docgenInfo={description:"",methods:[],displayName:"ChangeAfter"};var V,b,R;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(R=(b=u.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var S,k,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(10000);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} step={10} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var j,f,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips showMarks step={100} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var T,_,W;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(20000);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={10000} max={60000} showTooltips showMarks step={100} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>;
}`,...(W=(_=i.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var q,M,A;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(3);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={0} max={6} showTooltips showMarks />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var I,N,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(3);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={1} max={8} showTooltips showMarks />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(E=(N=c.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var D,O,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(3);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={2} max={10} showTooltips showMarks containMarks startEndValues={['Less than 2', 'gt 10']} />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(F=(O=p.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var L,z,B;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(3);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} min={2} max={10} showTooltips showMarks startEndValues={[null, 'gt 10']} />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>;
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('yes');
  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={value => setValue(value)} value={value} rangeValues={range} showTooltips showMarks />
      <button onClick={() => setValue('yes')}>Reset</button>
    </div>;
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,P,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(625_000);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{value}</output>
      <Slider onChange={val => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Q=(P=v.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(625_000);
  const [valueAfter, setValueAfter] = useState(value);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>{valueAfter}</output>
      <Slider onChange={val => setValue(val)} onChangeAfter={val => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>;
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const se=["Regular","Regular1","Regular2","Regular3","Regular4","Regular5","Regular6","Regular7","RegularRangeValues","Disabled","ChangeAfter"];export{g as ChangeAfter,v as Disabled,u as Regular,o as Regular1,l as Regular2,i as Regular3,d as Regular4,c as Regular5,p as Regular6,m as Regular7,h as RegularRangeValues,se as __namedExportsOrder,ae as default};
