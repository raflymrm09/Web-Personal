import React from 'react';
import { BookOpen, GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2016 - 2018",
      description: "Specialized in Human-Computer Interaction and Artificial Intelligence. Graduated with honors and completed a thesis on user experience design patterns."
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Massachusetts Institute of Technology",
      period: "2012 - 2016",
      description: "Focused on web technologies and software development. Participated in multiple hackathons and led the university's web development club."
    },
    {
      degree: "High School Diploma",
      institution: "Lincoln High School",
      period: "2008 - 2012",
      description: "Graduated with honors. Received awards for excellence in mathematics and computer science."
    }
  ];

  return (
    <section id="education" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My academic journey that has contributed to my professional growth and expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Education Items */}
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`mb-12 relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10 flex items-center justify-center">
                  {index === 0 ? (
                    <GraduationCap size={16} className="text-white" />
                  ) : (
                    <BookOpen size={16} className="text-white" />
                  )}
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:pr-12 md:text-right' 
                    : 'md:pl-12 md:text-left md:self-end'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <h4 className="text-blue-600 font-medium mb-3">{item.institution}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternate layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;