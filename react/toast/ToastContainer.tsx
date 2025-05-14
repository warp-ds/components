import { useEffect, useId, useState } from 'react';
import ToastItem from './ToastItem.tsx';
import { ToastDuration, ToastId, ToastProps } from './props.ts';
import { generateToastId, getToasts, setToasts } from './utils.tsx';

// TODO: remove console.logs

const defaultDuration: ToastDuration = 5000;

const removeToast = (id: ToastId) => {
  const existingToasts = getToasts();
  const updatedToasts = existingToasts.filter((toast: ToastProps) => toast.id !== id);
  setToasts(updatedToasts);

  window?.dispatchEvent(
    new StorageEvent('storage', {
      key: 'wtoasts',
      newValue: JSON.stringify(updatedToasts),
      oldValue: JSON.stringify(existingToasts),
      storageArea: sessionStorage,
    }),
  );
};

const addToast = (toast: Omit<ToastProps, 'id'>) => {
  const newId: ToastId = generateToastId();

  const newToast = {
    ...toast,
    duration: toast.duration || defaultDuration,
    id: newId,
  };
  const existingToasts = getToasts();
  const updatedToasts = [...existingToasts, newToast];
  setToasts(updatedToasts);

  //TODO: remove console.logs
  console.log(sessionStorage.getItem('wtoasts'));

  window?.dispatchEvent(
    new StorageEvent('storage', {
      key: 'wtoasts',
      newValue: JSON.stringify(updatedToasts),
      oldValue: JSON.stringify(existingToasts),
      storageArea: sessionStorage,
    }),
  );

  setTimeout(() => {
    removeToast(newId);
  }, newToast.duration);
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const handleStorage = (event: StorageEvent) => {
    console.log('Storage event triggered');
    console.log(JSON.parse(event.newValue));
    if (event.key === 'wtoasts') {
      const toasts = JSON.parse(event.newValue || '[]');
      setToasts(toasts);
    }
  };
  
  useEffect(() => {
    window?.addEventListener('storage', handleStorage);

    return () => {
      sessionStorage.removeItem('wtoasts');
      window?.removeEventListener('storage', handleStorage);
    };
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

// Exports added at the bottom for clarity
export { addToast, removeToast, ToastContainer };
