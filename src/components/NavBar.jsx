/**
 * NavBar.jsx
 *
 * Site-brede navigatiebalk met een rode achtergrond.
 * Gebruikt React Router’s NavLink om de actieve link te markeren.
 *
 * We hebben deze uitgebreid met:
 *   • Accueil (/)
 *   • Annonces (/properties)
 *   • Ajouter (/add)
 *   • Over (/about)      
 *   • Contact (/contact) 
 *
 * De “actieve” link heeft bg-black en witte tekst; de andere blijven rood met een hover-effect.
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

          {/* NIEUW: About link */}
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
