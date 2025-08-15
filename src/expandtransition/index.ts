import expandTransitionStyle from 'inline:./style.css';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export class WExpandTransition extends LitElement {
  static styles = [unsafeCSS(expandTransitionStyle)];

  /** Whether the content should be expanded */
  @property({ type: Boolean, reflect: true })
  show = false;

  render(): TemplateResult {
    const classes = {
      'w-expandtransition': true,
      'w-expandtransition--expanded': this.show,
    };

    return html`
      <div class="${classMap(classes)}">
        <div>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w-expandtransition': WExpandTransition;
  }
}

if (!customElements.get('w-expandtransition')) {
  customElements.define('w-expandtransition', WExpandTransition);
}
