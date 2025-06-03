/**
 * AddProperty component
 *
 * @module AddProperty
 * @description
 * Deze React-component biedt een formulier waarmee gebruikers een nieuw vastgoedobject kunnen toevoegen.
 * Het beheert de formulierstatus, voert validatie uit op de invoervelden en geeft feedback aan de gebruiker.
 * Bij succesvolle toevoeging wordt de gebruiker automatisch doorgestuurd naar de homepage.
 *
 * @returns {JSX.Element} Een formulier voor het toevoegen van een nieuw vastgoedobject.
 *
 * @example
 * <AddProperty />
 *
 * @function
 *
 * @property {Object} initialForm - De standaardwaarden voor het formulier, bestaande uit lege velden voor titel, locatie, prijs en beschrijving.
 * @property {Object} formData - De huidige status van de formulierinvoer, beheerd via useState.
 * @property {Function} setFormData - Functie om de formulierstatus bij te werken.
 * @property {boolean} success - Geeft aan of het toevoegen van het vastgoedobject succesvol was.
 * @property {Function} setSuccess - Functie om de successtatus bij te werken.
 * @property {string} error - Bevat een foutmelding als de validatie mislukt.
 * @property {Function} setError - Functie om de foutstatus bij te werken.
 * @property {Function} handleChange - Handler die wordt aangeroepen bij wijziging van een invoerveld; werkt de formulierstatus bij.
 * @property {Function} handleClear - Handler die het formulier en eventuele fout- of succesmeldingen reset.
 * @property {Function} handleSubmit - Handler die het formulier valideert, het vastgoedobject toevoegt via addProperty, feedback geeft en na 1 seconde doorstuurt naar de homepage.
 *
 * @see {@link addProperty} - Servicefunctie die het vastgoedobject toevoegt aan de backend of opslag.
 * @see {@link useNavigate} - React Router hook om te navigeren tussen pagina's.
 *
 * @remarks
 * - Alle velden zijn verplicht; bij ontbrekende invoer wordt een foutmelding getoond.
 * - De prijs moet een getal groter dan nul zijn.
 * - Na succesvolle toevoeging wordt een succesmelding getoond en volgt automatische redirect.
 * - Het formulier is gestyled met Tailwind CSS-klassen.
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProperty } from '../services/propertyService'

function AddProperty() {
  const navigate = useNavigate()

  // Default form values
  const initialForm = {
    title: '',
    location: '',
    price: '',
    description: ''
  }

  // State to manage form inputs
  const [formData, setFormData] = useState(initialForm)

  // State for feedback messages
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Clear form manually
  const handleClear = () => {
    setFormData(initialForm)
    setError('')
    setSuccess(false)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate all fields are filled
    const { title, location, price, description } = formData
    if (!title || !location || !price || !description) {
      setError('⚠️ All fields are required.')
      setSuccess(false)
      return
    }

    // Validate price is a positive number
    const parsedPrice = parseFloat(price)
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setError('⚠️ Price must be a number greater than 0.')
      setSuccess(false)
      return
    }

    // If everything is valid, add the property
    addProperty({ ...formData, price: parsedPrice })

    // Show success message and clear errors
    setSuccess(true)
    setError('')

    // Redirect to homepage after 1 second
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Property</h2>

      {/* Feedback messages */}
      {error && <p className="mb-4 text-red-600">{error}</p>}
      {success && (
        <p className="mb-4 text-green-600 font-semibold">
          ✅ Property added successfully! Redirecting...
        </p>
      )}

      {/* The actual form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Action buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Property
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProperty
