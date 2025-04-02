export type ToastTypes = {
  variant: "success" | "warning" | "negative";
  duration: 5000 | 8000 | 10000;
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
