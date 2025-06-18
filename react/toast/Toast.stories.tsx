import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../button/index.ts';
import { addWToast, WToastContainer } from './index.ts';
import { ToastDuration, ToastVariant } from './props.ts';

const toastDurations: ToastDuration[] = [5000, 8000, 10000];

// Meta Definition
const meta = {
  title: 'Toast',
  component: WToastContainer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    dismissible: {
      control: 'boolean',
      defaultValue: true,
    },
    duration: {
      control: {
        type: 'radio',
      },
      options: toastDurations,
      description: 'Duration of timeout',
      defaultValue: 5000,
    },
    text: {
      control: 'text',
      description: 'Toast message content',
      defaultValue: 'This is a toast!',
    },
  },
} satisfies Meta;

export default meta;

// Story Type
type Story = StoryObj<Props>;

type Props = {
  dismissible: boolean;
  duration: ToastDuration;
  text: string;
};

// Toast Demo Component
const ToastDemo = ({ dismissible, duration, text }: Props) => {
  const [toastNum, setToastNum] = useState(0);

  const addToast = (variant: ToastVariant) => {
    addWToast({
      text: `${text} #${toastNum}`,
      variant,
      duration,
      dismissible,
    });
    setToastNum((prev) => prev + 1);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      {(['success', 'warning', 'negative'] as const).map((variant) => (
        <Button type="button" key={variant} onClick={() => addToast(variant)} variant="utility">
          Show {variant} toast
        </Button>
      ))}
    </div>
  );
};

// ---- Default Story ----
export const Default: Story = {
  args: {
    text: 'This is a toast!',
  },
  render: (args) => (
    <>
      <WToastContainer />
      <ToastDemo {...args} />
    </>
  ),
};
