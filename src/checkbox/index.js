import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.js';
import sharedStyles from '../sharedStyles.js';

export class WarpCheckbox extends LitElement {
  static properties = {
    label: { type: String },
    value: { type: String },
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean },
    indeterminate: { type: Boolean, reflect: true },
    invalid: { type: Boolean },
  };

  static styles = [styles, sharedStyles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  handleChange(e) {
    this.indeterminate = false;
    this.checked = e.target.checked;

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
        @change=${this.handleChange}
      />
      <label for="w-c-checkbox__input" part="label"><slot>${ this.label }</slot></label>
    </div>`;
  }
}

if (!customElements.get('w-c-checkbox')) {
  customElements.define('w-c-checkbox', WarpCheckbox);
}
