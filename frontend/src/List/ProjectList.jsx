import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ProjectList() {
  const [projects, setProjects] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:3000/Project')
        .then(res =>setProjects(res.data))
        .catch(err => console.error(err));
    },[]);

  

  return (
    <div>
    
      <section className="portfolio">
        <div className="container">
        <h2 className="text-start ps-4">Portfolio</h2>
         <div className="row g-4">
        {projects.map((project) => (
        <div className="col-lg-4 col-md-6" key={project._id}>
          <div className={`card ${projects.indexOf(project) < 3 ? 'first-row' : ''} ${projects.indexOf(project) % 2 === 0 ? 'col-one' : 'col-two'}`}>
            {project.name}
          </div>
          <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-outline-primary"
                >
                  GitHub
                </a>
        </div>
      ))}
    </div>
  </div>
  
</section>
    </div>
  );
}

export default ProjectList;
