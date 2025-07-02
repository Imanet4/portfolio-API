import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddSkills = () => {
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/Skill/add', {
                name,
                level
            });
            console.log('Skill has been added successfully:', response.data);

            // Resetting the fields
            setName('');
            setLevel('');

            // Redirecting to the Skills page
            navigate('/');
        } catch (error) {
            console.error('Error adding skill:', error);
        }
    }


return(

    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto shadow rounded bg-white">
      <h2 className="text-xl font-semibold mb-4">Add Skill</h2>
      <input
        type="text"
        placeholder="Skill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="number"
        placeholder="Skill level (%)"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="border p-2 w-full mb-4"
        required
        min="0"
        max="100"
      />
      <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded">Add</button>
    </form>
)

};

export default AddSkills;