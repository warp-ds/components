import style from 'inline:./styles/w-datepicker-nav.css';

import IconChevronLeft16 from '@warp-ds/icons/react/chevron-left-16';
import IconChevronRight16 from '@warp-ds/icons/react/chevron-right-16';

import { Button } from '../button/index.ts';

import type { DatePickerNavigationProps } from './props.js';

export const DatePickerNavigation = ({ phrases, nextMonth, prevMonth }: DatePickerNavigationProps) => {
  return (
    <>
      <style href="DatePickerNav" precedence="medium">
        {style}
      </style>
      <div className="w-datepicker__navigation">
        <Button
          variant="utilityQuiet"
          size="small"
          className="w-datepicker__navigation__button--prev"
          aria-label={phrases.jumpToPrevMonth}
          onClick={prevMonth}
        >
          <IconChevronLeft16 />
        </Button>
        <Button
          variant="utilityQuiet"
          size="small"
          className="w-datepicker__navigation__button--next"
          aria-label={phrases.jumpToNextMonth}
          onClick={nextMonth}
        >
          <IconChevronRight16 />
        </Button>
      </div>
    </>
  );
};
