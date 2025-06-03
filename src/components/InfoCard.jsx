/**
 * InfoCard.jsx
 *
 * A reusable “card” wrapper component that:
 *   1) Accepts a `bgColor` prop (Tailwind class) for background.  
 *   2) Wraps content passed in via `children`.  
 *
 * Use cases:
 *   • InfoSection (Buyer & Seller cards)  
 *   • Future cards for agents, promotions, etc.
 *
 * Props:
 *   - bgColor: string (e.g. "bg-gray-100", "bg-red-100")  
 *   - children: React nodes (JSX) to display inside the card  
 *
 * Default props:
 *   - bgColor defaults to "bg-gray-100" if not provided.
 */

import React from 'react'
import PropTypes from 'prop-types'

function InfoCard({ bgColor, children }) {
  return (
    <div className={`${bgColor} rounded-lg shadow-md p-6`}>
      {children}
    </div>
  )
}

InfoCard.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node
}

InfoCard.defaultProps = {
  bgColor: 'bg-gray-100'
}

export default InfoCard
