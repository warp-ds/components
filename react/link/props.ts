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

  variant?: 'primary' | 'secondary' | 'negative' | 'utility' | 'quiet' | 'negativeQuiet' | 'utilityQuiet';

  size?: 'small' | 'default';

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
