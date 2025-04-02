import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        {/* <Projects /> */}
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Nishant Singh. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/nishantonline1" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/technishant" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;