import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import styles from "./styles.js";
import sharedStyles from "../sharedStyles.js";

const buttonTypes = [
  "primary",
  "secondary",
  "negative",
  "utility",
  "pill",
  "link",
];

export class WarpButton extends LitElement {
  constructor() {
    super();

    this.variant = "secondary";
    this.ariaValueTextLoading = "Loading...";
  }

  static styles = [styles, sharedStyles];

  static properties = {
    type: { type: "button" | "submit" | "reset", reflect: true },
    autofocus: { type: Boolean, reflect: true },
    variant: { type: String, reflect: true },
    quiet: { type: Boolean, reflect: true },
    small: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    href: { type: String, reflect: true },
    target: { type: String, reflect: true },
    rel: { type: String, reflect: true },
    fullWidth: { type: Boolean, reflect: true },
    buttonClass: { type: String, reflect: true },
  };

  connectedCallback() {
    super.connectedCallback();

    if (!buttonTypes.includes(this.variant)) {
      throw new Error(
        `Invalid "variant" attribute. Set its value to one of the following:\n${buttonTypes.join(
          ", "
        )}.`
      );
    }
  }

  firstUpdated() {
    if (this.autofocus) {
      setTimeout(() => this.focus(), 0);
    }
  }

  render() {
    const classes = {
        'w-button': true,
        'w-button--primary': this.variant === "primary",
    };

    return html`<button part="buttonpart" type=${this.type || "button"} class=${classMap(classes)}>
        <slot></slot>
      </button>
      ${this.loading
        ? html`<span
            class="sr-only"
            role="progressbar"
            aria-valuenow="{0}"
            aria-valuetext=${this.ariaValueTextLoading}
          />`
        : null}`;
  }
}

if (!customElements.get("w-button")) {
  customElements.define("w-button", WarpButton);
}
