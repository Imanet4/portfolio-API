import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Layout/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Footer from './Layout/Footer';
import UsersList from './List/UserList';
import ContactList from './List/ContactList';
import ProjectList from './List/ProjectList';
import SkillsList from './List/SkillsList';
import AddProject from './addProject/AddProject';
import AddAbout from './addAbout/AddAbout';
import AddSkills from './addSkills/AddSkills';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './List/Dashboard';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        {/* Main Page (combines all sections) */}
        <Route path='/' element={
          <>
          <Navbar /> 
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Footer /> 
          </>
        } />
        
        {/* Individual Pages */}

        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Dashboard/About/add' element={<AddAbout />} />
        <Route path='/Dashboard/Skills/add' element={<AddSkills />} />
        
        {/* List Pages */}
        <Route path='/users' element={<UsersList />} />
        <Route path='/contacts' element={<ContactList />} />
        <Route path='/skills' element={<SkillsList />} />
        <Route path='/projects' element={<ProjectList />} />
        <Route path='/Dashboard/add' element={<AddProject />} />
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;