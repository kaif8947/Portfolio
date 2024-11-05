import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import Resume from './pictures/kaifsiddiquiresumes.pdf.pdf';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.header
      className="p-5 bg-gray-800 text-white flex justify-between items-center"
      initial={{ y: -100, scale: 0.8 }}
      animate={{ y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <h1 className="text-2xl font-bold">Mo Kaif Siddiqui</h1>
      <nav className="flex gap-4">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="https://linkedin.com/in/kaif8947" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/kaif8947" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Resume Button */}
        <a 
          href={Resume}
          download="Mo_Kaif_Siddiqui_Resume.pdf" 
          className="ml-4 px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600 transition-colors"
        >
          Download Resume
        </a>
        <button onClick={toggleTheme} className="ml-4 bg-gray-700 p-2 rounded">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </motion.header>
  );
}

export default Header;
