import { useWToast } from "./useWToast.ts";
import { ToastTypes, toastVariantClassMap } from "./toast.types.ts";
import { ToastIcon, ToastRole } from "./helpers.tsx";
import IconClose16 from "@warp-ds/icons/react/close-16";
import style from "inline:./toast.styles.css";

/* 
  TODO: REMOVE TEMP STYLES, TEST BROWSERS, TEST WEB/MOBILE
  TODO: handling callbacks onClose, should the user pass their own callbacks? Thinking tracking etc.
  TODO: array vs map
  TODO: Test all 3 variants simultaneously and see if the styles override each other
  TODO look at the ClassMap example of partial
  Q MOBILE: Add swipe to dismiss?? NO.
  Q: Should Button or Box be used? Box does not have all the color alternatives and may change in the future, 
     Button pill is deprecated, use utility small quiet? Big radius in active state, maybe make new button for use case
  Q: Should we make countdown visual? A11y challenge
  Q: Is the component self-contained?
  */

const WToast = ({
  variant = "success",
  text = "This is a toast!",
  dismissible = false,
  id,
}: ToastTypes) => {
  const { removeToast } = useWToast();

  const VariantIcon = ToastIcon[variant];
  const variantClass = toastVariantClassMap[variant];
  const dismissibleClass = dismissible ? "w-toast--dismissible" : "";

  return (
    <>
      <style>{style}</style>
      <div
        className={`w-toast__content ${variantClass} ${dismissibleClass}`} // --warning, --success, --negative, --dismissible
        role={ToastRole[variant]}
      >
        <span className="w-toast__icon">
          <VariantIcon />
        </span>
        <p>{text}</p>
        {dismissible && (
          <button className="w-toast__button" onClick={() => removeToast(id)}>
            <IconClose16 />
          </button>
        )}
      </div>
    </>
  );
};

export default WToast;
