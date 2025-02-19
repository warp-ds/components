export const style = `.w-datepicker__calendar {
	--_calendar-border-color: var(--calendar-border-color, initial);
	--_calendar-border-style: var(--calendar-border-style, none);
	--_calendar-border-width: var(--calendar-border-width, 0);
	--_calendar-border-radius: var(--calendar-border-radius, 0);
	position: relative;
	z-index: 30;

	border: var(--_calendar-border-width) var(--_calendar-border-style)
		var(--_calendar-border-color);
	border-radius: var(--_calendar-border-radius);
}

.w-datepicker__calendar--inline {
	--calendar-border-style: solid;
	--calendar-border-width: 2px;
	--calendar-border-color: var(--w-s-color-border);
	--calendar-border-radius: 4px;
	display: inline-block;
}`;
