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
      options: ["ActiveAds","Ads","AgricultureMachine","AirCon","AllWheelDrive","AnimalPaw","Archway","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","Attachment","Automatic","AwardMedal","BackWheelDrive","Bag","Bank","BankIdNo","BatteryEmpty","BatteryFull","BatteryHalfFull","Beach","Bell","BellFilled","Bin","Block","Boat","BoatLength","Bolt","Bookmark","Browser","BrowserVerified","Building","BuildingPlot","Bulb","Burger","Bus","CabinHut","Calculator","Calendar","Camera","Cancel","Car","CarEngine","CarKey","CarLeft","CarRight","CarService","Charger","Charter","ChatRequest","ChatSupport","Check","CheckShield","Checklist","ChevronDoubleLeft","ChevronDoubleRight","ChevronDown","ChevronLeft","ChevronRight","ChevronUp","CirclePlus","CirclePlusFilled","CircleUser","CircleUserFilled","Clock","Close","Cog","ColorPalette","Copy","CottagePlot","CreditCard","Cursor","Delivery","Diner","Discount","Dislike","Door","Dots","DotsVertical","DoubleBed","Download","DragDots","Drawer","Drink","Edit","Energy","Engine","EngineBelt","Error","Exchange","Expand","EyeOff","EyeOn","Facebook","Farm","Feedback","FileAdd","Filter","Fireplace","Fishing","Fitness","FrontWheelDrive","GasDiesel","GasFuel","GasHybrid","GraphLine","GraphPie","Grid","Grill","Headset","Heart","HeartRate","Hiking","History","House","HouseBed","HouseCabin","HouseFilled","HouseModern","HousePerson","Image","Info","Instagram","JetSki","Keys","Krone","Lamp","Laundry","Layers","Leaf","Lift","Like","Link","LinkExternal","ListSort","LockShield","Logout","Mail","Mailbox","Manual","Map","Measure","Message","Messages","MessagesFilled","Minus","Mixer","Money","Mountain","NewAd","NoSmoking","NorwegianMotor","OfficeDesk","Organize","Parking","Phone","PhoneScratched","PhoneUsed","PictureStack","PinMarker","PinRound","PlaneLand","PlaneTakeOff","PlaneTicket","Play","Playhouse","Plots","Plus","ProductBlink","ProductBump","ProductCarousel","ProductHighlightListing","ProductNabolagsprofil","ProductNoAds","ProductStarred","ProductTop","Propeller","Question","Refresh","Road","RoomService","RowingBoat","Ruler","Sailing","Sauna","ScrollUp","Search","SearchFavorites","Seat","Send","Service","Share","Shipping","Shoes","ShoppingCart","Shower","SingleCylinder","Skyscraper","SmileyGood","SmileyHappy","SmileyNeutral","SmileySad","Sorting","Spa","Sparkles","Speedometer","Stairs","StarCheck","StarEmpty","StarFull","StarHalf","Store","Stove","Success","Suitcase","Support","Swimming","TV","Tag","TaskList","TextBold","TextItalic","TextStrikethrough","TextUnderline","Theater","ThreeSixty","TownHouse","TrendDown","TrendFlat","TrendUp","Twitter","Up","Upload","User","UserGroup","UserWoman","Users","Vacuum","Verification","Wallet","Warning","Warranty","WaterPitcher","Weight","Wheelchair","Wifi","Woods","YouTube"],
    },
    size: {
      control: { type: 'select' },
      options: [
        'small',
        'medium',
        'large',
        '42px',
        '64px',
        '96px',
        '128px',
      ],
    },
    locale: {
      control: { type: 'select' },
      options: [
        'nb',
        'sv',
        'da',
        'fi',
        'en',
      ],
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
    <div>
      <w-icon name="Speedometer" size="small" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="medium" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="large" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="xtralarge" locale="nb"></w-icon>
    </div>
`;