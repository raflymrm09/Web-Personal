import React, { useState } from 'react';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Advanced Frontend Web Development",
      issuer: "Udacity",
      date: "June 2023",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "React.js Expert Certification",
      issuer: "Meta",
      date: "March 2023",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "UI/UX Design Professional",
      issuer: "Google",
      date: "November 2022",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "Full Stack JavaScript Developer",
      issuer: "Coursera",
      date: "August 2022",
      image: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    }
  ];

  const [current, setCurrent] = useState(0);
  const length = certificates.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Certificates</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my skills and expertise in various technologies and methodologies.
          </p>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Award size={20} className="text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800 truncate">{cert.title}</h3>
                </div>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                <a 
                  href={cert.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  View Certificate
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`
                  ${index === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute top-0'}
                  transition-all duration-500 ease-in-out
                `}
              >
                {index === current && (
                  <div className="bg-white">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <Award size={20} className="text-blue-600 mr-2" />
                        <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-1">{cert.issuer}</p>
                      <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                      <a 
                        href={cert.link} 
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        View Certificate
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <button 
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:text-blue-600 focus:outline-none"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-800 hover:text-blue-600 focus:outline-none"
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;