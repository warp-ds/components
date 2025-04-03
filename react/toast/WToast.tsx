import { ToastTypes } from "./toast.types.ts";
import WToastItem from "./WToastItem.tsx";

type ToastProps = {
  toasts: ToastTypes[];
};

const WToast = ({ toasts }: ToastProps) => {
  return (
    <div className="w-toast">
      {toasts.map((toast) => (
        <WToastItem
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

export default WToast;
