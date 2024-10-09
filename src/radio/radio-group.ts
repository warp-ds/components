import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { FormControlMixin, requiredValidator } from '@open-wc/form-control';
import { classMap } from "lit/directives/class-map.js";
import styles from "./radio-group-styles.ts";

@customElement("w-c-radio-group")
export class WarpRadioGroup extends FormControlMixin(LitElement) {
  static styles = [styles];
  static formControlValidators = [requiredValidator];

  @property({ reflect: true })
  value = "";

  @property({ type: Boolean, reflect: true })
  optional = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  invalid = false;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property()
  label = "";

  @property()
  helpText = "";
  
  @property()
  horizontal = false;

  @property()
  optionSelected = 0;


  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("toggleSelected", this.handleToggleSelected);
    this.handleItems();
  }

  updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('value')) {
      this.setValue(this.value);
    }
  }

  validityCallback(key: keyof ValidityState): boolean {
    console.log(key);
    if (key === 'valueMissing') {
      return 'This is a custom error message for valueMissing errors';
    }
  }

  handleToggleSelected(event) {
    this.index = this.items.indexOf(event.target);

    this.items.forEach((item) => {
      if (item === event.target) {
        if (event.target.value) {
          this.value = event.target.value;
          this.setValue(event.target.value);
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
    console.log(`this.value=${this.value}`);

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

    if (this.value) {
      this.items.forEach((el) => {
        if (el.value === this.value) {
          el.checked = true;
        }
      });
    }
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
    console.log(this.validationTarget);

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
