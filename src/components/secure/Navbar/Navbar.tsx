import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex space-x-5 bg-gray-800 text-white p-4 justify-end ">
            <div>
                <NavLink to="/home" className='hover:opacity-90'>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/visitor" className='hover:opacity-90'>
                    Visitor
                </NavLink>
            </div>
            <div>
                <NavLink to="/Staff" className='hover:opacity-90'>
                    Staff
                </NavLink>
            </div>
            <div>
                <NavLink to="/vendor" className='hover:opacity-90'>
                    Vendor
                </NavLink>
            </div>
        </nav>        
    )
}

export default Navbar
