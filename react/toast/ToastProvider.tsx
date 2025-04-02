import { createContext, useContext, useState } from "react";
import ToastContainer from "./ToastContainer.tsx";
import { ToastTypes } from "./toast.types.ts";

type ToastContextType = {
  addToast: (toast: Omit<ToastTypes, "id">) => void;
  removeToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastTypes[]>([]);

  const addToast = (toast: Omit<ToastTypes, "id">) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, ...toast }]);
    setTimeout(() => removeToast(id), toast.duration ?? 5000);
  };

  const removeToast = (id: string) => {
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
