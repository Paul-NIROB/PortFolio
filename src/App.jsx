import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIWork from './components/AIWork';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="particles-bg" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <AIWork />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Custom Animated Cursor (Subtle) */}
      <div className="hidden lg:block fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference">
        <div className="w-full h-full bg-white rounded-full opacity-20 animate-ping" />
      </div>
    </div>
  );
}

export default App;
