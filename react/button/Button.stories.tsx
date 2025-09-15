// import { useEffect, useState } from 'react';
import { WButton } from './index.ts';

export default { title: 'Button', component: WButton };

const Template = (args) => <WButton {...args}>Hello Button</WButton>;
export const Default = Template.bind({});
Default.args = {
  variant: "secondary",
};
Default.argTypes = {
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
};

export const SecondaryButton = ({ variant }) => (
  <div>
    <WButton variant={variant}>Hello</WButton>
  </div>
);
SecondaryButton.args = {
  variant: "secondary",
};


