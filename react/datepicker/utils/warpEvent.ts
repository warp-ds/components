/**
 * Wraps two event handlers so that both are called.
 *
 * @param theirHandler User-supplied event handler
 * @param ourHandler Library-supplied event handler
 */

export function wrapEvent(
  theirHandler: (event: React.SyntheticEvent) => void,
  ourHandler: (event: React.SyntheticEvent) => void,
) {
  return (event) => {
    theirHandler?.(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}
