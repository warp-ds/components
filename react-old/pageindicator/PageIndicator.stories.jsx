import { PageIndicator } from './index.ts';

export default { title: 'PageIndicator', component: PageIndicator };

const Template = (args) => <PageIndicator {...args} />;
export const Default = Template.bind({});
Default.args = {
  pageCount: 5,
  selectedPage: 1,
};