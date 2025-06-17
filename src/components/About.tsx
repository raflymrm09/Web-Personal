import React from 'react';
import { Users, Briefcase, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A passionate Frontend Developer and UI/UX Designer with a keen eye for detail and a determination to deliver the very best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">15+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">30+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">8+</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">5+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I started my journey as a web developer in 2018, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My experience includes working with diverse clients from various industries, each with unique needs and preferences. This has helped me develop a versatile skill set that allows me to tackle any challenge.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm">Problem Solver</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm">Creative Thinker</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm">Team Player</div>
              <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm">Detail-Oriented</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Frontend Development</h4>
              <p className="text-gray-600">
                Creating responsive and interactive user interfaces with modern frameworks and libraries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">UI/UX Design</h4>
              <p className="text-gray-600">
                Designing intuitive and engaging user experiences that prioritize usability and aesthetics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Mobile Development</h4>
              <p className="text-gray-600">
                Building cross-platform mobile applications that work seamlessly across devices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Technical Writing</h4>
              <p className="text-gray-600">
                Creating clear, concise documentation and tutorials for technical concepts and products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;