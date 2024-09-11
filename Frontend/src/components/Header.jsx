import React, { useEffect, useState, useCallback } from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginNav() {
    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="mpnav">
                    <div className="logNav">
                        <div className="logNavLogo">
                            <NavLink to="/home">
                                <img src={logo} alt="logo" />
                            </NavLink>
                        </div>
                        <p>JobConnect</p>
                        <div className="navItems">
                            <NavLink to="/home">
                                <p>Jobs</p>
                            </NavLink>
                            <NavLink to="/home">
                                <p>Profile</p>
                            </NavLink>
                            <NavLink to="/home">
                                <p>Dashboard</p>
                            </NavLink>
                            <NavLink to="/home">
                                <p>About us</p>
                            </NavLink>
                            <NavLink to="/home">
                                <p>Support</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

{
    /* <form className="col-12 col-lg-2 mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
            <div className="dropdown text-end">
              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
              </a>
              <ul className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div> */
}
