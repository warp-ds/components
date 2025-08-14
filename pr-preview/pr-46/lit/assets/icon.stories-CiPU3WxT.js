import{r as C,a as x,x as m}from"./iframe-ChWPcwQ9.js";import{n as l,a as z}from"./class-map-F65hX8Zc.js";import"./preload-helper-C1FmrZbK.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(o){return l({...o,state:!0,attribute:!1})}const k=":host{display:inline-block}.w-icon{--_w-icon-size: var(--w-icon-size, 24px);height:var(--_w-icon-size);width:var(--_w-icon-size);display:flex}.w-icon svg{pointer-events:none;height:var(--_w-icon-size);width:var(--_w-icon-size)}.w-icon--s{--w-icon-size: 16px}.w-icon--m{--w-icon-size: 24px}.w-icon--l{--w-icon-size: 32px}";var P=Object.defineProperty,c=(o,e,t,n)=>{for(var i=void 0,d=o.length-1,h;d>=0;d--)(h=o[d])&&(i=h(e,t,i)||i);return i&&P(e,t,i),i};const p=new Map,B='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';function D(o,e={}){const t=e.responseParser??(n=>n.text());return p.has(o)||p.set(o,fetch(o).then(t)),p.get(o)}const u=class u extends C{constructor(){super(...arguments),this.name="",this.size="medium",this.locale="en",this.svg=null}async fetchIcon(e){const t=`https://assets.finn.no/pkg/eikons/v1/${this.locale}/${e}.svg`;try{const n=await D(t);return new DOMParser().parseFromString(n,"text/html").body.querySelector("svg")}catch{return null}}firstUpdated(){this.loadIcon()}updated(e){(e.has("name")||e.has("locale"))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let e=await this.fetchIcon(this.name);e||(e=new DOMParser().parseFromString(B,"text/html").body.firstElementChild),this.svg=e}render(){const e={"w-icon":!0,"w-icon--s":this.size==="small","w-icon--m":this.size==="medium","w-icon--l":this.size==="large"},t=typeof this.size=="string"&&this.size.endsWith("px")?`--w-icon-size: ${this.size};`:"";return m`<div class="${z(e)}" style="${t}" part="w-${this.name.toLowerCase()}">${this.svg}</div>`}};u.styles=[x(k)];let r=u;c([l({type:String,reflect:!0})],r.prototype,"name");c([l({type:String,reflect:!0})],r.prototype,"size");c([l({type:String,reflect:!0})],r.prototype,"locale");c([b()],r.prototype,"svg");customElements.get("w-icon")||customElements.define("w-icon",r);const M={component:"w-icon",title:"Icons",render:({name:o,size:e,locale:t})=>m`
      <w-icon name=${o} size=${e} locale=${t} />
  `,argTypes:{name:{control:{type:"select"},options:["ActiveAds","Ads","AgricultureMachine","AirCon","AllWheelDrive","AnimalPaw","Archway","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","Attachment","Automatic","AwardMedal","BackWheelDrive","Bag","Bank","BankIdNo","BatteryEmpty","BatteryFull","BatteryHalfFull","Beach","Bell","BellFilled","Bin","Block","Boat","BoatLength","Bolt","Bookmark","Browser","BrowserVerified","Building","BuildingPlot","Bulb","Burger","Bus","CabinHut","Calculator","Calendar","Camera","Cancel","Car","CarEngine","CarKey","CarLeft","CarRight","CarService","Charger","Charter","ChatRequest","ChatSupport","Check","CheckShield","Checklist","ChevronDoubleLeft","ChevronDoubleRight","ChevronDown","ChevronLeft","ChevronRight","ChevronUp","CirclePlus","CirclePlusFilled","CircleUser","CircleUserFilled","Clock","Close","Cog","ColorPalette","Copy","CottagePlot","CreditCard","Cursor","Delivery","Diner","Discount","Dislike","Door","Dots","DotsVertical","DoubleBed","Download","DragDots","Drawer","Drink","Edit","Energy","Engine","EngineBelt","Error","Exchange","Expand","EyeOff","EyeOn","Facebook","Farm","Feedback","FileAdd","Filter","Fireplace","Fishing","Fitness","FrontWheelDrive","GasDiesel","GasFuel","GasHybrid","GraphLine","GraphPie","Grid","Grill","Headset","Heart","HeartRate","Hiking","History","House","HouseBed","HouseCabin","HouseFilled","HouseModern","HousePerson","Image","Info","Instagram","JetSki","Keys","Krone","Lamp","Laundry","Layers","Leaf","Lift","Like","Link","LinkExternal","ListSort","LockShield","Logout","Mail","Mailbox","Manual","Map","Measure","Message","Messages","MessagesFilled","Minus","Mixer","Money","Mountain","NewAd","NoSmoking","NorwegianMotor","OfficeDesk","Organize","Parking","Phone","PhoneScratched","PhoneUsed","PictureStack","PinMarker","PinRound","PlaneLand","PlaneTakeOff","PlaneTicket","Play","Playhouse","Plots","Plus","ProductBlink","ProductBump","ProductCarousel","ProductHighlightListing","ProductNabolagsprofil","ProductNoAds","ProductStarred","ProductTop","Propeller","Question","Refresh","Road","RoomService","RowingBoat","Ruler","Sailing","Sauna","ScrollUp","Search","SearchFavorites","Seat","Send","Service","Share","Shipping","Shoes","ShoppingCart","Shower","SingleCylinder","Skyscraper","SmileyGood","SmileyHappy","SmileyNeutral","SmileySad","Sorting","Spa","Sparkles","Speedometer","Stairs","StarCheck","StarEmpty","StarFull","StarHalf","Store","Stove","Success","Suitcase","Support","Swimming","TV","Tag","TaskList","TextBold","TextItalic","TextStrikethrough","TextUnderline","Theater","ThreeSixty","TownHouse","TrendDown","TrendFlat","TrendUp","Twitter","Up","Upload","User","UserGroup","UserWoman","Users","Vacuum","Verification","Wallet","Warning","Warranty","WaterPitcher","Weight","Wheelchair","Wifi","Woods","YouTube"]},size:{control:{type:"select"},options:["small","medium","large","42px","64px","96px","128px"]},locale:{control:{type:"select"},options:["nb","sv","da","fi","en"]}}},a={args:{name:"Ads",size:"medium",locale:"nb"}},s=()=>m`
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
`;var w,g,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'Ads',
    size: 'medium',
    locale: 'nb'
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,f,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => html\`
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
\``,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const A=["Default","Example"];export{a as Default,s as Example,A as __namedExportsOrder,M as default};
