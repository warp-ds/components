import { useContext } from "react";

import { Attention } from "@warp-ds/react/components/attention";

import { DatePickerContext, IDLE } from "./DatePickerContext.js";
import type { DatePickerPopoverProps } from "./DatePickerPopoverProps.js";

/**
 * DatePickerPopover
 *
 * Contains the popup that renders the calendar. Because some UI needs to render
 * more than the calendar in the popup, you need to render one of these around the
 * calendar. For example, you may want show some information about availability.
 *
 */
export const DatePickerPopover = ({ children }: DatePickerPopoverProps) => {
	const {
		datepickerId,
		startInputRef,
		isDateRange: isDateRangePicker,
		state: datepickerState,
	} = useContext(DatePickerContext);

	return (
		<Attention
			popover
			placement="bottom"
			noArrow={isDateRangePicker}
			flip={true}
			crossAxis={true}
			id={datepickerId}
			isShowing={datepickerState !== IDLE}
			targetEl={startInputRef}
		>
			{children}
		</Attention>
	);
};
