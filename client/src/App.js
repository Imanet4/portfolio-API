import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projectcreate from './projects/Projectcreate';
import Projectslist from './projects/Projectslist';
import EditProject from './projects/EditProject';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Projectslist />} />
        <Route path="/create" element={<Projectcreate />} />
        <Route path="/edit/:id" element={<EditProject />} />
        {/* The edit route can use the same component as create, but you might want to handle it differently in the component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
