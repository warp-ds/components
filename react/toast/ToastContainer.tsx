import style from 'inline:./styles.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ToastDuration, ToastId, ToastProps } from './props.ts';
import ToastItem from './ToastItem.tsx';
import { generateToastId, getStorageToasts, setStorageToasts } from './utils.ts';

const defaultDuration: ToastDuration = 5000;

const dispatchEvent = (existingToasts, updatedToasts) => {
  window?.dispatchEvent(
    new StorageEvent('storage', {
      key: 'wtoasts',
      newValue: JSON.stringify(updatedToasts),
      oldValue: JSON.stringify(existingToasts),
      storageArea: sessionStorage,
    }),
  );
};

const removeToast = (id: ToastId) => {
  const existingToasts = getStorageToasts();
  const updatedToasts = existingToasts.filter((toast: ToastProps) => toast.id !== id);
  setStorageToasts(updatedToasts);

  dispatchEvent(existingToasts, updatedToasts);
};

const addToast = (toast: Omit<ToastProps, 'id'>) => {
  const newToast = {
    ...toast,
    duration: toast.duration || defaultDuration,
    id: generateToastId(),
  };

  const existingToasts = getStorageToasts();
  const updatedToasts = [...existingToasts, newToast];
  setStorageToasts(updatedToasts);

  dispatchEvent(existingToasts, updatedToasts);
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === 'wtoasts') {
      const toasts = JSON.parse(event.newValue || '[]');
      setToasts(toasts);
    }
  };

  useEffect(() => {
    window?.addEventListener('storage', handleStorage);

    // Adding this to mitigate the Storybook issue
    window?.addEventListener('beforeunload', () => setStorageToasts([]));

    return () => {
      setToasts([]);
      sessionStorage?.removeItem('wtoasts');
      window?.removeEventListener('storage', handleStorage);
      window?.removeEventListener('beforeunload', () => setStorageToasts([]));
    };
  }, []);

  return createPortal(
    <div className="w-toast">
      <style>{style}</style>
      {toasts?.map((toast) => (
        <ToastItem {...toast} key={toast.id} />
      ))}
    </div>,
    document.body,
  );
};

export { addToast, removeToast, ToastContainer };
