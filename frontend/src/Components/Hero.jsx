import React from "react";
import '../Components/Hero.css'; // Assuming you have a CSS file for styling

const Hero = () => {
    return(
        
        <section className="hero">
            <div className="container">
                <div className="row">
                <div className="col-md-8 w-25 text-center">
                    <h1>Katie Reed</h1>
                    <p className="lead">Web Developer & Designer</p>
                    <button className="btn btn-dark mt-4 contact-btn">CONTACT ME</button>
                 </div>
                </div>
            </div>
        </section>

        
    );
};

export default Hero;