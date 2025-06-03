// vite.config.js
// Fichier de configuration pour Vite. (exemple: ajouter des alias)

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Export as native ESM
export default defineConfig({
  plugins: [react()],
})