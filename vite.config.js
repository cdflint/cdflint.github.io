import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        // Resolve node_modules-relative imports in .less files (bootstrap, font-awesome, leaflet, etc.)
        paths: ['node_modules']
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
