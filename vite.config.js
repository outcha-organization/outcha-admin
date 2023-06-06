import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "$lib/sass/_variables"
          @import "$lib/sass/_mixins"
        `,
      }
    },
  }
});
