import React from 'react';

function About() {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 mb-6 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.025)] border border-gray-200 dark:border-gray-700 animate-[slideUp_0.6s_ease-out_backwards] transition-colors duration-300">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-5 pb-3 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">About Me</h2>
      <p className="text-gray-800 dark:text-gray-300 mb-4 transition-colors duration-300">Hello! I am a student who loves exploring different areas of technology. 
        I enjoy working on diverse projects and continuously learning new skills to build impactful solutions.</p>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2 mt-6">My Skills</h3>
      <ul className="list-none pl-0 text-gray-800 dark:text-gray-300">
        <li className="mb-3 relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500 dark:before:text-gray-400">Programming: C, Java, Python</li>
        <li className="mb-3 relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500 dark:before:text-gray-400">Web Technologies: HTML, CSS, React, TailwindCSS</li>
      </ul>
    </section>
  );
}

export default About;