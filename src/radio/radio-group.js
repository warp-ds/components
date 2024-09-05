import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio-group-styles.js";

export class WarpRadioGroup extends LitElement {
  constructor() {
    super();
  }

  static styles = [styles];

  static properties = {
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    label: { type: String },
    horizontal: { type: Boolean },
  };

  render() {
    const wrapperClasses = classMap({
      "w-radio-group--invalid": this.invalid,
    });
    const listClasses = classMap({
      "w-radio-group__list--horizontal": this.horizontal,
    });

    return html`<fieldset
      part="fieldset"
      aria-labelledby="label"
      class="w-radio-group ${wrapperClasses}"
    >
      <label id="label" part="label"
        ><slot name="label">${this.label}</slot></label
      >
      <div part="list" class="w-radio-group__list ${listClasses}">
        <slot></slot>
      </div>
    </fieldset>`;
  }
}

if (!customElements.get("w-c-radio-group")) {
  customElements.define("w-c-radio-group", WarpRadioGroup);
}
