import React from 'react';
import { Briefcase, Award, LineChart, Users } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Impact Numbers</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">8+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-sm">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">8</p>
              <p className="text-sm">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-2">15+</p>
              <p className="text-sm">Technologies</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Award className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <p>Led digital transformation initiatives resulting in 40% efficiency improvement</p>
            </li>
            <li className="flex items-start">
              <LineChart className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <p>Scaled engineering team from 2 to 8 members while maintaining high productivity</p>
            </li>
            <li className="flex items-start">
              <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
              <p>Mentored 10+ junior developers who are now in senior positions</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">NowPurchase</h3>
              <p className="text-gray-600">November 2017 - Present</p>
            </div>
            <img 
              src="/images/logo512.png"
              alt="Corporate building"
              className="w-24 h-24 rounded-lg shadow-md"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Senior Engineering Manager</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Lead an engineering team of 8 members</li>
                <li>Define scope and requirements for new features and products</li>
                <li>Plan and execute development roadmap</li>
                <li>Mentor team members and foster professional development</li>
                <li>Collaborate across departments for business alignment</li>
                <li>Develop strong engineering culture focused on innovation</li>
                <li>Implement IoT solutions for real-time power data monitoring</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Previous Roles</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">Engineering Manager</p>
                  <p className="text-gray-600">Led development teams, managed product roadmap, and technical implementation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">Lead Product Developer</p>
                  <p className="text-gray-600">Developed COVID-19 web application and e-commerce features</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">Full-stack & App Developer</p>
                  <p className="text-gray-600">Built logistics tracking system using React Native and Firebase</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">Frontend Developer</p>
                  <p className="text-gray-600">Launched first e-Commerce website using Angular and CodeIgniter</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Xperteez Technology</h3>
              <p className="text-gray-600">July 2016 - September 2016</p>
            </div>
          </div>
          <p className="text-gray-600">Web Developer Intern</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;