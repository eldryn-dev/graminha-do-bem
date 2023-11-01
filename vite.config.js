import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/graminha-do-bem/',
  build: {
    outDir: 'dist' // Nome da pasta de saída, por padrão é 'dist'
  }
});
