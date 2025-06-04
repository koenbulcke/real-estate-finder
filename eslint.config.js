/*
eslint.config.js
ESLint is a tool that analyzes your JavaScript/JSX code to detect potential problems,
syntax errors, or style convention violations.
*/
import js from '@eslint/js' // Import ESLint's base JS config
import globals from 'globals' // Import global variables for different environments
import reactHooks from 'eslint-plugin-react-hooks' // Import React Hooks ESLint plugin
import reactRefresh from 'eslint-plugin-react-refresh' // Import React Refresh ESLint plugin
//import security from 'eslint-plugin-security' // (Commented out) Import security plugin

export default [
  { ignores: ['dist'] }, // Ignore the 'dist' directory from linting
  {
    files: ['**/*.{js,jsx}'], // Apply config to all JS and JSX files
    languageOptions: {
      ecmaVersion: 2020, // Set ECMAScript version to 2020
      globals: globals.browser, // Use browser global variables
      parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version for parsing
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Use ES modules
      },
    },
    plugins: {
      'react-hooks': reactHooks, // Enable React Hooks plugin
      'react-refresh': reactRefresh, // Enable React Refresh plugin
//      'security': security, // (Commented out) Enable security plugin
    },
    rules: {
      ...js.configs.recommended.rules, // Use recommended JS rules
      ...reactHooks.configs.recommended.rules, // Use recommended React Hooks rules
//      ...security.configs.recommended.rules, // (Commented out) Use recommended security rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }], // Error on unused vars, except those matching pattern
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Warn if non-component exports, allow constant exports
    },
  },
]
