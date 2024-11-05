import React from 'react';
import { motion } from 'framer-motion';
import Myimage from './pictures/kaifme.jpg'

function About() {
  return (
    <motion.section
      id="about"
      className="p-10 flex flex-col md:flex-row items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, scale: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
        hidden: { opacity: 0, scale: 0.95 }
      }}
    >
      <motion.img
        src={Myimage}
        alt="About Me"
        className="rounded-full w-40 h-40 mb-4 md:mb-0 md:mr-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div>
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-lg">
          Hello! I’m Mo Kaif Siddiqui, a Software Developer with a strong foundation in Computer Science,
          currently pursuing a B.Tech in Computer Science from ITS Engineering College, Greater Noida.
          I am passionate about web development, AI/ML, and data analytics.
        </p>
        <p className="mt-4 text-lg">
          With a CGPA of 8.00 and notable achievements such as ranking as District Topper in Matriculation
          and participation in interschool football, I bring both technical and leadership skills to the table.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
