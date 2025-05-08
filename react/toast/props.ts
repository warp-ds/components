export type ToastDuration = 5000 | 8000 | 10000;

export type ToastVariant = 'success' | 'warning' | 'negative';

// TODO: decide on and change type of id
export type ToastId = string;

export type ToastProps = {
  variant: ToastVariant;
  duration?: ToastDuration;
  text: string;
  dismissible?: boolean;
  id: ToastId;
};

export type ToastContextType = {
  addToast: (toast: Omit<ToastProps, 'id'>) => void;
  removeToast: (id: ToastId) => void;
};
