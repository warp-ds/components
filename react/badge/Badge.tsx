import style from 'inline:./style.css';
import classNames from 'classnames';
import { ElementType } from 'react';
import { BadgeProps } from './props.ts';

export function Badge<As extends ElementType = 'div'>(props: BadgeProps<As>) {
  const { as: Component = 'div', variant = 'neutral', position, className, children, style: customStyle, ...rest } = props;

  const classes = classNames(
    'w-badge',
    {
      'w-badge--info': variant === 'info',
      'w-badge--positive': variant === 'positive',
      'w-badge--warning': variant === 'warning',
      'w-badge--negative': variant === 'negative',
      'w-badge--disabled': variant === 'disabled',
      'w-badge--sponsored': variant === 'sponsored',
      'w-badge--neutral': variant === 'neutral',
      'w-badge--price': variant === 'price',
      'w-badge--position-base': position,
      'w-badge--position-top-left': position === 'top-left',
      'w-badge--position-top-right': position === 'top-right',
      'w-badge--position-bottom-left': position === 'bottom-left',
      'w-badge--position-bottom-right': position === 'bottom-right',
    },
    className,
  );

  return (
    <>
      <style href="Badge" precedence="medium">
        {style}
      </style>
      <Component {...(rest as any)} className={classes} style={customStyle}>
        {children}
      </Component>
    </>
  );
}
