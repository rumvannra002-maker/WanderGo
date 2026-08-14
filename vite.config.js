import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: '/WanderGo/', // ត្រូវដាក់វានៅទីនេះ (ក្រៅ plugins)
  plugins: [
    tailwindcss(),
    react()
  ],
})