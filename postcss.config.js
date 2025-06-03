/**
 * PostCSS configuration file for the project.
 * 
 * This file exports a configuration object specifying the PostCSS plugins to use.
 * - '@tailwindcss/postcss': Integrates Tailwind CSS with PostCSS for utility-first CSS generation.
 * - 'autoprefixer': Automatically adds vendor prefixes to CSS rules for better browser compatibility.
 * 
 * Typically used in modern frontend build setups to process and transform CSS files.
 */
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}