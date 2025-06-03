/**
 * PropertyListItem.jsx
 *
 * A single “card” for displaying a property summary in a list.  
 * Features:
 *   - Red banner on top with the property title  
 *   - White body containing:
 *       • location (with 📍 emoji)  
 *       • price in bold red  
 *       • description: initially truncated to 100 characters, followed by “… Plus”  
 *         and a toggle to expand (“Moins”) or collapse  
 *   - Gray footer with a “Voir détails” button that links to /property/:id  
 * 
 * Uses React’s useState to manage local `isExpanded` for “Plus/Moins” toggle.  
 *
 * Props:
 *   - property (object) with shape:
 *       • id (number or string)  
 *       • title (string)  
 *       • location (string)  
 *       • price (number or string)  
 *       • description (string)  
 */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function PropertyListItem({ property }) {
  // State: isExpanded = false means show truncated description; true means full description
  const [isExpanded, setIsExpanded] = useState(false)

  // Toggle function to flip isExpanded
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  // Truncated snippet (first 100 characters + ellipsis)
  const truncated = property.description.substring(0, 100) + '…'

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden">
      {/* Top banner in red with property title */}
      <div className="bg-red-600 p-4">
        <h3 className="text-lg font-semibold text-white">
          {property.title}
        </h3>
      </div>

      {/* Body: location, price, and description (toggleable) */}
      <div className="flex-grow p-4 space-y-2">
        <p className="text-gray-700">📍 {property.location}</p>
        <p className="text-red-600 font-bold">
          €{Number(property.price).toLocaleString()}
        </p>
        <p className="text-gray-600 text-sm">
          {isExpanded ? property.description : truncated}
          <button
            onClick={toggleExpand}
            className="ml-1 text-red-600 font-medium hover:underline focus:outline-none"
          >
            {isExpanded ? 'Moins' : 'Plus'}
          </button>
        </p>
      </div>

      {/* Footer: "Voir détails" button linking to detailed view */}
      <div className="p-4 bg-gray-50">
        <Link
          to={`/property/${property.id}`}
          className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-medium"
        >
          Voir détails
        </Link>
      </div>
    </div>
  )
}

PropertyListItem.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default PropertyListItem
