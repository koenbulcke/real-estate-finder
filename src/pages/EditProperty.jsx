/**
 * EditProperty.jsx
 *
 * Page to edit an existing property (route: /edit/:id).  
 * Features:
 *   1) Fetch the existing property data by ID via GET  
 *   2) Pre‐populate form fields with that data  
 *   3) Allow user to modify title, location, price, description  
 *   4) On form submit, send a PUT request to JSON Server  
 *   5) Provide a “Delete Property” button which issues a DELETE request  
 *   6) Use Spinner during both initial GET and during PUT/DELETE  
 *   7) Show success/error messages for PUT and DELETE  
 *   8) On successful update or delete, redirect accordingly  
 *
 * Uses:
 *   - useParams to extract ID from URL  
 *   - useEffect & useState for fetching and form state  
 *   - useNavigate for redirect  
 *   - Spinner for loading states  
 */

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner.jsx'

function EditProperty() {
  // Extract property ID from route params
  const { id } = useParams()
  const navigate = useNavigate()

  // formData holds current form fields for title, location, price, description
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: ""
  })
  // loadingInitial: true while we fetch existing property data
  const [loadingInitial, setLoadingInitial] = useState(true)
  // loadingSubmit: true while PUT or DELETE is in progress
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  // error message for fetch or PUT
  const [error, setError] = useState(null)
  // success flag after PUT
  const [success, setSuccess] = useState(false)

  /**
   * useEffect: Fetch property data on mount (or when `id` changes)
   */
  useEffect(() => {
    fetch(`http://localhost:8000/properties/${id}`)
      .then((res) => {
        if (res.status === 404) {
          throw new Error("Property not found")
        }
        if (!res.ok) {
          throw new Error("Error fetching property for edit")
        }
        return res.json()
      })
      .then((data) => {
        // Populate formData with existing values
        setFormData({
          title: data.title,
          location: data.location,
          price: data.price.toString(),
          description: data.description
        })
        setLoadingInitial(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoadingInitial(false)
      })
  }, [id])

  /**
   * handleChange(e)
   * ---------------
   * Updates formData whenever the user edits any field.
   */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  /**
   * handleSubmit(e)
   * ----------------
   * Issues a PUT request with updated data.  
   * Validates fields, then calls JSON Server.  
   * On success → sets success flag and redirects to /properties.  
   * On error → displays the error.
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)

    const { title, location, price, description } = formData
    // Simple client-side validation
    if (!title || !location || !price || !description) {
      setError("⚠️ All fields are required.")
      return
    }
    const parsedPrice = parseFloat(price)
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setError("⚠️ Price must be a number greater than 0.")
      return
    }

    // If validation passes, send PUT
    setLoadingSubmit(true)
    fetch(`http://localhost:8000/properties/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        location,
        price: parsedPrice,
        description
      })
    })
      .then((res) => {
        setLoadingSubmit(false)
        if (!res.ok) {
          throw new Error("Failed to update property")
        }
        return res.json()
      })
      .then((updatedProperty) => {
        setSuccess(true)
        // Redirect after short delay
        setTimeout(() => {
          navigate("/properties")
        }, 1000)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoadingSubmit(false)
      })
  }

  /**
   * handleDelete()
   * --------------
   * Prompts user for confirmation, then sends DELETE request.  
   * On success → redirect to /properties
   * On error → show error message
   */
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this property?")) {
      setLoadingSubmit(true)
      fetch(`http://localhost:8000/properties/${id}`, {
        method: "DELETE"
      })
        .then((res) => {
          setLoadingSubmit(false)
          if (!res.ok) {
            throw new Error("Failed to delete property")
          }
          navigate("/properties")
        })
        .catch((err) => {
          console.error(err)
          setError(err.message)
          setLoadingSubmit(false)
        })
    }
  }

  // If initial data is loading, show spinner
  if (loadingInitial) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <Spinner color="#dc2626" size={60} loading={true} />
        <p>Loading property details for edit…</p>
      </div>
    )
  }

  // If there was an error fetching existing data, show error
  if (error && !loadingSubmit) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto">
        {/* Header bar */}
        <div className="bg-red-600 p-4">
          <h2 className="text-2xl font-semibold text-white">Edit Property</h2>
        </div>

        <div className="p-6 space-y-4">
          {/* Error message if any */}
          {error && !loadingSubmit && (
            <p className="text-red-600 font-medium">{error}</p>
          )}

          {/* Success message on PUT success */}
          {success && (
            <p className="text-green-600 font-medium">
              ✅ Property updated successfully! Redirecting…
            </p>
          )}

          {/* Spinner during PUT or DELETE */}
          {loadingSubmit && <Spinner color="#dc2626" size={50} loading={true} />}

          {/* Edit form, controlled by formData state */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Property Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-lg p-3 focus:ring-2 focus:ring-red-400"
            />
            <input
              type="text"
              name="location"
              placeholder="Location (City & Neighborhood)"
              value={formData.location}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-lg p-3 focus:ring-2 focus:ring-red-400"
            />
            <input
              type="number"
              name="price"
              placeholder="Price (€)"
              value={formData.price}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-lg p-3 focus:ring-2 focus:ring-red-400"
            />
            <textarea
              name="description"
              placeholder="Detailed Description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full border-gray-300 border rounded-lg p-3 focus:ring-2 focus:ring-red-400"
            ></textarea>

            {/* Buttons: Update & Delete */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                disabled={loadingSubmit}
              >
                Update Property
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                disabled={loadingSubmit}
              >
                Delete Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProperty
