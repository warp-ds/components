import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio-styles.ts";
import sharedStyles from "../sharedStyles.ts";

@customElement("w-c-radio")
export class WarpRadio extends LitElement {
  static styles = [styles, sharedStyles];

  constructor() {
    super();
  }

  @property()
  value = "";

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property()
  name = "";

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
        ?required="${this.required}"
        aria-required="${Boolean(this.required)}"
        id="w-c-radio__input"
        class="w-sr-only"
        .name="${ifDefined(this.name)}"
      />
      <label for="w-c-radio__input"><slot></slot></label>
    </div>`;
  }
}
