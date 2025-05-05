import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ai-text-humanizer/', // <-- IMPORTANT
  plugins: [react()],
});
