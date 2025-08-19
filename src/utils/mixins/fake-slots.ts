import { LitElement } from "lit";
import { property } from "lit/decorators.js";

type Constructor<T = unknown> = abstract new (...args: any[]) => T;

/**
 * Mixin to emulate slots in the light DOM.
 * Usage:
 *   class MyButton extends FakeSlot(LitElement) { ... }
 * 
 * Then in your component markup, create slot containers using...
 * <div data-slot="default"></div>
 * or 
 * <div data-slot="start"></div>
 * 
 * and when someone uses your component, they can then use a start slot like:
 * <my-element>
 *   <div slot="start">...</div>
 * </my-element>
 * 
 * Elements will be moved from a child node, into the actual area designated in your component
 */
export const FakeSlot = <T extends Constructor<LitElement>>(Base: T): T => {
  abstract class FakeSlotElement extends Base {
    @property({ type: Boolean }) slotObserve = true; // watch for child changes

    connectedCallback() {
      super.connectedCallback?.();
      this._updateSlots();
      if (this.slotObserve) {
        this._observer = new MutationObserver(() => this._updateSlots());
        this._observer.observe(this, { childList: true });
      }
    }

    disconnectedCallback() {
      super.disconnectedCallback?.();
      this._observer?.disconnect();
    }

    private _observer?: MutationObserver;

    /**
     * Move child nodes into containers based on slot="name" attributes
     */
    protected _updateSlots() {
      // Find all containers inside the component that have a data-slot attribute
      const containers = this.querySelectorAll<HTMLElement>("[data-slot]");
      const containerMap = new Map<string, HTMLElement>();
      containers.forEach((c) => containerMap.set(c.dataset.slot, c));

      // Move children to corresponding container
      Array.from(this.childNodes).forEach((child) => {
        if (!(child instanceof HTMLElement)) return;

        const slotName = child.getAttribute("slot") || "default";
        const container = containerMap.get(slotName);
        if (container && child.parentNode !== container) {
          container.appendChild(child);
        }
      });
    }
  }
  return FakeSlotElement;
}