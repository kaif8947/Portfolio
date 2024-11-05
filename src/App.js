import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="font-sans bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        {/* Header Section with Navigation */}
        <Header />

        {/* Main Content */}
        <main>
          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
