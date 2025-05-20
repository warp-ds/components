import { useEffect, useRef, useState } from 'react';
import style from 'inline:./style.css';

export function ExpandTransition({
  show,
  children,
}: {
  show?: boolean;
  children: any;
}) {
  const container = useRef(null);

  // Use height state to store height after first render, allowing us to set a specific height in px to get css transitions.
  const [height, setHeight] = useState('max-content');

  useEffect(() => {
    // Set height value.
    if (height === 'max-content') setHeight(container.current.offsetHeight + 'px');

    if (show) {
      container.current.style.setProperty('--expand-height', height);
    } else {
      container.current.style.setProperty('--expand-height', 0);
    }
  }, [show, height]);

  return (
    <>
      <style href="ExpandTransition" precedence="medium">
        {style}
      </style>
      <div className="w-expandtransition" ref={container}>
        {children}
      </div>
    </>
  );
}
