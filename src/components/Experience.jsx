import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Soft Skills & DSA Bootcamp",
      organization: "Sharda University",
      period: "Training",
      icon: <Briefcase className="text-blue-400" />
    },
    {
      title: "Full Stack Development",
      organization: "Udemy",
      period: "Training",
      icon: <Briefcase className="text-purple-400" />
    }
  ];

  const certifications = [
    "Deloitte Data Analytics",
    "JP Morgan Software Engineering",
    "AWS Cloud Practitioner",
    "Microsoft Prompt Engineering",
    "MS Excel Certification"
  ];

  return (
    <section id="experience" className="py-24 bg-white/5 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <Briefcase className="text-primary" /> Training & Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-white/10 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 transition-transform" />
                  <div className="glass-card p-6 rounded-2xl">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                    <p className="text-gray-400">{exp.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <Award className="text-primary" /> Certifications
            </h2>
            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="glass-card p-4 rounded-xl flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-gray-300 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
