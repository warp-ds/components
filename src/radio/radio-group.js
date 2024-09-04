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
    checked: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    id: { type: String },
  };

  render() {
    const groupClasses = {
      displayGrid: true,
      displayFlex: this.horizontal && this.items.length <= this.max,
    };

    return html`
      <fieldset class="${classMap(groupClasses)}" part="radio-group">
        ${this.required
          ? html`<legend><slot name="legend"></slot></legend>`
          : html`<legend>
              <slot name="legend"></slot>
              <slot name="optionalLabel">(optional)</slot>
            </legend>`}
        <slot @slotchange=${this.handleSlotChange}></slot>
      </fieldset>

      ${!this.validity ||
      this.validity === undefined ||
      this.validity === "valid"
        ? html` <p class="radioGroupElement-helpText" part="helpText">
            <slot name="helpText"></slot>
          </p>`
        : html` <p
            class="radioGroupElement-helpText"
            role="alert"
            aria-live="assertive"
            part="helpText"
          >
            ${this.setCustomValidity}
          </p>`}
    `;
  }
}

if (!customElements.get("w-c-radio-group")) {
  customElements.define("w-c-radio-group", WarpRadioGroup);
}
