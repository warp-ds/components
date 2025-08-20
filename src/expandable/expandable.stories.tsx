import { html } from 'lit';
import './index.ts';

export default {
  title: 'Expandable',
  component: 'w-expandable',
  render: ({ variant, size }) => html`
    <w-expandable title="Click me!">
      <h1>Hello World</h1>
    </w-expandable>
  `,
  argTypes: {
    variant: {
      // control: { type: 'select' },
      // options: [
      //   'primary',
      //   'secondary',
      //   'negative',
      //   'utility',
      //   'negative-quiet',
      //   'utility-quiet',
      //   'overlay',
      //   'overlay-quiet',
      //   'overlay-inverted',
      //   'overlay-inverted-quiet',
      //   'link',
      // ],
    },
  },
};

export const Default = {
  variant: 'primary',
  size: 'default',
  loading: false,
  disabled: false,
  fullWidth: false,
  children: 'This is an expandable',
};

export const TitleAsSlot = {
  render: () => html`
    <w-expandable>
      <p slot="title">Do not click me</p>
      <h1>Hi mom!</h1>
    </w-expandable>
  `
}

export const Events = {
  render: () => html`
    <w-expandable @expanded="${() => console.log("expanded")}" @collapsed="${() => console.log("collapsed")}">
      <p slot="title">Do not click me</p>
      <h1>Hi mom!</h1>
    </w-expandable>
  `
}

export const Parts = {
  render: () => html`
    <w-expandable @expanded="${() => console.log("expanded")}" @collapsed="${() => console.log("collapsed")}">
      <p slot="title">Do not click me</p>
      <h1>Hi mom!</h1>
    </w-expandable>
    <style>
    w-expandable::part(button collapsed) {
      color: blue;
    }
    w-expandable::part(button expanded) {
      color: red;
    }
    </style>
  `
}
