import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "web",
      description: "A complete e-commerce admin dashboard with analytics, inventory management, and order processing.",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React Native", "Firebase", "Redux"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Real Estate Platform",
      category: "web",
      description: "Property listing and search platform with virtual tours and mortgage calculator integration.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Travel Companion",
      category: "mobile",
      description: "Travel planning and navigation app with offline maps, local recommendations, and itinerary management.",
      image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React Native", "GraphQL", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Food Delivery UI Kit",
      category: "ui",
      description: "Comprehensive UI kit for food delivery apps with 50+ reusable components and 10 template screens.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Figma", "Adobe XD", "UI/UX"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Social Media Dashboard",
      category: "ui",
      description: "Modern social media management dashboard with analytics, post scheduling, and engagement tracking.",
      image: "https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Figma", "Sketch", "Prototyping"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills, creativity, and problem-solving abilities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'web' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'mobile' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${
              filter === 'ui' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setFilter('ui')}
          >
            UI/UX
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative group h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-end space-x-3">
                      <a 
                        href={project.liveLink} 
                        className="p-2 bg-white rounded-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        title="View Live"
                      >
                        <Eye size={20} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="p-2 bg-white rounded-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Live Demo
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="inline-flex items-center text-gray-700 hover:text-gray-900"
                  >
                    Code
                    <Github size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;