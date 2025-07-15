import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
	optimizeDeps: {
		include: ["date-fns", "date-fns-tz"],
	},
	resolve: {
		alias: {
			$assets: path.resolve("./src/assets"),
			$vendors: path.resolve("./src/assets/vendors"),
			$components: path.resolve("./src/lib/components/"),
		},
	},
	server: {
		port: 3000,
	},
	preview: {
		port: 3000,
	},
})
