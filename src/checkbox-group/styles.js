import { css } from 'lit';

export default css`
  * {
    box-sizing: border-box;
  }
  fieldset {
    border: 0;
    padding: 0;
  }
  label {
    display: block;
    margin-bottom: 16px;
    font-size: var(--w-font-size-s);
    line-height: var(--w-line-height-s);
    font-weight: 700;
  }
  .w-checkbox-group--invalid {
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
`;