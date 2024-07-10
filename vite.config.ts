import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import macroUse from './plugins/vite-plugin-macro-use'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macroUse({ OTHER: true })],
})
