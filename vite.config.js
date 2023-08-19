import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/teslasico/',
  plugins: [
    vue(),
    legacy({ target: ['defaults', 'not IE 11'] })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    assetsInlineLimit: 0,
    outDir: 'docs',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/chunk.js',
        assetFileNames: (assetInfo) => {
          const cssOrScssRegex = /\.(css|scss)$/i;

          if (cssOrScssRegex.test(assetInfo.name)) {
            return 'assets/main.[ext]';
          }

          return 'assets/[name].[ext]';
        },
        // assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer()]
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/scss/utility.scss";', // utility.scss 파일을 전역으로 import
      },
    },
  },
  server: {
    port: 8080,
    host: true
  },
  preview: {
    port: 9090,
  },
});
