import style from 'inline:./styles.css';
import IconClose16 from '@warp-ds/icons/react/close-16';
import classNames from 'classnames';
import { Button } from '../button/Button.tsx';
import { removeToast } from './ToastContainer.tsx';
import { ToastProps } from './props.ts';
import { toastConfig } from './utils.tsx';

/* 
  TODO: REMOVE TEMP STYLES, TEST BROWSERS, TEST WEB/MOBILE
  TODO: Test all 3 variants simultaneously and see if the styles override each other
  */

const ToastItem = ({ variant, text, dismissible = false, id }: ToastProps) => {
  const { icon: Icon, role, className } = toastConfig[variant];

  const toastClasses = classNames('w-toast__item', className, {
    // TODO: check that this class exists
    'w-toast--dismissible': dismissible,
  });

  return (
    <>
      <style>{style}</style>
      <div
        className={toastClasses} // --warning, --success, --negative, --dismissible
        role={role}
        id={id}
      >
        <span className="w-toast__icon">
          <Icon />
        </span>
        <p>{text}</p>
        {dismissible && (
          <Button variant="overlayQuiet" size="small" hasIconOnly onClick={() => removeToast(id)}>
            <IconClose16 />
          </Button>
        )}
      </div>
    </>
  );
};

export default ToastItem;
