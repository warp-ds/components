import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from "./radio-styles.js";
import sharedStyles from "../sharedStyles.js";

export class WarpRadio extends LitElement {
  static formAssociated = true;

  #internals;
  
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.#internals = this.attachInternals();
  }

  static styles = [styles, sharedStyles];

  get form() {
    return this.#internals.form;
  }
  
  get name() {
    return this.#internals.form?.name;
  }

  set name(v) {
    if (this.#internals.form) {
      this.#internals.form.name = v;
    }
  }

  get checked() {
    return this.#internals.form?.checked;
  }

  set checked(v) {
    if (!this.#internals.form) return;
    this.#internals.form.checked = v;
  }
  
  set value(v) {
    this.#internals.setFormValue(v);
  }
  
  get value() {
    return this.#internals.form?.value;
  }

  get type() { return this.localName; }

  get validity() {
    return this.#internals.validity;
  }
  
  get validationMessage() {
    return this.#internals.validationMessage;
  }
  
  get willValidate() {
    return this.#internals.willValidate;
  }
  
  checkValidity() {
    return this.#internals.checkValidity();
  }
  
  reportValidity() {
    return this.#internals.reportValidity();
  }

  // handleChange(event) {
  //   this.checked = event.target.checked;
  //   const customEvent = new CustomEvent(event.type, event);
  //   console.log("handleChange", customEvent);

  //   this.dispatchEvent(customEvent);
  // }

  // handleInput(event) {
  //   this.checked = event.target.checked;
  //   this.dispatchEvent(
  //     new CustomEvent("toggleSelected", {
  //       bubbles: true,
  //       composed: true,
  //       target: this,
  //     })
  //   );
  // }

  // firstUpdated(...args) {
  //   super.firstUpdated(...args);
  //   /** This ensures our element always participates in the form */
    
  //   /** Make sure validations are set up */
  //   //this._manageRequired();
  // }

  render() {
    const wrapperClasses = classMap({
      "w-radio--invalid": this.invalid,
    });

    return html`<div class="w-radio ${wrapperClasses}" part="w-radio-part">
      <input
        type="radio"
        ?disabled="${this.#internals.form?.disabled}"
        ?checked="${this.#internals.form?.checked}"
        aria-required="${Boolean(this.required)}"
        id="w-c-radio__input"
        class="w-sr-only"
        .name="${this.#internals.form?.name}"
      />
      <label for="w-c-radio__input"><slot></slot></label>
    </div>`;
  }
}
