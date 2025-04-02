import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Education & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Education</h3>
          </div>
          <div className="relative pl-6 border-l-2 border-blue-200">
            <div className="mb-8">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px]"></div>
              <h4 className="text-lg font-medium text-gray-800">Bachelor of Technology (B.Tech.)</h4>
              <p className="text-gray-600">Information Technology</p>
              <p className="text-gray-600">Vishveshwarya Institute of Engineering and Technology</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-gray-800">Leading Others</h4>
              <p className="text-gray-600">Harappa Thriversity</p>
              <p className="text-gray-600">August 2023</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-medium text-gray-800">Managing Teamwork</h4>
              <p className="text-gray-600">Harappa Thriversity</p>
              <p className="text-gray-600">July 2023 - September 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Continuous Learning Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Self-Taught Developer</h4>
            <p className="text-gray-600">Started coding at a young age and continuously expanded knowledge through self-learning</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Tech Community</h4>
            <p className="text-gray-600">Active participant in tech meetups and online developer communities</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Mentorship</h4>
            <p className="text-gray-600">Passionate about sharing knowledge and mentoring junior developers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;