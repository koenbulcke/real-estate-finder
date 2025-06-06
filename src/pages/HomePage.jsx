/**
 * HomePage.jsx
 *
 * The “Accueil” (home) page.  
 * Features:
 *   1) Fetch all properties from JSON Server via GET  
 *   2) Sort by ID descending (so newest appear first)  
 *   3) Display only the first 3 properties as “Annonces récentes”  
 *   4) Display a HeroBanner at top and an InfoSection below  
 *   5) Show a spinner while loading, and error messages if fetch fails  
 *
 * Uses:
 *   - React useState for local state (properties, loading, error)  
 *   - React useEffect to perform the fetch once on component mount  
 *   - <Spinner> to indicate loading  
 *   - <PropertyList> and <PropertyListItem> for the 3 cards  
 */

import React, { useEffect, useState } from 'react'
import PropertyList from '../components/PropertyList.jsx'
import PropertyListItem from '../components/PropertyListItem.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import InfoSection from '../components/InfoSection.jsx'
import Spinner from '../components/Spinner.jsx'

function HomePage() {
  // All properties fetched from the API
  const [properties, setProperties] = useState([])
  // Loading state (true while fetch is in progress)
  /*
Een React Hook is een speciale functie die je in functionele componenten 
van React gebruikt om extra functionaliteit toe te voegen, 
zoals het beheren van state (gegevens die kunnen veranderen), 
het uitvoeren van side effects (zoals data ophalen), of het delen van logica tussen componenten.

Voorbeelden van veelgebruikte hooks:
 * useState — Hiermee kun je lokale state toevoegen aan een functioneel component.
 * useEffect — Hiermee kun je side effects uitvoeren, zoals data ophalen of een event listener toevoegen.
 * useContext — Hiermee kun je context (globale data) gebruiken in je component.

  useState
  ------------------
    is een React Hook waarmee je lokale state (gegevens die kunnen veranderen)
    in een functioneel component kunt beheren.
    Hoe werkt het?
    Je roept useState aan met een beginwaarde, bijvoorbeeld useState(null) of useState([]).
    Het geeft een array terug met twee elementen:
    De huidige waarde van de state.
    Een functie om die waarde aan te passen.
  *
  */
  const [loading, setLoading] = useState(true)
  // Error message, if any fetch error occurs
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch properties from JSON Server
    fetch('http://localhost:8000/properties')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching properties from server')
        }
        return res.json()
      })
      .then((data) => {
        // Sort by ID descending
        const sortedDesc = [...data].sort((a, b) => b.id - a.id)
        setProperties(sortedDesc)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // While loading data, show spinner
  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <Spinner color="#dc2626" size={60} loading={true} />
        <p>Loading recent listings…</p>
      </div>
    )
  }

  // If there was a fetch error, display an error message
  if (error) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  // Take the first 3 properties (most recent) to display
  const recentThree = properties.slice(0, 3)

  return (
    <div>
      {/* Hero banner at top */}
      <HeroBanner />

      {/* Info cards for buyers/sellers */}
      <InfoSection />

      {/* Recent properties list */}
      <PropertyList title="Annonces récentes">
        {recentThree.map((property) => (
          <PropertyListItem key={property.id} property={property} />
        ))}
      </PropertyList>
    </div>
  )
}

export default HomePage
