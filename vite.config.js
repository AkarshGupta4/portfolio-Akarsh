import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      includePublic: true,
      png: {
        quality: 70
      },
      jpeg: {
        quality: 70
      },
      jpg: {
        quality: 70
      },
      webp: {
        quality: 70
      },
      avif: {
        quality: 50
      },
      svg: {
        multipass: true
      }
    })
  ],
})
