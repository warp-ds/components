import { useToast } from "./useToast.ts";
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
  Q MOBILE: Add swipe to dismiss??
  Q: Should timeout pause if hovered??
  Q: Should Button or Box be used? Box does not have all the color alternatives and may change in the future, 
     Button pill is deprecated, use utility small quiet? Big radius in active state, maybe make new button for use case
  Q: Should we make countdown visual?
  Q: Is the component self-contained?
  */

const Toast = ({
  variant = "success",
  text = "This is a toast!",
  dismissible = false,
  id,
}: ToastTypes) => {
  const { removeToast } = useToast();

  const VariantIcon = ToastIcon[variant];
  const variantClass = toastVariantClassMap[variant];
  const dismissibleClass = dismissible ? "toast--dismissible" : "";

  return (
    <>
      <style>{style}</style>
      <div
        className={`w-toast__content ${variantClass} ${dismissibleClass}`} // --warning, --success, --negative, --dismissible
        style={{
          padding: 12,
          border: "solid 2px grey",
          borderRadius: 8,
          width: "fit-content",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
        role={ToastRole[variant]}
      >
        <span className="w-toast__icon" style={{ marginRight: 6 }}>
          <VariantIcon />
        </span>
        {text}
        {dismissible && (
          <button className="w-toast__button" onClick={() => removeToast(id)}>
            <IconClose16 />
          </button>
        )}
      </div>
    </>
  );
};

export default Toast;
