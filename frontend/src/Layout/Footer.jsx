import React from "react";
import '../Layout/Footer.css';
import { FaLinkedin, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';


const Footer = () => {

    return(

         <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h5>GET IN TOUCH</h5>
                    <p className="mt-4"><FaEnvelope className="me-2" />kr123@example.com</p>
                    <p><FaPhone className="me-2" />  717-555-1234</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <button className="btn btn-dark contact-btn">CONTACT ME</button>
                </div>
                <div className="col-md-4 text-md-end">
                    <div className="social-icons mt-4">
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                    <p className="copyright">Copyright © 2019 KR</p>
                </div>
            </div>
        </div>
    </footer>

    );
};

export default Footer;