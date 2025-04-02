import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="mailto:nishantonline1@gmail.com"
            className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Mail size={32} className="text-gray-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 text-center">nishantonline1@gmail.com</p>
          </a>

          <a
            href="tel:7980878844"
            className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Phone size={32} className="text-gray-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 text-center">7980878844</p>
          </a>

          <a
            href="https://linkedin.com/in/technishant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <Linkedin size={32} className="text-gray-700 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
            <p className="text-gray-600 text-center">Connect on LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;