import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';

export default defineConfig({
  plugins: [createVuePlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'tmp',
      fileName: (format) => `tmp.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vue-demi'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
});
