import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    historyApiFallback: true, // Redirige todas las rutas a index.html en el modo de desarrollo
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: {
      '/formulario-comunero': '/index.html', // Redirige en producción
    },
  },
});
