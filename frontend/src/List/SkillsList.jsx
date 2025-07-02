import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SkillsList() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/Skill')
      .then(res => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      });
  }, [skills]);

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Skills List</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill._id}>{skill.name} — {skill.level}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsList;
