import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { basePath } from './basePath'

// https://vitejs.dev/config/
export default defineConfig({
   base: basePath,
   plugins: [react(), viteCompression(), visualizer({ open: true, gzipSize: true, brotliSize: true })],
   build: {
      assetsInlineLimit: 0,
   },
})
