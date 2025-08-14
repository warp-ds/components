import pageIndicatorStyle from 'inline:./style.css';
import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { range } from 'lit/directives/range.js';

export class WPageIndicator extends LitElement {
  static styles = [unsafeCSS(pageIndicatorStyle)];

  /** Currently selected page (1-based index) */
  @property({ type: Number, attribute: 'selected-page' })
  selectedPage = 1;

  /** Total number of pages */
  @property({ type: Number, attribute: 'page-count' })
  pageCount = 1;

  render(): TemplateResult {
    return html`
      <div class="w-pageindicator">
        <div class="w-pageindicator--container">
          ${map(range(this.pageCount), (i) => {
            const isSelected = i === this.selectedPage - 1;
            const classes = {
              'w-pageindicator--dot': true,
              'w-pageindicator--selecteddot': isSelected,
            };
            return html`<div class="${classMap(classes)}"></div>`;
          })}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'w-pageindicator': WPageIndicator;
  }
}

if (!customElements.get('w-pageindicator')) {
  customElements.define('w-pageindicator', WPageIndicator);
}
