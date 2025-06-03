/**
 * PropertiesPage.jsx
 *
 * “All Listings” page (route: /properties).
 * Features:
 *   1) Fetch all properties from JSON Server via GET
 *   2) Sort by ID descending
 *   3) Display all properties in a <PropertyList> grid
 *   4) Show spinner while loading and error message on failure
 *
 * Uses:
 *   - useState and useEffect for fetch lifecycle
 *   - Spinner for loading indicator
 *   - PropertyList and PropertyListItem for display
 */

import React, { useEffect, useState } from 'react'
import PropertyList from '../components/PropertyList.jsx'
import PropertyListItem from '../components/PropertyListItem.jsx'
import Spinner from '../components/Spinner.jsx'

function PropertiesPage() {
  // Array holding all properties from API
  const [properties, setProperties] = useState([])
  // Tracking loading state
  const [loading, setLoading] = useState(true)
  // Tracking any fetch error
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch from server
    fetch('http://localhost:8000/properties')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching all properties')
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

  // Show spinner while loading
  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <Spinner color="#dc2626" size={60} loading={true} />
        <p>Loading all listings…</p>
      </div>
    )
  }

  // Show error message if fetch fails
  if (error) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  return (
    <PropertyList title="Toutes les annonces">
      {properties.map((property) => (
        <PropertyListItem key={property.id} property={property} />
      ))}
    </PropertyList>
  )
}

export default PropertiesPage
