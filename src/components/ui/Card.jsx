import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useSound } from '../../context/SoundContext';

const Card = ({ 
  image, 
  title, 
  description, 
  tags = [],
  demoLink,
  codeLink,
  animationDelay = 0
}) => {
  const { playClickSound } = useSound();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Links */}
        <div className="flex items-center space-x-3 mt-4">
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-secondary"
              onClick={() => playClickSound()}
            >
              <FaExternalLinkAlt className="mr-1" /> Demo
            </a>
          )}
          
          {codeLink && (
            <a 
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-secondary"
              onClick={() => playClickSound()}
            >
              <FaGithub className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;