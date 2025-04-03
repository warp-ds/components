import { ToastTypes } from "./toast.types.ts";
import WToast from "./WToast.tsx";

type ToastContainerProps = {
  toasts: ToastTypes[];
};

const WToastContainer = ({ toasts }: ToastContainerProps) => {
  return (
    <div className="w-toast">
      {toasts.map((toast) => (
        <WToast
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

export default WToastContainer;
