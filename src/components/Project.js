import React from 'react';
import { motion } from 'framer-motion';
import Rolldice from './pictures/roll dice game.png';
import Marks from './pictures/marks prediction using study hours.png';
import Deepfake from './pictures/deep fake video detection project.png';

function Projects() {
  const projectList = [
    {
      title: "Roll Dice Game",
      description: "Developed a dice rolling game using React.js where players choose a number between 1 and 6. If the dice matches their number, points are added; otherwise, points are deducted.",
      link: "https://clinquant-narwhal-6f0b24.netlify.app/",
      imageUrl: Rolldice
    },
    {
      title: "Marks Prediction Using Study Hours",
      description: "Built a machine learning model in Python to predict students' marks based on study hours, using data preprocessing, EDA, and Linear Regression to optimize accuracy.",
      link: "https://github.com/kaif8947",
      imageUrl: Marks
    },
    {
      title: "Deep Fake Video Detection",
      description: "Created an AI/ML solution to detect deep fake videos with CNNs, LSTMs, and OpenCV, implementing a Flask backend and React frontend for real-time detection.",
      link: "https://github.com/kaif8947",
      imageUrl: Deepfake
    }
  ];

  return (
    <motion.section
      id="projects"
      className="p-10"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        hidden: { opacity: 0 }
      }}
    >
      <h2 className="text-3xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projectList.map((project) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-gray-900 p-5 rounded shadow-lg hover:shadow-2xl transition-shadow duration-300 transform-gpu hover:rotate-2 hover:scale-105"
            whileHover={{ rotateY: 10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="rounded mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 mt-4 inline-block">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
