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

/**
 * PropertyList.jsx
 *
 * Wrapper voor een grid van PropertyListItem children.
 * - props.title: string voor de sectiekop.
 * - props.children: één of meerdere <PropertyListItem /> componenten die vanuit de ouderpagina worden meegegeven.
 *
 * Deze component toont een sectietitel bovenaan en daaronder een responsief grid met de children.
 * Layout:
 *   - Op kleine schermen: 1 kolom
 *   - Op medium en grotere schermen: 3 kolommen (via Tailwind's md:grid-cols-3)
 *
 * Props:
 *   - title (string): De titel die boven het grid wordt weergegeven.
 *   - children (React nodes): Meestal een set <PropertyListItem> componenten.
 *
 * Tailwind classes:
 *   - container mx-auto py-6 px-4: centreert de inhoud en voegt padding toe.
 *   - text-3xl font-bold text-red-600 mb-6: stijlt de sectietitel opvallend rood en groot.
 *   - grid gap-6 md:grid-cols-3: maakt een grid met ruimte tussen de items en 3 kolommen op medium schermen.
 */

import React from 'react'
import PropTypes from 'prop-types'

function PropertyList(props) {
  return (
    <section className="container mx-auto py-6 px-4">
      <h2 className="text-3xl font-bold text-red-600 mb-6">
        {props.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
          {props.children}
      </div>
    </section>
  )
}

PropertyList.propTypes = {
  title: PropTypes.string.isRequired,      // Vereist: titel van de sectie
  children: PropTypes.node.isRequired      // Vereist: één of meerdere React nodes als inhoud van het grid
}

export default PropertyList
