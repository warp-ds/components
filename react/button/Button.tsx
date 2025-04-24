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
  const {
    variant,
    size,
    loading,
    fullWidth,
    disabled,
    className,
    ...rest
  } = props;

  const classes = classNames(
    'w-button',
    {
      'w-button--primary': variant === 'primary',
      'w-button--secondary': variant === 'secondary',
      'w-button--negative': variant === 'negative',
      'w-button--utility': variant === 'utility',
      'w-button--quiet': variant === 'quiet',
      'w-button--negative-quiet': variant === 'negativeQuiet',
      'w-button--utility-quiet': variant === 'utilityQuiet',
      'w-button--overlay-quiet': variant === 'overlayQuiet',
      'w-button--link': variant === 'link',
      'w-button--small': size === 'small',
      'w-button--full-width': fullWidth,
      'w-button--loading': loading,
      'w-button--disabled': disabled,
    },
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
      <button
        {...rest}
        type={props.type || 'button'}
        ref={ref}
        className={classes}
        disabled={disabled}
        role={variant === 'link' ? 'link' : 'button'}
      >
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
