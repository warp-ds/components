import {LitElement, html, nothing} from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.js';
import sharedStyles from '../sharedStyles.js';

export class WarpCheckbox extends LitElement {
  static properties = {
    name: { type: String },
    label: { type: String },
    value: { type: String },
    help: { type: String },
    invalidMessage: { type: String },
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean },
    indeterminate: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = [styles, sharedStyles];

  static formAssociated = true;

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  _setFormValue() {
    this._internals.setFormValue(this.checked ? this.value : null);
    this._manageRequired();
  };

  _manageRequired() {
    if (!this.checked && this.required) {
      this._internals.setValidity(
        { valueMissing: true },
        'This checkbox is required',
      );
    } else {
      this._internals.setValidity({});
      this.invalid = false;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._internals.ariaRequired = this.required || null;
    this.addEventListener('invalid', (e) => {
      this.invalid = true;
    });
  }

  firstUpdated(_) {
    this._setFormValue();
  }

  _handleChange(e) {
    this.indeterminate = false;
    this.checked = e.target.checked;

    this._setFormValue();

    e.stopPropagation();

    this.dispatchEvent(new CustomEvent(
      'change',
      {
        detail: {
          value: this.value,
          checked: e.target.checked
        },
        bubbles: true,
        composed: true,
      }
    ));
  }

  render() {
    const wrapperClasses = classMap({
      'w-checkbox--invalid': this.invalid,
    });

    return html`<div class="w-checkbox ${wrapperClasses}">
      <input
        id="w-c-checkbox__input"
        part="input"
        type="checkbox"
        ?checked=${this.checked}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        .indeterminate=${this.indeterminate}
        class="w-sr-only"
        @change=${this._handleChange}
      />
      <label for="w-c-checkbox__input" part="label"><slot>${ this.label }</slot></label>
      <div class="w-checkbox__help" part="help">${(!this.invalid && this.help) || nothing}</div>
      <div class="w-checkbox__invalid-message" part="invalid-message">${(this.invalid && this.invalidMessage) || nothing}</div>
    </div>`;
  }
}

if (!customElements.get('w-c-checkbox')) {
  customElements.define('w-c-checkbox', WarpCheckbox);
}
