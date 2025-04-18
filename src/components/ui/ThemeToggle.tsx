import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {theme === 'dark' ? (
          <Moon className="text-white" size={20} />
        ) : (
          <Sun className="text-yellow-500" size={20} />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;