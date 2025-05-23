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
      options: ["YouTube","Woods","Wifi","Wheelchair","Weight","WaterPitcher","Warranty","Warning","Wallet","Verification","Vacuum","Users","UserWoman","UserGroup","User","Upload","Up","Twitter","TrendUp","TrendFlat","TrendDown","TownHouse","ThreeSixty","Theater","TextUnderline","TextStrikethrough","TextItalic","TextBold","TaskList","Tag","TV","Swimming","Support","Suitcase","Success","Stove","Store","StarHalf","StarFull","StarEmpty","StarCheck","Stairs","Speedometer","Sparkles","Spa","Sorting","SmileySad","SmileyNeutral","SmileyHappy","SmileyGood","Skyscraper","SingleCylinder","Shower","ShoppingCart","Shoes","Shipping","Share","Service","Send","Seat","SearchFavorites","Search","ScrollUp","Sauna","Sailing","Ruler","RowingBoat","RoomService","Road","Refresh","Question","Propeller","ProductTop","ProductStarred","ProductNoAds","ProductNabolagsprofil","ProductHighlightListing","ProductCarousel","ProductBump","ProductBlink","Plus","Plots","Playhouse","Play","PlaneTicket","PlaneTakeOff","PlaneLand","PinRound","PinMarker","PictureStack","PhoneUsed","PhoneScratched","Phone","Parking","Organize","OfficeDesk","NorwegianMotor","NoSmoking","NewAd","Mountain","Money","Mixer","Minus","MessagesFilled","Messages","Message","Measure","Map","Manual","Mailbox","Mail","Logout","LockShield","ListSort","LinkExternal","Link","Like","Lift","Leaf","Layers","Laundry","Lamp","Krone","Keys","JetSki","Instagram","Info","Image","HousePerson","HouseModern","HouseFilled","HouseCabin","HouseBed","House","History","Hiking","HeartRate","Heart","Headset","Grill","Grid","GraphPie","GraphLine","GasHybrid","GasFuel","GasDiesel","FrontWheelDrive","Fitness","Fishing","Fireplace","Filter","FileAdd","Feedback","Farm","Facebook","EyeOn","EyeOff","Expand","Exchange","Error","EngineBelt","Engine","Energy","Edit","Drink","Drawer","DragDots","Download","DoubleBed","DotsVertical","Dots","Door","Dislike","Discount","Diner","Delivery","Cursor","CreditCard","CottagePlot","Copy","ColorPalette","Cog","Close","Clock","CircleUserFilled","CircleUser","CirclePlusFilled","CirclePlus","ChevronUp","ChevronRight","ChevronLeft","ChevronDown","ChevronDoubleRight","ChevronDoubleLeft","Checklist","CheckShield","Check","ChatSupport","ChatRequest","Charter","Charger","CarService","CarRight","CarLeft","CarKey","CarEngine","Car","Cancel","Camera","Calendar","Calculator","CabinHut","Bus","Burger","Bulb","BuildingPlot","Building","BrowserVerified","Browser","Bookmark","Bolt","BoatLength","Boat","Block","Bin","BellFilled","Bell","Beach","BatteryHalfFull","BatteryFull","BatteryEmpty","BankIdNo","Bank","Bag","BackWheelDrive","AwardMedal","Automatic","Attachment","ArrowUp","ArrowRight","ArrowLeft","ArrowDown","Archway","AnimalPaw","AllWheelDrive","AirCon","AgricultureMachine","Ads","ActiveAds"],
    },
    size: {
      control: { type: 'select' },
      options: [
        'small',
        'medium',
        'large',
        'xtralarge',
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