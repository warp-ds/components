import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.js';
import sharedStyles from '../sharedStyles.js';

export class WarpCheckbox extends LitElement {
  static properties = {
    label: { type: String },
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    indeterminate: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
  };

  static styles = [styles, sharedStyles];

  get _inputEl() {
    return this.renderRoot?.querySelector('#w-c-checkbox__input') ?? null;
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProperties) {
    if (changedProperties.has('indeterminate')) {
      this._inputEl.indeterminate = this.indeterminate;
    }
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
        ?disabled=${this.disabled}
        class="w-sr-only"
      />
      <label for="w-c-checkbox__input" part="label"><slot>${ this.label }</slot></label>
    </div>`;
  }
}

if (!customElements.get('w-c-checkbox')) {
  customElements.define('w-c-checkbox', WarpCheckbox);
}
