import classNames from 'classnames';
import { i18n } from '@lingui/core';
import { activateI18n } from '../i18n.ts';
import { ButtonProps } from './props.ts';
import style from 'inline:./style.css';

// wip?
import { messages as daMessages } from '../../packages/button/src/locales/da/messages.mjs';
import { messages as enMessages } from '../../packages/button/src/locales/en/messages.mjs';
import { messages as fiMessages } from '../../packages/button/src/locales/fi/messages.mjs';
import { messages as nbMessages } from '../../packages/button/src/locales/nb/messages.mjs';
import { messages as svMessages } from '../../packages/button/src/locales/sv/messages.mjs';
import { RefObject } from 'react';

export const buttonVariants = ['primary', 'secondary', 'negative', 'utility', 'pill'] as const;

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

export const Button = (props: ButtonProps, ref?: RefObject<any>) => {
  const { primary, secondary, negative, utility, quiet, small, pill, loading, disabled, className } = props;

  // Get the classes from the props.
  const classes = classNames(
    toClass({ primary, secondary, negative, utility, quiet, small, pill, loading }),
    className,
  );

  const ariaValueTextLoading = i18n._({
    id: 'button.aria.loading',
    message: 'Loading...',
    comment: 'Screenreader message for buttons that are loading',
  });

  return (
    <div className={`w-button ${classes}`}>
      <style href="Button" precedence="medium">
        {style}
      </style>
      <button type={props.type || 'button'} ref={ref} /* className={classes} */ disabled={disabled}>
        {props.children}
      </button>
      {props.loading ? (
        // biome-ignore lint/a11y/useAriaPropsForRole: <explanation>
        // biome-ignore lint/a11y/useFocusableInteractive: <explanation>
        <span className="sr-only" role="progressbar" aria-valuenow={0} aria-valuetext={ariaValueTextLoading} />
      ) : null}
    </div>
  );
};

// Convert the fields to class names with a prefix.
function toClass(object: Record<string, any>) {
  const prefix = 'w-button--';

  const obj = {};
  for (const key in object) {
    obj[prefix + key] = object[key];
  }
  return obj;
}
