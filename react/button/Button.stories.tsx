import { Button } from './Button.tsx';

const metadata = { title: 'Button' };
export default metadata;

export const Example = () => (
  <div className="flex flex-col space-y-32">
    <div>
      <h3>Primary</h3>

      <Button className="mr-32" primary>
        Simple
      </Button>

      <Button className="mr-32" primary loading>
        Loading
      </Button>

      <Button className="mr-32" primary small>
        Small
      </Button>

      <Button className="mr-32" primary small loading>
        Small Loading
      </Button>

      <Button className="mr-32" primary quiet>
        Quiet
      </Button>

      <Button className="mr-32" primary quiet small>
        Quiet Small
      </Button>

      <Button className="mr-32" primary quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Secondary</h3>

      <Button className="mr-32" secondary>
        Simple
      </Button>

      <Button className="mr-32" secondary loading>
        Loading
      </Button>

      <Button className="mr-32" secondary quiet>
        Quiet
      </Button>

      <Button className="mr-32" secondary quiet loading>
        Quiet Loading
      </Button>

      <Button className="mr-32" secondary small>
        Small
      </Button>

      <Button className="mr-32" secondary small loading>
        Small Loading
      </Button>

      <Button className="mr-32" secondary quiet small>
        Quiet Small
      </Button>

      <Button className="mr-32" secondary quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Negative</h3>

      <Button className="mr-32" negative>
        Negative
      </Button>

      <Button className="mr-32" negative loading>
        Negative Loading
      </Button>

      <Button className="mr-32" negative small>
        Negative Small
      </Button>

      <Button className="mr-32" negative small loading>
        Negative Small Loading
      </Button>

      <Button className="mr-32" negative quiet>
        Quiet
      </Button>

      <Button className="mr-32" negative quiet loading>
        Quiet Loading
      </Button>

      <Button className="mr-32" negative quiet small>
        Quiet Small
      </Button>

      <Button className="mr-32" negative quiet small loading>
        Quiet Small Loading
      </Button>
    </div>
    <div>
      <h3>Utility</h3>

      <Button className="mr-32" utility>
        Simple
      </Button>

      <Button className="mr-32" utility loading>
        Loading
      </Button>

      <Button className="mr-32" utility small>
        Small
      </Button>

      <Button className="mr-32" utility small loading>
        Small Loading
      </Button>

      <Button className="mr-32" utility quiet>
        Quiet
      </Button>

      <Button className="mr-32" utility quiet small>
        Quiet small
      </Button>
    </div>
    <div>
      <h3>Pill</h3>

      <Button className="mr-32" pill>
        Simple pill
      </Button>

      <Button className="mr-32" pill small>
        Simple small pill
      </Button>

      <Button className="mr-32" pill loading>
        Loading
      </Button>
    </div>

    <div>
      <h3>Full width button</h3>

      <Button fullWidth className="mr-32" primary>
        Full width
      </Button>
    </div>
  </div>
);
