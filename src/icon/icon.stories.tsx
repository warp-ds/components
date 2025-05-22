import { html } from 'lit';
import './index.ts';

export default {
  component: 'w-icon',
  title: 'Icons',
  render: ({ name, size, locale }) => html`
      <w-icon name=${name} size=${size} locale=${locale} />
  `,
};
export const Default = {
  args: {
    name: 'Ads',
    size: 'medium',
    locale: 'nb',
  },
};

export const Example = () => html`
    <div>
      <w-icon name="Speedometer" size="small" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="medium" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="large" locale="nb"></w-icon>
      <w-icon name="Speedometer" size="xtralarge" locale="nb"></w-icon>
    </div>
`;