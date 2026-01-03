import { useRef } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';

const Experience = () => {
  const sectionRef = useRef();
  const timelineRef = useRef();

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section bg-gradient-to-b from-pcb-dark to-pcb-green/20 py-20"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pcb-copper via-pcb-gold to-pcb-trace mx-auto mb-4" />
          <p className="text-gray-400 font-mono text-lg">
            Circuit Path: Career Timeline
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
          {/* Vertical Trace Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-pcb-copper/30 timeline-trace" />

          {experience.map((exp, index) => (
            <div key={exp.id} className="experience-card relative mb-12 last:mb-0">
              {/* Timeline Node (Chip) */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-16 h-16 z-10">
                <div className="w-full h-full rounded-lg bg-pcb-dark border-2 border-pcb-gold flex items-center justify-center chip-glow">
                  <div className="w-10 h-10 rounded bg-gradient-to-br from-pcb-copper to-pcb-gold flex items-center justify-center">
                    <span className="text-white font-bold font-mono text-sm">
                      {exp.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="card-pcb hover:scale-105 transition-transform duration-300"
                >
                  {/* Period Badge */}
                  <div className="inline-block bg-pcb-copper/20 border border-pcb-copper px-3 py-1 rounded-lg mb-3">
                    <span className="text-pcb-gold font-mono text-sm">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <h4 className="text-lg font-semibold text-pcb-copper mb-1">
                    {exp.company}
                  </h4>

                  {/* Location */}
                  <p className="text-gray-400 font-mono text-sm mb-4">
                    📍 {exp.location}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <span className="text-pcb-gold mt-1">▸</span>
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  {exp.metrics && (
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {Object.entries(exp.metrics).map(([key, value]) => (
                        <div key={key} className="bg-pcb-dark/50 rounded px-3 py-2 border border-pcb-copper/30">
                          <div className="text-xl font-bold text-pcb-gold">
                            {value}%
                          </div>
                          <div className="text-xs text-gray-400 font-mono">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          ))}

          {/* End Node */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -bottom-4">
            <div className="w-4 h-4 rounded-full bg-pcb-gold animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

