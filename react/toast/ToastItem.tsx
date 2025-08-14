import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Button } from '../button/Button.tsx';
import { WExpandTransition } from '../expandtransition/index.ts';
import { WIcon } from '../icon/index.ts';
import { ToastProps } from './props.ts';
import { removeToast } from './ToastContainer.tsx';

const toastConfig = {
  positive: {
    class: 'w-toast--positive',
    icon: <WIcon name="Success" />,
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

const ToastItem = ({ variant, text, dismissible = false, id, duration }: ToastProps) => {
  const { icon, role, class: className } = toastConfig[variant];
  const [showItem, setShowItem] = useState(false);
  // insertText boolean facilitates proper screen reader behavior
  const [insertText, setInsertText] = useState(false);

  useEffect(() => {
    setShowItem(true);
    setInsertText(true);

    setTimeout(() => setShowItem(false), duration);
    setTimeout(() => {
      setInsertText(false);
      removeToast(id);
    }, duration + 400); // Wait 400ms to allow for animation to complete before removing toast.
  }, []);

  const toastClasses = classNames('w-toast__item', className);

  return (
    <WExpandTransition show={showItem}>
      <div className={toastClasses} role={role} id={id}>
        <span className="w-toast__icon">{icon}</span>
        {insertText && <p>{text}</p>}
        {dismissible && (
          <Button
            variant="overlayQuiet"
            size="small"
            hasIconOnly
            onClick={() => removeToast(id)}
          >
            <WIcon name="Close" />
          </Button>
        )}
      </div>
    </WExpandTransition>
  );
};

export default ToastItem;
