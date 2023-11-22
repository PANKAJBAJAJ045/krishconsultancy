import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex space-x-5 bg-gray-800 text-white">
            <div>
                <NavLink to="/home" className={'nav-link'}>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/visitor" className={'nav-link'}>
                    Visitor
                </NavLink>
            </div>
            <div>
                <NavLink to="/Staff" className={'nav-link'}>
                    Staff
                </NavLink>
            </div>
            <div>
                <NavLink to="/vendor" className={'nav-link'}>
                    Vendor
                </NavLink>
            </div>
        </nav>        
    )
}

export default Navbar
