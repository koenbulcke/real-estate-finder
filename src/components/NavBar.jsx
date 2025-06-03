/**
 * NavBar.jsx
 *
 * Site-wide navigation bar in a red background.
 * Uses React Router’s NavLink to highlight the active link.
 *
 * We have extended it to include:
 *   • Accueil (/)
 *   • Annonces (/properties)
 *   • Ajouter (/add)
 *   • About (/about)      ← NEW LINK
 *   • Contact (/contact)  ← NEW LINK
 *
 * The “active” link has bg-black and white text; others stay red with hover effect.
 */

import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo + Site Name */}
        <NavLink to="/" className="flex items-center space-x-2">
          <span className="text-3xl">🏡</span>
          <span className="text-2xl font-bold">Real Estate Finder</span>
        </NavLink>

        {/* Navigation Tabs */}
        <div className="flex space-x-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded text-sm font-medium ${
                isActive
                  ? "bg-black text-white"
                  : "bg-red-500 text-white hover:bg-red-700"
              }`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/properties"
            className={({ isActive }) =>
              `px-4 py-2 rounded text-sm font-medium ${
                isActive
                  ? "bg-black text-white"
                  : "bg-red-500 text-white hover:bg-red-700"
              }`
            }
          >
            Annonces
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `px-4 py-2 rounded text-sm font-medium ${
                isActive
                  ? "bg-black text-white"
                  : "bg-red-500 text-white hover:bg-red-700"
              }`
            }
          >
            Ajouter
          </NavLink>

          {/* NEW: About link */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded text-sm font-medium ${
                isActive
                  ? "bg-black text-white"
                  : "bg-red-500 text-white hover:bg-red-700"
              }`
            }
          >
            About
          </NavLink>

          {/* NEW: Contact link */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded text-sm font-medium ${
                isActive
                  ? "bg-black text-white"
                  : "bg-red-500 text-white hover:bg-red-700"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
