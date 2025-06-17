import { PageIndicatorProps } from './props.ts';
import style from 'inline:./style.css';

export function PageIndicator(props: PageIndicatorProps) {
  const { pageCount, selectedPage, style: customStyle } = props;

  return (
    <>
      <style href="PageIndicator" precedence="medium">
        {style}
      </style>
      <div className={'w-pageindicator'} style={customStyle}>
        {[...Array(pageCount).keys()].map((i) => (
          <div
            className={`w-pageindicator--dot ${i === selectedPage - 1 ? 'w-pageindicator--selecteddot' : ''}`}
            key={i}
          />
        ))}
      </div>
    </>
  );
}
