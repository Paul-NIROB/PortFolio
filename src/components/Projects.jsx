import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "WideFrame",
      subtitle: "Movie Review Website",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase"],
      description: "Responsive movie review platform with clean UI and structured layout.",
      status: "Completed"
    },
    {
      title: "Educational Website",
      subtitle: "ConvertIAS Clone",
      tech: ["HTML", "CSS", "JavaScript", "Django", "MongoDB"],
      description: "Functional platform with notes, CSAT section, and evaluation system.",
      status: "Completed"
    },
    {
      title: "GMPCal",
      subtitle: "IPO & GMP Website",
      tech: ["React.js", "JavaScript"],
      description: "Web platform for IPO analysis and GMP tracking.",
      status: "Ongoing"
    },
    {
      title: "EventFlow",
      subtitle: "Event Social Platform",
      tech: ["Python", "React.js", "FastAPI", "SQLite", "JWT"],
      description: "Smart event-based social media platform for meetings and interactions.",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Work</span></h2>
          <p className="text-gray-400">Transforming complex requirements into simple, elegant solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">{project.status}</span>
                    <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-4">
                    <Github size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                    <ExternalLink size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
                
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
