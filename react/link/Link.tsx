import classNames from 'classnames';
import { RefObject } from 'react';
import { LinkProps } from './props.ts';
import style from 'inline:./style.css';
import buttonStyle from 'inline:../button/style.css';

export const Link = (props: LinkProps, ref?: RefObject<any>) => {
  const { primary, secondary, negative, utility, quiet, small, disabled, className, target, href, ...rest } = props;

  const classes = classNames(
    'w-link',
    //toClass({ primary, secondary, negative, utility, quiet, small }),
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
        role={isButton(props) && 'button'}
        aria-disabled={disabled}
      >
        {props.children}
      </a>
    </>
  );
};

function isButton(props) {
  return ['primary', 'secondary', 'negative', 'utility', 'quiet', 'small'].some((k) => k in props);
}
