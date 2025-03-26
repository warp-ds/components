import { Button } from './Button.tsx';

const metadata = { title: 'Button' };
export default metadata;


export const Example = () => (
  <div className="flex flex-col space-y-32">
    <div>
      <h3>Primary</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" primary>
        Simple
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary loading>
        Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary small>
        Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary small loading>
        Small Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary quiet>
        Quiet
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary quiet small>
        Quiet Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" primary quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Secondary</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary>
        Simple
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary loading>
        Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary quiet>
        Quiet
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary quiet loading>
        Quiet Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary small>
        Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary small loading>
        Small Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary quiet small>
        Quiet Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" secondary quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Negative</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" negative>
        Negative
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative loading>
        Negative Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative small>
        Negative Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative small loading>
        Negative Small Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative quiet>
        Quiet
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative quiet loading>
        Quiet Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative quiet small>
        Quiet Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" negative quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Utility</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" utility>
        Simple
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility loading>
        Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility small>
        Small
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility small loading>
        Small Loading
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility quiet>
        Quiet
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" utility quiet small>
        Quiet small
      </Button>
    </div>
    <div>
      <h3>Pill</h3>
      {/* @ts-ignore */}
      <Button className="mr-32" pill>
        Simple pill
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" pill small>
        Simple small pill
      </Button>
      {/* @ts-ignore */}
      <Button className="mr-32" pill loading>
        Loading
      </Button>
    </div>

    <div>
      <h3>Disabled button</h3>
      {/* @ts-ignore */}
      <Button secondary small quiet disabled className="mr-32" target="_blank">
        Disabled small quiet secondary button
      </Button>
      {/* @ts-ignore */}
      <Button primary disabled className="mr-32" target="_blank">
        Disabled button primary
      </Button>
      {/* @ts-ignore */}
      <Button primary small disabled className="mr-32" target="_blank">
        Disabled button small primary
      </Button>
      {/* @ts-ignore */}
      <Button negative disabled className="mr-32" target="_blank">
        Disabled button negative
      </Button>
      {/* @ts-ignore */}
      <Button utility disabled className="mr-32" target="_blank">
        Disabled button utility
      </Button>
      {/* @ts-ignore */}
      <Button utility disabled small className="mr-32" target="_blank">
        Disabled button utility small
      </Button>
    </div>
    <div>
      <h3>Full width button</h3>
      {/* @ts-ignore */}
      <Button fullWidth className="mr-32" primary>
        Full width
      </Button>
    </div>
  </div>
);
