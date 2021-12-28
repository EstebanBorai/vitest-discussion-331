import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $foo: path.resolve('./src/foo'),
          $lib: path.resolve('./src/lib'),
        },
      },
    },
  },
};

export default config;
