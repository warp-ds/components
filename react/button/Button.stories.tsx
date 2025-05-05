import { Button } from './Button.tsx';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'negative',
        'utility',
        'negativeQuiet',
        'utilityQuiet',
        'overlay',
        'overlayQuiet',
        'overlayInverted',
        'overlayInvertedQuiet',
        'link',
      ],
    },
  },
};

const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'default',
  loading: false,
  disabled: false,
  fullWidth: false,
  children: 'This is a button',
};

export const Example = () => (
  <div>
    <div>
      <h3>Variants</h3>
      <p>Allowed values: empty, or one of variant</p>
      <Button>Default</Button>

      <Button variant="primary">Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="negative">Negative</Button>

      <Button variant="utility">Utility</Button>

      <Button variant="overlay">Overlay</Button>

      <Button variant="overlayInverted">Overlay-Inverted</Button>

      <Button variant="overlayQuiet">Overlay</Button>

      <Button variant="overlayInvertedQuiet">Overlay-Inverted</Button>

      <Button variant="negativeQuiet">Negative-Quiet</Button>

      <Button variant="utilityQuiet">utility-Quiet</Button>

      <p style={{ marginTop: '10px' }}>
        This is a <Button variant="link">button</Button> pretending to be a link.
      </p>
    </div>

    <div>
      <h3>Sizes</h3>
      <p>Allowed values: empty(default) or one size </p>
      <Button>Default</Button>

      <Button size="small">Default small</Button>
    </div>

    <div>
      <h3>widths</h3>
      <p>Allowed values: empty(default) or one width </p>
      <Button>Default</Button>

      <Button fullWidth>Default fullWidth</Button>
    </div>

    <div>
      <h3>States</h3>
      <p>Allowed values: empty(default) or any number of states</p>
      <p>
        Loading state, Pattern is supposed to be: button is triggered, button is disabled until loading success, while
        in the disabled state it also show loading animation to show something is happening.
      </p>
      <Button>Default</Button>

      <Button disabled>Default disabled</Button>

      <Button loading>Default loading</Button>
    </div>

    <h2 style={{ marginTop: '100px' }}>All combos</h2>
    <div>
      <h3>Default (Secondary)</h3>
      <Button>Button</Button>

      <Button loading disabled>
        Loading
      </Button>

      <Button size="small">Small</Button>

      <Button size="small" loading>
        Small Loading
      </Button>

      <Button disabled>Disabled</Button>
    </div>
    <div>
      <h3>Primary</h3>

      <Button variant="primary">Button</Button>

      <Button variant="primary" loading>
        Loading
      </Button>

      <Button variant="primary" size="small">
        Small
      </Button>

      <Button variant="primary" size="small" loading>
        Small Loading
      </Button>
    </div>
    <div>
      <h3>Secondary</h3>

      <Button variant="secondary">Button</Button>

      <Button variant="secondary" loading>
        Loading
      </Button>

      <Button variant="secondary" size="small">
        Small
      </Button>

      <Button variant="secondary" size="small" loading>
        Small Loading
      </Button>
    </div>
    <div>
      <h3>Negative</h3>

      <Button variant="negative">Button</Button>

      <Button variant="negative" loading>
        Negative Loading
      </Button>

      <Button variant="negative" size="small">
        Negative Small
      </Button>

      <Button variant="negative" size="small" loading>
        Negative Small Loading
      </Button>
    </div>
    <div>
      <h3>Utility</h3>

      <Button variant="utility">Button</Button>

      <Button variant="utility" loading>
        Loading
      </Button>

      <Button variant="utility" size="small">
        Small
      </Button>

      <Button variant="utility" size="small" loading>
        Small Loading
      </Button>
    </div>

    <div>
      <h3>Link</h3>
      This is a <Button variant="link">button</Button> pretending to be a link.
    </div>

    <div>
      <h3>Overlay</h3>
      <Button variant="overlay">Overlay</Button>
    </div>
    <div>
      <h3>Overlay Quiet</h3>
      <Button variant="overlayQuiet">Overlay Quiet</Button>
    </div>
    <div>
      <h3>Overlay Inverted</h3>
      <Button variant="overlayInverted">Overlay Inverted</Button>
    </div>
    <div>
      <h3>Overlay Inverted Quiet</h3>
      <Button variant="overlayInvertedQuiet">Overlay Inverted Quiet</Button>
    </div>
    <div>
      <h3>Overlay with Icon</h3>
      <Button variant="overlayInvertedQuiet" hasIconOnly>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="s-icon"><title>Three dots</title><circle cx="2.4" cy="8" r="1.4" fill="currentColor"></circle><circle cx="8" cy="8" r="1.4" fill="currentColor"></circle><circle cx="13.6" cy="8" r="1.4" fill="currentColor"></circle></svg>
      </Button>
    </div>
    <div>
      <h3>Overlay with Icon</h3>
      <Button variant="overlayInvertedQuiet" hasIconOnly>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" class="s-icon"><title>Three dots</title><circle cx="2.4" cy="8" r="1.4" fill="currentColor"></circle><circle cx="8" cy="8" r="1.4" fill="currentColor"></circle><circle cx="13.6" cy="8" r="1.4" fill="currentColor"></circle></svg>
      </Button>
    </div>
    <div>
      <h3>Full width button</h3>

      <Button fullWidth variant="primary">
        Full width
      </Button>
    </div>
  </div>
);
