import { useEffect, useState } from 'react';
import { WPageIndicator } from './index.ts';

export default { title: 'PageIndicator', component: WPageIndicator };

const Template = (args) => <WPageIndicator {...args} />;
export const Default = Template.bind({});
Default.args = {
  pageCount: 5,
  selectedPage: 1,
};

export const InsideContainer = () => (
  <div style={{ display: 'grid', height: '60vh', border: '1px solid lightgrey' }}>
    <WPageIndicator pageCount={5} selectedPage={1} style={{ paddingBottom: '12px', alignSelf: 'end' }} />
  </div>
);

export const InsideContainerChangePage = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (page > 4) {
        setPage(1);
      } else {
        setPage((p) => p + 1);
      }
    }, 1000);
  }, [page]);

  return (
    <div style={{ display: 'grid', height: '60vh', border: '1px solid lightgrey' }}>
      <div style={{ alignSelf: 'center', justifySelf: 'center' }}>Page {page}</div>
      <WPageIndicator pageCount={5} selectedPage={page} style={{ paddingBottom: '12px', alignSelf: 'end' }} />
    </div>
  );
};

export const InsideContainer10Pages = () => (
  <div style={{ display: 'grid', height: '60vh', border: '1px solid lightgrey' }}>
    <WPageIndicator pageCount={10} selectedPage={3} style={{ paddingBottom: '12px', alignSelf: 'end' }} />
  </div>
);

export const OutsideContainer = () => (
  <div style={{ height: '450px', border: '1px solid lightgrey' }}>
    <div style={{ height: '300px', borderBottom: '1px solid #e6e6e6' }} />
    <WPageIndicator pageCount={5} selectedPage={1} style={{ paddingTop: '16px' }} />
  </div>
);
