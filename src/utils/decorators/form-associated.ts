import { LitElement } from "lit";
import { FormAssociated, WithFormAssociated } from "../mixins/form-associated.ts";

type Constructor<T = object> = abstract new (...args: any[]) => T;

/**
 * Decorator that applies the FormAssociated mixin that can be found in ../mixins/form-associated.ts
 * This just adds some nice concise syntax on top of the mixin in the form of a decorator
 *
 * Example:
 * ```ts
 * @customElement('my-input')
 * @formAssociated
 * class MyInput extends LitElement {
 *   // now has this.internals and this.form
 * }
 * ```
 * 
 * Advantages
 *  - nice concise sugar
 *  - otherwise same as the mixin version
 * 
 * Disadvantages
 *  - same as the mixin version
 */
export function formAssociated<
  T extends Constructor<LitElement>
>(clazz: T): T & Constructor<WithFormAssociated> {
  return FormAssociated(clazz);
}