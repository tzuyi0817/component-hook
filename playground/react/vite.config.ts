import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { pdfCanvasPackage, pickerPackage } from '../../internal/paths';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@component-hook/picker': `${pickerPackage}/src`,
      '@component-hook/pdf-canvas': `${pdfCanvasPackage}/src`,
    },
  },
});
