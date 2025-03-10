import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Cambia este número al puerto que desees
  },
  build: {
    chunkSizeWarningLimit: 2000, // Aumenta el límite de advertencia (ajusta según sea necesario)
  },
});



