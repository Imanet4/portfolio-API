import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are applied
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [editedProject, setEditedProject] = useState(null);

    //Fetching Projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:4000/Project/projects');
                setProjects(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    //DELETE PROJECT
    const handleDelete = async (id) => {
      console.log('Trying to delete project with ID:', id);
        try {
            await axios.delete(`http://localhost:4000/Project/project/${id}`);
            setProjects(projects.filter(project => project._id !== id));
            console.log('Project deleted successfully');
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    //EDIT PROJECT
 
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:4000/Project/project/${editedProject._id}`, editedProject);
            console.log('Project updated:', response.data);
            setEditedProject(null); // Reset the edited project state
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };






  return (
       <div className="container mt-4">
      <h1>Admin Dashboard</h1>
      <Link to="/Dashboard/add" className="btn btn-outline-primary mb-4">
        Add New Project
      </Link>
      <Link to="/Dashboard/about/add" className="btn btn-outline-primary mb-4 ms-4">
        Add ABOUT ME
      </Link>
      <Link to="/Dashboard/skills/add" className="btn btn-outline-primary mb-4 ms-4">
        Add Your SKILLS
      </Link>

      <div className="row">
        {projects.map(project => (
          <div key={project._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                {editedProject?._id === project._id ? (
                  // 👇 Edit Form (when editing)
                  <form onSubmit={handleUpdate}>
                    <input
                      className="form-control mb-2"
                      value={editedProject.title}
                      onChange={(e) => setEditedProject({...editedProject, title: e.target.value})}
                    />
                    <textarea
                      className="form-control mb-2"
                      value={editedProject.description}
                      onChange={(e) => setEditedProject({...editedProject, description: e.target.value})}
                    />
                    <input
                      className="form-control mb-2"
                      value={editedProject.technologies}
                      onChange={(e) => setEditedProject({...editedProject, technologies: e.target.value})}
                    />
                    <input
                      className="form-control mb-2"
                      value={editedProject.githubLink}
                      onChange={(e) => setEditedProject({...editedProject, githubLink: e.target.value})}
                    />
                    <button type="submit" className="btn btn-success me-2">Save</button>
                    <button 
                      type="button" 
                      className="btn btn-secondary"
                      onClick={() => setEditedProject(null)}
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  // 👇 Project Card (normal view)
                  <>
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                    <p><strong>Tech:</strong> {project.technologies}</p>
                    <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                    <div className="mt-3">
                      <button 
                        className="btn btn-warning me-2"
                        onClick={() => setEditedProject(project)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger"
                        onClick={() => handleDelete(project._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  

export default Dashboard;