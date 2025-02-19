import React from "react";

import "./styles/w-datepicker-nav.css";

import IconChevronLeft16 from "@warp-ds/icons/react/chevron-left-16";
import IconChevronRight16 from "@warp-ds/icons/react/chevron-right-16";

import { Button } from "@warp-ds/react/components/button";

import type { DatePickerNavigationProps } from "./DatePickerNavigationProps.js";

export const DatePickerNavigation = ({
	phrases,
	nextMonth,
	prevMonth,
}: DatePickerNavigationProps) => {
	return (
		<div className="inline-flex">
			<Button
				small
				pill
				className="absolute left-16 top-12"
				aria-label={phrases.jumpToPrevMonth}
				onClick={prevMonth}
			>
				<IconChevronLeft16 />
			</Button>
			<Button
				small
				pill
				className="absolute right-16 top-12"
				aria-label={phrases.jumpToNextMonth}
				onClick={nextMonth}
			>
				<IconChevronRight16 />
			</Button>
		</div>
	);
};
