import React from 'react';
import { Code, Users, Lightbulb, Heart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Leadership & Management",
      icon: Users,
      skills: ["Team leadership", "Project management", "Strategic planning", "Cross-functional collaboration", "Performance management"]
    },
    {
      title: "Technical Expertise",
      icon: Code,
      skills: ["Angular", "React", "Django", "Python", "AWS", "Firebase", "MySQL", "PostgreSQL", "NoSQL", "CodeIgniter", "Git", "PHP", "CI/CD", "React Native", "Ionic", "Capacitor"]
    },
    {
      title: "Product Development",
      icon: Lightbulb,
      skills: ["Product lifecycle management", "Requirements analysis", "User experience (UX) design", "Agile methodologies", "Quality assurance"]
    },
    {
      title: "Soft Skills",
      icon: Heart,
      skills: ["Adaptability", "Time management", "Conflict resolution", "Empathy", "Emotional intelligence"]
    }
  ];

  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Work With Me?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Proven Track Record</h4>
            <p className="text-gray-600">Successfully scaled engineering teams and delivered complex projects on time.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Tech Leadership</h4>
            <p className="text-gray-600">Strong technical background combined with strategic thinking and team leadership.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Innovation Focus</h4>
            <p className="text-gray-600">Constantly exploring new technologies and methodologies to drive better results.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Icon className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;