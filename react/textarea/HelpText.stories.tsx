import { HelpText } from './HelpText.tsx';

export default {
  title: 'Forms/HelpText',
  component: HelpText,
};

export const Default = () => (
  <HelpText helpText="This is a helpful message to guide the user." />
);

export const Invalid = () => (
  <HelpText helpText="This field is required and cannot be empty." isInvalid />
);

export const WithCustomId = () => (
  <HelpText helpId="custom-help-id" helpText="This help text has a custom ID for accessibility." />
);

export const ReactNode = () => (
  <HelpText helpText={
    <span>
      This help text contains <strong>formatted content</strong> and a{' '}
      <a href="https://example.com" style={{ color: 'inherit', textDecoration: 'underline' }}>
        link
      </a>
      .
    </span>
  } />
);

export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div>
      <h3>Normal state</h3>
      <HelpText helpText="This is normal help text." />
    </div>
    <div>
      <h3>Invalid state</h3>
      <HelpText helpText="This help text indicates an error." isInvalid />
    </div>
  </div>
);
