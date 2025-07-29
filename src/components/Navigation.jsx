import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, onNavClick, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    onNavClick(section);
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--pixel-bg)]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-3 border-b-4 border-[var(--pixel-dark)]">
          <div className="flex items-center justify-between">
            <motion.div
              className="pixel-font text-xl sm:text-2xl text-[var(--pixel-accent-3)] text-shadow-hard"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              ANANTRAJ.EXE
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-2">
              {links.map((section) => (
                <motion.button
                  key={section}
                  onClick={() => handleLinkClick(section)}
                  className={`pixel-font text-sm transition-colors duration-200 px-3 py-1 ${
                    activeSection === section 
                      ? 'bg-[var(--pixel-accent-4)] text-black' 
                      : 'text-white hover:bg-[var(--pixel-light)]'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 w-full h-screen bg-[var(--pixel-bg)] z-40 pt-24 px-8 flex flex-col items-center"
          >
            {links.map((section) => (
              <motion.button
                key={section}
                onClick={() => handleLinkClick(section)}
                className={`pixel-font text-3xl my-4 ${
                  activeSection === section 
                    ? 'text-[var(--pixel-accent-4)]' 
                    : 'text-white'
                }`}
                variants={linkVariants}
              >
                {`[ ${section} ]`}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
