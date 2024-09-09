import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio-styles.js";
import sharedStyles from '../sharedStyles.js';

export class WarpRadio extends LitElement {
  constructor() {
    super();
  }

  static styles = [styles, sharedStyles];

  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    name: { type: String },
  };

  handler(e) {
    console.log("handler", e.target);
    /*const { name, value } = e.target;
    const event = new CustomEvent(e.type, {
      detail: {
        name,
        value,
        target: e.target,
      },
    });
    this.dispatchEvent(event);*/
  }

  render() {
    const wrapperClasses = classMap({
      "w-radio--invalid": this.invalid,
    });

    return html`<div class="w-radio ${wrapperClasses}" part="w-radio-part">
      <input
        type="radio"
        ?disabled="${this.disabled}"
        ?checked="${this.checked}"
        id="w-c-radio__input"
        class="w-sr-only"
        name="${ifDefined(this.name)}"
      />
      <label for="w-c-radio__input"><slot></slot></label>
    </div>`;
  }
}


