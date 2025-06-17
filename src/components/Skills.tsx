import React from 'react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: "HTML5", percentage: 95 },
    { name: "CSS3/SCSS", percentage: 90 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "React", percentage: 92 },
    { name: "Angular", percentage: 80 },
    { name: "Vue.js", percentage: 75 },
  ];

  const designSkills = [
    { name: "Figma", percentage: 90 },
    { name: "Adobe XD", percentage: 85 },
    { name: "Photoshop", percentage: 80 },
    { name: "Illustrator", percentage: 75 },
    { name: "UI/UX Principles", percentage: 95 },
    { name: "Responsive Design", percentage: 95 },
    { name: "Wireframing", percentage: 90 },
  ];
  
  const otherSkills = [
    "Git & GitHub",
    "Node.js",
    "Express",
    "MongoDB",
    "RESTful APIs",
    "GraphQL",
    "Webpack",
    "Jest",
    "Cypress",
    "AWS",
    "Firebase",
    "Docker",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I've acquired a diverse range of skills throughout my professional journey.
            Here's a comprehensive overview of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-blue-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Design</h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-purple-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;