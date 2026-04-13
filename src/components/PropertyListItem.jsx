/**
 * PropertyListItem.jsx
 *
 * Een enkele “kaart” voor het weergeven van een samenvatting van een woning in een lijst.
 * Kenmerken:
 *   - Rode banner bovenaan met de titel van de woning
 *   - Witte body met:
 *       • locatie (met 📍 emoji)
 *       • prijs in vet rood
 *       • beschrijving: standaard ingekort tot 100 tekens, gevolgd door “… Plus”
 *         en een schakelaar om uit te vouwen (“Moins”) of in te klappen
 *   - Grijze footer met een “Voir détails” knop die linkt naar /property/:id
 *
 * Gebruikt React’s useState om lokale `isExpanded` status te beheren voor de “Plus/Moins” schakelaar.
 *
 * Props:
 *   - property (object) met structuur:
 *       • id (nummer of string)
 *       • title (string)
 *       • location (string)
 *       • price (nummer of string)
 *       • description (string)
 */

/**
 * Een "property" (woningobject) is een JavaScript-object dat alle relevante informatie bevat
 * over een woning die wordt weergegeven in de applicatie. Dit object wordt als prop
 * doorgegeven aan de PropertyListItem component en heeft de volgende structuur:
 *
 * @typedef {Object} Property
 * @property {number|string} id - Unieke identificatie van de woning, gebruikt voor routing en keying.
 * @property {string} title - De titel of naam van de woning, weergegeven in de rode banner.
 * @property {string} location - De locatie van de woning (stad, adres of regio), getoond met een 📍 emoji.
 * @property {number|string} price - De prijs van de woning, vetgedrukt en rood weergegeven.
 * @property {string} description - Een tekstuele beschrijving van de woning. Standaard wordt hiervan
 *   slechts een verkorte versie (eerste 100 tekens) getoond, met de mogelijkheid om deze uit te klappen.
 *
 * Dit object maakt het mogelijk om flexibel en gestructureerd woningdata te beheren en weer te geven
 * binnen de gebruikersinterface van de applicatie.
 */
// PropTypes definities voor PropertyListItem component.
// Hiermee wordt gecontroleerd of de juiste props worden doorgegeven aan de component.
// Dit helpt bij het voorkomen van bugs en maakt de code beter leesbaar en onderhoudbaar.

/**
 * Les props, c’est quoi?
Les props (abréviation de properties) permettent de transmettre des données 
d'un composant parent à un composant enfant.
Ce sont des paramètres qu'un composant reçoit et qu'il peut utiliser. 
Cela permet de rendre les composants dynamiques en leur passant différentes valeurs.

Un composant reçoit ses props sous forme d'un objet.

 */

/**
 * PropertyListItem.jsx
 *
 * Single property card showing:
 * - Title (in a red banner)
 * - Location, price (red, bold), and a truncated description (100 chars) with Plus/Moins toggle.
 * - Footer with "Voir détails" Link to `/property/:id`
 */

/**
 * PropertyListItem.jsx
 *
 * Single property card showing:
 * - Title (in a red banner)
 * - Location, price (red, bold), and a truncated description (100 chars) with Plus/Moins toggle.
 * - Footer with "Voir détails" Link to `/property/:id`
 */

/**
 * PropertyListItem.jsx
 *
 * Single property card showing:
 * - Title (in a red banner)
 * - Location, price (red, bold), and a truncated description (100 chars) with Plus/Moins toggle.
 * - Footer with "Voir détails" Link to `/property/:id`
 */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * PropertyListItem is een React-component die een enkele vastgoedvermelding weergeeft in een kaartstijl.
 *
 * @component
 * @param {Object} props - De eigenschappen die aan de component worden doorgegeven.
 * @param {Object} props.property - Het vastgoedobject dat weergegeven moet worden.
 * @param {string} props.property.id - Unieke identificatie van het vastgoed.
 * @param {string} props.property.title - Titel of naam van het vastgoed.
 * @param {string} props.property.location - Locatie van het vastgoed.
 * @param {number|string} props.property.price - Prijs van het vastgoed.
 * @param {string} props.property.description - Beschrijving van het vastgoed.
 *
 * @description
 * Deze component toont een overzicht van een vastgoedobject, inclusief titel, locatie, prijs en een (inklapbare) beschrijving.
 * De beschrijving wordt standaard ingekort tot 100 tekens, met een knop om de volledige tekst te tonen of te verbergen.
 * Onderaan bevindt zich een knop waarmee de gebruiker naar de detailpagina van het vastgoed kan navigeren.
 *
 * @example
 * <PropertyListItem property={{
 *   id: "1",
 *   title: "Luxe Appartement",
 *   location: "Amsterdam",
 *   price: 350000,
 *   description: "Dit prachtige appartement ligt in het hart van de stad en biedt alle moderne gemakken..."
 * }} />
 */
function PropertyListItem(props) {
  // Now we access `props.property` instead of just `property`
  const [isExpanded, setIsExpanded] = React.useState(false)
  const toggleExpand = () => setIsExpanded(prev => !prev)

  // Build a truncated description from props.property.description

  /**
   * • Les props permettent de transmettre des données entre composants.
   *   • Elles ne peuvent pas être modifiées dans un composant (lecture seule).
   *   • On peut les déstructurer pour plus de lisibilité.
   *   • props.children permet d’inclure du contenu dans un composant.
   * 
  */
  const truncated = props.property.description.substring(0, 100) + '…'

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden">
      {/* Header banner */}
      <div className="bg-red-600 p-4">
        <h3 className="text-lg font-semibold text-white">
          {props.property.title}
        </h3>
      </div>

      {/* Body */}
      <div className="flex-grow p-4 space-y-2">
        <p className="text-gray-700">📍 {props.property.location}</p>
        <p className="text-red-600 font-bold">
          €{Number(props.property.price).toLocaleString()}
        </p>
        <p className="text-gray-600 text-sm">
          {isExpanded ? props.property.description : truncated}
          <button
            onClick={toggleExpand}
            className="ml-1 text-red-600 font-medium hover:underline focus:outline-none"
          >
            {isExpanded ? 'Moins' : 'Plus'}
          </button>
        </p>
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 flex gap-2">
        <Link
          to={`/property/${props.property.id}`}
          className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm font-medium"
        >
          Voir détails
        </Link>
        <Link
          to={`/edit/${props.property.id}`}
          className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors text-sm font-medium"
        >
          ✏️ Edit
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
    description: PropTypes.string.isRequired,
  }).isRequired
}

export default PropertyListItem
