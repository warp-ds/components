import classNames from 'classnames';
import { AlertProps } from './props.ts';
import { ExpandTransition } from '../expandtransition/index.ts';
import { WIcon } from '../icon/index.ts';
import style from 'inline:./style.css';

const iconMap = {
  negative: <WIcon name='Error' size='18px'/>,
  positive: <WIcon name='Success' size='18px'/>,
  warning: <WIcon name='Warning' size='18px'/>,
  info: <WIcon name='Info' size='18px'/>,
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
