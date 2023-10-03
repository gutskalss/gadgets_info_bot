import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
