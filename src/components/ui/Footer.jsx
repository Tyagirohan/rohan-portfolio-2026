import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pcb-dark border-t border-pcb-copper/30 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pcb-copper to-pcb-gold flex items-center justify-center">
                <span className="text-white font-bold font-mono">RT</span>
              </div>
              <span className="text-white font-bold text-xl">Rohan Tyagi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              R&D Engineer passionate about performance optimization, systems programming, and solving complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-pcb-gold font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-pcb-gold transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-pcb-gold font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pcb-green/30 border border-pcb-copper/50 flex items-center justify-center hover:border-pcb-gold hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <span>💻</span>
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-pcb-green/30 border border-pcb-copper/50 flex items-center justify-center hover:border-pcb-gold hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <span>💼</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-lg bg-pcb-green/30 border border-pcb-copper/50 flex items-center justify-center hover:border-pcb-gold hover:scale-110 transition-all"
                aria-label="Email"
              >
                <span>📧</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pcb-copper/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-mono">
              © {currentYear} Rohan Tyagi. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs font-mono">
              Built with React, Three.js, GSAP & TailwindCSS
            </p>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-pcb-copper hover:bg-pcb-gold text-white flex items-center justify-center chip-glow z-40"
          aria-label="Scroll to top"
        >
          <span className="text-xl">↑</span>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

