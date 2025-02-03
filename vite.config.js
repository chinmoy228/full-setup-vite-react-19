import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import PluginObject from 'babel-plugin-react-compiler';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [[PluginObject], tailwindcss(), react()],
  server: {
    port: 3000,
  },
})
