import { useWToastContext } from "./WToastProvider.tsx";

export const useWToast = () => {
  const { addToast, removeToast } = useWToastContext();
  return { addToast, removeToast };
};
