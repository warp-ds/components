import { expect, within } from 'storybook/test';
import { html } from 'lit';
import './index.ts';

export default { 
  title: 'Alert', 
  component: 'w-alert',
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Whether the alert should be visible',
    },
    type: {
      control: 'select',
      options: ['info', 'warning', 'negative', 'positive'],
      description: 'Type of alert',
    },
    'alert-role': {
      control: 'text',
      description: 'ARIA live region "role" attribute value',
    },
    class: {
      control: 'text',
      description: 'Additional classes to include',
    },
  },
};

const Template = (args) => html`
  <w-alert 
    ?show=${args.show} 
    type=${args.type} 
    alert-role=${args.alertRole}
    class=${args.class}
  >
    ${args.content}
  </w-alert>
`;

export const Default = Template.bind({});
Default.args = {
  type: 'info',
  show: true,
  content: 'This is an "info" variant of the alert component',
};

export const Variants = () => html`
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div data-testid="info">
      <h3>Info</h3>
      <w-alert type="info" show alert-role="status">
        This is an "info" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="warning">
      <h3>Warning</h3>
      <w-alert type="warning" show alert-role="alert">
        This is a "warning" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="negative">
      <h3>Negative</h3>
      <w-alert type="negative" show alert-role="alert">
        This is a "negative" variant of the alert component
      </w-alert>
    </div>
    <div data-testid="positive">
      <h3>Positive</h3>
      <w-alert type="positive" show alert-role="status">
        This is a "positive" variant of the alert component
      </w-alert>
    </div>
  </div>
`;

export const WithInteractiveContent = () => html`
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h3>Info</h3>
      <w-alert type="info" show alert-role="status">
        <h4>This is an info variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Warning</h3>
      <w-alert type="warning" show>
        <h4>This is a warning variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Negative</h3>
      <w-alert type="negative" show>
        <h4>This is a negative variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
    <div>
      <h3>Positive</h3>
      <w-alert type="positive" show alert-role="status">
        <h4>This is a positive variant of the alert component</h4>
        <p>Use this variant to call extra attention to useful, contextual information.</p>
        <a href="https://google.com">Link to more information</a>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button>Button</button>
          <button>Button</button>
        </div>
      </w-alert>
    </div>
  </div>
`;

export const WithDefaultRole = () => {
  let show = true;
  
  const toggle = () => {
    show = !show;
    const alert = document.querySelector('#negative-alert') as any;
    if (alert) {
      alert.show = show;
    }
    const button = document.querySelector('#toggle-button');
    if (button) {
      button.textContent = show ? 'Hide negative alert' : 'Show negative alert';
      button.setAttribute('aria-expanded', show.toString());
    }
  };

  return html`
    <div>
      <h3>Example with default role="alert"</h3>
      <button
        id="toggle-button"
        style="margin-bottom: 16px;"
        @click=${toggle}
        aria-controls="negative-alert"
        aria-expanded="true"
      >
        Hide negative alert
      </button>

      <w-alert id="negative-alert" type="negative" show>
        <h4>This is a "negative" variant of the alert component</h4>
        <div>Use this variant to call extra attention to useful, contextual information.</div>
      </w-alert>
    </div>
  `;
};

export const WithOverriddenRole = () => {
  let show = true;
  
  const toggle = () => {
    show = !show;
    const alert = document.querySelector('#overriden-role-example-alert') as any;
    if (alert) {
      alert.show = show;
    }
    const button = document.querySelector('#toggle-button-2');
    if (button) {
      button.textContent = show ? 'Hide warning alert' : 'Show warning alert';
      button.setAttribute('aria-expanded', show.toString());
    }
  };

  return html`
    <div>
      <h3>Example with role="alert" on a descendant element</h3>
      <button
        id="toggle-button-2"
        style="margin-bottom: 16px;"
        @click=${toggle}
        aria-controls="overriden-role-example-alert"
        aria-expanded="true"
      >
        Hide warning alert
      </button>
      <w-alert id="overriden-role-example-alert" type="warning" show>
        <h4>This is a "warning" variant of the alert component</h4>
        <div role="alert">Use this variant to call extra attention to useful, contextual information.</div>
      </w-alert>
    </div>
  `;
};
