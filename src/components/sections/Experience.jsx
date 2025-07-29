import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Star } from 'lucide-react';
import Section, { SectionTitle } from '@/components/Section';

const Experience = ({ experience }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <Section id="experience">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Experience.log</SectionTitle>

        <div className="space-y-8 relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-1 bg-[var(--pixel-light)] -translate-x-1/2"></div>
          
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:flex w-1/2"></div>
                <div className="w-full md:w-1/2">
                  <div className={`pixel-card ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl pixel-font text-[var(--pixel-accent-3)] mb-1">{exp.role}</h3>
                        <p className="text-xl text-[var(--pixel-accent-2)]">{exp.company}</p>
                      </div>
                      <div className="text-[var(--pixel-accent-1)] pixel-font text-md mt-2 md:mt-0 text-left md:text-right">
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Briefcase className="w-5 h-5 text-[var(--pixel-accent-4)] mt-1 flex-shrink-0" />
                          <span className="text-white text-lg">{achievement}</span>
                        </div>
                      ))}
                    </div>
                     <div className="mt-4 text-right pixel-font text-yellow-400">
                        +{exp.xp} XP GAINED
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-4 top-1/2 w-6 h-6 bg-[var(--pixel-accent-1)] border-2 border-[var(--pixel-dark)] -translate-x-1/2 -translate-y-1/2 md:left-1/2 flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-300"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;