import React, { useEffect, useState } from 'react';
import { Alert } from './Alert.tsx';
import { expect, within } from '@storybook/test';
import { AlertProps } from './props.ts';
import { Button } from '../button/index.ts';

export default { title: 'FeedbackIndicators/Alert', component: Alert };

const Template = (args) => <Alert {...args} />;
export const Default = Template.bind({});
Default.args = {
  type: 'negative',
  show: true,
  children: 'This is "negative" variant of the alert component',
};

export const Variants = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // (Temp) demo code.
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 1500);
  }, [show]);
  useEffect(() => {
    setTimeout(() => {
      setShow2(!show2);
    }, 900);
  }, [show2]);

  return (
    <div className="flex flex-col gap-y-16">
      <div data-testid="negative">
        <h3>Negative</h3>
        <Alert type="negative" show={show}>
          This is "negative" variant of the alert component
        </Alert>
      </div>
      <div data-testid="positive">
        <h3>Positive</h3>
        {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
        <Alert type="positive" show={show2} role="status">
          This is "positive" variant of the alert component
          <br />
          <br />
          This is "positive" variant of the alert component This is "positive" variant of the alert component
        </Alert>
      </div>
      <div data-testid="warning">
        <h3>Warning</h3>
        <Alert type="warning" show>
          This is "warning" variant of the alert component
        </Alert>
      </div>
      <div data-testid="info">
        <h3>Info</h3>
        {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
        <Alert type="info" show role="status">
          This is "info" variant of the alert component
        </Alert>
      </div>
    </div>
  );
};

Variants.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const negative = within(canvas.getByTestId('negative'));
  // test the outer container
  await expect(negative.getByRole('alert')).toBeInTheDocument();
  // test the icon
  await expect(negative.getByTitle(/Octagon/)).toBeInTheDocument();

  const positive = within(canvas.getByTestId('positive'));
  await expect(positive.getByRole('status')).toBeInTheDocument();
  await expect(positive.getByTitle(/checkmark/)).toBeInTheDocument();

  const warning = within(canvas.getByTestId('warning'));
  await expect(warning.getByRole('alert')).toBeInTheDocument();
  await expect(warning.getByTitle(/Warning/)).toBeInTheDocument();

  const info = within(canvas.getByTestId('info'));
  await expect(info.getByRole('status')).toBeInTheDocument();
  await expect(info.getByTitle(/Information/)).toBeInTheDocument();
};

const h4Style = { fontSize: '1.4rem', lineHeight: '1.8rem' };

const InteractiveContent = ({ type }: Pick<AlertProps, 'type'>) => (
  <>
    <h4 style={h4Style}>This is {type} variant of the alert component</h4>
    <p>With an additional description</p>
    <div className="mt-8 space-x-8">
      <Button size="small">Primary CTA</Button>
      <Button size="small" variant="quiet">
        Secondary
      </Button>
    </div>
  </>
);

export const WithInteractiveContent = () => (
  <div className="flex flex-col gap-y-16">
    <div>
      <h3>Negative</h3>
      <Alert type="negative" show>
        <InteractiveContent type="negative" />
      </Alert>
    </div>
    <div>
      <h3>Positive</h3>
      {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
      <Alert type="positive" show role="status">
        <InteractiveContent type="positive" />
      </Alert>
    </div>
    <div>
      <h3>Warning</h3>
      <Alert type="warning" show>
        <InteractiveContent type="warning" />
      </Alert>
    </div>
    <div>
      <h3>Info</h3>
      {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
      <Alert type="info" show role="status">
        <InteractiveContent type="info" />
      </Alert>
    </div>
  </div>
);

export const WithDefaultRole = () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <h3>Example with default role="alert"</h3>
      <Button
        className="mb-16"
        size="small"
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
        <h4 style={h4Style}>This is "negative" variant of the alert component</h4>
        <p>With an additional description</p>
      </Alert>
    </>
  );
};

export const WithOverriddenRole = () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <h3>Example with role="alert" on a descendant element</h3>
      <Button
        className="mb-16"
        size="small"
        variant="primary"
        onClick={() => {
          setShow(!show);
        }}
        aria-controls="overriden-role-example-alert"
        aria-expanded={show}
      >
        {show ? 'Hide warning alert' : 'Show warning alert'}
      </Button>
      {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
      <Alert id="overriden-role-example-alert" type="warning" show={show} role="">
        <h4 style={h4Style}>This is "warning" variant of the alert component</h4>
        <p>With an additional description that is not that important</p>
      </Alert>
    </>
  );
};

export const NegativeAlertTask = Template.bind({});
NegativeAlertTask.args = { ...Default.args };
NegativeAlertTask.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByRole('alert')).toBeInTheDocument();
};
