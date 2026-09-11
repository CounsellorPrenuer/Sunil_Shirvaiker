import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Sunil_Shirvaiker/',
  plugins: [react()],
  server: {
    proxy: {
      '/api/sanity': {
        target: 'https://4cry3z15.api.sanity.io',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sanity/, '')
      }
    }
  }
})
