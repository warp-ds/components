import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-DmM0KDA7.js";import{C as oe}from"./CoreSlider-C06GoKO9.js";function r(s){return oe(s)}r.__docgenInfo={description:"",methods:[],displayName:"RangeSlider",props:{max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},values:{required:!0,tsType:{name:"union",raw:"number[] | RangeValue[]",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"}]},description:""},startEndValues:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | null)[]"},description:""},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"},description:""},onChange:{required:!1,tsType:{name:"union",raw:"((values: number[]) => void) | ((values: RangeValue[]) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},onChangeAfter:{required:!1,tsType:{name:"union",raw:"((values: number[]) => void) | ((values: RangeValue[]) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:""},showMarks:{required:!1,tsType:{name:"boolean"},description:""},showTooltips:{required:!1,tsType:{name:"boolean"},description:""},containMarks:{required:!1,tsType:{name:"boolean"},description:""},containTooltips:{required:!1,tsType:{name:"boolean"},description:""}}};const de={title:"Forms/RangeSlider"},u=()=>{const[s,n]=t.useState([1e3,5008970]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:1e3,max:1e7,step:1e3,showTooltips:!0,showMarks:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n([1e3,5008970]),children:"Reset"})]})},l=()=>{const[s,n]=t.useState([100,1500]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:100,max:1500,step:10,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>n([100,1500]),children:"Reset"})]})},i=()=>{const[s,n]=t.useState([-100,100]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:-150,max:150,step:1,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>n([-100,100]),children:"Reset"})]})},d=()=>{const[s,n]=t.useState([1e3,9e3]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:0,max:1e4,step:100,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>n([1e3,9e3]),children:"Reset"})]})},c=()=>{const[s,n]=t.useState([10,1e3]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:0,max:4e3,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>n([10,1e3]),children:"Reset"})]})},p=()=>{const[s,n]=t.useState([0,1e4]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:0,max:1e4,showTooltips:!0,showMarks:!0,step:100}),e.jsx("button",{onClick:()=>n([0,1e4]),children:"Reset"})]})},m=()=>{const[s,n]=t.useState([1,15]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:0,max:20,step:1,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>n([1,15]),children:"Reset"})]})},h=()=>{const[s,n]=t.useState([1e3,5e3]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:1e3,max:5e3,startEndValues:["Less than 1000","Over 5000"],step:100,showTooltips:!0,showMarks:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n([1e3,5e3]),children:"Reset"})]})},g=()=>{const[s,n]=t.useState(["Less than 1000","Over 5000"]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{values:s,onChange:a=>n(a),min:1e3,max:5e3,startEndValues:["Less than 1000","Over 5000"],step:100,showTooltips:!0,showMarks:!0,containMarks:!0}),e.jsx("button",{onClick:()=>n(["Less than 1000","Over 5000"]),children:"Reset"})]})},v=()=>{const[s,n]=t.useState(["Less than 1000","Over 5000"]),[a,o]=t.useState(["Less than 1000","Over 5000"]);return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx("br",{}),e.jsxs("output",{children:[a[0]," - ",a[1]]}),e.jsx(r,{values:s,onChange:V=>n(V),onChangeAfter:V=>o(V),min:1e3,max:5e3,startEndValues:["Less than 1000","Over 5000"],step:100,showTooltips:!0,showMarks:!0,containMarks:!0}),e.jsx("button",{onClick:()=>(n(["Less than 1000","Over 5000"]),o(["Less than 1000","Over 5000"])),children:"Reset"})]})},x=()=>{const[s,n]=t.useState(["yes","1"]),a=["hi","haha","yes","nr","ok","1","2"];return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{onChange:o=>n(o),values:s,rangeValues:a,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>n(["yes","1"]),children:"Reset"})]})},b=()=>{const[s,n]=t.useState(["06:30","08:30"]),a=["06:00","06:30","07:00","07:30","08:00","08:30","09:00"];return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0]," - ",s[1]]}),e.jsx(r,{onChange:o=>n(o),values:s,rangeValues:a,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>n(["06:30","08:30"]),children:"Reset"})]})},R=()=>{const[s,n]=t.useState([{label:"01/01"},{label:"06/01"}]),a=[{label:"01/01"},{label:"02/01"},{label:"03/01"},{label:"04/01"},{label:"05/01"},{label:"06/01"}];return e.jsxs("div",{style:{maxWidth:"500px"},children:[e.jsxs("output",{children:[s[0].label," - ",s[1].label]}),e.jsx(r,{onChange:o=>n(o),values:s,rangeValues:a,showTooltips:!0,showMarks:!0}),e.jsx("button",{onClick:()=>n([{label:"01/01"},{label:"06/01"}]),children:"Reset"})]})};u.__docgenInfo={description:"",methods:[],displayName:"Range"};l.__docgenInfo={description:"",methods:[],displayName:"Range2"};i.__docgenInfo={description:"",methods:[],displayName:"Range3"};d.__docgenInfo={description:"",methods:[],displayName:"Range4"};c.__docgenInfo={description:"",methods:[],displayName:"Range5"};p.__docgenInfo={description:"",methods:[],displayName:"Range6"};m.__docgenInfo={description:"",methods:[],displayName:"Range7"};h.__docgenInfo={description:"",methods:[],displayName:"Range8"};g.__docgenInfo={description:"",methods:[],displayName:"Range9"};v.__docgenInfo={description:"",methods:[],displayName:"Range10changeafter"};x.__docgenInfo={description:"",methods:[],displayName:"DualRangeValues"};b.__docgenInfo={description:"",methods:[],displayName:"DualRangeValues2"};R.__docgenInfo={description:"",methods:[],displayName:"DualRangeValues3"};var y,k,w;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([1000, 5008970]);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltips showMarks containMarks />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>;
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,C,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([100, 1500]);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={100} max={1500} step={10} showTooltips showMarks />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>;
}`,...(S=(C=l.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,f,M;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([-100, 100]);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={-150} max={150} step={1} showTooltips showMarks />
      <button onClick={() => setValues([-100, 100])}>Reset</button>
    </div>;
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var _,W,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([1000, 9000]);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={0} max={10000} step={100} showTooltips showMarks />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>;
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var q,L,I;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([10, 1000]);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={0} max={4000} showTooltips showMarks />
      <button onClick={() => setValues([10, 1000])}>Reset</button>
    </div>;
}`,...(I=(L=c.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var N,E,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([0, 10000]);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={0} max={10000} showTooltips showMarks step={100} />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
    </div>;
}`,...(D=(E=p.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var A,F,z;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([1, 15]);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={0} max={20} step={1} showTooltips showMarks />
      <button onClick={() => setValues([1, 15])}>Reset</button>
    </div>;
}`,...(z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var B,G,H;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([1000, 5000]);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={1000} max={5000} startEndValues={['Less than 1000', 'Over 5000']} step={100} showTooltips showMarks containMarks />
      <button onClick={() => setValues([1000, 5000])}>Reset</button>
    </div>;
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,P;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const [values, setValues] = useState(['Less than 1000', 'Over 5000']);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} min={1000} max={5000} startEndValues={['Less than 1000', 'Over 5000']} step={100} showTooltips showMarks containMarks />
      <button onClick={() => setValues(['Less than 1000', 'Over 5000'])}>Reset</button>
    </div>;
}`,...(P=(K=g.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [values, setValues] = useState(['Less than 1000', 'Over 5000']);
  const [values2, setValues2] = useState(['Less than 1000', 'Over 5000']);
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <br />
      <output>
        {values2[0]} - {values2[1]}
      </output>
      <RangeSlider values={values} onChange={nums => setValues(nums)} onChangeAfter={nums => setValues2(nums)} min={1000} max={5000} startEndValues={['Less than 1000', 'Over 5000']} step={100} showTooltips showMarks containMarks />
      {/* biome-ignore lint/style/noCommaOperator: <explanation> */}
      <button onClick={() => (setValues(['Less than 1000', 'Over 5000']), setValues2(['Less than 1000', 'Over 5000']))}>
        Reset
      </button>
    </div>;
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [values, setValues] = useState(['yes', '1']);
  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider onChange={values => setValues(values)} values={values} rangeValues={range} showTooltips showMarks />
      <button onClick={() => setValues(['yes', '1'])}>Reset</button>
    </div>;
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,se,ne;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const [values, setValues] = useState(['06:30', '08:30']);
  const range = ['06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00'];
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider onChange={values => setValues(values)} values={values} rangeValues={range} showTooltips showMarks />
      <button onClick={() => setValues(['06:30', '08:30'])}>Reset</button>
    </div>;
}`,...(ne=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ae,te,re;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([{
    label: '01/01'
  }, {
    label: '06/01'
  }]);
  const range = [{
    label: '01/01'
  }, {
    label: '02/01'
  }, {
    label: '03/01'
  }, {
    label: '04/01'
  }, {
    label: '05/01'
  }, {
    label: '06/01'
  }];
  return <div style={{
    maxWidth: '500px'
  }}>
      <output>
        {values[0].label} - {values[1].label}
      </output>
      <RangeSlider onChange={values => setValues(values)} values={values} rangeValues={range} showTooltips showMarks />
      <button onClick={() => setValues([{
      label: '01/01'
    }, {
      label: '06/01'
    }])}>
        Reset
      </button>
    </div>;
}`,...(re=(te=R.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const ce=["Range","Range2","Range3","Range4","Range5","Range6","Range7","Range8","Range9","Range10changeafter","DualRangeValues","DualRangeValues2","DualRangeValues3"];export{x as DualRangeValues,b as DualRangeValues2,R as DualRangeValues3,u as Range,v as Range10changeafter,l as Range2,i as Range3,d as Range4,c as Range5,p as Range6,m as Range7,h as Range8,g as Range9,ce as __namedExportsOrder,de as default};
