import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold gradient-text">NIROB PAUL</div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nirob Paul. Built with React & Tailwind.
          </p>
          <div className="flex gap-6">
            <a href="#hero" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
