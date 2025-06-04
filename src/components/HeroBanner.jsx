/**
 * HeroBanner.jsx
 *
 * A prominent red banner just below the NavBar.  
 * Contains:
 *   - A large heading: “Trouvez votre nouvelle maison”  
 *   - A subheading: “Parcourez les meilleures annonces immobilières”  
 *
 * Tailwind styling:
 *   • bg-red-600 => red background  
 *   • text-white => white text  
 *   • responsive text sizes for heading (text-4xl on mobile, text-5xl on md+).
 */

/**
 * HeroBanner.jsx
 *
 * A prominent red banner just below the NavBar.  
 * Contains:
 *   - A large heading: “Vind uw nieuwe huis”  
 *   - A subheading: “Bekijk de beste vastgoedadvertenties”  
 *
 * Tailwind styling:
 *   • bg-red-600 => red background  
 *   • text-white => white text  
 *   • responsive text sizes for heading (text-4xl on mobile, text-5xl on md+).
 */
import React from 'react'

function HeroBanner() {
  return (
    <section className="bg-red-600 text-white">
      <div className="container mx-auto text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          Vind uw nieuwe huis
        </h1>
        <p className="text-lg md:text-xl">
          Bekijk de beste vastgoedadvertenties
        </p>
      </div>
    </section>
  )
}

export default HeroBanner

