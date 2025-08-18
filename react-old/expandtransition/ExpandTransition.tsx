import style from 'inline:./style.css';

export function ExpandTransition({ show, children }: { show?: boolean; children: any }) {
  return (
    <>
      <style href="ExpandTransition" precedence="medium">
        {style}
      </style>
      <div className={`w-expandtransition ${show ? 'w-expandtransition--expanded' : ''}`}>
        <div>{children}</div>
      </div>
    </>
  );
}
