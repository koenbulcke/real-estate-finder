/**
 * Contact.jsx
 *
 * Een eenvoudige “Contact” pagina voor Real Estate Finder.
 * Bevat de hoofdcontactpersoon (Koen Bulcke) met e-mail en telefoon.
 *
 * Tailwind styling:
 *   - Container gecentreerd
 *   - Rode headerbalk
 *   - Witte kaart met schaduw voor de inhoud
 */

import React from 'react'

function Contact() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* White card with a red header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
        <div className="bg-red-600 p-4">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        </div>
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            We’d love to hear from you! Whether you have questions about listings, need technical support,
            or simply want to share feedback, feel free to reach out to our main contact:
          </p>
          <div className="bg-gray-100 rounded-lg p-4">
            <p>
              <span className="font-semibold">Name:</span> Koen Bulcke
            </p>
            <p>
              <span className="font-semibold">Email:</span> <a href="mailto:koen.bulcke@gmail.com" className="text-red-600 hover:underline">koen.bulcke@gmail.com</a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> <a href="tel:+32472398090" className="text-red-600 hover:underline">+32 472 39 80 90</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
