import { createContext, useContext, useState } from "react";
import ToastContainer from "./ToastContainer.tsx";
import {
  ToastContextType,
  ToastProps,
  ToastId,
  ToastDuration,
} from "./toast.types.ts";

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const defaultDuration: ToastDuration = 5000;

  const addToast = (toast: Omit<ToastProps, "id">) => {
    // TODO: review id? do we want to allow providing id?
    const id: ToastId = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, ...toast }]);
    setTimeout(() => removeToast(id), toast.duration ?? defaultDuration);
  };

  const removeToast = (id: ToastId) => {
    setToasts((prev) => prev.filter((toastItem) => toastItem.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
};
