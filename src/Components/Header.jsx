import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import profilePic from '../assets/profile.jpeg'; 
import ThemeToggle from './ThemeToggle'; // Import the toggle

function Header() {
  return (
    <header className="flex flex-col items-center text-center py-5 pb-10 mb-10 relative animate-[fadeIn_0.8s_ease-out] md:flex-none md:w-[350px] md:p-10 md:mb-0 md:h-fit md:bg-white md:dark:bg-gray-800 md:rounded-[20px] md:border md:border-gray-200 md:dark:border-gray-700 md:shadow-sm md:sticky md:top-14">
      {/* Positioned the toggle at the top right of the header */}
      <div className="absolute top-5 right-5">
        <ThemeToggle />
      </div>

      <img src={profilePic} alt="Manas Pandey" className="w-[120px] h-[120px] rounded-full object-cover shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] mb-5 transition-transform duration-300 hover:scale-105" />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight mb-2 transition-colors duration-300">Manas Pandey</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 transition-colors duration-300">Full-Stack & AI Enthusiast</p>
      
      {/* Navigation Menu */}
      <nav className="flex justify-center flex-wrap gap-3 mt-6 w-full md:justify-start">
        <Link to="/" className="text-gray-600 dark:text-gray-200 font-medium text-[0.95rem] px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5">About</Link>
        <Link to="/education" className="text-gray-600 dark:text-gray-200 font-medium text-[0.95rem] px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5">Education</Link>
        <Link to="/projects" className="text-gray-600 dark:text-gray-200 font-medium text-[0.95rem] px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5">Projects</Link>
        <Link to="/contact" className="text-gray-600 dark:text-gray-200 font-medium text-[0.95rem] px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;