import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight">
              Hi, I'm <span className="text-blue-600">Moch Rafli Muchibbin</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">Frontend Developer & UI/UX Designer</h2>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
              I craft responsive websites where technology meets creativity. My expertise lies in creating intuitive digital experiences through clean designs and optimized code.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                <img 
                  src="fotorafli.jpg" 
                  alt="Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="font-bold">5+</span>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-sm">
                  <span className="font-bold">UI/UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;