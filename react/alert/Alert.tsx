import classNames from 'classnames';
import IconError16 from '@warp-ds/icons/react/error-16';
import IconInfo16 from '@warp-ds/icons/react/info-16';
import IconSuccess16 from '@warp-ds/icons/react/success-16';
import IconWarning16 from '@warp-ds/icons/react/warning-16';
import { AlertProps } from './props.ts';
import { ExpandTransition } from '../expandtransition/index.ts';
import style from 'inline:./style.css';

const iconMap = {
  negative: <IconError16 />,
  positive: <IconSuccess16 />,
  warning: <IconWarning16 />,
  info: <IconInfo16 />,
};

const iconClass = {
  negative: 's-icon-negative',
  positive: 's-icon-positive',
  warning: 's-icon-warning',
  info: 's-icon-info',
};

export function Alert(props: AlertProps) {
  const { show, type, role, className, children, style: customStyle } = props;

  const classes = classNames(
    'w-alert',
    {
      'w-alert--negative': type === 'negative',
      'w-alert--positive': type === 'positive',
      'w-alert--warning': type === 'warning',
      'w-alert--info': type === 'info',
    },
    className,
  );

  return (
    <>
      <style href="Alert" precedence="medium">
        {style}
      </style>
      <ExpandTransition show={show}>
        <div role={role} className={classes} style={customStyle}>
          <div className={classNames('w-alert--icon', iconClass[type])}>{iconMap[type]}</div>
          <div>{children}</div>
        </div>
      </ExpandTransition>
    </>
  );
}
