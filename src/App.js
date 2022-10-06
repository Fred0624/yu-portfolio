import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

function App() {
  return (
    <>
      <div className='App'>
          <Navbar />
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/projects' element={<Projects />} />
            <Route path ='/project/:id' element={<ProjectDetail />} />
            <Route path ='/resume' element={<Resume />} />
          </Routes>
          <Footer />
      </div>
    </>
  );
}

export default App;
