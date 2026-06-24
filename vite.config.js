import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        toneva: resolve(__dirname, 'toneva.html'),
        trichovva: resolve(__dirname, 'trichovva.html'),
        'clinical-evidence': resolve(__dirname, 'clinical-evidence.html'),
        'for-professionals': resolve(__dirname, 'for-professionals.html'),
        'register-clinic': resolve(__dirname, 'register-clinic.html'),
      },
    },
  },
})
