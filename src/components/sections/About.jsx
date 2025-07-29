import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/Section';

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <Section id="about">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionTitle>Player_Stats.txt</SectionTitle>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <motion.div
            className="md:col-span-2 pixel-card"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-3xl pixel-font text-[var(--pixel-accent-1)] text-shadow-hard mb-4">Character</h3>
            <div className="w-full h-48 bg-black border-2 border-[var(--pixel-light)] mb-4 flex items-center justify-center overflow-hidden">
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bdfad264-169c-4b82-b705-fe1a0a5107bb/708bcab226012b2e14659ed7e2ab1e4f.jpg" alt="Anantraj Prasad" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-2xl font-bold text-[var(--pixel-accent-3)]">Anantraj Prasad</h4>
            <p className="text-[var(--pixel-accent-2)] text-xl">Level 21 CS Major</p>
          </motion.div>

          <motion.div
            className="md:col-span-3 pixel-card"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-3xl pixel-font text-[var(--pixel-accent-4)] text-shadow-hard mb-4">Dialogue</h3>
            <div className="space-y-4 text-white text-lg leading-relaxed">
              <p>
                <span className="text-[var(--pixel-accent-2)]">Anantraj:</span> "Greetings, traveler! I'm a Computer Science student on a quest to build amazing things with code."
              </p>
              <p>
                <span className="text-[var(--pixel-accent-2)]">Anantraj:</span> "My inventory is packed with skills in Data Structures, Algorithms, and full-stack development. I thrive on solving complex problems and turning ideas into reality."
              </p>
               <p>
                <span className="text-[var(--pixel-accent-2)]">Anantraj:</span> "Feel free to explore my completed quests and collected artifacts!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;