import type { Preview } from "@storybook/react";
import "uno.css"; // injects styles generated from your presetWarp

export const themes = {
  "Finn light": "finn-no",
  "Finn dark": "finn-no-dark",
  "Tori light": "tori-fi",
  "Tori dark": "tori-fi-dark",
  "DBA light": "dba-dk",
  "DBA dark": "dba-dk-dark",
  "Blocket light": "blocket-se",
  "Blocket dark": "blocket-se-dark",
};

export const rewriteStylesheets = (theme) => {
  const roots = [
    document,
    ...Array.from(document.querySelectorAll("*"))
      .filter((el) => !!el.shadowRoot)
      .map((el) => el.shadowRoot),
  ];
  roots.forEach((root) => {
    //@ts-ignore
    const stylesheets = root.querySelectorAll(
      'link[rel="stylesheet"][href*="/@warp-ds/css/"]'
    );
    stylesheets.forEach((s) => {
      s.setAttribute(
        "href",
        `https://assets.finn.no/pkg/@warp-ds/css/v2/tokens/${theme}.css`
      );
    });
  });
};

export const globalTypes = {
  brand: {
    name: "Brand Theme",
    description: "Select a design system brand",
    defaultValue: "finn-no", // fallback if no localStorage
    toolbar: {
      icon: "globe",
      items: Object.entries(themes).map(([label, value]) => ({
        value,
        title: label,
        right: value.includes("dark") ? "🌙" : "☀️",
      })),
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.brand;

    // Persist theme
    localStorage.setItem("warpTheme", theme);

    // Swap stylesheet
    rewriteStylesheets(theme);

    return Story();
  },
];

const defaultTheme =
  typeof window !== "undefined" && localStorage.getItem("warpTheme");
if (defaultTheme) {
  rewriteStylesheets(defaultTheme);
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
