import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'certifications', label: 'Certs', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-pcb-dark/90 backdrop-blur-lg border-b border-pcb-copper/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pcb-copper to-pcb-gold flex items-center justify-center chip-glow">
                <span className="text-white font-bold font-mono">RT</span>
              </div>
              <span className="text-white font-bold text-xl hidden md:block group-hover:text-pcb-gold transition-colors">
                Rohan Tyagi
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 font-mono text-sm ${
                    activeSection === item.id
                      ? 'bg-pcb-copper text-white'
                      : 'text-gray-300 hover:text-pcb-gold hover:bg-pcb-green/30'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              {/* Theme Toggle */}
              <ThemeToggle />
              {/* Resume Download Button */}
              <a
                href="/resume.pdf"
                download="Rohan_Tyagi_Resume.pdf"
                className="ml-2 px-4 py-2 bg-pcb-copper hover:bg-pcb-gold text-white rounded-lg font-medium flex items-center space-x-2 transition-colors duration-300"
                title="Download Resume"
              >
                <span>📄</span>
                <span>Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
            >
              <span className={`w-6 h-0.5 bg-pcb-gold transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-pcb-gold transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-pcb-gold transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 w-64 bg-pcb-dark border-l border-pcb-copper z-40 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-4 mt-20">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all text-left ${
                    activeSection === item.id
                      ? 'bg-pcb-copper text-white'
                      : 'text-gray-300 hover:bg-pcb-green/30 hover:text-pcb-gold'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </motion.button>
              ))}
              {/* Mobile Resume Download */}
              <motion.a
                href="/resume.pdf"
                download="Rohan_Tyagi_Resume.pdf"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="px-4 py-3 bg-pcb-copper hover:bg-pcb-gold text-white rounded-lg font-medium text-center transition-colors duration-300"
                title="Download Resume"
              >
                <span className="mr-3">📄</span>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

