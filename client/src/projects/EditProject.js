
import React, { useEffect, useState }  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProject = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/Project/project/${id}`);
                const project = response.data;
                console.log(project)
                setTitle(project.title);
                setDescription(project.description);
                setTechnologies(project.technologies);
                setGithubLink(project.githubLink);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        }
        fetchProject();
    }, [id]);
    

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.put(`http://localhost:4000/Project/project/${id}`, {
                title,
                description,
                technologies,
                githubLink
            });
            console.log('Project updated:', response.data);
            // Optionally, reset the form fields after submission
            setTitle('');
            setDescription('');
            setTechnologies('');
            setGithubLink('');
            navigate('/'); // Redirect to the projects list page after update
        } catch (error) {
            console.error('Error updating project:', error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                <input type='text' value={technologies} onChange={(e) => setTechnologies(e.target.value)} placeholder="Technologies" />
                <input type='text' value={githubLink} onChange={(e) => setGithubLink(e.target.value)} placeholder="GitHub Link" />
                <button type='submit'>Update Project</button>
            </form>
        </div>
    )          
}

export default EditProject