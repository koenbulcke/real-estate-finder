
import React from 'react'
/* 
* This line tells React to pull the Outlet component from the react-router-dom library, 
 * not from the project's own src/ folder.
 * One won’t find an Outlet.jsx in your components/ folder because <Outlet /> is
 * provided by react-router-dom, not by the project's own code.
 */
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'

/**
 * Layout.jsx
 *
 * Dit is de “wrapper” component voor geneste routes.
 * - Toont <NavBar> bovenaan op alle pagina’s.
 * - Bevat een <Outlet> waar het component van de overeenkomende child route wordt gerenderd.
 * - Omdat Layout aan de basis van onze routetree staat, is NavBar altijd zichtbaar.
 * 
 * 
 *  Alle “layout” verantwoordelijkheden worden door dit bestand afgehandeld:
 * Het rendert:
 *  <NavBar /> bovenaan
 *  <Outlet /> waar het child route component verschijnt
 * 
 * 
 * 
 */

function Layout() {
  return (
    <div>
      {/* De navigatiebalk is altijd zichtbaar */}
      <NavBar />
      {/* Outlet is waar child pagina componenten worden gerenderd 
        * Whenever you declare nested routes in App.jsx, 
        * React Router needs a place to “inject” the child components.
        * <Outlet /> acts as that placeholder. 
        * Whatever child route is currently active will render in place of <Outlet />.
        *
        */}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
