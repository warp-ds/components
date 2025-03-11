import { html } from "lit";
import "./index.js";

export default {
	component: "w-button",
	render: ({ variant, child }) => html`
      <w-button variant=${variant}>${child}</w-button>
  `,
};
export const Primary = {
	args: {
		variant: "primary",
		child: "Button",
	},
};
