import React from 'react';

function Contact() {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 mb-6 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.025)] border border-gray-200 dark:border-gray-700 animate-[slideUp_0.6s_ease-out_backwards] transition-colors duration-300">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-5 pb-3 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">Get in Touch</h2>
      <p className="text-gray-800 dark:text-gray-300 mb-4 transition-colors duration-300">Feel free to reach out to me for any queries or discussions!</p>
      
      <ul className="list-none pl-0 text-gray-800 dark:text-gray-300">
        <li className="mb-3 relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500 dark:before:text-gray-400">
          <strong>Email: </strong> 
          <a href="mailto:mp6297@srmist.edu.in" className="text-blue-600 font-medium hover:text-blue-700 hover:underline underline-offset-4 transition-colors duration-200">mp6297@srmist.edu.in</a>
        </li>
        <li className="mb-3 relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500 dark:before:text-gray-400">
          <strong>LinkedIn: </strong> 
          <a href="https://www.linkedin.com/in/manas-pandey-65a5872a9" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-700 hover:underline underline-offset-4 transition-colors duration-200">
            manas-pandey-65a5872a9
          </a>
        </li>
        <li className="mb-3 relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-gray-500 dark:before:text-gray-400">
          <strong>GitHub: </strong> 
          <a href="https://github.com/PandeyXmanas" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-700 hover:underline underline-offset-4 transition-colors duration-200">
            PandeyXmanas
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;