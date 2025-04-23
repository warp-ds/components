import { Link } from './Link.tsx';

const metadata = { title: 'Link' };
export default metadata;

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

      <Link button primary href="https://google.com/" target="_blank">
        Link as button primary
      </Link>

      <Link button negative href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button quiet href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button utility href="https://google.com/" target="_blank">
        Link as button utility
      </Link>

      <Link button negativeQuiet href="https://google.com/" target="_blank">
        Link as button negative quiet
      </Link>

      <Link button utilityQuiet href="https://google.com/" target="_blank">
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
      <Link button fullWidth primary href="https://google.com/">
        Go to google.com
      </Link>
    </div>
  </div>
);
