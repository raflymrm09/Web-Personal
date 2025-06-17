import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2x1 font-bold text-blue-500 hover:text-blue-600 transition-colors">
          Portofolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#certificates" className="text-gray-700 hover:text-blue-600 transition-colors">Certificates</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      } bg-white shadow-lg overflow-hidden`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#education" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
            <a 
              href="#skills" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#certificates" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Certificates
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
          
          {/* Social Icons - Mobile */}
          <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;