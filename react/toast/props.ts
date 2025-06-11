export type ToastDuration = 5000 | 8000 | 10000;

export type ToastVariant = 'success' | 'warning' | 'negative';

export type ToastId = string;

export type ToastProps = {
  variant: ToastVariant;
  duration?: ToastDuration;
  text: string;
  dismissible?: boolean;
  id: ToastId;
};