/**
 * Layout.jsx
 *
 * This is the “wrapper” component for nested routes.  
 * - Renders <NavBar> at the top for all pages.  
 * - Contains an <Outlet> where the matched child route’s component will render.  
 * - Because Layout sits at the root of our route tree, NavBar is always visible.
 * 
 * 
 *  all “layout” responsibilities are handled by this file:
 * which renders:
 *  <NavBar /> at the top
 *  <Outlet /> where the child route component appears
 * 
 * 
 * 
 */

import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'

function Layout() {
  return (
    <div>
      {/* The navigation bar is always visible */}
      <NavBar />
      {/* Outlet is where child page components will render */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
