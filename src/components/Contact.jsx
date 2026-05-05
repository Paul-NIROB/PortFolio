import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-gray-400">Have a question or want to work together? Drop a message!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:nirobpaulgetit@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                    <p className="text-white font-medium">nirobpaulgetit@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://github.com/Paul-NIROB" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Github className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">GitHub</p>
                    <p className="text-white font-medium">github.com/Paul-NIROB</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/nirob-paul-9630a028b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/nirob-paul</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors text-white resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 glow hover:bg-secondary transition-all"
              >
                <Send size={18} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
