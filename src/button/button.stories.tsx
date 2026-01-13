import { html } from 'lit';
import './index.ts';

export default {
  title: 'Button',
  component: 'w-button',
  render: ({ variant, size }) => html`
    <w-button variant=${variant} size=${size}>Hello World</w-button>
  `,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'negative',
        'utility',
        'negative-quiet',
        'utility-quiet',
        'overlay',
        'overlay-quiet',
        'overlay-inverted',
        'overlay-inverted-quiet',
        'link',
      ],
    },
  },
};

export const Default = {
  variant: 'primary',
  size: 'default',
  loading: false,
  disabled: false,
  fullWidth: false,
  children: 'This is a button',
};

export const formSubmit = () => html`
  <form id="my-form">
    <input type="text" name="foo" placeholder="fill me in!" />
    <w-button name="butt" value="my butt" variant="primary" type="submit">Submit me</w-button>
    <w-button variant="secondary" type="reset">Reset me</w-button>
  </form>
`

export const formReset = () => html`
  <form id="my-form">
    <input type="text" name="foo" placeholder="fill me in!" />
    <w-button type="reset">Reset me</w-button>
  </form>
`

export const loadingButton = () => html`
  <form id="my-form">
    <input type="text" name="foo" placeholder="fill me in!" />
    <w-button loading>I am busy</w-button>
  </form>
`

export const disabledButton = () => html`
  <form id="my-form">
    <input type="text" name="foo" placeholder="fill me in!" />
    <w-button disabled>I am disabled</w-button>
  </form>
`

export const fullWidth = () => html`
  <form id="my-form">
    <input type="text" name="foo" placeholder="fill me in!" />
    <w-button full-width>I am full width</w-button>
    <w-button>I am not full width</w-button>
  </form>
`

// 