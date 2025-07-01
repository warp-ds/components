export type ToastDuration = 5000 | 10000 | 6000000;

export type ToastVariant = 'positive' | 'warning' | 'negative';

export type ToastId = string;

export type ToastProps = {
  variant: ToastVariant;
  duration?: ToastDuration;
  text: string;
  dismissible?: boolean;
  id: ToastId;
};
