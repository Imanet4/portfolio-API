import React, {useEffect, useState} from "react";
import '../Components/Skills.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are applied
import axios from "axios";


const Skills = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/Skill')
        .then(res => {
            setSkills(res.data);
            console.log(res.data);
        })
        .catch(err => console.error(err));
    }, []);






    return(

         <section className="skills">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="section-title">Skills</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <div className="focus-list text-center">
                        <h5 className="mb-4 skills-title">MY FOCUS</h5>
                        <ul className="list-unstyled">
                            <li className="list-focus text-start mx-auto mb-3" >UI/UX Design</li>
                            <li className="list-focus text-start mx-auto mb-3" >Responsive Design</li>
                            <li className="list-focus text-start mx-auto mb-3" >Web Design</li>
                            <li className="list-focus text-start mx-auto mb-3" >Mobile App Design</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                        {skills.map((skill) => (
                         <div className="mb-3" key={skill._id}>
                            <div className="progress">
                     <span className="progress-text">{skill.name}</span>
                         <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: `${skill.level}%` }}
                                aria-valuenow={skill.level}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                >
                                {skill.level}%
                                </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    </div>
                </div>
            </section>
    );
};

export default Skills