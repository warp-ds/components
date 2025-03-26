import { Button } from './Button.tsx';

const metadata = { title: 'Button' };
export default metadata;

export const Regular = () => {
  return (
    <div>
      <Button primary quiet small className='test'>Test</Button>
    </div>
  );
};

export const Regular2 = () => {
  return (
    <div>
      <Button primary small loading quiet>Test</Button>
    </div>
  );
};