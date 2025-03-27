import classNames from 'classnames';
import { RefObject } from 'react';
import { LinkProps } from './props.ts';
import style from 'inline:./style.css';

export const Link = (props: LinkProps, ref?: RefObject<any>) => {
  const { primary, secondary, negative, utility, quiet, small, pill, disabled, className, target, href } = props;

  // Get the classes from the props.
  const classes = classNames(
    'w-link',
    toClass({ primary, secondary, negative, utility, quiet, small, pill }),
    className,
  );

  return (
    <div className={classes}>
      <style href="Link" precedence="medium">
        {style}
      </style>
      <a
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
    </div>
  );
};

// Convert the fields to class names with a prefix.
function toClass(object: Record<string, any>) {
  const prefix = 'w-link--';

  const obj = {};
  for (const key in object) {
    obj[prefix + key.toLowerCase()] = object[key];
  }
  return obj;
}
