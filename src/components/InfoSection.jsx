/**
 * InfoSection.jsx
 *
 * Renders two “InfoCard” components side-by-side (on md+ screens) or stacked (on mobile).  
 * Each InfoCard uses `bgColor` and passes its inner content via `children`.  
 *
 * Card 1: “Pour les acheteurs”  
 *   - Light gray background: "bg-gray-100"  
 *   - Title: “Pour les acheteurs”  
 *   - Text: “Découvrez les meilleures annonces immobilières…”  
 *   - Button: “Parcourir les propriétés” linking to "/properties"  
 *
 * Card 2: “Pour les vendeurs”  
 *   - Light red background: "bg-red-100"  
 *   - Title: “Pour les vendeurs”  
 *   - Text: “Publiez votre annonce…”  
 *   - Button: “Ajouter une propriété” linking to "/add"  
 *
 * Uses Tailwind grid:  
 *   • grid gap-6 md:grid-cols-2  
 *   • Adds padding via container mx-auto py-8 px-4  
 */

import React from 'react'
import InfoCard from './InfoCard.jsx'
import { Link } from 'react-router-dom'

function InfoSection() {
  return (
    <section className="container mx-auto py-8 px-4">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Buyer card */}
        <InfoCard bgColor="bg-gray-100">
          <h2 className="text-xl font-bold mb-2">Pour les acheteurs</h2>
          <p className="text-gray-700 mb-4">
            Découvrez les meilleures annonces immobilières et trouvez votre maison de rêve dès aujourd'hui.
          </p>
          <Link
            to="/properties"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Parcourir les propriétés
          </Link>
        </InfoCard>

        {/* Seller card */}
        <InfoCard bgColor="bg-red-100">
          <h2 className="text-xl font-bold mb-2">Pour les vendeurs</h2>
          <p className="text-gray-700 mb-4">
            Publiez votre annonce en quelques minutes et atteignez des milliers d'acheteurs potentiels.
          </p>
          <Link
            to="/add"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Ajouter une propriété
          </Link>
        </InfoCard>
      </div>
    </section>
  )
}

export default InfoSection
