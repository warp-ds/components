import { css } from 'lit';

export default css`
label {
  position: relative;
  color: var(--w-s-color-text);
  border-color: var(--w-s-color-border);
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
label:focus,
label:focus-visible {
  outline: 2px solid var(--w-s-color-border-focus);
  outline-offset: var(--w-outline-offset, 1px);
}
label:not(:focus-visible){
  outline: none;
}
label::before {
  content: "";
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 0;
  border: 1px solid var(--w-s-color-border);
  border-radius: 2px;
  background-color: var(--w-s-color-background);
  transition-property: all;
  transition-timing-function:cubic-bezier(.4, 0, .2, 1);
  transition-duration: 150ms;
}
input:not(:disabled) + label:hover::before {
  border-color: var(--w-s-color-border-primary);
  background-color: var(--w-s-color-background-hover);
}
input:checked + label::before {
  background-position: center;
  background-image: var(--w-icon-toggle-checked);
}
input:checked:not(:disabled) + label::before {
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
input:not(:disabled) + .w-checkbox--invalid::before {
  border-color: var(--w-s-color-border-negative);
  background-color: var(--w-s-color-background);
}
input:not(:disabled) + .w-checkbox--invalid:hover::before {
  border-color: var(--w-s-color-border-negative-hover);
  background-color: var(--w-s-color-background-negative-subtle-hover);
}
input:checked:not(:disabled) + .w-checkbox--invalid::before {
  border-color: var(--w-s-color-border-negative);
  background-color: var(--w-s-color-background-negative);
}
input:checked:not(:disabled) + .w-checkbox--invalid:hover::before{
  border-color: var(--w-s-color-border-negative-hover);
  background-color: var(--w-s-color-background-negative-hover);
}
input:indeterminate + label::before {
  content:"–";
  text-align: center;
  color: var(--w-s-color-icon-inverted-static);
  font-weight: 700;
  line-height: 2rem;
}
input:indeterminate:not(:disabled) + label::before {
  border-color:var(--w-s-color-border-primary);
  background-color:var(--w-s-color-background-primary);
}
input:indeterminate:not(:disabled) + label:hover::before {
  background-color: var(--w-s-color-background-primary-hover);
  border-color: var(--w-s-color-border-primary-hover);
}
input:indeterminate:not(:disabled) + .w-checkbox--invalid::before {
  border-color: var(--w-s-color-border-negative);
  background-color: var(--w-s-color-background-negative);
}
input:indeterminate:not(:disabled) + .w-checkbox--invalid:hover::before {
  border-color: var(--w-s-color-border-negative-hover);
  background-color: var(--w-s-color-background-negative-hover);
}
`;