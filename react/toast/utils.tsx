import IconError16 from '@warp-ds/icons/react/error-16';
import IconSuccess16 from '@warp-ds/icons/react/success-16';
import IconWarning16 from '@warp-ds/icons/react/warning-16';
import { ToastProps } from './props.ts';

export const toastConfig: Record<
  ToastProps['variant'],
  {
    icon: () => React.ReactElement;
    role: 'status' | 'alert';
    className: string;
  }
> = {
  success: {
    icon: () => <IconSuccess16 />,
    role: 'status',
    className: 'w-toast--positive',
  },
  warning: {
    icon: () => <IconWarning16 />,
    role: 'alert',
    className: 'w-toast--warning',
  },
  negative: {
    icon: () => <IconError16 />,
    role: 'alert',
    className: 'w-toast--negative',
  },
};

export const generateToastId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

export const getStorageToasts = () => {
  const existingToasts = JSON.parse(sessionStorage.getItem('wtoasts') || '[]');
  return existingToasts;
};

export const setStorageToasts = (toasts: ToastProps[]) => {
  sessionStorage.setItem('wtoasts', JSON.stringify(toasts));
};
