import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Button from '../components/ui/Button';
import photo from '../assets/images/photo_2025-04-05_17-41-25.jpg';

const AboutPage = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '10+', label: 'Awards' }
  ];

  return (
    <>
      <section className="pt-28 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get to know more about me, my background, and what drives me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Image Section - 1/4 width */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="relative rounded-lg overflow-hidden aspect-square max-w-md mx-auto lg:mx-0">
                <img 
                  src={photo} 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>

            {/* Content Section - 3/4 width */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl font-bold mb-4">
                I'm <span className="gradient-text">Lakshmi Swayampakula</span>, a Full Stack Developer
              </h2>
              <p className="text-gray-600 mb-4">
                I specialize in creating 
                elegant and efficient solutions for complex problems. My passion lies in 
                building user-friendly interfaces and powerful backend systems.
                My journey in tech began with curiosity and a knack for solving problems. Over time, that curiosity evolved into full-fledged development—from building responsive web interfaces to crafting intelligent backend systems using modern frameworks and AI tools.
              </p>
              <p className="text-gray-600 mb-4">
                I started my journey in tech when I was 18, teaching myself HTML and CSS 
                to create simple websites. Since then, I've evolved into a full-stack developer, 
                working with modern frameworks and tools to build robust applications.
              </p>
              <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me hiking in the mountains, playing Chess, or experimenting with new things.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button href="https://lakshmidevi--resume.tiiny.site" variant="primary">
                  Download CV <FaDownload className="ml-2" />
                </Button>
                <div className="flex items-center space-x-4">
                <FaLinkedin size={24} />
  <FaGithub size={24} />
  <FaTwitter size={24} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey So Far Section */}
<section className="bg-gray-50 py-16">
  <div className="container">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
      🚀 My Developer Console
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { value: "> dev --mode=fullstack", label: "Frontend, Backend, and Brainpower" },
        { value: "$ alias me='Tech Explorer'", label: "Lifelong Learner & Builder" },
        { value: "console.log('Hello, Research')", label: "Research. Innovation. Impact." },
        { value: "git push origin dreams", label: "Versioning Towards Greatness" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow text-center"
        >
          <div className="text-sm md:text-base font-mono font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-gray-600 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Journey Section
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-primary pl-8 pb-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full -ml-2"></div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Senior Developer</h3>
                <p className="text-gray-500">Tech Solutions Inc. | 2021 - Present</p>
                <p className="mt-2">
                  Leading development of enterprise web applications. Managing team of 5 developers
                  and implementing CI/CD workflow improvements.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-2 border-primary pl-8 pb-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full -ml-2"></div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
                <p className="text-gray-500">Digital Creations | 2018 - 2021</p>
                <p className="mt-2">
                  Developed responsive interfaces for client projects. Specialized in React-based 
                  applications and implemented design systems.
                </p>
              </div>
            </div>
            
            <div className="relative border-l-2 border-primary pl-8">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full -ml-2"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Junior Developer</h3>
                <p className="text-gray-500">StartUp Studio | 2016 - 2018</p>
                <p className="mt-2">
                  Started career as a junior developer working on website implementations
                  and learning modern development practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutPage;