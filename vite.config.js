import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@layouts': path.resolve(__dirname, './src/alias/layouts'),
      '@views': path.resolve(__dirname, './src/alias/views'),
      '@utils': path.resolve(__dirname, './src/alias/utils'),
      '@components': path.resolve(__dirname, './src/alias/components')
    }
  }
})
