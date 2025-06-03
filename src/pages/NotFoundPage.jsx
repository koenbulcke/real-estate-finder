/**
 * NotFoundPage.jsx
 *
 * A catch-all 404 page.  
 * If user navigates to an undefined route, this component will render.  
 * Provides a link back to the home page.
 */

import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-6">404</h1>
      <p className="text-xl mb-4">Oups ! Page non trouvée.</p>
      <p className="mb-6">La page que vous recherchez n’existe pas.</p>
      <Link
        to="/"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
      >
        Retour à l’accueil
      </Link>
    </div>
  )
}

export default NotFoundPage
