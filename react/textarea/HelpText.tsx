import style from 'inline:./style.css';
import classNames from 'classnames';
import { HelpTextProps } from './props.ts';

export function HelpText(props: HelpTextProps) {
  const { helpId, helpText, isInvalid, className, ...rest } = props;

  const classes = classNames(
    'w-helptext',
    {
      'w-helptext--invalid': isInvalid,
    },
    className
  );

  return (
    <>
      <style href="HelpText" precedence="medium">
        {style}
      </style>
      <div id={helpId} className={classes} {...rest}>
        {helpText}
      </div>
    </>
  );
}
