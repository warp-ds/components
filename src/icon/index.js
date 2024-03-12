import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import BaseIcon from "./base-icon.js";

export class WarpIcon extends BaseIcon {
  constructor() {
    super();
    this.uri = "https://assets.finn.no/pkg/eikons/0.0.1-alpha.1";
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      name: {
        type: String,
        reflect: true,
      },
      size: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [super.styles];
  }

  render() {
    const classes = {
      "icon": true,
      "icon--small": this.size === "s",
      "icon--medium": this.size === "m",
      "icon--large": this.size === "l",
      "icon--xtralarge": this.size === "xl",
    };

    return html` <div class="${classMap(classes)}">${this.svg}</div> `;
  }
}

if (!customElements.get("w-icon")) {
  customElements.define("w-icon", WarpIcon);
}