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


/**
 * InfoCard.jsx
 *
 * Reusable card wrapper. 
 * - props.bgColor: Tailwind CSS background class (e.g. "bg-gray-100" or "bg-red-100").
 * - props.children: any nested JSX content to display inside the card.
 */

import React from 'react'
import PropTypes from 'prop-types'

function InfoCard(props) {
  return (
    <div className={`${props.bgColor} rounded-lg shadow-md p-6`}>
      {/* Render whatever was passed between <InfoCard>…</InfoCard> */}
      {props.children}
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
