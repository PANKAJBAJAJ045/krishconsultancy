import { Dropdown } from "bootstrap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    useEffect(() => {
        const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
        [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl));
    }, [])
    return (
        <>
            <div className="container">
                <div className="row justify-content-evenly">
                    <div className="col-md-3 offset-md-3">
                        <div className="row">
                            <div className="col-2">
                                +91-9540808833
                            </div>
                            <div className="col-2">info@nrcosultancy.in</div>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-4">
                        <div className="">

                        </div>
                        <div className="">

                        </div>
                        <div className="">

                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar scroll</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <div className="nav-item">
                                <NavLink to="/home" className="nav-link">Home</NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink to="/AboutUs" className="nav-link">About Us</NavLink>
                            </div>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <div>
                                        <NavLink to="/visitor" className="dropdown-item nav-link">Visitor</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/About" className="dropdown-item nav-link">About</NavLink>
                                    </div>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <NavLink to="/ContactUs" className="nav-link">Contact Us</NavLink>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}
