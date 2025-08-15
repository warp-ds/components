import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type BadgeVariant =
  | 'info'
  | 'positive'
  | 'warning'
  | 'negative'
  | 'disabled'
  | 'sponsored'
  | 'neutral'
  | 'price';
export type BadgePosition = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';

export type BadgeProps<As extends ElementType = 'div'> = Omit<
  ComponentPropsWithoutRef<As>,
  'as' | 'className' | 'children'
> & {
  /** Render as this element or component */
  as?: As;
  /** Color / style variant */
  variant?: BadgeVariant;
  /** Positional modifier (for absolutely-positioned badges) */
  position?: BadgePosition;
  /** Additional class names */
  className?: string;
  /** Additional CSS styles for the container. */
  style?: React.CSSProperties;
  children?: ReactNode;
};
