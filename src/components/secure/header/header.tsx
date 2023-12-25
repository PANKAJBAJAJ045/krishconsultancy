import { Dropdown } from 'bootstrap';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
   const menuRef = useRef<HTMLDivElement | null>(null);
   const profileRef = useRef<HTMLDivElement | null>(null);
   const ToggleMenu = () => {
      if (menuRef.current) {
         menuRef?.current?.classList?.toggle('hidden');
      }
   };
   const ToggleProfile = () => {
      if (profileRef.current) {
         profileRef?.current?.classList?.toggle('hidden');
      }
   };

   const activeClassName = 'selected navlink';

   const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
      isActive ? activeClassName : 'navlink';

   useEffect(() => {
      const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
      [...dropdownElementList].map(
         (dropdownToggleEl) => new Dropdown(dropdownToggleEl)
      );
   }, []);

   return (
      <>
         <header className="sticky top-0 z-10 bg-slate-950 text-white">
            <section className="mx-auto p-3">
               <div className="flex justify-between">
                  <h1 className="flex justify-start text-xl font-medium">
                     <NavLink to="/home" className={'nav-link'}>
                        🚀 Krish Consultancy
                     </NavLink>
                  </h1>
                  <div>
                     <button
                        id="mobile-open-button"
                        onClick={ToggleMenu}
                        className="flex justify-end text-3xl focus:outline-none md:hidden">
                        &#9776;
                     </button>
                     <nav className="hidden text-xl md:block" aria-label="main">
                        <div className="flex items-center justify-end space-x-8">
                           <div>
                              <NavLink
                                 to="/home"
                                 className={activeStyleCallback}>
                                 Home
                              </NavLink>
                           </div>
                           <div>
                              <NavLink
                                 to="/visitor"
                                 className={activeStyleCallback}>
                                 Visitor
                              </NavLink>
                           </div>
                           <div>
                              <NavLink
                                 to="/staff"
                                 className={activeStyleCallback}>
                                 Staff
                              </NavLink>
                           </div>
                           <div>
                              <NavLink
                                 to="/vendor"
                                 className={activeStyleCallback}>
                                 Vendor
                              </NavLink>
                           </div>
                           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                              <button
                                 type="button"
                                 className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                 <span className="absolute -inset-1.5"></span>
                                 <span className="sr-only">
                                    View notifications
                                 </span>
                              </button>

                              <div className=" relative ml-3">
                                 <div>
                                    <button
                                       onClick={ToggleProfile}
                                       type="button"
                                       className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                       id="user-menu-button"
                                       aria-expanded="false"
                                       aria-haspopup="true">
                                       <span className="absolute -inset-1.5"></span>
                                       <span className="sr-only">
                                          Open user menu
                                       </span>
                                       <img
                                          className="h-8 w-8 rounded-full"
                                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          alt=""
                                       />
                                    </button>
                                 </div>

                                 <div
                                    ref={profileRef}
                                    className="absolute right-0 z-10 mt-2 hidden w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex={-1}>
                                    <NavLink
                                       onClick={ToggleProfile}
                                       to="/vendor"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                       Vendor
                                    </NavLink>
                                    <NavLink
                                       onClick={ToggleProfile}
                                       to="/visitor"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                       Visitor
                                    </NavLink>
                                    <NavLink
                                       onClick={ToggleProfile}
                                       to="/vendor"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                       Vendor
                                    </NavLink>
                                    <NavLink
                                       onClick={ToggleProfile}
                                       to="/vendor"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                       Vendor
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </nav>
                  </div>
               </div>
               <div className="hidden md:hidden" ref={menuRef}>
                  <div className="flex basis-full flex-col items-center divide-y divide-solid divide-slate-400/50 text-start">
                     <div>
                        <NavLink to="/" className={activeStyleCallback}>
                           Home
                        </NavLink>
                     </div>
                     <div>
                        <NavLink to="/visitor" className={activeStyleCallback}>
                           Visitor
                        </NavLink>
                     </div>
                     <div>
                        <NavLink to="/staff" className={activeStyleCallback}>
                           Staff
                        </NavLink>
                     </div>
                     <div>
                        <NavLink to="/vendor" className={activeStyleCallback}>
                           Vendor
                        </NavLink>
                     </div>
                     <div className="flex min-w-full flex-col items-center text-start">
                        <div>
                           <NavLink to="/Login" className={activeStyleCallback}>
                              Login
                           </NavLink>
                        </div>
                        <div>
                           <NavLink
                              to="/signup"
                              className="mt-8 rounded bg-yellow-400 px-2 py-1 text-yellow-900  transition duration-300 hover:bg-yellow-300 hover:text-yellow-800 hover:opacity-90">
                              Sign Up
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </header>
      </>
   );
};
