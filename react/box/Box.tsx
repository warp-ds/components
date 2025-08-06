import style from 'inline:./style.css';
import classNames from 'classnames';
import React from 'react';
import { BoxProps } from './props.ts';

export function Box(props: BoxProps) {
  const { children, as = 'div', type = 'info', role, className, style: customStyle, ...rest } = props;

  const classes = classNames(
    'w-box',
    {
      'w-box--info': type === 'info',
      'w-box--neutral': type === 'neutral',
      'w-box--bordered': type === 'bordered',
    },
    className,
  );

  return (
    <>
      <style href="Box" precedence="medium">
        {style}
      </style>
      {React.createElement(
        as,
        {
          ...rest,
          role: role ?? 'region',
          className: classes,
          style: customStyle,
        },
        children,
      )}
    </>
  );
}
