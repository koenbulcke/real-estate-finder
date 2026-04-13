# Search & Filter Feature — Design

## Component Changes

### PropertiesPage.jsx
- Add `searchTerm`, `minPrice`, `maxPrice` state variables
- Derive `filteredProperties` from `properties` using those states
- Render a `<SearchFilterBar>` component above the `<PropertyList>`
- Pass `filteredProperties` to `<PropertyList>` instead of raw `properties`

### New Component: SearchFilterBar.jsx
Props:
- `searchTerm` (string)
- `onSearchChange` (fn)
- `minPrice` (string)
- `maxPrice` (string)
- `onMinPriceChange` (fn)
- `onMaxPriceChange` (fn)
- `onClear` (fn)

UI:
- Text input for search (placeholder: "Search by title or location…")
- Two number inputs side by side: Min Price (€) and Max Price (€)
- A "Clear" button

## Filter Logic (in PropertiesPage)
```js
const filteredProperties = properties.filter((p) => {
  const matchesText =
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.location.toLowerCase().includes(searchTerm.toLowerCase())
  const matchesMin = minPrice === '' || p.price >= Number(minPrice)
  const matchesMax = maxPrice === '' || p.price <= Number(maxPrice)
  return matchesText && matchesMin && matchesMax
})
```
