import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "$lib/sass/_variables"
          @import "bulma/sass/utilities/_all"
          @import "$lib/sass/_mixins"
        `,
      }
    },
  }
});
