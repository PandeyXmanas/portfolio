import React from 'react';

function Project() {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 mb-6 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.025)] border border-gray-200 dark:border-gray-700 animate-[slideUp_0.6s_ease-out_backwards] transition-colors duration-300">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 mb-5 pb-3 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">My Exploration</h2>
      
      <span className="inline-block bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase transition-colors duration-300">🚧 Work in Progress</span>
      <p className="text-gray-800 dark:text-gray-300 mb-4 transition-colors duration-300">Here are some of the things I am currently exploring and learning.</p>

      <div className="grid grid-cols-1 gap-5">
       
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 relative overflow-hidden hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05),0_4px_6px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:border-gray-500 dark:hover:border-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2 transition-colors duration-300">Python Certification</h3>
          <p className="text-gray-500 dark:text-gray-400 text-[0.95rem] mb-0 transition-colors duration-300">Completed the NPTEL "Joy of Computing using Python" course to strengthen programming fundamentals.</p>
        </div>
        
      </div>
    </section>
  );
}

export default Project;