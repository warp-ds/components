import { LitElement, css } from "lit";
import cacheFetch from "./cache-fetch.js";
import { error } from './error.js';
import styles from "./styles.js";

export default class BaseIcon extends LitElement {
  static get properties() {
    return {
      svg: {
        attribute: false,
        reflect: true,
      },
    };
  }

  static styles = [styles];

  /**
   * @private async function to fetch requested icon from CDN
   * @param {string} name icon name
   * @returns {dom} DOM ready HTML to be appended
   */
  async fetchIcon(name) {
    const iconHTML = await cacheFetch(`${this.uri}/${name}.svg`);

    const dom = new DOMParser().parseFromString(iconHTML, "text/html");

    return dom.body.querySelector("svg");
  }

  // lifecycle function
  async firstUpdated() {
    const svg = await this.fetchIcon(this.name);

    if (svg) {
      this.svg = svg;
    } else if (!svg) {
      const penDOM = new DOMParser().parseFromString(error, "text/html");

      this.svg = penDOM.body.firstChild;
    }
  }
}