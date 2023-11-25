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
         <header className="sticky top-0 z-10 bg-slate-950 text-white">
            <section className="mx-auto p-3">
               <div className="flex justify-between">
                  <h1 className="flex justify-start text-3xl font-medium">
                     <NavLink to="/home" className={'nav-link'}>
                        🚀 Krish Consultancy
                     </NavLink>
                  </h1>
                  <div>
                     <button
                        id="mobile-open-button"
                        className="flex justify-end text-3xl focus:outline-none sm:hidden">
                        &#9776;
                     </button>
                     <nav className="hidden text-xl sm:block" aria-label="main">
                        <div className="flex items-center justify-end space-x-8">
                           <div>
                              <NavLink to="/home" className="hover:opacity-90">
                                 Home
                              </NavLink>
                           </div>
                           <div>
                              <NavLink
                                 to="/visitor"
                                 className="hover:opacity-90">
                                 Visitor
                              </NavLink>
                           </div>
                           <div>
                              <NavLink to="/staff" className="hover:opacity-90">
                                 Staff
                              </NavLink>
                           </div>
                           <div>
                              <NavLink
                                 to="/vendor"
                                 className="hover:opacity-90">
                                 Vendor
                              </NavLink>
                           </div>
                           <div className="flex items-center space-x-4 pl-5 pr-1">
                              <a href="" className="hover:opacity-90">
                                 Login
                              </a>
                              <a
                                 href=""
                                 className="rounded bg-yellow-400 px-2 py-1 text-yellow-900  transition duration-300 hover:bg-yellow-300 hover:text-yellow-800 hover:opacity-90">
                                 Sign Up
                              </a>
                           </div>
                        </div>
                     </nav>
                  </div>
               </div>
            </section>
         </header>
      </>
   )
}
