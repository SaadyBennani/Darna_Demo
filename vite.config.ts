import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Darna_Demo/' : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
