import React, { useEffect, useState }  from 'react';
import axios from 'axios';

const Projectslist = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:4000/project/projects');
                setProjects(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, [projects]);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this project?');
        if (!confirmDelete) return;
        try {
            await axios.delete(`http://localhost:4000/Project/delete/${id}`);
            // setProjects(projects.filter(project => project._id !== id));
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

  return (
    <div>
        <a href="/create">Create New Project</a>
        <h1>Projects List</h1>
        <ul>
            {projects.map(project => (
            <li key={project._id}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>Technologies: {project.technologies}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a> <br/>
                <a href={`/edit/${project._id}`}>Edit</a> <br/>
                <button onClick={() => handleDelete(project._id)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Projectslist;