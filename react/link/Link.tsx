import classNames from 'classnames';
import { RefObject } from 'react';
import { LinkProps } from './props.ts';
import style from 'inline:./style.css';
import buttonStyle from 'inline:../button/style.css';
import { toClass } from '../button/Button.tsx';

export const Link = (props: LinkProps, ref?: RefObject<any>) => {
  const { primary, secondary, negative, utility, quiet, small, pill, disabled, className, target, href, ...rest } =
    props;

  // Get the classes from the props.
  const classes = classNames(
    'w-link',
    toClass({ primary, secondary, negative, utility, quiet, small, pill }),
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
        // biome-ignore lint/a11y/useSemanticElements: <explanation>
        role="button"
        aria-disabled={disabled}
      >
        {props.children}
      </a>
    </>
  );
};
