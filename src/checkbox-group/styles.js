import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }
  :host {
    display: block;
  }
  fieldset {
    all: unset;
    display: block;
  }
  label {
    display: none;
    margin-bottom: 16px;
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: 700;
  }
  .w-checkbox-group--disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  .w-checkbox-group__list {
    display: grid;
    gap: 16px;
  }
  .w-checkbox-group__list--horizontal {
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
  }
  .w-checkbox-group__parent {
    display: none;
  }
  .w-checkbox-group--parented .w-checkbox-group__parent {
    display: block;
  }
  .w-checkbox-group--parented .w-checkbox-group__list {
    padding-top: 16px;
    padding-left: 2.8rem;
  }
  ::slotted(w-c-checkbox-group) {
    padding-left: 2.8rem;
  }
  ::slotted(w-c-checkbox-group[parented]) {
    padding-left: 0;
  }
  .w-checkbox-group__invalid-message {
    color: var(--w-s-color-text-negative);
  }
  .w-checkbox-group__help,
  .w-checkbox-group__invalid-message {
    display: none;
    margin-top: 16px;
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
  }
  .w-checkbox-group--labelled label,
  .w-checkbox-group--help:not(.w-checkbox-group--invalid) .w-checkbox-group__help,
  .w-checkbox-group--invalid .w-checkbox-group__invalid-message {
    display: block;
  }
`;