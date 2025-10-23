import{r as C,a as x,x as m}from"./iframe-ABP5Q0C4.js";import{n as l,e as k}from"./class-map-DDitnKbw.js";import"./preload-helper-C1FmrZbK.js";const b=":host{display:inline-block}.w-icon{--_w-icon-size: var(--w-icon-size, 24px);height:var(--_w-icon-size);width:var(--_w-icon-size);display:flex}.w-icon svg{pointer-events:none;height:var(--_w-icon-size);width:var(--_w-icon-size)}.w-icon--s{--w-icon-size: 16px}.w-icon--m{--w-icon-size: 24px}.w-icon--l{--w-icon-size: 32px}";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(o){return l({...o,state:!0,attribute:!1})}var P=Object.defineProperty,c=(o,e,r,n)=>{for(var t=void 0,d=o.length-1,u;d>=0;d--)(u=o[d])&&(t=u(e,r,t)||t);return t&&P(e,r,t),t};const p=new Map,B='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';function D(o,e={}){const r=e.responseParser??(n=>n.text());return p.has(o)||p.set(o,fetch(o).then(r)),p.get(o)}const h=class h extends C{constructor(){super(...arguments),this.name="",this.size="medium",this.locale="en",this.svg=null}async fetchIcon(e){const r=`https://assets.finn.no/pkg/eikons/v1/${this.locale}/${e}.svg`;try{const n=await D(r);return new DOMParser().parseFromString(n,"text/html").body.querySelector("svg")}catch{return null}}firstUpdated(){this.loadIcon()}updated(e){(e.has("name")||e.has("locale"))&&this.loadIcon()}async loadIcon(){if(!this.name){this.svg=null;return}let e=await this.fetchIcon(this.name);e||(e=new DOMParser().parseFromString(B,"text/html").body.firstElementChild),this.svg=e}render(){const e={"w-icon":!0,"w-icon--s":this.size==="small","w-icon--m":this.size==="medium","w-icon--l":this.size==="large"},r=typeof this.size=="string"&&this.size.endsWith("px")?`--w-icon-size: ${this.size};`:"";return m`<div class="${k(e)}" style="${r}" part="w-${this.name.toLowerCase()}">${this.svg}</div>`}};h.styles=[x(b)];let i=h;c([l({type:String,reflect:!0})],i.prototype,"name");c([l({type:String,reflect:!0})],i.prototype,"size");c([l({type:String,reflect:!0})],i.prototype,"locale");c([z()],i.prototype,"svg");customElements.get("w-icon")||customElements.define("w-icon",i);const M={component:"w-icon",title:"Icons",render:({name:o,size:e,locale:r})=>m`
      <w-icon name=${o} size=${e} locale=${r} />
  `,argTypes:{name:{control:{type:"select"},options:["ActiveAds","Ads","AirCon","AirplaneBed","AllWheelDrive","AnimalPaw","ArchiveBox","Archway","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","AwardMedal","BackWheelDrive","Bag","Bank","BankIdNo","BatteryEmpty","BatteryFull","BatteryHalfFull","Beach","Bell","BellFilled","Bin","Block","Boat","Bolt","Bookmark","Briefcase","BriefcaseUser","Browser","BrowserVerified","Building","BuildingPlot","Bulb","Burger","Bus","CabinHut","Calculator","Calendar","CalendarBlank","CalendarPlus","Camera","Cancel","Car","CarLeft","CarPart","CarRent","CarRight","Chair","Charger","Charter","ChatSupport","Check","CheckShield","Checklist","ChevronDoubleLeft","ChevronDoubleRight","ChevronDown","ChevronLeft","ChevronRight","ChevronUp","CirclePlus","CirclePlusFilled","CircleUser","CircleUserFilled","Clock","ClockCountdown","Close","Code","Cog","ColorPalette","Confetti","Cookie","Copy","CreditCard","Cursor","Delivery","DeliveryKey","Diner","Discount","Dislike","Door","Dots","DotsVertical","DoubleBed","Download","DragDots","Draw","Drawer","Drill","Drink","Dumbbell","Edit","Energy","Engine","EngineBelt","Error","Exchange","Expand","EyeOff","EyeOn","Facebook","Farm","FileAdd","FileArrowDown","Filter","Fireplace","Fishing","FrontWheelDrive","GasDiesel","GasFuel","GasHybrid","GearAutomatic","GearManual","GeometricShapes","Globe","GraphLine","GraphPie","Grid","Grill","Guitar","Headset","Heart","HeartRate","Hiking","History","Hotel","House","HouseBed","HouseFilled","HouseModern","HousePerson","IceSkater","Image","Info","Instagram","JetSki","Key","Lamp","Layers","Leaf","Lift","Like","Link","LinkExternal","ListSort","LockShield","Logout","LotusFlower","Luggage","Mail","Mailbox","Map","Megaphone","Messages","MessagesFilled","Minus","Mixer","Money","Moon","Motorcycle","Mountain","NoSmoking","OfficeDesk","Organize","Paperclip","Parking","Phone","PhoneCheck","PhoneScratched","PhoneUsed","PictureStack","PinMarker","PinRound","PlaneLand","PlaneTakeOff","Play","Playhouse","Plus","ProductBump","ProductCarousel","ProductHighlightListing","ProductNabolagsprofil","ProductStarred","ProductTop","Propeller","Question","Refresh","Road","Rocket","RoomService","RotateLeft","RotateRight","RowingBoat","Ruler","Sauna","ScrollUp","Search","Seat","Send","Share","Shipping","Shirt","Shoes","ShoppingCart","Shower","Shrink","SidebarChevronLeft","SidebarChevronRight","SingleCylinder","Skyscraper","SmileyGood","SmileyHappy","SmileyNeutral","SmileySad","Sofa","Sorting","Sparkles","Speedometer","Stairs","StarCheck","StarEmpty","StarFull","StarHalf","Store","StoreFront","Stove","Stroller","Success","Suitcase","SuitcaseTrolley","Sun","Support","Swimming","TV","Tag","TaskList","TextBold","TextItalic","TextStrikethrough","TextUnderline","Theater","ThreeSixty","Ticket","TownHouse","Tractor","Tree","TrendDown","TrendFlat","TrendUp","Tshirt","Up","Upload","User","UserGroup","Users","Vacuum","Vase","Verification","Wallet","Warning","Warranty","WashingMachine","WaterPitcher","Weight","Wheelchair","Wifi","Wrench","X","YouTube"]},size:{control:{type:"select"},options:["small","medium","large","42px","64px","96px","128px"]},locale:{control:{type:"select"},options:["nb","sv","da","fi","en"]}}},a={args:{name:"Ads",size:"medium",locale:"nb"}},s=()=>m`
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
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,y,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => html\`
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
\``,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const E=["Default","Example"];export{a as Default,s as Example,E as __namedExportsOrder,M as default};
