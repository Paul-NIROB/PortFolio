import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Sharda University",
      period: "2023 - 2027",
      details: "CGPA: 7.89",
      icon: <GraduationCap className="text-blue-400" />
    },
    {
      degree: "Class XII - Science",
      institution: "Higher Secondary Education",
      period: "Completed",
      details: "Focused on Physics, Chemistry, and Mathematics.",
      icon: <GraduationCap className="text-purple-400" />
    },
    {
      degree: "Class X",
      institution: "Secondary Education",
      period: "Completed",
      details: "Foundation for science and engineering.",
      icon: <GraduationCap className="text-pink-400" />
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic <span className="gradient-text">Journey</span></h2>
          <p className="text-gray-400">My educational background and learning path.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <div className="p-4 bg-white/5 rounded-2xl">
                {edu.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <span className="text-sm font-mono text-primary">{edu.period}</span>
                </div>
                <p className="text-gray-400 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
