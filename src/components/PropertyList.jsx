/**
 * PropertyList.jsx
 *
 * A wrapper component that arranges multiple <PropertyListItem> children in a responsive grid.  
 * It displays a section title (prop `title`) at the top, then lays out children in:
 *   - 1 column on small screens  
 *   - 3 columns on medium (& above) screens  
 *
 * Props:
 *   - title (string): The title to display above the grid  
 *   - children (React nodes): Typically a set of <PropertyListItem> components  
 *
 * Tailwind classes:
 *   - container mx-auto py-6 px-4 for centering and padding  
 *   - text-3xl font-bold text-red-600 mb-6 for the section title  
 *   - grid gap-6 md:grid-cols-3 for responsive layout  
 */

import React from 'react'
import PropTypes from 'prop-types'

function PropertyList({ title, children }) {
  return (
    <section className="container mx-auto py-6 px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-6">{title}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {children}
      </div>
    </section>
  )
}

PropertyList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default PropertyList
