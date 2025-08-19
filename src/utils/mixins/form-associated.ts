import { LitElement } from "lit";

type Constructor<T = unknown> = abstract new (...args: any[]) => T;

export interface WithFormAssociated {
  readonly internals: ElementInternals;
  readonly form: HTMLFormElement | null;
}

/**
 * Mixin that can be used to make an element form-associated.
 * Use like 
 * 
 * class MyClass extends FormAssociated(LitElement) {}
 * 
 * Advantages
 *  - Can be composed together with other mixins
 *  - Can be used as a decorator for consise syntax
 * 
 * Disadvantages
 *  - Look at how frikken mental it is to type this shit??!!
 */
export const FormAssociated = <T extends Constructor<LitElement>>(Base: T): T & Constructor<WithFormAssociated> => {
  abstract class FormAssociatedElement extends Base implements WithFormAssociated {
    static formAssociated = true;
    declare internals: ElementInternals;

    constructor(...args: any[]) {
      super(...args);
      this.internals = this.attachInternals();
    }

    get form(): HTMLFormElement | null {
      return this.internals.form;
    }
  }
  return FormAssociatedElement as T & Constructor<WithFormAssociated>;
};