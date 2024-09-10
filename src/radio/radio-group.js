import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio-group-styles.js";

export class WarpRadioGroup extends LitElement {
  constructor() {
    super();
    this.value = undefined;
    this.optionSelected = undefined;
  }

  static styles = [styles];

  static properties = {
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    label: { type: String },
    helpText: { type: String },
    horizontal: { type: Boolean },
    value: { type: Array },
    optionSelected: { type: Number },
  };

  connectedCallback() {
    super.connectedCallback();
    this.handleItems();
    this.addEventListener("toggleSelected", this.handleToggleSelected);
  }

  handleToggleSelected(event) {
    this.index = this.items.indexOf(event.target);

    this.items.forEach((item) => {
      if (item === event.target) {
        if (event.target.value) {
          this.value = event.target.value;
        }
      } else {
        const sdInput = item.shadowRoot.querySelector("input");

        sdInput.checked = false;
        item.checked = false;
      }
    });

    this.optionSelected = this.index;
    console.log("handleToggleSelected", this.index);
  }

  handleItems() {
    this.items = [...this.querySelectorAll(":scope > *:not([slot])")];
  }

  handleSlotChange() {
    this.handleItems();
  }

  render() {
    const wrapperClasses = classMap({
      "w-radio-group--invalid": this.invalid,
    });
    const listClasses = classMap({
      "w-radio-group__list--horizontal": this.horizontal,
    });

    const helpTextClasses = classMap({
      "w-radio-group__help-text--invalid": this.invalid,
    });

    return html`<fieldset
      part="fieldset"
      role="radiogroup"
      aria-labelledby="label"
      aria-describedby="help-text"
      class="w-radio-group ${wrapperClasses}"
    >
      <label id="label" part="label">
        <slot name="label">${this.label}</slot>
      </label>
      <div part="list" class="w-radio-group__list ${listClasses}">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
      <div id="help-text" class="w-radio-group__help-text ${helpTextClasses}">
        <slot name="help-text">${this.helpText}</slot>
      </div>
    </fieldset>`;
  }
}

if (!customElements.get("w-c-radio-group")) {
  customElements.define("w-c-radio-group", WarpRadioGroup);
}
