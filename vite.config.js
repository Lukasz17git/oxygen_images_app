import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

// load env variables to get base url
process.env = Object.assign(process.env, loadEnv('production', process.cwd(), ''));

// https://vitejs.dev/config/
export default defineConfig({
   base: '/oxygen_images_app/',
   experimental: {
      renderBuiltUrl(filename) {
         return process.env.APP_URL + '/oxygen_images_app/' + filename;
      }
   },
   plugins: [react(), viteCompression(), visualizer({ open: true, gzipSize: true, brotliSize: true })],
   build: {
      assetsInlineLimit: 0,
   },
})
