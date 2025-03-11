import { useContext, useMemo } from 'react';

import { DatePickerContext, IDLE } from '../DatePickerContext.js';

export function useDatePickerContext() {
  const { state } = useContext(DatePickerContext);

  return useMemo(
    () => ({
      isExpanded: state !== IDLE,
    }),
    [state],
  );
}
