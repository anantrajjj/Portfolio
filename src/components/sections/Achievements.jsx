import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/Section';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Achievements = ({ achievements }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.5 },
    visible: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <Section id="achievements">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>Achievements.log</SectionTitle>
        <TooltipProvider>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((ach, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <motion.div
                    className="flex flex-col items-center text-center gap-4 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                  >
                    <div className="p-4 bg-[var(--pixel-light)] pixel-border">
                      <ach.icon className="w-16 h-16 text-[var(--pixel-accent-4)]" />
                    </div>
                    <p className="pixel-font text-white text-lg">{ach.title}</p>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="pixel-card text-white">
                  <p className="pixel-font text-[var(--pixel-accent-2)]">{ach.org} - {ach.date}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </Section>
  );
};

export default Achievements;