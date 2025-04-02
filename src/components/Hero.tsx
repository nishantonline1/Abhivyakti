import React from 'react';
import { Mail, Phone, Linkedin, Rocket, Brain, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl mb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/images/me.jpg" 
              alt="Professional headshot"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Nishant Singh</h1>
          <h2 className="text-2xl text-gray-700 mb-8">Sr Engineering Manager | Full Stack Developer</h2>
          <p className="text-xl text-gray-600 mb-8">
            Founding startup member with 8+ years of experience evolving from Frontend Developer to Senior Engineering Manager.
            Specialized in React, Django, and AWS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Rocket className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Startup Enthusiast</h3>
              <p className="text-sm text-gray-600">Building scalable solutions from ground up</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Brain className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Continuous Learner</h3>
              <p className="text-sm text-gray-600">Always exploring new technologies</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Result Driven</h3>
              <p className="text-sm text-gray-600">Focused on delivering business impact</p>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="mailto:nishantonline1@gmail.com" className="flex items-center text-gray-600 hover:text-gray-900">
              <Mail className="mr-2" size={20} />
              nishantonline1@gmail.com
            </a>
            <a href="tel:7980878844" className="flex items-center text-gray-600 hover:text-gray-900">
              <Phone className="mr-2" size={20} />
              7980878844
            </a>
            <a href="https://linkedin.com/in/technishant" className="flex items-center text-gray-600 hover:text-gray-900">
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;