import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/memorygame/',  // 🔥 Certifique-se de que o nome está correto!
});
