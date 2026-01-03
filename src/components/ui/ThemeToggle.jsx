import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check localStorage or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    
    // Default to dark mode if no preference is saved
    const shouldBeDark = savedTheme === 'light' ? false : true;
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-lg bg-pcb-green/30 border border-pcb-copper/50 flex items-center justify-center hover:border-pcb-gold transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? '🌙' : '☀️'}
    </motion.button>
  );
};

export default ThemeToggle;
