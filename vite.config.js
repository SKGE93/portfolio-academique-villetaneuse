import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = nom du repo GitHub, indispensable pour GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-academique-villetaneuse/',
})
