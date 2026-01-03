import { useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, education, achievements } from '../../data/portfolio';

const About = () => {
  const sectionRef = useRef();

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section bg-pcb-dark py-20"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pcb-copper via-pcb-gold to-pcb-trace mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Summary Card */}
          <div className="about-card card-pcb">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center mr-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pcb-gold mb-2">About Me</h3>
                <p className="text-gray-300 leading-relaxed">
                  {personalInfo.about || personalInfo.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="about-card card-pcb">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center mr-4">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-pcb-gold mb-2">Education</h3>
                <h4 className="text-xl font-semibold text-white mb-1">
                  {education.degree}
                </h4>
                <p className="text-pcb-copper font-medium mb-1">
                  {education.institution}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-mono text-sm">
                    {education.period}
                  </span>
                  <span className="text-pcb-gold font-bold">
                    GPA: {education.gpa}
                  </span>
                </div>
                <div className="mt-3 inline-block bg-pcb-gold/20 border border-pcb-gold px-3 py-1 rounded-lg">
                  <span className="text-pcb-gold font-semibold text-sm">
                    🏆 {education.achievement}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="about-card card-pcb lg:col-span-2">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center mr-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-pcb-gold">Key Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-pcb-dark/50 p-3 rounded-lg border border-pcb-copper/30"
                >
                  <span className="text-pcb-gold text-xl">▸</span>
                  <span className="text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="about-card card-pcb lg:col-span-2">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center mr-4">
                <span className="text-2xl">📫</span>
              </div>
              <h3 className="text-2xl font-bold text-pcb-gold">Contact Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center space-x-3 bg-pcb-dark/50 p-4 rounded-lg border border-pcb-copper/30 hover:border-pcb-gold transition-all"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                <div>
                  <div className="text-xs text-gray-400 font-mono mb-1">Email</div>
                  <div className="text-pcb-copper group-hover:text-pcb-gold transition-colors font-medium">
                    {personalInfo.email}
                  </div>
                </div>
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-pcb-dark/50 p-4 rounded-lg border border-pcb-copper/30 hover:border-pcb-gold transition-all"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">💼</span>
                <div>
                  <div className="text-xs text-gray-400 font-mono mb-1">LinkedIn</div>
                  <div className="text-pcb-copper group-hover:text-pcb-gold transition-colors font-medium">
                    View Profile
                  </div>
                </div>
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-pcb-dark/50 p-4 rounded-lg border border-pcb-copper/30 hover:border-pcb-gold transition-all"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">🔗</span>
                <div>
                  <div className="text-xs text-gray-400 font-mono mb-1">GitHub</div>
                  <div className="text-pcb-copper group-hover:text-pcb-gold transition-colors font-medium">
                    @{personalInfo.links.github.split('/').pop()}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

