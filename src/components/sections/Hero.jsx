import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import Scene from '../3d/Scene';
import { CircuitBoard } from '../3d/CircuitBoard';
import { Chip } from '../3d/Chip';
import { CircuitTrace } from '../3d/CircuitTrace';
import { LED } from '../3d/Components';
import { personalInfo } from '../../data/portfolio';

const HeroContent3D = () => {
  return (
    <group>
      {/* Main Circuit Board */}
      <CircuitBoard position={[0, 0, 0]} scale={1} />

      {/* Central Chip - Your name */}
      <Chip
        position={[0, 0.3, 0]}
        label="ROHAN TYAGI"
        scale={1.5}
        active={true}
        glowColor="#ffd700"
      />

      {/* Surrounding chips representing key skills */}
      <Chip
        position={[-5, 0.3, -3]}
        label="C++"
        scale={0.8}
        color="#00599C"
        glowColor="#00599C"
      />
      <Chip
        position={[5, 0.3, -3]}
        label="PYTHON"
        scale={0.8}
        color="#3776AB"
        glowColor="#3776AB"
      />
      <Chip
        position={[-5, 0.3, 3]}
        label="DSA"
        scale={0.8}
        color="#ff6b6b"
        glowColor="#ff6b6b"
      />
      <Chip
        position={[5, 0.3, 3]}
        label="SYSTEMS"
        scale={0.8}
        color="#4CAF50"
        glowColor="#4CAF50"
      />

      {/* Circuit traces connecting chips */}
      <CircuitTrace
        start={[0, 0.15, 0]}
        end={[-5, 0.15, -3]}
        color="#00599C"
      />
      <CircuitTrace
        start={[0, 0.15, 0]}
        end={[5, 0.15, -3]}
        color="#3776AB"
      />
      <CircuitTrace
        start={[0, 0.15, 0]}
        end={[-5, 0.15, 3]}
        color="#ff6b6b"
      />
      <CircuitTrace
        start={[0, 0.15, 0]}
        end={[5, 0.15, 3]}
        color="#4CAF50"
      />

      {/* Status LEDs */}
      <LED position={[-8, 0.3, -5]} color="#00ff00" active={true} />
      <LED position={[8, 0.3, -5]} color="#00ff00" active={true} />
      <LED position={[-8, 0.3, 5]} color="#00ff00" active={true} />
      <LED position={[8, 0.3, 5]} color="#00ff00" active={true} />
    </group>
  );
};

const Hero = () => {
  const sectionRef = useRef();

  useEffect(() => {
    // Animate text on mount with delay after loader
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.hero-description',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.4'
    )
    .fromTo('.hero-cta',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    );
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="section relative overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Scene>
          <HeroContent3D />
        </Scene>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pcb-dark/70 to-pcb-dark z-10" />

      {/* Content */}
      <div className="relative z-30 container-custom h-full flex flex-col justify-center items-center text-center px-4 pt-32 md:pt-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          {/* Name */}
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-4">
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 className="hero-subtitle text-2xl md:text-4xl font-medium text-pcb-copper mb-6">
            {personalInfo.title} • {personalInfo.company}
          </h2>

          {/* Description */}
          <p className="hero-description text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* Stats Bar */}
          <div className="hero-description grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="bg-pcb-green/30 border border-pcb-copper/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pcb-gold">500+</div>
              <div className="text-sm text-gray-400 font-mono">DSA Problems</div>
            </div>
            <div className="bg-pcb-green/30 border border-pcb-copper/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pcb-gold">20%</div>
              <div className="text-sm text-gray-400 font-mono">Performance ↑</div>
            </div>
            <div className="bg-pcb-green/30 border border-pcb-copper/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pcb-gold">40%</div>
              <div className="text-sm text-gray-400 font-mono">Crash Rate ↓</div>
            </div>
            <div className="bg-pcb-green/30 border border-pcb-copper/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-pcb-gold">30%</div>
              <div className="text-sm text-gray-400 font-mono">MTTR ↓</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-cta flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary group"
            >
              View Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

