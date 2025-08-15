import alertStyle from 'inline:./style.css';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

type AlertType = 'info' | 'warning' | 'negative' | 'positive';

interface TypeMapEntry {
  class: string;
  iconName: string;
  iconClass: string;
}

const typeMap: Record<AlertType, TypeMapEntry> = {
  info: { class: 'w-alert--info', iconName: 'Info', iconClass: 's-icon-info' },
  warning: { class: 'w-alert--warning', iconName: 'Warning', iconClass: 's-icon-warning' },
  negative: { class: 'w-alert--negative', iconName: 'Error', iconClass: 's-icon-negative' },
  positive: { class: 'w-alert--positive', iconName: 'Success', iconClass: 's-icon-positive' },
};

export class WAlert extends LitElement {
  static styles = [unsafeCSS(alertStyle)];

  /** Whether the alert should be visible */
  @property({ type: Boolean, reflect: true })
  show = false;

  /** Type of alert */
  @property({ type: String, reflect: true })
  type: AlertType = 'info';

  /** ARIA live region "role" attribute value */
  @property({ type: String, attribute: 'alert-role' })
  alertRole?: string;

  /** Additional classes to include */
  @property({ type: String, reflect: true })
  class?: string;

  /** Additional CSS styles for the container */
  @property({ type: Object })
  customStyle?: Record<string, string>;

  render(): TemplateResult {
    const typeInfo = typeMap[this.type];
    const classes = {
      'w-alert': true,
      [typeInfo.class]: true,
      ...(this.class ? { [this.class]: true } : {}),
    };

    const iconClasses = {
      'w-alert--icon': true,
      [typeInfo.iconClass]: true,
    };

    return html`
      <w-expandtransition .show=${this.show}>
        <div 
          role=${this.alertRole || 'alert'}
          class="${classMap(classes)}"
          style=${this.customStyle ? styleMap(this.customStyle) : ''}
        >
          <div class="${classMap(iconClasses)}">
            <w-icon name="${typeInfo.iconName}" size="medium"></w-icon>
          </div>
          <div class="w-alert--content">
            <slot></slot>
          </div>
        </div>
      </w-expandtransition>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w-alert': WAlert;
  }
}

if (!customElements.get('w-alert')) {
  customElements.define('w-alert', WAlert);
}
