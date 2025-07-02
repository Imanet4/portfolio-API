import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const navigatore = useNavigate();


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/project/add', {
        title,
        description,
        technologies,
        githubLink
      });
      console.log('Project created Successfully:', response.data);
      //Reset the Form Fields
      setTitle('');
      setDescription('');
      setTechnologies('');  
      setGithubLink('');
      navigatore('/'); // Redirect to the projects list page after creation
    } catch (error) {
      console.error('Error creating project:', error);
      
    }
  };







  return (
   <div className="container mt-5">
  <h2 className="mb-4">Add Project</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label className="form-label">Title</label>
      <input 
        type="text" 
        className="form-control" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter project title"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Description</label>
      <input 
        type="text" 
        className="form-control" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Enter project description"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Technologies</label>
      <input 
        type="text" 
        className="form-control" 
        value={technologies} 
        onChange={(e) => setTechnologies(e.target.value)} 
        placeholder="e.g. React, Node.js, MongoDB"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">GitHub Link</label>
      <input 
        type="text" 
        className="form-control" 
        value={githubLink} 
        onChange={(e) => setGithubLink(e.target.value)} 
        placeholder="https://github.com/username/project"
      />
    </div>

    <button type="submit" className="btn btn-primary">Create Project</button>
  </form>
</div>

  )
}

export default AddProject;