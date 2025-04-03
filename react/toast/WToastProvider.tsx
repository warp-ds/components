import { createContext, useContext, useState } from "react";
import WToastContainer from "./WToastContainer.tsx";
import { ToastTypes } from "./toast.types.ts";

type WToastContextType = {
  addToast: (toast: Omit<ToastTypes, "id">) => void;
  removeToast: (id: string) => void;
};

const WToastContext = createContext<WToastContextType | null>(null);

export const WToastProvider = ({ children }: { children: React.ReactNode }) => {
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
    <WToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <WToastContainer toasts={toasts} />
    </WToastContext.Provider>
  );
};

export const useWToastContext = () => {
  const ctx = useContext(WToastContext);
  if (!ctx) throw new Error("useWToast must be used within a WToastProvider");
  return ctx;
};
