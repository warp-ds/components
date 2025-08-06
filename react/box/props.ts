import React from 'react';

export type BoxProps = {
  children: React.ReactNode;

  /**
   * Additional classes to include
   */
  className?: string;

  /**
   * CSS styles to inline on the component
   */
  style?: React.CSSProperties;

  /**
   * The HTML element or component to render as
   * @default 'div'
   */
  as?: React.ElementType;

  /**
   * Type of box for styling
   */
  type: 'info' | 'neutral' | 'bordered';

  /**
   * ARIA role attribute
   */
  role?: string;

  /**
   * id used for relationship ARIA attributes
   */
  id?: string;
};
