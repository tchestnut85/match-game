import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr()],
	build: {
		outDir: 'build',
	},
	server: {
		open: true,
		// port: 3000, // can change this to any port if needed
	},
	base: '/',
	css: {
		preprocessorOptions: {
			scss: {
				includePaths: ['node_modules'],
			},
		},
	},
});
