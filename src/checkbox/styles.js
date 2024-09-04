import { css } from 'lit';

export default css`
*,:before {
  box-sizing: border-box;
}
label {
  position: relative;
  border-color: var(--w-s-color-border);
  color: var(--w-s-color-text);
  padding: .2rem 0 .2rem 2.8rem;
  cursor: pointer;
  user-select: none;
  font-size: var(--w-font-size-m);
  line-height: var(--w-line-height-m);
}
input:disabled + label {
  cursor: not-allowed;
  pointer-events: none;
}
label::before {
  content: "";
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 0;
  border: 1px solid var(--w-s-color-border);
  border-radius: 4px;
  background-color: var(--w-s-color-background);
  transition-property: all;
  transition-timing-function:cubic-bezier(.4, 0, .2, 1);
  transition-duration: 150ms;
}
input:focus + label::before,
input:focus-visible + label::before {
  outline: 2px solid var(--w-s-color-border-focus);
  outline-offset: var(--w-outline-offset, 1px);
}
input:not(:focus-visible):focus + label::before {
  outline: none;
}
input:not(:disabled) + label:hover::before {
  border-color: var(--w-s-color-border-primary);
  background-color: var(--w-s-color-background-hover);
}
input:checked + label::before {
  background-position: center;
  background-image: var(--w-icon-toggle-checked);
}
input:checked:not(:disabled) + label::before,
input:indeterminate:not(:disabled) + label::before {
  border-color: var(--w-s-color-border-primary);
  background-color: var(--w-s-color-background-primary);
}
input:checked:not(:disabled) + label:hover::before {
  border-color: var(--w-s-color-border-primary-hover);
  background-color: var(--w-s-color-background-primary-hover);
}
input:disabled + label::before {
  border-color: var(--w-s-color-border-disabled);
  background-color: var(--w-s-color-background-disabled-subtle);
}
input:indeterminate + label::before {
  content: "–";
  text-align: center;
  color: var(--w-s-color-icon-inverted-static);
  font-weight: 700;
  line-height: 1.8rem;
}
input:indeterminate:not(:disabled) + label:hover::before {
  border-color: var(--w-s-color-border-primary-hover);
  background-color: var(--w-s-color-background-primary-hover);
}
.w-checkbox--invalid input:not(:disabled) + label::before {
  border-color: var(--w-s-color-border-negative);
  background-color: var(--w-s-color-background);
}
.w-checkbox--invalid input:not(:disabled) + label:hover::before {
  border-color: var(--w-s-color-border-negative-hover);
  background-color: var(--w-s-color-background-negative-subtle-hover);
}
.w-checkbox--invalid input:indeterminate:not(:disabled) + label::before,
.w-checkbox--invalid input:checked:not(:disabled) + label::before {
  border-color: var(--w-s-color-border-negative);
  background-color: var(--w-s-color-background-negative);
}
.w-checkbox--invalid input:checked:not(:disabled) + label:hover::before,
.w-checkbox--invalid input:indeterminate:not(:disabled) + label:hover::before {
  border-color: var(--w-s-color-border-negative-hover);
  background-color: var(--w-s-color-background-negative-hover);
}
`;