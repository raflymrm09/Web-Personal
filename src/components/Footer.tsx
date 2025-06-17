import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              Portofolio kipli
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Informasi disebelah Kanan
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Jawa Timur, Sidoarjo, Sedati, Tambak Cemandi
            </p>
            
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <button 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors flex items-center"
              >
                Thank You
                <ChevronUp size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;