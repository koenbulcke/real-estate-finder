/**
 * About.jsx
 *
 * A simple “About” page for the Real Estate Finder application.
 * Provides some invented company/person information.
 *
 * Features:
 *   - H1: “About Real Estate Finder”
 *   - Paragraphs describing mission, background, etc.
 *   - A small “team” section with made-up names or roles
 *
 * Tailwind styling:
 *   - Container centered
 *   - Rounded card style for content area
 *   - Consistent red header bar
 */

import React from 'react'

function About() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* White card with shadow */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Red header bar */}
        <div className="bg-red-600 p-4">
          <h1 className="text-3xl font-bold text-white">About Real Estate Finder</h1>
        </div>

        {/* Body content */}
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            <strong>Real Estate Finder</strong> was founded in 2025 with a single mission:
            to help people in Luxembourg discover their dream homes, apartments, and garages easily.
            We believe that finding a new place to live should be straightforward, transparent, and—
            above all—tailored to your needs.
          </p>
          <p>
            Our platform allows buyers to browse up-to-date listings, compare features, and read detailed
            descriptions. For sellers, we provide a user-friendly interface to publish professional listings,
            complete with pricing, photos, and neighborhood information.
          </p>
          <p>
            Behind Real Estate Finder is a small but dedicated team of real estate enthusiasts and web developers.
            We continuously update our database, integrate the latest property trends, and ensure a responsive,
            modern user experience using React and Tailwind CSS.
          </p>
          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-red-600 mb-2">Our Team</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Koen Bulcke</strong> – Co-Founder & Lead Developer</li>
              <li><strong>Alice Dupont</strong> – Product Manager</li>
              <li><strong>Marc Martin</strong> – UX/UI Designer</li>
              <li><strong>Elena Rossi</strong> – Backend Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
