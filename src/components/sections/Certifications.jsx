import { useRef } from 'react';
import { motion } from 'framer-motion';
import { certifications, publications } from '../../data/portfolio';

const Certifications = () => {
  const sectionRef = useRef();

  const categoryIcons = {
    'Programming': '💻',
    'Data Science': '📊',
    'Networking': '🌐',
    'Soft Skills': '🗣️'
  };

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="section bg-pcb-dark py-20"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Certifications & Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pcb-copper via-pcb-gold to-pcb-trace mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-pcb-gold mb-8 flex items-center">
              <span className="mr-3">🎓</span>
              Certifications & Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cert-card card-pcb hover:scale-105 transition-transform"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-pcb-copper/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">
                        {categoryIcons[cert.category] || '📜'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">
                        {cert.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-pcb-dark border border-pcb-copper rounded text-xs font-mono text-pcb-gold">
                          {cert.issuer}
                        </span>
                        <span className="text-gray-400 text-xs">
                          • {cert.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-3xl font-bold text-pcb-gold mb-8 flex items-center">
              <span className="mr-3">📄</span>
              Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="cert-card card-pcb hover:border-pcb-gold transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-pcb-gold transition-colors">
                        {pub.title}
                      </h4>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-pcb-copper hover:text-pcb-gold transition-colors font-medium"
                      >
                        <span>🔗</span>
                        <span>View Publication</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                      <div className="text-xs text-gray-500 mt-1">
                        {pub.venue}
                      </div>
                    </div>
                    <div className="ml-4 w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📑</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

