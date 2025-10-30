import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	// Development server configuration
	server: {
		host: '0.0.0.0',
		port: 3000,
		strictPort: true
	},

	// Preview server configuration
	preview: {
		host: '0.0.0.0',
		port: 3000,
		strictPort: true
	},

	// Build configuration
	build: {
		target: 'node18'
	},

	// Environment variables
	define: {
		// Make environment variables available at build time
	}
});
