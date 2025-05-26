import{f as b,u as k,T as x,i as B,r as T,x as g}from"./lit-element-BBTAx0MG.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:b},A=(t=D,e,r)=>{const{kind:i,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(r.name,t),i==="accessor"){const{name:n}=r;return{set(l){const p=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,p,t)},init(l){return l!==void 0&&this.P(n,void 0,t),l}}}if(i==="setter"){const{name:n}=r;return function(l){const p=this[n];e.call(this,l),this.requestUpdate(n,p,t)}}throw Error("Unsupported decorator location: "+i)};function h(t){return(e,r)=>typeof r=="object"?A(t,e,r):((i,o,s)=>{const n=o.hasOwnProperty(s);return o.constructor.createProperty(s,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(t){return h({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z={ATTRIBUTE:1},E=t=>(...e)=>({_$litDirective$:t,values:e});class F{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=E(class extends F{constructor(t){var e;if(super(t),t.type!==z.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const n=!!e[s];n===this.st.has(s)||(o=this.nt)!=null&&o.has(s)||(n?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return x}}),U=B`
:host {
    color: var(--w-s-color-icon);
    vertical-align: middle;
    line-height: 1;
    display: inline-block;
}
.w-icon {
    color: var(--w-s-color-icon);
    display: flex;
}

.w-icon--small {
    font-size: 16px;
}

.w-icon--medium {
    font-size: 24px;
}

.w-icon--large {
    font-size: 32px;
}

.w-icon > svg {
    width: 1em;
    height: 1em;
    fill: none;
    vertical-align: middle;
    pointer-events: none;
}
`;var $=Object.defineProperty,u=(t,e,r,i)=>{for(var o=void 0,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=n(e,r,o)||o);return o&&$(e,r,o),o};const m=new Map,H='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';function R(t,e={}){const r=e.responseParser??(i=>i.text());return m.has(t)||m.set(t,fetch(t).then(r)),m.get(t)}const w=class w extends T{constructor(){super(...arguments),this.name="",this.size="medium",this.locale="en",this.svg=null}async fetchIcon(e){const r=`https://assets.finn.no/pkg/eikons/v1/${this.locale}/${e}.svg`;try{const i=await R(r);return new DOMParser().parseFromString(i,"text/html").body.querySelector("svg")}catch{return null}}firstUpdated(){this.loadIcon()}updated(e){(e.has("name")||e.has("locale"))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let e=await this.fetchIcon(this.name);e||(e=new DOMParser().parseFromString(H,"text/html").body.firstElementChild),this.svg=e}render(){const e={"w-icon":!0,"w-icon--small":this.size==="small","w-icon--medium":this.size==="medium","w-icon--large":this.size==="large"},r=typeof this.size=="string"&&this.size.endsWith("px")?`font-size: ${this.size};`:"";return g`<div class="${L(e)}" style="${r}" part="w-${this.name.toLowerCase()}">${this.svg}</div>`}};w.styles=[U];let a=w;u([h({type:String,reflect:!0})],a.prototype,"name");u([h({type:String,reflect:!0})],a.prototype,"size");u([h({type:String,reflect:!0})],a.prototype,"locale");u([M()],a.prototype,"svg");customElements.define("w-icon",a);const O={component:"w-icon",title:"Icons",render:({name:t,size:e,locale:r})=>g`
      <w-icon name=${t} size=${e} locale=${r} />
  `,argTypes:{name:{control:{type:"select"},options:["YouTube","Woods","Wifi","Wheelchair","Weight","WaterPitcher","Warranty","Warning","Wallet","Verification","Vacuum","Users","UserWoman","UserGroup","User","Upload","Up","Twitter","TrendUp","TrendFlat","TrendDown","TownHouse","ThreeSixty","Theater","TextUnderline","TextStrikethrough","TextItalic","TextBold","TaskList","Tag","TV","Swimming","Support","Suitcase","Success","Stove","Store","StarHalf","StarFull","StarEmpty","StarCheck","Stairs","Speedometer","Sparkles","Spa","Sorting","SmileySad","SmileyNeutral","SmileyHappy","SmileyGood","Skyscraper","SingleCylinder","Shower","ShoppingCart","Shoes","Shipping","Share","Service","Send","Seat","SearchFavorites","Search","ScrollUp","Sauna","Sailing","Ruler","RowingBoat","RoomService","Road","Refresh","Question","Propeller","ProductTop","ProductStarred","ProductNoAds","ProductNabolagsprofil","ProductHighlightListing","ProductCarousel","ProductBump","ProductBlink","Plus","Plots","Playhouse","Play","PlaneTicket","PlaneTakeOff","PlaneLand","PinRound","PinMarker","PictureStack","PhoneUsed","PhoneScratched","Phone","Parking","Organize","OfficeDesk","NorwegianMotor","NoSmoking","NewAd","Mountain","Money","Mixer","Minus","MessagesFilled","Messages","Message","Measure","Map","Manual","Mailbox","Mail","Logout","LockShield","ListSort","LinkExternal","Link","Like","Lift","Leaf","Layers","Laundry","Lamp","Krone","Keys","JetSki","Instagram","Info","Image","HousePerson","HouseModern","HouseFilled","HouseCabin","HouseBed","House","History","Hiking","HeartRate","Heart","Headset","Grill","Grid","GraphPie","GraphLine","GasHybrid","GasFuel","GasDiesel","FrontWheelDrive","Fitness","Fishing","Fireplace","Filter","FileAdd","Feedback","Farm","Facebook","EyeOn","EyeOff","Expand","Exchange","Error","EngineBelt","Engine","Energy","Edit","Drink","Drawer","DragDots","Download","DoubleBed","DotsVertical","Dots","Door","Dislike","Discount","Diner","Delivery","Cursor","CreditCard","CottagePlot","Copy","ColorPalette","Cog","Close","Clock","CircleUserFilled","CircleUser","CirclePlusFilled","CirclePlus","ChevronUp","ChevronRight","ChevronLeft","ChevronDown","ChevronDoubleRight","ChevronDoubleLeft","Checklist","CheckShield","Check","ChatSupport","ChatRequest","Charter","Charger","CarService","CarRight","CarLeft","CarKey","CarEngine","Car","Cancel","Camera","Calendar","Calculator","CabinHut","Bus","Burger","Bulb","BuildingPlot","Building","BrowserVerified","Browser","Bookmark","Bolt","BoatLength","Boat","Block","Bin","BellFilled","Bell","Beach","BatteryHalfFull","BatteryFull","BatteryEmpty","BankIdNo","Bank","Bag","BackWheelDrive","AwardMedal","Automatic","Attachment","ArrowUp","ArrowRight","ArrowLeft","ArrowDown","Archway","AnimalPaw","AllWheelDrive","AirCon","AgricultureMachine","Ads","ActiveAds"]},size:{control:{type:"select"},options:["small","medium","large","42px","64px","96px","128px"]},locale:{control:{type:"select"},options:["nb","sv","da","fi","en"]}}},c={args:{name:"Ads",size:"medium",locale:"nb"}},d=()=>g`
    <div>
      <w-icon name="Speedometer" size="small" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="medium" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="large" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="xtralarge" locale="nb"></w-icon>
    </div>
`;var f,S,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'Ads',
    size: 'medium',
    locale: 'nb'
  }
}`,...(y=(S=c.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,C,P;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => html\`
    <div>
      <w-icon name="Speedometer" size="small" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="medium" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="large" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="xtralarge" locale="nb"></w-icon>
    </div>
\``,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const I=["Default","Example"];export{c as Default,d as Example,I as __namedExportsOrder,O as default};
