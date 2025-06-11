## Toast

## Overview

**Description**  
Toasts are brief user feedback messages that overlay content, in 3 variants: success, warning and negative.

**Use Cases**  
Status updates or warnings, such as:

- Success on/failure of saving ad in favourites
- Success on/failure of deleting ad from favourites

**Related Components or Patterns**  
<!-- Link to any other components/patterns that relate to or are used within this component. -->

---

## Design

[Figma Design Document](https://www.figma.com/design/nkiRpuVu6XRfvY96BA80H8/Component-overview?node-id=377-23910&p=f&m=dev)
[Toast](https://www.figma.com/design/oHBCzDdJxHQ6fmFLYWUltf/WARP---Components?node-id=381-42163&p=f&t=KZjjfGECuJ4Fq6is-0)
---

## Anatomy

<!--  
  Break the component down into its parts (“anatomy”).  
  Name each element or subcomponent, possibly with a labeled diagram.  

  Example:  
  - Label each visual part (e.g., “Icon,” “Label,” “Helper Text,” etc.).  
  - Provide short descriptions of what each part does or how it’s used.  
-->

| Element            | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| container          | Toast container                                               |
| icon               | Prefix icon in 3 varieties (check mark, warning, exclamation) |
| dismissable button | X- button to dismiss the toast (mouse users, not keyboard?)   |
| text               | Main text of the toast component                              |
|                    |                                                               |
|                    |                                                               |

---

## Additional Notes / Implementation Details (Optional)

<!--  
  Anything else developers, designers, or stakeholders should be aware of,  
  such as performance constraints, multi-platform nuances, or special usage instructions.  
-->

---

### References

- **Design Guidelines (if separate):** _Link to your system’s usage guidelines or best practices._

---

## Properties

### Visual / Variant Properties

| Property | Options / Values           | Default | Description                                           |
|----------|----------------------------|---------|-------------------------------------------------------|
| variant  | success, warning, negative | success | Change in background color, border, and prefix icon   |
| text     | string                     | ""      | Text string prop with toast message                   |

### Non-Visual / Code-Only Properties

| Property         | Type         | Default | Description                                        |
|------------------|--------------|---------|----------------------------------------------------|
| push-pop queue?  | string/bool? | N/A     | Explain how it affects logic, data, or accessibility |

---

## Layout & Spacing

**Internal Spacing**  
<!-- Show or describe padding and item spacing. -->

**External Spacing**  
<!-- Any margin rules or alignment recommendations when placed in a layout. -->

**Overflow / Text Wrapping**  
<!-- Indicate how the component should behave with very long text or large images. -->

---

## Behavior & Interactions

| State / Event          | Visual / Functional Change                                                                       |
|------------------------|--------------------------------------------------------------------------------------------------|
| Popup (slide up)       | Component slides up from bottom and sticks to the page bottom                                    |
| Timeout (visual timer?)| Should dismiss after a set duration. Maybe show a visual countdown?                             |
| Dismissible | Should be dismissible for mouse users, time out for screen reader and tab users |
| Stackable | Toast should stack up, if multiple exist. New toast pushes old toast upward in a column. |
| Should **always** dismiss? | The lit element has a keep array for toasts, is there any purpose to this? Assume all toasts time out always |

---

## Accessibility

[See thread.](https://sch-chat.slack.com/archives/C0623PXL5UP/p1741769546478039)

### Screen Reader Text & Roles

| Element                | Role / ARIA | Announced Text / Label       |
|------------------------|-------------|-------------------------------|
| Toast variant “negative” | role="alert" |                               |
| Toast variant “success”  | role="status"|                               |
| Toast variant “warning”  | ?           | Should this be alert or status? |

### Focus & Keyboard

- Unfocusable (on desktop)?
- “Maybe it could work if a keystroke to dismiss was clearly communicated, e.g. CTRL+X”
- Instructions in bottom text?
- Swipe on mobile?

### Color Contrast

<!-- Mention AA/AAA compliance or token-based contrast -->

### Other

<!-- e.g., aria-expanded, aria-controls, live regions -->

---

## Motion (Optional)

| Animation / Transition | Trigger/Event      | Duration & Easing   | Description / Purpose                   |
|------------------------|--------------------|---------------------|-----------------------------------------|
| e.g., fade in          | on focus/hover     | 200ms ease-in-out   | Describes how element appears           |

---

## Component Tokens

| Token Name       | Description                        | Alias / Semantic Token | Default / Figma Style Name |
|------------------|------------------------------------|-------------------------|-----------------------------|
| color-primary    | Used for prefix icon and background| semantic.color.success  | `#000000`                   |

---

## Version History

| Version | Date       | Changes / Notes                                          | Author |
|---------|------------|----------------------------------------------------------|--------|
| 1.0.0   | YYYY-MM-DD | Initial spec release                                      | Name   |
| 1.1.0   | YYYY-MM-DD | Added property, changed token, updated visuals           | Name   |

---