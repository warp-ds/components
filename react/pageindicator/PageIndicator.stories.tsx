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
    <PageIndicator
      pageCount={5}
      selectedPage={1}
      style={{ paddingBottom: '12px', alignSelf: 'end', justifySelf: 'center' }}
    />
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
      <PageIndicator
        pageCount={5}
        selectedPage={page}
        style={{ paddingBottom: '12px', alignSelf: 'end', justifySelf: 'center' }}
      />
    </div>
  );
};

export const InsideContainer10Pages = () => (
  <div style={{ display: 'grid', height: '60vh', border: '1px solid lightgrey' }}>
    <PageIndicator
      pageCount={10}
      selectedPage={3}
      style={{ paddingBottom: '12px', alignSelf: 'end', justifySelf: 'center' }}
    />
  </div>
);

export const OutsideContainer = () => (
  <div style={{ display: 'grid', height: '450px', gridTemplateRows: '300px 1fr', border: '1px solid lightgrey' }}>
    <div style={{ borderBottom: '1px solid #e6e6e6' }} />
    <PageIndicator pageCount={5} selectedPage={1} style={{ paddingTop: '16px', justifySelf: 'center' }} />
  </div>
);
