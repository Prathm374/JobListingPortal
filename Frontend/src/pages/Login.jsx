import React, { useState } from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios"

import Navbar from '../components/LogNav'
import Footer from '../components/Footer'

import './Login.css'
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", { username, password });
            if (response.data.success) {
                toast.success("Login Success.");
                navigate("/home");                
            } else {
                toast.error("Invalid username or password. Please try again.");
            }
        } catch (error) {
            console.error("There was an error!", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

  return (
    <div className='loginpg'>
      <Navbar />
      <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-info lh-1 mb-3">
            Unlock Your Next Opportunity with JobConnect
            </h1>
            <p className="lead text-light">
            Find jobs that match your skills and aspirations. With real-time listings and easy applications, we connect you to employers who need your talent.
            </p>
            <p className="lead text-light">
            Start your career journey today and land your dream job faster.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                onClick={handleGetStarted}
                type="button"
                className="cssbuttons-io-button" >
                Get started
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                onClick={handleScrollDown}
                type="button"
                className="cssbuttons-io-button btn2"
              >
                Learn More
                <div class="icon">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 heroLogin">
            <div className="loginForm">
              <div className="wrap">
            <form onSubmit={handleLogin}>
                <h1 className="text-dark">Login</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                    <i className='bx bxs-user'></i>
                </div>

                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    <i className='bx bxs-lock-alt'></i>
                </div>
                <div className="remember-forget">
                    <label style={{color: "#54D1C9"}}><input type="checkbox" /> Remember Me </label>
                    <a href="/">Forgot Password?</a>
                </div>
                {/* Add Google oAuth Here:  */}
                <div className="register-link">
                    <p>Don't have an account? <NavLink to={"/signup"}>Register</NavLink></p>
                </div>
                <button type="submit" className="btn btn-info btn1">Login</button>
            </form>
            <ToastContainer />
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  )
}