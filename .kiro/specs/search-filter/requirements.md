# Search & Filter Feature — Requirements

## Overview
Allow users to search and filter property listings on the PropertiesPage without a full page reload.

## Requirements

### 1. Text Search
- WHEN a user types in the search box
- THEN the property list filters in real-time to show only properties whose title or location contains the search term (case-insensitive)

### 2. Price Range Filter
- WHEN a user sets a min and/or max price
- THEN only properties within that price range are shown

### 3. Combined Filters
- WHEN both search text and price range are active
- THEN both filters apply simultaneously (AND logic)

### 4. Clear Filters
- WHEN the user clicks "Clear"
- THEN all filters reset and the full list is shown again

### 5. No Results State
- WHEN no properties match the active filters
- THEN display a friendly "No properties found" message

### 6. Scope
- Filters apply client-side to already-fetched data (no extra API calls)
- Feature lives on PropertiesPage only (not HomePage recent listings)
