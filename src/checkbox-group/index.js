import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.js';
import sharedStyles from '../sharedStyles.js';

export class WarpCheckbox extends LitElement {
  static properties = {
    label: { type: String },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
  };

  static styles = [styles, sharedStyles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const wrapperClasses = classMap({
      'w-checkbox-group--invalid': this.invalid,
    });

    return html`<fieldset part="fieldset" aria-labelledby="label" class="w-checkbox-group ${wrapperClasses}">
      <label id="label" part="label"><slot name="label">${ this.label }</slot></label>
      <div part="list" class="w-checkbox-group__list"><slot></slot></div>
    </fieldset>`;
  }
}

if (!customElements.get('w-c-checkbox-group')) {
  customElements.define('w-c-checkbox-group', WarpCheckbox);
}
