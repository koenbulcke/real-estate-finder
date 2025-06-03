// src/App.jsx
//Le composant principal de l'application, qui sert de conteneur pour les autres composants.

/**
 * 
 * Différentes fonctionnalités:
•installation et utilisation de Tailwind CSS
•composants
•props
•gestion des états
•routing et paramètres
•retours JSON
•formulaires
•fonctionnalités CRUD
•consommer des API
•entre autres…

Suivez les différentes étapes ici:
https://tailwindcss.com/docs/installation/using-vite
 * 
 * npm install installs installs everything listed in your package.json file: 
 * react
 * react-router-dom
 * vite
 * tailwindcss, etc.
 * 
 * 
 * 
*/

/**
 * App.jsx
 *
 * Central route configuration using React Router v6.
 * We have a Layout component at the root, which renders NavBar + <Outlet>.
 *
 * We are now adding two new pages:
 *   - /about    → About page
 *   - /contact  → Contact page
 *
 * The route tree is:
 *   /              → HomePage
 *   /properties    → PropertiesPage
 *   /add           → AddProperty
 *   /edit/:id      → EditProperty
 *   /property/:id  → PropertyDetail
 *   /about         → About
 *   /contact       → Contact
 *   *              → NotFoundPage
 * 
 * 
 *  two new routes under our existing <Routes> so that /about and /contact render the new pages. 
 *
 * 
 * 
 * 
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import PropertiesPage from './pages/PropertiesPage.jsx'
import AddProperty from './pages/AddProperty.jsx'
import EditProperty from './pages/EditProperty.jsx'
import PropertyDetail from './pages/PropertyDetail.jsx'
import About from './pages/About.jsx'          // Newly imported
import Contact from './pages/Contact.jsx'      // Newly imported
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      {/* Root path uses Layout for all nested routes */}
      <Route path="/" element={<Layout />}>
        {/* Index route = "/" → HomePage */}
        <Route index element={<HomePage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="add" element={<AddProperty />} />
        <Route path="edit/:id" element={<EditProperty />} />
        <Route path="property/:id" element={<PropertyDetail />} />

        {/* New “About” and “Contact” routes */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Catch-all for any unmatched route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
