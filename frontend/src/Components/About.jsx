import React, {useEffect, useState} from "react";
import '../Components/About.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are applied
import axios from "axios";

const About = () => {
    const [about, setAbout] = useState({});

    useEffect(() => {
        axios.get('http://localhost:4000/about/about')
            .then(res => {
                setAbout(res.data);
                console.log(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return(

        <section className="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <h2 className="section-title">About me</h2>
                </div>
                <div className="col-lg-8">
                    <p>{about.AboutMe || "No about info available."}</p>
                    {about.ResumeLink && (
                         <a href={about.ResumeLink} target="_blank"rel="noreferrer"className="btn btn-dark mt-4">
                                 Download Resume</a>
            )}
                </div>
            </div>
        </div>
    </section>


    );
};

export default About;