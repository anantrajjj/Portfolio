import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from '@/components/Section';

const Home = ({ onStart }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="home" className="flex items-center justify-center h-screen">
      <div className="text-center max-w-4xl px-4">
        <motion.div
          className="mb-8"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="w-32 h-32 mx-auto mb-6 relative floating">
            <div className="pixel-border bg-[var(--pixel-dark)] w-full h-full flex items-center justify-center overflow-hidden">
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bdfad264-169c-4b82-b705-fe1a0a5107bb/708bcab226012b2e14659ed7e2ab1e4f.jpg" alt="Anantraj Prasad" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 glitch-text pixel-font"
          data-text="ANANTRAJ PRASAD"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          ANANTRAJ PRASAD
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          A Retro Portfolio Adventure
        </motion.p>

        {showButton && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <Button onClick={onStart} className="pixel-button bg-[var(--pixel-accent-1)] text-xl sm:text-2xl px-6 sm:px-8 py-3 sm:py-4 animate-pulse">
              PRESS START
            </Button>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default Home;