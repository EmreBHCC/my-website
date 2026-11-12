import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './': GitHub Pages alt yolunda (kullanici.github.io/depo/) da çalışsın.
export default defineConfig({
  base: './',
  plugins: [react()],
});
