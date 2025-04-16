import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SoundToggle from '../ui/SoundToggle';
import { useSound } from '../../context/SoundContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Education', path: '/education' },
  { name: 'Skills', path: '/skills' },
  { name: 'Services', path: '/services' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { playClickSound } = useSound();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    playClickSound();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white bg-opacity-90 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={() => playClickSound()}>
          <span className="text-2xl font-bold gradient-text">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium hover:text-primary transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-dark'
              }`}
              onClick={() => playClickSound()}
            >
              {link.name}
            </Link>
          ))}
          <SoundToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <SoundToggle />
          <button 
            className="ml-4 text-dark focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium hover:text-primary transition-colors px-4 py-2 ${
                  location.pathname === link.path ? 'text-primary' : 'text-dark'
                }`}
                onClick={() => {
                  playClickSound();
                  closeMenu();
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;