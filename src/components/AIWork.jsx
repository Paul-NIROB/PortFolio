import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Sparkles } from 'lucide-react';

const AIWork = () => {
  return (
    <section id="ai-work" className="py-24 bg-white/5 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI & <span className="gradient-text">Agentic AI Work</span></h2>
          <p className="text-gray-400">Exploring the future of autonomous systems and intelligent agents.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Bot size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-2xl text-primary">
                  <Cpu size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Autonomous Research Agent</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs font-mono text-blue-400">Python</span>
                    <span className="text-xs font-mono text-purple-400">LangChain</span>
                    <span className="text-xs font-mono text-pink-400">LLMs</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Built an intelligent agent capable of performing autonomous research using tools like web search and knowledge sources. 
                Implements multi-step reasoning and dynamic tool usage.
              </p>

              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <Sparkles size={16} />
                <span>Multi-step reasoning & Dynamic tool usage</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIWork;
