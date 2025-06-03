// In-memory data store (simulating a backend)

// This is a fake in-memory data service to simulate an API
/*
    This file defines a simple in-memory data service for managing property listings.
    It simulates a backend API by storing data in a local array and providing functions
    to interact with that data. This is useful for development and testing purposes
    before connecting to a real backend.
*/
// Some starting data

// In-memory data store (fake backend API)
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

// ✅ Read: Get all properties
export function getProperties() {
  return properties
}

// ✅ Read one: Find by ID
export function getPropertyById(id) {
  return properties.find(p => p.id === id)
}

// ✅ Create: Add new property
export function addProperty(property) {
  const newProperty = {
    id: Date.now(), // Simulate unique ID
    ...property,
    price: parseFloat(property.price)
  }
  properties.push(newProperty)
}

// ✅ Update: Modify existing property
export function updateProperty(id, updatedData) {
  const index = properties.findIndex(p => p.id === id)
  if (index !== -1) {
    properties[index] = { ...properties[index], ...updatedData }
  }
}

// ✅ Delete: Remove property by ID
export function deleteProperty(id) {
  properties = properties.filter(p => p.id !== id)
}

