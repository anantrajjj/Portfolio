import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/Section';

const Skills = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const skillGroups = skills.reduce((acc, skill) => {
    (acc[skill.type] = acc[skill.type] || []).push(skill);
    return acc;
  }, {});

  return (
    <Section id="skills">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>Inventory.exe</SectionTitle>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(skillGroups).map(([type, skillsOfType], index) => (
            <motion.div
              key={type}
              className="pixel-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="pixel-font text-2xl text-shadow-hard text-[var(--pixel-accent-4)] mb-4">{type}</h3>
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skillsOfType.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-3">
                        <skill.icon className={`w-6 h-6 ${skill.color}`} />
                        <span className={`pixel-font text-lg text-white`}>{skill.name}</span>
                      </div>
                      <span className={`pixel-font text-md ${skill.color}`}>{skill.level}</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;