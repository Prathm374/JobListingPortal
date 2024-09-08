import React, { useEffect, useState, useCallback } from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginNav() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/signup");
    };

    const handleLogin = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="logNav">
            <div className="logNavLogo">
                <NavLink to="/home">
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <p>JobConnect</p>
            <div className="navItems">
                <NavLink to="/home"><p>Jobs</p></NavLink>
                <NavLink to="/home"><p>Profile</p></NavLink>
                <NavLink to="/home"><p>Dashboard</p></NavLink>
                <NavLink to="/home"><p>About us</p></NavLink>
                <NavLink to="/home"><p>Support</p></NavLink>
            </div>
            <div className="navBtns">
                <button
                    className="btn text-dark glassButton"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <button
                    className="btn text-dark glassButton"
                    onClick={handleGetStarted}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}
