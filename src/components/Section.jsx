import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      key={id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen py-24 px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const SectionTitle = ({ children }) => (
  <motion.h2
    className="text-4xl md:text-6xl pixel-font text-[var(--pixel-accent-2)] text-shadow-hard mb-12 text-center"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.h2>
);

export default Section;