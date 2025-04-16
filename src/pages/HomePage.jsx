import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaDownload, FaServer, FaDatabase, FaPalette, FaBug, FaLanguage, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import Card from '../components/ui/Card';

const HomePage = () => {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Lakshmi Swayampakula</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
                Full Stack Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                I build exceptional and accessible digital experiences 
                for the web. Specialized in creating modern, responsive
                applications with clean and efficient code.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button to="/projects" size="lg">
                  View Projects <FaArrowRight className="ml-2" />
                </Button>
                <Button href="https://lakshmidevi--resume.tiiny.site" variant="secondary" size="lg">
                  Download Resume <FaDownload className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out some of my recent work that showcases my skills and passion for creating
              exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button to="/projects">
              View All Projects <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Overview Section */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">My Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I specialize in a range of technologies that allow me to build complete, 
              end-to-end solutions. Here's a breakdown of my core competencies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Frontend Development", 
                icon: <FaCode className="text-4xl text-blue-500" />,
                description: "Creating beautiful, responsive, and user-friendly interfaces",
                items: [
                  { name: "React.js", level: 90 },
                  { name: "Next.js", level: 85 },
                  { name: "JavaScript/TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 85 },
                  { name: "Angular", level: 80 },
                  { name: "Ionic", level: 75 }
                ]
              },
              { 
                title: "Backend Development", 
                icon: <FaServer className="text-4xl text-green-500" />,
                description: "Building robust and scalable server-side applications",
                items: [
                  { name: "Node.js", level: 85 },
                  { name: "Express", level: 80 },
                  { name: "Python", level: 90 },
                  { name: "RESTful APIs", level: 85 },
                  { name: "GraphQL", level: 75 },
                  { name: "System Design", level: 80 }
                ]
              },
              { 
                title: "Database & Cloud", 
                icon: <FaDatabase className="text-4xl text-purple-500" />,
                description: "Managing data and deploying applications in the cloud",
                items: [
                  { name: "SQL", level: 85 },
                  { name: "MongoDB", level: 80 },
                  { name: "PostgreSQL", level: 75 },
                  { name: "Google Cloud", level: 75 },
                  { name: "Firebase", level: 80 },
                  { name: "AWS", level: 70 }
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">{item.name}</span>
                        <span className="text-gray-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button to="/skills" size="lg">
              View All Skills <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">My Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer comprehensive solutions to help you build and grow your digital presence.
              Here are my core service offerings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Web Development", 
                icon: <FaLaptopCode className="text-4xl text-blue-500" />,
                description: "Custom web applications built with modern technologies. From simple websites to complex web applications.",
                features: [
                  "Responsive Design",
                  "Modern Frameworks",
                  "Performance Optimization",
                  "Cross-browser Compatibility",
                  "SEO Optimization",
                  "Accessibility Standards"
                ]
              },
              { 
                title: "Mobile Development", 
                icon: <FaMobileAlt className="text-4xl text-green-500" />,
                description: "Native and cross-platform mobile applications for iOS and Android. Focus on user experience and performance.",
                features: [
                  "iOS & Android Apps",
                  "Cross-platform Solutions",
                  "Native Performance",
                  "Offline Capabilities",
                  "Push Notifications",
                  "App Store Optimization"
                ]
              },
              { 
                title: "Backend Solutions", 
                icon: <FaServer className="text-4xl text-purple-500" />,
                description: "Robust backend systems and APIs. Secure, scalable, and maintainable server-side solutions.",
                features: [
                  "API Development",
                  "Database Design",
                  "Cloud Integration",
                  "Security Implementation",
                  "Performance Tuning",
                  "System Architecture"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button to="/services" size="lg">
              View All Services <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start a Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and collaborations.
            Let's create something amazing together!
          </p>
          <Button to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
};

export default HomePage;