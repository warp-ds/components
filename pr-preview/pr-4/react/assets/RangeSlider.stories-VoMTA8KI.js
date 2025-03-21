import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-DmM0KDA7.js";import{C as R}from"./CoreSlider-D5zOTX21.js";import{T as o}from"./index-AHs_-OsL.js";function u(e){return R(e)}u.__docgenInfo={description:"",methods:[],displayName:"RangeSlider",props:{max:{required:!1,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:""},values:{required:!0,tsType:{name:"union",raw:"number[] | RangeValue[]",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"}]},description:""},startEndValues:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | null)[]"},description:""},rangeValues:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | ObjectRangeValue",elements:[{name:"string"},{name:"signature",type:"object",raw:"{ label: string; [key: string]: any }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}}]}],raw:"RangeValue[]"},description:""},onChange:{required:!1,tsType:{name:"union",raw:"((values: number[]) => void) | ((values: RangeValue[]) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},onChangeAfter:{required:!1,tsType:{name:"union",raw:"((values: number[]) => void) | ((values: RangeValue[]) => void)",elements:[{name:"unknown"},{name:"unknown"}]},description:""},step:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-valuetext":{required:!1,tsType:{name:"string"},description:""},keyboardStepFactor:{required:!1,tsType:{name:"number"},description:""},showMarks:{required:!1,tsType:{name:"boolean"},description:""},showTooltips:{required:!1,tsType:{name:"boolean"},description:""},containMarks:{required:!1,tsType:{name:"boolean"},description:""},containTooltips:{required:!1,tsType:{name:"boolean"},description:""}}};const k={title:"Forms/RangeSlider"},t=()=>{const[e,a]=i.useState([2e4,4e4]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(u,{onChange:s=>a(s),values:e,min:1e4,max:6e4}),n.jsx("button",{onClick:()=>a([2e4,4e4]),children:"Reset"})]})},r=()=>{const[e,a]=i.useState([100,900]);return n.jsxs("div",{children:[n.jsxs("output",{children:[e[0]," - ",e[1]]}),n.jsx(u,{onChange:s=>a(s),values:e,min:1,max:1e3}),n.jsxs("div",{style:{width:"100%",marginBottom:"10px",display:"grid",gridAutoFlow:"column",gap:"25px"},children:[n.jsx(o,{value:e[0].toString(),onChange:s=>a([+s.target.value,e[1]])}),n.jsx(o,{value:e[1].toString(),onChange:s=>a([e[0],+s.target.value])})]}),n.jsx("button",{onClick:()=>a([100,900]),children:"Reset"})]})},l=()=>{const e=[{label:"12:00"},{label:"12:30"},{label:"13:00"},{label:"13:30"},{label:"14:00"},{label:"14:30"},{label:"15:00"}],[a,s]=i.useState([{label:"12:30"},{label:"14:30"}]);return n.jsxs("div",{children:[n.jsxs("output",{children:[a[0].label," - ",a[1].label]}),n.jsx(u,{rangeValues:e,onChange:x=>s(x),values:a,showTooltips:!0,containMarks:!0}),n.jsx("button",{onClick:()=>s([{label:"12:30"},{label:"14:30"}]),children:"Reset"})]})};t.__docgenInfo={description:"",methods:[],displayName:"Regular"};r.__docgenInfo={description:"",methods:[],displayName:"RegularWithInputs"};l.__docgenInfo={description:"",methods:[],displayName:"RegularWithRangeValues"};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([20000, 40000]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider onChange={values => setValues(values)} values={values} min={10000} max={60000} />
      <button onClick={() => setValues([20000, 40000])}>Reset</button>
    </div>;
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,c,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([100, 900]);
  return <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <RangeSlider onChange={values => setValues(values)} values={values} min={1} max={1000} />
      <div style={{
      width: '100%',
      marginBottom: '10px',
      display: 'grid',
      gridAutoFlow: 'column',
      gap: '25px'
    }}>
        <TextField value={values[0].toString()} onChange={e => setValues([+e.target.value, values[1]])} />
        <TextField value={values[1].toString()} onChange={e => setValues([values[0], +e.target.value])} />
      </div>
      <button onClick={() => setValues([100, 900])}>Reset</button>
    </div>;
}`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var v,y,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
  const [values, setValues] = useState([{
    label: '12:30'
  }, {
    label: '14:30'
  }]);
  return <div>
      <output>
        {values[0].label} - {values[1].label}
      </output>
      <RangeSlider rangeValues={range} onChange={values => setValues(values)} values={values} showTooltips containMarks />
      <button onClick={() => setValues([{
      label: '12:30'
    }, {
      label: '14:30'
    }])}>Reset</button>
    </div>;
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const j=["Regular","RegularWithInputs","RegularWithRangeValues"];export{t as Regular,r as RegularWithInputs,l as RegularWithRangeValues,j as __namedExportsOrder,k as default};
