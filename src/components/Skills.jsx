import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cpu, Layers, MessageSquare, Terminal, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="text-blue-400" />,
      skills: ["C", "Java", "Python", "React.js"]
    },
    {
      title: "Core CS",
      icon: <Cpu className="text-purple-400" />,
      skills: ["DBMS", "OS", "DSA", "Computer Networks", "TOC"]
    },
    {
      title: "Tools",
      icon: <Terminal className="text-pink-400" />,
      skills: ["Git", "GitHub", "VS Code", "Eclipse", "Jupyter", "Colab"]
    },
    {
      title: "Concepts",
      icon: <Layers className="text-green-400" />,
      skills: ["OOP", "Data Structures", "Algorithms"]
    },
    {
      title: "Soft Skills",
      icon: <MessageSquare className="text-yellow-400" />,
      skills: ["Communication", "Leadership", "Research"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white/5 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="text-gray-400">A collection of tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:border-primary/50 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
