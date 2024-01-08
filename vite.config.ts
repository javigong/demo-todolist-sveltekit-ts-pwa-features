import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [sveltekit(), tsconfigPaths()],
	test: {
		alias: {
			'@/': new URL('./src/', import.meta.url).pathname,
		}
	}
})
