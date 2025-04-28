import IconError16 from '@warp-ds/icons/react/error-16';
import IconSuccess16 from '@warp-ds/icons/react/success-16';
import IconWarning16 from '@warp-ds/icons/react/warning-16';
import { ToastProps, ToastVariant } from './toast.types.ts';

export const toastIcon: Record<ToastProps['variant'], () => React.ReactElement> = {
  success: () => <IconSuccess16 />,
  warning: () => <IconWarning16 />,
  negative: () => <IconError16 />,
};

export const toastRole = {
  success: 'status',
  warning: 'alert',
  negative: 'alert',
};

export const toastVariantClassMap: Record<ToastVariant, string> = {
  success: 'w-toast--positive',
  warning: 'w-toast--warning',
  negative: 'w-toast--negative',
};
