import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  // eslint-disable-next-line no-undef
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    watch: false,
    environment: 'jsdom',
    include: ['test/**/*.ts'],
  },
});
