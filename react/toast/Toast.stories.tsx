import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { WToast, addWToast } from './index.ts';
import { ToastDuration, ToastVariant } from './props.ts';

const toastDurations: ToastDuration[] = [5000, 8000, 10000];

// ---- Meta Definition ----
const meta = {
  title: 'Toast',
  component: WToast,
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

// ---- Story Type ----
type Story = StoryObj<{
  dismissible: boolean;
  duration: ToastDuration;
  text: string;
}>;

// ---- Toast Demo Component ----
const ToastDemo = ({
  dismissible,
  duration,
  text,
}: {
  dismissible: boolean;
  duration: ToastDuration;
  text: string;
}) => {
  const [toastNum, setToastNum] = useState(0);

  const handleToast = (variant: ToastVariant) => {
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
        zIndex: 9999,
      }}
    >
      {(['success', 'warning', 'negative'] as const).map((variant) => (
        <button
          type="button"
          key={variant}
          onClick={() => handleToast(variant)}
          style={{
            padding: '8px 16px',
            border: '1px solid grey',
            borderRadius: 4,
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          Show {variant} toast
        </button>
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
      <WToast />
      <WToast />
      <ToastDemo {...args} />
    </>
  ),
};