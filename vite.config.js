import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-plugin-electron';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        // Main process entry file
        entry: 'src/main/main.js',
        vite: {
          build: {
            outDir: 'dist-electron',
            lib: {
              entry: 'src/main/main.js',
              formats: ['es'],
              fileName: () => 'main.js'
            },
            rollupOptions: {
              external: [
                'electron',
                'puppeteer',
                'puppeteer-core',
                'cheerio',
                'ws',
                'protobufjs',
                '@nut-tree-fork/nut-js'
              ]
            }
          }
        }
      },
      {
        // Preload script
        entry: 'src/preload/simple-preload.js',
        onstart(options) {
          // Notify the Renderer process to reload the page when the Preload scripts build is complete
          options.reload();
        },
        vite: {
          build: {
            outDir: 'dist-electron',
            lib: {
              entry: 'src/preload/simple-preload.js',
              formats: ['cjs'],
              fileName: () => 'simple-preload.js'
            },
            rollupOptions: {
              external: ['electron']
            }
          }
        }
      },
    ]),
  ],
  root: 'src/renderer',
  base: './',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/renderer/index.html')
      }
    }
  },
  server: {
    port: 5174,
    strictPort: true
  }
});