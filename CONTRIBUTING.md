# Contributing to @warp-ds/components
Thanks for your interest in improving **@warp-ds/components**!
This repo is a design system library implemented in both **React** and **Lit**, shared across multiple applications and teams.

💡 **Note**: 
This repository powers shared components used across multiple teams and products.
Please read the **naming conventions guide** at the bottom of this document.
Before opening a PR, please consider the **broader impact** of your changes:

- Will this affect existing consumers?

- Is it backward compatible?

- Does it align with design system guidelines?

- Is it accessibility compliant?

Thoughtful contributions help ensure a stable and consistent experience for the **entire** company.

## Install dependencies
```sh
pnpm install
```

## Start Storybook for React
```sh
pnpm storybook:react
```
## Start Storybook for Lit
```sh
pnpm storybook:lit
```

## Build components
```sh
pnpm build
```

## Code Style
We use Biome for linting, formatting, and code quality.

Run checks before committing:
```sh
pnpm check
```

## PR Checklist
Before opening a PR:

- Run pnpm check (lint, format)

- Run pnpm build

- Add/Update Storybook stories

- Follow semantic naming for commits (feat:, fix:, etc.)

- Make sure to write a description of the PR: what it solves, what you want people to focus on when reviewing

- Test your component in both Lit and React if applicable

##  Documentation
Use Storybook to document component use cases.

Document all props/slots/events clearly in stories.

Consider accessibility — we ship with @storybook/addon-a11y.


# Naming Conventions

To ensure consistency across the design system, please follow these conventions when naming and structuring files:

## Component Exports

- **React components** must be exported using the format: `WComponentName`
  - `export const WToastContainer = () => { ... }`
- **Web components (Lit/elements)** must be registered using kebab-case: `"w-component-name"`
  - `customElements.define('w-toast', ToastElement)`

---

## Styling

- All styles should go in a `styles.css` file colocated with the component.
  - `Toast/styles.css`
- If multiple CSS files are needed, place them inside a `styles/` folder.
  - Each file must follow the naming pattern: `w-component-part.css`
    - `w-toast-container.css`, `w-toast-item.css`, `w-toast-variant.css`

---

## Typing

- Type definitions for component props/interfaces should go in a file named `props.ts`.
  - `Toast/props.ts`

---

## Utility Files

- Use `utils.ts` (or a `utils/` folder) for **shared, non-rendering logic**.

  Examples of what belongs in `utils.ts`:
  - `formatTimestamp(date)`
  - `getToastClassNames(type)`
  - `groupToastsByPriority()`

---

## Example Folder Structure

```
Toast/
├── index.tsx               # React component (WToastContainer)
├── element.ts              # Web Component (w-toast)
├── props.ts                # Typings for props
├── utils.ts                # Shared pure functions
├── styles.css              # Single CSS file
└── styles/                 # For multiple style files
    ├── w-toast-container.css
    ├── w-toast-item.css
    └── w-toast-variant.css
```

---

> Please follow these conventions to keep the codebase scalable and predictable for all teams using the design system.
