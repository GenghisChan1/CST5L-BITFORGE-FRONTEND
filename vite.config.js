import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
    allowedHosts: [
      'cst5l-bitforge-frontend-production.up.railway.app',
      'localhost'
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true
  }
})
