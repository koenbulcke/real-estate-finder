/**
 * Displays detailed information for a single property.
 *
 * Fetches the property ID from the URL parameters using `useParams`,
 * retrieves the property data via `getPropertyById`, and renders
 * the full details including title, location, price, and description.
 * If the property is not found, displays a fallback message.
 *
 * @component
 * @returns {JSX.Element} The rendered property detail page or a not found message.
 */

import { useParams, useNavigate } from 'react-router-dom'
import { getPropertyById, deleteProperty } from '../services/propertyService'

// This page displays the full details of a single property
function PropertyDetail() {
  const { id } = useParams() // Get property ID from the URL
  const navigate = useNavigate()
  const property = getPropertyById(Number(id)) // Look up property by ID

  // If property not found (invalid ID), show error
  if (!property) {
    return <p className="text-red-600">❌ Property not found.</p>
  }

  // Handle delete action
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this property?')) {
      deleteProperty(Number(id))
      navigate('/') // Go back to home page
    }
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
      <p className="text-gray-700 mb-1">📍 {property.location}</p>
      <p className="text-green-600 font-semibold mb-4">${property.price}</p>
      <p className="mb-4">{property.description}</p>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        🗑️ Delete Property
      </button>
    </div>
  )
}

export default PropertyDetail
