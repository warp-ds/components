import { html } from 'lit';
import './index.ts';

export default { 
  title: 'ExpandTransition', 
  component: 'w-expandtransition',
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Whether the content should be expanded',
    },
  },
};

const Template = (args) => html`
  <w-expandtransition ?show=${args.show}>
    ${args.content}
  </w-expandtransition>
`;

export const Default = Template.bind({});
Default.args = {
  show: true,
  content: html`
    <div style="padding: 16px; background-color: #f0f0f0; border: 1px solid #ccc;">
      <h3>Expandable Content</h3>
      <p>This content can be expanded or collapsed smoothly.</p>
    </div>
  `,
};
