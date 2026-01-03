import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolio';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Circuit Board Card */}
      <div className="card-pcb hover:border-pcb-gold transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col overflow-hidden">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute -top-3 -right-3 z-10">
            <div className="bg-pcb-gold text-pcb-dark px-3 py-1 rounded-lg font-bold text-sm chip-glow">
              ⭐ FEATURED
            </div>
          </div>
        )}

        {/* Project Image */}
        {project.image && (
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pcb-green via-transparent to-transparent opacity-60" />
            {/* Category Chip Overlay */}
            <div className="absolute top-4 left-4">
              <span className="inline-block bg-pcb-dark/80 backdrop-blur-sm border border-pcb-copper px-3 py-1 rounded-lg text-pcb-gold font-mono text-sm">
                {project.category}
              </span>
            </div>
          </div>
        )}

        {/* If no image, show category chip normally */}
        {!project.image && (
          <div className="mb-4">
            <span className="inline-block bg-pcb-copper/20 border border-pcb-copper px-3 py-1 rounded-lg text-pcb-gold font-mono text-sm">
              {project.category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pcb-gold transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-pcb-dark border border-pcb-copper/50 rounded text-xs font-mono text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-pcb-copper/30">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-pcb-copper hover:bg-pcb-gold text-white rounded-lg transition-all hover:scale-105"
              onClick={(e) => e.stopPropagation()}
            >
              <span>🚀</span>
              <span className="font-medium">Live Demo</span>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-pcb-copper hover:border-pcb-gold text-pcb-copper hover:text-pcb-gold rounded-lg transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <span>💻</span>
              <span className="font-medium">GitHub</span>
            </a>
          )}
          {project.links.frontend && (
            <a
              href={project.links.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 border border-pcb-copper hover:border-pcb-gold text-pcb-copper hover:text-pcb-gold rounded-lg transition-all text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <span>🎨</span>
              <span className="font-medium">Frontend</span>
            </a>
          )}
        </div>

        {/* Hover Circuit Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pcb-gold to-transparent circuit-trace" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pcb-gold to-transparent circuit-trace" />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef();
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Full Stack', 'AI/ML', 'DSA'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section bg-gradient-to-b from-pcb-green/20 to-pcb-dark py-20"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="projects-header text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Projects & Modules</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pcb-copper via-pcb-gold to-pcb-trace mx-auto mb-4" />
          <p className="text-gray-400 font-mono text-lg mb-8">
            Circuit Boards in Production
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-pcb-copper text-white chip-glow'
                    : 'bg-pcb-green/30 border border-pcb-copper/50 text-gray-300 hover:border-pcb-gold'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/Tyagirohan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-pcb-copper to-pcb-gold text-white rounded-lg font-bold text-lg hover:scale-105 transition-transform chip-glow"
          >
            <span>💻</span>
            <span>View All Projects on GitHub</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

