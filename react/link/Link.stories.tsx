import { Link } from './Link.tsx';

const metadata = { title: 'Link' };
export default metadata;

export const Example = () => (
  <div className="flex flex-col space-y-32">
    <div>
      <h3>Primary</h3>
      <Link className="mr-32" primary href="https://google.com">
        Simple href
      </Link>
    </div>
    <div>
      <h3>Secondary</h3>

      <Link className="mr-32" secondary href="https://google.com">
        Simple href
      </Link>
    </div>
    <div>
      <h3>Negative</h3>

      <Link className="mr-32" negative href="https://google.com">
        Simple href
      </Link>
    </div>
    <div>
      <h3>Utility</h3>

      <Link className="mr-32" utility href="https://google.com">
        Simple href
      </Link>
    </div>

    <div>
      <h3>Link (href) styled as button</h3>

      <Link className="mr-32" href="https://google.com/" target="_blank">
        Simple link as button
      </Link>

      <Link primary className="mr-32" href="https://google.com/" target="_blank">
        Simple link as button primary
      </Link>

      <Link negative className="mr-32" href="https://google.com/" target="_blank">
        Simple link as button negative
      </Link>

      <Link utility className="mr-32" href="https://google.com/" target="_blank">
        Simple link as button utility
      </Link>

      <Link className="mr-32" href="https://google.com/" target="_blank" onClick={() => alert("you've clicked")}>
        Simple link with onClick
      </Link>
    </div>
    <div>
      <h3>Disabled button</h3>

      <Link disabled className="mr-32" href="https://google.com/" target="_blank">
        Simple
      </Link>

      <Link secondary small quiet disabled className="mr-32" target="_blank">
        Disabled small quiet secondary button
      </Link>

      <Link primary disabled className="mr-32" target="_blank">
        Disabled button primary
      </Link>

      <Link primary small disabled className="mr-32" target="_blank">
        Disabled button small primary
      </Link>

      <Link negative disabled className="mr-32" target="_blank">
        Disabled button negative
      </Link>

      <Link utility disabled className="mr-32" target="_blank">
        Disabled button utility
      </Link>

      <Link utility disabled small className="mr-32" target="_blank">
        Disabled button utility small
      </Link>
    </div>
    <div>
      <h3>Full width link (href) styled as button</h3>
      <Link fullWidth className="mr-32" primary href="https://google.com/">
        Go to google.com
      </Link>
    </div>
  </div>
);
