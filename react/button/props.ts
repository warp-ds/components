export type ButtonProps = {
  children: React.ReactNode;

  /**
   * Additional classes to include
   */
  className?: string;

  /**
   * Action to be called when the component is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * CSS styles to inline on the component
   */
  style?: React.CSSProperties;

  /**
   * Button type.
   * @default button
   */
  type?: 'button' | 'submit' | 'reset';

  variant?: 'primary' | 'secondary' | 'negative' | 'utility' | 'quiet' | 'negativeQuiet' | 'utilityQuiet' | 'overlayQuiet' | 'link';

  size?: 'small' | 'default';

  /**
   * Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.
   * @default false
   */
  loading?: boolean;

  /**
   * Sets the button's width to its parent's width. Useful on mobile when button should take full width.
   */
  fullWidth?: boolean;

  disabled?: boolean;
};
