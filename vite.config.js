import { defineConfig, loadEnv } from 'vite';
import autoprefixer from 'autoprefixer';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProd = env.NODE_ENV === 'production' ? true : false;
  
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    build: {
      assetsInlineLimit: 0,
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
        plugins: [
          isProd ? autoprefixer() : ''
        ].filter(Boolean)
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/scss/utility";', // utility.scss 파일을 전역으로 import
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
  };
});
