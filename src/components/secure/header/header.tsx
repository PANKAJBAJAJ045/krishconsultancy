import { Dropdown } from 'bootstrap'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
   useEffect(() => {
      const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
      ;[...dropdownElementList].map(
         (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
      )
   }, [])
   return (
      <>
         <header className="sticky top-0 z-10 bg-teal-700 text-white">
            <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
               <h1 className="text-3xl font-medium">
                  <NavLink to="/home" className={'nav-link'}>
                     🚀 Acme Rockets
                  </NavLink>
               </h1>
               <div>
                  <button
                     id="mobile-open-button"
                     className="text-3xl focus:outline-none sm:hidden">
                     &#9776;
                  </button>
                  <nav
                     className="hidden text-xl sm:block"
                     aria-label="main">
                     <div className="flex justify-end space-x-8">
                        <div>
                           <NavLink to="/home" className="hover:opacity-90">
                              Home
                           </NavLink>
                        </div>
                        <div>
                           <NavLink to="/visitor" className="hover:opacity-90">
                              Visitor
                           </NavLink>
                        </div>
                        <div>
                           <NavLink to="/staff" className="hover:opacity-90">
                              Staff
                           </NavLink>
                        </div>
                        <div>
                           <NavLink to="/vendor" className="hover:opacity-90">
                              Vendor
                           </NavLink>
                        </div>
                     </div>
                  </nav>
               </div>
            </section>
         </header>
      </>
   )
}
