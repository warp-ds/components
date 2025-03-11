export interface DatePickerInputProps {
  /**
   * A string representing an HTML element or a React component that will tell the DatePickerInput what element to render.
   *
   * @default input
   */
  as?: keyof JSX.IntrinsicElements | React.ComponentType | React.ForwardRefExoticComponent<unknown>;

  /**
   * Which date field the input is connected to. Only set this for DateRangePicker.
   */
  dateField?: 'startDate' | 'endDate';
}
