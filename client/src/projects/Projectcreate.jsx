import React, { useState }  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Projectcreate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post('http://localhost:4000/project/add', {
                title,
                description,
                technologies,
                githubLink
            });
            console.log('Project created:', response.data);
            // Optionally, reset the form fields after submission
            setTitle('');
            setDescription('');
            setTechnologies('');
            setGithubLink('');
            navigate('/'); // Redirect to the projects list page after creation
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };
    



      return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={ (e) => setTitle(e.target.value) }></input>
            <input type='text' value={description} onChange={ (e) => setDescription(e.target.value) }></input>
            <input type='text' value={technologies} onChange={ (e) => setTechnologies(e.target.value) }></input>
            <input type='text' value={githubLink} onChange={ (e) => setGithubLink(e.target.value) }></input>
            <button type='submit'>Create Project</button>
        </form>
        
    </div>
  )
}

export default Projectcreate