import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
      mode: 'standalone'
  }),
  prefetch: false,
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ]
});