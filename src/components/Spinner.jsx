/**
 * Spinner.jsx
 *
 * A reusable loading spinner component using `react-spinners`.  
 * We choose the `ClipLoader` spinner by default (but you can pick any from https://www.davidhu.io/react-spinners/).  
 *
 * Props:
 *   - color (string): Hex or color name for the spinner  
 *   - size (number): Pixel size of the spinner  
 *   - loading (boolean): Whether to show the spinner or not  
 *
 * Usage example:
 *   <Spinner color="#dc2626" size={50} loading={true} />
 */

import React from 'react'
import PropTypes from 'prop-types'
import { ClipLoader } from 'react-spinners'

function Spinner({ color, size, loading }) {
  return (
    <div className="flex items-center justify-center py-8">
      {/* ClipLoader: takes color, size, loading boolean */}
      <ClipLoader color={color} size={size} loading={loading} />
    </div>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  loading: PropTypes.bool
}

Spinner.defaultProps = {
  color: "#dc2626",  // Tailwind red-600
  size: 50,
  loading: true
}

export default Spinner
