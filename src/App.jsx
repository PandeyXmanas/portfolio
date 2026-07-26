import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Project from './Components/Project';
import Contact from './Components/Contact';
import './App.css'; 

function App() {
  return (
    <div className="portfolio-container">
      {/* The Header stays outside the Routes so it appears on EVERY page */}
      <Header />
      
      <main>
        {/* The Routes act as a switcher. Only one Route shows at a time. */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 Manas Pandey. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;