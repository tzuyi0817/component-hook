import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { pickerPackage, pdfCanvasPackage } from '../../internal/paths';
console.log({ pickerPackage });
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@component-hook/picker': `${pickerPackage}/src`,
      '@component-hook/pdf-canvas': pdfCanvasPackage,
    },
  },
});
