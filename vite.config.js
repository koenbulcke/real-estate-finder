// vite.config.js
// Fichier de configuration pour Vite. (exemple: ajouter des alias)
/*
Vite est un outil de build et de développement ultra-
rapide créé par Evan You (le créateur de Vue.js).
Il est conçu pour améliorer l'expérience des développeurs
en offrant des temps de démarrage et de rechargement
extrêmement rapides.
Avantages de Vite pour React
•Démarrage instantané : Le serveur de développement
démarre en quelques millisecondes.
•Rechargement ultra-rapide : Les modifications sont
reflétées instantanément dans le navigateur.
•Support natif de JSX et TypeScript : Aucune
configuration supplémentaire n'est nécessaire.
*/
// Importeer de defineConfig functie uit het 'vite' pakket
import { defineConfig } from 'vite'
// Importeer de officiële React plugin voor Vite
import react from '@vitejs/plugin-react'

// Exporteer de Vite configuratie met behulp van de defineConfig functie
export default defineConfig({
  // Voeg de React plugin toe aan de lijst met plugins die door Vite worden gebruikt
  plugins: [react()],
})