import { createComponent } from "@lit/react";
import React from "react";
import { WarpIcon as WarpIconWC } from "../../src/icon/index.js";

export const WarpIcon = createComponent({
	tagName: "w-icon",
	elementClass: WarpIconWC,
	react: React,
});
