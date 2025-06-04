/**
 * Spinner.jsx
 *
 * Een herbruikbare laadspinner component met `react-spinners`.  
 * Standaard wordt de `ClipLoader` spinner gebruikt (maar je kunt ook andere kiezen van https://www.davidhu.io/react-spinners/).  
 *
 * Props:
 *   - color (string): Hex-waarde of kleurnaam voor de spinner  
 *   - size (number): Pixelgrootte van de spinner  
 *   - loading (boolean): Of de spinner getoond moet worden  
 *
 * Voorbeeld gebruik:
 *   <Spinner color="#dc2626" size={50} loading={true} />
 * 
 *The word “spinner” actually has two common uses in web/UIs:
    Loading Spinner (Animation)
        * This is the rotating icon or animated graphic that indicates “please wait.”
        * In React you’ll often see a component named <Spinner /> (or similar) that renders a CSS or SVG animation while data is loading.

    Input Spinner (Number-Input Controls)
        * When you use <input type="number" />, the browser normally adds tiny up/down arrows. Those arrows are called the “spinner controls” or simply “spinner.”
        * Clicking those arrows “spins” the value up or down by the step size (usually 1).

    So although they share the same name, they’re different things:
        * Loading Spinner = an animated indicator (“loading…”).
        * Input Spinner = the up/down arrow buttons on a number input.

  Because both involve “spinning” something (one visually spins an icon, the other spins the numeric value),
  developers commonly call both of them “spinners.”
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

/*
 * Een spinner in React is een visueel laadicoon 
(meestal een draaiende animatie) dat aangeeft dat er iets aan het laden is, 
bijvoorbeeld data van een server. 
Het wordt vaak gebruikt om gebruikers te laten zien dat ze even 
oeten wachten totdat een actie of verzoek is afgerond.
*/

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
