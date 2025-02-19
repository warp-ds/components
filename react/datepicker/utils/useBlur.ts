import { useContext } from "react";

import { getOwnerDocument } from "@reach/utils";

import { DatePickerContext } from "../DatePickerContext.js";

export function useBlur() {
	const { dispatch, popoverRef, startInputRef, endInputRef } =
		useContext(DatePickerContext);

	return function handleBlur() {
		//@ts-ignore
		const ownerDocument = getOwnerDocument(startInputRef.current);

		if (!ownerDocument) return;

		requestAnimationFrame(() => {
			const activeElement = ownerDocument.activeElement;
			const inputIsFocused =
				activeElement === startInputRef.current ||
				activeElement === endInputRef.current;

			// we want to close only if focus pops outside the datepicker
			//@ts-ignore
			if (!inputIsFocused && !popoverRef.current?.contains(activeElement)) {
				// focus landed outside the datepicker, close it.
				dispatch({ type: "BLUR" });
			}
		});
	};
}
