import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "org-victim-v3",
    project: "javascript-react"
  })],

  server: {
    host: '0.0.0.0',  // This makes Vite listen on all network interfaces
    port: 3000,        // Ensure the port matches the Docker internal port
  },

  build: {
    sourcemap: true
  }
})