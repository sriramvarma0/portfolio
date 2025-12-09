import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',   // ✅ REQUIRED for your folder structure
  plugins: [react()],
  server: {
    port: 5173
  }
})
