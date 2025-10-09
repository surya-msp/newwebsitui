import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  server: {
    fs: {
      strict: false
    }
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});
