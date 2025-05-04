import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Button = ({ text, onClick, className, icon }) => {
  const { darkMode } = useTheme();

  return (
    <button
      onClick={onClick}
      className={`border-2 ${darkMode ? 'border-gray-400 text-white bg-transparent hover:bg-gray-700 hover:border-blue-400' 
        : 'border-gray-500 text-gray-500 bg-transparent hover:bg-gray-200 hover:border-blue-500'} 
        rounded-full px-6 py-2 
        transition-colors duration-300 
        ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;