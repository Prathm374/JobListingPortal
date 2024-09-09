import React, { useEffect, useState, useCallback } from "react";
import "./LogNav.css";
import logo from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

export default function LogNav() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/signup");
    };

    const handleLogin = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScroll = useCallback(() => {
        const position = window.scrollY;
        setScrollPosition(position);
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const isScrolledPast = scrollPosition > window.innerHeight * 0.1;

    return (
        <div>
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
                <div className="navBtns" hidden={!isScrolledPast}>
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
        </div>
    );
}
