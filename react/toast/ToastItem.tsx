import style from "inline:./styles.css";
import IconClose16 from "@warp-ds/icons/react/close-16";
import classNames from "classnames";
import { Button } from "../button/Button.tsx";
import { toastConfig } from "./utils.tsx";
import { ToastProps } from "./props.ts";
import { removeToast } from "./ToastContainer.tsx";

/* 
  TODO: REMOVE TEMP STYLES, TEST BROWSERS, TEST WEB/MOBILE
  TODO: Test all 3 variants simultaneously and see if the styles override each other
  TODO: Check button component usage!! Currently using button overlayQuiet with custom padding
  Q: Is the component self-contained?
  */

const ToastItem = ({
  variant,
  text,
  dismissible = false,
  id,
}: ToastProps) => {
  const { icon: Icon, role, className } = toastConfig[variant];

  const toastClasses = classNames("w-toast__item", className, {
    // TODO: check that this class exists
    "w-toast--dismissible": dismissible,
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
          <Button
            variant="overlayQuiet"
            size="small"
            //TODO: remove ts-ignore when button branch is merged
            //@ts-ignore
            hasIconOnly
            onClick={() => removeToast(id)}
          >
            <IconClose16 />
          </Button>
        )}
      </div>
    </>
  );
};

export default ToastItem;
