import { css } from 'lit';

export default css`
.w-button {
  max-width: -webkit-max-content;
  max-width: max-content;
  justify-content: center;
  border: 2px solid var(--w-s-color-border);
  border-radius: 8px;
  padding: 10px 14px;
  background-color: var(--w-s-color-background);
  color: var(--w-s-color-text-link);
  font-size: var(--w-font-size-m);
  font-weight: bold;
  line-height: 2.4rem;
}

.w-button:hover {
  border-color: var(--w-s-color-border-hover);
  background-color: var(--w-s-color-background-hover);
}

.w-button:focus:not(:focus-visible) {
  outline: none!important
}

.w-button:focus,
.w-button:focus-visible {
  outline: 2px solid var(--w-s-color-border-focused, var(--w-s-color-focused));
  outline-offset: var(--w-outline-offset, 1px);
}

.w-button--primary {
  border-width: 0;
  padding: 12px 16px;
  background-color: var(--w-color-button-primary-background);
  color: var(--w-s-color-text-inverted);
}

.w-button--primary:hover {
  background-color: var(--w-color-button-primary-background-hover);
}
`;