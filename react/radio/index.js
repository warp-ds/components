import React from "react";
import { createComponent } from "@lit/react";
import { WarpRadio, WarpRadioGroup } from "../../src/radio/index.js";

export const WarpRadioReact = createComponent({
  tagName: "w-c-radio",
  elementClass: WarpRadio,
  react: React,
});

export const WarpRadioGroupReact = createComponent({
  tagName: "w-c-radio-group",
  elementClass: WarpRadioGroup,
  react: React,
});
