import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '../data/education';
import { FaGraduationCap, FaMedal, FaExternalLinkAlt } from 'react-icons/fa';

const EducationPage = () => {
  return (
    <section className="pt-28 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Academic Education */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-primary text-2xl mr-3" />
              <h2 className="text-2xl font-bold">Academic Education</h2>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <span className="bg-primary text-white text-sm px-3 py-1 rounded">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{item.institution}, {item.location}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {item.courses && item.courses.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, i) => (
                          <span 
                            key={i} 
                            className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <FaMedal className="text-primary text-2xl mr-3" />
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold mb-1">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {cert.issuer} | {cert.date}
                  </p>
                  {cert.link && (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary flex items-center text-sm"
                    >
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="ml-1" size={12} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Additional Learning Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-gray-600 mb-4">
                I'm committed to ongoing professional development through various online platforms:
              </p>
              <ul className="space-y-2">
                {['Udemy', 'Coursera', 'freeCodeCamp', 'Pluralsight'].map((platform, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {platform}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;