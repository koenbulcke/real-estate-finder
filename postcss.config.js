/**
 * PostCSS configuratiebestand voor het project.
 * 
 * Dit bestand exporteert een configuratieobject dat de te gebruiken PostCSS-plugins specificeert.
 * - '@tailwindcss/postcss': Integreert Tailwind CSS met PostCSS voor utility-first CSS generatie.
 * - 'autoprefixer': Voegt automatisch vendor prefixes toe aan CSS-regels voor betere browsercompatibiliteit.
 * 
 * Wordt meestal gebruikt in moderne frontend build setups om CSS-bestanden te verwerken en te transformeren.
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
