import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Project from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 md:max-w-6xl md:flex md:items-start md:justify-center md:gap-16 md:h-screen md:px-5 md:py-14">
      {/* The Header stays outside the Routes so it appears on EVERY page */}
      <Header />
      
      <main className="md:flex-1 md:overflow-y-auto md:h-full md:pr-5 md:pb-14 hide-scrollbar w-full">
        {/* The Routes act as a switcher. Only one Route shows at a time. */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="md:hidden text-center mt-16 py-6 text-sm text-gray-500 dark:text-gray-400">
        <p>© 2026 Manas Pandey. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
