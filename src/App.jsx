// src/App.jsx
/* Le composant principal de l'application, qui sert de conteneur pour les autres composants.
 *
- Located in src/App.jsx. Defines the top-level routing using React Router v6.
- Imports Layout component and all page components:
 (HomePage, PropertiesPage, AddProperty, EditProperty, PropertyDetail, About, Contact, NotFoundPage).
- Uses <Routes> and nested <Route> to attach Layout to the path "/" and then defines child routes:
- index ("/") renders <HomePage />.
- "/properties" renders <PropertiesPage />.
- "/add" renders <AddProperty />.
- "/edit/:id" renders <EditProperty /> (id param used to fetch specific property).
- "/property/:id" renders <PropertyDetail />.
- "/about" renders <About />.
- "/contact" renders <Contact />.
- "*" matches any other route and renders <NotFoundPage />.
 * 
 * Two new routes under our existing <Routes> so that /about and /contact render the new pages. 
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
import About from './pages/About.jsx'          
import Contact from './pages/Contact.jsx'     
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      {
      /* Root path uses Layout for all nested routes 
      The first <Route> has a path of / and renders the Layout component.
      */
      }
      <Route path="/" element={<Layout />}>
        {/* Index route = "/" → HomePage 
         The HomePage component route does not have a path but has an index attribute. 
         That specifies this route as the default route for the parent route, which is /.
        */}
        <Route index element={<HomePage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="add" element={<AddProperty />} />
        <Route path="edit/:id" element={<EditProperty />} />
        <Route path="property/:id" element={<PropertyDetail />} />

        {/* New “About” and “Contact” routes */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Catch-all for any unmatched route -
        "*" matches any other route and renders <NotFoundPage />.*/}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
