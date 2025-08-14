export type PageIndicatorProps = {
  /* Currently selected page. */
  selectedPage: number;
  /* Total number of pages. */
  pageCount: number;
  /** Additional CSS styles for the container. */
  style?: React.CSSProperties;
};