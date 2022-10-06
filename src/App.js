import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className='App'>
          <Navbar />
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path ='/projects' element={<Projects />} />
            <Route path ='/resume' element={<Resume />} />
          </Routes>
          <Footer />
      </div>
    </>
  );
}

export default App;
