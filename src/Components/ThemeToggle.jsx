import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full font-semibold cursor-pointer transition-all duration-200 text-[0.9rem] shadow-sm hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 hover:-translate-y-0.5"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
