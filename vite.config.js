import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig( {
  base: "/ReactJs-To-do-list-website/",
  plugins: [react()],
  server: {
    host: true,
  }
} )
