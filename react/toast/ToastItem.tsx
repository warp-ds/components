import classNames from 'classnames';
import { Button } from '../button/Button.tsx';
import { removeToast } from './ToastContainer.tsx';
import { ToastProps } from './props.ts';
import { WIcon } from '../icon/index.ts';

const toastConfig = {
  success: {
    class: 'w-toast--positive',
    icon: <WIcon name="Info" />,
    role: 'status',
  },
  warning: {
    class: 'w-toast--warning',
    icon: <WIcon name="Warning" />,
    role: 'alert',
  },
  negative: {
    class: 'w-toast--negative',
    icon: <WIcon name="Error" />,
    role: 'alert',
  },
};

const ToastItem = ({ variant, text, dismissible = false, id }: ToastProps) => {
  const { icon, role, class: className } = toastConfig[variant];

  const toastClasses = classNames('w-toast__item', className);

  return (
    <div
      className={toastClasses} // --warning, --success, --negative, --dismissible
      role={role}
      id={id}
    >
      <span className="w-toast__icon">{icon}</span>
      <p>{text}</p>
      {dismissible && (
        <Button variant="overlayQuiet" size="small" hasIconOnly onClick={() => removeToast(id)}>
          <WIcon name="Close" />
        </Button>
      )}
    </div>
  );
};

export default ToastItem;
