import React from 'react';
import { motion } from 'framer-motion';

const PixelWipe = () => {
  return (
    <>
      <motion.div
        className="pixel-wipe"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
      />
      <motion.div
        className="pixel-wipe"
        style={{ background: 'var(--pixel-dark)', transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
      />
    </>
  );
};

export default PixelWipe;