import IconWarning16 from "@warp-ds/icons/react/warning-16";
import IconSuccess16 from "@warp-ds/icons/react/success-16";
import IconError16 from "@warp-ds/icons/react/error-16";
import { ToastTypes } from "./toast.types.ts";

export const ToastIcon: Record<
  ToastTypes["variant"],
  () => React.ReactElement
> = {
  success: () => <IconSuccess16 />,
  warning: () => <IconWarning16 />,
  negative: () => <IconError16 />,
};

export const ToastRole = {
  success: "status",
  warning: "alert",
  negative: "alert",
};
