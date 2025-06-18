import style from 'inline:./style.css';
import classNames from 'classnames';
import { ExpandTransition } from '../expandtransition/index.ts';
import { WIcon } from '../icon/index.ts';
import { AlertProps } from './props.ts';

const typeMap = {
  info: { class: 'w-alert--info', icon: <WIcon name="Info" size="medium" />, iconClass: 's-icon-info' },
  warning: { class: 'w-alert--warning', icon: <WIcon name="Warning" size="medium" />, iconClass: 's-icon-warning' },
  negative: { class: 'w-alert--negative', icon: <WIcon name="Error" size="medium" />, iconClass: 's-icon-negative' },
  positive: { class: 'w-alert--positive', icon: <WIcon name="Success" size="medium" />, iconClass: 's-icon-positive' },
};

export function Alert(props: AlertProps) {
  const { show, type, role, className, children, style: customStyle } = props;

  const classes = classNames('w-alert', typeMap[type].class, className);

  return (
    <>
      <style href="Alert" precedence="medium">
        {style}
      </style>
      <ExpandTransition show={show}>
        <div role={role} className={classes} style={customStyle}>
          <div className={classNames('w-alert--icon', typeMap[type].iconClass)}>{typeMap[type].icon}</div>
          <div className="w-alert--content">{children}</div>
        </div>
      </ExpandTransition>
    </>
  );
}
