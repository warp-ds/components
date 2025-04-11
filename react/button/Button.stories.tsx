import { Button } from './Button.tsx';

const metadata = { title: 'Button' };
export default metadata;

export const Example = () => (
  <div className="flex flex-col space-32">
    <div>
      <h3>Variants</h3>
      <p>Allowed values: empty, or one of variant</p>
      <Button>Default</Button>

      <Button primary>Primary</Button>

      <Button secondary>Secondary</Button>

      <Button negative>Negative</Button>

      <Button utility>Utility</Button>

      <Button quiet>Quiet</Button>

      <Button negativeQuiet>Negative-Quiet</Button>

      <Button utilityQuiet>utility-Quiet</Button>

      <p>
        This is a <Button link>button</Button> pretending to be a link.
      </p>
    </div>

    <div>
      <h3>Sizes</h3>
      <p>Allowed values: empty(default) or one size </p>
      <Button>Default</Button>

      <Button small>Default small</Button>
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

      <Button small>Small</Button>

      <Button small loading>
        Small Loading
      </Button>

      <Button disabled>Disabled</Button>
    </div>
    <div>
      <h3>Primary</h3>

      <Button primary>Button</Button>

      <Button primary loading>
        Loading
      </Button>

      <Button primary small>
        Small
      </Button>

      <Button primary small loading>
        Small Loading
      </Button>
    </div>
    <div>
      <h3>Secondary</h3>

      <Button secondary>Button</Button>

      <Button secondary loading>
        Loading
      </Button>

      <Button secondary small>
        Small
      </Button>

      <Button secondary small loading>
        Small Loading
      </Button>
    </div>
    <div>
      <h3>Negative</h3>

      <Button negative>Button</Button>

      <Button negative loading>
        Negative Loading
      </Button>

      <Button negative small>
        Negative Small
      </Button>

      <Button negative small loading>
        Negative Small Loading
      </Button>
    </div>
    <div>
      <h3>Utility</h3>

      <Button utility>Button</Button>

      <Button utility loading>
        Loading
      </Button>

      <Button utility small>
        Small
      </Button>

      <Button utility small loading>
        Small Loading
      </Button>
    </div>

    <div>
      <h3>Link</h3>
      This is a <Button link>button</Button> pretending to be a link.
    </div>

    <div>
      <h3>Overlay</h3>
      <Button overlayQuiet>Overlay quiet</Button>
    </div>

    <div>
      <h3>Full width button</h3>

      <Button fullWidth primary>
        Full width
      </Button>
    </div>

    <div>
      <h3>Everything</h3>
      <p>primary secondary negative utility quiet link small loading fullwidth disabled</p>

      <Button primary secondary negative utility quiet link small loading fullWidth disabled>
        All things
      </Button>
    </div>
  </div>
);
