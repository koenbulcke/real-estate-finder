/**
 * InfoSection.jsx
 *
 * Toont twee “InfoCard”-componenten naast elkaar (op md+ schermen) of gestapeld (op mobiel).
 * Elke InfoCard gebruikt `bgColor` en geeft zijn inhoud door via `children`.
 *
 * Kaart 1: “Voor kopers”
 *   - Lichtgrijze achtergrond: "bg-gray-100"
 *   - Titel: “Voor kopers”
 *   - Tekst: “Ontdek de beste vastgoedadvertenties…”
 *   - Knop: “Bekijk woningen” linkt naar "/properties"
 *
 * Kaart 2: “Voor verkopers”
 *   - Lichtrode achtergrond: "bg-red-100"
 *   - Titel: “Voor verkopers”
 *   - Tekst: “Plaats uw advertentie…”
 *   - Knop: “Voeg een woning toe” linkt naar "/add"
 *
 * Gebruikt Tailwind grid:
 *   • grid gap-6 md:grid-cols-2
 *   • Voegt padding toe via container mx-auto py-8 px-4
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
