import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden glass flex items-center justify-center border border-white/10">
              <img 
                src={profileImg} 
                alt="Nirob Paul" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="gradient-text">Me</span></h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Aspiring Computer Science student with strong foundations in software development and data analysis. 
                Passionate about building impactful tech solutions and continuously learning modern technologies.
              </p>
              <p>
                My journey in tech is driven by curiosity and a desire to solve real-world problems. 
                I enjoy exploring the intersection of AI and Web Technologies to create seamless user experiences.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Currently Learning</p>
                <p className="text-white">Exploring Agentic AI, Autonomous Systems, and LLM-based Applications</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass-card p-4 rounded-xl">
                  <h4 className="text-white font-bold text-2xl">7.89</h4>
                  <p className="text-xs uppercase tracking-wider text-gray-500">CGPA B.Tech</p>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <h4 className="text-white font-bold text-2xl">4+</h4>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Major Projects</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
