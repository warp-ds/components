import { ToastProps } from './props.ts';

export const generateToastId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

export const getStorageToasts = () => {
  const existingToasts = JSON.parse(sessionStorage.getItem('wtoasts') || '[]');
  return existingToasts;
};

export const setStorageToasts = (toasts: ToastProps[]) => {
  sessionStorage.setItem('wtoasts', JSON.stringify(toasts));
};