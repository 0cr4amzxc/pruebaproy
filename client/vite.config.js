import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ruta base de la aplicación
  plugins: [react()],
});
