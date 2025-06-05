// src/pages/AddProperty.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";

/**
 * AddProperty.jsx
 *
 * Deze pagina laat de gebruiker toe om een nieuwe eigendom toe te voegen
 * aan de JSON-Server backend. 
 * Gebruik van:
 *  • useState voor formulier-invulvelden (title, location, price, description), 
 *    plus loading-, error- en success-vlaggen.
 *  • Een onSubmit handler om te valideren en te POST’en naar /properties.
 *  • Controlled inputs: elke <input> en <textarea> schrijft naar state via onChange,
 *    zodat de validatie steeds de actuele waarden ziet.
 */

function AddProperty() {
  // 1) Lokale state voor elk formulier-veld en UI-vlaggen
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");         // Als string bewaard, later omzetten naar number
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  // 2) Handler voor formulier-submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- Validatie: controleer dat geen enkel veld leeg is (na trimmen) ---
    if (
      title.trim() === "" ||
      location.trim() === "" ||
      price.trim() === "" ||
      description.trim() === ""
    ) {
      setError("⚠️ Alle velden zijn verplicht.");
      return;
    }

    // Zet price om naar een nummer en controleer dat het positief is
    const numericPrice = Number(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError("⚠️ Prijs moet een positief getal zijn.");
      return;
    }

    // Wis eventueel vorige foutmelding en toon de spinner
    setError("");
    setLoading(true);

    try {
      // 3) POST naar JSON-Server /properties endpoint
      const response = await fetch("http://localhost:8000/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          location: location.trim(),
          price: numericPrice,
          description: description.trim(),
        }),
      });

      if (!response.ok) {
        // Als server 4xx/5xx terugstuurt, gooi een error
        throw new Error(`Server reageerde met status ${response.status}`);
      }

      // Parse JSON om het nieuw aangemaakte object (met id) te krijgen
      const newProperty = await response.json();

      setLoading(false);
      setSuccess(true);

      // Optioneel: toon success-bericht even, daarna redirect
      setTimeout(() => {
        navigate("/properties"); // Verwijs naar de lijst van alle properties
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError("😞 Kon geen eigendom toevoegen. " + err.message);
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Koptekst */}
      <h2 className="bg-red-600 text-white px-6 py-4 text-2xl font-bold">
        Voeg een nieuwe eigendom toe
      </h2>

      {/* Formulier */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Foutmelding */}
        {error && <div className="text-red-600 font-medium">{error}</div>}

        {/* Succesmelding */}
        {success && (
          <div className="text-green-600 font-medium">
            Eigendom succesvol toegevoegd!
          </div>
        )}

        {/* TITEL VELD */}
        <div>
          <label className="block font-medium mb-1" htmlFor="title">
            Titel
          </label>
          <input
            id="title"
            type="text"
            value={title}                               // Controlled waarde
            onChange={(e) => setTitle(e.target.value)}  // Schrijf naar state bij elke wijziging
            className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Bijv. Modern appartement in Kirchberg"
          />
        </div>

        {/* LOCATIE VELD */}
        <div>
          <label className="block font-medium mb-1" htmlFor="location">
            Locatie
          </label>
          <input
            id="location"
            type="text"
            value={location}                              // Controlled waarde
            onChange={(e) => setLocation(e.target.value)} // Schrijf naar state bij elke wijziging
            className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Bijv. Kirchberg, Luxemburg Stad"
          />
        </div>

        {/* PRIJS VELD (spinner) */}
        <div>
          <label className="block font-medium mb-1" htmlFor="price">
            Prijs (€)
          </label>
          <input
            id="price"
            type="number"
            min="1"
            step="1"
            value={price}                               // Controlled waarde
            onChange={(e) => setPrice(e.target.value)}  // Schrijf naar state bij elke wijziging
            className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Bijv. 950000"
          />
        </div>

        {/* BESCHRIJVING VELD */}
        <div>
          <label className="block font-medium mb-1" htmlFor="description">
            Beschrijving
          </label>
          <textarea
            id="description"
            rows="4"
            value={description}                            // Controlled waarde
            onChange={(e) => setDescription(e.target.value)} // Schrijf naar state bij elke wijziging
            className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Gedetailleerde beschrijving van de eigendom..."
          />
        </div>

        {/* SUBMIT & CLEAR KNOPPEN */}
        <div className="flex justify-between">
          <button
            type="submit"
            disabled={loading} // Uitschakelen tijdens POST
            className={`bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Toevoegen…" : "Voeg eigendom toe"}
          </button>
          <button
            type="button"
            onClick={() => {
              // Wis alle velden en UI-vlaggen
              setTitle("");
              setLocation("");
              setPrice("");
              setDescription("");
              setError("");
              setSuccess(false);
            }}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-400 transition-colors"
          >
            Wissen
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProperty;
