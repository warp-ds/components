export type LinkProps = {
  children: React.ReactNode;

  /**
   * Additional classes to include
   */
  className?: string;

  /**
   * Action to be called when the component is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;

  /**
   * CSS styles to inline on the component
   */
  style?: React.CSSProperties;

  button?: boolean;

  /**
   * Set the link to be a primary, call to action button. Can be combined with `small`.
   * @default false
   */
  primary?: boolean;

  /**
   * Set the link to be a secondary button. Can be combined with `quiet` and `small`.
   * @default false
   */
  secondary?: boolean;

  /**
   * Set the link to be a negative, destructive style button. Can be combined with `quiet` and `small`.
   * @default false
   */
  negative?: boolean;

  /**
   * Set the link to be a utility style button. Can be combined with `small`.
   * @default false
   */
  utility?: boolean;

  /**
   * Quieten down the link, can be combined with other types
   * @default false
   */
  quiet?: boolean;

  /**
   * Quieten down the button, negative style
   * @default false
   */
  negativeQuiet?: boolean;

  /**
   * Quieten down the button, utility style
   * @default false
   */
  utilityQuiet?: boolean;

  /**
   * Set the link to be a small size, can be combined with other types
   * @default false
   */
  small?: boolean;

  /**
   * Sets the link's width to its parent's width. Useful on mobile when link should take full width.
   */
  fullWidth?: boolean;

  /**
   * Set the href for the location where clicking the link will take you to.
   */
  href?: string;

  /**
   * Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
   */
  target?: string;

  /**
   * The relationship of the linked URL
   */
  rel?: string;

  disabled?: boolean;
};
