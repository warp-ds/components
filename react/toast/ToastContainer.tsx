import ToastItem from './ToastItem.tsx';
import { ToastProps } from './toast.types.ts';

type ToastListProps = {
  toasts: ToastProps[];
};

const ToastContainer = ({ toasts }: ToastListProps) => {
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

export default ToastContainer;
