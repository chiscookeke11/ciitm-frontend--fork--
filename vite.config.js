import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { backend_Url } from './src/utils/constants';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: backend_Url, // Proxy API requests to backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Default output directory for Vite
    sourcemap: true, // Enable source maps for debugging
  },
  resolve: {
    alias: {
      '@': '/src', // Shorten import paths using alias
    },
  },
});
