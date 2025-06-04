/**
 * AddProperty.jsx
 *
 * Page for adding a new property (route: /add).  
 * Features:
 *   1) Controlled form using React useState for each input  
 *   2) Client-side validation: all fields required, price must be > 0  
 *   3) On form submit, send POST request to JSON Server  
 *   4) Show success message and redirect after 1 second  
 *   5) Show error message on failure  
 *
 * Uses:
 *   - useState for formData, error, success  
 *   - useNavigate to programmatically redirect upon success  
 *   - Spinner (optional) if desired to show loading during POST  
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner.jsx'

function AddProperty() {
  // initialForm: default values for the form fields
  const initialForm = {
    title: "",
    location: "",
    price: "",
    description: ""
  }
  // formData holds current input values
  const [formData, setFormData] = useState(initialForm)
  // error holds any validation or server error message
  const [error, setError] = useState("")
  // success indicates whether POST succeeded
  const [success, setSuccess] = useState(false)
  // loading indicates whether POST is in progress
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  /**
   * handleChange(e)
   * ----------------
   * Updates formData state whenever any input changes.
   * Uses the input’s name attribute to update the correct field.
   */
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  /**
   * handleClear()
   * -------------
   * Resets the form fields to initialForm, clears error and success states.
   */
  const handleClear = () => {
    setFormData(initialForm)
    setError("")
    setSuccess(false)
  }

  /**
   * handleSubmit(e)
   * ----------------
   * Validates inputs, then sends a POST request to JSON Server.
   * On success, shows a success message and redirects to home after 1s.
   * On error, displays the error message.
   */

  // Javascript arrow function equivalent: 
  //const handleSubmit = (e) => {
  /**
   * Handelt het indienen van het formulier af voor het toevoegen van een nieuwe woning.
   *
   * Voert client-side validatie uit op de invoervelden (titel, locatie, prijs, beschrijving).
   * Geeft een foutmelding als velden ontbreken of als de prijs ongeldig is.
   * Stuurt bij geldige invoer een POST-verzoek naar de backend om de woning toe te voegen.
   * Zet een loading-status tijdens het verzoek en toont succes- of foutmeldingen.
   * Navigeert na succesvol toevoegen automatisch terug naar de homepage.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Het submit-event van het formulier.
   */
  function handleSubmit(e) {
    e.preventDefault()

    // Destructure for easy checking
    const { title, location, price, description } = formData

    // Client-side validation
    if (!title || !location || !price || !description) {
      setError("⚠️ All fields are required.")
      setSuccess(false)
      return
    }
    const parsedPrice = parseFloat(price)
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setError("⚠️ Price must be a number greater than 0.")
      setSuccess(false)
      return
    }

    // If validation passes, send POST
    setLoading(true)
    fetch("http://localhost:8000/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      /*
       * De JSON.stringify functie in JavaScript zet een JavaScript-object om naar een JSON-string.
       * Nodig als je data wilt versturen via bijvoorbeeld fetch of XMLHttpRequest.
       * JSON is een tekstformaat dat makkelijk uitgewisseld kan worden tussen server en client.
       */ 
      body: JSON.stringify({
        title,
        location,
        price: parsedPrice,
        description
      })
    })
      .then((res) => {
        // Zet loading weer uit zodra er een response is ontvangen
        setLoading(false)
        if (!res.ok) {
          throw new Error("Failed to add property.")
        }
        return res.json()
      })
      .then((newProperty) => {
        setError("")
        setSuccess(true)
        // Redirect na 1 seconde
        setTimeout(() => {
          navigate("/")
        }, 1000)
      })
      .catch((err) => {
        setLoading(false)
        console.error(err)
        setError(err.message)
        setSuccess(false)
      })
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto">
        {/* Top red banner */}
        <div className="bg-red-600 p-4">
          <h2 className="text-2xl font-semibold text-white">
            Ajouter une propriété
          </h2>
        </div>

        <div className="p-6 space-y-4">
          {/* Show server/form error if any */}
          {error && <p className="text-red-600 font-medium">{error}</p>}

          {/* Show success message when property is added */}
          {success && (
            <p className="text-green-600 font-medium">
              ✅ Property added successfully! Redirecting…
            </p>
          )}

          {/* Show spinner if loading POST */}
          {loading && <Spinner color="#dc2626" size={50} loading={true} />}

          {/* Form fields */}
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
              min="0"                  /* <=== KBU: This prevents the spinner going below 0*/
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

            {/* Submit & Clear buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Add Property
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProperty
