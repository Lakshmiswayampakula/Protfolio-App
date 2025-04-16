import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSound } from '../../context/SoundContext';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  ...props 
}) => {
  const { playClickSound } = useSound();
  
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none';
  
  const variants = {
    primary: 'bg-primary hover:bg-secondary text-white shadow hover:shadow-md',
    secondary: 'bg-white border border-primary text-primary hover:bg-primary hover:text-white',
    outline: 'bg-transparent border border-gray-300 text-dark hover:border-primary hover:text-primary',
    text: 'bg-transparent text-primary hover:text-secondary underline-offset-2 hover:underline',
  };
  
  const sizes = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const handleClick = (e) => {
    playClickSound();
    if (onClick) onClick(e);
  };

  const content = (
    <motion.span 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );
  
  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={handleClick} {...props}>
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={handleClick} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={handleClick} {...props}>
      {content}
    </button>
  );
};

export default Button;