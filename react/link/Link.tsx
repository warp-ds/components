import buttonStyle from 'inline:../button/style.css';
import classNames from 'classnames';
import { RefObject } from 'react';
import { LinkProps } from './props.ts';

export const Link = (props: LinkProps) => {
  const { button, variant, size, fullWidth, disabled, className, target, href, ref, ...rest } = props;

  const classes = classNames(
    'w-link',
    {
      'w-button': button,
      'w-button--primary': variant === 'primary',
      'w-button--secondary': variant === 'secondary',
      'w-button--negative': variant === 'negative',
      'w-button--utility': variant === 'utility',
      'w-button--quiet': variant === 'quiet',
      'w-button--negative-quiet': variant === 'negativeQuiet',
      'w-button--utility-quiet': variant === 'utilityQuiet',
      'w-button--small': size === 'small',
      'w-button--full-width': fullWidth,
      'w-button--disabled': disabled,
    },
    className,
  );

  return (
    <>
      <style href="Button" precedence="medium">
        {buttonStyle}
      </style>
      <a
        {...rest}
        onClick={(e) => props.onClick?.(e)}
        aria-current={props['aria-current']}
        href={disabled ? undefined : href}
        target={target}
        rel={props.target === '_blank' ? props.rel || 'noopener' : undefined}
        ref={ref}
        className={classes}
        role={button && 'button'}
        aria-disabled={disabled}
      >
        {props.children}
      </a>
    </>
  );
};
