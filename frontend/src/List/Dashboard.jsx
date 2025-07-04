import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [editedProject, setEditedProject] = useState(null);
    const [editedSkill, setEditedSkill] = useState(null);

    // Fetch Projects and Skills on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectsRes, skillsRes] = await Promise.all([
                    axios.get('http://localhost:4000/Project/projects'),
                    axios.get('http://localhost:4000/Skill')
                ]);
                setProjects(projectsRes.data);
                setSkills(skillsRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Project Handlers
    const handleDeleteProject = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/Project/project/${id}`);
            setProjects(prev => prev.filter(project => project._id !== id));
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    const handleUpdateProject = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:4000/Project/project/${editedProject._id}`,
                editedProject
            );
            setProjects(prev => prev.map(p => 
                p._id === editedProject._id ? response.data : p
            ));
            setEditedProject(null);
        } catch (error) {
            console.error('Error updating project:', error);
        }
    };

    // Skill Handlers
    const handleDeleteSkill = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/Skill/delete/${id}`);
            setSkills(prev => prev.filter(skill => skill._id !== id));
        } catch (error) {
            console.error('Error deleting skill:', error);
        }
    };

    const handleUpdateSkill = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `http://localhost:4000/Skill/edit/${editedSkill._id}`,
                editedSkill
            );
            setSkills(prev => prev.map(s => 
                s._id === editedSkill._id ? response.data : s
            ));
            setEditedSkill(null);
        } catch (error) {
            console.error('Error updating skill:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Admin Dashboard</h1>
            
            {/* Action Buttons */}
            <div className="mb-4">
                <Link to="/Dashboard/add" className="btn btn-outline-primary me-2">
                    Add New Project
                </Link>
                <Link to="/Dashboard/about/add" className="btn btn-outline-primary me-2">
                    Add ABOUT ME
                </Link>
                
            </div>

            {/* Projects Section */}
            <section className="mb-5">
                <h2 className="mb-3">Projects</h2>
                <div className="row">
                    {projects.map(project => (
                        <div key={project._id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    {editedProject?._id === project._id ? (
                                        <form onSubmit={handleUpdateProject}>
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
                                        <>
                                            <h5>{project.title}</h5>
                                            <p className="text-muted">{project.description}</p>
                                            <p><strong>Technologies:</strong> {project.technologies}</p>
                                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="d-block mb-3">
                                                GitHub Repository
                                            </a>
                                            <div className="d-flex">
                                                <button 
                                                    className="btn btn-warning me-2"
                                                    onClick={() => setEditedProject(project)}
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    className="btn btn-danger"
                                                    onClick={() => handleDeleteProject(project._id)}
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
            </section>

            <Link to="/Dashboard/skills/add" className="btn btn-outline-primary mb-4">
                    Add Your SKILLS
                </Link>

            {/* Skills Section */}
            <section>
                <h2 className="mb-3">Skills</h2>
                <div className="row">
                    {skills.map(skill => (
                        <div key={skill._id} className="col-md-3 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    {editedSkill?._id === skill._id ? (
                                        <form onSubmit={handleUpdateSkill}>
                                            <input
                                                className="form-control mb-2"
                                                value={editedSkill.name}
                                                onChange={(e) => setEditedSkill({...editedSkill, name: e.target.value})}
                                            />
                                            <input
                                                type="number"
                                                className="form-control mb-2"
                                                value={editedSkill.level}
                                                onChange={(e) => setEditedSkill({...editedSkill, level: e.target.value})}
                                                min="0"
                                                max="100"
                                            />
                                            <button type="submit" className="btn btn-success me-2">Save</button>
                                            <button 
                                                type="button" 
                                                className="btn btn-secondary"
                                                onClick={() => setEditedSkill(null)}
                                            >
                                                Cancel
                                            </button>
                                        </form>
                                    ) : (
                                        <>
                                            <h5>{skill.name}</h5>
                                            <div className="progress mb-3">
                                                <div 
                                                    className="progress-bar" 
                                                    role="progressbar" 
                                                    style={{width: `${skill.level}%`}}
                                                    aria-valuenow={skill.level}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                    {skill.level}%
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <button 
                                                    className="btn btn-warning me-2"
                                                    onClick={() => setEditedSkill(skill)}
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    className="btn btn-danger"
                                                    onClick={() => handleDeleteSkill(skill._id)}
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
            </section>
        </div>
    );
};

export default Dashboard;