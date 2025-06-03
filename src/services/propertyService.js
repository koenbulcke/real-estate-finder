// In-memory data store (simulating a backend)

// This is a fake in-memory data service to simulate an API
/*
    This file defines a simple in-memory data service for managing property listings.
    It simulates a backend API by storing data in a local array and providing functions
    to interact with that data. This is useful for development and testing purposes
    before connecting to a real backend.
*/
// Some starting data

// Simulate a backend with an in-memory array of properties
let properties = [
  {
    id: 1,
    title: 'Modern Apartment',
    location: 'Paris',
    price: 350000,
    description: 'A stylish apartment in the city center.'
  },
  {
    id: 2,
    title: 'Family House',
    location: 'Lyon',
    price: 480000,
    description: 'A spacious home perfect for families.'
  }
]

// READ: Return all properties (called by Home.jsx)
export function getProperties() {
  return properties
}

// READ (single): Find one property by its ID (called by PropertyDetail.jsx)
export function getPropertyById(id) {
  return properties.find(p => p.id === id)
}

// CREATE: Add a new property (called by AddProperty.jsx)
export function addProperty(property) {
  const newProperty = {
    id: Date.now(),
    ...property,
    price: parseFloat(property.price)
  }
  properties.push(newProperty)
}

// DELETE: Remove a property by ID (called by PropertyDetail.jsx)
export function deleteProperty(id) {
  properties = properties.filter(p => p.id !== id)
}
