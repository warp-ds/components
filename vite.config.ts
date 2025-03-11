import React from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import inlinePlugin from "./plugin/inline-vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		React(),
		inlinePlugin(),
	],
});
