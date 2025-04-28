import IconClose16 from "@warp-ds/icons/react/close-16";
import classNames from "classnames";
import { useToast } from "./useToast.ts";
import { ToastProps } from "./toast.types.ts";
import { toastIcon, toastRole, toastVariantClassMap } from "./mappings.tsx";
import style from "inline:./toast.styles.css";
import { Button } from "../button/Button.tsx";
import { createRef } from "react";

/* 
  TODO: REMOVE TEMP STYLES, TEST BROWSERS, TEST WEB/MOBILE
  TODO: array vs map
  TODO: Test all 3 variants simultaneously and see if the styles override each other
  TODO: Check button component usage!! Currently using button overlayQuiet with custom padding
  Q: Is the component self-contained?
  */

const ToastItem = ({ variant, text, dismissible = false, id }: ToastProps) => {
  const { removeToast } = useToast();
  const buttonRef = createRef<HTMLButtonElement>();
  const VariantIcon = toastIcon[variant];

  const toastClasses = classNames(
    "w-toast__item",
    toastVariantClassMap[variant],
    {
      // TODO: check that this class exists
      "w-toast--dismissible": dismissible,
    }
  );

  return (
    <>
      <style>{style}</style>
      <div
        className={toastClasses} // --warning, --success, --negative, --dismissible
        role={toastRole[variant]}
      >
        <span className="w-toast__icon">
          <VariantIcon />
        </span>
        <p>{text}</p>
        {dismissible && (
          <Button
            variant="overlayQuiet"
            size="small"
            className="p-4"
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
