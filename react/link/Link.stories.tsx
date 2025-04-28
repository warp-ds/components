import { Link } from './Link.tsx';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'negative',
        'utility',
        'quiet',
        'negativeQuiet',
        'utilityQuiet',
        'overlayQuiet',
      ],
    },
  },
};

const Template = (args) => <Link {...args} />;
export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  button: true,
  size: 'default',
  disabled: false,
  fullWidth: false,
  children: 'This is a link',
};

export const Example = () => (
  <div>
    <div>
      <h3>Default link</h3>

      <Link href="https://google.com">Link</Link>
    </div>
    <p />
    <div>
      <h3>Link styled as button</h3>

      <Link button href="https://google.com/" target="_blank">
        Link as button
      </Link>

      <Link button variant="primary" href="https://google.com/" target="_blank">
        Link as button primary
      </Link>

      <Link button variant="negative" href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button variant="quiet" href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button variant="utility" href="https://google.com/" target="_blank">
        Link as button utility
      </Link>

      <Link button variant="negativeQuiet" href="https://google.com/" target="_blank">
        Link as button negative quiet
      </Link>

      <Link button variant="utilityQuiet" href="https://google.com/" target="_blank">
        Link as button utility quiet
      </Link>

      <Link button disabled href="https://google.com/" target="_blank">
        Link as button disabled
      </Link>

      <Link button href="https://google.com/" target="_blank" onClick={() => alert("you've clicked")}>
        Link with onClick
      </Link>
    </div>

    <div>
      <h3>Full width Link (href) styled as button</h3>
      <Link button fullWidth variant="primary" href="https://google.com/">
        Go to google.com
      </Link>
    </div>
  </div>
);
