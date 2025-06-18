export type AlertProps = {
  children: React.ReactNode;

  /**
   * Determines whether the alert should be visible
   */
  show?: boolean;

  /**
   * Type of alert
   */
  type: 'info' | 'warning' | 'negative' | 'positive';

  /**
   * ARIA live region "role" attribute value
   */
  role?: string;

  /**
   * Additional classes to include
   */
  className?: string;

  /** Additional CSS styles for the container. */
  style?: React.CSSProperties;

  /**
   * id used for relationship ARIA attributes
   */
  id?: string;
};
