import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  content: [
    // './src/**/*.{html,js}',
    // 'node_modules/preline/dist/*.js',
  ],
  plugins: [react(),
  // require('preline/plugin'),
  ],
})
