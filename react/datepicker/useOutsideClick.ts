import { useLayoutEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent | FocusEvent;

export function useOutsideInteract(
  refs: Array<React.RefObject<HTMLElement>>,
  onInteractOutside: () => void
) {
  useLayoutEffect(() => {
    console.log('useOutsideInteract', refs);
    function handlePointerOrTouch(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      if (refs.every(ref => ref.current && !ref.current.contains(target))) {
        onInteractOutside();
      }
    }

    function handleFocusIn(event: FocusEvent) {
      const target = event.target as Node;
      if (refs.every(ref => ref.current && !ref.current.contains(target))) {
        onInteractOutside();
      }
    }

    document.addEventListener('mousedown', handlePointerOrTouch);
    document.addEventListener('touchend', handlePointerOrTouch);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      document.removeEventListener('mousedown', handlePointerOrTouch);
      document.removeEventListener('touchend', handlePointerOrTouch);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [refs, onInteractOutside]);
}