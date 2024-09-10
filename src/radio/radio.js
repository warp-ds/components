import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio-styles.js";
import sharedStyles from "../sharedStyles.js";

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

  handleChange(event) {
    this.checked = event.target.checked;
    const customEvent = new CustomEvent(event.type, event);
    console.log("handleChange", customEvent);

    this.dispatchEvent(customEvent);
  }

  handleInput(event) {
    this.checked = event.target.checked;
    console.log("handleInput", event);
    this.dispatchEvent(
      new CustomEvent("toggleSelected", {
        bubbles: true,
        composed: true,
        target: this,
      })
    );
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
        @input="${this.handleInput}"
        @change="${this.handleChange}"
        id="w-c-radio__input"
        class="w-sr-only"
        .name="${ifDefined(this.name)}"
      />
      <label for="w-c-radio__input"><slot></slot></label>
    </div>`;
  }
}
