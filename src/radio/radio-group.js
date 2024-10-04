import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./radio-group-styles.js";
import { FormControlMixin, requiredValidator } from '@open-wc/form-control'

export class WarpRadioGroup extends FormControlMixin(LitElement) {
  static formControlValidators = [requiredValidator];

  constructor() {
    super();
    //this.internals = this.attachInternals();
    this.value = undefined;
    this.optionSelected = undefined;
    this.required = false;
    this.addEventListener("toggleSelected", this.handleToggleSelected);
  }

  static styles = [styles];

  static properties = {
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    optional: { type: Boolean, reflect: true },
    label: { type: String },
    helpText: { type: String },
    horizontal: { type: Boolean },
    value: { type: String },
    optionSelected: { type: Number },
  };

  connectedCallback() {
    super.connectedCallback();
    this.handleItems();
  }

  validityCallback(key) {
    if (key === 'valueMissing') {
      return 'Web components are not so bad';
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
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
        sdInput.invalid = false;
        item.invalid = false;
      }
    });

    if (this.invalid) {
      this.items.forEach((el) => {
        el.invalid = false;
      });
      this.invalid = false;
    }

    this.optionSelected = this.index;
    console.log("handleToggleSelected", this.index);
  }

  handleItems() {
    this.items = [...this.querySelectorAll(":scope > *:not([slot])")];

    const duplicateSelectedItems = this.items.filter((el) => el.checked).slice(0,-1);
    duplicateSelectedItems.forEach((el) => el.checked = false);

    if (this.disabled) {
      this.items.forEach((el) => {
        el.disabled = this.disabled;
      });
    }

    if (this.invalid || this.optionSelected) {
      this.items.forEach((el) => {
        el.invalid = this.optionSelected ? false : this.invalid;
      });
    }

    this.items.forEach((el) => {
      el.required = this.required;
    });
  }

  handleSlotChange() {
    this.handleItems();
  }


  get validationTarget() {
    const slot = this.renderRoot?.querySelector('slot:not([name])');
    const assignedElements = slot?.assignedElements({ flatten: true });
    const inputElement = assignedElements?.map(
      el => el.renderRoot ? el.renderRoot.querySelector('input') : el.querySelector('input')
    )[0];

    return inputElement;
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
      aria-describedby="help-text"
      class="w-radio-group ${wrapperClasses}"
    >
      <legend id="legend" part="legend">
        ${this.optional
          ? html`<slot name="legend">${this.label}</slot>
              <slot name="optionalLabel"><span class="optional">(optional)</span></slot>`
          : html`<slot name="legend">${this.label}</slot>`}
      </legend>
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
