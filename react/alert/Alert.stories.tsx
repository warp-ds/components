import { expect, within } from '@storybook/test';
import { useState } from 'react';
import { Button } from '../button/index.ts';
import { Link } from '../link/Link.tsx';
import { Alert } from './Alert.tsx';
import { AlertProps } from './props.ts';

export default { title: 'Alert', component: Alert };

const Template = (args) => <Alert {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: 'info',
  show: true,
  children: 'This is an "info" variant of the alert component',
};

export const Variants = () => (
  <div className="flex flex-col gap-y-16">
    <div data-testid="info">
      <h3>Info</h3>
      <Alert type="info" show role="status">
        This is an "info" variant of the alert component
      </Alert>
    </div>
    <div data-testid="warning">
      <h3>Warning</h3>
      <Alert type="warning" show role="alert">
        This is a "warning" variant of the alert component
      </Alert>
    </div>
    <div data-testid="negative">
      <h3>Negative</h3>
      <Alert type="negative" show role="alert">
        This is a "negative" variant of the alert component
      </Alert>
    </div>
    <div data-testid="positive">
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        This is a "positive" variant of the alert component
      </Alert>
    </div>
  </div>
);

Variants.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const negative = within(canvas.getByTestId('negative'));
  await expect(negative.getByRole('alert')).toBeInTheDocument();

  const positive = within(canvas.getByTestId('positive'));
  await expect(positive.getByRole('status')).toBeInTheDocument();

  const warning = within(canvas.getByTestId('warning'));
  await expect(warning.getByRole('alert')).toBeInTheDocument();

  const info = within(canvas.getByTestId('info'));
  await expect(info.getByRole('status')).toBeInTheDocument();
};

const InteractiveContent = ({ type }: Pick<AlertProps, 'type'>) => (
  <>
    <h4>This is a {type} variant of the alert component</h4>
    <p>Use this variant to call extra attention to useful, contextual information.</p>
    <Link href="https://google.com">Link to more information</Link>
    <p />
    <div className="mt-8 space-x-8">
      <Button size="default" variant="secondary">
        Button
      </Button>
      <Button size="default" variant="utilityQuiet">
        Button
      </Button>
    </div>
  </>
);

export const WithInteractiveContent = () => (
  <div className="flex flex-col gap-y-16">
    <div>
      <h3>Info</h3>
      <Alert type="info" show role="status">
        <InteractiveContent type="info" />
      </Alert>
    </div>
    <div>
      <h3>Warning</h3>
      <Alert type="warning" show>
        <InteractiveContent type="warning" />
      </Alert>
    </div>
    <div>
      <h3>Negative</h3>
      <Alert type="negative" show>
        <InteractiveContent type="negative" />
      </Alert>
    </div>
    <div>
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        <InteractiveContent type="positive" />
      </Alert>
    </div>
  </div>
);

export const WithDefaultRole = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <h3>Example with default role="alert"</h3>
      <Button
        className="mb-16"
        size="default"
        variant="primary"
        onClick={() => {
          setShow(!show);
        }}
        aria-controls="negative-alert"
        aria-expanded={show}
      >
        {show ? 'Hide negative alert' : 'Show negative alert'}
      </Button>

      <Alert id="negative-alert" type="negative" show={show}>
        <h4>This is a "negative" variant of the alert component</h4>
        <div>Use this variant to call extra attention to useful, contextual information.</div>
      </Alert>
    </>
  );
};

export const WithOverriddenRole = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <h3>Example with role="alert" on a descendant element</h3>
      <Button
        className="mb-16"
        size="default"
        variant="primary"
        onClick={() => {
          setShow(!show);
        }}
        aria-controls="overriden-role-example-alert"
        aria-expanded={show}
      >
        {show ? 'Hide warning alert' : 'Show warning alert'}
      </Button>
      <Alert id="overriden-role-example-alert" type="warning" show={show}>
        <h4>This is a "warning" variant of the alert component</h4>
        <div role="alert">Use this variant to call extra attention to useful, contextual information.</div>
      </Alert>
    </>
  );
};

export const InfoAlertTask = Template.bind({});
InfoAlertTask.args = { ...Default.args, role: 'alert' };
InfoAlertTask.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByRole('alert')).toBeInTheDocument();
};
