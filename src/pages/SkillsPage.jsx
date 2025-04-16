import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaLanguage, FaPalette, FaBug } from 'react-icons/fa';

const SkillsPage = () => {
  const skills = {
    'Programming Languages & Frameworks': [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'React JS', level: 85 },
      { name: 'Angular', level: 80 },
      { name: 'Ionic', level: 75 },
      { name: 'Bootstrap', level: 85 },
      { name: 'jQuery', level: 80 },
    ],
    'Database & System Design': [
      { name: 'SQL', level: 85 },
      { name: 'Linux', level: 80 },
      { name: 'Data Structures & Algorithms', level: 85 },
      { name: 'System Design', level: 80 },
      { name: 'Machine Learning', level: 75 },
    ],
    'Developer Tools': [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Android Studio', level: 80 },
      { name: 'Xcode', level: 75 },
      { name: 'PyCharm', level: 85 },
      { name: 'Google Cloud', level: 75 },
    ],
    'UI/UX & Design Tools': [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Sketch', level: 75 },
      { name: 'Framer', level: 70 },
      { name: 'Invision', level: 75 },
      { name: 'Prototyping & Wireframing', level: 85 },
    ],
    'Testing & CI/CD': [
      { name: 'Playwright', level: 80 },
      { name: 'Jenkins', level: 75 },
    ],
    'Soft Skills & Languages': [
      { name: 'Analytical Thinking', level: 90 },
      { name: 'Problem-solving', level: 90 },
      { name: 'Collaboration & Communication', level: 90 },
      { name: 'Teamwork', level: 95 },
      { name: 'English', level: 95 },
      { name: 'Telugu', level: 100 },
      { name: 'Hindi', level: 85 },
    ],
  };

  const icons = {
    'Programming Languages & Frameworks': <FaCode className="text-4xl text-blue-500" />,
    'Database & System Design': <FaDatabase className="text-4xl text-green-500" />,
    'Developer Tools': <FaTools className="text-4xl text-purple-500" />,
    'UI/UX & Design Tools': <FaPalette className="text-4xl text-red-500" />,
    'Testing & CI/CD': <FaBug className="text-4xl text-yellow-500" />,
    'Soft Skills & Languages': <FaLanguage className="text-4xl text-indigo-500" />,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        > 
          <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-12">My Skills</h1>
          <p className="text-xl text-gray-600">A comprehensive overview of my technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-6">
                {icons[category]}
                <h2 className="text-2xl font-semibold text-gray-800 ml-4">{category}</h2>
              </div>
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
