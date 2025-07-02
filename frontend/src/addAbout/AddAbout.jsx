import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAbout = () => {

    const [AboutMe, setAboutMe] = useState('');
    const [ResumeLink, setResumeLink] = useState('');
    const navigator = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/about/add', {
                AboutMe,
                ResumeLink
                });
            console.log('About section has been created Successfully:', response.data);

            // Reseting the fields
            setAboutMe('');
            setResumeLink('');

            //Redericting to the Portfolio page
            navigator('/');
        } catch (error) {
            console.error('Error creating about section:', error);


            
        }
    };



    
  return (
    

    <div className="container mt-5 w-50">
  <div className="row justify-content-center bg-light rounded-lg shadow-sm p-6 w-full max-w-s">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add About Section</h1>
    
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* About Me Input */}
      <div>
        <label htmlFor="About" className="block text-sm font-medium text-gray-700 mb-3">About Me</label>
        <input
          type="text"
          id="About"
          value={AboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          className=" form-control w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
          required
        />
      </div>

      {/* Resume URL Input */}
      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume URL</label>
        <input
          type="url"
          id="resume"
          value={ResumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
          className="form-control w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2 d-flex justify-content-center">
        <button
          type="submit"
          className="w-full btn btn-secondary hover:bg-gray-900 text-white py-2 px-4 rounded-md transition duration-200"
        >
          Save About Section
        </button>
      </div>
    </form>
  </div>
</div>

  )
};

export default AddAbout;