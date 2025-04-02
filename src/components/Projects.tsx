import React from 'react';
import { Github, Globe, Code, Cpu, Database, Server } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            alt="Machine Learning Project"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Machine Learning Projects</h3>
            <p className="text-gray-600 mb-4">
              A collection of ML projects including sentiment analysis, recommendation systems, and predictive modeling using Python and scikit-learn.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">scikit-learn</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TensorFlow</span>
            </div>
            <a 
              href="https://github.com/nishantonline1/MachineLearning" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
            alt="Data Structures"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Data Structures Implementation</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive implementation of various data structures and algorithms in Python, including trees, graphs, and sorting algorithms.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Algorithms</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Structures</span>
            </div>
            <a 
              href="https://github.com/nishantonline1/DataStructures" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
            alt="React Projects"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">React Components Library</h3>
            <p className="text-gray-600 mb-4">
              A collection of reusable React components built with TypeScript and styled with Tailwind CSS. Includes form elements, navigation, and data display components.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tailwind CSS</span>
            </div>
            <a 
              href="https://github.com/nishantonline1/react-components" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=800"
            alt="Django API"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Django REST API Boilerplate</h3>
            <p className="text-gray-600 mb-4">
              A production-ready Django REST framework boilerplate with JWT authentication, custom user model, and comprehensive test coverage.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Django</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">REST API</span>
            </div>
            <a 
              href="https://github.com/nishantonline1/django-rest-boilerplate" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Open Source Contributions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Code className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Active Contributor</h4>
            <p className="text-gray-600">Regular contributions to open-source projects and community initiatives</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Server className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Full Stack Solutions</h4>
            <p className="text-gray-600">Building end-to-end applications with modern tech stacks</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <Database className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-3">System Architecture</h4>
            <p className="text-gray-600">Designing scalable and maintainable software architectures</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;