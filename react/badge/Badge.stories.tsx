import { Badge } from './index.ts';

export default { title: 'Badge', component: Badge };

const Template = (args) => <Badge {...args} />;
export const Default = Template.bind({});
Default.args = {
  variant: 'neutral',
  children: 'Test Badge',
};

export const Variants = () => (
  <ul className="flex flex-wrap gap-8">
    <Badge as="li" variant="neutral">
      neutral badge
    </Badge>
    <Badge as="li" variant="info">
      info badge
    </Badge>
    <Badge as="li" variant="positive">
      positive badge
    </Badge>
    <Badge as="li" variant="warning">
      warning badge
    </Badge>
    <Badge as="li" variant="negative">
      negative badge
    </Badge>
    <Badge as="li" variant="disabled">
      disabled badge
    </Badge>
    <Badge as="li" variant="sponsored">
      sponsored badge
    </Badge>
    <Badge as="li" variant="price">
      price badge
    </Badge>
  </ul>
);

export const Positions = () => (
  <div
  style={{
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  }}
>
  <div
    style={{
      position: 'relative',
      borderWidth: 0,
      borderRadius: '4px',
      overflow: 'hidden',
      height: '9.6rem',
    }}
  >
    <img
      src="https://warp-ds.github.io/docs/images/profile1.jpg"
      alt="top-left"
      style={{
        width: '100%',
        height: '9.6rem',
        objectFit: 'cover',
        borderRadius: '8px',
      }}
    />
    <Badge variant="price" position="top-left">
      top-left
    </Badge>
  </div>

  <div
    style={{
      position: 'relative',
      borderWidth: 0,
      borderRadius: '4px',
      overflow: 'hidden',
      height: '9.6rem',
    }}
  >
    <img
      src="https://warp-ds.github.io/docs/images/profile1.jpg"
      alt="top-right"
      style={{
        width: '100%',
        height: '9.6rem',
        objectFit: 'cover',
        borderRadius: '8px',
      }}
    />
    <Badge variant="price" position="top-right">
      top-right
    </Badge>
  </div>

  <div
    style={{
      position: 'relative',
      borderWidth: 0,
      borderRadius: '4px',
      overflow: 'hidden',
      height: '9.6rem',
    }}
  >
    <img
      src="https://warp-ds.github.io/docs/images/profile1.jpg"
      alt="bottom-right"
      style={{
        width: '100%',
        height: '9.6rem',
        objectFit: 'cover',
        borderRadius: '8px',
      }}
    />
    <Badge variant="price" position="bottom-right">
      bottom-right
    </Badge>
  </div>

  <div
    style={{
      position: 'relative',
      borderWidth: 0,
      borderRadius: '4px',
      overflow: 'hidden',
      height: '9.6rem',
    }}
  >
    <img
      src="https://warp-ds.github.io/docs/images/profile1.jpg"
      alt="bottom-left"
      style={{
        width: '100%',
        height: '9.6rem',
        objectFit: 'cover',
        borderRadius: '8px',
      }}
    />
    <Badge variant="price" position="bottom-left">
      bottom-left
    </Badge>
  </div>
</div>
);
