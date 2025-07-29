import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--pixel-dark)] py-8 mt-16">
      <div className="container mx-auto px-4 text-center text-white">
        <div className="flex justify-center items-center space-x-6 mb-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--pixel-accent-4)] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.2 }}
            >
              <link.icon className="w-8 h-8" />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="pixel-font">© {currentYear} Anantraj Prasad.</span> All Rights Reserved.
        </motion.p>
        <motion.p
          className="text-sm text-[var(--pixel-light)] mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Designed & Built in a Retro Universe
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;