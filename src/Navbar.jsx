import React from "react";
import {NavLink} from "react-router-dom"
    const Navbar = () => {
        return(
                <>
                <div className="container-fluid nav_bg">
                <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid  justify-content-between">
                    <NavLink  className="navbar-brand" 
                        to="/">Welcome</NavLink>
                    <button className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="true" 
                            aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  justify-content-end" 
                         id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" 
                           aria-current="page" 
                           to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/about">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/services">SERVICES</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="menu_active" className="nav-link" to="/team">TEAM</NavLink>
                        </li>
                        
                        <NavLink className="nav-link" to="/contact">
                        <button className="btn btn-sm btn-outline-secondary" type="button">Contact us</button>
                        </NavLink>
                     
                    </ul>
                    </div>
                    
                </div>
                </nav>
                </div>
                </div>
                </div>
                </>  
        );
    };
export default Navbar;    