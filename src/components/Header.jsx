import { Link } from 'react-router-dom'

// A simple navigation header shown on all pages
function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold text-xl">Real Estate Finder</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add" className="hover:underline">Add Property</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header