import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
   base: '/oxygen_images_app/',
   plugins: [react(), viteCompression(), visualizer({ open: true, gzipSize: true, brotliSize: true })],
   build: {
      assetsInlineLimit: 0,
   },
})
