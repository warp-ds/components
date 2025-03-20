import { Attention } from '@warp-ds/react/components/attention';
import React from 'react';

type DatePickerPopoverProps = {
  children: React.JSX.Element;
  open: boolean;
  targetEl: React.RefObject<HTMLElement | null>;
};

export const DatePickerPopover = ({ children, open, targetEl }: DatePickerPopoverProps) => {
  const datepickerId = React.useId();

  return (
    <Attention
      popover
      placement="bottom"
      noArrow={true}
      flip={true}
      crossAxis={true}
      id={datepickerId}
      isShowing={open}
      targetEl={targetEl}
    >
      {children}
    </Attention>
  );
};
