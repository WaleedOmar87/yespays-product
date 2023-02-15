import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const dirname = __dirname;

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: `@main`,
				replacement: resolve(dirname, `src`),
			},
		],
	},
});
