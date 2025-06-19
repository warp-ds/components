import{f as x,u as P,T as k,r as z,a as B,x as w}from"./lit-element-CDx7zEkf.js";const T=":host{display:inline-block}.w-icon{--_w-icon-size: var(--w-icon-size, 24px);height:var(--_w-icon-size);width:var(--_w-icon-size);display:flex}.w-icon svg{pointer-events:none;height:var(--_w-icon-size);width:var(--_w-icon-size)}.w-icon--s{--w-icon-size: 16px}.w-icon--m{--w-icon-size: 24px}.w-icon--l{--w-icon-size: 32px}";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:x},A=(t=D,e,r)=>{const{kind:n,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,u,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(n==="setter"){const{name:s}=r;return function(l){const u=this[s];e.call(this,l),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+n)};function h(t){return(e,r)=>typeof r=="object"?A(t,e,r):((n,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(t){return h({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E={ATTRIBUTE:1},F=t=>(...e)=>({_$litDirective$:t,values:e});class L{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=F(class extends L{constructor(t){var e;if(super(t),t.type!==E.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(e)}const r=t.element.classList;for(const o of this.st)o in e||(r.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return k}});var _=Object.defineProperty,p=(t,e,r,n)=>{for(var i=void 0,o=t.length-1,s;o>=0;o--)(s=t[o])&&(i=s(e,r,i)||i);return i&&_(e,r,i),i};const m=new Map,$='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';function H(t,e={}){const r=e.responseParser??(n=>n.text());return m.has(t)||m.set(t,fetch(t).then(r)),m.get(t)}const g=class g extends z{constructor(){super(...arguments),this.name="",this.size="medium",this.locale="en",this.svg=null}async fetchIcon(e){const r=`https://assets.finn.no/pkg/eikons/v1/${this.locale}/${e}.svg`;try{const n=await H(r);return new DOMParser().parseFromString(n,"text/html").body.querySelector("svg")}catch{return null}}firstUpdated(){this.loadIcon()}updated(e){(e.has("name")||e.has("locale"))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let e=await this.fetchIcon(this.name);e||(e=new DOMParser().parseFromString($,"text/html").body.firstElementChild),this.svg=e}render(){const e={"w-icon":!0,"w-icon--s":this.size==="small","w-icon--m":this.size==="medium","w-icon--l":this.size==="large"},r=typeof this.size=="string"&&this.size.endsWith("px")?`--w-icon-size: ${this.size};`:"";return w`<div class="${U(e)}" style="${r}" part="w-${this.name.toLowerCase()}">${this.svg}</div>`}};g.styles=[B(T)];let a=g;p([h({type:String,reflect:!0})],a.prototype,"name");p([h({type:String,reflect:!0})],a.prototype,"size");p([h({type:String,reflect:!0})],a.prototype,"locale");p([M()],a.prototype,"svg");customElements.define("w-icon",a);const O={component:"w-icon",title:"Icons",render:({name:t,size:e,locale:r})=>w`
      <w-icon name=${t} size=${e} locale=${r} />
  `,argTypes:{name:{control:{type:"select"},options:["ActiveAds","Ads","AgricultureMachine","AirCon","AllWheelDrive","AnimalPaw","Archway","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","Attachment","Automatic","AwardMedal","BackWheelDrive","Bag","Bank","BankIdNo","BatteryEmpty","BatteryFull","BatteryHalfFull","Beach","Bell","BellFilled","Bin","Block","Boat","BoatLength","Bolt","Bookmark","Browser","BrowserVerified","Building","BuildingPlot","Bulb","Burger","Bus","CabinHut","Calculator","Calendar","Camera","Cancel","Car","CarEngine","CarKey","CarLeft","CarRight","CarService","Charger","Charter","ChatRequest","ChatSupport","Check","CheckShield","Checklist","ChevronDoubleLeft","ChevronDoubleRight","ChevronDown","ChevronLeft","ChevronRight","ChevronUp","CirclePlus","CirclePlusFilled","CircleUser","CircleUserFilled","Clock","Close","Cog","ColorPalette","Copy","CottagePlot","CreditCard","Cursor","Delivery","Diner","Discount","Dislike","Door","Dots","DotsVertical","DoubleBed","Download","DragDots","Drawer","Drink","Edit","Energy","Engine","EngineBelt","Error","Exchange","Expand","EyeOff","EyeOn","Facebook","Farm","Feedback","FileAdd","Filter","Fireplace","Fishing","Fitness","FrontWheelDrive","GasDiesel","GasFuel","GasHybrid","GraphLine","GraphPie","Grid","Grill","Headset","Heart","HeartRate","Hiking","History","House","HouseBed","HouseCabin","HouseFilled","HouseModern","HousePerson","Image","Info","Instagram","JetSki","Keys","Krone","Lamp","Laundry","Layers","Leaf","Lift","Like","Link","LinkExternal","ListSort","LockShield","Logout","Mail","Mailbox","Manual","Map","Measure","Message","Messages","MessagesFilled","Minus","Mixer","Money","Mountain","NewAd","NoSmoking","NorwegianMotor","OfficeDesk","Organize","Parking","Phone","PhoneScratched","PhoneUsed","PictureStack","PinMarker","PinRound","PlaneLand","PlaneTakeOff","PlaneTicket","Play","Playhouse","Plots","Plus","ProductBlink","ProductBump","ProductCarousel","ProductHighlightListing","ProductNabolagsprofil","ProductNoAds","ProductStarred","ProductTop","Propeller","Question","Refresh","Road","RoomService","RowingBoat","Ruler","Sailing","Sauna","ScrollUp","Search","SearchFavorites","Seat","Send","Service","Share","Shipping","Shoes","ShoppingCart","Shower","SingleCylinder","Skyscraper","SmileyGood","SmileyHappy","SmileyNeutral","SmileySad","Sorting","Spa","Sparkles","Speedometer","Stairs","StarCheck","StarEmpty","StarFull","StarHalf","Store","Stove","Success","Suitcase","Support","Swimming","TV","Tag","TaskList","TextBold","TextItalic","TextStrikethrough","TextUnderline","Theater","ThreeSixty","TownHouse","TrendDown","TrendFlat","TrendUp","Twitter","Up","Upload","User","UserGroup","UserWoman","Users","Vacuum","Verification","Wallet","Warning","Warranty","WaterPitcher","Weight","Wheelchair","Wifi","Woods","YouTube"]},size:{control:{type:"select"},options:["small","medium","large","42px","64px","96px","128px"]},locale:{control:{type:"select"},options:["nb","sv","da","fi","en"]}}},c={args:{name:"Ads",size:"medium",locale:"nb"}},d=()=>w`
    <div><div>
      <w-icon name="Speedometer" size="small" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="medium" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="large" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="42px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="64px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="96px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="128px" locale="nb"></w-icon>
    </div>
    some text below
    </div>
`;var S,f,y;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'Ads',
    size: 'medium',
    locale: 'nb'
  }
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,C,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => html\`
    <div><div>
      <w-icon name="Speedometer" size="small" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="medium" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="large" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="42px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="64px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="96px" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="128px" locale="nb"></w-icon>
    </div>
    some text below
    </div>
\``,...(b=(C=d.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const I=["Default","Example"];export{c as Default,d as Example,I as __namedExportsOrder,O as default};
