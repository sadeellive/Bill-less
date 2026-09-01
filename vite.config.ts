import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs.plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['billlessamerica.com', '.billlessamerica.com', true],
  },
  server: {
    allowedHosts: ['billlessamerica.com', '.billlessamerica.com', true],
  },
});
