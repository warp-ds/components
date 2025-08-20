import { LitElement, unsafeCSS, html, TemplateResult, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import style from './style.css?inline';

export class WExpandable extends LitElement {
  static styles = [unsafeCSS(style)];

  @property({ type: String, reflect: true })
  title: string = '';

  @property({ type: Boolean, reflect: true })
  expanded: boolean = true

  @property({ type: Boolean, reflect: true })
  chevron: boolean = true

  @state()
  private _hasTitleSlot: boolean = false

  private _onTitleSlotChange(e: any) {
    this._hasTitleSlot = !!e.target.assignedNodes({ flatten: true }).length;
  }

  get hasTitle() {
    return this.title || this._hasTitleSlot
  }

  click() {
    this.expanded = !this.expanded
  }

  get titleArea() {
    return html`
<!-- TODO: hide the hell out of this if no title -->
      <button @click=${this.click} part="button ${this.expanded ? 'expanded' : 'collapsed'}">
        <!-- TODO: classes for the span -->
        <span>${this.title}</span>
        <slot name="title" @slotchange=${this._onTitleSlotChange}></slot>
        <!-- TODO: chevron-icon -->
      </button>
    `
  }

  handleTransitionEnd() {
    const evt = new CustomEvent(this.expanded ? 'collapsed' : 'expanded', {
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(evt);
  }

  // TODO: a11y - do we need to hide content here?
  // - using hidden="until-found" makes content disappear and then the collapse animation is janky
  get contentArea() {
    return html`
      <div
        @transitionend=${this.handleTransitionEnd}
        class="w-expandtransition ${this.expanded ? 'w-expandtransition--expanded' : ''}"
        part="content ${this.expanded ? 'expanded' : 'collapsed'}"
      >
        <div>
          <slot></slot>
        </div>
      </div>
    `
  }

  render(): TemplateResult {
    return html`
      <div part="wrapper">
        ${this.titleArea}
        <div>
          ${this.contentArea}
        </div>
      </div>
    `;
  }
}

if (!customElements.get('w-expandable')) {
  customElements.define('w-expandable', WExpandable);
}
