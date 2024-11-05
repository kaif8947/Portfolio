import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skillsData = [
    {
        category: "Programming Languages",
        skills: [
          { name: "C++", level: 80 },
          { name: "Java", level: 85 },
          { name: "JavaScript", level: 80 },
          { name: "Python", level: 75 },
          { name: "C", level: 70 }
        ]
      },
      {
        category: "Frameworks & Libraries",
        skills: [
          { name: "React.js", level: 80 },
          { name: "Spring Boot", level: 70 },
          { name: "Hibernate", level: 65 },
          { name: "TensorFlow", level: 75 },
          { name: "PyTorch", level: 70 }
        ]
      },
      {
        category: "Dev Tools & Databases",
        skills: [
          { name: "Git", level: 85 },
          { name: "VS Code", level: 80 },
          { name: "MySQL", level: 75 },
          { name: "MongoDB", level: 70 },
          { name: "Apache Tomcat", level: 65 }
        ]
      }
  ];

  return (
    <section id="skills" className="p-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <div key={category.category} className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">{category.category}</h3>
            <ul>
              {category.skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  className="skill-card mb-4 relative bg-blue-500 p-4 rounded transform transition-transform duration-300"
                  whileHover={{ rotateY: 180 }}
                  style={{ perspective: '1000px' }}
                >
                  <div className="front-face text-white text-lg">{skill.name}</div>
                  <div className="back-face absolute top-0 left-0 w-full h-full bg-gray-900 text-white flex items-center justify-center rounded">
                    <span className="text-lg font-bold">{skill.level}% Proficiency</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
