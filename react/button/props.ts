import { buttonVariants } from './Button.tsx';

export type ButtonProps = {
  children: React.ReactNode;

  /**
   * Additional classes to include
   */
  className?: string;

  /**
   * Action to be called when the component is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  /**
   * CSS styles to inline on the component
   */
  style?: React.CSSProperties;

  /**
   * Button type, only applied when href is not set.
   * @default button
   */
  type?: 'button' | 'submit' | 'reset';

  /* variant: (typeof buttonVariants)[number]; */

  /**
   * Set the button to be a primary, call to action button. Can be combined with `small`.
   * @default false
   */
  primary?: boolean;

  /**
   * Set the button to be a secondary button. Can be combined with `quiet` and `small`.
   * @default false
   */
  secondary?: boolean;

  /**
   * Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.
   * @default false
   */
  negative?: boolean;

  /**
   * Set the button to be a utility style button. Can be combined with `small`.
   * @default false
   */
  utility?: boolean;

  /**
   * Quieten down the button, can be combined with other button types
   * @default false
   */
  quiet?: boolean;

  /**
   * Set the button to be a small size, can be combined with other button types
   * @default false
   */
  small?: boolean;

  /**
   * Set the button to look like a pill style button
   * @default false
   */
  pill?: boolean;

  /**
   * Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.
   * @default false
   */
  loading?: boolean;

  disabled?: boolean;
};
