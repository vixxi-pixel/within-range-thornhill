import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import base44Plugin from '@base44/vite-plugin'

export default defineConfig({
  base: '/within-range-thornhill/',
  plugins: [react(), base44Plugin()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})