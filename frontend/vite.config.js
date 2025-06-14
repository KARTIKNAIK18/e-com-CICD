import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure this matches your Ingress path
  css: {
    devSourcemap: false
  },
  server: {
    host: '0.0.0.0',      // Accept external connections
    port: 5174,           // Ensure Kubernetes routes traffic correctly
    strictPort: true,     // Fail if port 5174 is unavailable
    allowedHosts: ['ecom-easy']  // ✅ Explicitly allow the hostname
  }
})
