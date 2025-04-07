import classNames from 'classnames';
import { RefObject } from 'react';
import { LinkProps } from './props.ts';
import style from 'inline:./style.css';
import buttonStyle from 'inline:../button/style.css';
import { toClasses } from '../button/Button.tsx';

export const Link = (props: LinkProps, ref?: RefObject<any>) => {
  const {
    button,
    primary,
    secondary,
    negative,
    utility,
    quiet,
    negativeQuiet,
    utilityQuiet,
    small,
    fullWidth,
    disabled,
    className,
    target,
    href,
    ...rest
  } = props;

  const classes = classNames(
    'w-link',
    {
      'w-button': button,
      ...toClasses({
        primary,
        secondary,
        negative,
        utility,
        quiet,
        negativeQuiet,
        utilityQuiet,
        small,
        fullWidth,
      }),
    },
    className,
  );

  return (
    <>
      <style href="Link" precedence="medium">
        {style}
      </style>
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
