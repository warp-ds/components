import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.js';
import sharedStyles from '../sharedStyles.js';

export class WarpCheckbox extends LitElement {
  static properties = {
    label: { type: String },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    horizontal: { type: Boolean },
  };

  static styles = [styles, sharedStyles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  get _hasLabel() {
    return !!this.label || this.shadowRoot.querySelector('slot[name=label]')?.assignedNodes({flatten: true}).length > 0;
  }

  render() {
    const wrapperClasses = classMap({
      'w-checkbox-group--invalid': this.invalid,
      'w-checkbox-group--labelled': this._hasLabel,
    });
    const listClasses = classMap({
      'w-checkbox-group__list--horizontal': this.horizontal,
    });

    return html`<fieldset part="fieldset" aria-labelledby="label" class="w-checkbox-group ${wrapperClasses}">
      <label id="label" part="label"><slot name="label">${ this.label }</slot></label>
      <div part="list" class="w-checkbox-group__list ${listClasses}"><slot></slot></div>
    </fieldset>`;
  }
}

if (!customElements.get('w-c-checkbox-group')) {
  customElements.define('w-c-checkbox-group', WarpCheckbox);
}
