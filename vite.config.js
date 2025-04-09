import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,  // чтобы не импортировать describe/it/expect в каждом файле
    environment: 'jsdom',  // эмулирует браузерное окружение
    setupFiles: './src/tests/setup.js',  // файл с настройками
  },
})
