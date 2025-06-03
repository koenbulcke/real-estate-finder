/**
 * /src/main.jsx
Le point d'entrée de l'application. C'est ici que React est rendu dans le DOM.
 *  * 
 * @file main.jsx
 * @description Entry point for the React application. This file initializes the React app,
 * wraps the main <App /> component with <BrowserRouter> to enable client-side routing,
 * and renders the application into the root DOM element. It also applies global styles from index.css.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // This enables page navigation
import App from './App.jsx'
import './index.css' // Tailwind styles

// This renders our React app inside the <div id="root"> in index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Enable routing between pages */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)