/**
 * PropertyDetail.jsx
 *
 * Page to display details of a single property (route: /property/:id).  
 * Features:
 *   1) Fetch the property by ID via GET  
 *   2) Show a spinner while loading and error if fetch fails  
 *   3) Display title, location, price, full description  
 *   4) Provide a “Delete Property” button (DELETE request)  
 *   5) After deletion, redirect to /properties  
 *
 * Uses:
 *   - useParams to read property ID from URL  
 *   - useEffect & useState for fetch lifecycle  
 *   - useNavigate to redirect after delete  
 *   - Spinner to show loading  
 */

/**
 * PropertyDetail.jsx
 *
 * Page to display details of a single property (route: /property/:id).  
 * Features:
 *   1) Fetch the property by ID via GET  
 *   2) Show a spinner while loading and error if fetch fails  
 *   3) Display title, location, price, full description  
 *   4) Provide a “Delete Property” button (DELETE request)  
 *   5) After deletion, redirect to /properties  
 *
 * Uses:
 *   - useParams to read property ID from URL  
 *   - useEffect & useState for fetch lifecycle  
 *   - useNavigate to redirect after delete  
 *   - Spinner to show loading  
 */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner.jsx'

function PropertyDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:8000/properties/${id}`)
      .then((res) => {
        if (res.status === 404) throw new Error("Property not found")
        if (!res.ok) throw new Error("Error loading property")
        return res.json()
      })
      .then((data) => {
        setProperty(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this property?")) {
      setDeleting(true)
      fetch(`http://localhost:8000/properties/${id}`, { method: "DELETE" })
        .then((res) => {
          setDeleting(false)
          if (!res.ok) throw new Error("Failed to delete property")
          navigate("/properties")
        })
        .catch((err) => {
          console.error(err)
          setError(err.message)
          setDeleting(false)
        })
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <Spinner color="#dc2626" size={60} loading={true} />
        <p>Loading property details…</p>
      </div>
    )
  }

  if (error && !deleting) {
    return (
      <div className="container mx-auto py-8 px-4">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="container mx-auto py-8 px-4">
        <p className="text-red-600">Property not found.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-red-600 p-4">
          <h2 className="text-2xl font-semibold text-white">
            {property.title}
          </h2>
        </div>
        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-gray-700">
            <span className="font-semibold">📍 Location:</span> {property.location}
          </p>
          <p className="text-red-600 font-bold">
            <span className="font-semibold">💰 Price:</span> €
            {Number(property.price).toLocaleString()}
          </p>
          <div>
            <span className="font-semibold">📝 Description:</span>
            <p className="mt-2 text-gray-600">{property.description}</p>
          </div>
        </div>
        {/* Footer with Delete button */}
        <div className="bg-gray-50 p-6 flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition-colors"
            disabled={deleting}
          >
            {deleting ? "Deleting…" : "Delete Property"}
          </button>
        </div>
      </div>
    </div>
  )
}

// Add this line at the very end:
export default PropertyDetail
