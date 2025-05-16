import style from 'inline:./styles/w-datepicker-calendar.css';
import IconChevronLeft16 from '@warp-ds/icons/react/chevron-left-16';
import IconChevronRight16 from '@warp-ds/icons/react/chevron-right-16';
import classNames from 'classnames';
import {
  addDays,
  addMonths,
  endOfWeek,
  format,
  startOfMonth,
  startOfToday,
  startOfWeek,
  subDays,
  subMonths,
} from 'date-fns';
import React from 'react';
import { Button } from '../button/Button.tsx';
import { DatePickerMonth } from './DatePickerMonth.js';
import type { DatePickerCalendarProps } from './props.js';

/**
 * DatePickerCalendar
 * Can be used standalone, or as part of a <DatePicker /> and an input field.
 */
export const DatePickerCalendar = ({
  id,
  className,
  locale,
  selectedDate,
  navigationDayRef,
  phrases,
  monthFormat,
  weekDayFormat,
  dayAriaLabelFormat,
  isDayDisabled,
  onChange,
  setOpen,
  ...props
}: DatePickerCalendarProps) => {
  const [navigationDate, setNavigationDate] = React.useState(
    // Must use startOfToday() instead of just new Date() here,
    // otherwise todays date will be the only date in the calendar that doesn' start at 00:00:00
    selectedDate ?? startOfToday(),
  );
  const [isKeyboardNavigation, setIsKeyboardNavigation] = React.useState<boolean>(false);

  const month = startOfMonth(navigationDate);
  const nextMonth = () => setNavigationDate(addMonths(month, 1));
  const prevMonth = () => setNavigationDate(subMonths(month, 1));

  /**
   * Keyboard navigation for the calendar
   * Arrow keys for horizontal/vertical movement.
   * Home/End to move to start/end of week.
   * PageUp/PageDown to move to next/prev month.
   */
  const keyHandler = (event: React.KeyboardEvent) => {
    let newDate: Date;
    // eslint-disable-next-line default-case
    switch (event.key) {
      case 'ArrowUp':
        newDate = subDays(navigationDate, 7);
        break;
      case 'ArrowLeft':
        newDate = subDays(navigationDate, 1);
        break;
      case 'Home':
        newDate = startOfWeek(navigationDate, { locale });
        break;
      case 'PageUp':
        newDate = subMonths(navigationDate, 1);
        break;
      case 'ArrowDown':
        newDate = addDays(navigationDate, 7);
        break;
      case 'ArrowRight':
        newDate = addDays(navigationDate, 1);
        break;
      case 'End':
        newDate = endOfWeek(navigationDate, { locale });
        break;
      case 'PageDown':
        newDate = addMonths(navigationDate, 1);
        break;
      case 'Escape':
        setOpen(false);
        break;
    }

    if (newDate) {
      // prevent scrolling
      event.preventDefault();
      setNavigationDate(newDate);
      //setIsKeyboardNavigation(true);
    }
  };

  React.useEffect(() => {
    if (navigationDayRef.current && isKeyboardNavigation) {
      // Focus the currently selected day in the calendar
      navigationDayRef.current.focus();
    }
  }, [navigationDayRef.current, navigationDate, isKeyboardNavigation]);

  console.log(month);
  //console.log('isKeyboardNavigation', isKeyboardNavigation);

  return (
    <>
      <style href="DatePickerCalendar" precedence="medium">
        {style}
      </style>
      <div
        className={classNames('w-datepicker__calendar', className)}
        aria-roledescription={phrases.roleDescription}
        id={id}
        onKeyDown={keyHandler}
        {...props}
      >
        <div className="w-datepicker__month-nav">
          <Button
            variant="utilityQuiet"
            size="small"
            className="w-datepicker__month__nav__button"
            aria-label={phrases.jumpToPrevMonth}
            onClick={prevMonth}
          >
            <IconChevronLeft16 />
          </Button>
          <div className="w-datepicker__month__nav__header">{format(month, monthFormat, { locale })}</div>
          <Button
            variant="utilityQuiet"
            size="small"
            className="w-datepicker__month__nav__button"
            aria-label={phrases.jumpToNextMonth}
            onClick={nextMonth}
          >
            <IconChevronRight16 />
          </Button>
        </div>
        <DatePickerMonth
          key={month.toString()}
          month={month}
          navigationDate={navigationDate}
          locale={locale}
          monthFormat={monthFormat}
          weekDayFormat={weekDayFormat}
          isDayDisabled={isDayDisabled}
          selectedDate={selectedDate}
          phrases={phrases}
          navigationDayRef={navigationDayRef}
          dayAriaLabelFormat={dayAriaLabelFormat}
          onChange={onChange}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          setIsKeyboardNavigation={setIsKeyboardNavigation}
        />
      </div>
    </>
  );
};
