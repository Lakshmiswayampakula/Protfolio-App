import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useSound } from '../../context/SoundContext';

const Footer = () => {
  const { playClickSound } = useSound();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">LS</span>
              </div>
              <h3 className="text-xl font-bold">Lakshmi Swayampakula</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Passionate about crafting innovative digital experiences. 
              Transforming ideas into reality through code, creativity, and collaboration.
              Let's build the future together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Education', 'Skills', 'Services'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                    onClick={() => playClickSound()}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: your.email@example.com</li>
              <li>Location: City, Country</li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              {[
                { icon: <FaGithub size={24} />, url: 'https://github.com/yourusername' },
                { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/yourusername' },
                { icon: <FaTwitter size={24} />, url: 'https://twitter.com/yourusername' },
                { icon: <FaEnvelope size={24} />, url: 'mailto:your.email@example.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                  onClick={() => playClickSound()}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Lakshmi Swayampakula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;