import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Scene from '../3d/Scene';
import { Resistor, Capacitor, LED, Transistor } from '../3d/Components';
import { skills } from '../../data/portfolio';

const SkillsContent3D = () => {
  return (
    <group position={[0, 0, 0]}>
      {/* C++ - Resistor */}
      <Resistor position={[-3, 0, -2]} rotation={[0, 0, Math.PI / 4]} color="#00599C" />
      
      {/* Python - Capacitor */}
      <Capacitor position={[3, 0, -2]} rotation={[0, 0, Math.PI / 4]} />
      
      {/* DSA - LED (Red) */}
      <LED position={[-3, 0, 2]} color="#ff6b6b" active={true} />
      
      {/* Systems - Transistor */}
      <Transistor position={[3, 0, 2]} rotation={[0, 0, 0]} />
      
      {/* Additional components */}
      <Resistor position={[0, 0, -3]} rotation={[0, 0, 0]} color="#4CAF50" />
      <LED position={[0, 0, 3]} color="#ffd700" active={true} />
    </group>
  );
};

const SkillBar = ({ skill, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const barRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-pcb-gold font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-pcb-dark rounded-full overflow-hidden border border-pcb-copper/30">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-pcb-copper via-pcb-gold to-pcb-trace relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef();
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages', icon: '💻' },
    { id: 'aitools', label: 'AI Tools', icon: '🤖' },
    { id: 'csda', label: 'CS/DSA', icon: '🧮' },
    { id: 'systems', label: 'Systems', icon: '⚙️' },
    { id: 'eda', label: 'EDA', icon: '🔌' },
    { id: 'tools', label: 'Tools', icon: '🔧' },
    { id: 'other', label: 'Other', icon: '✨' }
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section relative bg-pcb-dark py-20 overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Scene enableControls={false}>
          <SkillsContent3D />
        </Scene>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Skills & Components</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pcb-copper via-pcb-gold to-pcb-trace mx-auto mb-4" />
          <p className="text-gray-400 font-mono text-lg">
            Component Specifications & Capabilities
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-pcb-copper text-white chip-glow'
                  : 'bg-pcb-green/30 border border-pcb-copper/50 text-gray-300 hover:border-pcb-gold'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="max-w-4xl mx-auto">
          {/* Languages */}
          {activeTab === 'languages' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skill-card card-pcb"
            >
              <h3 className="text-2xl font-bold text-pcb-gold mb-6 flex items-center">
                <span className="mr-3">💻</span>
                Programming Languages
              </h3>
              {skills.languages.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          )}

          {/* AI Tools */}
          {activeTab === 'aitools' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skill-card card-pcb"
            >
              <h3 className="text-2xl font-bold text-pcb-gold mb-6 flex items-center">
                <span className="mr-3">🤖</span>
                AI & Modern Development Tools
              </h3>
              {skills.aitools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          )}

          {/* CS/DSA */}
          {activeTab === 'csda' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skill-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.csda.map((skill, index) => (
                  <div key={skill.name} className="card-pcb">
                    <SkillBar skill={skill} delay={index * 0.05} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Systems */}
          {activeTab === 'systems' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skill-card card-pcb"
            >
              <h3 className="text-2xl font-bold text-pcb-gold mb-6 flex items-center">
                <span className="mr-3">⚙️</span>
                Systems & Performance
              </h3>
              {skills.systems.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          )}

          {/* Tools */}
          {activeTab === 'tools' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skill-card"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="card-pcb text-center py-6 hover:scale-105 transition-transform"
                  >
                    <span className="text-3xl mb-2 block">🔧</span>
                    <span className="text-white font-medium">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* EDA */}
          {activeTab === 'eda' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skill-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.eda.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card-pcb flex items-center space-x-4 hover:border-pcb-gold transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-pcb-copper/20 flex items-center justify-center">
                      <span className="text-2xl">🔌</span>
                    </div>
                    <span className="text-white font-medium">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Other Skills */}
          {activeTab === 'other' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skill-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.other.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="card-pcb text-center py-6 hover:scale-105 transition-transform"
                  >
                    <span className="text-3xl mb-2 block">✨</span>
                    <span className="text-white font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

