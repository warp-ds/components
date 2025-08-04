import style from 'inline:./style.css';
import { ElementType } from 'react';
import { BadgeProps } from './props.ts';

export function Badge<As extends ElementType = 'div'>(props: BadgeProps<As>) {
  const { as: Component = 'div', variant = 'neutral', position, className = '', children, style: customStyle, ...rest } = props;

  const block = 'badge';
  const mods = [`badge--${variant}`, position && `badge--position-base badge--position-${position}`]
    .filter(Boolean)
    .join(' ');

  const classes = [block, mods, className].filter(Boolean).join(' ');

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
