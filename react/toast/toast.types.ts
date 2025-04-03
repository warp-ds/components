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
  success: "w-toast__item--success",
  warning: "w-toast__item--warning",
  negative: "w-toast__item--negative",
};

export const toastDismissibleClass = "w-toast__item--dismissible";
