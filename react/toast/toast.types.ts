export type ToastDuration = 5000 | 8000 | 10000;

export type ToastVariant = "success" | "warning" | "negative";

export type ToastTypes = {
  variant: ToastVariant;
  duration: ToastDuration;
  text: string;
  dismissible?: boolean;
  icon?: React.ReactElement;
  // TODO: change type of id
  id: any;
};

export const toastVariantClassMap: Record<ToastTypes["variant"], string> = {
  success: "w-toast--success",
  warning: "w-toast--warning",
  negative: "w-toast--negative",
};

export const toastDismissibleClass = "w-toast--dismissible";
