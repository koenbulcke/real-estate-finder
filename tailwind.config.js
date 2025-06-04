/** 
 * @type {import('tailwindcss').Config} 
 * Dit is het configuratiebestand voor Tailwind CSS. * 
 * 
 * Tailwind CSS is een utility-first CSS framework waarmee je snel en efficiënt gebruikersinterfaces 
 * kunt bouwen. In plaats van vooraf gedefinieerde componenten te gebruiken, 
 * schrijf je je eigen ontwerp door kleine, 
 * herbruikbare CSS-klassen direct in je HTML of JSX toe te voegen, 
 * zoals `p-4`, `bg-blue-500`, of `text-center`.
 * 
 * **Belangrijkste kenmerken:**
 * - **Utility-first:** Je gebruikt kleine CSS-klassen om direct styling toe te passen.
 * - **Snel prototypen:** Je kunt snel layouts en designs maken zonder zelf veel CSS te schrijven.
 * - **Volledig aanpasbaar:** Je kunt het standaard thema uitbreiden of aanpassen via het configuratiebestand (tailwind.config.js).
 * - **Responsief:** Tailwind heeft ingebouwde ondersteuning voor responsief ontwerp via breakpoints.
 * 
 */

export default {
  content: [
    "./index.html", // Scan deze HTML file voor Tailwind classes
    "./src/**/*.{js,jsx}" // Scan alle JS en JSX bestanden in de src map
  ],
  theme: {
    extend: {}, // Hier kun je het standaard thema uitbreiden
  },
  plugins: [], // Voeg hier eventueel plugins toe
}
