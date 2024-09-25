import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio-styles.js";
import sharedStyles from "../sharedStyles.js";

export class WarpRadio extends LitElement {
  static get formAssociated() {
    return true;
  }

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  static styles = [styles, sharedStyles];

  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
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

  firstUpdated(...args) {
    super.firstUpdated(...args);
    /** This ensures our element always participates in the form */
    this.internals.setFormValue(this.value);
    
    /** Make sure validations are set up */
    //this._manageRequired();
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
        aria-required="${Boolean(this.required)}"
        id="w-c-radio__input"
        class="w-sr-only"
        .name="${ifDefined(this.name)}"
      />
      <label for="w-c-radio__input"><slot></slot></label>
    </div>`;
  }
}