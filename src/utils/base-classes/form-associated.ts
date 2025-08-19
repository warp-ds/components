import { LitElement } from "lit";

/**
 * FormAssociatedElement base class. This could itself extend a core
 * Warp base class. This is the approach that Web Awesome takes for example.
 * 
 * Advantages
 *  - nice and simple and easy to type
 * 
 * Disadvantages
 *  - less composable, not sure if thats actually an issue??
 */
export class FormAssociatedElement extends LitElement {
  static formAssociated = true;
  declare internals: ElementInternals;

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  get form() {
    return this.internals.form;
  }
}