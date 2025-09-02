import { html } from 'lit';
import './index.ts';

export default {
  component: 'w-icon',
  title: 'Icons',
  render: ({ name, size, locale }) => html`
      <w-icon name=${name} size=${size} locale=${locale} />
  `,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ["ActiveAds","Ads","AirCon","AirplaneBed","AllWheelDrive","AnimalPaw","Archway","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","AwardMedal","BackWheelDrive","Bag","Bank","BankIdNo","BatteryEmpty","BatteryFull","BatteryHalfFull","Beach","Bell","BellFilled","Bin","Block","Boat","Bolt","Bookmark","Briefcase","BriefcaseUser","Browser","BrowserVerified","Building","BuildingPlot","Bulb","Burger","Bus","CabinHut","Calculator","Calendar","CalendarPlus","Camera","Cancel","Car","CarLeft","CarPart","CarRent","CarRight","Chair","Charger","Charter","ChatSupport","Check","Checklist","CheckShield","ChevronDoubleLeft","ChevronDoubleRight","ChevronDown","ChevronLeft","ChevronRight","ChevronUp","CirclePlus","CirclePlusFilled","CircleUser","CircleUserFilled","Clock","Close","Cog","ColorPalette","Confetti","Copy","CreditCard","Cursor","Delivery","Diner","Discount","Dislike","Door","Dots","DotsVertical","DoubleBed","Download","DragDots","Draw","Drawer","Drill","Drink","Dumbbell","Edit","Energy","Engine","EngineBelt","Error","Exchange","Expand","EyeOff","EyeOn","Facebook","Farm","FileAdd","Filter","Fireplace","Fishing","FrontWheelDrive","GasDiesel","GasFuel","GasHybrid","GearAutomatic","GearManual","GraphLine","GraphPie","Grid","Grill","Guitar","Headset","Heart","HeartRate","Hiking","History","Hotel","House","HouseBed","HouseFilled","HouseModern","HousePerson","IceSkater","Image","Info","Instagram","JetSki","Key","Lamp","Layers","Leaf","Lift","Like","Link","LinkExternal","ListSort","LockShield","Logout","LotusFlower","Luggage","Mail","Mailbox","Map","Megaphone","Messages","MessagesFilled","Minus","Mixer","Money","Motorcycle","Mountain","NoSmoking","OfficeDesk","Organize","Paperclip","Parking","Phone","PhoneCheck","PhoneScratched","PhoneUsed","PictureStack","PinMarker","PinRound","PlaneLand","PlaneTakeOff","Play","Playhouse","Plus","ProductBump","ProductCarousel","ProductHighlightListing","ProductNabolagsprofil","ProductStarred","ProductTop","Propeller","Question","Refresh","Road","Rocket","RoomService","RotateLeft","RotateRight","RowingBoat","Ruler","Sauna","ScrollUp","Search","Seat","Send","Share","Shipping","Shirt","Shoes","ShoppingCart","Shower","Shrink","SingleCylinder","Skyscraper","SmileyGood","SmileyHappy","SmileyNeutral","SmileySad","Sofa","Sorting","Sparkles","Speedometer","Stairs","StarCheck","StarEmpty","StarFull","StarHalf","Store","StoreFront","Stove","Stroller","Success","Suitcase","SuitcaseTrolley","Support","Swimming","Tag","TaskList","TextBold","TextItalic","TextStrikethrough","TextUnderline","Theater","ThreeSixty","Ticket","TownHouse","Tractor","Tree","TrendDown","TrendFlat","TrendUp","Tshirt","TV","Up","Upload","User","UserGroup","Users","Vacuum","Vase","Verification","Wallet","Warning","Warranty","WashingMachine","WaterPitcher","Weight","Wheelchair","Wifi","Wrench","X","YouTube"],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', '42px', '64px', '96px', '128px'],
    },
    locale: {
      control: { type: 'select' },
      options: ['nb', 'sv', 'da', 'fi', 'en'],
    },
  },
};
export const Default = {
  args: {
    name: 'Ads',
    size: 'medium',
    locale: 'nb',
  },
};

export const Example = () => html`
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
`;
