import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Card from '../components/ui/Card';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  
  // Extract unique tags from all projects
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section className="pt-28 pb-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of web and mobile applications, showcasing my skills and experience.
          </p>
        </motion.div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`px-4 py-2 rounded-full ${
                filter === tag 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
              onClick={() => setFilter(tag)}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                animationDelay={index * 0.1}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;