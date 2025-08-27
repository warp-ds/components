import { Box } from './Box.tsx';
import { BoxProps } from './props.ts';

export default { title: 'Layout/Box', component: Box };

const Template = (args: BoxProps) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a default box component',
};

export const Variants = () => (
  <div className="flex flex-col gap-y-16">
    <div data-testid="info">
      <h3>Info</h3>
      <Box type="info">This is an info box with subtle info background</Box>
    </div>
    <div data-testid="neutral">
      <h3>Neutral</h3>
      <Box type="neutral">This is a neutral box with sunken surface background</Box>
    </div>
    <div data-testid="bordered">
      <h3>Bordered</h3>
      <Box type="bordered">This is a bordered box with border and background</Box>
    </div>
  </div>
);

export const AsElements = () => (
  <div className="flex flex-col gap-y-16">
    <div data-testid="as-div">
      <h3>As div (default)</h3>
      <Box type="info">This renders as a div element</Box>
    </div>
    <div data-testid="as-section">
      <h3>As section</h3>
      <Box type="info" as="section">
        This renders as a section element
      </Box>
    </div>
    <div data-testid="as-article">
      <h3>As article</h3>
      <Box type="info" as="article">
        This renders as an article element
      </Box>
    </div>
  </div>
);

export const WithCustomRole = () => (
  <Box type="info" role="banner">
    This box has a custom ARIA role of "banner"
  </Box>
);
