import style from 'inline:./styles.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ToastItem from './ToastItem.tsx';
import { ToastDuration, ToastId, ToastProps } from './props.ts';
import { generateToastId, getStorageToasts, setStorageToasts } from './utils.tsx';

const defaultDuration: ToastDuration = 5000;

const removeToast = (id: ToastId) => {
  const existingToasts = getStorageToasts();
  const updatedToasts = existingToasts.filter((toast: ToastProps) => toast.id !== id);
  setStorageToasts(updatedToasts);

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
  const existingToasts = getStorageToasts();
  const updatedToasts = [...existingToasts, newToast];
  setStorageToasts(updatedToasts);

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
  const toastContainerAlreadyExists = typeof document !== 'undefined' && !!document.querySelector('.w-toast');

  if (toastContainerAlreadyExists) {
    return null;
  }

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

  return (
    <>
      {createPortal(
        //TODO: biome suggests removing role attr and replacing it with an output element in place of the div, looking into it
        <div className="w-toast">
          <style>{style}</style>
          {toasts?.map((toast) => (
            <ToastItem {...toast} key={toast.id} />
          ))}
        </div>,
        document.body,
      )}
    </>
  );
};

export { addToast, removeToast, ToastContainer };
