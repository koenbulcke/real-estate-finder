/**
 * /src/main.jsx
Le point d'entrée de l'application. C'est ici que React est rendu dans le DOM.
 *  * 
 * @file main.jsx
 * @description Entry point for the React application. This file initializes the React app,
 * wraps the main <App /> component with <BrowserRouter> to enable client-side routing,
 * and renders the application into the root DOM element.
 * It also applies global styles from index.css.
 *
 * Entry point of the React application.  
 * - Imports React, ReactDOM, BrowserRouter, and App.  
 * - Imports index.css for Tailwind.  
 * - Renders <App> wrapped in <BrowserRouter> for routing support.
 * 
 * KBU: One does not need to add additional <link> tags for Tailwind, 
 *  because we import Tailwind’s CSS from src/index.css inside main.jsx.
 */

// Import the core React library to use JSX and React features
import React from 'react'
// Import the ReactDOM client for rendering the app into the DOM
import ReactDOM from 'react-dom/client'
// Import BrowserRouter to enable client-side routing in the app
import { BrowserRouter } from 'react-router-dom'
// Import the main App component, which contains the application logic and UI
import App from './App.jsx'
// Import global styles, including Tailwind CSS, for consistent styling across the app
import './index.css'  // Import Tailwind CSS

// Render the React application into the root DOM element.
// - Renders the entire app inside the element with id 'root'.
ReactDOM.createRoot(document.getElementById('root')).render(
  // - Uses React.StrictMode for highlighting potential problems in development.
  // - Wraps <App /> with <BrowserRouter> to enable client-side routing.
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

/*
main.jsx
----------
* Doel: 
 ** Het startpunt van je React-applicatie.
* Wat het doet:
 ** Importeert React, ReactDOM en je hoofdcomponent App.
 ** Importeert globale stijlen (zoals Tailwind via index.css).
 ** Omhult App met BrowserRouter voor routing.
 ** Mount de hele React-app in het root DOM-element (document.getElementById('root')).
 ** Je past dit bestand zelden aan, behalve om providers toe te voegen (zoals Redux, Theme, enz.) of om te wijzigen hoe de app wordt opgestart.

App.jsx
-------
* Doel: 
 ** De rootcomponent die de structuur en routes van je app definieert.
* Wat het doet:
 ** Importeert al je pagina- en layoutcomponenten.
 ** Stelt de hoofd-navigatie en routing in met <Routes> en <Route>.
 ** Bevat de daadwerkelijke UI en logica van je app.

Samenvatting
------------
 => main.jsx = Start en rendert de app (entry point).
 => App.jsx = De hoofdcomponent die de UI en routing van je app definieert.
 => Je kunt main.jsx zien als de “launcher” en App.jsx als de “applicatie.”
*/