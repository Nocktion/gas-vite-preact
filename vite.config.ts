import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		viteSingleFile(),
		preact(),
		tailwindcss()
	],
	build: {
		minify: true,
		outDir: './dist/client',
		rollupOptions: {
			external: [ "./src/server" ]
		}
	},
});
