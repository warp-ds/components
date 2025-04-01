import classNames from 'classnames';
import { i18n } from '@lingui/core';
import { RefObject } from 'react';
import { activateI18n } from '../../i18n.ts';
import { ButtonProps } from './props.ts';
import style from 'inline:./style.css';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

export const Button = (props: ButtonProps, ref?: RefObject<any>) => {
  const { primary, secondary, negative, utility, quiet, negativeQuiet, utilityQuiet, link, small, loading, fullWidth, disabled, className } = props;

  // Get the classes from the props.
  const classes = classNames(
    'w-button',
    toClass({ primary, secondary, negative, utility, quiet, negativeQuiet, utilityQuiet, link, small, loading, fullWidth }),
    className,
  );

  const ariaValueTextLoading = i18n._({
    id: 'button.aria.loading',
    message: 'Loading...',
    comment: 'Screenreader message for buttons that are loading',
  });

  return (
    <>
      <style href="Button" precedence="medium">
        {style}
      </style>
      <button type={props.type || 'button'} ref={ref} className={classes} disabled={disabled}>
        {props.children}
      </button>
      {props.loading ? (
        // biome-ignore lint/a11y/useAriaPropsForRole: <explanation>
        // biome-ignore lint/a11y/useFocusableInteractive: <explanation>
        <span className="sr-only" role="progressbar" aria-valuenow={0} aria-valuetext={ariaValueTextLoading} />
      ) : null}
    </>
  );
};

// Convert the fields to class names with a prefix.
/*
Can we maybe just map theses out ?

  primary: 'w-button--primary',
  secondary: 'w-button--secondary',
  negative: 'w-button--negative',
  utility: 'w-button--utility',
  link: 'w-button--link',
  quiet: 'w-button--quiet',
  negativeQuiet: 'w-button--negative-quiet',
  utilityQuiet: 'w-button--utility-quiet',
  small: 'w-button--small',
  pill: 'w-button--pill',
  fullWidth: 'w-button--full-width',
  loading: 'w-button--loading',

*/
export function toClass(object: Record<string, any>) {
  const prefix = 'w-button--';

  const obj = {};
  for (const key in object) {
    obj[prefix + key.toLowerCase()] = object[key];
  }
  return obj;
}
