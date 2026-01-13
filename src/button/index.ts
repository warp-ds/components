import { LitElement, unsafeCSS, html, TemplateResult } from 'lit';
import { property, query } from 'lit/decorators.js';
import style from 'inline:./style.css';
import { i18n } from '@lingui/core';
import { activateI18n } from '../../i18n.ts';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
// import { FormAssociatedElement } from '../utils/base-classes/form-associated.ts';
import { FormAssociated } from '../utils/mixins/form-associated.ts';
// import { formAssociated } from '../utils/decorators/form-associated.ts';

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

const ariaValueTextLoading = i18n._({
  id: 'button.aria.loading',
  message: 'Loading...',
  comment: 'Screenreader message for buttons that are loading',
});

export class WButton extends FormAssociated(LitElement) {
  static styles = [unsafeCSS(style)];

  @property({ reflect: true })
  name = '';

  @property({ reflect: true })
  value = '';

  @property({ reflect: true })
  variant:
    | 'primary'
    | 'secondary'
    | 'negative'
    | 'utility'
    | 'overlay'
    | 'overlay-inverted'
    | 'quiet'
    | 'negative-quiet'
    | 'utility-quiet'
    | 'overlay-quiet'
    | 'overlay-inverted-quiet'
    | 'link' = 'secondary';

  @property({ reflect: true })
  size = 'default';

  @property({ reflect: true })
  type: 'submit' | 'reset' | 'button' = 'button';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: Boolean, reflect: true, attribute: 'full-width' })
  fullWidth = false;

  @property({ type: Boolean, reflect: true, attribute: 'has-icon-only' })
  hasIconOnly = false;

  @query('button')
  private button;

  connectedCallback(): void {
    super.connectedCallback();
    this.internals.setFormValue('');
  }

  click() {
    this.button.click();
  }

  _click() {
    if (this.type === 'submit') {
      this.internals.setFormValue(this.value);
      this.form.requestSubmit();
    } else if (this.type === 'reset') this.form.reset();
  }

  formResetCallback() {
    this.value = '';
  }

  render(): TemplateResult {
    return html`
        <button
            @click="${this._click}"
            type=${this.type}
            ?disabled=${this.disabled}
        >
            <slot></slot>
        </button>
        ${
          this.loading
            ? html`<span class="sr-only" role="progressbar" aria-valuenow="0" aria-valuetext=${ariaValueTextLoading} />`
            : null
        }
            `;
  }
}

if (!customElements.get('w-button')) {
  customElements.define('w-button', WButton);
}
