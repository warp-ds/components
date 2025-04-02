// ToastContainer.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "./ToastProvider.tsx";
import { useToast } from "./useToast.ts";
import { useState } from "react";

// ---- Meta Definition ----
const meta = {
  title: "Toast/ToastContainer",
  component: ToastProvider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dismissible: {
      control: "boolean",
      defaultValue: true,
    },
  },
} satisfies Meta;

// TODO: add token sheet to storybook config

export default meta;

// ---- Story Type ----
type Story = StoryObj<{ dismissible: boolean; children: object }>;

// ---- Toast Demo Component ----
const ToastDemo = ({ dismissible }: { dismissible: boolean }) => {
  const { addToast } = useToast();
  const [toastNum, setToastNum] = useState(0);

  const handleToast = (variant: "success" | "warning" | "negative") => {
    addToast({
      text: `This is a ${variant} toast! ${toastNum}`,
      variant,
      duration: 5000,
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
  args: {
    dismissible: true,
  },
  argTypes: {
    children: { table: { disable: true } },
  },
  render: (args) => (
    <ToastProvider>
      <ToastDemo {...args} />
    </ToastProvider>
  ),
};
