import { useEffect, useState } from 'react';
import { PageIndicator } from './PageIndicator.tsx';

export default { title: 'PageIndicator', component: PageIndicator };

const Template = (args) => <PageIndicator {...args} />;
export const Default = Template.bind({});
Default.args = {
  pageCount: 5,
  selectedPage: 1,
};

export const InsideContainer = () => (
  <div style={{ display: 'grid', height: '60vh', border: '1px solid lightgrey' }}>
    <PageIndicator pageCount={5} selectedPage={1} style={{ paddingBottom: '12px', alignSelf: 'end' }} />
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
      <PageIndicator pageCount={5} selectedPage={page} style={{ paddingBottom: '12px', alignSelf: 'end' }} />
    </div>
  );
};

export const InsideContainer10Pages = () => (
  <div style={{ display: 'grid', height: '60vh', border: '1px solid lightgrey' }}>
    <PageIndicator pageCount={10} selectedPage={3} style={{ paddingBottom: '12px', alignSelf: 'end' }} />
  </div>
);

export const OutsideContainer = () => (
  <div style={{ height: '400px', border: '1px solid lightgrey' }}>
    <div style={{ height: '300px', border: '1px solid lightgrey' }} />
    <PageIndicator pageCount={5} selectedPage={1} style={{ paddingTop: '16px' }} />
  </div>
);
