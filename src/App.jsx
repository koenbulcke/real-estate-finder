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

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddProperty from './pages/AddProperty'
import PropertyDetail from './pages/PropertyDetail'
import MainLayout from './layouts/MainLayout'

/* This is the root component that sets up routing for the app
 * This App component defines the routes (URLs) for the application.
 * Each Route loads a different "page" component.
 */
function App() {
  return (
    <MainLayout>
      <Routes>
        {/* The home page shows all properties */}
        <Route path="/" element={<Home />} />
        
        {/* This page has a form to add a property */}
        <Route path="/add" element={<AddProperty />} />
        
        {/* This page shows the detail of a specific property by ID */}
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </MainLayout>
  )
}

export default App
