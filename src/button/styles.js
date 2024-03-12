import { css } from 'lit';

export default css`
button:enabled,[role=button]:enabled {
    cursor: pointer
}

button:focus,button:focus-visible {
    outline: 1px dotted;
    outline: 4px auto -webkit-focus-ring-color
}

button:focus:not(:focus-visible) {
    outline: none!important
}

  .button {
    font-family: inherit;
    border-radius: 8px;
    font-weight: 700;
    justify-content: center;
    line-height: 2.4rem;
    font-size: var(--w-font-size-m);
    max-width: -webkit-max-content;
    max-width: max-content;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    border-color: var(--w-s-color-border);
    color: var(--w-s-color-text-link);
    background-color: var(--w-s-color-background);
    border-width: 2px;
    border-style: solid;
  }

  .button:focus, .button:focus-visible {
    outline: 2px solid var(--w-s-color-border-focused, var(--w-s-color-focused));
    outline-offset: var(--w-outline-offset, 1px);
}
.button:hover {
    border-color: var(--w-s-color-border-hover);
    background-color: var(--w-s-color-background-hover);
}


  .button--primary {
    background-color: var(--w-color-button-primary-background);
    color: var(--w-s-color-text-inverted);
    border-width: 0;
    padding: 1.2rem 1.6rem;
}

.button--primary:hover {
    background-color: var(--w-color-button-primary-background-hover);
}

`;