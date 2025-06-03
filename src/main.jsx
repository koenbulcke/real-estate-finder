/**
 * /src/main.jsx
Le point d'entrée de l'application. C'est ici que React est rendu dans le DOM.
 *  * 
 * @file main.jsx
 * @description Entry point for the React application. This file initializes the React app,
 * wraps the main <App /> component with <BrowserRouter> to enable client-side routing,
 * and renders the application into the root DOM element. It also applies global styles from index.css.
 */

/**
 * main.jsx
 *
 * Entry point of the React application.  
 * - Imports React, ReactDOM, BrowserRouter, and App.  
 * - Imports index.css for Tailwind.  
 * - Renders <App> wrapped in <BrowserRouter> for routing support.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'  // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
