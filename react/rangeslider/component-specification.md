## Component Name

Range slider and slider

## Overview

**Description**  
The new slider component (and its counterpart for two slider thumbs, the Range Slider), provides an easy to use component for setting values across a range.

It can take either min/max props to define the range, or an array of values (in multiple formats) to define the range and possible values.

**Use Cases**  
Typical use cases include:

- Setting a price range (range slider)
- Setting a time or date range (range slider)
- Setting distance from a location (slider)

**Related Components or Patterns**

<!-- Link to any other components/patterns that relate to or are used within this component. -->

[Attention/tooltip component](https://github.com/warp-ds/react/tree/next/packages/attention) (in the case where that is used for this component).

---

## Design

[Figma Design Document](https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/branch/4CjhjKZbNz31VC4tDCjQ0f/WARP---Components?node-id=884-35563&p=f&t=L4zBSkpeOsRXq4O1-0)

---

## Anatomy

| Element      | Description                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| Track        | The grey background track, defining the range of the slider.                                          |
| Active track | The active (highlighted) track, showing the current range of the slider.                              |
| Thumb        | Draggable element that can be used to set the slider value.                                           |
| Mark         | A mark is a tick mark and a value, placed at the start and end of the slider, to visualize the range. |
| Tooltip      | Shows above the thumb (if showTooltips is true), to visualize the current value.                      |

---

## Properties

### Core/Visual/Variant Properties

| Property           | Type / Options / Values | Default   | Description                                                                 |
| ------------------ | ----------------------- | --------- | --------------------------------------------------------------------------- |
| min                | number                  | 0         | Min (start) value for the range.                                            |
| max                | number                  | 100       | Max (end) value for the range.                                              |
| value              | number or Object        |           | Current value for the slider.                                               |
| values             | number or Object []     |           | Current values for the range slider.                                        |
| rangeValues        | Object[]                |           | Instead of a max/min, an array of values used to define the range.          |
| showTooltips       | true/false              | false     | Show tooltip on selected thumb and on drag.                                 |
| containTooltips    | true/false              | true      | Contain tooltips to within viewport.                                        |
| showMarks          | true/false              | true      | Show visual marks (tick marks and values) at start/end.                     |
| containMarks       | true/false              | false     | Contain the marks to within the component.                                  |
| startEndValues     | string                  | undefined | Add optional start/end values to the range (only used for a min/max range). |
| keyboardStepFactor | number                  | 0.04      | Amount (in fraction of full range) to move thumb on keyboard navigation.    |
| disabled           | true/false              | false     | Disable (grey out) the component.                                           |

### Non-Visual/Code-Only Properties

| Property        | Type   | Default | Description                                    |
| --------------- | ------ | ------- | ---------------------------------------------- |
| aria-label      | string | ''      | String value that labels the slider.           |
| aria-labelledby | string | ''      | Identifies the element that labels the slider. |
| aria-valuetext  | string | ''      | Human readable text alternative for the value. |

### Callbacks

| Property      | Type     | Default | Description                                                              |
| ------------- | -------- | ------- | ------------------------------------------------------------------------ |
| onChange      | function |         | Callback function called on value change.                                |
| onChangeAfter | function |         | Callback function called after value change (once movement is complete). |

---

## Layout & Spacing

The component has spacing between the slider and the marks, otherwise it fills available width.
All elements scale responsively with screen size.

---

## Behavior & Interactions

| State / Event | Visual / Functional Change                                      |
| ------------- | --------------------------------------------------------------- |
| hover         | Thumb shadow is visible.                                        |
| pressed       | Thumb shadow is visible (and larger). Tooltip shows if enabled. |
| disabled      | Component is greyed-out and can't be interacted with.           |

---

## Accessibility

<!--
  Outline all accessibility requirements, such as:
    - Keyboard navigation & focus order
    - Screen reader labels, roles, and announced order
    - Required or optional ARIA attributes
    - Color contrast requirements
    - Alternative text for images/icons
-->

### Screen Reader Text & Roles

| Element        | Role / ARIA           | Announced Text / Label        |
| -------------- | --------------------- | ----------------------------- |
| _Element Name_ | _e.g., role="button"_ | _e.g., “Close dialog button”_ |

### Focus & Keyboard

<!-- Document the tab order, any keyboard shortcuts, or arrow-key interactions. -->

### Color Contrast

<!-- List any key contrast requirements or mention the minimum AA/AAA thresholds. -->

### Other

<!-- e.g., aria-expanded, aria-controls, live regions, etc. -->

---

## Motion (Optional)

<!--
  If the component has animations or transitions, detail them here:
    - Describe the duration, easing, timing function, and from/to states.
    - If multiple animations occur, list each with triggers and effects.
-->

| Animation / Transition | Trigger/Event    | Duration & Easing   | Description / Purpose            |
| ---------------------- | ---------------- | ------------------- | -------------------------------- |
| _e.g., fade in_        | _on focus/hover_ | _200ms ease-in-out_ | _Describes how element appears._ |

---

## Component Tokens

<!--
  If your design system uses tokens (colors, typography, spacing, etc.) that specifically apply to this component,
  list them here. Show default values and how they map to semantic tokens or Figma styles.
-->

| Token Name             | Description                         | Alias / Semantic Token | Default / Figma Style Name |
| ---------------------- | ----------------------------------- | ---------------------- | -------------------------- |
| _Component Token Name_ | _Explains how it’s used in the UI._ | _e.g., color-primary_  | _#000000_                  |

---

## Version History

<!--
  Keep a log of significant changes over time.
  Useful for devs referencing an older version or for cross-platform teams.
-->

| Version | Date       | Changes / Notes         | Author |
| ------- | ---------- | ----------------------- | ------ |
| 1.0.0   | YYYY-MM-DD | _Initial spec release._ | _Name_ |

---

## Additional Notes / Implementation Details (Optional)

<!--
  Anything else developers, designers, or stakeholders should be aware of,
  such as performance constraints, multi-platform nuances, or special usage instructions.
-->

---

### References

- **Design Guidelines (if separate):** _Link to your system’s usage guidelines or best practices._
