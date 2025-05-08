// First version using storage, only uses onstorage. Left here for comparison
import { useEffect, useState } from "react";
import ToastItem from "./ToastItem.tsx";
import { ToastDuration, ToastId, ToastProps } from "./props.ts";

const defaultDuration: ToastDuration = 5000;

const getToastsFromStorage = (): ToastProps[] =>
  JSON.parse(sessionStorage.getItem("wtoasts") || "[]");

const setToastsInStorage = (toasts: ToastProps[]) => {
  sessionStorage.setItem("wtoasts", JSON.stringify(toasts));
};

const addToast = (toast: Omit<ToastProps, "id">) => {
  const generateToastId = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

  const newToast: ToastProps = {
    ...toast,
    id: generateToastId(),
    duration: toast.duration || defaultDuration,
  };

  const existingToasts = getToastsFromStorage();
  const updatedToasts = [...existingToasts, newToast];
  setToastsInStorage(updatedToasts);
};

const removeToast = (id: ToastId) => {
  const existingToasts = getToastsFromStorage();
  const updatedToasts = existingToasts.filter((toast) => toast.id !== id);
  setToastsInStorage(updatedToasts);
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastProps[]>(() =>
    getToastsFromStorage()
  );

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "wtoasts") {
        const updated = JSON.parse(event.newValue || "[]");
        setToasts(updated);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="w-toast">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          id={toast.id}
          text={toast.text}
          variant={toast.variant}
          duration={toast.duration}
          dismissible={toast.dismissible}
        />
      ))}
    </div>
  );
};

export { addToast, removeToast, ToastContainer };
