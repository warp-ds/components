import { css } from "lit";

export default css`
  * {
    box-sizing: border-box;
  }
  fieldset {
    border: 0;
    padding: 0;
  }
  legend {
    display: block;
    margin-bottom: 16px;
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: 700;
  }
  .optional {
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: 400;
    color: var(--w-s-color-text-subtle);
    padding-left: .4rem;
  }
  
  .w-radio-group__list {
    display: grid;
    gap: 16px;
  }
  .w-radio-group__list--horizontal {
    display: flex;
    column-gap: 32px;
  }
  .w-radio-group__help-text {
    display: block;
    font-size: var(--w-font-size-xs);
    line-height: var(--w-line-height-xs);
    margin-top: 1.6rem;
  }
  .w-radio-group__help-text--invalid {
    color: var(--w-s-color-text-negative);
  }
`;