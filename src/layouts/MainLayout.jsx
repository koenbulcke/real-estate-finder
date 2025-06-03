// Contains Header & wrapper layout

import Header from '../components/Header'

// This layout wraps all pages with a shared header and spacing
function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow p-4">{children}</main>
    </div>
  )
}

export default MainLayout