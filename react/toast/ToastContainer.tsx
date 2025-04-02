import { ToastTypes } from "./toast.types.ts";
import Toast from "./Toast.tsx";

type ToastContainerProps = {
  toasts: ToastTypes[];
};

const ToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <div className="w-toast">
      {toasts.map((toast) => (
        <Toast
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
