import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: ['billlessamerica.com', '.billlessamerica.com', true],
  },
  server: {
    allowedHosts: ['billlessamerica.com', '.billlessamerica.com', true],
  },
});
