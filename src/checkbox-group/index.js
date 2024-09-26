import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './styles.js';
import sharedStyles from '../sharedStyles.js';

export class WarpCheckboxGroup extends LitElement {
  static properties = {
    name: { type: String },
    label: { type: String },
    help: { type: String },
    parentLabel: { type: String },
    disabled: { type: Boolean, reflect: true },
    invalid: { type: Boolean, reflect: true },
    horizontal: { type: Boolean },
    value: { type: Array },
    _hasLabel: { state: true, type: Boolean },
    parented: { type: Boolean, reflect: true },
    _hasHelp: { state: true, type: Boolean },
    _indeterminate: { state: false, type: Boolean },
  };

  static styles = [styles, sharedStyles];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this._hasLabel = !!this.label;
    this._hasHelp = !!this.help;
  }

  get _wrapperClasses() {
    return classMap({
      'w-checkbox-group--help': this._hasHelp,
      'w-checkbox-group--invalid': this.invalid,
      'w-checkbox-group--labelled': this._hasLabel,
      'w-checkbox-group--parented': this.parented,
    });
  }
  get _listClasses() {
    return classMap({
      'w-checkbox-group__list--horizontal': this.horizontal,
    });
  }

  handleLabelSlotChange(e) {
    this._hasLabel = e.target.assignedNodes().length > 0 || !!this.label;
  }
  handleHelpSlotChange(e) {
    this._hasHelp = e.target.assignedNodes().length > 0 || !!this.help;
  }
  handleParentSlotChange(e) {
    this.parented = e.target.assignedNodes().length > 0 || !!this.parentLabel;
  }
  handleListSlotChange(e) {
    const children = [...e.target.assignedElements()];

    children.forEach((item) => {
      this.emitChange(item.value, !item.indeterminate && (item.hasAttribute('checked') || item.checked));
    });

    this.value = children.reduce((selectedValues, item) => {
      if (!item.indeterminate && (item.hasAttribute('checked') || item.checked) && item.value?.length) {
        selectedValues.push(item.value);
      }
      return selectedValues;
    }, []);

    if (this.parented) {
      this.setParentState(children);
    }
  }

  handleParentCheckboxChange(e) {
    e.stopPropagation();
    this.toggleChildren(e.detail.checked);
  }

  setParentState(children) {
    const allChecked = children.length && children.length === this.value.length;
    const allUnchecked = !this.value.length && !children.some((item) => item.indeterminate);
    this._indeterminate = !(allChecked || allUnchecked);
    const parent = this.renderRoot.querySelector('.w-checkbox-group__parent');
    if (allChecked) {
      parent.checked = true;
    } else if (allUnchecked) {
      parent.checked = false;
    }
  }

  toggleChildren(checked) {
    this._indeterminate = false;
    this.value = [];
    const children = [...this.renderRoot.querySelector('.w-checkbox-group__list > slot').assignedElements()];
    children.forEach((item) => {
      item.checked = checked;

      if (item.parented) {
        const parent = item.renderRoot.querySelector('.w-checkbox-group__parent');
        parent.checked = checked;
        item.toggleChildren(checked);
      } else if (item.value) {
        if (checked) {
          this.value.push(item.value);
        } else {
          const currentValueIndex = this.value.indexOf(item.value);
          if (currentValueIndex > -1) {
            this.value.splice(currentValueIndex, 1);
          }
        }
        this.emitChange(item.value, checked);
      }
    });
  }

  handleChildCheckboxChange(e) {
    e.stopPropagation();
    const currentValueIndex = this.value.indexOf(e.detail.value);

    if (e.detail.checked) {
      if (currentValueIndex === -1) this.value.push(e.detail.value);
    } else if (currentValueIndex > -1) {
      this.value.splice(currentValueIndex, 1);
    }

    if (this.parented) {
      const children = [...e.target.parentNode.querySelectorAll('w-c-checkbox')];
      this.setParentState(children);
    }

    this.requestUpdate();

    this.emitChange(e.detail.value, e.detail.checked);
  }

  emitChange(value, checked) {
    this.dispatchEvent(new CustomEvent(
      'change',
      {
        detail: {
          checked: checked,
          value: value
        },
        bubbles: true,
        composed: true,
      }
    ));
  }

  render() {
    return html`<fieldset part="fieldset" aria-labelledby="group-label" class="w-checkbox-group ${this._wrapperClasses}">
      <label id="group-label" part="label"><slot name="label" @slotchange="${this.handleLabelSlotChange}">${ this.label }</slot></label>
      <w-c-checkbox ?indeterminate=${this._indeterminate} class="w-checkbox-group__parent" @change="${this.handleParentCheckboxChange}"><slot name="parent-label" @slotchange="${this.handleParentSlotChange}"></slot>: ${this.value?.join(', ')}</w-c-checkbox>
      <div part="list" class="w-checkbox-group__list ${this._listClasses}" @change="${this.handleChildCheckboxChange}"><slot @slotchange="${this.handleListSlotChange}"></slot></div>
      <p class="w-checkbox-group__help"><slot name="help" @slotchange="${this.handleHelpSlotChange}">${ this.help }</slot></p>
    </fieldset>`;
  }
}

if (!customElements.get('w-c-checkbox-group')) {
  customElements.define('w-c-checkbox-group', WarpCheckboxGroup);
}
