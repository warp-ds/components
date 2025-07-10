import style from 'inline:./style.css';
import { PageIndicatorProps } from './props.ts';

export function PageIndicator(props: PageIndicatorProps) {
  const { pageCount, selectedPage, style: customStyle } = props;

  return (
    <>
      <style href="PageIndicator" precedence="medium">
        {style}
      </style>
      <div className={'w-pageindicator'} style={customStyle}>
        <div className={'w-pageindicator--container'}>
          {[...Array(pageCount).keys()].map((i) => (
            <div
              className={`w-pageindicator--dot ${i === selectedPage - 1 ? 'w-pageindicator--selecteddot' : ''}`}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
