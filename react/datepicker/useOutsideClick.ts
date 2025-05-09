import { useEffect } from 'react';

export function useOutsideClick(refs: Array<React.RefObject<HTMLElement>>, onClickOutside: () => void) {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      // eslint-disable-next-line
      // @ts-ignore
      if (refs.every((ref) => ref.current && !ref.current.contains(event.target))) {
        onClickOutside();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [refs]);
}