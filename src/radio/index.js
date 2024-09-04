import { WarpRadio } from "./radio.js";
import { WarpRadioGroup } from "./radio-group.js";

if (!customElements.get("w-c-radio")) {
  customElements.define("w-c-radio", WarpRadio);
}

if (!customElements.get("w-c-radio-group")) {
  customElements.define("w-c-radio-group", WarpRadioGroup);
}
