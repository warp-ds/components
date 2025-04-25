import { useToastContext } from './ToastProvider.tsx';

export const useToast = () => {
  const { addToast, removeToast } = useToastContext();
  return { addToast, removeToast };
};
