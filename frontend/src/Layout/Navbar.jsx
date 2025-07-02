import React from 'react';
import KR from '../images/KR.jpg';
import '../Layout/Navbar.css';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';




const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand logo" href="#">
                <img src={KR} alt="logo" width="90" height="70"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACT</a>
                    </li>
                </ul>
                <div className="social-icons d-none d-lg-block">
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>

                </div>
            </div>
        </div>
    </nav>    
    </>
  )
}

export default Navbar