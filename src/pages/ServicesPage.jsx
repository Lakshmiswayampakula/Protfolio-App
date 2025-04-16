import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaChartLine, FaCode, FaServer } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      title: 'Web Development',
      icon: <FaLaptopCode className="text-5xl text-blue-500" />,
      description: 'Custom web applications built with modern technologies like React, Node.js, and Express. Responsive, scalable, and user-friendly solutions.',
      features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      title: 'Mobile Development',
      icon: <FaMobileAlt className="text-5xl text-green-500" />,
      description: 'Native and cross-platform mobile applications for iOS and Android. Focus on user experience and performance.',
      features: ['iOS & Android Apps', 'Cross-platform Solutions', 'Native Performance', 'Offline Capabilities']
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="text-5xl text-purple-500" />,
      description: 'Robust backend systems and APIs. Secure, scalable, and maintainable server-side solutions.',
      features: ['RESTful APIs', 'Microservices', 'Authentication', 'Data Processing']
    },
    {
      title: 'Database Solutions',
      icon: <FaDatabase className="text-5xl text-red-500" />,
      description: 'Database design, optimization, and management. From SQL to NoSQL solutions.',
      features: ['Database Design', 'Query Optimization', 'Data Migration', 'Backup Solutions']
    },
    {
      title: 'UI/UX Design',
      icon: <FaCode className="text-5xl text-yellow-500" />,
      description: 'Beautiful and intuitive user interfaces. Focus on user experience and accessibility.',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Accessibility']
    },
    {
      title: 'Performance Optimization',
      icon: <FaChartLine className="text-5xl text-indigo-500" />,
      description: 'Application performance optimization and monitoring. Faster load times and better user experience.',
      features: ['Load Time Optimization', 'Resource Management', 'Caching Strategies', 'Performance Monitoring']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-12">Services</h1>
          <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
