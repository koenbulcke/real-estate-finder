import { useEffect, useState } from 'react'
import { getProperties } from '../services/propertyService'
import PropertyCard from '../components/PropertyCard'

// Home page: shows a list of properties available
function Home() {
  const [properties, setProperties] = useState([])

  // This loads the properties from the "fake backend" when the page loads
  useEffect(() => {
    setProperties(getProperties())
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {/* We loop through the property list and show a card for each one */}
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}

export default Home
