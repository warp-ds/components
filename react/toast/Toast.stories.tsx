// ToastContainer.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { WToastProvider } from "./WToastProvider.tsx";
import { useWToast } from "./useWToast.ts";
import { useState } from "react";
import { ToastDuration, ToastVariant } from "./toast.types.ts";

const toastDurations: ToastDuration[] = [5000, 8000, 10000];

// ---- Meta Definition ----
const meta = {
  title: "Toast/ToastContainer",
  component: WToastProvider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dismissible: {
      control: "boolean",
      defaultValue: true,
    },
    duration: {
      control: {
        type: "radio",
      },
      options: toastDurations, // your 3 options
      description: "Duration of timeout",
      defaultValue: 5000,
    },
  },
} satisfies Meta;

export default meta;

// ---- Story Type ----
type Story = StoryObj<{
  dismissible: boolean;
  duration: ToastDuration;
  children: object;
}>;

// ---- Toast Demo Component ----
const ToastDemo = ({
  dismissible,
  duration,
}: {
  dismissible: boolean;
  duration: ToastDuration;
}) => {
  const { addToast } = useWToast();
  const [toastNum, setToastNum] = useState(0);

  const handleToast = (variant: ToastVariant) => {
    addToast({
      text: `This is a ${variant} toast! ${toastNum}`,
      variant,
      duration,
      dismissible,
    });
    setToastNum((prev) => prev + 1);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "16px",
        left: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        zIndex: 9999,
      }}
    >
      {(["success", "warning", "negative"] as const).map((variant) => (
        <button
          key={variant}
          onClick={() => handleToast(variant)}
          style={{
            padding: "8px 16px",
            border: "1px solid grey",
            borderRadius: 4,
            backgroundColor: "white",
            cursor: "pointer",
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
  argTypes: {
    children: { table: { disable: true } },
  },
  render: (args) => (
    <WToastProvider>
      <ToastDemo {...args} />
    </WToastProvider>
  ),
};
