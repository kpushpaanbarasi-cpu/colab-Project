import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the built site work on Netlify, Vercel or any static host.
export default defineConfig({
  plugins: [react()],
  base: './',
})
